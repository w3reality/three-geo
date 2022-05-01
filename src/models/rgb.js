import Fetch from './fetch.js';
import SphericalMercator from '@mapbox/sphericalmercator';
import * as THREE from 'three';

const constVertices = 128;
const constTilePixels = new SphericalMercator({size: 128});

const computeSeamRows = shift => {
    let totalCount = 49152; // 128 * 128 * 3
    let rowCount = 384; // 128 * 3
    let rows = [[],[],[],[]];
    for (let c = 0; c < rowCount; c += 3) {
        // 0, 1, 2, 3; north, west, south, east; +y, -x, -y, +x
        rows[0].push(c+1+shift);
        rows[1].push(c/3*(rowCount)+1+shift);
        rows[2].push(c+1+totalCount-rowCount+shift);
        rows[3].push((c/3+1)*(rowCount)-2+shift);
    }
    return rows;
};
const constSeamRows = computeSeamRows(1);
// use shift = 0 when array's format is [x0, z0, y0, x1, z1, y1, ... x127, z127, y127]
// 0: Array(128) [1, 4, 7, 10, 13, 16, 19, 22, ... 379, 382]
// 1: Array(128) [1, 385, 769, 1153, 1537, 1921, 2305, 2689, ... 48385, 48769]
// 2: Array(128) [48769, 48772, 48775, 48778, 48781, 48784, 48787, 48790, ... 49147, 49150]
// 3: Array(128) [382, 766, 1150, 1534, 1918, 2302, 2686, 3070, ... 48766, 49150]
// use shift = 1 when array's format is [x0, y0, z0, x1, y1, z1, ... x127, y127, z127]
// 0: Array(128) [2, 5, 8, 11, ... 380, 383]
// 1: Array(128) [2, 386, 770, 1154, ... 48386, 48770]
// 2: Array(128) [48770, 48773, 48776, 48779, ... 49148, 49151]
// 3: Array(128) [383, 767, 1151, 1535, ... 48767, 49151]

const sixteenthPixelRanges = (() => {
    let cols = 512;
    let rows = 512;
    let scaleFactor = 4;
    let ranges = [];
    for (let c = 0; c < scaleFactor; c++) {
        for (let r = 0; r < scaleFactor; r++) {
            ranges.push([
                [r*(rows/scaleFactor-1)+r, (r+1)*rows/scaleFactor],
                [c*(cols/scaleFactor-1)+c, (c+1)*cols/scaleFactor]
            ]);
        }
    };
    return ranges;
})();
// 0 [0, 128] [0, 128]
// 1 [128, 256] [0, 128]
// 2 [256, 384] [0, 128]
// 3 [384, 512] [0, 128]
// 4 [0, 128] [128, 256]
// ...
// 12 [0, 128] [384, 512]
// 13 [128, 256] [384, 512]
// 14 [256, 384] [384, 512]
// 15 [384, 512] [384, 512]

class RgbModel {
    constructor(params) {
        // static parameters
        this.unitsPerMeter = params.unitsPerMeter;
        this.projectCoord = params.projectCoord;
        this.token = params.token;
        this.isNode = params.isNode;
        this.isDebug = params.isDebug;
        this.apiRgb = params.apiRgb;
        this.apiSatellite = params.apiSatellite;

        // callbacks
        this.onRgbDem = params.onRgbDem;
        this.onSatelliteMat = params.onSatelliteMat;
        this.watcher = params.watcher;

        // state variables
        this.dataEleCovered = [];
    }

    fetch(zpCovered, bbox) {
        // e.g. satellite's zoom: 14
        //      dem's zoom: 12 (=14-2)
        const zpEle = Fetch.getZoomposEle(zpCovered);
        console.log('RgbModel: zpEle:', zpEle);

        let count = 0;
        zpEle.forEach(async zoompos => {
            const tile = await Fetch.fetchTile(zoompos, this.apiRgb, this.token, this.isNode);
            if (tile !== null) {
                this.addTile(tile, zoompos, zpCovered, bbox);
            } else {
                console.log(`fetchTile() failed for rgb dem of zp: ${zoompos} (count: ${count}/${zpEle.length})`);
            }

            count++;
            if (count === zpEle.length) {
                this.build();
            }
        });
    }

