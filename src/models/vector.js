import Fetch from './fetch.js';
import * as turfHelpers from '@turf/helpers';
import turfArea from '@turf/area';
import turfIntersect from '@turf/intersect';
import turfUnion from '@turf/union';
import uniq from 'uniq';
import * as THREE from 'three';

class VectorModel {
    constructor(params) {
        // static parameters
        this.unitsPerMeter = params.unitsPerMeter;
        this.projectCoord = params.projectCoord;
        this.token = params.token;
        this.isNode = params.isNode;
        this.isDebug = params.isDebug;
        this.apiVector = params.apiVector;

        // callbacks
        this.onVectorDem = params.onVectorDem;
        this.watcher = params.watcher;

        // state variables
        this.bottomTiles = [];
        this.geojson = { type: 'FeatureCollection', features: [] };
        if (this.isDebug) {
            this.tiles = {};
        }
    }

    fetch(zpCovered, bbox, radius) {
        // e.g. satellite's zoom: 14; then dem's zoom: 12 (=14-2)
        const zpEle = Fetch.getZoomposEle(zpCovered);
        console.log('VectorModel: zpEle:', zpEle);

        let count = 0;
        zpEle.forEach(async zoompos => {
            const tile = await Fetch.fetchTile(zoompos, this.apiVector, this.token, this.isNode);
            if (tile !== null) {
                this.addTile(tile, zoompos);
            } else {
                console.log(`fetchTile() failed for vector dem of zp: ${zoompos} (count: ${count}/${zpEle.length})`);
            }

            count++;
            if (count === zpEle.length) {
                this.build(bbox, radius);
            }
        });
    }

