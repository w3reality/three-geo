// if THREE is global (via script-tag loading), use that THREE to prevent
// conflicts with ES6 version. (Line objects become broken, otherwise...)
import * as THREE_ES6 from 'three';
// console.log('window.THREE:', window.THREE);
const THREE = window.THREE ? window.THREE : THREE_ES6;

// import * as turf from '@turf/turf'; // need being more selective - http://turfjs.org/getting-started/
// import { intersect } from '@turf/turf'; // TEST of tree-shaking, not working... FIXME
// console.log('turf:', turf);
//========
import * as turfHelpers from '@turf/helpers';
// console.log('turfHelpers:', turfHelpers);
import turfTransformTranslate from '@turf/transform-translate';

//======== FIXME try v7 in future??
// v5 approach introduces jsts.min.js causing bloat (to 482KB)
// https://github.com/Turfjs/turf/issues/1392#issuecomment-403189175
// @turf/union v5.1.5 ok; v6 fails (broken at ele 1160 for the river data)......
import turfUnion from '@turf/union';
//======== NG
// manually construct union op with turf-jsts
// --> more bloats than the above (v5) and a uglifyjs problem
// use ./turf-union-jsts-es6.js
// see how union is implemented with jsts -- node_modules/@turf/union
// https://gis.stackexchange.com/questions/283806/creating-buffers-using-jsts-es6-modules-not-working
// https://github.com/DenisCarriere/jsts-es6-example
// import turfUnion from './turf-union-jsts-es6'
// window.turfUnion = turfUnion;
// window.p1 = turfHelpers.polygon([[
//     [-82.574787, 35.594087],
//     [-82.574787, 35.615581],
//     [-82.545261, 35.615581],
//     [-82.545261, 35.594087],
//     [-82.574787, 35.594087]
// ]], {"fill": "#0f0"});
// window.p2 = turfHelpers.polygon([[
//     [-82.560024, 35.585153],
//     [-82.560024, 35.602602],
//     [-82.52964, 35.602602],
//     [-82.52964, 35.585153],
//     [-82.560024, 35.585153]
// ]], {"fill": "#0f0"});
// console.log('turfUnion:', turfUnion);
// console.log('turfUnion(p1, p2):', turfUnion(p1, p2));

import turfArea from '@turf/area';
import turfDestination from '@turf/destination';

// turf.intersect (v5.1.6) fails in case MultiPolygon -- https://github.com/Turfjs/turf/issues/702
// so, use this module version with recent fix instead
import turfIntersect from '@turf/intersect';
// console.log('turfIntersect:', turfIntersect);

import cover from '@mapbox/tile-cover';
import xhr from 'xhr';
import Pbf from 'pbf';
import { VectorTile } from '@mapbox/vector-tile';
import uniq from 'uniq';
import tilebelt from "@mapbox/tilebelt";

// no longer used; see colorRangeNonD3()
// import * as d3 from 'd3'; // be more selective - https://github.com/d3/d3
// import { scaleLinear, interpolateRgb } from 'd3'; // not much difference...
// console.log('d3:', d3);

import getPixels from 'get-pixels';
import SphericalMercator from '@mapbox/sphericalmercator';

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

const constVertices = 128;
const constTilePixels = new SphericalMercator({size: 128});
// console.log('constTilePixels:', constTilePixels);