    addTile(tile, zoomposEle, zpCovered, bbox) {
        this.dataEleCovered = this.dataEleCovered.concat(
            this._addTile(tile, zoomposEle, zpCovered, bbox));
        console.log(`now ${this.dataEleCovered.length} satellite tiles in dataEleCovered`);
    }

    _addTile(pixels, zoomposEle, zpCovered, bbox) {
        const { unitsPerMeter, projectCoord } = this;

        let elevations = [];
        if (pixels) {
            let R, G, B;
            for (let e = 0; e < pixels.data.length; e += 4) {
                R = pixels.data[e];
                G = pixels.data[e+1];
                B = pixels.data[e+2];
                elevations.push(-10000 + ((R * 256 * 256 + G * 256 + B) * 0.1));
            }
        } else {
            elevations = new Array(262144).fill(0); // 512 * 512 (=1/4 MB)
        }
        // console.log('elevations:', elevations); // elevations: (262144) [...]

        // figure out tile coordinates of the 16 grandchildren of this tile
        let sixteenths = [];
        for (let col = 0; col < 4; col++) {
            for (let row = 0; row < 4; row++) {
                sixteenths.push([
                    zoomposEle[0] + 2,
                    zoomposEle[1] * 4 + col,
                    zoomposEle[2] * 4 + row].join('/'));
            }
        }

        let zpCoveredStr = zpCovered.map((zp) => { return zp.join('/'); });

        const dataEle = [];
        sixteenths.forEach((zoomposStr, index) => {
            if (!zpCoveredStr.includes(zoomposStr)) return;

            let zoompos = zoomposStr.split('/').map(str => parseInt(str));
            let pxRange = sixteenthPixelRanges[index];
            let elev = [];

            for (let r = pxRange[0][0]; r < pxRange[0][1]; r++) {
                for (let c = pxRange[1][0]; c < pxRange[1][1]; c++) {
                    elev.push(elevations[r * 512 + c]);
                }
            }
            // console.log('elev:', elev); // 16384 = 128 * 128 elements

            let array = [];
            let dataIndex = 0;
            for (let row = 0; row < constVertices; row++) {
                for (let col = 0; col < constVertices; col++) {
                    let lonlatPixel = constTilePixels.ll([
                        zoompos[1] * 128 + col,
                        zoompos[2] * 128 + row
                    ], zoompos[0]);
                    // console.log('lonlatPixel:', lonlatPixel);
                    // NOTE: do use shift = 1 for computeSeamRows()
                    array.push(
                        ...projectCoord(lonlatPixel, bbox.northWest, bbox.southEast),
                        elev[dataIndex] * unitsPerMeter);
                    dataIndex++;
                }
            }
            // console.log('zoompos, array:', zoompos, array); // 49152 = 128*128*3 elements
            dataEle.push([zoompos, array, zoomposEle]);
        });
        // console.log('dataEle:', dataEle);
        return dataEle;
    }

    static _stitchWithNei2(array, arrayNei) {
        // add a new south row
        for (let i = 0; i < constVertices; i++) {
            let indexZ = constSeamRows[2][i] + constVertices*3; // new south row
            let indexZNei = constSeamRows[0][i];                // north row to copy
            array[indexZ-2] = arrayNei[indexZNei-2];            // a new x
            array[indexZ-1] = arrayNei[indexZNei-1];            // a new y
            array[indexZ] = arrayNei[indexZNei];                // a new z
        }
    }

    static _stitchWithNei3(array, arrayNei) {
        // add a new east col
        for (let i = 0; i < constVertices; i++) {
            let indexZ = constSeamRows[3][i] + (1+i)*3;         // new east col
            let indexZNei = constSeamRows[1][i];                // west col to copy
            array.splice(indexZ-2, 0, arrayNei[indexZNei-2]);
            array.splice(indexZ-1, 0, arrayNei[indexZNei-1]);
            array.splice(indexZ, 0, arrayNei[indexZNei]);
        }
    }