    addTile(tile, zoompos) {
        if (this.isDebug) {
            this.tiles[zoompos.join('-')] = tile;
        }

        const contour = tile.layers.contour;
        if (!contour) { // zoom <= 8
            console.log(`no contours! (zoom=${zoompos[0]})`);
            return;
        }

        for (let i = 0; i < tile.layers.contour.length; i++) {
            const feat = tile.layers.contour.feature(i).toGeoJSON(
                zoompos[1], zoompos[2], zoompos[0]);

            if (i === 0) {
                this.bottomTiles.push(feat);
            }

            // break multigons into multiple polygons
            if (feat.geometry.type === 'MultiPolygon') {
                feat.geometry.coordinates
                    .forEach(polygon => this.geojson.features.push({
                        type: 'Feature',
                        properties: {ele: feat.properties.ele},
                        geometry: {type: 'Polygon', coordinates: polygon},
                    }));
            } else { // single polygons can be pushed in as-is
                this.geojson.features.push(feat);
            }
        }
    }
    _buildContours(polygon, radius) {
        const eleList = uniq(this.geojson.features.map(feat => feat.properties.ele))
            .sort((a, b) => a - b);
        VectorModel._addBottomEle(this.geojson, this.bottomTiles, eleList);

        return VectorModel._getContours(eleList, this.geojson, polygon,
            radius * radius * 2000000); // maxArea: (r * sqrt2 * 1000)**2
    }
    static _addBottomEle(geojson, bottomTiles, eleList) {
        bottomTiles.forEach(bottom => {
            const tileBottomEle = bottom.properties.ele;
            for (let ele = eleList[0]; ele < tileBottomEle; ele += 10) {
                geojson.features.push({
                    type: "Feature",
                    geometry: bottom.geometry,
                    properties: { ele },
                });
            }
        });
    }
    static _getContours(eleList, geojson, polygon, maxArea) {
        let contours = [];

        // iterate through elevations, and merge polys of the same elevation
        for (let x = 0; x < eleList.length; x++) {
            // console.log(`_getContours(): ${x}/${eleList.length}`);
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

    build(bbox, radius) {
        const debug = this.isDebug ? {
            tiles: this.tiles,
        } : undefined;

        const objs = this._buildModelThree(
            this._buildContours(bbox.feature, radius),
            bbox.northWest, bbox.southEast);

        if (this.onVectorDem) {
            this.onVectorDem(objs); // legacy API
        }
        if (this.watcher) {
            this.watcher({ what: 'dem-vec', data: objs, debug });
        }
    }

    //==== THREE specific
    _buildModelThree(contours, nw, se) {
        const _getColorRange = (range, len) => {
            const _rgb = hex => [hex >> 16, (hex & 0x00ff00) >> 8, hex & 0x0000ff];
            const arrStart = _rgb(range[0]);
            const arrDiff = _rgb(range[1] - range[0]);
            return (ic) => {
                let r = arrStart[0] + Math.floor(ic * arrDiff[0] / len);
                let g = arrStart[1] + Math.floor(ic * arrDiff[1] / len);
                let b = arrStart[2] + Math.floor(ic * arrDiff[2] / len);
                return (r << 16) + (g << 8) + b;
            };
        };
        const colorRange = _getColorRange(
            [0x231918, 0xed6356], contours.length);

        const objs = [];
        const addSlice = (coords, ic) => {
            let [lines, extrudeShade] = this._buildSlice(
                coords, ic, colorRange(ic),
                contours, nw, se);
            lines.forEach((line) => { objs.push(line); });
            objs.push(extrudeShade);
        };

        // iterate through elevations
        for (let ic = 0; ic < contours.length; ic++) {
            let level = contours[ic].geometry.geometry;

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

    _buildSlice(coords, iContour, color, contours, nw, se) {
        const shape = new THREE.Shape();
        const geoms = [new THREE.BufferGeometry()];

        const h = iContour;
        const pz = - contours[h].ele * this.unitsPerMeter;

        const setVertices = (geom, vertices) => geom.setAttribute('position',
            new THREE.BufferAttribute(new Float32Array(vertices), 3));

        // iterate through vertices per shape
        const vertices = [];
        coords[0].forEach((coord, index) => {
            let [px, py] = this.projectCoord(coord, nw, se);
            vertices.push(-px, py, pz);

            if (index === 0) {
                shape.moveTo(-px, py);
            } else {
                shape.lineTo(-px, py);
            }
        });
        setVertices(geoms[0], vertices);

        // carve out holes (if none, would automatically skip this)
        for (let k = 1; k < coords.length; k++) {
            let holePath = new THREE.Path();
            geoms.push(new THREE.BufferGeometry());

            // iterate through hole path vertices
            const vertices = [];
            for (let j = 0; j < coords[k].length; j++) {
                let [px, py] = this.projectCoord(coords[k][j], nw, se);
                vertices.push(-px, py, pz);

                if (j === 0) {
                    holePath.moveTo(-px, py);
                } else {
                    holePath.lineTo(-px, py);
                }
            }
            setVertices(geoms[k], vertices);

            shape.holes.push(holePath);
        }

        const lines = [];
        geoms.forEach((_loop, _index) => {
            let line = new THREE.Line(
                geoms[0],
                new THREE.LineBasicMaterial({
                    color: 0xcccccc
                }));

            // align x-y : east-north
            line.rotation.y = Math.PI;
            line.name = `dem-vec-line-${contours[h].ele}-${line.uuid}`;

            // line.visible = false;
            lines.push(line);
        });

        let extrudeGeom = new THREE.ExtrudeGeometry(shape, {
            depth: contours[h+1] ?
                this.unitsPerMeter * (contours[h+1].ele - contours[h].ele) :
                this.unitsPerMeter * (contours[h].ele - contours[h-1].ele),
            bevelEnabled: false,
        });
        let extrudeShade = new THREE.Mesh(
            extrudeGeom, new THREE.MeshBasicMaterial({
                color: color,
                wireframe: false,
                // wireframe: true,
            }),
        );

        // align x-y : east-north
        extrudeShade.rotation.y = Math.PI;
        extrudeShade.position.z = -pz;
        extrudeShade.name = `dem-vec-shade-${contours[h].ele}-${extrudeShade.uuid}`;

        return [lines, extrudeShade];
    }
}

export default VectorModel;