// const constBasePlaneDimension = 65024; // 2**16 - 1
// const getTileSize = (zoom) => {
//     return constBasePlaneDimension / Math.pow(2, zoom);
// };
// const getMetersPerPixel = (latitude, tileSize, zoom) => {
//     // 40,075,000 = circumference of the Earth in meters
//     return Math.abs(
//         40075000 * Math.cos(latitude*Math.PI/180) /
//         (Math.pow(2,zoom) * tileSize));
// };

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
const computeSeamRows = (shift) => {
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
// console.log('constSeamRows:', constSeamRows);

class ThreeGeo {
    constructor(opts={}) {
        let defaults = {
            unitsSide: 1.0,
            tokenMapbox: "",
            apiVector: 'mapbox-terrain-vector',
            apiRgb: 'mapbox-terrain-rgb',
            apiSatellite: 'mapbox-satellite',
        };
        let actual = Object.assign({}, defaults, opts);
        this.constUnitsSide = actual.unitsSide;
        this.tokenMapbox = actual.tokenMapbox;
        this.apiVector = actual.apiVector;
        this.apiRgb = actual.apiRgb;
        this.apiSatellite = actual.apiSatellite;
    }

    static getEleList(geojson) {
        let mapper = (feature) => { return feature.properties.ele; };
        return uniq(geojson.features.map(mapper))
            .sort((a, b) => { return a - b; });
    }
    static addBottomEle(geojson, bottomTiles, eleList) {
        bottomTiles.forEach((bottom) => {
            let tileBottomEle = bottom.properties.ele;
            for (let k = eleList[0]; k < tileBottomEle; k += 10) {
                // console.log('k:', k);
                geojson.features.push({
                    type: "Feature",
                    geometry: bottom.geometry,
                    properties: {ele: k},
                });
            }
        });
    }
    static getContours(eleList, geojson, polygon, maxArea) {
        let contours = [];

        // iterate through elevations, and merge polys of the same elevation
        for (let x = 0; x < eleList.length; x++) {
            // console.log(`getContours(): ${x}/${eleList.length}`);
            let currentElevation = eleList[x];
            let elevationPolys = geojson.features.filter((feature) => {
                return feature.properties.ele === currentElevation;
            });

            try { // merge between tiles
                let feats = turfHelpers.featureCollection(elevationPolys).features;
                // console.log(currentElevation, feats.length, feats);
                // feats.forEach(feat => { console.log('type:', feat.geometry.type); }); // 'Polygon'

                let mergedElevationPoly = feats.reduce(((accm, feat) => turfUnion(accm, feat)), feats[0]);
                // console.log('@@@', mergedElevationPoly, currentElevation);

                if (0) { // trim to desired search area
                    mergedElevationPoly = turfIntersect( // use module version instead
                        polygon, mergedElevationPoly);
                    // console.log('@@@', polygon);
                }

                // console.log('@@@mergedElevationPoly:', mergedElevationPoly);
                if (mergedElevationPoly) {
                    // console.log('@@@merge success', currentElevation);
                    let contourArea = turfArea(mergedElevationPoly.geometry);
                    // L.mapbox.featureLayer().setGeoJSON(mergedElevationPoly).addTo(map);

                    contours.push({
                        'geometry': mergedElevationPoly,
                        'ele': currentElevation,
                        'area': contourArea,
                    });
                }
            } catch (error) { // on merge fail, insert the previous contour again and skip
                console.log('merge failed at elevation '+currentElevation);
                console.log(error.message);
            }
        }

        // remove contour undercuts
        if (0) {
            for (let m = contours.length-2; m >= 0; m--) {
                let currContour = contours[m];
                let prevContour = contours[m+1];
                if (currContour.area >= maxArea && prevContour.area >= maxArea) {
                    console.log('max area reached! ele, area:', currContour.ele, currContour.area);
                    contours = contours.slice(m+1);
                    break;
                }
            }
        }

        return contours;
    }
    // TODO doc
    static getUnitsPerMeter(unitsSide, radius) {
        return unitsSide / (radius * Math.pow(2, 0.5) * 1000);
    }
    projectCoord(coord, nw, se) { // lng, lat -> px, py
        return [
            this.constUnitsSide * (1 - (coord[0]-nw[0]) / (se[0]-nw[0])),
            - this.constUnitsSide *    (coord[1]-se[1]) / (se[1]-nw[1])
        ];
    }
    // TODO doc
    static translate(turfObj, dx, dy, dz, unitsPerMeter, mutate=true) {
        const vec = new THREE.Vector2(dx, dy).divideScalar(unitsPerMeter);
        const theta = 90.0 - vec.angle() * 180.0 / Math.PI;
        return turfTransformTranslate(turfObj, vec.length(), theta, {
                units: 'meters',
                zTranslation: dz / unitsPerMeter,
                mutate: mutate, // "significant performance increase if true" per doc
            });
    }
    // TODO doc
    static projInv(x, y, origin, unitsPerMeter) {
        const _swap = ll => [ll[1], ll[0]]; // leaflet: ltlg, turf: lglt
        return _swap(this.translate(
            turfHelpers.point(_swap(origin)),
            x, y, 0, unitsPerMeter).geometry.coordinates);
    }
    // TODO doc
    // TODO add inverse projection; use ThreeGeo.translate()
    getProjection(origin, radius) {
        const [w, s, e, n] = ThreeGeo.originRadiusToBbox(origin, radius);
        const _unitsPerMeter = ThreeGeo.getUnitsPerMeter(this.constUnitsSide, radius);
        return {
            proj: ll => {
                const [px, py] = this.projectCoord(ll, [w, n], [e, s]);
                return [
                    - px + this.constUnitsSide / 2,
                    py - this.constUnitsSide / 2
                ];
            },
            projInv: (x, y) => ThreeGeo.projInv(x, y, origin, _unitsPerMeter),
            bbox: [w, s, e, n],
            unitsPerMeter: _unitsPerMeter,
        };
    }
    // TODO doc
    static bboxToWireframe(wsen, proj, opts={}) {
        const defaults = {
            offsetZ: 0.0,
            color: 0x00cccc,
            height: 0.001,
        };
        const actual = Object.assign({}, defaults, opts);

        const [w, s, e, n] = wsen; // of bbox
        // console.log('wsen:', wsen);
        const offset = proj([(w+e)/2, (s+n)/2]); // lng, lat -> x, y
        // console.log('offset:', offset);

        const [pw, pn, pe, ps] = [...proj([w, n]), ...proj([e, s])];
        // console.log('pw, pn, pe, ps:', pw, pn, pe, ps);
        // const sides = [0.05, 0.05]; // show the mid point
        const sides = [pe - pw, pn - ps];

        const dzBounds = actual.height;
        const ls = new THREE.LineSegments(
            new THREE.EdgesGeometry(new THREE.BoxBufferGeometry(
                ...sides, dzBounds)),
            new THREE.LineBasicMaterial({color: actual.color}));
        ls.position.set(...offset, - dzBounds / 2 + actual.offsetZ);
        ls.name = `bbox-${window.performance.now()}`;
        return {
            obj: ls,
            offset: [...offset, actual.offsetZ],
            size: [...sides, actual.height],
        };
    }
    // TODO doc
    static tileToBbox(tile) {
        return tilebelt.tileToBBOX(tile);
    }

    buildSliceGeometry(coords, iContour, color,
        contours, nw, se, radius) {
        const shadedContour = new THREE.Shape();
        const wireframeContours = [new THREE.Geometry()];

        const h = iContour;
        const unitsPerMeter = ThreeGeo.getUnitsPerMeter(this.constUnitsSide, radius);
        const pz = - contours[h].ele * unitsPerMeter;

        // iterate through vertices per shape
        // console.log('coords[0]:', coords[0]);
        coords[0].forEach((coord, index) => {
            let [px, py] = this.projectCoord(coord, nw, se);
            wireframeContours[0].vertices.push(
                new THREE.Vector3(px, py, pz));
            if (index === 0) {
                shadedContour.moveTo(px, py);
            } else {
                shadedContour.lineTo(px, py);
            }
        });

        // carve out holes (if none, would automatically skip this)
        for (let k = 1; k < coords.length; k++) {
            // console.log('holes');
            let holePath = new THREE.Path();
            wireframeContours.push(new THREE.Geometry());

            // iterate through hole path vertices
            for (let j = 0; j < coords[k].length; j++) {
                let [px, py] = this.projectCoord(coords[k][j], nw, se);
                wireframeContours[k].vertices.push(
                    new THREE.Vector3(px, py, pz));
                if (j === 0) {
                    holePath.moveTo(px, py);
                } else {
                    holePath.lineTo(px, py);
                }
            }
            shadedContour.holes.push(holePath);
        }

        const lines = [];
        wireframeContours.forEach((_loop, _index) => {
            let line = new THREE.Line(
                wireframeContours[0],
                new THREE.LineBasicMaterial({
                    color: 0xcccccc
                }));

            //======== align x-y : east-north
            line.rotation.y = Math.PI;
            line.position.x = this.constUnitsSide/2;
            line.position.y = -this.constUnitsSide/2;
            line.name = `dem-vec-line-${contours[h].ele}-${line.uuid}`;

            // line.visible = false;
            lines.push(line);
        });

        let extrudeGeom = new THREE.ExtrudeGeometry(shadedContour, {
            depth: contours[h+1] ?
                unitsPerMeter * (contours[h+1].ele - contours[h].ele) :
                unitsPerMeter * (contours[h].ele - contours[h-1].ele),
            bevelEnabled: false,
        });
        let extrudeShade = new THREE.Mesh(
            extrudeGeom, new THREE.MeshBasicMaterial({
                color: color,
                wireframe: false,
                // wireframe: true,
            }),
        );

        //======== align x-y : east-north
        extrudeShade.rotation.y = Math.PI;
        extrudeShade.position.x = this.constUnitsSide/2;
        extrudeShade.position.y = -this.constUnitsSide/2;
        extrudeShade.position.z = -pz;
        extrudeShade.name = `dem-vec-shade-${contours[h].ele}-${extrudeShade.uuid}`;

        return [lines, extrudeShade];
    }
    getVectorDem(contours, northWest, southEast, radius) {
        // console.log('getVectorDem():', contours, northWest, southEast, radius);

        // deprecated to remove the d3 dependency (save ~125KB)
        // const colorRange = d3.scaleLinear()
        //     .domain([0, contours.length])
        //     .interpolate(d3.interpolateRgb)
        //     .range(["#231918", "#ed6356"]);
        //========
        const _getColorRange = (range, len) => {
            const _rgb = hex => [hex >> 16, (hex & 0x00ff00) >> 8, hex & 0x0000ff];
            const arrStart = _rgb(range[0]);
            const arrDiff = _rgb(range[1] - range[0]);
            return (ic) => {
                let r = arrStart[0] + Math.floor(ic * arrDiff[0] / len);
                let g = arrStart[1] + Math.floor(ic * arrDiff[1] / len);
                let b = arrStart[2] + Math.floor(ic * arrDiff[2] / len);
                // console.log('r g b:', r, g, b);
                return (r << 16) + (g << 8) + b;
            };
        };
        const colorRange = _getColorRange(
            [0x231918, 0xed6356], contours.length);

        const objs = [];
        const addSlice = (coords, ic) => {
            // console.log('coords:', coords);
            let [lines, extrudeShade] = this.buildSliceGeometry(
                coords, ic, colorRange(ic),
                contours, northWest, southEast, radius);
            lines.forEach((line) => { objs.push(line); });
            objs.push(extrudeShade);
        };

        // iterate through elevations
        for (let ic = 0; ic < contours.length; ic++) {
            let level = contours[ic].geometry.geometry;
            // if (ic !== 110) continue; // debug

            // console.log('level.type:', level.type);
            if (level.type === 'Polygon') {
                addSlice(level.coordinates, ic);
            } else if (level.type === 'MultiPolygon') {
                // iterate through shapes per elevation
                for (let i = 0; i < level.coordinates.length; i++) {
                    addSlice(level.coordinates[i], ic);
                }
            }
        }
        return objs;
    }

    static dumpBufferAsBlob(buffer, name) {
        // https://discourse.threejs.org/t/how-to-create-a-new-file-and-save-it-with-arraybuffer-content/628/2
        let file = new Blob([buffer], {type: "application/octet-stream"});
        let anc = document.createElement("a");
        anc.href = URL.createObjectURL(file);
        anc.download = name;
        document.body.appendChild(anc);
        anc.click();
    }
    static blobToBuffer(blob, cb) {
        // https://stackoverflow.com/questions/15341912/how-to-go-from-blob-to-arraybuffer
        let fr = new FileReader();
        fr.onload = (e) => {
            let buffer = e.target.result;
            cb(buffer);
        };
        fr.readAsArrayBuffer(blob);
    }

    static getUriOffline(api, zoompos) {
        return `${api}-${zoompos.join('-')}.blob`;
    }
    static getUriMapbox(token, api, zoompos) {
        let prefix, res;
        switch (api) {
            case 'mapbox-terrain-vector':
                prefix = 'https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2';
                res = '.vector.pbf';
                break;
            case 'mapbox-terrain-rgb':
                prefix = `https://api.mapbox.com/v4/mapbox.terrain-rgb`;
                res = '@2x.pngraw';
                break;
            case 'mapbox-satellite':
                prefix = `https://api.mapbox.com/v4/mapbox.streets-satellite`;
                // https://www.mapbox.com/api-documentation/#retrieve-tiles
                // mapbox-satellite-14-3072-6420.blob
                // res = '@2x.png'; // 176813 (will get a jpg by spec)
                // res = '@2x.jpg90'; // 132759
                // res = '@2x.jpg80';
                res = '@2x.jpg70'; // 72828
                break;
            default:
                console.log('unsupported api:', api);
                return '';
        }
        return `${prefix}/${zoompos.join('/')}${res}?access_token=${token}`;
    }

    static isAjaxSuccessful(stat) {
        console.log('stat:', stat);
        // https://stackoverflow.com/questions/21756910/how-to-use-status-codes-200-404-300-how-jquery-done-and-fail-work-internally
        return stat >= 200 && stat < 300 || stat === 304;
    }
    static fetchTile(zoompos, api, token, cb) {
        let isOnline = api.startsWith('mapbox-');
        let uri = isOnline ?
            this.getUriMapbox(token, api, zoompos) :
            this.getUriOffline(api, zoompos);

        const xhrDumpBlob = (uri, api, zoompos) => {
            xhr({uri: uri, responseType: 'arraybuffer'}, (error, response, buffer) => {
                if (error || !this.isAjaxSuccessful(response.statusCode)) {
                    console.log(`xhrDumpBlob(): failed for uri: ${uri}`);
                    return;
                }

                let name = `${api}-${zoompos.join('-')}.blob`;
                this.dumpBufferAsBlob(buffer, name);
            });
        };
        const dumpBlobForDebug = 0;

        if (api.includes('mapbox-terrain-vector')) {
            if (isOnline) {
                if (dumpBlobForDebug) {
                    xhrDumpBlob(uri, api, zoompos);
                    // return;
                }
                xhr({uri: uri, responseType: 'arraybuffer'}, (error, response, buffer) => {
                    if (error || !this.isAjaxSuccessful(response.statusCode)) {
                        cb(null);
                        return;
                    }
                    // console.log('mapbox -> buffer:', buffer); // ArrayBuffer(39353) {}
                    cb(new VectorTile(new Pbf(buffer)));
                });
            } else {
                xhr({uri: uri, responseType: 'blob'}, (error, response, blob) => {
                    // console.log('error, response, blob:', error, response, blob);
                    if (error || !this.isAjaxSuccessful(response.statusCode)) {
                        cb(null);
                        return;
                    }
                    this.blobToBuffer(blob, (buffer) => {
                        // console.log('blob -> buffer:', buffer); // ArrayBuffer(39353) {}
                        try {
                            let pbf = new Pbf(buffer);
                            cb(new VectorTile(pbf));
                        } catch (e) {
                            // console.log('e:', e);
                            cb(null);
                            return;
                        }
                    });
                });
            }
        } else if (api.includes('mapbox-terrain-rgb') ||
                api.includes('mapbox-satellite')) {

            // if (isOnline && dumpBlobForDebug && api.includes('mapbox-terrain-rgb')) {
            // if (isOnline && dumpBlobForDebug && api.includes('mapbox-satellite')) {
            if (isOnline && dumpBlobForDebug) {
                xhrDumpBlob(uri, api, zoompos);
                // return;
            }

            // console.log('uri:', uri);
            getPixels(uri, (err, pixels) => {
                if (err) {
                    console.log("Bad image uri:", uri);
                    cb(null);
                    return;
                }
                // console.log("got pixels", pixels.shape.slice());
                cb(pixels);
            });
        } else {
            console.log('nop, unsupported api:', api);
        }
    }

    // Zoom extent - https://www.mapbox.com/studio/tilesets/
    // satellite:  z0 ~ z22
    // rgb dem:    z0 ~ z15
    // vector dem: z0 ~ z15
    static getZoomposCovered(polygon, zoom) { // isochrone polygon
        // https://www.mapbox.com/vector-tiles/mapbox-terrain/#contour
        // Zoom level  Contour Interval
        // 9  500 meters
        // 10  200 meters
        // 11  100 meters
        // 12  50 meters
        // 13  20 meters
        // 14+  10 meters
        let limits = {
            min_zoom: zoom,
            max_zoom: zoom,
        };
        return cover.tiles(polygon.geometry, limits) // poszoom
            .map(([x, y, z]) => { return [z, x, y]; }); // zoompos now!!
    }
    static getZoomposEle(zpArray) {
        // compute elevation tiles belonging to the gradparent zoom level
        let elevations = {};
        zpArray.forEach((zoompos) => {
            let grandparent = [
                zoompos[0]-2,
                Math.floor(zoompos[1]/4),
                Math.floor(zoompos[2]/4)];
            if (elevations[grandparent]) {
                elevations[grandparent].push(zoompos);
            } else {
                elevations[grandparent] = [zoompos];
            }
        });
        // console.log('elevations:', elevations);

        let zpEle = Object.keys(elevations)
            .map((triplet) => {
                return triplet.split(',').map((num) => {
                    return parseFloat(num);
                });
            });
        // console.log('zpEle:', zpEle);
        return zpEle;
    }

    static processVectorTile(tile, zoompos, geojson, bottomTiles) {
        const contour = tile.layers.contour;
        if (! contour) { // zoom <= 8
            console.log(`processVectorTile(): no contours! (zoom=${zoompos[0]})`);
            return;
        }

        //populate geoJSON
        for (let i = 0; i < tile.layers.contour.length; i++) {
            // convert each feature (within #population) into a geoJSON polygon,
            // and push it into our variable
            let feature = tile.layers.contour.feature(i)
                .toGeoJSON(zoompos[1], zoompos[2], zoompos[0]);
            if (i === 0) {
                bottomTiles.push(feature);
            }

            // break multigons into multiple polygons
            if (feature.geometry.type === 'MultiPolygon') {
                feature.geometry.coordinates.forEach((polygon) => {
                    let feat = {
                        type: 'Feature',
                        properties: {ele: feature.properties.ele},
                        geometry: {type: 'Polygon', coordinates: polygon},
                    };
                    geojson.features.push(feat);
                });
            } else { // single polygons can be pushed in as-is
                geojson.features.push(feature);
            }
        }
    }
    static processVectorGeojson(geojson, bottomTiles, polygon, radius) {
        // console.log('polygon:', polygon);
        // console.log('bottomTiles:', bottomTiles);
        let eleList = this.getEleList(geojson);
        // console.log('eleList:', eleList);
        this.addBottomEle(geojson, bottomTiles, eleList);
        // console.log('geojson:', geojson);

        let maxArea = radius * radius * 2 * 1000000; // (r * sqrt2 * 1000)**2
        let contours = this.getContours(eleList, geojson, polygon, maxArea);
        // console.log('contours:', contours);
        return contours;
    }

    static deslash(input) {
        return input.split('/').map((str) => { return parseInt(str); });
    }

    processRgbTile(pixels, zoomposEle, zpCovered, bbox, radius) {
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
        // console.log('elevations:', elevations); // elevations: (262144) [...]

        // figure out tile coordinates of the 16 grandchildren of this tile
        let sixteenths = [];
        for (let c = 0; c < 4; c++) { // col
            for (let r = 0; r < 4; r++) { // row
                sixteenths.push([
                    zoomposEle[0] + 2,
                    zoomposEle[1] * 4 + c,
                    zoomposEle[2] * 4 + r].join('/'));
            }
        }
        // console.log('sixteenths:', sixteenths);

        let zpCoveredStr = zpCovered.map((zp) => { return zp.join('/'); });
        // console.log('zpCoveredStr:', zpCoveredStr);

        // console.log('sixteenthPixelRanges:', sixteenthPixelRanges);
        // 0 [0, 128] [0, 128]
        // 1 [128, 256] [0, 128]
        // 2 [256, 384] [0, 128]
        // 3 [384, 512] [0, 128]
        // 4 [0, 128] [128, 256]
        //...
        // 12 [0, 128] [384, 512]
        // 13 [128, 256] [384, 512]
        // 14 [256, 384] [384, 512]
        // 15 [384, 512] [384, 512]

        const unitsPerMeter = ThreeGeo.getUnitsPerMeter(this.constUnitsSide, radius);
        const dataEle = [];
        sixteenths.forEach((zoomposStr, index) => {
            if (! zpCoveredStr.includes(zoomposStr)) return;

            let zoompos = ThreeGeo.deslash(zoomposStr);
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
                    let [px, py] = this.projectCoord(lonlatPixel,
                        bbox.northWest, bbox.southEast);
                    // NOTE: do use shift = 1 for computeSeamRows()
                    array.push(-px, py, elev[dataIndex] * unitsPerMeter);
                    dataIndex++;
                }
            }
            // console.log('zoompos, array:', zoompos, array); // 49152 = 128*128*3 elements
            dataEle.push([zoompos, array, zoomposEle]);
        });
        // console.log('dataEle:', dataEle);
        return dataEle;
    }

    static stitchWithNei2(array, arrayNei) {
        // add a new south row
        for (let i = 0; i < constVertices; i++) {
            let indexZ = constSeamRows[2][i] + constVertices*3; // new south row
            let indexZNei = constSeamRows[0][i]; // north row to copy
            array[indexZ-2] = arrayNei[indexZNei-2]; // a new x
            array[indexZ-1] = arrayNei[indexZNei-1]; // a new y
            array[indexZ] = arrayNei[indexZNei]; // a new z
        }
    }
    static stitchWithNei3(array, arrayNei) {
        // add a new east col
        for (let i = 0; i < constVertices; i++) {
            let indexZ = constSeamRows[3][i] + (1+i)*3; // new east col
            let indexZNei = constSeamRows[1][i]; // west col to copy
            // https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index
            // arr = [0,1,2,3]
            // arr.splice(2, 0, 99)
            // arr
            // (5) [0, 1, 99, 2, 3]
            array.splice(indexZ-2, 0, arrayNei[indexZNei-2]);
            array.splice(indexZ-1, 0, arrayNei[indexZNei-1]);
            array.splice(indexZ, 0, arrayNei[indexZNei]);
        }
    }
    static resolveSeams(array, infoNei) {
        // console.log('infoNei:', infoNei);
        let cSegments = [constVertices-1, constVertices-1];

        Object.entries(infoNei).forEach(([idxNei, arrayNei]) => {
            if (idxNei === "2") {
                // console.log('now stitchWithNei2()...');
                this.stitchWithNei2(array, arrayNei);
                cSegments[1]++;
            } else if (idxNei === "3") {
                // console.log('now stitchWithNei3()...');
                this.stitchWithNei3(array, arrayNei);
                cSegments[0]++;
            }
        });

        if (cSegments[0] === constVertices &&
            cSegments[1] === constVertices) {
            // Both stitchWithNei2() and stitchWithNei3() were
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

    static getNeighbors8(zoompos) {
        // 8-neighbors:
        // 4 0 7
        // 1 + 3
        // 5 2 6
        //--------
        // 0, 1, 2, 3: north, west, south, east; +y, -x, -y, +x
        // 4, 5, 6, 7: diagonal neighbors
        const zoomposNeighborsDiff = [
            [0, 0, -1], [0, -1, 0], [0, 0, 1], [0, 1, 0],
            [0, -1, -1], [0, -1, 1], [0, 1, 1], [0, 1, -1],
        ];
        let neighbors = [];
        zoomposNeighborsDiff.forEach((zoomposDiff) => {
            let zoomposNei = zoomposDiff.map((coord, idxCoord) => {
                return coord + zoompos[idxCoord];
            });
            // console.log('8-neighbor candidate:', zoomposNei);
            neighbors.push(zoomposNei);
        });
        return neighbors;
    }

    static getDataEleIds(dataEle) {
        let ids = {};
        dataEle.forEach((data, idx) => {
            ids[data[0].join('/')] = idx;
        });
        console.log('ids:', ids);
        return ids;
    }
    static getNeighborsInfo(dataEle, dataEleIds, zoompos) {
        let infoNei = {};
        this.getNeighbors8(zoompos).forEach((zoomposNei, idxNei) => {
            let id = zoomposNei.join('/');
            if (id in dataEleIds) {
                let arrayNei = dataEle[dataEleIds[id]][1];
                // console.log('real neighbor yes:', zoomposNei, idxNei, arrayNei);
                infoNei[idxNei] = arrayNei;
            }
        });
        return infoNei;
    }

    static resolveTex(zoompos, apiSatellite, token, onTex) {
        this.fetchTile(zoompos, apiSatellite, token, (pixels) => {
            let tex = null;
            if (pixels) {
                // console.log("satellite pixels", pixels.shape.slice());
                // console.log('satellite pixels:', pixels);
                // https://threejs.org/docs/#api/textures/DataTexture
                tex = new THREE.DataTexture(pixels.data,
                    pixels.shape[0], pixels.shape[1], THREE.RGBAFormat);
                tex.flipY = true;
                tex.needsUpdate = true;
            } else {
                console.log(`fetchTile() failed for tex of zp: ${zoompos}`);
            }
            if (onTex) {
                onTex(tex);
            }
        });
    }

    getRgbDem(dataEle, apiSatellite, onSatelliteMat) {
        console.log('apiSatellite:', apiSatellite);

        // dataEle should be sorted so that ThreeGeo.resolveSeams() is applied
        // in the proper order, or the results will have broken stripes
        // due to stitchWithNei3()
        dataEle.sort((zp1, zp2) => zp1[0].join('/') > zp2[0].join('/') ? 1 : -1);
        // console.log('dataEle (sorted):', dataEle);

        let objs = [];
        let dataEleIds = ThreeGeo.getDataEleIds(dataEle);
        dataEle.forEach(([zoompos, arr, zoomposEle]) => {
            // console.log(zoompos, arr); // a 16th of zoomposEle
            if (arr.length !== constVertices * constVertices * 3) {
                // assumtion on the size of the arr failed...
                console.log('woops: already seams resolved? or what..., NOP');
                return;
            }

            // console.log('dealing with the seams of:', zoompos);
            let cSegments = ThreeGeo.resolveSeams(
                arr, ThreeGeo.getNeighborsInfo(dataEle, dataEleIds, zoompos));
            console.log('cSegments:', cSegments);
            // w and h don't matter since position.array is being overwritten

            let geom = new THREE.PlaneBufferGeometry(
                1, 1, cSegments[0], cSegments[1]);
            geom.attributes.position.array = new Float32Array(arr);
            //--------
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
            plane.position.x = this.constUnitsSide/2;
            plane.position.y = -this.constUnitsSide/2;
            plane.name = `dem-rgb-${zoompos.join('/')}`;
            // const _toTile = (zp) => { // [z,x,y] to a new [x,y,z]
            //     let tile = zp.slice();
            //     tile.push(tile.shift());
            //     return tile;
            // };
            const _toTile = zp => [zp[1], zp[2], zp[0]];
            plane.userData.threeGeo = {
                tile: _toTile(zoompos),
                srcDem: {
                    tile: _toTile(zoomposEle),
                    uri: ThreeGeo.getUriMapbox('', 'mapbox-terrain-rgb', zoomposEle),
                },
            };
            objs.push(plane);

            ThreeGeo.resolveTex(zoompos, apiSatellite, this.tokenMapbox, (tex) => {
                if (tex) {
                    plane.material = new THREE.MeshBasicMaterial({
                        side: THREE.FrontSide,
                        // side: THREE.DoubleSide,
                        map: tex,
                    });
                }
                if (onSatelliteMat) {
                    onSatelliteMat(plane);
                }
            });
        });
        return objs;
    }

    getRgbTiles(zpCovered, bbox, radius, apiRgb, apiSatellite,
        onRgbDem, onSatelliteMat) {
        let zpEle = ThreeGeo.getZoomposEle(zpCovered); // e.g. satellite's zoom: 14
        console.log('zpEle:', zpEle); // e.g. dem's zoom: 12 (=14-2)

        let dataEleCovered = [];
        let count = 0; // TODO use Promise() instead ??
        zpEle.forEach((zoompos) => {
            // console.log('ele zoompos', zoompos);
            ThreeGeo.fetchTile(zoompos, apiRgb, this.tokenMapbox, (pixels) => {
                if (pixels) {
                    dataEleCovered = dataEleCovered.concat(this.processRgbTile(
                        pixels, zoompos, zpCovered, bbox, radius));
                    console.log(`now ${dataEleCovered.length} satellite tiles in dataEleCovered`);
                } else {
                    console.log(`fetchTile() failed for rgb dem of zp: ${zoompos} (count: ${count}/${zpEle.length})`);
                }

                count++;
                if (count === zpEle.length) {
                    // console.log('dataEleCovered:', dataEleCovered);
                    if (onRgbDem) {
                        onRgbDem(this.getRgbDem(
                            dataEleCovered, apiSatellite, onSatelliteMat));
                    }
                }
            });
        });
    }

    getVectorTiles(zpCovered, bbox, radius, apiVector, onVectorDem) {
        let zpEle = ThreeGeo.getZoomposEle(zpCovered); // e.g. satellite's zoom: 14
        console.log('zpEle:', zpEle); // e.g. dem's zoom: 12 (=14-2)

        let bottomTiles = []; // will get reduced
        let geojson = { // will get reduced
            type: "FeatureCollection",
            features: [],
        };
        let count = 0; // TODO use Promise() instead ??
        zpEle.forEach((zoompos) => {
            ThreeGeo.fetchTile(zoompos, apiVector, this.tokenMapbox, (tile) => {
                if (tile) {
                    ThreeGeo.processVectorTile(tile, zoompos, geojson, bottomTiles);
                } else {
                    console.log(`fetchTile() failed for vector dem of zp: ${zoompos} (count: ${count}/${zpEle.length})`);
                }

                count++;
                if (count === zpEle.length) {
                    let contours = ThreeGeo.processVectorGeojson(
                        geojson, bottomTiles, bbox.feature, radius);
                    onVectorDem(this.getVectorDem(
                        contours, bbox.northWest, bbox.southEast, radius));
                }
            });
        });
    }

    static originRadiusToBbox(origin, radius) {
        const _swap = ll => [ll[1], ll[0]];
        const [w, n] = turfDestination(turfHelpers.point(_swap(origin)),
            radius, -45, {units: 'kilometers'}).geometry.coordinates;
        const [e, s] = turfDestination(turfHelpers.point(_swap(origin)),
            radius, 135, {units: 'kilometers'}).geometry.coordinates;
        return [w, s, e, n];
    }
    static getBbox(origin, radius) {
        const testPolygon = {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        [
                        ]
                    ]
                }
            }]
        };
        const polygon = testPolygon.features[0];
        const [w, s, e, n] = this.originRadiusToBbox(origin, radius);
        const nw = [w, n], se = [e, s];
        polygon.geometry.coordinates[0] = [
            nw, [se[0], nw[1]], se, [nw[0], se[1]], nw
        ];
        // console.log('testPolygon:', testPolygon);
        return {
            feature: polygon,
            northWest: nw,
            southEast: se,
        };
    }

    // tiles to cover a 5km-radius:  - processing
    // zoom: 15, // 64  <= 8x8 tiles - 8s
    // zoom: 14, // 20  <= 5x5 tiles - 4s (high resolution)
    // zoom: 13, // 6-9 <= 3x3 tiles - 2s (default)
    // zoom: 12, // 2-4 <= 2x2 tiles - 1s
    // zoom: 11, // 1 tile           - 0s
    getTerrain(origin, radius, zoom, callbacks={}) {
        let bbox = ThreeGeo.getBbox(origin, radius);
        console.log('bbox:', bbox);

        let zpCovered = ThreeGeo.getZoomposCovered(bbox.feature, zoom);
        console.log('zpCovered:', zpCovered);
        if (0) { //!!!!!!!! for debug
            console.log('zpCovered mods enabled for debug!!!!');
            // zpCovered.length = 1;
            // zpCovered.length = 2;
            zpCovered.length = 4;
            // zpCovered.length = 8;
            // zpCovered.length = 12;
            // zpCovered.length = 16;

            // debug with eiger
            // zpCovered.length = 19; // eiger snow ok
            // zpCovered.length = 20; // eiger snow NG <- fixed by dataEle.sort()
            // zpCovered = [[14, 8555, 5792], [14, 8556, 5792]]; // OK
            // zpCovered = [[14, 8555, 5792], [14, 8556, 5792], [14, 8557, 5792]]; // NG <- fixed by dataEle.sort()

            // zpCovered = [ // for checking seams
            //     [14, 3073, 6421], [14, 3074, 6421],
            //     [14, 3073, 6422], [14, 3074, 6422],
            // ];
            // zpCovered = [[14, 3072, 6420],]; // debug, to one elem
            // zpCovered = [                  [14, 3073, 6420],];
            // zpCovered = [[14, 3072, 6420], [14, 3073, 6420],];
            // zpCovered = [
            //     [14, 3072, 6420], [14, 3074, 6420], [14, 3076, 6420],
            //     [14, 3073, 6421], [14, 3075, 6421],
            //     [14, 3072, 6422], [14, 3074, 6422], [14, 3076, 6422],
            //     [14, 3073, 6423], [14, 3075, 6423],
            // ];
        }

        if (callbacks.onVectorDem) {
            this.getVectorTiles(zpCovered, bbox, radius,
                this.apiVector, callbacks.onVectorDem);
        }
        if (callbacks.onRgbDem) {
            this.getRgbTiles(zpCovered, bbox, radius,
                this.apiRgb, this.apiSatellite,
                callbacks.onRgbDem, callbacks.onSatelliteMat);
        }
    }
    setApiVector(api) { this.apiVector = api; }
    setApiRgb(api) { this.apiRgb = api; }
    setApiSatellite(api) { this.apiSatellite = api; }
}

export default ThreeGeo;
