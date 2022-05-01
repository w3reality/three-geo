<<<<<<< HEAD
import pkg from "../package.json";
=======
import pkg from '../package.json';
>>>>>>> 54a2a0614b2fcac0c41e50749bae0b3415d39e79

import "regenerator-runtime/runtime.js";

<<<<<<< HEAD
import * as THREE from "three";
import cover from "@mapbox/tile-cover";
import RgbModel from "./models/rgb.js";
import VectorModel from "./models/vector.js";
import Utils from "./utils.js";
import Laser from "three-laser-pointer/src";
const __version = pkg.version;
=======
import * as THREE from 'three';
import cover from '@mapbox/tile-cover';
import RgbModel from './models/rgb.js';
import VectorModel from './models/vector.js';
import Utils from './utils.js';
import Laser from 'three-laser-pointer/src';
const __version = pkg.version;

>>>>>>> 54a2a0614b2fcac0c41e50749bae0b3415d39e79

// import Elevation from './elevation.js'; // WIP
//====
const Elevation = { resolveElevation: () => undefined }; // dummy for now

class ThreeGeo {
  constructor(opts = {}) {
    this.version = __version;

    console.info(`ThreeGeo ${__version} with THREE r${THREE.REVISION}`);
    console.info(
      "Note: Since three-geo v1.4.3, when using with NodeJS, you must set the constructor option `useNodePixels` to `true` (https://github.com/w3reality/three-geo#api)"
    );

<<<<<<< HEAD
    const defaults = {
      unitsSide: 1.0,
      tokenMapbox: "",
      useNodePixels: false, // Do enable this when using with NodeJS
      apiVector: "mapbox-terrain-vector",
      apiRgb: "mapbox-terrain-rgb",
      apiSatellite: "mapbox-satellite",
    };
    const actual = Object.assign({}, defaults, opts);
    this.constUnitsSide = actual.unitsSide;
    this.tokenMapbox = actual.tokenMapbox;
    this.useNodePixels = actual.useNodePixels;
    this.apiVector = actual.apiVector;
    this.apiRgb = actual.apiRgb;
    this.apiSatellite = actual.apiSatellite;
  }
=======
    // ll-notation
    //   latlng: three-geo, leaflet
    //   lnglat: turf
    getProjection(bbox, radius, unitsSide=this.constUnitsSide) {
        // const wsen = Utils.polygonToBbox(origin, radius);
        const wsen = bbox;
        console.log(wsen)
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
    static _proj(ll, meshes, wsen, unitsSide) {
        const [lat, lng] = ll;
        const [w, s, e, n] = wsen;
>>>>>>> 54a2a0614b2fcac0c41e50749bae0b3415d39e79

  static _getUnitsPerMeter(unitsSide, radius) {
    return unitsSide / (radius * Math.pow(2, 0.5) * 1000);
  }
  static _projectCoord(unitsSide, coord, nw, se) {
    // lng, lat -> px, py
    return [
      unitsSide * (-0.5 + (coord[0] - nw[0]) / (se[0] - nw[0])),
      unitsSide * (-0.5 - (coord[1] - se[1]) / (se[1] - nw[1])),
    ];
  }

  // ll-notation
  //   latlng: three-geo, leaflet
  //   lnglat: turf
  getProjection(bbox, radius, unitsSide = this.constUnitsSide) {
    // const wsen = Utils.polygonToBbox(origin, radius);
    const wsen = bbox;
    // console.log('origin:', origin);
    // console.log('wsen:', wsen);
    const _unitsPerMeter = ThreeGeo._getUnitsPerMeter(unitsSide, radius);
    return {
      proj: (
        latlng,
        meshes = undefined // `meshes`: rgbDem
      ) => ThreeGeo._proj(latlng, meshes, wsen, unitsSide),
      projInv: (x, y) => ThreeGeo._projInv(x, y, origin, _unitsPerMeter), // latlng
      bbox: wsen,
      unitsPerMeter: _unitsPerMeter,
    }; 
  }
  static _proj(ll, meshes, wsen, unitsSide) {
    const [lat, lng] = ll;
    const [w, s, e, n] = wsen;

    // [x, y, z]: terrain coordinates
    const [x, y] = this._projectCoord(unitsSide, [lng, lat], [w, n], [e, s]);

    // WIP (undocumented API): Resolve `z` (elevation) in case
    //   the optional `meshes` is provided.
    const z = meshes
      ? Elevation.resolveElevation(x, y, lat, lng, meshes) // 'maybe' `undefined`
      : undefined;

<<<<<<< HEAD
    return z !== undefined ? [x, y, z] : [x, y];
  }
  static _projInv(x, y, origin, unitsPerMeter) {
    const ll = Utils.translateTurfObject(
      Utils.createTurfPoint(origin),
      x,
      y,
      0,
      unitsPerMeter
    ).geometry.coordinates; // lnglat
    return [ll[1], ll[0]]; // latlng
  }
=======
    static getBboxFeature(bbox) {
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
        const [w, s, e, n] = bbox;
        console.info([w, s, e, n])
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
        const [w, s, e, n] = Utils.polygonToBbox(origin, radius);
        console.info([w, s, e, n])
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
>>>>>>> 54a2a0614b2fcac0c41e50749bae0b3415d39e79

  // Zoom extent - https://www.mapbox.com/studio/tilesets/
  // satellite:  z0 ~ z22
  // rgb dem:    z0 ~ z15
  // vector dem: z0 ~ z15
  static getZoomposCovered(polygon, zoom) {
    // isochrone polygon
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
    return cover
      .tiles(polygon.geometry, limits) // poszoom
      .map(([x, y, z]) => [z, x, y]); // zoompos now!!
  }

  static getBboxFeature(bbox) {
    const testPolygon = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: [[]],
          },
        },
      ],
    };
    const polygon = testPolygon.features[0];
    const [w, s, e, n] = bbox;
    const nw = [w, n],
      se = [e, s];
    polygon.geometry.coordinates[0] = [
      nw,
      [se[0], nw[1]],
      se,
      [nw[0], se[1]],
      nw,
    ];
    // console.log('testPolygon:', testPolygon);
    return {
      feature: polygon,
      northWest: nw,
      southEast: se,
    };
  }

  static getBbox(origin, radius) {
    const testPolygon = {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon",
            coordinates: [[]],
          },
        },
      ],
    };
    const polygon = testPolygon.features[0];
    const [w, s, e, n] = Utils.polygonToBbox(origin, radius);
    console.info([w, s, e, n]);
    const nw = [w, n],
      se = [e, s];
    polygon.geometry.coordinates[0] = [
      nw,
      [se[0], nw[1]],
      se,
      [nw[0], se[1]],
      nw,
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
    const ret = { vectorDem: [], rgbDem: [] };

<<<<<<< HEAD
    const isDone = () => !isVecPending && !isRgbPending;

    if (isDone()) {
      console.log("no callbacks are set");
      res(ret);
      return null;
=======
    getTerrain(bbox, radius, zoom, cbs={}) {
        return new Promise((res, rej) => {
            try {
                const watcher = ThreeGeo._createWatcher(cbs, res);
                if (!watcher) return;

                // static parameters
                const _unitsSide = this.constUnitsSide;
                const unitsPerMeter = ThreeGeo._getUnitsPerMeter(_unitsSide, radius);
                const projectCoord = (coord, nw, se) =>
                        ThreeGeo._projectCoord(_unitsSide, coord, nw, se);
                const { tokenMapbox: token, useNodePixels,
                    apiRgb, apiSatellite, apiVector } = this;

                // callbacks
                const { onRgbDem, onSatelliteMat, onVectorDem } = cbs;

                // ROI
                console.log('got to before the bbox')
                const polyBbox = ThreeGeo.getBboxFeature(bbox);
                console.log('bbox:', polyBbox);
                const zpCovered = ThreeGeo.getZoomposCovered(polyBbox.feature, zoom);
                console.log('(satellite-level) zpCovered:', zpCovered);

                if (onRgbDem) {
                    (new RgbModel({
                        unitsPerMeter, projectCoord,
                        token, useNodePixels, apiRgb, apiSatellite,
                        onRgbDem, onSatelliteMat, watcher,
                    })).fetch(zpCovered, polyBbox);
                }

                if (onVectorDem) {
                    (new VectorModel({
                        unitsPerMeter, projectCoord,
                        token, useNodePixels, apiVector,
                        onVectorDem, watcher,
                    })).fetch(zpCovered, polyBbox, radius);
                }
            } catch (err) {
                console.error('err:', err);
                rej(err);
            }
        });
    }
    async getTerrainRgb(bbox, radius, zoom, _cb=undefined) {
        const { rgbDem: objs } = await this.getTerrain(bbox, radius, zoom, {
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
>>>>>>> 54a2a0614b2fcac0c41e50749bae0b3415d39e79
    }

    return (payload) => {
      // console.log('payload:', payload);
      const { what, data } = payload;
      if (what === "dem-vec") {
        isVecPending = false;
        ret.vectorDem = data;
      }
      if (what === "dem-rgb") {
        isRgbPending = false;
        ret.rgbDem = data;
      }
      if (isDone()) {
        console.log("all callbacks are complete");
        res(ret);
      }
    };
  }

  getTerrain(bbox, radius, zoom, cbs = {}) {
    return new Promise((res, rej) => {
      try {
        const watcher = ThreeGeo._createWatcher(cbs, res);
        if (!watcher) return;

        // static parameters
        const _unitsSide = this.constUnitsSide;
        const unitsPerMeter = ThreeGeo._getUnitsPerMeter(_unitsSide, radius);
        const projectCoord = (coord, nw, se) =>
          ThreeGeo._projectCoord(_unitsSide, coord, nw, se);
        const {
          tokenMapbox: token,
          useNodePixels,
          apiRgb,
          apiSatellite,
          apiVector,
        } = this;

        // callbacks
        const { onRgbDem, onSatelliteMat, onVectorDem } = cbs;

        // ROI
        const polyBbox = ThreeGeo.getBboxFeature(bbox);
        const zpCovered = ThreeGeo.getZoomposCovered(polyBbox.feature, zoom);

        if (onRgbDem) {
          new RgbModel({
            unitsPerMeter,
            projectCoord,
            token,
            useNodePixels,
            apiRgb,
            apiSatellite,
            onRgbDem,
            onSatelliteMat,
            watcher,
          }).fetch(zpCovered, polyBbox);
        }

        if (onVectorDem) {
          new VectorModel({
            unitsPerMeter,
            projectCoord,
            token,
            useNodePixels,
            apiVector,
            onVectorDem,
            watcher,
          }).fetch(zpCovered, polyBbox, radius);
        }
      } catch (err) {
        console.error("err:", err);
        rej(err);
      }
    });
  }
  async getTerrainRgb(bbox, radius, zoom, _cb = undefined) {
    const { rgbDem: objs } = await this.getTerrain(bbox, radius, zoom, {
      // Set dummy callbacks to trigger rgb DEM fetching
      onRgbDem: () => {},
      onSatelliteMat: () => {},
    });
    return _cb ? _cb(objs) : ThreeGeo._createDemGroup(objs, "dem-rgb");
  }
  async getTerrainVector(origin, radius, zoom, _cb = undefined) {
    const { vectorDem: objs } = await this.getTerrain(origin, radius, zoom, {
      // Set dummy callbacks to trigger vector DEM fetching
      onVectorDem: () => {},
    });
    return _cb ? _cb(objs) : ThreeGeo._createDemGroup(objs, "dem-vec");
  }
  static _createDemGroup(objs, name) {
    const group = new THREE.Group();
    group.name = name;
    for (let obj of objs) {
      group.add(obj);
    }
    return group;
  }

  setApiVector(api) {
    this.apiVector = api;
  }
  setApiRgb(api) {
    this.apiRgb = api;
  }
  setApiSatellite(api) {
    this.apiSatellite = api;
  }
}

ThreeGeo.Utils = Utils;
ThreeGeo.Laser = Laser;

export default ThreeGeo;