    static resolveSeams(array, infoNei) {
        let cSegments = [constVertices-1, constVertices-1];

        Object.entries(infoNei).forEach(([idxNei, arrayNei]) => {
            if (idxNei === "2") {
                this._stitchWithNei2(array, arrayNei);
                cSegments[1]++;
            } else if (idxNei === "3") {
                this._stitchWithNei3(array, arrayNei);
                cSegments[0]++;
            }
        });

        if (cSegments[0] === constVertices &&
            cSegments[1] === constVertices) {
            // Both _stitchWithNei2() and _stitchWithNei3() were
            // applided to this array.  Need filling a diagonal pothole.
            // console.log('filling a pothole...');
            let arrayNei6 = infoNei["6"];
            if (arrayNei6) {
                array.push(arrayNei6[0], arrayNei6[1], arrayNei6[2]);
            } else {
                // filling with a degenerated triangle
                let len = array.length;
                array.push(array[len-3], array[len-2], array[len-1]);
            }
        }
        return cSegments;
    }

    static createDataFlipY(data, shape) {
        const [w, h, size] = shape;
        const out = new Uint8Array(data.length);
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w * size; x += size) {
                for (let i = 0; i < size; i++) {
                    out[(h-1-y) * w * size + x + i] = data[y * w * size + x + i];
                }
            }
        }
        return out;
    }

    static getNeighborsInfo(dataEle, dataEleIds, zoompos) {
        const infoNei = {};
        this.getNeighbors8(zoompos).forEach((zoomposNei, idxNei) => {
            const id = zoomposNei.join('/');
            if (id in dataEleIds) {
                const arrayNei = dataEle[dataEleIds[id]][1];
                // console.log('real neighbor yes:', zoomposNei, idxNei, arrayNei);
                infoNei[idxNei] = arrayNei;
            }
        });
        return infoNei;
    }

    static getNeighbors8(zoompos) {
        // 8-neighbors:
        // 4 0 7
        // 1 + 3
        // 5 2 6

        // 0, 1, 2, 3: north, west, south, east; +y, -x, -y, +x
        // 4, 5, 6, 7: diagonal neighbors
        const zoomposNeighborsDiff = [
            [0, 0, -1], [0, -1, 0], [0, 0, 1], [0, 1, 0],
            [0, -1, -1], [0, -1, 1], [0, 1, 1], [0, 1, -1],
        ];
        const neighbors = [];
        zoomposNeighborsDiff.forEach(zoomposDiff => {
            const zoomposNei = zoomposDiff.map(
                (coord, idxCoord) => coord + zoompos[idxCoord]);
            // console.log('8-neighbor candidate:', zoomposNei);
            neighbors.push(zoomposNei);
        });
        return neighbors;
    }

    build() {
        const debug = this.isDebug ? {} : undefined;

        console.log('dataEleCovered:', this.dataEleCovered);

        if (this.dataEleCovered.length === 0) {
            const meshes = [];
            this.onRgbDem(meshes);
            this.watcher({ what: 'dem-rgb', data: meshes, debug });
            return;
        }

        let onSatelliteMatWrapper = null;
        if (this.onSatelliteMat) {
            let countSat = 0;
            onSatelliteMatWrapper = (mesh, meshesAcc) => {
                countSat++;

                this.onSatelliteMat(mesh); // legacy API

                if (countSat === this.dataEleCovered.length) {
                    this.watcher({ what: 'dem-rgb', data: meshesAcc, debug });
                }
            };
        }

        const meshes = RgbModel._build(
            this.dataEleCovered, this.apiSatellite,
            this.token, this.isNode, onSatelliteMatWrapper);

        this.onRgbDem(meshes); // legacy API

        if (!onSatelliteMatWrapper) {
            this.watcher({ what: 'dem-rgb', data: meshes, debug });
        }
    }

    static _build(dataEle, apiSatellite, token, isNode, onSatelliteMatWrapper) {
        console.log('apiSatellite:', apiSatellite);

        // dataEle should be sorted so that .resolveSeams() is applied
        // in the proper order, or the results will have broken stripes
        // due to _stitchWithNei3()
        dataEle.sort((zp1, zp2) => zp1[0].join('/') > zp2[0].join('/') ? 1 : -1);
        // console.log('dataEle (sorted):', dataEle);

        const dataEleIds = {};
        dataEle.forEach((data, idx) => { dataEleIds[data[0].join('/')] = idx; });
        // console.log('dataEleIds:', dataEleIds);

        const objs = [];
        dataEle.forEach(([zoompos, arr, zoomposEle]) => {
            // console.log(zoompos, arr); // a 16th of zoomposEle
            if (arr.length !== constVertices * constVertices * 3) {
                // assumtion on the size of the arr failed...
                console.log('woops: already seams resolved? or what..., NOP');
                return;
            }

            // console.log('dealing with the seams of:', zoompos);
            let cSegments = this.resolveSeams(
                arr, this.getNeighborsInfo(dataEle, dataEleIds, zoompos));
            console.log('cSegments:', cSegments);
            // w and h don't matter since position.array is being overwritten

            let geom = new THREE.PlaneBufferGeometry(
                1, 1, cSegments[0], cSegments[1]);
            geom.attributes.position.array = new Float32Array(arr);

            // test identifying a 127x1 "belt"
            // let geom = new THREE.PlaneBufferGeometry(1, 1, 127, 1);
            // let arrBelt = arr;
            // arrBelt.length = 128*2*3;
            // geom.attributes.position.array = new Float32Array(arrBelt);

            let plane = new THREE.Mesh(geom,
                new THREE.MeshBasicMaterial({
                    wireframe: true,
                    color: 0xcccccc,
                }));
            plane.name = `dem-rgb-${zoompos.join('/')}`;
            const _toTile = zp => [zp[1], zp[2], zp[0]];
            plane.userData.threeGeo = {
                tile: _toTile(zoompos),
                srcDem: {
                    tile: _toTile(zoomposEle),
                    uri: Fetch.getUriMapbox(token, 'mapbox-terrain-rgb', zoomposEle),
                },
            };
            objs.push(plane);

            this.resolveTex(zoompos, apiSatellite, token, isNode, tex => {
                //console.log(`resolve tex done for ${zoompos}`);
                if (tex) {
                    plane.material = new THREE.MeshBasicMaterial({
                        side: THREE.FrontSide,
                        // side: THREE.DoubleSide,
                        map: tex,
                    });
                }

                if (onSatelliteMatWrapper) {
                    onSatelliteMatWrapper(plane, objs);
                }
            });
        });
        return objs;
    }

    //==== THREE specific
    // _buildModelThree() {} // TODO (refactor)
    static async resolveTex(zoompos, apiSatellite, token, isNode, onTex) {
        const pixels = await Fetch.fetchTile(zoompos, apiSatellite, token, isNode);

        let tex = null;
        if (pixels !== null) {
            // console.log("satellite pixels", pixels.shape.slice(0));
            // console.log('satellite pixels:', pixels);
            // https://threejs.org/docs/#api/textures/DataTexture

            //==== On Firefox, calling it with y-flip causes the warning: "Error: WebGL warning: texImage2D: Alpha-premult and y-flip are deprecated for non-DOM-Element uploads."
            // tex = new THREE.DataTexture(pixels.data,
            //     pixels.shape[0], pixels.shape[1], THREE.RGBAFormat);
            // tex.flipY = true;
            //==== workaround: do manual y-flip
            tex = new THREE.DataTexture(this.createDataFlipY(pixels.data, pixels.shape),
                pixels.shape[0], pixels.shape[1], THREE.RGBAFormat);

            tex.needsUpdate = true;
        } else {
            console.log(`fetchTile() failed for tex of zp: ${zoompos}`);
        }

        if (onTex) {
            onTex(tex);
        }
    }
}

export default RgbModel;