import { version as __version } from '../package.json';
// const __version = 'n/a';

import 'regenerator-runtime/runtime.js';

import * as THREE from 'three';

import RgbModel from './models/rgb.js';
import VectorModel from './models/vector.js';
import Utils from './utils.js';
import Laser from 'three-laser-pointer/src';

import * as turfHelpers from '@turf/helpers';
import turfDestination from '@turf/destination';
import cover from '@mapbox/tile-cover';

class ThreeGeo {
    constructor(opts={}) {
        this.version = __version;

        // (note: use `Meta.consoleLog()` for es-pack-js >= 0.3.8)
        Utils.Meta._consoleLog(`ThreeGeo ${__version} with THREE r${THREE.REVISION}`);

        const defaults = {
            unitsSide: 1.0,
            tokenMapbox: '',
            apiVector: 'mapbox-terrain-vector',
            apiRgb: 'mapbox-terrain-rgb',
            apiSatellite: 'mapbox-satellite',
        };
        const actual = Object.assign({}, defaults, opts);
        this.constUnitsSide = actual.unitsSide;
        this.tokenMapbox = actual.tokenMapbox;
        this.apiVector = actual.apiVector;
        this.apiRgb = actual.apiRgb;
        this.apiSatellite = actual.apiSatellite;
    }

    static _getUnitsPerMeter(unitsSide, radius) {
        return unitsSide / (radius * Math.pow(2, 0.5) * 1000);
    }
    _projectCoord(coord, nw, se, unitsSide=this.constUnitsSide) {
        return ThreeGeo._projectCoordStatic(coord, nw, se, unitsSide);
    }
    static _projectCoordStatic(coord, nw, se, unitsSide) {
        // lng, lat -> px, py
        return [
            unitsSide * (-0.5 + (coord[0]-nw[0]) / (se[0]-nw[0])),
            unitsSide * (-0.5 - (coord[1]-se[1]) / (se[1]-nw[1]))
        ];
    }

    // TODO to be deprecated ........
    static _resolveTri(x, y, meshes, scale, shiftZ) {
        const isect = (new Laser()).raycast(
            new THREE.Vector3(x, y, 12000), // ray origin
            new THREE.Vector3(0, 0, -1), // ray direction
            meshes);
        // console.log('isect:', isect);
        if (! isect) return null;

        // console.log('isect:', isect);
        // console.log('isect.point.z:', isect.point.z);
        // console.log('isect.faceIndex:', isect.faceIndex);
        // https://stackoverflow.com/questions/41540313/three-buffergeometry-accessing-face-indices-and-face-normals
        const faceIndex = isect.faceIndex;
        const indexArr = isect.object.geometry.index.array;
        const attrPos = isect.object.geometry.attributes.position;
        const tri = [0, 1, 2].map(i => (new THREE.Vector3())
            .fromBufferAttribute(attrPos, indexArr[3 * faceIndex + i])
            .multiplyScalar(scale)
            // z's of tri is relative to the isect point
            .add(new THREE.Vector3(0, 0, shiftZ ? shiftZ : -isect.point.z)));
        // console.log('isect tri (z-shifted):', tri);
        return { // return new objects to remain pure
            faceIndex: isect.faceIndex,
            isectPoint: isect.point.clone(),
            tri: tri,
            normal: isect.face.normal.clone(),
        };
    }

    static _findIsect(x, y, lat, lng, meshes) {

        //---- find the corresponding mesh based on bbox info

        console.log('meshes for ele:', meshes);
        const candidates = [];
        for (let mesh of meshes) {
            const tile = mesh.userData.threeGeo.tile;
            // console.log('tile:', tile);
            const [w, s, e, n] = Utils.tileToBbox(tile);
            const isInBbox = s < lat && lat < n && w < lng && lng < e;
            // console.log('isInBbox:', isInBbox);
            if (isInBbox) candidates.push(mesh);
        }
        if (candidates.length === 0) return null;

        const target = candidates[0];
        console.log('target:', target);
        // target.material.wireframe = true; // debug

        //---- x, y, target -> rayOriginWorld, rayDirectionWorld

        console.log('x, y:', x, y); // terrain coords

        let rayOriginWorld, rayDirectionWorld;
        { // ray origin: terrain coords -> world coords
            const vecTerrain = new THREE.Vector3(x, y, 4); // TODO z should be high enough
            const vecWorld = vecTerrain.clone().applyMatrix4(target.matrixWorld);
            console.log('ray origin:', vecTerrain, '->', vecWorld);
            rayOriginWorld = vecWorld;

            window._scene.add( // debug viz: ray origin correspondence
                Utils.createLine([vecTerrain, vecWorld], {color: 0x00ff00}));
        }
        { // ray direction: terrain coords -> world coords
            const vecTerrain = new THREE.Vector3(0, 0, -1);
            const vecWorld = vecTerrain.clone().applyMatrix4(target.matrixWorld);
            console.log('ray direction:', vecTerrain, '->', vecWorld);
            rayDirectionWorld = vecWorld;
        }

        //---- raycasting to the `target` mesh

        const isect = (new Laser()).raycast(
            rayOriginWorld, rayDirectionWorld, [target]);
        console.log('isect:', isect);

        if (1 && isect) {
            window._scene.add( // debug viz: raycasting in world coords
                Utils.createLine([rayOriginWorld, isect.point], {color: 0x00ffff}));
        }

        return isect ? { isect, target } : null;
    }
    static _isectToPoints(isect, target) {
        const pointWorld = isect.point;
        const matrixWorldInv = new THREE.Matrix4().getInverse(target.matrixWorld);
        const pointTerrain = pointWorld.clone().applyMatrix4(matrixWorldInv);
        return { pointWorld, pointTerrain };
    }
    static _isectToTriInfo(isect, target) {
        const targetTerrain = target.clone();
        targetTerrain.rotation.x = 0;//!!!!
        window._scene.add(targetTerrain);

        // check triTerrain and triWorld
        const faceIndex = isect.faceIndex;
        const indexArr = isect.object.geometry.index.array;
        const attrPos = isect.object.geometry.attributes.position;
        const triTerrain = [0, 1, 2].map(i => (new THREE.Vector3())
            .fromBufferAttribute(attrPos, indexArr[3 * faceIndex + i]));
        console.log('isect -> triTerrain:', triTerrain);
        window._scene.add(Utils.createLine(triTerrain)); //!!!!!!!!!

        const triWorld = triTerrain.map(vec => vec.applyMatrix4(target.matrixWorld));
        console.log('triTerrain -> triWorld:', triWorld);
        window._scene.add(Utils.createLine(triWorld, {color: 0x00ffff})); //!!!!!!!!!

        const _triInfo = null; // TODO !!!!
        return _triInfo;
    }
    static _resolveTri2(x, y, meshes) {
        // TODO handle when `target` is scaled !!!! ********

        const [lat, lng] = [-1, -1]; // TODO [x, y] -> [lat, lng]
        const ret = this._findIsect(x, y, lat, lng, meshes);
        if (!ret) return null; // triInfo

        const { isect, target } = ret;

        const _triInfo = this._isectToTriInfo(isect, target);

        // check normalTerrain and normalWorld
        const normalTerrain = isect.face.normal.clone();
        const normalWorld = normalTerrain.clone().applyMatrix4(target.matrixWorld);
        if (1) { // FIXME: not showing !!!!
            const { pointWorld, pointTerrain } = this._isectToPoints(isect, target);
            window._scene.add(Utils.createLine([pointTerrain, pointTerrain.clone().add(normalTerrain)])); //!!!!!!!!!
            window._scene.add(Utils.createLine([pointWorld, pointWorld.clone().add(normalWorld)], {color: 0x00ffff})); //!!!!!!!!!
        }

        const triInfo = { _triInfo, normalTerrain, normalWorld }; // TODO !!!!!
        return triInfo;
    }
    static _resolveElevation(x, y, lat, lng, meshes) {
        // TODO handle when `target` is scaled !!!! ********

        const ret = this._findIsect(x, y, lat, lng, meshes);
        if (!ret) return undefined; // (elevation)

        const { isect, target } = ret;

/*
                    rayOriginWorld, rayDirectionWorld, target
                ->  [isect..............................................]
                ->  faceIndex,  pointWorld,    triTerrain,  normalTerrain
                                v              v            v
for elevation   <-              pointTerrain,  v            v
for triInfo     <-                             triWorld,    normalWorld
*/

        const { pointWorld, pointTerrain } = this._isectToPoints(isect, target);
        console.log('pointTerrain:', pointTerrain);

        if (1) {
            window._scene.add( // debug viz: raycasting in terrain coords
                Utils.createLine([new THREE.Vector3(x, y, 4), pointTerrain]));
        }

        this._isectToTriInfo(isect, target); // test !!!!!!!!

        return pointTerrain.z; // (elevation)
    }

    // **** WIP **** not sure going this direction........
    // !!!! https://github.com/mapbox/sphericalmercator
    // TODO 3) find the pixel for `ll` on `meshCorresp`
    // TODO 4) interpolate the elevation based on nearby pixels
    //   using sphericalmercator.px(ll, zoom)
    //   cf. processRgbTile() dealing with `constTilePixels.ll()`
    // ...

    static _proj(ll, meshes, wsen, unitsSide) {
        const [lat, lng] = ll;
        const [w, s, e, n] = wsen;

        // [x, y, z]: terrain coordinates
        const [x, y] = this._projectCoordStatic(
            [lng, lat], [w, n], [e, s], unitsSide);

        // resolve z (elevation) in case the optional `meshes` is provided
        const z = meshes ?
            this._resolveElevation(x, y, lat, lng, meshes) : // maybe `undefined`
            undefined;

        return z !== undefined ? [x, y, z] : [x, y];
    }
    static _projInv(x, y, origin, unitsPerMeter) {
        const _swap = ll => [ll[1], ll[0]];
        return _swap(Utils.translateTurfObject(
            turfHelpers.point(_swap(origin)),
            x, y, 0, unitsPerMeter).geometry.coordinates); // latlng
    }
    // ll-notation
    //   latlng: three-geo, leaflet
    //   lnglat: turf
    getProjection(origin, radius, unitsSide=this.constUnitsSide) {
        const wsen = ThreeGeo.originRadiusToBbox(origin, radius);
        // console.log('origin:', origin);
        // console.log('wsen:', wsen);
        const _unitsPerMeter = ThreeGeo._getUnitsPerMeter(unitsSide, radius);
        return {
            proj: (latlng, meshes=undefined) => // `meshes`: rgbDem
                ThreeGeo._proj(latlng, meshes, wsen, unitsSide),
            projInv: (x, y) =>
                ThreeGeo._projInv(x, y, origin, _unitsPerMeter), // latlng
            bbox: wsen,
            unitsPerMeter: _unitsPerMeter,
        };
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
            .map(([x, y, z]) => [z, x, y]); // zoompos now!!
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

    static _createWatcher(cbs, res) {
        let isVecPending = cbs.onVectorDem ? true : false;
        let isRgbPending = cbs.onRgbDem ? true : false;
        const ret = {vectorDem: [], rgbDem: []};

        const isDone = () => !isVecPending && !isRgbPending;

        if (isDone()) {
            res(ret);
            return null;
        }

        return payload => {
            // console.log('payload:', payload);
            const { what, data } = payload;
            if (what === 'dem-vec') {
                isVecPending = false;
                ret.vectorDem = data;
            }
            if (what === 'dem-rgb') {
                isRgbPending = false;
                ret.rgbDem = data;
            }
            if (isDone()) { // both callbacks are complete
                res(ret);
            }
        };
    }

    _getTerrain(zpCovered, bbox, radius, cbs) {
        return new Promise((res, rej) => {
            const watcher = ThreeGeo._createWatcher(cbs, res);
            if (!watcher) return;

            // static parameters
            const _unitsSide = this.constUnitsSide;
            const unitsPerMeter = ThreeGeo._getUnitsPerMeter(_unitsSide, radius);
            const projectCoord = (coord, nw, se) =>
                    ThreeGeo._projectCoordStatic(coord, nw, se, _unitsSide);
            const { tokenMapbox: token,
                apiRgb, apiSatellite, apiVector } = this;

            // callbacks
            const { onRgbDem, onSatelliteMat, onVectorDem } = cbs;

            try {
                if (onRgbDem) {
                    (new RgbModel({
                        unitsPerMeter, projectCoord,
                        token, apiRgb, apiSatellite,
                        onRgbDem, onSatelliteMat, watcher,
                    })).fetch(zpCovered, bbox);
                }

                if (onVectorDem) {
                    (new VectorModel({
                        unitsPerMeter, projectCoord,
                        token, apiVector,
                        onVectorDem, watcher,
                    })).fetch(zpCovered, bbox, radius);
                }
            } catch (err) {
                console.error('err:', err);
                rej(null);
            }
        });
    }

    getTerrain(origin, radius, zoom, cbs={}) {
        return new Promise(async (res, rej) => {
            try {
                const bbox = ThreeGeo.getBbox(origin, radius);
                console.log('bbox:', bbox);

                const zpCovered = ThreeGeo.getZoomposCovered(bbox.feature, zoom);
                console.log('(for satellite) zpCovered:', zpCovered);

                res(await this._getTerrain(zpCovered, bbox, radius, cbs));
            } catch (err) {
                console.error('err:', err);
                rej(null);
            }
        });
    }
    async getTerrainRgb(origin, radius, zoom, _cb=undefined) {
        const { rgbDem: objs } = await this.getTerrain(origin, radius, zoom, {
            // Set dummy callbacks to trigger rgb DEM fetching
            onRgbDem: () => {},
            onSatelliteMat: () => {},
        });
        return _cb ? _cb(objs) : ThreeGeo._createDemGroup(objs, 'dem-rgb');
    }
    async getTerrainVector(origin, radius, zoom, _cb=undefined) {
        const { vectorDem: objs } = await this.getTerrain(origin, radius, zoom, {
            // Set dummy callbacks to trigger vector DEM fetching
            onVectorDem: () => {},
        });
        return _cb ? _cb(objs) : ThreeGeo._createDemGroup(objs, 'dem-vec');
    }
    static _createDemGroup(objs, name) {
        const group = new THREE.Group();
        group.name = name;
        for (let obj of objs) { group.add(obj); }
        return group;
    }

    setApiVector(api) { this.apiVector = api; }
    setApiRgb(api) { this.apiRgb = api; }
    setApiSatellite(api) { this.apiSatellite = api; }
}

ThreeGeo.Utils = Utils;
ThreeGeo.Laser = Laser;

export default ThreeGeo;
