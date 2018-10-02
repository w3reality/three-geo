(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("THREE"));
	else if(typeof define === 'function' && define.amd)
		define(["THREE"], factory);
	else if(typeof exports === 'object')
		exports["ThreeGeo"] = factory(require("THREE"));
	else
		root["ThreeGeo"] = factory(root["THREE"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__30__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 71);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @module helpers
 */
/**
 * Earth Radius used with the Harvesine formula and approximates using a spherical (non-ellipsoid) Earth.
 *
 * @memberof helpers
 * @type {number}
 */
exports.earthRadius = 6371008.8;
/**
 * Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
 *
 * @memberof helpers
 * @type {Object}
 */
exports.factors = {
    centimeters: exports.earthRadius * 100,
    centimetres: exports.earthRadius * 100,
    degrees: exports.earthRadius / 111325,
    feet: exports.earthRadius * 3.28084,
    inches: exports.earthRadius * 39.370,
    kilometers: exports.earthRadius / 1000,
    kilometres: exports.earthRadius / 1000,
    meters: exports.earthRadius,
    metres: exports.earthRadius,
    miles: exports.earthRadius / 1609.344,
    millimeters: exports.earthRadius * 1000,
    millimetres: exports.earthRadius * 1000,
    nauticalmiles: exports.earthRadius / 1852,
    radians: 1,
    yards: exports.earthRadius / 1.0936,
};
/**
 * Units of measurement factors based on 1 meter.
 *
 * @memberof helpers
 * @type {Object}
 */
exports.unitsFactors = {
    centimeters: 100,
    centimetres: 100,
    degrees: 1 / 111325,
    feet: 3.28084,
    inches: 39.370,
    kilometers: 1 / 1000,
    kilometres: 1 / 1000,
    meters: 1,
    metres: 1,
    miles: 1 / 1609.344,
    millimeters: 1000,
    millimetres: 1000,
    nauticalmiles: 1 / 1852,
    radians: 1 / exports.earthRadius,
    yards: 1 / 1.0936,
};
/**
 * Area of measurement factors based on 1 square meter.
 *
 * @memberof helpers
 * @type {Object}
 */
exports.areaFactors = {
    acres: 0.000247105,
    centimeters: 10000,
    centimetres: 10000,
    feet: 10.763910417,
    inches: 1550.003100006,
    kilometers: 0.000001,
    kilometres: 0.000001,
    meters: 1,
    metres: 1,
    miles: 3.86e-7,
    millimeters: 1000000,
    millimetres: 1000000,
    yards: 1.195990046,
};
/**
 * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
 *
 * @name feature
 * @param {Geometry} geometry input geometry
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature} a GeoJSON Feature
 * @example
 * var geometry = {
 *   "type": "Point",
 *   "coordinates": [110, 50]
 * };
 *
 * var feature = turf.feature(geometry);
 *
 * //=feature
 */
function feature(geom, properties, options) {
    if (options === void 0) { options = {}; }
    var feat = { type: "Feature" };
    if (options.id === 0 || options.id) {
        feat.id = options.id;
    }
    if (options.bbox) {
        feat.bbox = options.bbox;
    }
    feat.properties = properties || {};
    feat.geometry = geom;
    return feat;
}
exports.feature = feature;
/**
 * Creates a GeoJSON {@link Geometry} from a Geometry string type & coordinates.
 * For GeometryCollection type use `helpers.geometryCollection`
 *
 * @name geometry
 * @param {string} type Geometry Type
 * @param {Array<any>} coordinates Coordinates
 * @param {Object} [options={}] Optional Parameters
 * @returns {Geometry} a GeoJSON Geometry
 * @example
 * var type = "Point";
 * var coordinates = [110, 50];
 * var geometry = turf.geometry(type, coordinates);
 * // => geometry
 */
function geometry(type, coordinates, options) {
    if (options === void 0) { options = {}; }
    switch (type) {
        case "Point": return point(coordinates).geometry;
        case "LineString": return lineString(coordinates).geometry;
        case "Polygon": return polygon(coordinates).geometry;
        case "MultiPoint": return multiPoint(coordinates).geometry;
        case "MultiLineString": return multiLineString(coordinates).geometry;
        case "MultiPolygon": return multiPolygon(coordinates).geometry;
        default: throw new Error(type + " is invalid");
    }
}
exports.geometry = geometry;
/**
 * Creates a {@link Point} {@link Feature} from a Position.
 *
 * @name point
 * @param {Array<number>} coordinates longitude, latitude position (each in decimal degrees)
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Point>} a Point feature
 * @example
 * var point = turf.point([-75.343, 39.984]);
 *
 * //=point
 */
function point(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "Point",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.point = point;
/**
 * Creates a {@link Point} {@link FeatureCollection} from an Array of Point coordinates.
 *
 * @name points
 * @param {Array<Array<number>>} coordinates an array of Points
 * @param {Object} [properties={}] Translate these properties to each Feature
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
 * associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Point>} Point Feature
 * @example
 * var points = turf.points([
 *   [-75, 39],
 *   [-80, 45],
 *   [-78, 50]
 * ]);
 *
 * //=points
 */
function points(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return point(coords, properties);
    }), options);
}
exports.points = points;
/**
 * Creates a {@link Polygon} {@link Feature} from an Array of LinearRings.
 *
 * @name polygon
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<Polygon>} Polygon Feature
 * @example
 * var polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]], { name: 'poly1' });
 *
 * //=polygon
 */
function polygon(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    for (var _i = 0, coordinates_1 = coordinates; _i < coordinates_1.length; _i++) {
        var ring = coordinates_1[_i];
        if (ring.length < 4) {
            throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
        }
        for (var j = 0; j < ring[ring.length - 1].length; j++) {
            // Check if first point of Polygon contains two numbers
            if (ring[ring.length - 1][j] !== ring[0][j]) {
                throw new Error("First and last Position are not equivalent.");
            }
        }
    }
    var geom = {
        type: "Polygon",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.polygon = polygon;
/**
 * Creates a {@link Polygon} {@link FeatureCollection} from an Array of Polygon coordinates.
 *
 * @name polygons
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygon coordinates
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<Polygon>} Polygon FeatureCollection
 * @example
 * var polygons = turf.polygons([
 *   [[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]],
 *   [[[-15, 42], [-14, 46], [-12, 41], [-17, 44], [-15, 42]]],
 * ]);
 *
 * //=polygons
 */
function polygons(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return polygon(coords, properties);
    }), options);
}
exports.polygons = polygons;
/**
 * Creates a {@link LineString} {@link Feature} from an Array of Positions.
 *
 * @name lineString
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<LineString>} LineString Feature
 * @example
 * var linestring1 = turf.lineString([[-24, 63], [-23, 60], [-25, 65], [-20, 69]], {name: 'line 1'});
 * var linestring2 = turf.lineString([[-14, 43], [-13, 40], [-15, 45], [-10, 49]], {name: 'line 2'});
 *
 * //=linestring1
 * //=linestring2
 */
function lineString(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    if (coordinates.length < 2) {
        throw new Error("coordinates must be an array of two or more positions");
    }
    var geom = {
        type: "LineString",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.lineString = lineString;
/**
 * Creates a {@link LineString} {@link FeatureCollection} from an Array of LineString coordinates.
 *
 * @name lineStrings
 * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
 * associated with the FeatureCollection
 * @param {string|number} [options.id] Identifier associated with the FeatureCollection
 * @returns {FeatureCollection<LineString>} LineString FeatureCollection
 * @example
 * var linestrings = turf.lineStrings([
 *   [[-24, 63], [-23, 60], [-25, 65], [-20, 69]],
 *   [[-14, 43], [-13, 40], [-15, 45], [-10, 49]]
 * ]);
 *
 * //=linestrings
 */
function lineStrings(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    return featureCollection(coordinates.map(function (coords) {
        return lineString(coords, properties);
    }), options);
}
exports.lineStrings = lineStrings;
/**
 * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}.
 *
 * @name featureCollection
 * @param {Feature[]} features input features
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {FeatureCollection} FeatureCollection of Features
 * @example
 * var locationA = turf.point([-75.343, 39.984], {name: 'Location A'});
 * var locationB = turf.point([-75.833, 39.284], {name: 'Location B'});
 * var locationC = turf.point([-75.534, 39.123], {name: 'Location C'});
 *
 * var collection = turf.featureCollection([
 *   locationA,
 *   locationB,
 *   locationC
 * ]);
 *
 * //=collection
 */
function featureCollection(features, options) {
    if (options === void 0) { options = {}; }
    var fc = { type: "FeatureCollection" };
    if (options.id) {
        fc.id = options.id;
    }
    if (options.bbox) {
        fc.bbox = options.bbox;
    }
    fc.features = features;
    return fc;
}
exports.featureCollection = featureCollection;
/**
 * Creates a {@link Feature<MultiLineString>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiLineString
 * @param {Array<Array<Array<number>>>} coordinates an array of LineStrings
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiLineString>} a MultiLineString feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiLine = turf.multiLineString([[[0,0],[10,10]]]);
 *
 * //=multiLine
 */
function multiLineString(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiLineString",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.multiLineString = multiLineString;
/**
 * Creates a {@link Feature<MultiPoint>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPoint
 * @param {Array<Array<number>>} coordinates an array of Positions
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPoint>} a MultiPoint feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPt = turf.multiPoint([[0,0],[10,10]]);
 *
 * //=multiPt
 */
function multiPoint(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiPoint",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.multiPoint = multiPoint;
/**
 * Creates a {@link Feature<MultiPolygon>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name multiPolygon
 * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygons
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<MultiPolygon>} a multipolygon feature
 * @throws {Error} if no coordinates are passed
 * @example
 * var multiPoly = turf.multiPolygon([[[[0,0],[0,10],[10,10],[10,0],[0,0]]]]);
 *
 * //=multiPoly
 *
 */
function multiPolygon(coordinates, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "MultiPolygon",
        coordinates: coordinates,
    };
    return feature(geom, properties, options);
}
exports.multiPolygon = multiPolygon;
/**
 * Creates a {@link Feature<GeometryCollection>} based on a
 * coordinate array. Properties can be added optionally.
 *
 * @name geometryCollection
 * @param {Array<Geometry>} geometries an array of GeoJSON Geometries
 * @param {Object} [properties={}] an Object of key-value pairs to add as properties
 * @param {Object} [options={}] Optional Parameters
 * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
 * @param {string|number} [options.id] Identifier associated with the Feature
 * @returns {Feature<GeometryCollection>} a GeoJSON GeometryCollection Feature
 * @example
 * var pt = turf.geometry("Point", [100, 0]);
 * var line = turf.geometry("LineString", [[101, 0], [102, 1]]);
 * var collection = turf.geometryCollection([pt, line]);
 *
 * // => collection
 */
function geometryCollection(geometries, properties, options) {
    if (options === void 0) { options = {}; }
    var geom = {
        type: "GeometryCollection",
        geometries: geometries,
    };
    return feature(geom, properties, options);
}
exports.geometryCollection = geometryCollection;
/**
 * Round number to precision
 *
 * @param {number} num Number
 * @param {number} [precision=0] Precision
 * @returns {number} rounded number
 * @example
 * turf.round(120.4321)
 * //=120
 *
 * turf.round(120.4321, 2)
 * //=120.43
 */
function round(num, precision) {
    if (precision === void 0) { precision = 0; }
    if (precision && !(precision >= 0)) {
        throw new Error("precision must be a positive number");
    }
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(num * multiplier) / multiplier;
}
exports.round = round;
/**
 * Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name radiansToLength
 * @param {number} radians in radians across the sphere
 * @param {string} [units="kilometers"] can be degrees, radians, miles, or kilometers inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} distance
 */
function radiansToLength(radians, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = exports.factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return radians * factor;
}
exports.radiansToLength = radiansToLength;
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @name lengthToRadians
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, or kilometers inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} radians
 */
function lengthToRadians(distance, units) {
    if (units === void 0) { units = "kilometers"; }
    var factor = exports.factors[units];
    if (!factor) {
        throw new Error(units + " units is invalid");
    }
    return distance / factor;
}
exports.lengthToRadians = lengthToRadians;
/**
 * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into degrees
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, centimeters, kilometres, feet
 *
 * @name lengthToDegrees
 * @param {number} distance in real units
 * @param {string} [units="kilometers"] can be degrees, radians, miles, or kilometers inches, yards, metres,
 * meters, kilometres, kilometers.
 * @returns {number} degrees
 */
function lengthToDegrees(distance, units) {
    return radiansToDegrees(lengthToRadians(distance, units));
}
exports.lengthToDegrees = lengthToDegrees;
/**
 * Converts any bearing angle from the north line direction (positive clockwise)
 * and returns an angle between 0-360 degrees (positive clockwise), 0 being the north line
 *
 * @name bearingToAzimuth
 * @param {number} bearing angle, between -180 and +180 degrees
 * @returns {number} angle between 0 and 360 degrees
 */
function bearingToAzimuth(bearing) {
    var angle = bearing % 360;
    if (angle < 0) {
        angle += 360;
    }
    return angle;
}
exports.bearingToAzimuth = bearingToAzimuth;
/**
 * Converts an angle in radians to degrees
 *
 * @name radiansToDegrees
 * @param {number} radians angle in radians
 * @returns {number} degrees between 0 and 360 degrees
 */
function radiansToDegrees(radians) {
    var degrees = radians % (2 * Math.PI);
    return degrees * 180 / Math.PI;
}
exports.radiansToDegrees = radiansToDegrees;
/**
 * Converts an angle in degrees to radians
 *
 * @name degreesToRadians
 * @param {number} degrees angle between 0 and 360 degrees
 * @returns {number} angle in radians
 */
function degreesToRadians(degrees) {
    var radians = degrees % 360;
    return radians * Math.PI / 180;
}
exports.degreesToRadians = degreesToRadians;
/**
 * Converts a length to the requested unit.
 * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
 *
 * @param {number} length to be converted
 * @param {Units} [originalUnit="kilometers"] of the length
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted length
 */
function convertLength(length, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "kilometers"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(length >= 0)) {
        throw new Error("length must be a positive number");
    }
    return radiansToLength(lengthToRadians(length, originalUnit), finalUnit);
}
exports.convertLength = convertLength;
/**
 * Converts a area to the requested unit.
 * Valid units: kilometers, kilometres, meters, metres, centimetres, millimeters, acres, miles, yards, feet, inches
 * @param {number} area to be converted
 * @param {Units} [originalUnit="meters"] of the distance
 * @param {Units} [finalUnit="kilometers"] returned unit
 * @returns {number} the converted distance
 */
function convertArea(area, originalUnit, finalUnit) {
    if (originalUnit === void 0) { originalUnit = "meters"; }
    if (finalUnit === void 0) { finalUnit = "kilometers"; }
    if (!(area >= 0)) {
        throw new Error("area must be a positive number");
    }
    var startFactor = exports.areaFactors[originalUnit];
    if (!startFactor) {
        throw new Error("invalid original units");
    }
    var finalFactor = exports.areaFactors[finalUnit];
    if (!finalFactor) {
        throw new Error("invalid final units");
    }
    return (area / startFactor) * finalFactor;
}
exports.convertArea = convertArea;
/**
 * isNumber
 *
 * @param {*} num Number to validate
 * @returns {boolean} true/false
 * @example
 * turf.isNumber(123)
 * //=true
 * turf.isNumber('foo')
 * //=false
 */
function isNumber(num) {
    return !isNaN(num) && num !== null && !Array.isArray(num) && !/^\s*$/.test(num);
}
exports.isNumber = isNumber;
/**
 * isObject
 *
 * @param {*} input variable to validate
 * @returns {boolean} true/false
 * @example
 * turf.isObject({elevation: 10})
 * //=true
 * turf.isObject('foo')
 * //=false
 */
function isObject(input) {
    return (!!input) && (input.constructor === Object);
}
exports.isObject = isObject;
/**
 * Validate BBox
 *
 * @private
 * @param {Array<number>} bbox BBox to validate
 * @returns {void}
 * @throws Error if BBox is not valid
 * @example
 * validateBBox([-180, -40, 110, 50])
 * //=OK
 * validateBBox([-180, -40])
 * //=Error
 * validateBBox('Foo')
 * //=Error
 * validateBBox(5)
 * //=Error
 * validateBBox(null)
 * //=Error
 * validateBBox(undefined)
 * //=Error
 */
function validateBBox(bbox) {
    if (!bbox) {
        throw new Error("bbox is required");
    }
    if (!Array.isArray(bbox)) {
        throw new Error("bbox must be an Array");
    }
    if (bbox.length !== 4 && bbox.length !== 6) {
        throw new Error("bbox must be an Array of 4 or 6 numbers");
    }
    bbox.forEach(function (num) {
        if (!isNumber(num)) {
            throw new Error("bbox must only contain numbers");
        }
    });
}
exports.validateBBox = validateBBox;
/**
 * Validate Id
 *
 * @private
 * @param {string|number} id Id to validate
 * @returns {void}
 * @throws Error if Id is not valid
 * @example
 * validateId([-180, -40, 110, 50])
 * //=Error
 * validateId([-180, -40])
 * //=Error
 * validateId('Foo')
 * //=OK
 * validateId(5)
 * //=OK
 * validateId(null)
 * //=Error
 * validateId(undefined)
 * //=Error
 */
function validateId(id) {
    if (!id) {
        throw new Error("id is required");
    }
    if (["string", "number"].indexOf(typeof id) === -1) {
        throw new Error("id must be a number or a string");
    }
}
exports.validateId = validateId;
// Deprecated methods
function radians2degrees() {
    throw new Error("method has been renamed to `radiansToDegrees`");
}
exports.radians2degrees = radians2degrees;
function degrees2radians() {
    throw new Error("method has been renamed to `degreesToRadians`");
}
exports.degrees2radians = degrees2radians;
function distanceToDegrees() {
    throw new Error("method has been renamed to `lengthToDegrees`");
}
exports.distanceToDegrees = distanceToDegrees;
function distanceToRadians() {
    throw new Error("method has been renamed to `lengthToRadians`");
}
exports.distanceToRadians = distanceToRadians;
function radiansToDistance() {
    throw new Error("method has been renamed to `radiansToLength`");
}
exports.radiansToDistance = radiansToDistance;
function bearingToAngle() {
    throw new Error("method has been renamed to `bearingToAzimuth`");
}
exports.bearingToAngle = bearingToAngle;
function convertDistance() {
    throw new Error("method has been renamed to `convertLength`");
}
exports.convertDistance = convertDistance;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.



/*<replacement>*/

var pna = __webpack_require__(8);
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = __webpack_require__(6);
util.inherits = __webpack_require__(4);
/*</replacement>*/

var Readable = __webpack_require__(25);
var Writable = __webpack_require__(14);

util.inherits(Duplex, Readable);

{
  // avoid scope creep, the keys array can then be collected
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  pna.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  pna.nextTick(cb, err);
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(0);
/**
 * Unwrap a coordinate from a Point Feature, Geometry or a single coordinate.
 *
 * @name getCoord
 * @param {Array<number>|Geometry<Point>|Feature<Point>} coord GeoJSON Point or an Array of numbers
 * @returns {Array<number>} coordinates
 * @example
 * var pt = turf.point([10, 10]);
 *
 * var coord = turf.getCoord(pt);
 * //= [10, 10]
 */
function getCoord(coord) {
    if (!coord) {
        throw new Error("coord is required");
    }
    if (!Array.isArray(coord)) {
        if (coord.type === "Feature" && coord.geometry !== null && coord.geometry.type === "Point") {
            return coord.geometry.coordinates;
        }
        if (coord.type === "Point") {
            return coord.coordinates;
        }
    }
    if (Array.isArray(coord) && coord.length >= 2 && !Array.isArray(coord[0]) && !Array.isArray(coord[1])) {
        return coord;
    }
    throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
exports.getCoord = getCoord;
/**
 * Unwrap coordinates from a Feature, Geometry Object or an Array
 *
 * @name getCoords
 * @param {Array<any>|Geometry|Feature} coords Feature, Geometry Object or an Array
 * @returns {Array<any>} coordinates
 * @example
 * var poly = turf.polygon([[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]);
 *
 * var coords = turf.getCoords(poly);
 * //= [[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]
 */
function getCoords(coords) {
    if (Array.isArray(coords)) {
        return coords;
    }
    // Feature
    if (coords.type === "Feature") {
        if (coords.geometry !== null) {
            return coords.geometry.coordinates;
        }
    }
    else {
        // Geometry
        if (coords.coordinates) {
            return coords.coordinates;
        }
    }
    throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
}
exports.getCoords = getCoords;
/**
 * Checks if coordinates contains a number
 *
 * @name containsNumber
 * @param {Array<any>} coordinates GeoJSON Coordinates
 * @returns {boolean} true if Array contains a number
 */
function containsNumber(coordinates) {
    if (coordinates.length > 1 && helpers_1.isNumber(coordinates[0]) && helpers_1.isNumber(coordinates[1])) {
        return true;
    }
    if (Array.isArray(coordinates[0]) && coordinates[0].length) {
        return containsNumber(coordinates[0]);
    }
    throw new Error("coordinates must only contain numbers");
}
exports.containsNumber = containsNumber;
/**
 * Enforce expectations about types of GeoJSON objects for Turf.
 *
 * @name geojsonType
 * @param {GeoJSON} value any GeoJSON object
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} if value is not the expected type.
 */
function geojsonType(value, type, name) {
    if (!type || !name) {
        throw new Error("type and name required");
    }
    if (!value || value.type !== type) {
        throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + value.type);
    }
}
exports.geojsonType = geojsonType;
/**
 * Enforce expectations about types of {@link Feature} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @name featureOf
 * @param {Feature} feature a feature with an expected geometry type
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} error if value is not the expected type.
 */
function featureOf(feature, type, name) {
    if (!feature) {
        throw new Error("No feature passed");
    }
    if (!name) {
        throw new Error(".featureOf() requires a name");
    }
    if (!feature || feature.type !== "Feature" || !feature.geometry) {
        throw new Error("Invalid input to " + name + ", Feature with geometry required");
    }
    if (!feature.geometry || feature.geometry.type !== type) {
        throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + feature.geometry.type);
    }
}
exports.featureOf = featureOf;
/**
 * Enforce expectations about types of {@link FeatureCollection} inputs for Turf.
 * Internally this uses {@link geojsonType} to judge geometry types.
 *
 * @name collectionOf
 * @param {FeatureCollection} featureCollection a FeatureCollection for which features will be judged
 * @param {string} type expected GeoJSON type
 * @param {string} name name of calling function
 * @throws {Error} if value is not the expected type.
 */
function collectionOf(featureCollection, type, name) {
    if (!featureCollection) {
        throw new Error("No featureCollection passed");
    }
    if (!name) {
        throw new Error(".collectionOf() requires a name");
    }
    if (!featureCollection || featureCollection.type !== "FeatureCollection") {
        throw new Error("Invalid input to " + name + ", FeatureCollection required");
    }
    for (var _i = 0, _a = featureCollection.features; _i < _a.length; _i++) {
        var feature = _a[_i];
        if (!feature || feature.type !== "Feature" || !feature.geometry) {
            throw new Error("Invalid input to " + name + ", Feature with geometry required");
        }
        if (!feature.geometry || feature.geometry.type !== type) {
            throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + feature.geometry.type);
        }
    }
}
exports.collectionOf = collectionOf;
/**
 * Get Geometry from Feature or Geometry Object
 *
 * @param {Feature|Geometry} geojson GeoJSON Feature or Geometry Object
 * @returns {Geometry|null} GeoJSON Geometry Object
 * @throws {Error} if geojson is not a Feature or Geometry Object
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [110, 40]
 *   }
 * }
 * var geom = turf.getGeom(point)
 * //={"type": "Point", "coordinates": [110, 40]}
 */
function getGeom(geojson) {
    if (geojson.type === "Feature") {
        return geojson.geometry;
    }
    return geojson;
}
exports.getGeom = getGeom;
/**
 * Get GeoJSON object's type, Geometry type is prioritize.
 *
 * @param {GeoJSON} geojson GeoJSON object
 * @param {string} [name="geojson"] name of the variable to display in error message
 * @returns {string} GeoJSON type
 * @example
 * var point = {
 *   "type": "Feature",
 *   "properties": {},
 *   "geometry": {
 *     "type": "Point",
 *     "coordinates": [110, 40]
 *   }
 * }
 * var geom = turf.getType(point)
 * //="Point"
 */
function getType(geojson, name) {
    if (geojson.type === "FeatureCollection") {
        return "FeatureCollection";
    }
    if (geojson.type === "GeometryCollection") {
        return "GeometryCollection";
    }
    if (geojson.type === "Feature" && geojson.geometry !== null) {
        return geojson.geometry.type;
    }
    return geojson.type;
}
exports.getType = getType;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7).Buffer))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(47)
var ieee754 = __webpack_require__(20)
var isArray = __webpack_require__(23)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (!process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = { nextTick: nextTick };
} else {
  module.exports = process
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(7)
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports):undefined}(this,function(t){"use strict";function e(){}function n(t){this.message=t||""}function i(t){this.message=t||""}function r(t){this.message=t||""}function o(){}function s(t){return null===t?Mt:t.color}function a(t){return null===t?null:t.parent}function u(t,e){null!==t&&(t.color=e)}function l(t){return null===t?null:t.left}function c(t){return null===t?null:t.right}function p(){this.root_=null,this.size_=0}function h(){}function f(){this.array_=[],arguments[0]instanceof It&&this.addAll(arguments[0])}function g(){}function d(t){this.message=t||""}function y(){this.array_=[]}"fill"in Array.prototype||Object.defineProperty(Array.prototype,"fill",{configurable:!0,value:function(t){if(void 0===this||null===this)throw new TypeError(this+" is not an object");var e=Object(this),n=Math.max(Math.min(e.length,9007199254740991),0)||0,i=1 in arguments?parseInt(Number(arguments[1]),10)||0:0;i=i<0?Math.max(n+i,0):Math.min(i,n);var r=2 in arguments&&void 0!==arguments[2]?parseInt(Number(arguments[2]),10)||0:n;for(r=r<0?Math.max(n+arguments[2],0):Math.min(r,n);i<r;)e[i]=t,++i;return e},writable:!0}),Number.isFinite=Number.isFinite||function(t){return"number"==typeof t&&isFinite(t)},Number.isInteger=Number.isInteger||function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},Number.parseFloat=Number.parseFloat||parseFloat,Number.isNaN=Number.isNaN||function(t){return t!=t},Math.trunc=Math.trunc||function(t){return t<0?Math.ceil(t):Math.floor(t)};var _=function(){};_.prototype.interfaces_=function(){return[]},_.prototype.getClass=function(){return _},_.prototype.equalsWithTolerance=function(t,e,n){return Math.abs(t-e)<=n};var m=function(t){function e(e){t.call(this,e),this.name="IllegalArgumentException",this.message=e,this.stack=(new t).stack}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error),v=function(){},I={MAX_VALUE:{configurable:!0}};v.isNaN=function(t){return Number.isNaN(t)},v.doubleToLongBits=function(t){return t},v.longBitsToDouble=function(t){return t},v.isInfinite=function(t){return!Number.isFinite(t)},I.MAX_VALUE.get=function(){return Number.MAX_VALUE},Object.defineProperties(v,I);var E=function(){},x=function(){},N=function(){},C=function t(){if(this.x=null,this.y=null,this.z=null,0===arguments.length)this.x=0,this.y=0,this.z=t.NULL_ORDINATE;else if(1===arguments.length){var e=arguments[0];this.x=e.x,this.y=e.y,this.z=e.z}else 2===arguments.length?(this.x=arguments[0],this.y=arguments[1],this.z=t.NULL_ORDINATE):3===arguments.length&&(this.x=arguments[0],this.y=arguments[1],this.z=arguments[2])},S={DimensionalComparator:{configurable:!0},serialVersionUID:{configurable:!0},NULL_ORDINATE:{configurable:!0},X:{configurable:!0},Y:{configurable:!0},Z:{configurable:!0}};C.prototype.setOrdinate=function(t,e){switch(t){case C.X:this.x=e;break;case C.Y:this.y=e;break;case C.Z:this.z=e;break;default:throw new m("Invalid ordinate index: "+t)}},C.prototype.equals2D=function(){if(1===arguments.length){var t=arguments[0];return this.x===t.x&&this.y===t.y}if(2===arguments.length){var e=arguments[0],n=arguments[1];return!!_.equalsWithTolerance(this.x,e.x,n)&&!!_.equalsWithTolerance(this.y,e.y,n)}},C.prototype.getOrdinate=function(t){switch(t){case C.X:return this.x;case C.Y:return this.y;case C.Z:return this.z}throw new m("Invalid ordinate index: "+t)},C.prototype.equals3D=function(t){return this.x===t.x&&this.y===t.y&&(this.z===t.z||v.isNaN(this.z))&&v.isNaN(t.z)},C.prototype.equals=function(t){return t instanceof C&&this.equals2D(t)},C.prototype.equalInZ=function(t,e){return _.equalsWithTolerance(this.z,t.z,e)},C.prototype.compareTo=function(t){var e=t;return this.x<e.x?-1:this.x>e.x?1:this.y<e.y?-1:this.y>e.y?1:0},C.prototype.clone=function(){},C.prototype.copy=function(){return new C(this)},C.prototype.toString=function(){return"("+this.x+", "+this.y+", "+this.z+")"},C.prototype.distance3D=function(t){var e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return Math.sqrt(e*e+n*n+i*i)},C.prototype.distance=function(t){var e=this.x-t.x,n=this.y-t.y;return Math.sqrt(e*e+n*n)},C.prototype.hashCode=function(){var t=17;return t=37*t+C.hashCode(this.x),t=37*t+C.hashCode(this.y)},C.prototype.setCoordinate=function(t){this.x=t.x,this.y=t.y,this.z=t.z},C.prototype.interfaces_=function(){return[E,x,e]},C.prototype.getClass=function(){return C},C.hashCode=function(){if(1===arguments.length){var t=arguments[0],e=v.doubleToLongBits(t);return Math.trunc((e^e)>>>32)}},S.DimensionalComparator.get=function(){return L},S.serialVersionUID.get=function(){return 0x5cbf2c235c7e5800},S.NULL_ORDINATE.get=function(){return v.NaN},S.X.get=function(){return 0},S.Y.get=function(){return 1},S.Z.get=function(){return 2},Object.defineProperties(C,S);var L=function(t){if(this._dimensionsToTest=2,0===arguments.length);else if(1===arguments.length){var e=arguments[0];if(2!==e&&3!==e)throw new m("only 2 or 3 dimensions may be specified");this._dimensionsToTest=e}};L.prototype.compare=function(t,e){var n=t,i=e,r=L.compare(n.x,i.x);if(0!==r)return r;var o=L.compare(n.y,i.y);if(0!==o)return o;if(this._dimensionsToTest<=2)return 0;return L.compare(n.z,i.z)},L.prototype.interfaces_=function(){return[N]},L.prototype.getClass=function(){return L},L.compare=function(t,e){return t<e?-1:t>e?1:v.isNaN(t)?v.isNaN(e)?0:-1:v.isNaN(e)?1:0};var b=function(){};b.prototype.create=function(){},b.prototype.interfaces_=function(){return[]},b.prototype.getClass=function(){return b};var w=function(){},O={INTERIOR:{configurable:!0},BOUNDARY:{configurable:!0},EXTERIOR:{configurable:!0},NONE:{configurable:!0}};w.prototype.interfaces_=function(){return[]},w.prototype.getClass=function(){return w},w.toLocationSymbol=function(t){switch(t){case w.EXTERIOR:return"e";case w.BOUNDARY:return"b";case w.INTERIOR:return"i";case w.NONE:return"-"}throw new m("Unknown location value: "+t)},O.INTERIOR.get=function(){return 0},O.BOUNDARY.get=function(){return 1},O.EXTERIOR.get=function(){return 2},O.NONE.get=function(){return-1},Object.defineProperties(w,O);var T=function(t,e){return t.interfaces_&&t.interfaces_().indexOf(e)>-1},R=function(){},P={LOG_10:{configurable:!0}};R.prototype.interfaces_=function(){return[]},R.prototype.getClass=function(){return R},R.log10=function(t){var e=Math.log(t);return v.isInfinite(e)?e:v.isNaN(e)?e:e/R.LOG_10},R.min=function(t,e,n,i){var r=t;return e<r&&(r=e),n<r&&(r=n),i<r&&(r=i),r},R.clamp=function(){if("number"==typeof arguments[2]&&"number"==typeof arguments[0]&&"number"==typeof arguments[1]){var t=arguments[0],e=arguments[1],n=arguments[2];return t<e?e:t>n?n:t}if(Number.isInteger(arguments[2])&&Number.isInteger(arguments[0])&&Number.isInteger(arguments[1])){var i=arguments[0],r=arguments[1],o=arguments[2];return i<r?r:i>o?o:i}},R.wrap=function(t,e){return t<0?e- -t%e:t%e},R.max=function(){if(3===arguments.length){var t=arguments[0],e=arguments[1],n=arguments[2],i=t;return e>i&&(i=e),n>i&&(i=n),i}if(4===arguments.length){var r=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3],u=r;return o>u&&(u=o),s>u&&(u=s),a>u&&(u=a),u}},R.average=function(t,e){return(t+e)/2},P.LOG_10.get=function(){return Math.log(10)},Object.defineProperties(R,P);var D=function(t){this.str=t};D.prototype.append=function(t){this.str+=t},D.prototype.setCharAt=function(t,e){this.str=this.str.substr(0,t)+e+this.str.substr(t+1)},D.prototype.toString=function(t){return this.str};var M=function(t){this.value=t};M.prototype.intValue=function(){return this.value},M.prototype.compareTo=function(t){return this.value<t?-1:this.value>t?1:0},M.isNaN=function(t){return Number.isNaN(t)};var A=function(){};A.isWhitespace=function(t){return t<=32&&t>=0||127===t},A.toUpperCase=function(t){return t.toUpperCase()};var F=function t(){if(this._hi=0,this._lo=0,0===arguments.length)this.init(0);else if(1===arguments.length){if("number"==typeof arguments[0]){var e=arguments[0];this.init(e)}else if(arguments[0]instanceof t){var n=arguments[0];this.init(n)}else if("string"==typeof arguments[0]){var i=arguments[0];t.call(this,t.parse(i))}}else if(2===arguments.length){var r=arguments[0],o=arguments[1];this.init(r,o)}},G={PI:{configurable:!0},TWO_PI:{configurable:!0},PI_2:{configurable:!0},E:{configurable:!0},NaN:{configurable:!0},EPS:{configurable:!0},SPLIT:{configurable:!0},MAX_PRINT_DIGITS:{configurable:!0},TEN:{configurable:!0},ONE:{configurable:!0},SCI_NOT_EXPONENT_CHAR:{configurable:!0},SCI_NOT_ZERO:{configurable:!0}};F.prototype.le=function(t){return(this._hi<t._hi||this._hi===t._hi)&&this._lo<=t._lo},F.prototype.extractSignificantDigits=function(t,e){var n=this.abs(),i=F.magnitude(n._hi),r=F.TEN.pow(i);(n=n.divide(r)).gt(F.TEN)?(n=n.divide(F.TEN),i+=1):n.lt(F.ONE)&&(n=n.multiply(F.TEN),i-=1);for(var o=i+1,s=new D,a=F.MAX_PRINT_DIGITS-1,u=0;u<=a;u++){t&&u===o&&s.append(".");var l=Math.trunc(n._hi);if(l<0)break;var c=!1,p=0;l>9?(c=!0,p="9"):p="0"+l,s.append(p),n=n.subtract(F.valueOf(l)).multiply(F.TEN),c&&n.selfAdd(F.TEN);var h=!0,f=F.magnitude(n._hi);if(f<0&&Math.abs(f)>=a-u&&(h=!1),!h)break}return e[0]=i,s.toString()},F.prototype.sqr=function(){return this.multiply(this)},F.prototype.doubleValue=function(){return this._hi+this._lo},F.prototype.subtract=function(){if(arguments[0]instanceof F){var t=arguments[0];return this.add(t.negate())}if("number"==typeof arguments[0]){var e=arguments[0];return this.add(-e)}},F.prototype.equals=function(){if(1===arguments.length){var t=arguments[0];return this._hi===t._hi&&this._lo===t._lo}},F.prototype.isZero=function(){return 0===this._hi&&0===this._lo},F.prototype.selfSubtract=function(){if(arguments[0]instanceof F){var t=arguments[0];return this.isNaN()?this:this.selfAdd(-t._hi,-t._lo)}if("number"==typeof arguments[0]){var e=arguments[0];return this.isNaN()?this:this.selfAdd(-e,0)}},F.prototype.getSpecialNumberString=function(){return this.isZero()?"0.0":this.isNaN()?"NaN ":null},F.prototype.min=function(t){return this.le(t)?this:t},F.prototype.selfDivide=function(){if(1===arguments.length){if(arguments[0]instanceof F){var t=arguments[0];return this.selfDivide(t._hi,t._lo)}if("number"==typeof arguments[0]){var e=arguments[0];return this.selfDivide(e,0)}}else if(2===arguments.length){var n=arguments[0],i=arguments[1],r=null,o=null,s=null,a=null,u=null,l=null,c=null,p=null;return u=this._hi/n,l=F.SPLIT*u,r=l-u,p=F.SPLIT*n,r=l-r,o=u-r,s=p-n,c=u*n,s=p-s,a=n-s,p=r*s-c+r*a+o*s+o*a,l=(this._hi-c-p+this._lo-u*i)/n,p=u+l,this._hi=p,this._lo=u-p+l,this}},F.prototype.dump=function(){return"DD<"+this._hi+", "+this._lo+">"},F.prototype.divide=function(){if(arguments[0]instanceof F){var t=arguments[0],e=null,n=null,i=null,r=null,o=null,s=null,a=null,u=null;n=(o=this._hi/t._hi)-(e=(s=F.SPLIT*o)-(e=s-o)),u=e*(i=(u=F.SPLIT*t._hi)-(i=u-t._hi))-(a=o*t._hi)+e*(r=t._hi-i)+n*i+n*r,s=(this._hi-a-u+this._lo-o*t._lo)/t._hi;return new F(u=o+s,o-u+s)}if("number"==typeof arguments[0]){var l=arguments[0];return v.isNaN(l)?F.createNaN():F.copy(this).selfDivide(l,0)}},F.prototype.ge=function(t){return(this._hi>t._hi||this._hi===t._hi)&&this._lo>=t._lo},F.prototype.pow=function(t){if(0===t)return F.valueOf(1);var e=new F(this),n=F.valueOf(1),i=Math.abs(t);if(i>1)for(;i>0;)i%2==1&&n.selfMultiply(e),(i/=2)>0&&(e=e.sqr());else n=e;return t<0?n.reciprocal():n},F.prototype.ceil=function(){if(this.isNaN())return F.NaN;var t=Math.ceil(this._hi),e=0;return t===this._hi&&(e=Math.ceil(this._lo)),new F(t,e)},F.prototype.compareTo=function(t){var e=t;return this._hi<e._hi?-1:this._hi>e._hi?1:this._lo<e._lo?-1:this._lo>e._lo?1:0},F.prototype.rint=function(){if(this.isNaN())return this;return this.add(.5).floor()},F.prototype.setValue=function(){if(arguments[0]instanceof F){var t=arguments[0];return this.init(t),this}if("number"==typeof arguments[0]){var e=arguments[0];return this.init(e),this}},F.prototype.max=function(t){return this.ge(t)?this:t},F.prototype.sqrt=function(){if(this.isZero())return F.valueOf(0);if(this.isNegative())return F.NaN;var t=1/Math.sqrt(this._hi),e=this._hi*t,n=F.valueOf(e),i=this.subtract(n.sqr())._hi*(.5*t);return n.add(i)},F.prototype.selfAdd=function(){if(1===arguments.length){if(arguments[0]instanceof F){var t=arguments[0];return this.selfAdd(t._hi,t._lo)}if("number"==typeof arguments[0]){var e=arguments[0],n=null,i=null,r=null,o=null,s=null,a=null;return r=this._hi+e,s=r-this._hi,o=r-s,o=e-s+(this._hi-o),a=o+this._lo,n=r+a,i=a+(r-n),this._hi=n+i,this._lo=i+(n-this._hi),this}}else if(2===arguments.length){var u=arguments[0],l=arguments[1],c=null,p=null,h=null,f=null,g=null,d=null,y=null;f=this._hi+u,p=this._lo+l,g=f-(d=f-this._hi),h=p-(y=p-this._lo);var _=(c=f+(d=(g=u-d+(this._hi-g))+p))+(d=(h=l-y+(this._lo-h))+(d+(f-c))),m=d+(c-_);return this._hi=_,this._lo=m,this}},F.prototype.selfMultiply=function(){if(1===arguments.length){if(arguments[0]instanceof F){var t=arguments[0];return this.selfMultiply(t._hi,t._lo)}if("number"==typeof arguments[0]){var e=arguments[0];return this.selfMultiply(e,0)}}else if(2===arguments.length){var n=arguments[0],i=arguments[1],r=null,o=null,s=null,a=null,u=null,l=null;r=(u=F.SPLIT*this._hi)-this._hi,l=F.SPLIT*n,r=u-r,o=this._hi-r,s=l-n;var c=(u=this._hi*n)+(l=r*(s=l-s)-u+r*(a=n-s)+o*s+o*a+(this._hi*i+this._lo*n)),p=l+(r=u-c);return this._hi=c,this._lo=p,this}},F.prototype.selfSqr=function(){return this.selfMultiply(this)},F.prototype.floor=function(){if(this.isNaN())return F.NaN;var t=Math.floor(this._hi),e=0;return t===this._hi&&(e=Math.floor(this._lo)),new F(t,e)},F.prototype.negate=function(){return this.isNaN()?this:new F(-this._hi,-this._lo)},F.prototype.clone=function(){},F.prototype.multiply=function(){if(arguments[0]instanceof F){var t=arguments[0];return t.isNaN()?F.createNaN():F.copy(this).selfMultiply(t)}if("number"==typeof arguments[0]){var e=arguments[0];return v.isNaN(e)?F.createNaN():F.copy(this).selfMultiply(e,0)}},F.prototype.isNaN=function(){return v.isNaN(this._hi)},F.prototype.intValue=function(){return Math.trunc(this._hi)},F.prototype.toString=function(){var t=F.magnitude(this._hi);return t>=-3&&t<=20?this.toStandardNotation():this.toSciNotation()},F.prototype.toStandardNotation=function(){var t=this.getSpecialNumberString();if(null!==t)return t;var e=new Array(1).fill(null),n=this.extractSignificantDigits(!0,e),i=e[0]+1,r=n;if("."===n.charAt(0))r="0"+n;else if(i<0)r="0."+F.stringOfChar("0",-i)+n;else if(-1===n.indexOf(".")){var o=i-n.length;r=n+F.stringOfChar("0",o)+".0"}return this.isNegative()?"-"+r:r},F.prototype.reciprocal=function(){var t=null,e=null,n=null,i=null,r=null,o=null,s=null,a=null;e=(r=1/this._hi)-(t=(o=F.SPLIT*r)-(t=o-r)),n=(a=F.SPLIT*this._hi)-this._hi;var u=r+(o=(1-(s=r*this._hi)-(a=t*(n=a-n)-s+t*(i=this._hi-n)+e*n+e*i)-r*this._lo)/this._hi);return new F(u,r-u+o)},F.prototype.toSciNotation=function(){if(this.isZero())return F.SCI_NOT_ZERO;var t=this.getSpecialNumberString();if(null!==t)return t;var e=new Array(1).fill(null),n=this.extractSignificantDigits(!1,e),i=F.SCI_NOT_EXPONENT_CHAR+e[0];if("0"===n.charAt(0))throw new Error("Found leading zero: "+n);var r="";n.length>1&&(r=n.substring(1));var o=n.charAt(0)+"."+r;return this.isNegative()?"-"+o+i:o+i},F.prototype.abs=function(){return this.isNaN()?F.NaN:this.isNegative()?this.negate():new F(this)},F.prototype.isPositive=function(){return(this._hi>0||0===this._hi)&&this._lo>0},F.prototype.lt=function(t){return(this._hi<t._hi||this._hi===t._hi)&&this._lo<t._lo},F.prototype.add=function(){if(arguments[0]instanceof F){var t=arguments[0];return F.copy(this).selfAdd(t)}if("number"==typeof arguments[0]){var e=arguments[0];return F.copy(this).selfAdd(e)}},F.prototype.init=function(){if(1===arguments.length){if("number"==typeof arguments[0]){var t=arguments[0];this._hi=t,this._lo=0}else if(arguments[0]instanceof F){var e=arguments[0];this._hi=e._hi,this._lo=e._lo}}else if(2===arguments.length){var n=arguments[0],i=arguments[1];this._hi=n,this._lo=i}},F.prototype.gt=function(t){return(this._hi>t._hi||this._hi===t._hi)&&this._lo>t._lo},F.prototype.isNegative=function(){return(this._hi<0||0===this._hi)&&this._lo<0},F.prototype.trunc=function(){return this.isNaN()?F.NaN:this.isPositive()?this.floor():this.ceil()},F.prototype.signum=function(){return this._hi>0?1:this._hi<0?-1:this._lo>0?1:this._lo<0?-1:0},F.prototype.interfaces_=function(){return[e,E,x]},F.prototype.getClass=function(){return F},F.sqr=function(t){return F.valueOf(t).selfMultiply(t)},F.valueOf=function(){if("string"==typeof arguments[0]){var t=arguments[0];return F.parse(t)}if("number"==typeof arguments[0]){var e=arguments[0];return new F(e)}},F.sqrt=function(t){return F.valueOf(t).sqrt()},F.parse=function(t){for(var e=0,n=t.length;A.isWhitespace(t.charAt(e));)e++;var i=!1;if(e<n){var r=t.charAt(e);"-"!==r&&"+"!==r||(e++,"-"===r&&(i=!0))}for(var o=new F,s=0,a=0,u=0;!(e>=n);){var l=t.charAt(e);if(e++,A.isDigit(l)){var c=l-"0";o.selfMultiply(F.TEN),o.selfAdd(c),s++}else{if("."!==l){if("e"===l||"E"===l){var p=t.substring(e);try{u=M.parseInt(p)}catch(e){throw e instanceof Error?new Error("Invalid exponent "+p+" in string "+t):e}break}throw new Error("Unexpected character '"+l+"' at position "+e+" in string "+t)}a=s}}var h=o,f=s-a-u;if(0===f)h=o;else if(f>0){var g=F.TEN.pow(f);h=o.divide(g)}else if(f<0){var d=F.TEN.pow(-f);h=o.multiply(d)}return i?h.negate():h},F.createNaN=function(){return new F(v.NaN,v.NaN)},F.copy=function(t){return new F(t)},F.magnitude=function(t){var e=Math.abs(t),n=Math.log(e)/Math.log(10),i=Math.trunc(Math.floor(n));return 10*Math.pow(10,i)<=e&&(i+=1),i},F.stringOfChar=function(t,e){for(var n=new D,i=0;i<e;i++)n.append(t);return n.toString()},G.PI.get=function(){return new F(3.141592653589793,1.2246467991473532e-16)},G.TWO_PI.get=function(){return new F(6.283185307179586,2.4492935982947064e-16)},G.PI_2.get=function(){return new F(1.5707963267948966,6.123233995736766e-17)},G.E.get=function(){return new F(2.718281828459045,1.4456468917292502e-16)},G.NaN.get=function(){return new F(v.NaN,v.NaN)},G.EPS.get=function(){return 1.23259516440783e-32},G.SPLIT.get=function(){return 134217729},G.MAX_PRINT_DIGITS.get=function(){return 32},G.TEN.get=function(){return F.valueOf(10)},G.ONE.get=function(){return F.valueOf(1)},G.SCI_NOT_EXPONENT_CHAR.get=function(){return"E"},G.SCI_NOT_ZERO.get=function(){return"0.0E0"},Object.defineProperties(F,G);var q=function(){},B={DP_SAFE_EPSILON:{configurable:!0}};q.prototype.interfaces_=function(){return[]},q.prototype.getClass=function(){return q},q.orientationIndex=function(t,e,n){var i=q.orientationIndexFilter(t,e,n);if(i<=1)return i;var r=F.valueOf(e.x).selfAdd(-t.x),o=F.valueOf(e.y).selfAdd(-t.y),s=F.valueOf(n.x).selfAdd(-e.x),a=F.valueOf(n.y).selfAdd(-e.y);return r.selfMultiply(a).selfSubtract(o.selfMultiply(s)).signum()},q.signOfDet2x2=function(t,e,n,i){return t.multiply(i).selfSubtract(e.multiply(n)).signum()},q.intersection=function(t,e,n,i){var r=F.valueOf(i.y).selfSubtract(n.y).selfMultiply(F.valueOf(e.x).selfSubtract(t.x)),o=F.valueOf(i.x).selfSubtract(n.x).selfMultiply(F.valueOf(e.y).selfSubtract(t.y)),s=r.subtract(o),a=F.valueOf(i.x).selfSubtract(n.x).selfMultiply(F.valueOf(t.y).selfSubtract(n.y)),u=F.valueOf(i.y).selfSubtract(n.y).selfMultiply(F.valueOf(t.x).selfSubtract(n.x)),l=a.subtract(u).selfDivide(s).doubleValue(),c=F.valueOf(t.x).selfAdd(F.valueOf(e.x).selfSubtract(t.x).selfMultiply(l)).doubleValue(),p=F.valueOf(e.x).selfSubtract(t.x).selfMultiply(F.valueOf(t.y).selfSubtract(n.y)),h=F.valueOf(e.y).selfSubtract(t.y).selfMultiply(F.valueOf(t.x).selfSubtract(n.x)),f=p.subtract(h).selfDivide(s).doubleValue(),g=F.valueOf(n.y).selfAdd(F.valueOf(i.y).selfSubtract(n.y).selfMultiply(f)).doubleValue();return new C(c,g)},q.orientationIndexFilter=function(t,e,n){var i=null,r=(t.x-n.x)*(e.y-n.y),o=(t.y-n.y)*(e.x-n.x),s=r-o;if(r>0){if(o<=0)return q.signum(s);i=r+o}else{if(!(r<0))return q.signum(s);if(o>=0)return q.signum(s);i=-r-o}var a=q.DP_SAFE_EPSILON*i;return s>=a||-s>=a?q.signum(s):2},q.signum=function(t){return t>0?1:t<0?-1:0},B.DP_SAFE_EPSILON.get=function(){return 1e-15},Object.defineProperties(q,B);var V=function(){},U={X:{configurable:!0},Y:{configurable:!0},Z:{configurable:!0},M:{configurable:!0}};U.X.get=function(){return 0},U.Y.get=function(){return 1},U.Z.get=function(){return 2},U.M.get=function(){return 3},V.prototype.setOrdinate=function(t,e,n){},V.prototype.size=function(){},V.prototype.getOrdinate=function(t,e){},V.prototype.getCoordinate=function(){},V.prototype.getCoordinateCopy=function(t){},V.prototype.getDimension=function(){},V.prototype.getX=function(t){},V.prototype.clone=function(){},V.prototype.expandEnvelope=function(t){},V.prototype.copy=function(){},V.prototype.getY=function(t){},V.prototype.toCoordinateArray=function(){},V.prototype.interfaces_=function(){return[x]},V.prototype.getClass=function(){return V},Object.defineProperties(V,U);var z=function(){},X=function(t){function e(){t.call(this,"Projective point not representable on the Cartesian plane.")}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(z),Y=function(){};Y.arraycopy=function(t,e,n,i,r){for(var o=0,s=e;s<e+r;s++)n[i+o]=t[s],o++},Y.getProperty=function(t){return{"line.separator":"\n"}[t]};var k=function t(){if(this.x=null,this.y=null,this.w=null,0===arguments.length)this.x=0,this.y=0,this.w=1;else if(1===arguments.length){var e=arguments[0];this.x=e.x,this.y=e.y,this.w=1}else if(2===arguments.length){if("number"==typeof arguments[0]&&"number"==typeof arguments[1]){var n=arguments[0],i=arguments[1];this.x=n,this.y=i,this.w=1}else if(arguments[0]instanceof t&&arguments[1]instanceof t){var r=arguments[0],o=arguments[1];this.x=r.y*o.w-o.y*r.w,this.y=o.x*r.w-r.x*o.w,this.w=r.x*o.y-o.x*r.y}else if(arguments[0]instanceof C&&arguments[1]instanceof C){var s=arguments[0],a=arguments[1];this.x=s.y-a.y,this.y=a.x-s.x,this.w=s.x*a.y-a.x*s.y}}else if(3===arguments.length){var u=arguments[0],l=arguments[1],c=arguments[2];this.x=u,this.y=l,this.w=c}else if(4===arguments.length){var p=arguments[0],h=arguments[1],f=arguments[2],g=arguments[3],d=p.y-h.y,y=h.x-p.x,_=p.x*h.y-h.x*p.y,m=f.y-g.y,v=g.x-f.x,I=f.x*g.y-g.x*f.y;this.x=y*I-v*_,this.y=m*_-d*I,this.w=d*v-m*y}};k.prototype.getY=function(){var t=this.y/this.w;if(v.isNaN(t)||v.isInfinite(t))throw new X;return t},k.prototype.getX=function(){var t=this.x/this.w;if(v.isNaN(t)||v.isInfinite(t))throw new X;return t},k.prototype.getCoordinate=function(){var t=new C;return t.x=this.getX(),t.y=this.getY(),t},k.prototype.interfaces_=function(){return[]},k.prototype.getClass=function(){return k},k.intersection=function(t,e,n,i){var r=t.y-e.y,o=e.x-t.x,s=t.x*e.y-e.x*t.y,a=n.y-i.y,u=i.x-n.x,l=n.x*i.y-i.x*n.y,c=r*u-a*o,p=(o*l-u*s)/c,h=(a*s-r*l)/c;if(v.isNaN(p)||v.isInfinite(p)||v.isNaN(h)||v.isInfinite(h))throw new X;return new C(p,h)};var j=function t(){if(this._minx=null,this._maxx=null,this._miny=null,this._maxy=null,0===arguments.length)this.init();else if(1===arguments.length){if(arguments[0]instanceof C){var e=arguments[0];this.init(e.x,e.x,e.y,e.y)}else if(arguments[0]instanceof t){var n=arguments[0];this.init(n)}}else if(2===arguments.length){var i=arguments[0],r=arguments[1];this.init(i.x,r.x,i.y,r.y)}else if(4===arguments.length){var o=arguments[0],s=arguments[1],a=arguments[2],u=arguments[3];this.init(o,s,a,u)}},H={serialVersionUID:{configurable:!0}};j.prototype.getArea=function(){return this.getWidth()*this.getHeight()},j.prototype.equals=function(t){if(!(t instanceof j))return!1;var e=t;return this.isNull()?e.isNull():this._maxx===e.getMaxX()&&this._maxy===e.getMaxY()&&this._minx===e.getMinX()&&this._miny===e.getMinY()},j.prototype.intersection=function(t){if(this.isNull()||t.isNull()||!this.intersects(t))return new j;var e=this._minx>t._minx?this._minx:t._minx,n=this._miny>t._miny?this._miny:t._miny,i=this._maxx<t._maxx?this._maxx:t._maxx,r=this._maxy<t._maxy?this._maxy:t._maxy;return new j(e,i,n,r)},j.prototype.isNull=function(){return this._maxx<this._minx},j.prototype.getMaxX=function(){return this._maxx},j.prototype.covers=function(){if(1===arguments.length){if(arguments[0]instanceof C){var t=arguments[0];return this.covers(t.x,t.y)}if(arguments[0]instanceof j){var e=arguments[0];return!this.isNull()&&!e.isNull()&&(e.getMinX()>=this._minx&&e.getMaxX()<=this._maxx&&e.getMinY()>=this._miny&&e.getMaxY()<=this._maxy)}}else if(2===arguments.length){var n=arguments[0],i=arguments[1];return!this.isNull()&&(n>=this._minx&&n<=this._maxx&&i>=this._miny&&i<=this._maxy)}},j.prototype.intersects=function(){if(1===arguments.length){if(arguments[0]instanceof j){var t=arguments[0];return!this.isNull()&&!t.isNull()&&!(t._minx>this._maxx||t._maxx<this._minx||t._miny>this._maxy||t._maxy<this._miny)}if(arguments[0]instanceof C){var e=arguments[0];return this.intersects(e.x,e.y)}}else if(2===arguments.length){var n=arguments[0],i=arguments[1];return!this.isNull()&&!(n>this._maxx||n<this._minx||i>this._maxy||i<this._miny)}},j.prototype.getMinY=function(){return this._miny},j.prototype.getMinX=function(){return this._minx},j.prototype.expandToInclude=function(){if(1===arguments.length){if(arguments[0]instanceof C){var t=arguments[0];this.expandToInclude(t.x,t.y)}else if(arguments[0]instanceof j){var e=arguments[0];if(e.isNull())return null;this.isNull()?(this._minx=e.getMinX(),this._maxx=e.getMaxX(),this._miny=e.getMinY(),this._maxy=e.getMaxY()):(e._minx<this._minx&&(this._minx=e._minx),e._maxx>this._maxx&&(this._maxx=e._maxx),e._miny<this._miny&&(this._miny=e._miny),e._maxy>this._maxy&&(this._maxy=e._maxy))}}else if(2===arguments.length){var n=arguments[0],i=arguments[1];this.isNull()?(this._minx=n,this._maxx=n,this._miny=i,this._maxy=i):(n<this._minx&&(this._minx=n),n>this._maxx&&(this._maxx=n),i<this._miny&&(this._miny=i),i>this._maxy&&(this._maxy=i))}},j.prototype.minExtent=function(){if(this.isNull())return 0;var t=this.getWidth(),e=this.getHeight();return t<e?t:e},j.prototype.getWidth=function(){return this.isNull()?0:this._maxx-this._minx},j.prototype.compareTo=function(t){var e=t;return this.isNull()?e.isNull()?0:-1:e.isNull()?1:this._minx<e._minx?-1:this._minx>e._minx?1:this._miny<e._miny?-1:this._miny>e._miny?1:this._maxx<e._maxx?-1:this._maxx>e._maxx?1:this._maxy<e._maxy?-1:this._maxy>e._maxy?1:0},j.prototype.translate=function(t,e){if(this.isNull())return null;this.init(this.getMinX()+t,this.getMaxX()+t,this.getMinY()+e,this.getMaxY()+e)},j.prototype.toString=function(){return"Env["+this._minx+" : "+this._maxx+", "+this._miny+" : "+this._maxy+"]"},j.prototype.setToNull=function(){this._minx=0,this._maxx=-1,this._miny=0,this._maxy=-1},j.prototype.getHeight=function(){return this.isNull()?0:this._maxy-this._miny},j.prototype.maxExtent=function(){if(this.isNull())return 0;var t=this.getWidth(),e=this.getHeight();return t>e?t:e},j.prototype.expandBy=function(){if(1===arguments.length){var t=arguments[0];this.expandBy(t,t)}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(this.isNull())return null;this._minx-=e,this._maxx+=e,this._miny-=n,this._maxy+=n,(this._minx>this._maxx||this._miny>this._maxy)&&this.setToNull()}},j.prototype.contains=function(){if(1===arguments.length){if(arguments[0]instanceof j){var t=arguments[0];return this.covers(t)}if(arguments[0]instanceof C){var e=arguments[0];return this.covers(e)}}else if(2===arguments.length){var n=arguments[0],i=arguments[1];return this.covers(n,i)}},j.prototype.centre=function(){return this.isNull()?null:new C((this.getMinX()+this.getMaxX())/2,(this.getMinY()+this.getMaxY())/2)},j.prototype.init=function(){if(0===arguments.length)this.setToNull();else if(1===arguments.length){if(arguments[0]instanceof C){var t=arguments[0];this.init(t.x,t.x,t.y,t.y)}else if(arguments[0]instanceof j){var e=arguments[0];this._minx=e._minx,this._maxx=e._maxx,this._miny=e._miny,this._maxy=e._maxy}}else if(2===arguments.length){var n=arguments[0],i=arguments[1];this.init(n.x,i.x,n.y,i.y)}else if(4===arguments.length){var r=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3];r<o?(this._minx=r,this._maxx=o):(this._minx=o,this._maxx=r),s<a?(this._miny=s,this._maxy=a):(this._miny=a,this._maxy=s)}},j.prototype.getMaxY=function(){return this._maxy},j.prototype.distance=function(t){if(this.intersects(t))return 0;var e=0;this._maxx<t._minx?e=t._minx-this._maxx:this._minx>t._maxx&&(e=this._minx-t._maxx);var n=0;return this._maxy<t._miny?n=t._miny-this._maxy:this._miny>t._maxy&&(n=this._miny-t._maxy),0===e?n:0===n?e:Math.sqrt(e*e+n*n)},j.prototype.hashCode=function(){var t=17;return t=37*t+C.hashCode(this._minx),t=37*t+C.hashCode(this._maxx),t=37*t+C.hashCode(this._miny),t=37*t+C.hashCode(this._maxy)},j.prototype.interfaces_=function(){return[E,e]},j.prototype.getClass=function(){return j},j.intersects=function(){if(3===arguments.length){var t=arguments[0],e=arguments[1],n=arguments[2];return n.x>=(t.x<e.x?t.x:e.x)&&n.x<=(t.x>e.x?t.x:e.x)&&n.y>=(t.y<e.y?t.y:e.y)&&n.y<=(t.y>e.y?t.y:e.y)}if(4===arguments.length){var i=arguments[0],r=arguments[1],o=arguments[2],s=arguments[3],a=Math.min(o.x,s.x),u=Math.max(o.x,s.x),l=Math.min(i.x,r.x),c=Math.max(i.x,r.x);return!(l>u)&&(!(c<a)&&(a=Math.min(o.y,s.y),u=Math.max(o.y,s.y),l=Math.min(i.y,r.y),c=Math.max(i.y,r.y),!(l>u)&&!(c<a)))}},H.serialVersionUID.get=function(){return 0x51845cd552189800},Object.defineProperties(j,H);var W={typeStr:/^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,emptyTypeStr:/^\s*(\w+)\s*EMPTY\s*$/,spaces:/\s+/,parenComma:/\)\s*,\s*\(/,doubleParenComma:/\)\s*\)\s*,\s*\(\s*\(/,trimParens:/^\s*\(?(.*?)\)?\s*$/},K=function(t){this.geometryFactory=t||new _e};K.prototype.read=function(t){var e,n,i;t=t.replace(/[\n\r]/g," ");var r=W.typeStr.exec(t);if(-1!==t.search("EMPTY")&&((r=W.emptyTypeStr.exec(t))[2]=void 0),r&&(n=r[1].toLowerCase(),i=r[2],Q[n]&&(e=Q[n].apply(this,[i]))),void 0===e)throw new Error("Could not parse WKT "+t);return e},K.prototype.write=function(t){return this.extractGeometry(t)},K.prototype.extractGeometry=function(t){var e=t.getGeometryType().toLowerCase();if(!J[e])return null;var n=e.toUpperCase();return t.isEmpty()?n+" EMPTY":n+"("+J[e].apply(this,[t])+")"};var J={coordinate:function(t){return t.x+" "+t.y},point:function(t){return J.coordinate.call(this,t._coordinates._coordinates[0])},multipoint:function(t){for(var e=[],n=0,i=t._geometries.length;n<i;++n)e.push("("+J.point.apply(this,[t._geometries[n]])+")");return e.join(",")},linestring:function(t){for(var e=[],n=0,i=t._points._coordinates.length;n<i;++n)e.push(J.coordinate.apply(this,[t._points._coordinates[n]]));return e.join(",")},linearring:function(t){for(var e=[],n=0,i=t._points._coordinates.length;n<i;++n)e.push(J.coordinate.apply(this,[t._points._coordinates[n]]));return e.join(",")},multilinestring:function(t){for(var e=[],n=0,i=t._geometries.length;n<i;++n)e.push("("+J.linestring.apply(this,[t._geometries[n]])+")");return e.join(",")},polygon:function(t){var e=[];e.push("("+J.linestring.apply(this,[t._shell])+")");for(var n=0,i=t._holes.length;n<i;++n)e.push("("+J.linestring.apply(this,[t._holes[n]])+")");return e.join(",")},multipolygon:function(t){for(var e=[],n=0,i=t._geometries.length;n<i;++n)e.push("("+J.polygon.apply(this,[t._geometries[n]])+")");return e.join(",")},geometrycollection:function(t){for(var e=[],n=0,i=t._geometries.length;n<i;++n)e.push(this.extractGeometry(t._geometries[n]));return e.join(",")}},Q={point:function(t){if(void 0===t)return this.geometryFactory.createPoint();var e=t.trim().split(W.spaces);return this.geometryFactory.createPoint(new C(Number.parseFloat(e[0]),Number.parseFloat(e[1])))},multipoint:function(t){if(void 0===t)return this.geometryFactory.createMultiPoint();for(var e,n=t.trim().split(","),i=[],r=0,o=n.length;r<o;++r)e=n[r].replace(W.trimParens,"$1"),i.push(Q.point.apply(this,[e]));return this.geometryFactory.createMultiPoint(i)},linestring:function(t){if(void 0===t)return this.geometryFactory.createLineString();for(var e,n=t.trim().split(","),i=[],r=0,o=n.length;r<o;++r)e=n[r].trim().split(W.spaces),i.push(new C(Number.parseFloat(e[0]),Number.parseFloat(e[1])));return this.geometryFactory.createLineString(i)},linearring:function(t){if(void 0===t)return this.geometryFactory.createLinearRing();for(var e,n=t.trim().split(","),i=[],r=0,o=n.length;r<o;++r)e=n[r].trim().split(W.spaces),i.push(new C(Number.parseFloat(e[0]),Number.parseFloat(e[1])));return this.geometryFactory.createLinearRing(i)},multilinestring:function(t){if(void 0===t)return this.geometryFactory.createMultiLineString();for(var e,n=t.trim().split(W.parenComma),i=[],r=0,o=n.length;r<o;++r)e=n[r].replace(W.trimParens,"$1"),i.push(Q.linestring.apply(this,[e]));return this.geometryFactory.createMultiLineString(i)},polygon:function(t){if(void 0===t)return this.geometryFactory.createPolygon();for(var e,n,i,r,o=t.trim().split(W.parenComma),s=[],a=0,u=o.length;a<u;++a)e=o[a].replace(W.trimParens,"$1"),n=Q.linestring.apply(this,[e]),i=this.geometryFactory.createLinearRing(n._points),0===a?r=i:s.push(i);return this.geometryFactory.createPolygon(r,s)},multipolygon:function(t){if(void 0===t)return this.geometryFactory.createMultiPolygon();for(var e,n=t.trim().split(W.doubleParenComma),i=[],r=0,o=n.length;r<o;++r)e=n[r].replace(W.trimParens,"$1"),i.push(Q.polygon.apply(this,[e]));return this.geometryFactory.createMultiPolygon(i)},geometrycollection:function(t){if(void 0===t)return this.geometryFactory.createGeometryCollection();for(var e=(t=t.replace(/,\s*([A-Za-z])/g,"|$1")).trim().split("|"),n=[],i=0,r=e.length;i<r;++i)n.push(this.read(e[i]));return this.geometryFactory.createGeometryCollection(n)}},Z=function(t){this.parser=new K(t)};Z.prototype.write=function(t){return this.parser.write(t)},Z.toLineString=function(t,e){if(2!==arguments.length)throw new Error("Not implemented");return"LINESTRING ( "+t.x+" "+t.y+", "+e.x+" "+e.y+" )"};var $=function(t){function e(e){t.call(this,e),this.name="RuntimeException",this.message=e,this.stack=(new t).stack}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Error),tt=function(t){function e(){if(t.call(this),0===arguments.length)t.call(this);else if(1===arguments.length){var e=arguments[0];t.call(this,e)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}($),et=function(){};et.prototype.interfaces_=function(){return[]},et.prototype.getClass=function(){return et},et.shouldNeverReachHere=function(){if(0===arguments.length)et.shouldNeverReachHere(null);else if(1===arguments.length){var t=arguments[0];throw new tt("Should never reach here"+(null!==t?": "+t:""))}},et.isTrue=function(){var t,e;if(1===arguments.length)t=arguments[0],et.isTrue(t,null);else if(2===arguments.length&&(t=arguments[0],e=arguments[1],!t))throw null===e?new tt:new tt(e)},et.equals=function(){var t,e,n;if(2===arguments.length)t=arguments[0],e=arguments[1],et.equals(t,e,null);else if(3===arguments.length&&(t=arguments[0],e=arguments[1],n=arguments[2],!e.equals(t)))throw new tt("Expected "+t+" but encountered "+e+(null!==n?": "+n:""))};var nt=function(){this._result=null,this._inputLines=Array(2).fill().map(function(){return Array(2)}),this._intPt=new Array(2).fill(null),this._intLineIndex=null,this._isProper=null,this._pa=null,this._pb=null,this._precisionModel=null,this._intPt[0]=new C,this._intPt[1]=new C,this._pa=this._intPt[0],this._pb=this._intPt[1],this._result=0},it={DONT_INTERSECT:{configurable:!0},DO_INTERSECT:{configurable:!0},COLLINEAR:{configurable:!0},NO_INTERSECTION:{configurable:!0},POINT_INTERSECTION:{configurable:!0},COLLINEAR_INTERSECTION:{configurable:!0}};nt.prototype.getIndexAlongSegment=function(t,e){return this.computeIntLineIndex(),this._intLineIndex[t][e]},nt.prototype.getTopologySummary=function(){var t=new D;return this.isEndPoint()&&t.append(" endpoint"),this._isProper&&t.append(" proper"),this.isCollinear()&&t.append(" collinear"),t.toString()},nt.prototype.computeIntersection=function(t,e,n,i){this._inputLines[0][0]=t,this._inputLines[0][1]=e,this._inputLines[1][0]=n,this._inputLines[1][1]=i,this._result=this.computeIntersect(t,e,n,i)},nt.prototype.getIntersectionNum=function(){return this._result},nt.prototype.computeIntLineIndex=function(){if(0===arguments.length)null===this._intLineIndex&&(this._intLineIndex=Array(2).fill().map(function(){return Array(2)}),this.computeIntLineIndex(0),this.computeIntLineIndex(1));else if(1===arguments.length){var t=arguments[0];this.getEdgeDistance(t,0)>this.getEdgeDistance(t,1)?(this._intLineIndex[t][0]=0,this._intLineIndex[t][1]=1):(this._intLineIndex[t][0]=1,this._intLineIndex[t][1]=0)}},nt.prototype.isProper=function(){return this.hasIntersection()&&this._isProper},nt.prototype.setPrecisionModel=function(t){this._precisionModel=t},nt.prototype.isInteriorIntersection=function(){if(0===arguments.length)return!!this.isInteriorIntersection(0)||!!this.isInteriorIntersection(1);if(1===arguments.length){for(var t=arguments[0],e=0;e<this._result;e++)if(!this._intPt[e].equals2D(this._inputLines[t][0])&&!this._intPt[e].equals2D(this._inputLines[t][1]))return!0;return!1}},nt.prototype.getIntersection=function(t){return this._intPt[t]},nt.prototype.isEndPoint=function(){return this.hasIntersection()&&!this._isProper},nt.prototype.hasIntersection=function(){return this._result!==nt.NO_INTERSECTION},nt.prototype.getEdgeDistance=function(t,e){return nt.computeEdgeDistance(this._intPt[e],this._inputLines[t][0],this._inputLines[t][1])},nt.prototype.isCollinear=function(){return this._result===nt.COLLINEAR_INTERSECTION},nt.prototype.toString=function(){return Z.toLineString(this._inputLines[0][0],this._inputLines[0][1])+" - "+Z.toLineString(this._inputLines[1][0],this._inputLines[1][1])+this.getTopologySummary()},nt.prototype.getEndpoint=function(t,e){return this._inputLines[t][e]},nt.prototype.isIntersection=function(t){for(var e=0;e<this._result;e++)if(this._intPt[e].equals2D(t))return!0;return!1},nt.prototype.getIntersectionAlongSegment=function(t,e){return this.computeIntLineIndex(),this._intPt[this._intLineIndex[t][e]]},nt.prototype.interfaces_=function(){return[]},nt.prototype.getClass=function(){return nt},nt.computeEdgeDistance=function(t,e,n){var i=Math.abs(n.x-e.x),r=Math.abs(n.y-e.y),o=-1;if(t.equals(e))o=0;else if(t.equals(n))o=i>r?i:r;else{var s=Math.abs(t.x-e.x),a=Math.abs(t.y-e.y);0!==(o=i>r?s:a)||t.equals(e)||(o=Math.max(s,a))}return et.isTrue(!(0===o&&!t.equals(e)),"Bad distance calculation"),o},nt.nonRobustComputeEdgeDistance=function(t,e,n){var i=t.x-e.x,r=t.y-e.y,o=Math.sqrt(i*i+r*r);return et.isTrue(!(0===o&&!t.equals(e)),"Invalid distance calculation"),o},it.DONT_INTERSECT.get=function(){return 0},it.DO_INTERSECT.get=function(){return 1},it.COLLINEAR.get=function(){return 2},it.NO_INTERSECTION.get=function(){return 0},it.POINT_INTERSECTION.get=function(){return 1},it.COLLINEAR_INTERSECTION.get=function(){return 2},Object.defineProperties(nt,it);var rt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.isInSegmentEnvelopes=function(t){var e=new j(this._inputLines[0][0],this._inputLines[0][1]),n=new j(this._inputLines[1][0],this._inputLines[1][1]);return e.contains(t)&&n.contains(t)},e.prototype.computeIntersection=function(){if(3!==arguments.length)return t.prototype.computeIntersection.apply(this,arguments);var e=arguments[0],n=arguments[1],i=arguments[2];if(this._isProper=!1,j.intersects(n,i,e)&&0===at.orientationIndex(n,i,e)&&0===at.orientationIndex(i,n,e))return this._isProper=!0,(e.equals(n)||e.equals(i))&&(this._isProper=!1),this._result=t.POINT_INTERSECTION,null;this._result=t.NO_INTERSECTION},e.prototype.normalizeToMinimum=function(t,e,n,i,r){r.x=this.smallestInAbsValue(t.x,e.x,n.x,i.x),r.y=this.smallestInAbsValue(t.y,e.y,n.y,i.y),t.x-=r.x,t.y-=r.y,e.x-=r.x,e.y-=r.y,n.x-=r.x,n.y-=r.y,i.x-=r.x,i.y-=r.y},e.prototype.safeHCoordinateIntersection=function(t,n,i,r){var o=null;try{o=k.intersection(t,n,i,r)}catch(s){if(!(s instanceof X))throw s;o=e.nearestEndpoint(t,n,i,r)}return o},e.prototype.intersection=function(t,n,i,r){var o=this.intersectionWithNormalization(t,n,i,r);return this.isInSegmentEnvelopes(o)||(o=new C(e.nearestEndpoint(t,n,i,r))),null!==this._precisionModel&&this._precisionModel.makePrecise(o),o},e.prototype.smallestInAbsValue=function(t,e,n,i){var r=t,o=Math.abs(r);return Math.abs(e)<o&&(r=e,o=Math.abs(e)),Math.abs(n)<o&&(r=n,o=Math.abs(n)),Math.abs(i)<o&&(r=i),r},e.prototype.checkDD=function(t,e,n,i,r){var o=q.intersection(t,e,n,i),s=this.isInSegmentEnvelopes(o);Y.out.println("DD in env = "+s+"  --------------------- "+o),r.distance(o)>1e-4&&Y.out.println("Distance = "+r.distance(o))},e.prototype.intersectionWithNormalization=function(t,e,n,i){var r=new C(t),o=new C(e),s=new C(n),a=new C(i),u=new C;this.normalizeToEnvCentre(r,o,s,a,u);var l=this.safeHCoordinateIntersection(r,o,s,a);return l.x+=u.x,l.y+=u.y,l},e.prototype.computeCollinearIntersection=function(e,n,i,r){var o=j.intersects(e,n,i),s=j.intersects(e,n,r),a=j.intersects(i,r,e),u=j.intersects(i,r,n);return o&&s?(this._intPt[0]=i,this._intPt[1]=r,t.COLLINEAR_INTERSECTION):a&&u?(this._intPt[0]=e,this._intPt[1]=n,t.COLLINEAR_INTERSECTION):o&&a?(this._intPt[0]=i,this._intPt[1]=e,!i.equals(e)||s||u?t.COLLINEAR_INTERSECTION:t.POINT_INTERSECTION):o&&u?(this._intPt[0]=i,this._intPt[1]=n,!i.equals(n)||s||a?t.COLLINEAR_INTERSECTION:t.POINT_INTERSECTION):s&&a?(this._intPt[0]=r,this._intPt[1]=e,!r.equals(e)||o||u?t.COLLINEAR_INTERSECTION:t.POINT_INTERSECTION):s&&u?(this._intPt[0]=r,this._intPt[1]=n,!r.equals(n)||o||a?t.COLLINEAR_INTERSECTION:t.POINT_INTERSECTION):t.NO_INTERSECTION},e.prototype.normalizeToEnvCentre=function(t,e,n,i,r){var o=t.x<e.x?t.x:e.x,s=t.y<e.y?t.y:e.y,a=t.x>e.x?t.x:e.x,u=t.y>e.y?t.y:e.y,l=n.x<i.x?n.x:i.x,c=n.y<i.y?n.y:i.y,p=n.x>i.x?n.x:i.x,h=n.y>i.y?n.y:i.y,f=((o>l?o:l)+(a<p?a:p))/2,g=((s>c?s:c)+(u<h?u:h))/2;r.x=f,r.y=g,t.x-=r.x,t.y-=r.y,e.x-=r.x,e.y-=r.y,n.x-=r.x,n.y-=r.y,i.x-=r.x,i.y-=r.y},e.prototype.computeIntersect=function(e,n,i,r){if(this._isProper=!1,!j.intersects(e,n,i,r))return t.NO_INTERSECTION;var o=at.orientationIndex(e,n,i),s=at.orientationIndex(e,n,r);if(o>0&&s>0||o<0&&s<0)return t.NO_INTERSECTION;var a=at.orientationIndex(i,r,e),u=at.orientationIndex(i,r,n);if(a>0&&u>0||a<0&&u<0)return t.NO_INTERSECTION;return 0===o&&0===s&&0===a&&0===u?this.computeCollinearIntersection(e,n,i,r):(0===o||0===s||0===a||0===u?(this._isProper=!1,e.equals2D(i)||e.equals2D(r)?this._intPt[0]=e:n.equals2D(i)||n.equals2D(r)?this._intPt[0]=n:0===o?this._intPt[0]=new C(i):0===s?this._intPt[0]=new C(r):0===a?this._intPt[0]=new C(e):0===u&&(this._intPt[0]=new C(n))):(this._isProper=!0,this._intPt[0]=this.intersection(e,n,i,r)),t.POINT_INTERSECTION)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e.nearestEndpoint=function(t,e,n,i){var r=t,o=at.distancePointLine(t,n,i),s=at.distancePointLine(e,n,i);return s<o&&(o=s,r=e),(s=at.distancePointLine(n,t,e))<o&&(o=s,r=n),(s=at.distancePointLine(i,t,e))<o&&(o=s,r=i),r},e}(nt),ot=function(){};ot.prototype.interfaces_=function(){return[]},ot.prototype.getClass=function(){return ot},ot.orientationIndex=function(t,e,n){var i=e.x-t.x,r=e.y-t.y,o=n.x-e.x,s=n.y-e.y;return ot.signOfDet2x2(i,r,o,s)},ot.signOfDet2x2=function(t,e,n,i){var r=null,o=null,s=null;if(r=1,0===t||0===i)return 0===e||0===n?0:e>0?n>0?-r:r:n>0?r:-r;if(0===e||0===n)return i>0?t>0?r:-r:t>0?-r:r;if(e>0?i>0?e<=i||(r=-r,o=t,t=n,n=o,o=e,e=i,i=o):e<=-i?(r=-r,n=-n,i=-i):(o=t,t=-n,n=o,o=e,e=-i,i=o):i>0?-e<=i?(r=-r,t=-t,e=-e):(o=-t,t=n,n=o,o=-e,e=i,i=o):e>=i?(t=-t,e=-e,n=-n,i=-i):(r=-r,o=-t,t=-n,n=o,o=-e,e=-i,i=o),t>0){if(!(n>0))return r;if(!(t<=n))return r}else{if(n>0)return-r;if(!(t>=n))return-r;r=-r,t=-t,n=-n}for(;;){if(s=Math.floor(n/t),n-=s*t,(i-=s*e)<0)return-r;if(i>e)return r;if(t>n+n){if(e<i+i)return r}else{if(e>i+i)return-r;n=t-n,i=e-i,r=-r}if(0===i)return 0===n?0:-r;if(0===n)return r;if(s=Math.floor(t/n),t-=s*n,(e-=s*i)<0)return r;if(e>i)return-r;if(n>t+t){if(i<e+e)return-r}else{if(i>e+e)return r;t=n-t,e=i-e,r=-r}if(0===e)return 0===t?0:r;if(0===t)return-r}};var st=function(){this._p=null,this._crossingCount=0,this._isPointOnSegment=!1;var t=arguments[0];this._p=t};st.prototype.countSegment=function(t,e){if(t.x<this._p.x&&e.x<this._p.x)return null;if(this._p.x===e.x&&this._p.y===e.y)return this._isPointOnSegment=!0,null;if(t.y===this._p.y&&e.y===this._p.y){var n=t.x,i=e.x;return n>i&&(n=e.x,i=t.x),this._p.x>=n&&this._p.x<=i&&(this._isPointOnSegment=!0),null}if(t.y>this._p.y&&e.y<=this._p.y||e.y>this._p.y&&t.y<=this._p.y){var r=t.x-this._p.x,o=t.y-this._p.y,s=e.x-this._p.x,a=e.y-this._p.y,u=ot.signOfDet2x2(r,o,s,a);if(0===u)return this._isPointOnSegment=!0,null;a<o&&(u=-u),u>0&&this._crossingCount++}},st.prototype.isPointInPolygon=function(){return this.getLocation()!==w.EXTERIOR},st.prototype.getLocation=function(){return this._isPointOnSegment?w.BOUNDARY:this._crossingCount%2==1?w.INTERIOR:w.EXTERIOR},st.prototype.isOnSegment=function(){return this._isPointOnSegment},st.prototype.interfaces_=function(){return[]},st.prototype.getClass=function(){return st},st.locatePointInRing=function(){if(arguments[0]instanceof C&&T(arguments[1],V)){for(var t=arguments[0],e=arguments[1],n=new st(t),i=new C,r=new C,o=1;o<e.size();o++)if(e.getCoordinate(o,i),e.getCoordinate(o-1,r),n.countSegment(i,r),n.isOnSegment())return n.getLocation();return n.getLocation()}if(arguments[0]instanceof C&&arguments[1]instanceof Array){for(var s=arguments[0],a=arguments[1],u=new st(s),l=1;l<a.length;l++){var c=a[l],p=a[l-1];if(u.countSegment(c,p),u.isOnSegment())return u.getLocation()}return u.getLocation()}};var at=function(){},ut={CLOCKWISE:{configurable:!0},RIGHT:{configurable:!0},COUNTERCLOCKWISE:{configurable:!0},LEFT:{configurable:!0},COLLINEAR:{configurable:!0},STRAIGHT:{configurable:!0}};at.prototype.interfaces_=function(){return[]},at.prototype.getClass=function(){return at},at.orientationIndex=function(t,e,n){return q.orientationIndex(t,e,n)},at.signedArea=function(){if(arguments[0]instanceof Array){var t=arguments[0];if(t.length<3)return 0;for(var e=0,n=t[0].x,i=1;i<t.length-1;i++){var r=t[i].x-n,o=t[i+1].y;e+=r*(t[i-1].y-o)}return e/2}if(T(arguments[0],V)){var s=arguments[0],a=s.size();if(a<3)return 0;var u=new C,l=new C,c=new C;s.getCoordinate(0,l),s.getCoordinate(1,c);var p=l.x;c.x-=p;for(var h=0,f=1;f<a-1;f++)u.y=l.y,l.x=c.x,l.y=c.y,s.getCoordinate(f+1,c),c.x-=p,h+=l.x*(u.y-c.y);return h/2}},at.distanceLineLine=function(t,e,n,i){if(t.equals(e))return at.distancePointLine(t,n,i);if(n.equals(i))return at.distancePointLine(i,t,e);var r=!1;if(j.intersects(t,e,n,i)){var o=(e.x-t.x)*(i.y-n.y)-(e.y-t.y)*(i.x-n.x);if(0===o)r=!0;else{var s=(t.y-n.y)*(i.x-n.x)-(t.x-n.x)*(i.y-n.y),a=((t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y))/o,u=s/o;(u<0||u>1||a<0||a>1)&&(r=!0)}}else r=!0;return r?R.min(at.distancePointLine(t,n,i),at.distancePointLine(e,n,i),at.distancePointLine(n,t,e),at.distancePointLine(i,t,e)):0},at.isPointInRing=function(t,e){return at.locatePointInRing(t,e)!==w.EXTERIOR},at.computeLength=function(t){var e=t.size();if(e<=1)return 0;var n=0,i=new C;t.getCoordinate(0,i);for(var r=i.x,o=i.y,s=1;s<e;s++){t.getCoordinate(s,i);var a=i.x,u=i.y,l=a-r,c=u-o;n+=Math.sqrt(l*l+c*c),r=a,o=u}return n},at.isCCW=function(t){var e=t.length-1;if(e<3)throw new m("Ring has fewer than 4 points, so orientation cannot be determined");for(var n=t[0],i=0,r=1;r<=e;r++){var o=t[r];o.y>n.y&&(n=o,i=r)}var s=i;do{(s-=1)<0&&(s=e)}while(t[s].equals2D(n)&&s!==i);var a=i;do{a=(a+1)%e}while(t[a].equals2D(n)&&a!==i);var u=t[s],l=t[a];if(u.equals2D(n)||l.equals2D(n)||u.equals2D(l))return!1;var c=at.computeOrientation(u,n,l),p=!1;return p=0===c?u.x>l.x:c>0,p},at.locatePointInRing=function(t,e){return st.locatePointInRing(t,e)},at.distancePointLinePerpendicular=function(t,e,n){var i=(n.x-e.x)*(n.x-e.x)+(n.y-e.y)*(n.y-e.y),r=((e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y))/i;return Math.abs(r)*Math.sqrt(i)},at.computeOrientation=function(t,e,n){return at.orientationIndex(t,e,n)},at.distancePointLine=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];if(0===e.length)throw new m("Line array must contain at least one vertex");for(var n=t.distance(e[0]),i=0;i<e.length-1;i++){var r=at.distancePointLine(t,e[i],e[i+1]);r<n&&(n=r)}return n}if(3===arguments.length){var o=arguments[0],s=arguments[1],a=arguments[2];if(s.x===a.x&&s.y===a.y)return o.distance(s);var u=(a.x-s.x)*(a.x-s.x)+(a.y-s.y)*(a.y-s.y),l=((o.x-s.x)*(a.x-s.x)+(o.y-s.y)*(a.y-s.y))/u;if(l<=0)return o.distance(s);if(l>=1)return o.distance(a);var c=((s.y-o.y)*(a.x-s.x)-(s.x-o.x)*(a.y-s.y))/u;return Math.abs(c)*Math.sqrt(u)}},at.isOnLine=function(t,e){for(var n=new rt,i=1;i<e.length;i++){var r=e[i-1],o=e[i];if(n.computeIntersection(t,r,o),n.hasIntersection())return!0}return!1},ut.CLOCKWISE.get=function(){return-1},ut.RIGHT.get=function(){return at.CLOCKWISE},ut.COUNTERCLOCKWISE.get=function(){return 1},ut.LEFT.get=function(){return at.COUNTERCLOCKWISE},ut.COLLINEAR.get=function(){return 0},ut.STRAIGHT.get=function(){return at.COLLINEAR},Object.defineProperties(at,ut);var lt=function(){};lt.prototype.filter=function(t){},lt.prototype.interfaces_=function(){return[]},lt.prototype.getClass=function(){return lt};var ct=function(){var t=arguments[0];this._envelope=null,this._factory=null,this._SRID=null,this._userData=null,this._factory=t,this._SRID=t.getSRID()},pt={serialVersionUID:{configurable:!0},SORTINDEX_POINT:{configurable:!0},SORTINDEX_MULTIPOINT:{configurable:!0},SORTINDEX_LINESTRING:{configurable:!0},SORTINDEX_LINEARRING:{configurable:!0},SORTINDEX_MULTILINESTRING:{configurable:!0},SORTINDEX_POLYGON:{configurable:!0},SORTINDEX_MULTIPOLYGON:{configurable:!0},SORTINDEX_GEOMETRYCOLLECTION:{configurable:!0},geometryChangedFilter:{configurable:!0}};ct.prototype.isGeometryCollection=function(){return this.getSortIndex()===ct.SORTINDEX_GEOMETRYCOLLECTION},ct.prototype.getFactory=function(){return this._factory},ct.prototype.getGeometryN=function(t){return this},ct.prototype.getArea=function(){return 0},ct.prototype.isRectangle=function(){return!1},ct.prototype.equals=function(){if(arguments[0]instanceof ct){var t=arguments[0];return null!==t&&this.equalsTopo(t)}if(arguments[0]instanceof Object){var e=arguments[0];if(!(e instanceof ct))return!1;var n=e;return this.equalsExact(n)}},ct.prototype.equalsExact=function(t){return this===t||this.equalsExact(t,0)},ct.prototype.geometryChanged=function(){this.apply(ct.geometryChangedFilter)},ct.prototype.geometryChangedAction=function(){this._envelope=null},ct.prototype.equalsNorm=function(t){return null!==t&&this.norm().equalsExact(t.norm())},ct.prototype.getLength=function(){return 0},ct.prototype.getNumGeometries=function(){return 1},ct.prototype.compareTo=function(){if(1===arguments.length){var t=arguments[0],e=t;return this.getSortIndex()!==e.getSortIndex()?this.getSortIndex()-e.getSortIndex():this.isEmpty()&&e.isEmpty()?0:this.isEmpty()?-1:e.isEmpty()?1:this.compareToSameClass(t)}if(2===arguments.length){var n=arguments[0],i=arguments[1];return this.getSortIndex()!==n.getSortIndex()?this.getSortIndex()-n.getSortIndex():this.isEmpty()&&n.isEmpty()?0:this.isEmpty()?-1:n.isEmpty()?1:this.compareToSameClass(n,i)}},ct.prototype.getUserData=function(){return this._userData},ct.prototype.getSRID=function(){return this._SRID},ct.prototype.getEnvelope=function(){return this.getFactory().toGeometry(this.getEnvelopeInternal())},ct.prototype.checkNotGeometryCollection=function(t){if(t.getSortIndex()===ct.SORTINDEX_GEOMETRYCOLLECTION)throw new m("This method does not support GeometryCollection arguments")},ct.prototype.equal=function(t,e,n){return 0===n?t.equals(e):t.distance(e)<=n},ct.prototype.norm=function(){var t=this.copy();return t.normalize(),t},ct.prototype.getPrecisionModel=function(){return this._factory.getPrecisionModel()},ct.prototype.getEnvelopeInternal=function(){return null===this._envelope&&(this._envelope=this.computeEnvelopeInternal()),new j(this._envelope)},ct.prototype.setSRID=function(t){this._SRID=t},ct.prototype.setUserData=function(t){this._userData=t},ct.prototype.compare=function(t,e){for(var n=t.iterator(),i=e.iterator();n.hasNext()&&i.hasNext();){var r=n.next(),o=i.next(),s=r.compareTo(o);if(0!==s)return s}return n.hasNext()?1:i.hasNext()?-1:0},ct.prototype.hashCode=function(){return this.getEnvelopeInternal().hashCode()},ct.prototype.isGeometryCollectionOrDerived=function(){return this.getSortIndex()===ct.SORTINDEX_GEOMETRYCOLLECTION||this.getSortIndex()===ct.SORTINDEX_MULTIPOINT||this.getSortIndex()===ct.SORTINDEX_MULTILINESTRING||this.getSortIndex()===ct.SORTINDEX_MULTIPOLYGON},ct.prototype.interfaces_=function(){return[x,E,e]},ct.prototype.getClass=function(){return ct},ct.hasNonEmptyElements=function(t){for(var e=0;e<t.length;e++)if(!t[e].isEmpty())return!0;return!1},ct.hasNullElements=function(t){for(var e=0;e<t.length;e++)if(null===t[e])return!0;return!1},pt.serialVersionUID.get=function(){return 0x799ea46522854c00},pt.SORTINDEX_POINT.get=function(){return 0},pt.SORTINDEX_MULTIPOINT.get=function(){return 1},pt.SORTINDEX_LINESTRING.get=function(){return 2},pt.SORTINDEX_LINEARRING.get=function(){return 3},pt.SORTINDEX_MULTILINESTRING.get=function(){return 4},pt.SORTINDEX_POLYGON.get=function(){return 5},pt.SORTINDEX_MULTIPOLYGON.get=function(){return 6},pt.SORTINDEX_GEOMETRYCOLLECTION.get=function(){return 7},pt.geometryChangedFilter.get=function(){return ht},Object.defineProperties(ct,pt);var ht=function(){};ht.interfaces_=function(){return[lt]},ht.filter=function(t){t.geometryChangedAction()};var ft=function(){};ft.prototype.filter=function(t){},ft.prototype.interfaces_=function(){return[]},ft.prototype.getClass=function(){return ft};var gt=function(){},dt={Mod2BoundaryNodeRule:{configurable:!0},EndPointBoundaryNodeRule:{configurable:!0},MultiValentEndPointBoundaryNodeRule:{configurable:!0},MonoValentEndPointBoundaryNodeRule:{configurable:!0},MOD2_BOUNDARY_RULE:{configurable:!0},ENDPOINT_BOUNDARY_RULE:{configurable:!0},MULTIVALENT_ENDPOINT_BOUNDARY_RULE:{configurable:!0},MONOVALENT_ENDPOINT_BOUNDARY_RULE:{configurable:!0},OGC_SFS_BOUNDARY_RULE:{configurable:!0}};gt.prototype.isInBoundary=function(t){},gt.prototype.interfaces_=function(){return[]},gt.prototype.getClass=function(){return gt},dt.Mod2BoundaryNodeRule.get=function(){return yt},dt.EndPointBoundaryNodeRule.get=function(){return _t},dt.MultiValentEndPointBoundaryNodeRule.get=function(){return mt},dt.MonoValentEndPointBoundaryNodeRule.get=function(){return vt},dt.MOD2_BOUNDARY_RULE.get=function(){return new yt},dt.ENDPOINT_BOUNDARY_RULE.get=function(){return new _t},dt.MULTIVALENT_ENDPOINT_BOUNDARY_RULE.get=function(){return new mt},dt.MONOVALENT_ENDPOINT_BOUNDARY_RULE.get=function(){return new vt},dt.OGC_SFS_BOUNDARY_RULE.get=function(){return gt.MOD2_BOUNDARY_RULE},Object.defineProperties(gt,dt);var yt=function(){};yt.prototype.isInBoundary=function(t){return t%2==1},yt.prototype.interfaces_=function(){return[gt]},yt.prototype.getClass=function(){return yt};var _t=function(){};_t.prototype.isInBoundary=function(t){return t>0},_t.prototype.interfaces_=function(){return[gt]},_t.prototype.getClass=function(){return _t};var mt=function(){};mt.prototype.isInBoundary=function(t){return t>1},mt.prototype.interfaces_=function(){return[gt]},mt.prototype.getClass=function(){return mt};var vt=function(){};vt.prototype.isInBoundary=function(t){return 1===t},vt.prototype.interfaces_=function(){return[gt]},vt.prototype.getClass=function(){return vt};var It=function(){};It.prototype.add=function(){},It.prototype.addAll=function(){},It.prototype.isEmpty=function(){},It.prototype.iterator=function(){},It.prototype.size=function(){},It.prototype.toArray=function(){},It.prototype.remove=function(){},(n.prototype=new Error).name="IndexOutOfBoundsException";var Et=function(){};Et.prototype.hasNext=function(){},Et.prototype.next=function(){},Et.prototype.remove=function(){};var xt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(){},e.prototype.set=function(){},e.prototype.isEmpty=function(){},e}(It);(i.prototype=new Error).name="NoSuchElementException";var Nt=function(t){function e(){t.call(this),this.array_=[],arguments[0]instanceof It&&this.addAll(arguments[0])}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.ensureCapacity=function(){},e.prototype.interfaces_=function(){return[t,It]},e.prototype.add=function(t){return 1===arguments.length?this.array_.push(t):this.array_.splice(arguments[0],arguments[1]),!0},e.prototype.clear=function(){this.array_=[]},e.prototype.addAll=function(t){for(var e=t.iterator();e.hasNext();)this.add(e.next());return!0},e.prototype.set=function(t,e){var n=this.array_[t];return this.array_[t]=e,n},e.prototype.iterator=function(){return new Ct(this)},e.prototype.get=function(t){if(t<0||t>=this.size())throw new n;return this.array_[t]},e.prototype.isEmpty=function(){return 0===this.array_.length},e.prototype.size=function(){return this.array_.length},e.prototype.toArray=function(){for(var t=[],e=0,n=this.array_.length;e<n;e++)t.push(this.array_[e]);return t},e.prototype.remove=function(t){for(var e=!1,n=0,i=this.array_.length;n<i;n++)if(this.array_[n]===t){this.array_.splice(n,1),e=!0;break}return e},e}(xt),Ct=function(t){function e(e){t.call(this),this.arrayList_=e,this.position_=0}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.next=function(){if(this.position_===this.arrayList_.size())throw new i;return this.arrayList_.get(this.position_++)},e.prototype.hasNext=function(){return this.position_<this.arrayList_.size()},e.prototype.set=function(t){return this.arrayList_.set(this.position_-1,t)},e.prototype.remove=function(){this.arrayList_.remove(this.arrayList_.get(this.position_))},e}(Et),St=function(t){function e(){if(t.call(this),0===arguments.length);else if(1===arguments.length){var e=arguments[0];this.ensureCapacity(e.length),this.add(e,!0)}else if(2===arguments.length){var n=arguments[0],i=arguments[1];this.ensureCapacity(n.length),this.add(n,i)}}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={coordArrayType:{configurable:!0}};return n.coordArrayType.get=function(){return new Array(0).fill(null)},e.prototype.getCoordinate=function(t){return this.get(t)},e.prototype.addAll=function(){if(2===arguments.length){for(var e=arguments[0],n=arguments[1],i=!1,r=e.iterator();r.hasNext();)this.add(r.next(),n),i=!0;return i}return t.prototype.addAll.apply(this,arguments)},e.prototype.clone=function(){for(var e=t.prototype.clone.call(this),n=0;n<this.size();n++)e.add(n,this.get(n).copy());return e},e.prototype.toCoordinateArray=function(){return this.toArray(e.coordArrayType)},e.prototype.add=function(){if(1===arguments.length){var e=arguments[0];t.prototype.add.call(this,e)}else if(2===arguments.length){if(arguments[0]instanceof Array&&"boolean"==typeof arguments[1]){var n=arguments[0],i=arguments[1];return this.add(n,i,!0),!0}if(arguments[0]instanceof C&&"boolean"==typeof arguments[1]){var r=arguments[0];if(!arguments[1]&&this.size()>=1){if(this.get(this.size()-1).equals2D(r))return null}t.prototype.add.call(this,r)}else if(arguments[0]instanceof Object&&"boolean"==typeof arguments[1]){var o=arguments[0],s=arguments[1];return this.add(o,s),!0}}else if(3===arguments.length){if("boolean"==typeof arguments[2]&&arguments[0]instanceof Array&&"boolean"==typeof arguments[1]){var a=arguments[0],u=arguments[1];if(arguments[2])for(var l=0;l<a.length;l++)this.add(a[l],u);else for(var c=a.length-1;c>=0;c--)this.add(a[c],u);return!0}if("boolean"==typeof arguments[2]&&Number.isInteger(arguments[0])&&arguments[1]instanceof C){var p=arguments[0],h=arguments[1];if(!arguments[2]){var f=this.size();if(f>0){if(p>0){if(this.get(p-1).equals2D(h))return null}if(p<f){if(this.get(p).equals2D(h))return null}}}t.prototype.add.call(this,p,h)}}else if(4===arguments.length){var g=arguments[0],d=arguments[1],y=arguments[2],_=arguments[3],m=1;y>_&&(m=-1);for(var v=y;v!==_;v+=m)this.add(g[v],d);return!0}},e.prototype.closeRing=function(){this.size()>0&&this.add(new C(this.get(0)),!1)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},Object.defineProperties(e,n),e}(Nt),Lt=function(){},bt={ForwardComparator:{configurable:!0},BidirectionalComparator:{configurable:!0},coordArrayType:{configurable:!0}};bt.ForwardComparator.get=function(){return wt},bt.BidirectionalComparator.get=function(){return Ot},bt.coordArrayType.get=function(){return new Array(0).fill(null)},Lt.prototype.interfaces_=function(){return[]},Lt.prototype.getClass=function(){return Lt},Lt.isRing=function(t){return!(t.length<4)&&!!t[0].equals2D(t[t.length-1])},Lt.ptNotInList=function(t,e){for(var n=0;n<t.length;n++){var i=t[n];if(Lt.indexOf(i,e)<0)return i}return null},Lt.scroll=function(t,e){var n=Lt.indexOf(e,t);if(n<0)return null;var i=new Array(t.length).fill(null);Y.arraycopy(t,n,i,0,t.length-n),Y.arraycopy(t,0,i,t.length-n,n),Y.arraycopy(i,0,t,0,t.length)},Lt.equals=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];if(t===e)return!0;if(null===t||null===e)return!1;if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!t[n].equals(e[n]))return!1;return!0}if(3===arguments.length){var i=arguments[0],r=arguments[1],o=arguments[2];if(i===r)return!0;if(null===i||null===r)return!1;if(i.length!==r.length)return!1;for(var s=0;s<i.length;s++)if(0!==o.compare(i[s],r[s]))return!1;return!0}},Lt.intersection=function(t,e){for(var n=new St,i=0;i<t.length;i++)e.intersects(t[i])&&n.add(t[i],!0);return n.toCoordinateArray()},Lt.hasRepeatedPoints=function(t){for(var e=1;e<t.length;e++)if(t[e-1].equals(t[e]))return!0;return!1},Lt.removeRepeatedPoints=function(t){if(!Lt.hasRepeatedPoints(t))return t;return new St(t,!1).toCoordinateArray()},Lt.reverse=function(t){for(var e=t.length-1,n=Math.trunc(e/2),i=0;i<=n;i++){var r=t[i];t[i]=t[e-i],t[e-i]=r}},Lt.removeNull=function(t){for(var e=0,n=0;n<t.length;n++)null!==t[n]&&e++;var i=new Array(e).fill(null);if(0===e)return i;for(var r=0,o=0;o<t.length;o++)null!==t[o]&&(i[r++]=t[o]);return i},Lt.copyDeep=function(){if(1===arguments.length){for(var t=arguments[0],e=new Array(t.length).fill(null),n=0;n<t.length;n++)e[n]=new C(t[n]);return e}if(5===arguments.length)for(var i=arguments[0],r=arguments[1],o=arguments[2],s=arguments[3],a=arguments[4],u=0;u<a;u++)o[s+u]=new C(i[r+u])},Lt.isEqualReversed=function(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=e[t.length-n-1];if(0!==i.compareTo(r))return!1}return!0},Lt.envelope=function(t){for(var e=new j,n=0;n<t.length;n++)e.expandToInclude(t[n]);return e},Lt.toCoordinateArray=function(t){return t.toArray(Lt.coordArrayType)},Lt.atLeastNCoordinatesOrNothing=function(t,e){return e.length>=t?e:[]},Lt.indexOf=function(t,e){for(var n=0;n<e.length;n++)if(t.equals(e[n]))return n;return-1},Lt.increasingDirection=function(t){for(var e=0;e<Math.trunc(t.length/2);e++){var n=t.length-1-e,i=t[e].compareTo(t[n]);if(0!==i)return i}return 1},Lt.compare=function(t,e){for(var n=0;n<t.length&&n<e.length;){var i=t[n].compareTo(e[n]);if(0!==i)return i;n++}return n<e.length?-1:n<t.length?1:0},Lt.minCoordinate=function(t){for(var e=null,n=0;n<t.length;n++)(null===e||e.compareTo(t[n])>0)&&(e=t[n]);return e},Lt.extract=function(t,e,n){e=R.clamp(e,0,t.length);var i=(n=R.clamp(n,-1,t.length))-e+1;n<0&&(i=0),e>=t.length&&(i=0),n<e&&(i=0);var r=new Array(i).fill(null);if(0===i)return r;for(var o=0,s=e;s<=n;s++)r[o++]=t[s];return r},Object.defineProperties(Lt,bt);var wt=function(){};wt.prototype.compare=function(t,e){return Lt.compare(t,e)},wt.prototype.interfaces_=function(){return[N]},wt.prototype.getClass=function(){return wt};var Ot=function(){};Ot.prototype.compare=function(t,e){var n=t,i=e;if(n.length<i.length)return-1;if(n.length>i.length)return 1;if(0===n.length)return 0;var r=Lt.compare(n,i);return Lt.isEqualReversed(n,i)?0:r},Ot.prototype.OLDcompare=function(t,e){var n=t,i=e;if(n.length<i.length)return-1;if(n.length>i.length)return 1;if(0===n.length)return 0;for(var r=Lt.increasingDirection(n),o=Lt.increasingDirection(i),s=r>0?0:n.length-1,a=o>0?0:n.length-1,u=0;u<n.length;u++){var l=n[s].compareTo(i[a]);if(0!==l)return l;s+=r,a+=o}return 0},Ot.prototype.interfaces_=function(){return[N]},Ot.prototype.getClass=function(){return Ot};var Tt=function(){};Tt.prototype.get=function(){},Tt.prototype.put=function(){},Tt.prototype.size=function(){},Tt.prototype.values=function(){},Tt.prototype.entrySet=function(){};var Rt=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e}(Tt);(r.prototype=new Error).name="OperationNotSupported",(o.prototype=new It).contains=function(){};var Pt=function(t){function e(){t.call(this),this.array_=[],arguments[0]instanceof It&&this.addAll(arguments[0])}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.contains=function(t){for(var e=0,n=this.array_.length;e<n;e++){if(this.array_[e]===t)return!0}return!1},e.prototype.add=function(t){return!this.contains(t)&&(this.array_.push(t),!0)},e.prototype.addAll=function(t){for(var e=t.iterator();e.hasNext();)this.add(e.next());return!0},e.prototype.remove=function(t){throw new Error},e.prototype.size=function(){return this.array_.length},e.prototype.isEmpty=function(){return 0===this.array_.length},e.prototype.toArray=function(){for(var t=[],e=0,n=this.array_.length;e<n;e++)t.push(this.array_[e]);return t},e.prototype.iterator=function(){return new Dt(this)},e}(o),Dt=function(t){function e(e){t.call(this),this.hashSet_=e,this.position_=0}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.next=function(){if(this.position_===this.hashSet_.size())throw new i;return this.hashSet_.array_[this.position_++]},e.prototype.hasNext=function(){return this.position_<this.hashSet_.size()},e.prototype.remove=function(){throw new r},e}(Et),Mt=0;(p.prototype=new Rt).get=function(t){for(var e=this.root_;null!==e;){var n=t.compareTo(e.key);if(n<0)e=e.left;else{if(!(n>0))return e.value;e=e.right}}return null},p.prototype.put=function(t,e){if(null===this.root_)return this.root_={key:t,value:e,left:null,right:null,parent:null,color:Mt,getValue:function(){return this.value},getKey:function(){return this.key}},this.size_=1,null;var n,i,r=this.root_;do{if(n=r,(i=t.compareTo(r.key))<0)r=r.left;else{if(!(i>0)){var o=r.value;return r.value=e,o}r=r.right}}while(null!==r);var s={key:t,left:null,right:null,value:e,parent:n,color:Mt,getValue:function(){return this.value},getKey:function(){return this.key}};return i<0?n.left=s:n.right=s,this.fixAfterInsertion(s),this.size_++,null},p.prototype.fixAfterInsertion=function(t){for(t.color=1;null!=t&&t!==this.root_&&1===t.parent.color;)if(a(t)===l(a(a(t)))){var e=c(a(a(t)));1===s(e)?(u(a(t),Mt),u(e,Mt),u(a(a(t)),1),t=a(a(t))):(t===c(a(t))&&(t=a(t),this.rotateLeft(t)),u(a(t),Mt),u(a(a(t)),1),this.rotateRight(a(a(t))))}else{var n=l(a(a(t)));1===s(n)?(u(a(t),Mt),u(n,Mt),u(a(a(t)),1),t=a(a(t))):(t===l(a(t))&&(t=a(t),this.rotateRight(t)),u(a(t),Mt),u(a(a(t)),1),this.rotateLeft(a(a(t))))}this.root_.color=Mt},p.prototype.values=function(){var t=new Nt,e=this.getFirstEntry();if(null!==e)for(t.add(e.value);null!==(e=p.successor(e));)t.add(e.value);return t},p.prototype.entrySet=function(){var t=new Pt,e=this.getFirstEntry();if(null!==e)for(t.add(e);null!==(e=p.successor(e));)t.add(e);return t},p.prototype.rotateLeft=function(t){if(null!=t){var e=t.right;t.right=e.left,null!=e.left&&(e.left.parent=t),e.parent=t.parent,null===t.parent?this.root_=e:t.parent.left===t?t.parent.left=e:t.parent.right=e,e.left=t,t.parent=e}},p.prototype.rotateRight=function(t){if(null!=t){var e=t.left;t.left=e.right,null!=e.right&&(e.right.parent=t),e.parent=t.parent,null===t.parent?this.root_=e:t.parent.right===t?t.parent.right=e:t.parent.left=e,e.right=t,t.parent=e}},p.prototype.getFirstEntry=function(){var t=this.root_;if(null!=t)for(;null!=t.left;)t=t.left;return t},p.successor=function(t){if(null===t)return null;if(null!==t.right){for(var e=t.right;null!==e.left;)e=e.left;return e}for(var n=t.parent,i=t;null!==n&&i===n.right;)i=n,n=n.parent;return n},p.prototype.size=function(){return this.size_};var At=function(){};At.prototype.interfaces_=function(){return[]},At.prototype.getClass=function(){return At},h.prototype=new o,(f.prototype=new h).contains=function(t){for(var e=0,n=this.array_.length;e<n;e++){if(0===this.array_[e].compareTo(t))return!0}return!1},f.prototype.add=function(t){if(this.contains(t))return!1;for(var e=0,n=this.array_.length;e<n;e++){if(1===this.array_[e].compareTo(t))return this.array_.splice(e,0,t),!0}return this.array_.push(t),!0},f.prototype.addAll=function(t){for(var e=t.iterator();e.hasNext();)this.add(e.next());return!0},f.prototype.remove=function(t){throw new r},f.prototype.size=function(){return this.array_.length},f.prototype.isEmpty=function(){return 0===this.array_.length},f.prototype.toArray=function(){for(var t=[],e=0,n=this.array_.length;e<n;e++)t.push(this.array_[e]);return t},f.prototype.iterator=function(){return new Ft(this)};var Ft=function(t){this.treeSet_=t,this.position_=0};Ft.prototype.next=function(){if(this.position_===this.treeSet_.size())throw new i;return this.treeSet_.array_[this.position_++]},Ft.prototype.hasNext=function(){return this.position_<this.treeSet_.size()},Ft.prototype.remove=function(){throw new r};var Gt=function(){};Gt.sort=function(){var t,e,n,i,r=arguments[0];if(1===arguments.length)i=function(t,e){return t.compareTo(e)},r.sort(i);else if(2===arguments.length)n=arguments[1],i=function(t,e){return n.compare(t,e)},r.sort(i);else if(3===arguments.length){(e=r.slice(arguments[1],arguments[2])).sort();var o=r.slice(0,arguments[1]).concat(e,r.slice(arguments[2],r.length));for(r.splice(0,r.length),t=0;t<o.length;t++)r.push(o[t])}else if(4===arguments.length)for(e=r.slice(arguments[1],arguments[2]),n=arguments[3],i=function(t,e){return n.compare(t,e)},e.sort(i),o=r.slice(0,arguments[1]).concat(e,r.slice(arguments[2],r.length)),r.splice(0,r.length),t=0;t<o.length;t++)r.push(o[t])},Gt.asList=function(t){for(var e=new Nt,n=0,i=t.length;n<i;n++)e.add(t[n]);return e};var qt=function(){},Bt={P:{configurable:!0},L:{configurable:!0},A:{configurable:!0},FALSE:{configurable:!0},TRUE:{configurable:!0},DONTCARE:{configurable:!0},SYM_FALSE:{configurable:!0},SYM_TRUE:{configurable:!0},SYM_DONTCARE:{configurable:!0},SYM_P:{configurable:!0},SYM_L:{configurable:!0},SYM_A:{configurable:!0}};Bt.P.get=function(){return 0},Bt.L.get=function(){return 1},Bt.A.get=function(){return 2},Bt.FALSE.get=function(){return-1},Bt.TRUE.get=function(){return-2},Bt.DONTCARE.get=function(){return-3},Bt.SYM_FALSE.get=function(){return"F"},Bt.SYM_TRUE.get=function(){return"T"},Bt.SYM_DONTCARE.get=function(){return"*"},Bt.SYM_P.get=function(){return"0"},Bt.SYM_L.get=function(){return"1"},Bt.SYM_A.get=function(){return"2"},qt.prototype.interfaces_=function(){return[]},qt.prototype.getClass=function(){return qt},qt.toDimensionSymbol=function(t){switch(t){case qt.FALSE:return qt.SYM_FALSE;case qt.TRUE:return qt.SYM_TRUE;case qt.DONTCARE:return qt.SYM_DONTCARE;case qt.P:return qt.SYM_P;case qt.L:return qt.SYM_L;case qt.A:return qt.SYM_A}throw new m("Unknown dimension value: "+t)},qt.toDimensionValue=function(t){switch(A.toUpperCase(t)){case qt.SYM_FALSE:return qt.FALSE;case qt.SYM_TRUE:return qt.TRUE;case qt.SYM_DONTCARE:return qt.DONTCARE;case qt.SYM_P:return qt.P;case qt.SYM_L:return qt.L;case qt.SYM_A:return qt.A}throw new m("Unknown dimension symbol: "+t)},Object.defineProperties(qt,Bt);var Vt=function(){};Vt.prototype.filter=function(t){},Vt.prototype.interfaces_=function(){return[]},Vt.prototype.getClass=function(){return Vt};var Ut=function(){};Ut.prototype.filter=function(t,e){},Ut.prototype.isDone=function(){},Ut.prototype.isGeometryChanged=function(){},Ut.prototype.interfaces_=function(){return[]},Ut.prototype.getClass=function(){return Ut};var zt=function(t){function e(e,n){if(t.call(this,n),this._geometries=e||[],t.hasNullElements(this._geometries))throw new m("geometries must not contain null elements")}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.computeEnvelopeInternal=function(){for(var t=new j,e=0;e<this._geometries.length;e++)t.expandToInclude(this._geometries[e].getEnvelopeInternal());return t},e.prototype.getGeometryN=function(t){return this._geometries[t]},e.prototype.getSortIndex=function(){return t.SORTINDEX_GEOMETRYCOLLECTION},e.prototype.getCoordinates=function(){for(var t=new Array(this.getNumPoints()).fill(null),e=-1,n=0;n<this._geometries.length;n++)for(var i=this._geometries[n].getCoordinates(),r=0;r<i.length;r++)t[++e]=i[r];return t},e.prototype.getArea=function(){for(var t=0,e=0;e<this._geometries.length;e++)t+=this._geometries[e].getArea();return t},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];if(!this.isEquivalentClass(e))return!1;var i=e;if(this._geometries.length!==i._geometries.length)return!1;for(var r=0;r<this._geometries.length;r++)if(!this._geometries[r].equalsExact(i._geometries[r],n))return!1;return!0}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.normalize=function(){for(var t=0;t<this._geometries.length;t++)this._geometries[t].normalize();Gt.sort(this._geometries)},e.prototype.getCoordinate=function(){return this.isEmpty()?null:this._geometries[0].getCoordinate()},e.prototype.getBoundaryDimension=function(){for(var t=qt.FALSE,e=0;e<this._geometries.length;e++)t=Math.max(t,this._geometries[e].getBoundaryDimension());return t},e.prototype.getDimension=function(){for(var t=qt.FALSE,e=0;e<this._geometries.length;e++)t=Math.max(t,this._geometries[e].getDimension());return t},e.prototype.getLength=function(){for(var t=0,e=0;e<this._geometries.length;e++)t+=this._geometries[e].getLength();return t},e.prototype.getNumPoints=function(){for(var t=0,e=0;e<this._geometries.length;e++)t+=this._geometries[e].getNumPoints();return t},e.prototype.getNumGeometries=function(){return this._geometries.length},e.prototype.reverse=function(){for(var t=this._geometries.length,e=new Array(t).fill(null),n=0;n<this._geometries.length;n++)e[n]=this._geometries[n].reverse();return this.getFactory().createGeometryCollection(e)},e.prototype.compareToSameClass=function(){if(1===arguments.length){var t=arguments[0],e=new f(Gt.asList(this._geometries)),n=new f(Gt.asList(t._geometries));return this.compare(e,n)}if(2===arguments.length){for(var i=arguments[0],r=arguments[1],o=i,s=this.getNumGeometries(),a=o.getNumGeometries(),u=0;u<s&&u<a;){var l=this.getGeometryN(u),c=o.getGeometryN(u),p=l.compareToSameClass(c,r);if(0!==p)return p;u++}return u<s?1:u<a?-1:0}},e.prototype.apply=function(){if(T(arguments[0],ft))for(var t=arguments[0],e=0;e<this._geometries.length;e++)this._geometries[e].apply(t);else if(T(arguments[0],Ut)){var n=arguments[0];if(0===this._geometries.length)return null;for(var i=0;i<this._geometries.length&&(this._geometries[i].apply(n),!n.isDone());i++);n.isGeometryChanged()&&this.geometryChanged()}else if(T(arguments[0],Vt)){var r=arguments[0];r.filter(this);for(var o=0;o<this._geometries.length;o++)this._geometries[o].apply(r)}else if(T(arguments[0],lt)){var s=arguments[0];s.filter(this);for(var a=0;a<this._geometries.length;a++)this._geometries[a].apply(s)}},e.prototype.getBoundary=function(){return this.checkNotGeometryCollection(this),et.shouldNeverReachHere(),null},e.prototype.clone=function(){var e=t.prototype.clone.call(this);e._geometries=new Array(this._geometries.length).fill(null);for(var n=0;n<this._geometries.length;n++)e._geometries[n]=this._geometries[n].clone();return e},e.prototype.getGeometryType=function(){return"GeometryCollection"},e.prototype.copy=function(){for(var t=new Array(this._geometries.length).fill(null),n=0;n<t.length;n++)t[n]=this._geometries[n].copy();return new e(t,this._factory)},e.prototype.isEmpty=function(){for(var t=0;t<this._geometries.length;t++)if(!this._geometries[t].isEmpty())return!1;return!0},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return-0x4f07bcb1f857d800},Object.defineProperties(e,n),e}(ct),Xt=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.getSortIndex=function(){return ct.SORTINDEX_MULTILINESTRING},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];return!!this.isEquivalentClass(e)&&t.prototype.equalsExact.call(this,e,n)}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.getBoundaryDimension=function(){return this.isClosed()?qt.FALSE:0},e.prototype.isClosed=function(){if(this.isEmpty())return!1;for(var t=0;t<this._geometries.length;t++)if(!this._geometries[t].isClosed())return!1;return!0},e.prototype.getDimension=function(){return 1},e.prototype.reverse=function(){for(var t=this._geometries.length,e=new Array(t).fill(null),n=0;n<this._geometries.length;n++)e[t-1-n]=this._geometries[n].reverse();return this.getFactory().createMultiLineString(e)},e.prototype.getBoundary=function(){return new Yt(this).getBoundary()},e.prototype.getGeometryType=function(){return"MultiLineString"},e.prototype.copy=function(){for(var t=new Array(this._geometries.length).fill(null),n=0;n<t.length;n++)t[n]=this._geometries[n].copy();return new e(t,this._factory)},e.prototype.interfaces_=function(){return[At]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return 0x7155d2ab4afa8000},Object.defineProperties(e,n),e}(zt),Yt=function(){if(this._geom=null,this._geomFact=null,this._bnRule=null,this._endpointMap=null,1===arguments.length){var t=arguments[0],e=gt.MOD2_BOUNDARY_RULE;this._geom=t,this._geomFact=t.getFactory(),this._bnRule=e}else if(2===arguments.length){var n=arguments[0],i=arguments[1];this._geom=n,this._geomFact=n.getFactory(),this._bnRule=i}};Yt.prototype.boundaryMultiLineString=function(t){if(this._geom.isEmpty())return this.getEmptyMultiPoint();var e=this.computeBoundaryCoordinates(t);return 1===e.length?this._geomFact.createPoint(e[0]):this._geomFact.createMultiPointFromCoords(e)},Yt.prototype.getBoundary=function(){return this._geom instanceof Kt?this.boundaryLineString(this._geom):this._geom instanceof Xt?this.boundaryMultiLineString(this._geom):this._geom.getBoundary()},Yt.prototype.boundaryLineString=function(t){if(this._geom.isEmpty())return this.getEmptyMultiPoint();if(t.isClosed()){return this._bnRule.isInBoundary(2)?t.getStartPoint():this._geomFact.createMultiPoint()}return this._geomFact.createMultiPoint([t.getStartPoint(),t.getEndPoint()])},Yt.prototype.getEmptyMultiPoint=function(){return this._geomFact.createMultiPoint()},Yt.prototype.computeBoundaryCoordinates=function(t){var e=new Nt;this._endpointMap=new p;for(var n=0;n<t.getNumGeometries();n++){var i=t.getGeometryN(n);0!==i.getNumPoints()&&(this.addEndpoint(i.getCoordinateN(0)),this.addEndpoint(i.getCoordinateN(i.getNumPoints()-1)))}for(var r=this._endpointMap.entrySet().iterator();r.hasNext();){var o=r.next(),s=o.getValue().count;this._bnRule.isInBoundary(s)&&e.add(o.getKey())}return Lt.toCoordinateArray(e)},Yt.prototype.addEndpoint=function(t){var e=this._endpointMap.get(t);null===e&&(e=new kt,this._endpointMap.put(t,e)),e.count++},Yt.prototype.interfaces_=function(){return[]},Yt.prototype.getClass=function(){return Yt},Yt.getBoundary=function(){if(1===arguments.length){var t=arguments[0];return new Yt(t).getBoundary()}if(2===arguments.length){var e=arguments[0],n=arguments[1];return new Yt(e,n).getBoundary()}};var kt=function(){this.count=null};kt.prototype.interfaces_=function(){return[]},kt.prototype.getClass=function(){return kt};var jt=function(){},Ht={NEWLINE:{configurable:!0},SIMPLE_ORDINATE_FORMAT:{configurable:!0}};jt.prototype.interfaces_=function(){return[]},jt.prototype.getClass=function(){return jt},jt.chars=function(t,e){for(var n=new Array(e).fill(null),i=0;i<e;i++)n[i]=t;return String(n)},jt.getStackTrace=function(){if(1===arguments.length){var t=arguments[0],e=new function(){},n=new function(){}(e);return t.printStackTrace(n),e.toString()}if(2===arguments.length){for(var i=arguments[0],r=arguments[1],o="",s=new function(){}(new function(){}(jt.getStackTrace(i))),a=0;a<r;a++)try{o+=s.readLine()+jt.NEWLINE}catch(t){if(!(t instanceof g))throw t;et.shouldNeverReachHere()}return o}},jt.split=function(t,e){for(var n=e.length,i=new Nt,r=""+t,o=r.indexOf(e);o>=0;){var s=r.substring(0,o);i.add(s),o=(r=r.substring(o+n)).indexOf(e)}r.length>0&&i.add(r);for(var a=new Array(i.size()).fill(null),u=0;u<a.length;u++)a[u]=i.get(u);return a},jt.toString=function(){if(1===arguments.length){var t=arguments[0];return jt.SIMPLE_ORDINATE_FORMAT.format(t)}},jt.spaces=function(t){return jt.chars(" ",t)},Ht.NEWLINE.get=function(){return Y.getProperty("line.separator")},Ht.SIMPLE_ORDINATE_FORMAT.get=function(){return new function(){}("0.#")},Object.defineProperties(jt,Ht);var Wt=function(){};Wt.prototype.interfaces_=function(){return[]},Wt.prototype.getClass=function(){return Wt},Wt.copyCoord=function(t,e,n,i){for(var r=Math.min(t.getDimension(),n.getDimension()),o=0;o<r;o++)n.setOrdinate(i,o,t.getOrdinate(e,o))},Wt.isRing=function(t){var e=t.size();return 0===e||!(e<=3)&&(t.getOrdinate(0,V.X)===t.getOrdinate(e-1,V.X)&&t.getOrdinate(0,V.Y)===t.getOrdinate(e-1,V.Y))},Wt.isEqual=function(t,e){var n=t.size();if(n!==e.size())return!1;for(var i=Math.min(t.getDimension(),e.getDimension()),r=0;r<n;r++)for(var o=0;o<i;o++){var s=t.getOrdinate(r,o),a=e.getOrdinate(r,o);if(t.getOrdinate(r,o)!==e.getOrdinate(r,o)&&(!v.isNaN(s)||!v.isNaN(a)))return!1}return!0},Wt.extend=function(t,e,n){var i=t.create(n,e.getDimension()),r=e.size();if(Wt.copy(e,0,i,0,r),r>0)for(var o=r;o<n;o++)Wt.copy(e,r-1,i,o,1);return i},Wt.reverse=function(t){for(var e=t.size()-1,n=Math.trunc(e/2),i=0;i<=n;i++)Wt.swap(t,i,e-i)},Wt.swap=function(t,e,n){if(e===n)return null;for(var i=0;i<t.getDimension();i++){var r=t.getOrdinate(e,i);t.setOrdinate(e,i,t.getOrdinate(n,i)),t.setOrdinate(n,i,r)}},Wt.copy=function(t,e,n,i,r){for(var o=0;o<r;o++)Wt.copyCoord(t,e+o,n,i+o)},Wt.toString=function(){if(1===arguments.length){var t=arguments[0],e=t.size();if(0===e)return"()";var n=t.getDimension(),i=new D;i.append("(");for(var r=0;r<e;r++){r>0&&i.append(" ");for(var o=0;o<n;o++)o>0&&i.append(","),i.append(jt.toString(t.getOrdinate(r,o)))}return i.append(")"),i.toString()}},Wt.ensureValidRing=function(t,e){var n=e.size();if(0===n)return e;if(n<=3)return Wt.createClosedRing(t,e,4);return e.getOrdinate(0,V.X)===e.getOrdinate(n-1,V.X)&&e.getOrdinate(0,V.Y)===e.getOrdinate(n-1,V.Y)?e:Wt.createClosedRing(t,e,n+1)},Wt.createClosedRing=function(t,e,n){var i=t.create(n,e.getDimension()),r=e.size();Wt.copy(e,0,i,0,r);for(var o=r;o<n;o++)Wt.copy(e,0,i,o,1);return i};var Kt=function(t){function e(e,n){t.call(this,n),this._points=null,this.init(e)}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.computeEnvelopeInternal=function(){return this.isEmpty()?new j:this._points.expandEnvelope(new j)},e.prototype.isRing=function(){return this.isClosed()&&this.isSimple()},e.prototype.getSortIndex=function(){return t.SORTINDEX_LINESTRING},e.prototype.getCoordinates=function(){return this._points.toCoordinateArray()},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];if(!this.isEquivalentClass(e))return!1;var i=e;if(this._points.size()!==i._points.size())return!1;for(var r=0;r<this._points.size();r++)if(!this.equal(this._points.getCoordinate(r),i._points.getCoordinate(r),n))return!1;return!0}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.normalize=function(){for(var t=0;t<Math.trunc(this._points.size()/2);t++){var e=this._points.size()-1-t;if(!this._points.getCoordinate(t).equals(this._points.getCoordinate(e)))return this._points.getCoordinate(t).compareTo(this._points.getCoordinate(e))>0&&Wt.reverse(this._points),null}},e.prototype.getCoordinate=function(){return this.isEmpty()?null:this._points.getCoordinate(0)},e.prototype.getBoundaryDimension=function(){return this.isClosed()?qt.FALSE:0},e.prototype.isClosed=function(){return!this.isEmpty()&&this.getCoordinateN(0).equals2D(this.getCoordinateN(this.getNumPoints()-1))},e.prototype.getEndPoint=function(){return this.isEmpty()?null:this.getPointN(this.getNumPoints()-1)},e.prototype.getDimension=function(){return 1},e.prototype.getLength=function(){return at.computeLength(this._points)},e.prototype.getNumPoints=function(){return this._points.size()},e.prototype.reverse=function(){var t=this._points.copy();Wt.reverse(t);return this.getFactory().createLineString(t)},e.prototype.compareToSameClass=function(){if(1===arguments.length){for(var t=arguments[0],e=0,n=0;e<this._points.size()&&n<t._points.size();){var i=this._points.getCoordinate(e).compareTo(t._points.getCoordinate(n));if(0!==i)return i;e++,n++}return e<this._points.size()?1:n<t._points.size()?-1:0}if(2===arguments.length){var r=arguments[0];return arguments[1].compare(this._points,r._points)}},e.prototype.apply=function(){if(T(arguments[0],ft))for(var t=arguments[0],e=0;e<this._points.size();e++)t.filter(this._points.getCoordinate(e));else if(T(arguments[0],Ut)){var n=arguments[0];if(0===this._points.size())return null;for(var i=0;i<this._points.size()&&(n.filter(this._points,i),!n.isDone());i++);n.isGeometryChanged()&&this.geometryChanged()}else if(T(arguments[0],Vt)){arguments[0].filter(this)}else if(T(arguments[0],lt)){arguments[0].filter(this)}},e.prototype.getBoundary=function(){return new Yt(this).getBoundary()},e.prototype.isEquivalentClass=function(t){return t instanceof e},e.prototype.clone=function(){var e=t.prototype.clone.call(this);return e._points=this._points.clone(),e},e.prototype.getCoordinateN=function(t){return this._points.getCoordinate(t)},e.prototype.getGeometryType=function(){return"LineString"},e.prototype.copy=function(){return new e(this._points.copy(),this._factory)},e.prototype.getCoordinateSequence=function(){return this._points},e.prototype.isEmpty=function(){return 0===this._points.size()},e.prototype.init=function(t){if(null===t&&(t=this.getFactory().getCoordinateSequenceFactory().create([])),1===t.size())throw new m("Invalid number of points in LineString (found "+t.size()+" - must be 0 or >= 2)");this._points=t},e.prototype.isCoordinate=function(t){for(var e=0;e<this._points.size();e++)if(this._points.getCoordinate(e).equals(t))return!0;return!1},e.prototype.getStartPoint=function(){return this.isEmpty()?null:this.getPointN(0)},e.prototype.getPointN=function(t){return this.getFactory().createPoint(this._points.getCoordinate(t))},e.prototype.interfaces_=function(){return[At]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return 0x2b2b51ba435c8e00},Object.defineProperties(e,n),e}(ct),Jt=function(){};Jt.prototype.interfaces_=function(){return[]},Jt.prototype.getClass=function(){return Jt};var Qt=function(t){function e(e,n){t.call(this,n),this._coordinates=e||null,this.init(this._coordinates)}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.computeEnvelopeInternal=function(){if(this.isEmpty())return new j;var t=new j;return t.expandToInclude(this._coordinates.getX(0),this._coordinates.getY(0)),t},e.prototype.getSortIndex=function(){return t.SORTINDEX_POINT},e.prototype.getCoordinates=function(){return this.isEmpty()?[]:[this.getCoordinate()]},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];return!!this.isEquivalentClass(e)&&(!(!this.isEmpty()||!e.isEmpty())||this.isEmpty()===e.isEmpty()&&this.equal(e.getCoordinate(),this.getCoordinate(),n))}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.normalize=function(){},e.prototype.getCoordinate=function(){return 0!==this._coordinates.size()?this._coordinates.getCoordinate(0):null},e.prototype.getBoundaryDimension=function(){return qt.FALSE},e.prototype.getDimension=function(){return 0},e.prototype.getNumPoints=function(){return this.isEmpty()?0:1},e.prototype.reverse=function(){return this.copy()},e.prototype.getX=function(){if(null===this.getCoordinate())throw new Error("getX called on empty Point");return this.getCoordinate().x},e.prototype.compareToSameClass=function(){if(1===arguments.length){var t=arguments[0];return this.getCoordinate().compareTo(t.getCoordinate())}if(2===arguments.length){var e=arguments[0];return arguments[1].compare(this._coordinates,e._coordinates)}},e.prototype.apply=function(){if(T(arguments[0],ft)){var t=arguments[0];if(this.isEmpty())return null;t.filter(this.getCoordinate())}else if(T(arguments[0],Ut)){var e=arguments[0];if(this.isEmpty())return null;e.filter(this._coordinates,0),e.isGeometryChanged()&&this.geometryChanged()}else if(T(arguments[0],Vt)){arguments[0].filter(this)}else if(T(arguments[0],lt)){arguments[0].filter(this)}},e.prototype.getBoundary=function(){return this.getFactory().createGeometryCollection(null)},e.prototype.clone=function(){var e=t.prototype.clone.call(this);return e._coordinates=this._coordinates.clone(),e},e.prototype.getGeometryType=function(){return"Point"},e.prototype.copy=function(){return new e(this._coordinates.copy(),this._factory)},e.prototype.getCoordinateSequence=function(){return this._coordinates},e.prototype.getY=function(){if(null===this.getCoordinate())throw new Error("getY called on empty Point");return this.getCoordinate().y},e.prototype.isEmpty=function(){return 0===this._coordinates.size()},e.prototype.init=function(t){null===t&&(t=this.getFactory().getCoordinateSequenceFactory().create([])),et.isTrue(t.size()<=1),this._coordinates=t},e.prototype.isSimple=function(){return!0},e.prototype.interfaces_=function(){return[Jt]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return 0x44077bad161cbc00},Object.defineProperties(e,n),e}(ct),Zt=function(){};Zt.prototype.interfaces_=function(){return[]},Zt.prototype.getClass=function(){return Zt};var $t=function(t){function e(e,n,i){if(t.call(this,i),this._shell=null,this._holes=null,null===e&&(e=this.getFactory().createLinearRing()),null===n&&(n=[]),t.hasNullElements(n))throw new m("holes must not contain null elements");if(e.isEmpty()&&t.hasNonEmptyElements(n))throw new m("shell is empty but holes are not");this._shell=e,this._holes=n}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.computeEnvelopeInternal=function(){return this._shell.getEnvelopeInternal()},e.prototype.getSortIndex=function(){return t.SORTINDEX_POLYGON},e.prototype.getCoordinates=function(){if(this.isEmpty())return[];for(var t=new Array(this.getNumPoints()).fill(null),e=-1,n=this._shell.getCoordinates(),i=0;i<n.length;i++)t[++e]=n[i];for(var r=0;r<this._holes.length;r++)for(var o=this._holes[r].getCoordinates(),s=0;s<o.length;s++)t[++e]=o[s];return t},e.prototype.getArea=function(){var t=0;t+=Math.abs(at.signedArea(this._shell.getCoordinateSequence()));for(var e=0;e<this._holes.length;e++)t-=Math.abs(at.signedArea(this._holes[e].getCoordinateSequence()));return t},e.prototype.isRectangle=function(){if(0!==this.getNumInteriorRing())return!1;if(null===this._shell)return!1;if(5!==this._shell.getNumPoints())return!1;for(var t=this._shell.getCoordinateSequence(),e=this.getEnvelopeInternal(),n=0;n<5;n++){var i=t.getX(n);if(i!==e.getMinX()&&i!==e.getMaxX())return!1;var r=t.getY(n);if(r!==e.getMinY()&&r!==e.getMaxY())return!1}for(var o=t.getX(0),s=t.getY(0),a=1;a<=4;a++){var u=t.getX(a),l=t.getY(a);if(u!==o===(l!==s))return!1;o=u,s=l}return!0},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];if(!this.isEquivalentClass(e))return!1;var i=e,r=this._shell,o=i._shell;if(!r.equalsExact(o,n))return!1;if(this._holes.length!==i._holes.length)return!1;for(var s=0;s<this._holes.length;s++)if(!this._holes[s].equalsExact(i._holes[s],n))return!1;return!0}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.normalize=function(){if(0===arguments.length){this.normalize(this._shell,!0);for(var t=0;t<this._holes.length;t++)this.normalize(this._holes[t],!1);Gt.sort(this._holes)}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(e.isEmpty())return null;var i=new Array(e.getCoordinates().length-1).fill(null);Y.arraycopy(e.getCoordinates(),0,i,0,i.length);var r=Lt.minCoordinate(e.getCoordinates());Lt.scroll(i,r),Y.arraycopy(i,0,e.getCoordinates(),0,i.length),e.getCoordinates()[i.length]=i[0],at.isCCW(e.getCoordinates())===n&&Lt.reverse(e.getCoordinates())}},e.prototype.getCoordinate=function(){return this._shell.getCoordinate()},e.prototype.getNumInteriorRing=function(){return this._holes.length},e.prototype.getBoundaryDimension=function(){return 1},e.prototype.getDimension=function(){return 2},e.prototype.getLength=function(){var t=0;t+=this._shell.getLength();for(var e=0;e<this._holes.length;e++)t+=this._holes[e].getLength();return t},e.prototype.getNumPoints=function(){for(var t=this._shell.getNumPoints(),e=0;e<this._holes.length;e++)t+=this._holes[e].getNumPoints();return t},e.prototype.reverse=function(){var t=this.copy();t._shell=this._shell.copy().reverse(),t._holes=new Array(this._holes.length).fill(null);for(var e=0;e<this._holes.length;e++)t._holes[e]=this._holes[e].copy().reverse();return t},e.prototype.convexHull=function(){return this.getExteriorRing().convexHull()},e.prototype.compareToSameClass=function(){if(1===arguments.length){var t=arguments[0],e=this._shell,n=t._shell;return e.compareToSameClass(n)}if(2===arguments.length){var i=arguments[0],r=arguments[1],o=i,s=this._shell,a=o._shell,u=s.compareToSameClass(a,r);if(0!==u)return u;for(var l=this.getNumInteriorRing(),c=o.getNumInteriorRing(),p=0;p<l&&p<c;){var h=this.getInteriorRingN(p),f=o.getInteriorRingN(p),g=h.compareToSameClass(f,r);if(0!==g)return g;p++}return p<l?1:p<c?-1:0}},e.prototype.apply=function(t){if(T(t,ft)){this._shell.apply(t);for(var e=0;e<this._holes.length;e++)this._holes[e].apply(t)}else if(T(t,Ut)){if(this._shell.apply(t),!t.isDone())for(var n=0;n<this._holes.length&&(this._holes[n].apply(t),!t.isDone());n++);t.isGeometryChanged()&&this.geometryChanged()}else if(T(t,Vt))t.filter(this);else if(T(t,lt)){t.filter(this),this._shell.apply(t);for(var i=0;i<this._holes.length;i++)this._holes[i].apply(t)}},e.prototype.getBoundary=function(){if(this.isEmpty())return this.getFactory().createMultiLineString();var t=new Array(this._holes.length+1).fill(null);t[0]=this._shell;for(var e=0;e<this._holes.length;e++)t[e+1]=this._holes[e];return t.length<=1?this.getFactory().createLinearRing(t[0].getCoordinateSequence()):this.getFactory().createMultiLineString(t)},e.prototype.clone=function(){var e=t.prototype.clone.call(this);e._shell=this._shell.clone(),e._holes=new Array(this._holes.length).fill(null);for(var n=0;n<this._holes.length;n++)e._holes[n]=this._holes[n].clone();return e},e.prototype.getGeometryType=function(){return"Polygon"},e.prototype.copy=function(){for(var t=this._shell.copy(),n=new Array(this._holes.length).fill(null),i=0;i<n.length;i++)n[i]=this._holes[i].copy();return new e(t,n,this._factory)},e.prototype.getExteriorRing=function(){return this._shell},e.prototype.isEmpty=function(){return this._shell.isEmpty()},e.prototype.getInteriorRingN=function(t){return this._holes[t]},e.prototype.interfaces_=function(){return[Zt]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return-0x307ffefd8dc97200},Object.defineProperties(e,n),e}(ct),te=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.getSortIndex=function(){return ct.SORTINDEX_MULTIPOINT},e.prototype.isValid=function(){return!0},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];return!!this.isEquivalentClass(e)&&t.prototype.equalsExact.call(this,e,n)}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.getCoordinate=function(){if(1===arguments.length){var e=arguments[0];return this._geometries[e].getCoordinate()}return t.prototype.getCoordinate.apply(this,arguments)},e.prototype.getBoundaryDimension=function(){return qt.FALSE},e.prototype.getDimension=function(){return 0},e.prototype.getBoundary=function(){return this.getFactory().createGeometryCollection(null)},e.prototype.getGeometryType=function(){return"MultiPoint"},e.prototype.copy=function(){for(var t=new Array(this._geometries.length).fill(null),n=0;n<t.length;n++)t[n]=this._geometries[n].copy();return new e(t,this._factory)},e.prototype.interfaces_=function(){return[Jt]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return-0x6fb1ed4162e0fc00},Object.defineProperties(e,n),e}(zt),ee=function(t){function e(e,n){e instanceof C&&n instanceof _e&&(e=n.getCoordinateSequenceFactory().create(e)),t.call(this,e,n),this.validateConstruction()}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={MINIMUM_VALID_SIZE:{configurable:!0},serialVersionUID:{configurable:!0}};return e.prototype.getSortIndex=function(){return ct.SORTINDEX_LINEARRING},e.prototype.getBoundaryDimension=function(){return qt.FALSE},e.prototype.isClosed=function(){return!!this.isEmpty()||t.prototype.isClosed.call(this)},e.prototype.reverse=function(){var t=this._points.copy();Wt.reverse(t);return this.getFactory().createLinearRing(t)},e.prototype.validateConstruction=function(){if(!this.isEmpty()&&!t.prototype.isClosed.call(this))throw new m("Points of LinearRing do not form a closed linestring");if(this.getCoordinateSequence().size()>=1&&this.getCoordinateSequence().size()<e.MINIMUM_VALID_SIZE)throw new m("Invalid number of points in LinearRing (found "+this.getCoordinateSequence().size()+" - must be 0 or >= 4)")},e.prototype.getGeometryType=function(){return"LinearRing"},e.prototype.copy=function(){return new e(this._points.copy(),this._factory)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},n.MINIMUM_VALID_SIZE.get=function(){return 4},n.serialVersionUID.get=function(){return-0x3b229e262367a600},Object.defineProperties(e,n),e}(Kt),ne=function(t){function e(){t.apply(this,arguments)}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={serialVersionUID:{configurable:!0}};return e.prototype.getSortIndex=function(){return ct.SORTINDEX_MULTIPOLYGON},e.prototype.equalsExact=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];return!!this.isEquivalentClass(e)&&t.prototype.equalsExact.call(this,e,n)}return t.prototype.equalsExact.apply(this,arguments)},e.prototype.getBoundaryDimension=function(){return 1},e.prototype.getDimension=function(){return 2},e.prototype.reverse=function(){for(var t=this._geometries.length,e=new Array(t).fill(null),n=0;n<this._geometries.length;n++)e[n]=this._geometries[n].reverse();return this.getFactory().createMultiPolygon(e)},e.prototype.getBoundary=function(){if(this.isEmpty())return this.getFactory().createMultiLineString();for(var t=new Nt,e=0;e<this._geometries.length;e++)for(var n=this._geometries[e].getBoundary(),i=0;i<n.getNumGeometries();i++)t.add(n.getGeometryN(i));var r=new Array(t.size()).fill(null);return this.getFactory().createMultiLineString(t.toArray(r))},e.prototype.getGeometryType=function(){return"MultiPolygon"},e.prototype.copy=function(){for(var t=new Array(this._geometries.length).fill(null),n=0;n<t.length;n++)t[n]=this._geometries[n].copy();return new e(t,this._factory)},e.prototype.interfaces_=function(){return[Zt]},e.prototype.getClass=function(){return e},n.serialVersionUID.get=function(){return-0x7a5aa1369171980},Object.defineProperties(e,n),e}(zt),ie=function(t){this._factory=t||null,this._isUserDataCopied=!1},re={NoOpGeometryOperation:{configurable:!0},CoordinateOperation:{configurable:!0},CoordinateSequenceOperation:{configurable:!0}};ie.prototype.setCopyUserData=function(t){this._isUserDataCopied=t},ie.prototype.edit=function(t,e){if(null===t)return null;var n=this.editInternal(t,e);return this._isUserDataCopied&&n.setUserData(t.getUserData()),n},ie.prototype.editInternal=function(t,e){return null===this._factory&&(this._factory=t.getFactory()),t instanceof zt?this.editGeometryCollection(t,e):t instanceof $t?this.editPolygon(t,e):t instanceof Qt?e.edit(t,this._factory):t instanceof Kt?e.edit(t,this._factory):(et.shouldNeverReachHere("Unsupported Geometry class: "+t.getClass().getName()),null)},ie.prototype.editGeometryCollection=function(t,e){for(var n=e.edit(t,this._factory),i=new Nt,r=0;r<n.getNumGeometries();r++){var o=this.edit(n.getGeometryN(r),e);null===o||o.isEmpty()||i.add(o)}return n.getClass()===te?this._factory.createMultiPoint(i.toArray([])):n.getClass()===Xt?this._factory.createMultiLineString(i.toArray([])):n.getClass()===ne?this._factory.createMultiPolygon(i.toArray([])):this._factory.createGeometryCollection(i.toArray([]))},ie.prototype.editPolygon=function(t,e){var n=e.edit(t,this._factory);if(null===n&&(n=this._factory.createPolygon(null)),n.isEmpty())return n;var i=this.edit(n.getExteriorRing(),e);if(null===i||i.isEmpty())return this._factory.createPolygon();for(var r=new Nt,o=0;o<n.getNumInteriorRing();o++){var s=this.edit(n.getInteriorRingN(o),e);null===s||s.isEmpty()||r.add(s)}return this._factory.createPolygon(i,r.toArray([]))},ie.prototype.interfaces_=function(){return[]},ie.prototype.getClass=function(){return ie},ie.GeometryEditorOperation=function(){},re.NoOpGeometryOperation.get=function(){return oe},re.CoordinateOperation.get=function(){return se},re.CoordinateSequenceOperation.get=function(){return ae},Object.defineProperties(ie,re);var oe=function(){};oe.prototype.edit=function(t,e){return t},oe.prototype.interfaces_=function(){return[ie.GeometryEditorOperation]},oe.prototype.getClass=function(){return oe};var se=function(){};se.prototype.edit=function(t,e){var n=this.editCoordinates(t.getCoordinates(),t);return null===n?t:t instanceof ee?e.createLinearRing(n):t instanceof Kt?e.createLineString(n):t instanceof Qt?n.length>0?e.createPoint(n[0]):e.createPoint():t},se.prototype.interfaces_=function(){return[ie.GeometryEditorOperation]},se.prototype.getClass=function(){return se};var ae=function(){};ae.prototype.edit=function(t,e){return t instanceof ee?e.createLinearRing(this.edit(t.getCoordinateSequence(),t)):t instanceof Kt?e.createLineString(this.edit(t.getCoordinateSequence(),t)):t instanceof Qt?e.createPoint(this.edit(t.getCoordinateSequence(),t)):t},ae.prototype.interfaces_=function(){return[ie.GeometryEditorOperation]},ae.prototype.getClass=function(){return ae};var ue=function(){if(this._dimension=3,this._coordinates=null,1===arguments.length){if(arguments[0]instanceof Array)this._coordinates=arguments[0],this._dimension=3;else if(Number.isInteger(arguments[0])){var t=arguments[0];this._coordinates=new Array(t).fill(null);for(var e=0;e<t;e++)this._coordinates[e]=new C}else if(T(arguments[0],V)){var n=arguments[0];if(null===n)return this._coordinates=new Array(0).fill(null),null;this._dimension=n.getDimension(),this._coordinates=new Array(n.size()).fill(null);for(var i=0;i<this._coordinates.length;i++)this._coordinates[i]=n.getCoordinateCopy(i)}}else if(2===arguments.length)if(arguments[0]instanceof Array&&Number.isInteger(arguments[1])){var r=arguments[0],o=arguments[1];this._coordinates=r,this._dimension=o,null===r&&(this._coordinates=new Array(0).fill(null))}else if(Number.isInteger(arguments[0])&&Number.isInteger(arguments[1])){var s=arguments[0],a=arguments[1];this._coordinates=new Array(s).fill(null),this._dimension=a;for(var u=0;u<s;u++)this._coordinates[u]=new C}},le={serialVersionUID:{configurable:!0}};ue.prototype.setOrdinate=function(t,e,n){switch(e){case V.X:this._coordinates[t].x=n;break;case V.Y:this._coordinates[t].y=n;break;case V.Z:this._coordinates[t].z=n;break;default:throw new m("invalid ordinateIndex")}},ue.prototype.size=function(){return this._coordinates.length},ue.prototype.getOrdinate=function(t,e){switch(e){case V.X:return this._coordinates[t].x;case V.Y:return this._coordinates[t].y;case V.Z:return this._coordinates[t].z}return v.NaN},ue.prototype.getCoordinate=function(){if(1===arguments.length){var t=arguments[0];return this._coordinates[t]}if(2===arguments.length){var e=arguments[0],n=arguments[1];n.x=this._coordinates[e].x,n.y=this._coordinates[e].y,n.z=this._coordinates[e].z}},ue.prototype.getCoordinateCopy=function(t){return new C(this._coordinates[t])},ue.prototype.getDimension=function(){return this._dimension},ue.prototype.getX=function(t){return this._coordinates[t].x},ue.prototype.clone=function(){for(var t=new Array(this.size()).fill(null),e=0;e<this._coordinates.length;e++)t[e]=this._coordinates[e].clone();return new ue(t,this._dimension)},ue.prototype.expandEnvelope=function(t){for(var e=0;e<this._coordinates.length;e++)t.expandToInclude(this._coordinates[e]);return t},ue.prototype.copy=function(){for(var t=new Array(this.size()).fill(null),e=0;e<this._coordinates.length;e++)t[e]=this._coordinates[e].copy();return new ue(t,this._dimension)},ue.prototype.toString=function(){if(this._coordinates.length>0){var t=new D(17*this._coordinates.length);t.append("("),t.append(this._coordinates[0]);for(var e=1;e<this._coordinates.length;e++)t.append(", "),t.append(this._coordinates[e]);return t.append(")"),t.toString()}return"()"},ue.prototype.getY=function(t){return this._coordinates[t].y},ue.prototype.toCoordinateArray=function(){return this._coordinates},ue.prototype.interfaces_=function(){return[V,e]},ue.prototype.getClass=function(){return ue},le.serialVersionUID.get=function(){return-0xcb44a778db18e00},Object.defineProperties(ue,le);var ce=function(){},pe={serialVersionUID:{configurable:!0},instanceObject:{configurable:!0}};ce.prototype.readResolve=function(){return ce.instance()},ce.prototype.create=function(){if(1===arguments.length){if(arguments[0]instanceof Array){var t=arguments[0];return new ue(t)}if(T(arguments[0],V)){var e=arguments[0];return new ue(e)}}else if(2===arguments.length){var n=arguments[0],i=arguments[1];return i>3&&(i=3),i<2?new ue(n):new ue(n,i)}},ce.prototype.interfaces_=function(){return[b,e]},ce.prototype.getClass=function(){return ce},ce.instance=function(){return ce.instanceObject},pe.serialVersionUID.get=function(){return-0x38e49fa6cf6f2e00},pe.instanceObject.get=function(){return new ce},Object.defineProperties(ce,pe);var he=function(t){function e(){t.call(this),this.map_=new Map}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.get=function(t){return this.map_.get(t)||null},e.prototype.put=function(t,e){return this.map_.set(t,e),e},e.prototype.values=function(){for(var t=new Nt,e=this.map_.values(),n=e.next();!n.done;)t.add(n.value),n=e.next();return t},e.prototype.entrySet=function(){var t=new Pt;return this.map_.entries().forEach(function(e){return t.add(e)}),t},e.prototype.size=function(){return this.map_.size()},e}(Tt),fe=function t(){if(this._modelType=null,this._scale=null,0===arguments.length)this._modelType=t.FLOATING;else if(1===arguments.length)if(arguments[0]instanceof de){var e=arguments[0];this._modelType=e,e===t.FIXED&&this.setScale(1)}else if("number"==typeof arguments[0]){var n=arguments[0];this._modelType=t.FIXED,this.setScale(n)}else if(arguments[0]instanceof t){var i=arguments[0];this._modelType=i._modelType,this._scale=i._scale}},ge={serialVersionUID:{configurable:!0},maximumPreciseValue:{configurable:!0}};fe.prototype.equals=function(t){if(!(t instanceof fe))return!1;var e=t;return this._modelType===e._modelType&&this._scale===e._scale},fe.prototype.compareTo=function(t){var e=t,n=this.getMaximumSignificantDigits(),i=e.getMaximumSignificantDigits();return new M(n).compareTo(new M(i))},fe.prototype.getScale=function(){return this._scale},fe.prototype.isFloating=function(){return this._modelType===fe.FLOATING||this._modelType===fe.FLOATING_SINGLE},fe.prototype.getType=function(){return this._modelType},fe.prototype.toString=function(){var t="UNKNOWN";return this._modelType===fe.FLOATING?t="Floating":this._modelType===fe.FLOATING_SINGLE?t="Floating-Single":this._modelType===fe.FIXED&&(t="Fixed (Scale="+this.getScale()+")"),t},fe.prototype.makePrecise=function(){if("number"==typeof arguments[0]){var t=arguments[0];if(v.isNaN(t))return t;if(this._modelType===fe.FLOATING_SINGLE){return t}return this._modelType===fe.FIXED?Math.round(t*this._scale)/this._scale:t}if(arguments[0]instanceof C){var e=arguments[0];if(this._modelType===fe.FLOATING)return null;e.x=this.makePrecise(e.x),e.y=this.makePrecise(e.y)}},fe.prototype.getMaximumSignificantDigits=function(){var t=16;return this._modelType===fe.FLOATING?t=16:this._modelType===fe.FLOATING_SINGLE?t=6:this._modelType===fe.FIXED&&(t=1+Math.trunc(Math.ceil(Math.log(this.getScale())/Math.log(10)))),t},fe.prototype.setScale=function(t){this._scale=Math.abs(t)},fe.prototype.interfaces_=function(){return[e,E]},fe.prototype.getClass=function(){return fe},fe.mostPrecise=function(t,e){return t.compareTo(e)>=0?t:e},ge.serialVersionUID.get=function(){return 0x6bee6404e9a25c00},ge.maximumPreciseValue.get=function(){return 9007199254740992},Object.defineProperties(fe,ge);var de=function t(e){this._name=e||null,t.nameToTypeMap.put(e,this)},ye={serialVersionUID:{configurable:!0},nameToTypeMap:{configurable:!0}};de.prototype.readResolve=function(){return de.nameToTypeMap.get(this._name)},de.prototype.toString=function(){return this._name},de.prototype.interfaces_=function(){return[e]},de.prototype.getClass=function(){return de},ye.serialVersionUID.get=function(){return-552860263173159e4},ye.nameToTypeMap.get=function(){return new he},Object.defineProperties(de,ye),fe.Type=de,fe.FIXED=new de("FIXED"),fe.FLOATING=new de("FLOATING"),fe.FLOATING_SINGLE=new de("FLOATING SINGLE");var _e=function t(){this._precisionModel=new fe,this._SRID=0,this._coordinateSequenceFactory=t.getDefaultCoordinateSequenceFactory(),0===arguments.length||(1===arguments.length?T(arguments[0],b)?this._coordinateSequenceFactory=arguments[0]:arguments[0]instanceof fe&&(this._precisionModel=arguments[0]):2===arguments.length?(this._precisionModel=arguments[0],this._SRID=arguments[1]):3===arguments.length&&(this._precisionModel=arguments[0],this._SRID=arguments[1],this._coordinateSequenceFactory=arguments[2]))},me={serialVersionUID:{configurable:!0}};_e.prototype.toGeometry=function(t){return t.isNull()?this.createPoint(null):t.getMinX()===t.getMaxX()&&t.getMinY()===t.getMaxY()?this.createPoint(new C(t.getMinX(),t.getMinY())):t.getMinX()===t.getMaxX()||t.getMinY()===t.getMaxY()?this.createLineString([new C(t.getMinX(),t.getMinY()),new C(t.getMaxX(),t.getMaxY())]):this.createPolygon(this.createLinearRing([new C(t.getMinX(),t.getMinY()),new C(t.getMinX(),t.getMaxY()),new C(t.getMaxX(),t.getMaxY()),new C(t.getMaxX(),t.getMinY()),new C(t.getMinX(),t.getMinY())]),null)},_e.prototype.createLineString=function(t){return t?t instanceof Array?new Kt(this.getCoordinateSequenceFactory().create(t),this):T(t,V)?new Kt(t,this):void 0:new Kt(this.getCoordinateSequenceFactory().create([]),this)},_e.prototype.createMultiLineString=function(){if(0===arguments.length)return new Xt(null,this);if(1===arguments.length){var t=arguments[0];return new Xt(t,this)}},_e.prototype.buildGeometry=function(t){for(var e=null,n=!1,i=!1,r=t.iterator();r.hasNext();){var o=r.next(),s=o.getClass();null===e&&(e=s),s!==e&&(n=!0),o.isGeometryCollectionOrDerived()&&(i=!0)}if(null===e)return this.createGeometryCollection();if(n||i)return this.createGeometryCollection(_e.toGeometryArray(t));var a=t.iterator().next();if(t.size()>1){if(a instanceof $t)return this.createMultiPolygon(_e.toPolygonArray(t));if(a instanceof Kt)return this.createMultiLineString(_e.toLineStringArray(t));if(a instanceof Qt)return this.createMultiPoint(_e.toPointArray(t));et.shouldNeverReachHere("Unhandled class: "+a.getClass().getName())}return a},_e.prototype.createMultiPointFromCoords=function(t){return this.createMultiPoint(null!==t?this.getCoordinateSequenceFactory().create(t):null)},_e.prototype.createPoint=function(){if(0===arguments.length)return this.createPoint(this.getCoordinateSequenceFactory().create([]));if(1===arguments.length){if(arguments[0]instanceof C){var t=arguments[0];return this.createPoint(null!==t?this.getCoordinateSequenceFactory().create([t]):null)}if(T(arguments[0],V)){var e=arguments[0];return new Qt(e,this)}}},_e.prototype.getCoordinateSequenceFactory=function(){return this._coordinateSequenceFactory},_e.prototype.createPolygon=function(){if(0===arguments.length)return new $t(null,null,this);if(1===arguments.length){if(T(arguments[0],V)){var t=arguments[0];return this.createPolygon(this.createLinearRing(t))}if(arguments[0]instanceof Array){var e=arguments[0];return this.createPolygon(this.createLinearRing(e))}if(arguments[0]instanceof ee){var n=arguments[0];return this.createPolygon(n,null)}}else if(2===arguments.length){var i=arguments[0],r=arguments[1];return new $t(i,r,this)}},_e.prototype.getSRID=function(){return this._SRID},_e.prototype.createGeometryCollection=function(){if(0===arguments.length)return new zt(null,this);if(1===arguments.length){var t=arguments[0];return new zt(t,this)}},_e.prototype.createGeometry=function(t){return new ie(this).edit(t,{edit:function(){if(2===arguments.length){var t=arguments[0];return this._coordinateSequenceFactory.create(t)}}})},_e.prototype.getPrecisionModel=function(){return this._precisionModel},_e.prototype.createLinearRing=function(){if(0===arguments.length)return this.createLinearRing(this.getCoordinateSequenceFactory().create([]));if(1===arguments.length){if(arguments[0]instanceof Array){var t=arguments[0];return this.createLinearRing(null!==t?this.getCoordinateSequenceFactory().create(t):null)}if(T(arguments[0],V)){var e=arguments[0];return new ee(e,this)}}},_e.prototype.createMultiPolygon=function(){if(0===arguments.length)return new ne(null,this);if(1===arguments.length){var t=arguments[0];return new ne(t,this)}},_e.prototype.createMultiPoint=function(){if(0===arguments.length)return new te(null,this);if(1===arguments.length){if(arguments[0]instanceof Array){var t=arguments[0];return new te(t,this)}if(arguments[0]instanceof Array){var e=arguments[0];return this.createMultiPoint(null!==e?this.getCoordinateSequenceFactory().create(e):null)}if(T(arguments[0],V)){var n=arguments[0];if(null===n)return this.createMultiPoint(new Array(0).fill(null));for(var i=new Array(n.size()).fill(null),r=0;r<n.size();r++){var o=this.getCoordinateSequenceFactory().create(1,n.getDimension());Wt.copy(n,r,o,0,1),i[r]=this.createPoint(o)}return this.createMultiPoint(i)}}},_e.prototype.interfaces_=function(){return[e]},_e.prototype.getClass=function(){return _e},_e.toMultiPolygonArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_e.toGeometryArray=function(t){if(null===t)return null;var e=new Array(t.size()).fill(null);return t.toArray(e)},_e.getDefaultCoordinateSequenceFactory=function(){return ce.instance()},_e.toMultiLineStringArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_e.toLineStringArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_e.toMultiPointArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_e.toLinearRingArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_e.toPointArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_e.toPolygonArray=function(t){var e=new Array(t.size()).fill(null);return t.toArray(e)},_e.createPointFromInternalCoord=function(t,e){return e.getPrecisionModel().makePrecise(t),e.getFactory().createPoint(t)},me.serialVersionUID.get=function(){return-0x5ea75f2051eeb400},Object.defineProperties(_e,me);var ve=["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon"],Ie=function(t){this.geometryFactory=t||new _e};Ie.prototype.read=function(t){var e,n=(e="string"==typeof t?JSON.parse(t):t).type;if(!Ee[n])throw new Error("Unknown GeoJSON type: "+e.type);return-1!==ve.indexOf(n)?Ee[n].apply(this,[e.coordinates]):"GeometryCollection"===n?Ee[n].apply(this,[e.geometries]):Ee[n].apply(this,[e])},Ie.prototype.write=function(t){var e=t.getGeometryType();if(!xe[e])throw new Error("Geometry is not supported");return xe[e].apply(this,[t])};var Ee={Feature:function(t){var e={};for(var n in t)e[n]=t[n];if(t.geometry){var i=t.geometry.type;if(!Ee[i])throw new Error("Unknown GeoJSON type: "+t.type);e.geometry=this.read(t.geometry)}return t.bbox&&(e.bbox=Ee.bbox.apply(this,[t.bbox])),e},FeatureCollection:function(t){var e={};if(t.features){e.features=[];for(var n=0;n<t.features.length;++n)e.features.push(this.read(t.features[n]))}return t.bbox&&(e.bbox=this.parse.bbox.apply(this,[t.bbox])),e},coordinates:function(t){for(var e=[],n=0;n<t.length;++n){var i=t[n];e.push(new C(i[0],i[1]))}return e},bbox:function(t){return this.geometryFactory.createLinearRing([new C(t[0],t[1]),new C(t[2],t[1]),new C(t[2],t[3]),new C(t[0],t[3]),new C(t[0],t[1])])},Point:function(t){var e=new C(t[0],t[1]);return this.geometryFactory.createPoint(e)},MultiPoint:function(t){for(var e=[],n=0;n<t.length;++n)e.push(Ee.Point.apply(this,[t[n]]));return this.geometryFactory.createMultiPoint(e)},LineString:function(t){var e=Ee.coordinates.apply(this,[t]);return this.geometryFactory.createLineString(e)},MultiLineString:function(t){for(var e=[],n=0;n<t.length;++n)e.push(Ee.LineString.apply(this,[t[n]]));return this.geometryFactory.createMultiLineString(e)},Polygon:function(t){for(var e=Ee.coordinates.apply(this,[t[0]]),n=this.geometryFactory.createLinearRing(e),i=[],r=1;r<t.length;++r){var o=t[r],s=Ee.coordinates.apply(this,[o]),a=this.geometryFactory.createLinearRing(s);i.push(a)}return this.geometryFactory.createPolygon(n,i)},MultiPolygon:function(t){for(var e=[],n=0;n<t.length;++n){var i=t[n];e.push(Ee.Polygon.apply(this,[i]))}return this.geometryFactory.createMultiPolygon(e)},GeometryCollection:function(t){for(var e=[],n=0;n<t.length;++n){var i=t[n];e.push(this.read(i))}return this.geometryFactory.createGeometryCollection(e)}},xe={coordinate:function(t){return[t.x,t.y]},Point:function(t){return{type:"Point",coordinates:xe.coordinate.apply(this,[t.getCoordinate()])}},MultiPoint:function(t){for(var e=[],n=0;n<t._geometries.length;++n){var i=t._geometries[n],r=xe.Point.apply(this,[i]);e.push(r.coordinates)}return{type:"MultiPoint",coordinates:e}},LineString:function(t){for(var e=[],n=t.getCoordinates(),i=0;i<n.length;++i){var r=n[i];e.push(xe.coordinate.apply(this,[r]))}return{type:"LineString",coordinates:e}},MultiLineString:function(t){for(var e=[],n=0;n<t._geometries.length;++n){var i=t._geometries[n],r=xe.LineString.apply(this,[i]);e.push(r.coordinates)}return{type:"MultiLineString",coordinates:e}},Polygon:function(t){var e=[],n=xe.LineString.apply(this,[t._shell]);e.push(n.coordinates);for(var i=0;i<t._holes.length;++i){var r=t._holes[i],o=xe.LineString.apply(this,[r]);e.push(o.coordinates)}return{type:"Polygon",coordinates:e}},MultiPolygon:function(t){for(var e=[],n=0;n<t._geometries.length;++n){var i=t._geometries[n],r=xe.Polygon.apply(this,[i]);e.push(r.coordinates)}return{type:"MultiPolygon",coordinates:e}},GeometryCollection:function(t){for(var e=[],n=0;n<t._geometries.length;++n){var i=t._geometries[n],r=i.getGeometryType();e.push(xe[r].apply(this,[i]))}return{type:"GeometryCollection",geometries:e}}},Ne=function(t){this.geometryFactory=t||new _e,this.precisionModel=this.geometryFactory.getPrecisionModel(),this.parser=new Ie(this.geometryFactory)};Ne.prototype.read=function(t){var e=this.parser.read(t);return this.precisionModel.getType()===fe.FIXED&&this.reducePrecision(e),e},Ne.prototype.reducePrecision=function(t){var e,n;if(t.coordinate)this.precisionModel.makePrecise(t.coordinate);else if(t.points)for(e=0,n=t.points.length;e<n;e++)this.precisionModel.makePrecise(t.points[e]);else if(t.geometries)for(e=0,n=t.geometries.length;e<n;e++)this.reducePrecision(t.geometries[e])};var Ce=function(){this.parser=new Ie(this.geometryFactory)};Ce.prototype.write=function(t){return this.parser.write(t)};var Se=function(){},Le={ON:{configurable:!0},LEFT:{configurable:!0},RIGHT:{configurable:!0}};Se.prototype.interfaces_=function(){return[]},Se.prototype.getClass=function(){return Se},Se.opposite=function(t){return t===Se.LEFT?Se.RIGHT:t===Se.RIGHT?Se.LEFT:t},Le.ON.get=function(){return 0},Le.LEFT.get=function(){return 1},Le.RIGHT.get=function(){return 2},Object.defineProperties(Se,Le),(d.prototype=new Error).name="EmptyStackException",(y.prototype=new xt).add=function(t){return this.array_.push(t),!0},y.prototype.get=function(t){if(t<0||t>=this.size())throw new Error;return this.array_[t]},y.prototype.push=function(t){return this.array_.push(t),t},y.prototype.pop=function(t){if(0===this.array_.length)throw new d;return this.array_.pop()},y.prototype.peek=function(){if(0===this.array_.length)throw new d;return this.array_[this.array_.length-1]},y.prototype.empty=function(){return 0===this.array_.length},y.prototype.isEmpty=function(){return this.empty()},y.prototype.search=function(t){return this.array_.indexOf(t)},y.prototype.size=function(){return this.array_.length},y.prototype.toArray=function(){for(var t=[],e=0,n=this.array_.length;e<n;e++)t.push(this.array_[e]);return t};var be=function(){this._minIndex=-1,this._minCoord=null,this._minDe=null,this._orientedDe=null};be.prototype.getCoordinate=function(){return this._minCoord},be.prototype.getRightmostSide=function(t,e){var n=this.getRightmostSideOfSegment(t,e);return n<0&&(n=this.getRightmostSideOfSegment(t,e-1)),n<0&&(this._minCoord=null,this.checkForRightmostCoordinate(t)),n},be.prototype.findRightmostEdgeAtVertex=function(){var t=this._minDe.getEdge().getCoordinates();et.isTrue(this._minIndex>0&&this._minIndex<t.length,"rightmost point expected to be interior vertex of edge");var e=t[this._minIndex-1],n=t[this._minIndex+1],i=at.computeOrientation(this._minCoord,n,e),r=!1;e.y<this._minCoord.y&&n.y<this._minCoord.y&&i===at.COUNTERCLOCKWISE?r=!0:e.y>this._minCoord.y&&n.y>this._minCoord.y&&i===at.CLOCKWISE&&(r=!0),r&&(this._minIndex=this._minIndex-1)},be.prototype.getRightmostSideOfSegment=function(t,e){var n=t.getEdge().getCoordinates();if(e<0||e+1>=n.length)return-1;if(n[e].y===n[e+1].y)return-1;var i=Se.LEFT;return n[e].y<n[e+1].y&&(i=Se.RIGHT),i},be.prototype.getEdge=function(){return this._orientedDe},be.prototype.checkForRightmostCoordinate=function(t){for(var e=t.getEdge().getCoordinates(),n=0;n<e.length-1;n++)(null===this._minCoord||e[n].x>this._minCoord.x)&&(this._minDe=t,this._minIndex=n,this._minCoord=e[n])},be.prototype.findRightmostEdgeAtNode=function(){var t=this._minDe.getNode().getEdges();this._minDe=t.getRightmostEdge(),this._minDe.isForward()||(this._minDe=this._minDe.getSym(),this._minIndex=this._minDe.getEdge().getCoordinates().length-1)},be.prototype.findEdge=function(t){for(var e=t.iterator();e.hasNext();){var n=e.next();n.isForward()&&this.checkForRightmostCoordinate(n)}et.isTrue(0!==this._minIndex||this._minCoord.equals(this._minDe.getCoordinate()),"inconsistency in rightmost processing"),0===this._minIndex?this.findRightmostEdgeAtNode():this.findRightmostEdgeAtVertex(),this._orientedDe=this._minDe;this.getRightmostSide(this._minDe,this._minIndex)===Se.LEFT&&(this._orientedDe=this._minDe.getSym())},be.prototype.interfaces_=function(){return[]},be.prototype.getClass=function(){return be};var we=function(t){function e(n,i){t.call(this,e.msgWithCoord(n,i)),this.pt=i?new C(i):null,this.name="TopologyException"}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getCoordinate=function(){return this.pt},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e.msgWithCoord=function(t,e){return e?t:t+" [ "+e+" ]"},e}($),Oe=function(){this.array_=[]};Oe.prototype.addLast=function(t){this.array_.push(t)},Oe.prototype.removeFirst=function(){return this.array_.shift()},Oe.prototype.isEmpty=function(){return 0===this.array_.length};var Te=function(){this._finder=null,this._dirEdgeList=new Nt,this._nodes=new Nt,this._rightMostCoord=null,this._env=null,this._finder=new be};Te.prototype.clearVisitedEdges=function(){for(var t=this._dirEdgeList.iterator();t.hasNext();){t.next().setVisited(!1)}},Te.prototype.getRightmostCoordinate=function(){return this._rightMostCoord},Te.prototype.computeNodeDepth=function(t){for(var e=null,n=t.getEdges().iterator();n.hasNext();){var i=n.next();if(i.isVisited()||i.getSym().isVisited()){e=i;break}}if(null===e)throw new we("unable to find edge to compute depths at "+t.getCoordinate());t.getEdges().computeDepths(e);for(var r=t.getEdges().iterator();r.hasNext();){var o=r.next();o.setVisited(!0),this.copySymDepths(o)}},Te.prototype.computeDepth=function(t){this.clearVisitedEdges();var e=this._finder.getEdge();e.setEdgeDepths(Se.RIGHT,t),this.copySymDepths(e),this.computeDepths(e)},Te.prototype.create=function(t){this.addReachable(t),this._finder.findEdge(this._dirEdgeList),this._rightMostCoord=this._finder.getCoordinate()},Te.prototype.findResultEdges=function(){for(var t=this._dirEdgeList.iterator();t.hasNext();){var e=t.next();e.getDepth(Se.RIGHT)>=1&&e.getDepth(Se.LEFT)<=0&&!e.isInteriorAreaEdge()&&e.setInResult(!0)}},Te.prototype.computeDepths=function(t){var e=new Pt,n=new Oe,i=t.getNode();for(n.addLast(i),e.add(i),t.setVisited(!0);!n.isEmpty();){var r=n.removeFirst();e.add(r),this.computeNodeDepth(r);for(var o=r.getEdges().iterator();o.hasNext();){var s=o.next().getSym();if(!s.isVisited()){var a=s.getNode();e.contains(a)||(n.addLast(a),e.add(a))}}}},Te.prototype.compareTo=function(t){var e=t;return this._rightMostCoord.x<e._rightMostCoord.x?-1:this._rightMostCoord.x>e._rightMostCoord.x?1:0},Te.prototype.getEnvelope=function(){if(null===this._env){for(var t=new j,e=this._dirEdgeList.iterator();e.hasNext();)for(var n=e.next().getEdge().getCoordinates(),i=0;i<n.length-1;i++)t.expandToInclude(n[i]);this._env=t}return this._env},Te.prototype.addReachable=function(t){var e=new y;for(e.add(t);!e.empty();){var n=e.pop();this.add(n,e)}},Te.prototype.copySymDepths=function(t){var e=t.getSym();e.setDepth(Se.LEFT,t.getDepth(Se.RIGHT)),e.setDepth(Se.RIGHT,t.getDepth(Se.LEFT))},Te.prototype.add=function(t,e){t.setVisited(!0),this._nodes.add(t);for(var n=t.getEdges().iterator();n.hasNext();){var i=n.next();this._dirEdgeList.add(i);var r=i.getSym().getNode();r.isVisited()||e.push(r)}},Te.prototype.getNodes=function(){return this._nodes},Te.prototype.getDirectedEdges=function(){return this._dirEdgeList},Te.prototype.interfaces_=function(){return[E]},Te.prototype.getClass=function(){return Te};var Re=function t(){if(this.location=null,1===arguments.length){if(arguments[0]instanceof Array){var e=arguments[0];this.init(e.length)}else if(Number.isInteger(arguments[0])){var n=arguments[0];this.init(1),this.location[Se.ON]=n}else if(arguments[0]instanceof t){var i=arguments[0];if(this.init(i.location.length),null!==i)for(var r=0;r<this.location.length;r++)this.location[r]=i.location[r]}}else if(3===arguments.length){var o=arguments[0],s=arguments[1],a=arguments[2];this.init(3),this.location[Se.ON]=o,this.location[Se.LEFT]=s,this.location[Se.RIGHT]=a}};Re.prototype.setAllLocations=function(t){for(var e=0;e<this.location.length;e++)this.location[e]=t},Re.prototype.isNull=function(){for(var t=0;t<this.location.length;t++)if(this.location[t]!==w.NONE)return!1;return!0},Re.prototype.setAllLocationsIfNull=function(t){for(var e=0;e<this.location.length;e++)this.location[e]===w.NONE&&(this.location[e]=t)},Re.prototype.isLine=function(){return 1===this.location.length},Re.prototype.merge=function(t){if(t.location.length>this.location.length){var e=new Array(3).fill(null);e[Se.ON]=this.location[Se.ON],e[Se.LEFT]=w.NONE,e[Se.RIGHT]=w.NONE,this.location=e}for(var n=0;n<this.location.length;n++)this.location[n]===w.NONE&&n<t.location.length&&(this.location[n]=t.location[n])},Re.prototype.getLocations=function(){return this.location},Re.prototype.flip=function(){if(this.location.length<=1)return null;var t=this.location[Se.LEFT];this.location[Se.LEFT]=this.location[Se.RIGHT],this.location[Se.RIGHT]=t},Re.prototype.toString=function(){var t=new D;return this.location.length>1&&t.append(w.toLocationSymbol(this.location[Se.LEFT])),t.append(w.toLocationSymbol(this.location[Se.ON])),this.location.length>1&&t.append(w.toLocationSymbol(this.location[Se.RIGHT])),t.toString()},Re.prototype.setLocations=function(t,e,n){this.location[Se.ON]=t,this.location[Se.LEFT]=e,this.location[Se.RIGHT]=n},Re.prototype.get=function(t){return t<this.location.length?this.location[t]:w.NONE},Re.prototype.isArea=function(){return this.location.length>1},Re.prototype.isAnyNull=function(){for(var t=0;t<this.location.length;t++)if(this.location[t]===w.NONE)return!0;return!1},Re.prototype.setLocation=function(){if(1===arguments.length){var t=arguments[0];this.setLocation(Se.ON,t)}else if(2===arguments.length){var e=arguments[0],n=arguments[1];this.location[e]=n}},Re.prototype.init=function(t){this.location=new Array(t).fill(null),this.setAllLocations(w.NONE)},Re.prototype.isEqualOnSide=function(t,e){return this.location[e]===t.location[e]},Re.prototype.allPositionsEqual=function(t){for(var e=0;e<this.location.length;e++)if(this.location[e]!==t)return!1;return!0},Re.prototype.interfaces_=function(){return[]},Re.prototype.getClass=function(){return Re};var Pe=function t(){if(this.elt=new Array(2).fill(null),1===arguments.length){if(Number.isInteger(arguments[0])){var e=arguments[0];this.elt[0]=new Re(e),this.elt[1]=new Re(e)}else if(arguments[0]instanceof t){var n=arguments[0];this.elt[0]=new Re(n.elt[0]),this.elt[1]=new Re(n.elt[1])}}else if(2===arguments.length){var i=arguments[0],r=arguments[1];this.elt[0]=new Re(w.NONE),this.elt[1]=new Re(w.NONE),this.elt[i].setLocation(r)}else if(3===arguments.length){var o=arguments[0],s=arguments[1],a=arguments[2];this.elt[0]=new Re(o,s,a),this.elt[1]=new Re(o,s,a)}else if(4===arguments.length){var u=arguments[0],l=arguments[1],c=arguments[2],p=arguments[3];this.elt[0]=new Re(w.NONE,w.NONE,w.NONE),this.elt[1]=new Re(w.NONE,w.NONE,w.NONE),this.elt[u].setLocations(l,c,p)}};Pe.prototype.getGeometryCount=function(){var t=0;return this.elt[0].isNull()||t++,this.elt[1].isNull()||t++,t},Pe.prototype.setAllLocations=function(t,e){this.elt[t].setAllLocations(e)},Pe.prototype.isNull=function(t){return this.elt[t].isNull()},Pe.prototype.setAllLocationsIfNull=function(){if(1===arguments.length){var t=arguments[0];this.setAllLocationsIfNull(0,t),this.setAllLocationsIfNull(1,t)}else if(2===arguments.length){var e=arguments[0],n=arguments[1];this.elt[e].setAllLocationsIfNull(n)}},Pe.prototype.isLine=function(t){return this.elt[t].isLine()},Pe.prototype.merge=function(t){for(var e=0;e<2;e++)null===this.elt[e]&&null!==t.elt[e]?this.elt[e]=new Re(t.elt[e]):this.elt[e].merge(t.elt[e])},Pe.prototype.flip=function(){this.elt[0].flip(),this.elt[1].flip()},Pe.prototype.getLocation=function(){if(1===arguments.length){var t=arguments[0];return this.elt[t].get(Se.ON)}if(2===arguments.length){var e=arguments[0],n=arguments[1];return this.elt[e].get(n)}},Pe.prototype.toString=function(){var t=new D;return null!==this.elt[0]&&(t.append("A:"),t.append(this.elt[0].toString())),null!==this.elt[1]&&(t.append(" B:"),t.append(this.elt[1].toString())),t.toString()},Pe.prototype.isArea=function(){if(0===arguments.length)return this.elt[0].isArea()||this.elt[1].isArea();if(1===arguments.length){var t=arguments[0];return this.elt[t].isArea()}},Pe.prototype.isAnyNull=function(t){return this.elt[t].isAnyNull()},Pe.prototype.setLocation=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];this.elt[t].setLocation(Se.ON,e)}else if(3===arguments.length){var n=arguments[0],i=arguments[1],r=arguments[2];this.elt[n].setLocation(i,r)}},Pe.prototype.isEqualOnSide=function(t,e){return this.elt[0].isEqualOnSide(t.elt[0],e)&&this.elt[1].isEqualOnSide(t.elt[1],e)},Pe.prototype.allPositionsEqual=function(t,e){return this.elt[t].allPositionsEqual(e)},Pe.prototype.toLine=function(t){this.elt[t].isArea()&&(this.elt[t]=new Re(this.elt[t].location[0]))},Pe.prototype.interfaces_=function(){return[]},Pe.prototype.getClass=function(){return Pe},Pe.toLineLabel=function(t){for(var e=new Pe(w.NONE),n=0;n<2;n++)e.setLocation(n,t.getLocation(n));return e};var De=function(){this._startDe=null,this._maxNodeDegree=-1,this._edges=new Nt,this._pts=new Nt,this._label=new Pe(w.NONE),this._ring=null,this._isHole=null,this._shell=null,this._holes=new Nt,this._geometryFactory=null;var t=arguments[0],e=arguments[1];this._geometryFactory=e,this.computePoints(t),this.computeRing()};De.prototype.computeRing=function(){if(null!==this._ring)return null;for(var t=new Array(this._pts.size()).fill(null),e=0;e<this._pts.size();e++)t[e]=this._pts.get(e);this._ring=this._geometryFactory.createLinearRing(t),this._isHole=at.isCCW(this._ring.getCoordinates())},De.prototype.isIsolated=function(){return 1===this._label.getGeometryCount()},De.prototype.computePoints=function(t){this._startDe=t;var e=t,n=!0;do{if(null===e)throw new we("Found null DirectedEdge");if(e.getEdgeRing()===this)throw new we("Directed Edge visited twice during ring-building at "+e.getCoordinate());this._edges.add(e);var i=e.getLabel();et.isTrue(i.isArea()),this.mergeLabel(i),this.addPoints(e.getEdge(),e.isForward(),n),n=!1,this.setEdgeRing(e,this),e=this.getNext(e)}while(e!==this._startDe)},De.prototype.getLinearRing=function(){return this._ring},De.prototype.getCoordinate=function(t){return this._pts.get(t)},De.prototype.computeMaxNodeDegree=function(){this._maxNodeDegree=0;var t=this._startDe;do{var e=t.getNode().getEdges().getOutgoingDegree(this);e>this._maxNodeDegree&&(this._maxNodeDegree=e),t=this.getNext(t)}while(t!==this._startDe);this._maxNodeDegree*=2},De.prototype.addPoints=function(t,e,n){var i=t.getCoordinates();if(e){var r=1;n&&(r=0);for(var o=r;o<i.length;o++)this._pts.add(i[o])}else{var s=i.length-2;n&&(s=i.length-1);for(var a=s;a>=0;a--)this._pts.add(i[a])}},De.prototype.isHole=function(){return this._isHole},De.prototype.setInResult=function(){var t=this._startDe;do{t.getEdge().setInResult(!0),t=t.getNext()}while(t!==this._startDe)},De.prototype.containsPoint=function(t){var e=this.getLinearRing();if(!e.getEnvelopeInternal().contains(t))return!1;if(!at.isPointInRing(t,e.getCoordinates()))return!1;for(var n=this._holes.iterator();n.hasNext();){if(n.next().containsPoint(t))return!1}return!0},De.prototype.addHole=function(t){this._holes.add(t)},De.prototype.isShell=function(){return null===this._shell},De.prototype.getLabel=function(){return this._label},De.prototype.getEdges=function(){return this._edges},De.prototype.getMaxNodeDegree=function(){return this._maxNodeDegree<0&&this.computeMaxNodeDegree(),this._maxNodeDegree},De.prototype.getShell=function(){return this._shell},De.prototype.mergeLabel=function(){if(1===arguments.length){var t=arguments[0];this.mergeLabel(t,0),this.mergeLabel(t,1)}else if(2===arguments.length){var e=arguments[0],n=arguments[1],i=e.getLocation(n,Se.RIGHT);if(i===w.NONE)return null;if(this._label.getLocation(n)===w.NONE)return this._label.setLocation(n,i),null}},De.prototype.setShell=function(t){this._shell=t,null!==t&&t.addHole(this)},De.prototype.toPolygon=function(t){for(var e=new Array(this._holes.size()).fill(null),n=0;n<this._holes.size();n++)e[n]=this._holes.get(n).getLinearRing();return t.createPolygon(this.getLinearRing(),e)},De.prototype.interfaces_=function(){return[]},De.prototype.getClass=function(){return De};var Me=function(t){function e(){var e=arguments[0],n=arguments[1];t.call(this,e,n)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setEdgeRing=function(t,e){t.setMinEdgeRing(e)},e.prototype.getNext=function(t){return t.getNextMin()},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(De),Ae=function(t){function e(){var e=arguments[0],n=arguments[1];t.call(this,e,n)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.buildMinimalRings=function(){var t=new Nt,e=this._startDe;do{if(null===e.getMinEdgeRing()){var n=new Me(e,this._geometryFactory);t.add(n)}e=e.getNext()}while(e!==this._startDe);return t},e.prototype.setEdgeRing=function(t,e){t.setEdgeRing(e)},e.prototype.linkDirectedEdgesForMinimalEdgeRings=function(){var t=this._startDe;do{t.getNode().getEdges().linkMinimalDirectedEdges(this),t=t.getNext()}while(t!==this._startDe)},e.prototype.getNext=function(t){return t.getNext()},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(De),Fe=function(){if(this._label=null,this._isInResult=!1,this._isCovered=!1,this._isCoveredSet=!1,this._isVisited=!1,0===arguments.length);else if(1===arguments.length){var t=arguments[0];this._label=t}};Fe.prototype.setVisited=function(t){this._isVisited=t},Fe.prototype.setInResult=function(t){this._isInResult=t},Fe.prototype.isCovered=function(){return this._isCovered},Fe.prototype.isCoveredSet=function(){return this._isCoveredSet},Fe.prototype.setLabel=function(t){this._label=t},Fe.prototype.getLabel=function(){return this._label},Fe.prototype.setCovered=function(t){this._isCovered=t,this._isCoveredSet=!0},Fe.prototype.updateIM=function(t){et.isTrue(this._label.getGeometryCount()>=2,"found partial label"),this.computeIM(t)},Fe.prototype.isInResult=function(){return this._isInResult},Fe.prototype.isVisited=function(){return this._isVisited},Fe.prototype.interfaces_=function(){return[]},Fe.prototype.getClass=function(){return Fe};var Ge=function(t){function e(){t.call(this),this._coord=null,this._edges=null;var e=arguments[0],n=arguments[1];this._coord=e,this._edges=n,this._label=new Pe(0,w.NONE)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.isIncidentEdgeInResult=function(){for(var t=this.getEdges().getEdges().iterator();t.hasNext();){if(t.next().getEdge().isInResult())return!0}return!1},e.prototype.isIsolated=function(){return 1===this._label.getGeometryCount()},e.prototype.getCoordinate=function(){return this._coord},e.prototype.print=function(t){t.println("node "+this._coord+" lbl: "+this._label)},e.prototype.computeIM=function(t){},e.prototype.computeMergedLocation=function(t,e){var n=w.NONE;if(n=this._label.getLocation(e),!t.isNull(e)){var i=t.getLocation(e);n!==w.BOUNDARY&&(n=i)}return n},e.prototype.setLabel=function(){if(2!==arguments.length)return t.prototype.setLabel.apply(this,arguments);var e=arguments[0],n=arguments[1];null===this._label?this._label=new Pe(e,n):this._label.setLocation(e,n)},e.prototype.getEdges=function(){return this._edges},e.prototype.mergeLabel=function(){if(arguments[0]instanceof e){var t=arguments[0];this.mergeLabel(t._label)}else if(arguments[0]instanceof Pe)for(var n=arguments[0],i=0;i<2;i++){var r=this.computeMergedLocation(n,i);this._label.getLocation(i)===w.NONE&&this._label.setLocation(i,r)}},e.prototype.add=function(t){this._edges.insert(t),t.setNode(this)},e.prototype.setLabelBoundary=function(t){if(null===this._label)return null;var e=w.NONE;null!==this._label&&(e=this._label.getLocation(t));var n=null;switch(e){case w.BOUNDARY:n=w.INTERIOR;break;case w.INTERIOR:default:n=w.BOUNDARY}this._label.setLocation(t,n)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Fe),qe=function(){this.nodeMap=new p,this.nodeFact=null;var t=arguments[0];this.nodeFact=t};qe.prototype.find=function(t){return this.nodeMap.get(t)},qe.prototype.addNode=function(){if(arguments[0]instanceof C){var t=arguments[0],e=this.nodeMap.get(t);return null===e&&(e=this.nodeFact.createNode(t),this.nodeMap.put(t,e)),e}if(arguments[0]instanceof Ge){var n=arguments[0],i=this.nodeMap.get(n.getCoordinate());return null===i?(this.nodeMap.put(n.getCoordinate(),n),n):(i.mergeLabel(n),i)}},qe.prototype.print=function(t){for(var e=this.iterator();e.hasNext();){e.next().print(t)}},qe.prototype.iterator=function(){return this.nodeMap.values().iterator()},qe.prototype.values=function(){return this.nodeMap.values()},qe.prototype.getBoundaryNodes=function(t){for(var e=new Nt,n=this.iterator();n.hasNext();){var i=n.next();i.getLabel().getLocation(t)===w.BOUNDARY&&e.add(i)}return e},qe.prototype.add=function(t){var e=t.getCoordinate();this.addNode(e).add(t)},qe.prototype.interfaces_=function(){return[]},qe.prototype.getClass=function(){return qe};var Be=function(){},Ve={NE:{configurable:!0},NW:{configurable:!0},SW:{configurable:!0},SE:{configurable:!0}};Be.prototype.interfaces_=function(){return[]},Be.prototype.getClass=function(){return Be},Be.isNorthern=function(t){return t===Be.NE||t===Be.NW},Be.isOpposite=function(t,e){if(t===e)return!1;return 2===(t-e+4)%4},Be.commonHalfPlane=function(t,e){if(t===e)return t;if(2===(t-e+4)%4)return-1;var n=t<e?t:e;return 0===n&&3===(t>e?t:e)?3:n},Be.isInHalfPlane=function(t,e){return e===Be.SE?t===Be.SE||t===Be.SW:t===e||t===e+1},Be.quadrant=function(){if("number"==typeof arguments[0]&&"number"==typeof arguments[1]){var t=arguments[0],e=arguments[1];if(0===t&&0===e)throw new m("Cannot compute the quadrant for point ( "+t+", "+e+" )");return t>=0?e>=0?Be.NE:Be.SE:e>=0?Be.NW:Be.SW}if(arguments[0]instanceof C&&arguments[1]instanceof C){var n=arguments[0],i=arguments[1];if(i.x===n.x&&i.y===n.y)throw new m("Cannot compute the quadrant for two identical points "+n);return i.x>=n.x?i.y>=n.y?Be.NE:Be.SE:i.y>=n.y?Be.NW:Be.SW}},Ve.NE.get=function(){return 0},Ve.NW.get=function(){return 1},Ve.SW.get=function(){return 2},Ve.SE.get=function(){return 3},Object.defineProperties(Be,Ve);var Ue=function(){if(this._edge=null,this._label=null,this._node=null,this._p0=null,this._p1=null,this._dx=null,this._dy=null,this._quadrant=null,1===arguments.length){var t=arguments[0];this._edge=t}else if(3===arguments.length){var e=arguments[0],n=arguments[1],i=arguments[2];this._edge=e,this.init(n,i),this._label=null}else if(4===arguments.length){var r=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3];this._edge=r,this.init(o,s),this._label=a}};Ue.prototype.compareDirection=function(t){return this._dx===t._dx&&this._dy===t._dy?0:this._quadrant>t._quadrant?1:this._quadrant<t._quadrant?-1:at.computeOrientation(t._p0,t._p1,this._p1)},Ue.prototype.getDy=function(){return this._dy},Ue.prototype.getCoordinate=function(){return this._p0},Ue.prototype.setNode=function(t){this._node=t},Ue.prototype.print=function(t){var e=Math.atan2(this._dy,this._dx),n=this.getClass().getName(),i=n.lastIndexOf("."),r=n.substring(i+1);t.print("  "+r+": "+this._p0+" - "+this._p1+" "+this._quadrant+":"+e+"   "+this._label)},Ue.prototype.compareTo=function(t){var e=t;return this.compareDirection(e)},Ue.prototype.getDirectedCoordinate=function(){return this._p1},Ue.prototype.getDx=function(){return this._dx},Ue.prototype.getLabel=function(){return this._label},Ue.prototype.getEdge=function(){return this._edge},Ue.prototype.getQuadrant=function(){return this._quadrant},Ue.prototype.getNode=function(){return this._node},Ue.prototype.toString=function(){var t=Math.atan2(this._dy,this._dx),e=this.getClass().getName(),n=e.lastIndexOf(".");return"  "+e.substring(n+1)+": "+this._p0+" - "+this._p1+" "+this._quadrant+":"+t+"   "+this._label},Ue.prototype.computeLabel=function(t){},Ue.prototype.init=function(t,e){this._p0=t,this._p1=e,this._dx=e.x-t.x,this._dy=e.y-t.y,this._quadrant=Be.quadrant(this._dx,this._dy),et.isTrue(!(0===this._dx&&0===this._dy),"EdgeEnd with identical endpoints found")},Ue.prototype.interfaces_=function(){return[E]},Ue.prototype.getClass=function(){return Ue};var ze=function(t){function e(){var e=arguments[0],n=arguments[1];if(t.call(this,e),this._isForward=null,this._isInResult=!1,this._isVisited=!1,this._sym=null,this._next=null,this._nextMin=null,this._edgeRing=null,this._minEdgeRing=null,this._depth=[0,-999,-999],this._isForward=n,n)this.init(e.getCoordinate(0),e.getCoordinate(1));else{var i=e.getNumPoints()-1;this.init(e.getCoordinate(i),e.getCoordinate(i-1))}this.computeDirectedLabel()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getNextMin=function(){return this._nextMin},e.prototype.getDepth=function(t){return this._depth[t]},e.prototype.setVisited=function(t){this._isVisited=t},e.prototype.computeDirectedLabel=function(){this._label=new Pe(this._edge.getLabel()),this._isForward||this._label.flip()},e.prototype.getNext=function(){return this._next},e.prototype.setDepth=function(t,e){if(-999!==this._depth[t]&&this._depth[t]!==e)throw new we("assigned depths do not match",this.getCoordinate());this._depth[t]=e},e.prototype.isInteriorAreaEdge=function(){for(var t=!0,e=0;e<2;e++)this._label.isArea(e)&&this._label.getLocation(e,Se.LEFT)===w.INTERIOR&&this._label.getLocation(e,Se.RIGHT)===w.INTERIOR||(t=!1);return t},e.prototype.setNextMin=function(t){this._nextMin=t},e.prototype.print=function(e){t.prototype.print.call(this,e),e.print(" "+this._depth[Se.LEFT]+"/"+this._depth[Se.RIGHT]),e.print(" ("+this.getDepthDelta()+")"),this._isInResult&&e.print(" inResult")},e.prototype.setMinEdgeRing=function(t){this._minEdgeRing=t},e.prototype.isLineEdge=function(){var t=this._label.isLine(0)||this._label.isLine(1),e=!this._label.isArea(0)||this._label.allPositionsEqual(0,w.EXTERIOR),n=!this._label.isArea(1)||this._label.allPositionsEqual(1,w.EXTERIOR);return t&&e&&n},e.prototype.setEdgeRing=function(t){this._edgeRing=t},e.prototype.getMinEdgeRing=function(){return this._minEdgeRing},e.prototype.getDepthDelta=function(){var t=this._edge.getDepthDelta();return this._isForward||(t=-t),t},e.prototype.setInResult=function(t){this._isInResult=t},e.prototype.getSym=function(){return this._sym},e.prototype.isForward=function(){return this._isForward},e.prototype.getEdge=function(){return this._edge},e.prototype.printEdge=function(t){this.print(t),t.print(" "),this._isForward?this._edge.print(t):this._edge.printReverse(t)},e.prototype.setSym=function(t){this._sym=t},e.prototype.setVisitedEdge=function(t){this.setVisited(t),this._sym.setVisited(t)},e.prototype.setEdgeDepths=function(t,e){var n=this.getEdge().getDepthDelta();this._isForward||(n=-n);var i=1;t===Se.LEFT&&(i=-1);var r=Se.opposite(t),o=e+n*i;this.setDepth(t,e),this.setDepth(r,o)},e.prototype.getEdgeRing=function(){return this._edgeRing},e.prototype.isInResult=function(){return this._isInResult},e.prototype.setNext=function(t){this._next=t},e.prototype.isVisited=function(){return this._isVisited},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e.depthFactor=function(t,e){return t===w.EXTERIOR&&e===w.INTERIOR?1:t===w.INTERIOR&&e===w.EXTERIOR?-1:0},e}(Ue),Xe=function(){};Xe.prototype.createNode=function(t){return new Ge(t,null)},Xe.prototype.interfaces_=function(){return[]},Xe.prototype.getClass=function(){return Xe};var Ye=function(){if(this._edges=new Nt,this._nodes=null,this._edgeEndList=new Nt,0===arguments.length)this._nodes=new qe(new Xe);else if(1===arguments.length){var t=arguments[0];this._nodes=new qe(t)}};Ye.prototype.printEdges=function(t){t.println("Edges:");for(var e=0;e<this._edges.size();e++){t.println("edge "+e+":");var n=this._edges.get(e);n.print(t),n.eiList.print(t)}},Ye.prototype.find=function(t){return this._nodes.find(t)},Ye.prototype.addNode=function(){if(arguments[0]instanceof Ge){var t=arguments[0];return this._nodes.addNode(t)}if(arguments[0]instanceof C){var e=arguments[0];return this._nodes.addNode(e)}},Ye.prototype.getNodeIterator=function(){return this._nodes.iterator()},Ye.prototype.linkResultDirectedEdges=function(){for(var t=this._nodes.iterator();t.hasNext();){t.next().getEdges().linkResultDirectedEdges()}},Ye.prototype.debugPrintln=function(t){Y.out.println(t)},Ye.prototype.isBoundaryNode=function(t,e){var n=this._nodes.find(e);if(null===n)return!1;var i=n.getLabel();return null!==i&&i.getLocation(t)===w.BOUNDARY},Ye.prototype.linkAllDirectedEdges=function(){for(var t=this._nodes.iterator();t.hasNext();){t.next().getEdges().linkAllDirectedEdges()}},Ye.prototype.matchInSameDirection=function(t,e,n,i){return!!t.equals(n)&&(at.computeOrientation(t,e,i)===at.COLLINEAR&&Be.quadrant(t,e)===Be.quadrant(n,i))},Ye.prototype.getEdgeEnds=function(){return this._edgeEndList},Ye.prototype.debugPrint=function(t){Y.out.print(t)},Ye.prototype.getEdgeIterator=function(){return this._edges.iterator()},Ye.prototype.findEdgeInSameDirection=function(t,e){for(var n=0;n<this._edges.size();n++){var i=this._edges.get(n),r=i.getCoordinates();if(this.matchInSameDirection(t,e,r[0],r[1]))return i;if(this.matchInSameDirection(t,e,r[r.length-1],r[r.length-2]))return i}return null},Ye.prototype.insertEdge=function(t){this._edges.add(t)},Ye.prototype.findEdgeEnd=function(t){for(var e=this.getEdgeEnds().iterator();e.hasNext();){var n=e.next();if(n.getEdge()===t)return n}return null},Ye.prototype.addEdges=function(t){for(var e=t.iterator();e.hasNext();){var n=e.next();this._edges.add(n);var i=new ze(n,!0),r=new ze(n,!1);i.setSym(r),r.setSym(i),this.add(i),this.add(r)}},Ye.prototype.add=function(t){this._nodes.add(t),this._edgeEndList.add(t)},Ye.prototype.getNodes=function(){return this._nodes.values()},Ye.prototype.findEdge=function(t,e){for(var n=0;n<this._edges.size();n++){var i=this._edges.get(n),r=i.getCoordinates();if(t.equals(r[0])&&e.equals(r[1]))return i}return null},Ye.prototype.interfaces_=function(){return[]},Ye.prototype.getClass=function(){return Ye},Ye.linkResultDirectedEdges=function(t){for(var e=t.iterator();e.hasNext();){e.next().getEdges().linkResultDirectedEdges()}};var ke=function(){this._geometryFactory=null,this._shellList=new Nt;var t=arguments[0];this._geometryFactory=t};ke.prototype.sortShellsAndHoles=function(t,e,n){for(var i=t.iterator();i.hasNext();){var r=i.next();r.isHole()?n.add(r):e.add(r)}},ke.prototype.computePolygons=function(t){for(var e=new Nt,n=t.iterator();n.hasNext();){var i=n.next().toPolygon(this._geometryFactory);e.add(i)}return e},ke.prototype.placeFreeHoles=function(t,e){for(var n=e.iterator();n.hasNext();){var i=n.next();if(null===i.getShell()){var r=this.findEdgeRingContaining(i,t);if(null===r)throw new we("unable to assign hole to a shell",i.getCoordinate(0));i.setShell(r)}}},ke.prototype.buildMinimalEdgeRings=function(t,e,n){for(var i=new Nt,r=t.iterator();r.hasNext();){var o=r.next();if(o.getMaxNodeDegree()>2){o.linkDirectedEdgesForMinimalEdgeRings();var s=o.buildMinimalRings(),a=this.findShell(s);null!==a?(this.placePolygonHoles(a,s),e.add(a)):n.addAll(s)}else i.add(o)}return i},ke.prototype.containsPoint=function(t){for(var e=this._shellList.iterator();e.hasNext();){if(e.next().containsPoint(t))return!0}return!1},ke.prototype.buildMaximalEdgeRings=function(t){for(var e=new Nt,n=t.iterator();n.hasNext();){var i=n.next();if(i.isInResult()&&i.getLabel().isArea()&&null===i.getEdgeRing()){var r=new Ae(i,this._geometryFactory);e.add(r),r.setInResult()}}return e},ke.prototype.placePolygonHoles=function(t,e){for(var n=e.iterator();n.hasNext();){var i=n.next();i.isHole()&&i.setShell(t)}},ke.prototype.getPolygons=function(){return this.computePolygons(this._shellList)},ke.prototype.findEdgeRingContaining=function(t,e){for(var n=t.getLinearRing(),i=n.getEnvelopeInternal(),r=n.getCoordinateN(0),o=null,s=null,a=e.iterator();a.hasNext();){var u=a.next(),l=u.getLinearRing(),c=l.getEnvelopeInternal();null!==o&&(s=o.getLinearRing().getEnvelopeInternal());var p=!1;c.contains(i)&&at.isPointInRing(r,l.getCoordinates())&&(p=!0),p&&(null===o||s.contains(c))&&(o=u)}return o},ke.prototype.findShell=function(t){for(var e=0,n=null,i=t.iterator();i.hasNext();){var r=i.next();r.isHole()||(n=r,e++)}return et.isTrue(e<=1,"found two shells in MinimalEdgeRing list"),n},ke.prototype.add=function(){if(1===arguments.length){var t=arguments[0];this.add(t.getEdgeEnds(),t.getNodes())}else if(2===arguments.length){var e=arguments[0],n=arguments[1];Ye.linkResultDirectedEdges(n);var i=this.buildMaximalEdgeRings(e),r=new Nt,o=this.buildMinimalEdgeRings(i,this._shellList,r);this.sortShellsAndHoles(o,this._shellList,r),this.placeFreeHoles(this._shellList,r)}},ke.prototype.interfaces_=function(){return[]},ke.prototype.getClass=function(){return ke};var je=function(){};je.prototype.getBounds=function(){},je.prototype.interfaces_=function(){return[]},je.prototype.getClass=function(){return je};var He=function(){this._bounds=null,this._item=null;var t=arguments[0],e=arguments[1];this._bounds=t,this._item=e};He.prototype.getItem=function(){return this._item},He.prototype.getBounds=function(){return this._bounds},He.prototype.interfaces_=function(){return[je,e]},He.prototype.getClass=function(){return He};var We=function(){this._size=null,this._items=null,this._size=0,this._items=new Nt,this._items.add(null)};We.prototype.poll=function(){if(this.isEmpty())return null;var t=this._items.get(1);return this._items.set(1,this._items.get(this._size)),this._size-=1,this.reorder(1),t},We.prototype.size=function(){return this._size},We.prototype.reorder=function(t){for(var e=null,n=this._items.get(t);2*t<=this._size&&((e=2*t)!==this._size&&this._items.get(e+1).compareTo(this._items.get(e))<0&&e++,this._items.get(e).compareTo(n)<0);t=e)this._items.set(t,this._items.get(e));this._items.set(t,n)},We.prototype.clear=function(){this._size=0,this._items.clear()},We.prototype.isEmpty=function(){return 0===this._size},We.prototype.add=function(t){this._items.add(null),this._size+=1;var e=this._size;for(this._items.set(0,t);t.compareTo(this._items.get(Math.trunc(e/2)))<0;e/=2)this._items.set(e,this._items.get(Math.trunc(e/2)));this._items.set(e,t)},We.prototype.interfaces_=function(){return[]},We.prototype.getClass=function(){return We};var Ke=function(){};Ke.prototype.visitItem=function(t){},Ke.prototype.interfaces_=function(){return[]},Ke.prototype.getClass=function(){return Ke};var Je=function(){};Je.prototype.insert=function(t,e){},Je.prototype.remove=function(t,e){},Je.prototype.query=function(){},Je.prototype.interfaces_=function(){return[]},Je.prototype.getClass=function(){return Je};var Qe=function(){if(this._childBoundables=new Nt,this._bounds=null,this._level=null,0===arguments.length);else if(1===arguments.length){var t=arguments[0];this._level=t}},Ze={serialVersionUID:{configurable:!0}};Qe.prototype.getLevel=function(){return this._level},Qe.prototype.size=function(){return this._childBoundables.size()},Qe.prototype.getChildBoundables=function(){return this._childBoundables},Qe.prototype.addChildBoundable=function(t){et.isTrue(null===this._bounds),this._childBoundables.add(t)},Qe.prototype.isEmpty=function(){return this._childBoundables.isEmpty()},Qe.prototype.getBounds=function(){return null===this._bounds&&(this._bounds=this.computeBounds()),this._bounds},Qe.prototype.interfaces_=function(){return[je,e]},Qe.prototype.getClass=function(){return Qe},Ze.serialVersionUID.get=function(){return 0x5a1e55ec41369800},Object.defineProperties(Qe,Ze);var $e=function(){};$e.reverseOrder=function(){return{compare:function(t,e){return e.compareTo(t)}}},$e.min=function(t){return $e.sort(t),t.get(0)},$e.sort=function(t,e){var n=t.toArray();e?Gt.sort(n,e):Gt.sort(n);for(var i=t.iterator(),r=0,o=n.length;r<o;r++)i.next(),i.set(n[r])},$e.singletonList=function(t){var e=new Nt;return e.add(t),e};var tn=function(){this._boundable1=null,this._boundable2=null,this._distance=null,this._itemDistance=null;var t=arguments[0],e=arguments[1],n=arguments[2];this._boundable1=t,this._boundable2=e,this._itemDistance=n,this._distance=this.distance()};tn.prototype.expandToQueue=function(t,e){var n=tn.isComposite(this._boundable1),i=tn.isComposite(this._boundable2);if(n&&i)return tn.area(this._boundable1)>tn.area(this._boundable2)?(this.expand(this._boundable1,this._boundable2,t,e),null):(this.expand(this._boundable2,this._boundable1,t,e),null);if(n)return this.expand(this._boundable1,this._boundable2,t,e),null;if(i)return this.expand(this._boundable2,this._boundable1,t,e),null;throw new m("neither boundable is composite")},tn.prototype.isLeaves=function(){return!(tn.isComposite(this._boundable1)||tn.isComposite(this._boundable2))},tn.prototype.compareTo=function(t){var e=t;return this._distance<e._distance?-1:this._distance>e._distance?1:0},tn.prototype.expand=function(t,e,n,i){for(var r=t.getChildBoundables().iterator();r.hasNext();){var o=r.next(),s=new tn(o,e,this._itemDistance);s.getDistance()<i&&n.add(s)}},tn.prototype.getBoundable=function(t){return 0===t?this._boundable1:this._boundable2},tn.prototype.getDistance=function(){return this._distance},tn.prototype.distance=function(){return this.isLeaves()?this._itemDistance.distance(this._boundable1,this._boundable2):this._boundable1.getBounds().distance(this._boundable2.getBounds())},tn.prototype.interfaces_=function(){return[E]},tn.prototype.getClass=function(){return tn},tn.area=function(t){return t.getBounds().getArea()},tn.isComposite=function(t){return t instanceof Qe};var en=function t(){if(this._root=null,this._built=!1,this._itemBoundables=new Nt,this._nodeCapacity=null,0===arguments.length){var e=t.DEFAULT_NODE_CAPACITY;this._nodeCapacity=e}else if(1===arguments.length){var n=arguments[0];et.isTrue(n>1,"Node capacity must be greater than 1"),this._nodeCapacity=n}},nn={IntersectsOp:{configurable:!0},serialVersionUID:{configurable:!0},DEFAULT_NODE_CAPACITY:{configurable:!0}};en.prototype.getNodeCapacity=function(){return this._nodeCapacity},en.prototype.lastNode=function(t){return t.get(t.size()-1)},en.prototype.size=function(){if(0===arguments.length)return this.isEmpty()?0:(this.build(),this.size(this._root));if(1===arguments.length){for(var t=0,e=arguments[0].getChildBoundables().iterator();e.hasNext();){var n=e.next();n instanceof Qe?t+=this.size(n):n instanceof He&&(t+=1)}return t}},en.prototype.removeItem=function(t,e){for(var n=null,i=t.getChildBoundables().iterator();i.hasNext();){var r=i.next();r instanceof He&&r.getItem()===e&&(n=r)}return null!==n&&(t.getChildBoundables().remove(n),!0)},en.prototype.itemsTree=function(){if(0===arguments.length){this.build();var t=this.itemsTree(this._root);return null===t?new Nt:t}if(1===arguments.length){for(var e=arguments[0],n=new Nt,i=e.getChildBoundables().iterator();i.hasNext();){var r=i.next();if(r instanceof Qe){var o=this.itemsTree(r);null!==o&&n.add(o)}else r instanceof He?n.add(r.getItem()):et.shouldNeverReachHere()}return n.size()<=0?null:n}},en.prototype.insert=function(t,e){et.isTrue(!this._built,"Cannot insert items into an STR packed R-tree after it has been built."),this._itemBoundables.add(new He(t,e))},en.prototype.boundablesAtLevel=function(){if(1===arguments.length){var t=arguments[0],e=new Nt;return this.boundablesAtLevel(t,this._root,e),e}if(3===arguments.length){var n=arguments[0],i=arguments[1],r=arguments[2];if(et.isTrue(n>-2),i.getLevel()===n)return r.add(i),null;for(var o=i.getChildBoundables().iterator();o.hasNext();){var s=o.next();s instanceof Qe?this.boundablesAtLevel(n,s,r):(et.isTrue(s instanceof He),-1===n&&r.add(s))}return null}},en.prototype.query=function(){if(1===arguments.length){var t=arguments[0];this.build();var e=new Nt;return this.isEmpty()?e:(this.getIntersectsOp().intersects(this._root.getBounds(),t)&&this.query(t,this._root,e),e)}if(2===arguments.length){var n=arguments[0],i=arguments[1];if(this.build(),this.isEmpty())return null;this.getIntersectsOp().intersects(this._root.getBounds(),n)&&this.query(n,this._root,i)}else if(3===arguments.length)if(T(arguments[2],Ke)&&arguments[0]instanceof Object&&arguments[1]instanceof Qe)for(var r=arguments[0],o=arguments[1],s=arguments[2],a=o.getChildBoundables(),u=0;u<a.size();u++){var l=a.get(u);this.getIntersectsOp().intersects(l.getBounds(),r)&&(l instanceof Qe?this.query(r,l,s):l instanceof He?s.visitItem(l.getItem()):et.shouldNeverReachHere())}else if(T(arguments[2],xt)&&arguments[0]instanceof Object&&arguments[1]instanceof Qe)for(var c=arguments[0],p=arguments[1],h=arguments[2],f=p.getChildBoundables(),g=0;g<f.size();g++){var d=f.get(g);this.getIntersectsOp().intersects(d.getBounds(),c)&&(d instanceof Qe?this.query(c,d,h):d instanceof He?h.add(d.getItem()):et.shouldNeverReachHere())}},en.prototype.build=function(){if(this._built)return null;this._root=this._itemBoundables.isEmpty()?this.createNode(0):this.createHigherLevels(this._itemBoundables,-1),this._itemBoundables=null,this._built=!0},en.prototype.getRoot=function(){return this.build(),this._root},en.prototype.remove=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];return this.build(),!!this.getIntersectsOp().intersects(this._root.getBounds(),t)&&this.remove(t,this._root,e)}if(3===arguments.length){var n=arguments[0],i=arguments[1],r=arguments[2],o=this.removeItem(i,r);if(o)return!0;for(var s=null,a=i.getChildBoundables().iterator();a.hasNext();){var u=a.next();if(this.getIntersectsOp().intersects(u.getBounds(),n)&&(u instanceof Qe&&(o=this.remove(n,u,r)))){s=u;break}}return null!==s&&s.getChildBoundables().isEmpty()&&i.getChildBoundables().remove(s),o}},en.prototype.createHigherLevels=function(t,e){et.isTrue(!t.isEmpty());var n=this.createParentBoundables(t,e+1);return 1===n.size()?n.get(0):this.createHigherLevels(n,e+1)},en.prototype.depth=function(){if(0===arguments.length)return this.isEmpty()?0:(this.build(),this.depth(this._root));if(1===arguments.length){for(var t=0,e=arguments[0].getChildBoundables().iterator();e.hasNext();){var n=e.next();if(n instanceof Qe){var i=this.depth(n);i>t&&(t=i)}}return t+1}},en.prototype.createParentBoundables=function(t,e){et.isTrue(!t.isEmpty());var n=new Nt;n.add(this.createNode(e));var i=new Nt(t);$e.sort(i,this.getComparator());for(var r=i.iterator();r.hasNext();){var o=r.next();this.lastNode(n).getChildBoundables().size()===this.getNodeCapacity()&&n.add(this.createNode(e)),this.lastNode(n).addChildBoundable(o)}return n},en.prototype.isEmpty=function(){return this._built?this._root.isEmpty():this._itemBoundables.isEmpty()},en.prototype.interfaces_=function(){return[e]},en.prototype.getClass=function(){return en},en.compareDoubles=function(t,e){return t>e?1:t<e?-1:0},nn.IntersectsOp.get=function(){return rn},nn.serialVersionUID.get=function(){return-0x35ef64c82d4c5400},nn.DEFAULT_NODE_CAPACITY.get=function(){return 10},Object.defineProperties(en,nn);var rn=function(){},on=function(){};on.prototype.distance=function(t,e){},on.prototype.interfaces_=function(){return[]},on.prototype.getClass=function(){return on};var sn=function(t){function n(e){e=e||n.DEFAULT_NODE_CAPACITY,t.call(this,e)}t&&(n.__proto__=t),(n.prototype=Object.create(t&&t.prototype)).constructor=n;var i={STRtreeNode:{configurable:!0},serialVersionUID:{configurable:!0},xComparator:{configurable:!0},yComparator:{configurable:!0},intersectsOp:{configurable:!0},DEFAULT_NODE_CAPACITY:{configurable:!0}};return n.prototype.createParentBoundablesFromVerticalSlices=function(t,e){et.isTrue(t.length>0);for(var n=new Nt,i=0;i<t.length;i++)n.addAll(this.createParentBoundablesFromVerticalSlice(t[i],e));return n},n.prototype.createNode=function(t){return new an(t)},n.prototype.size=function(){return 0===arguments.length?t.prototype.size.call(this):t.prototype.size.apply(this,arguments)},n.prototype.insert=function(){if(2!==arguments.length)return t.prototype.insert.apply(this,arguments);var e=arguments[0],n=arguments[1];if(e.isNull())return null;t.prototype.insert.call(this,e,n)},n.prototype.getIntersectsOp=function(){return n.intersectsOp},n.prototype.verticalSlices=function(t,e){for(var n=Math.trunc(Math.ceil(t.size()/e)),i=new Array(e).fill(null),r=t.iterator(),o=0;o<e;o++){i[o]=new Nt;for(var s=0;r.hasNext()&&s<n;){var a=r.next();i[o].add(a),s++}}return i},n.prototype.query=function(){if(1===arguments.length){var e=arguments[0];return t.prototype.query.call(this,e)}if(2===arguments.length){var n=arguments[0],i=arguments[1];t.prototype.query.call(this,n,i)}else if(3===arguments.length)if(T(arguments[2],Ke)&&arguments[0]instanceof Object&&arguments[1]instanceof Qe){var r=arguments[0],o=arguments[1],s=arguments[2];t.prototype.query.call(this,r,o,s)}else if(T(arguments[2],xt)&&arguments[0]instanceof Object&&arguments[1]instanceof Qe){var a=arguments[0],u=arguments[1],l=arguments[2];t.prototype.query.call(this,a,u,l)}},n.prototype.getComparator=function(){return n.yComparator},n.prototype.createParentBoundablesFromVerticalSlice=function(e,n){return t.prototype.createParentBoundables.call(this,e,n)},n.prototype.remove=function(){if(2===arguments.length){var e=arguments[0],n=arguments[1];return t.prototype.remove.call(this,e,n)}return t.prototype.remove.apply(this,arguments)},n.prototype.depth=function(){return 0===arguments.length?t.prototype.depth.call(this):t.prototype.depth.apply(this,arguments)},n.prototype.createParentBoundables=function(t,e){et.isTrue(!t.isEmpty());var i=Math.trunc(Math.ceil(t.size()/this.getNodeCapacity())),r=new Nt(t);$e.sort(r,n.xComparator);var o=this.verticalSlices(r,Math.trunc(Math.ceil(Math.sqrt(i))));return this.createParentBoundablesFromVerticalSlices(o,e)},n.prototype.nearestNeighbour=function(){if(1===arguments.length){if(T(arguments[0],on)){var t=arguments[0],e=new tn(this.getRoot(),this.getRoot(),t);return this.nearestNeighbour(e)}if(arguments[0]instanceof tn){var i=arguments[0];return this.nearestNeighbour(i,v.POSITIVE_INFINITY)}}else if(2===arguments.length){if(arguments[0]instanceof n&&T(arguments[1],on)){var r=arguments[0],o=arguments[1],s=new tn(this.getRoot(),r.getRoot(),o);return this.nearestNeighbour(s)}if(arguments[0]instanceof tn&&"number"==typeof arguments[1]){var a=arguments[0],u=arguments[1],l=null,c=new We;for(c.add(a);!c.isEmpty()&&u>0;){var p=c.poll(),h=p.getDistance();if(h>=u)break;p.isLeaves()?(u=h,l=p):p.expandToQueue(c,u)}return[l.getBoundable(0).getItem(),l.getBoundable(1).getItem()]}}else if(3===arguments.length){var f=arguments[0],g=arguments[1],d=arguments[2],y=new He(f,g),_=new tn(this.getRoot(),y,d);return this.nearestNeighbour(_)[0]}},n.prototype.interfaces_=function(){return[Je,e]},n.prototype.getClass=function(){return n},n.centreX=function(t){return n.avg(t.getMinX(),t.getMaxX())},n.avg=function(t,e){return(t+e)/2},n.centreY=function(t){return n.avg(t.getMinY(),t.getMaxY())},i.STRtreeNode.get=function(){return an},i.serialVersionUID.get=function(){return 0x39920f7d5f261e0},i.xComparator.get=function(){return{interfaces_:function(){return[N]},compare:function(e,i){return t.compareDoubles(n.centreX(e.getBounds()),n.centreX(i.getBounds()))}}},i.yComparator.get=function(){return{interfaces_:function(){return[N]},compare:function(e,i){return t.compareDoubles(n.centreY(e.getBounds()),n.centreY(i.getBounds()))}}},i.intersectsOp.get=function(){return{interfaces_:function(){return[t.IntersectsOp]},intersects:function(t,e){return t.intersects(e)}}},i.DEFAULT_NODE_CAPACITY.get=function(){return 10},Object.defineProperties(n,i),n}(en),an=function(t){function e(){var e=arguments[0];t.call(this,e)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.computeBounds=function(){for(var t=null,e=this.getChildBoundables().iterator();e.hasNext();){var n=e.next();null===t?t=new j(n.getBounds()):t.expandToInclude(n.getBounds())}return t},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Qe),un=function(){};un.prototype.interfaces_=function(){return[]},un.prototype.getClass=function(){return un},un.relativeSign=function(t,e){return t<e?-1:t>e?1:0},un.compare=function(t,e,n){if(e.equals2D(n))return 0;var i=un.relativeSign(e.x,n.x),r=un.relativeSign(e.y,n.y);switch(t){case 0:return un.compareValue(i,r);case 1:return un.compareValue(r,i);case 2:return un.compareValue(r,-i);case 3:return un.compareValue(-i,r);case 4:return un.compareValue(-i,-r);case 5:return un.compareValue(-r,-i);case 6:return un.compareValue(-r,i);case 7:return un.compareValue(i,-r)}return et.shouldNeverReachHere("invalid octant value"),0},un.compareValue=function(t,e){return t<0?-1:t>0?1:e<0?-1:e>0?1:0};var ln=function(){this._segString=null,this.coord=null,this.segmentIndex=null,this._segmentOctant=null,this._isInterior=null;var t=arguments[0],e=arguments[1],n=arguments[2],i=arguments[3];this._segString=t,this.coord=new C(e),this.segmentIndex=n,this._segmentOctant=i,this._isInterior=!e.equals2D(t.getCoordinate(n))};ln.prototype.getCoordinate=function(){return this.coord},ln.prototype.print=function(t){t.print(this.coord),t.print(" seg # = "+this.segmentIndex)},ln.prototype.compareTo=function(t){var e=t;return this.segmentIndex<e.segmentIndex?-1:this.segmentIndex>e.segmentIndex?1:this.coord.equals2D(e.coord)?0:un.compare(this._segmentOctant,this.coord,e.coord)},ln.prototype.isEndPoint=function(t){return 0===this.segmentIndex&&!this._isInterior||this.segmentIndex===t},ln.prototype.isInterior=function(){return this._isInterior},ln.prototype.interfaces_=function(){return[E]},ln.prototype.getClass=function(){return ln};var cn=function(){this._nodeMap=new p,this._edge=null;var t=arguments[0];this._edge=t};cn.prototype.getSplitCoordinates=function(){var t=new St;this.addEndpoints();for(var e=this.iterator(),n=e.next();e.hasNext();){var i=e.next();this.addEdgeCoordinates(n,i,t),n=i}return t.toCoordinateArray()},cn.prototype.addCollapsedNodes=function(){var t=new Nt;this.findCollapsesFromInsertedNodes(t),this.findCollapsesFromExistingVertices(t);for(var e=t.iterator();e.hasNext();){var n=e.next().intValue();this.add(this._edge.getCoordinate(n),n)}},cn.prototype.print=function(t){t.println("Intersections:");for(var e=this.iterator();e.hasNext();){e.next().print(t)}},cn.prototype.findCollapsesFromExistingVertices=function(t){for(var e=0;e<this._edge.size()-2;e++){var n=this._edge.getCoordinate(e),i=this._edge.getCoordinate(e+2);n.equals2D(i)&&t.add(new M(e+1))}},cn.prototype.addEdgeCoordinates=function(t,e,n){var i=this._edge.getCoordinate(e.segmentIndex),r=e.isInterior()||!e.coord.equals2D(i);n.add(new C(t.coord),!1);for(var o=t.segmentIndex+1;o<=e.segmentIndex;o++)n.add(this._edge.getCoordinate(o));r&&n.add(new C(e.coord))},cn.prototype.iterator=function(){return this._nodeMap.values().iterator()},cn.prototype.addSplitEdges=function(t){this.addEndpoints(),this.addCollapsedNodes();for(var e=this.iterator(),n=e.next();e.hasNext();){var i=e.next(),r=this.createSplitEdge(n,i);t.add(r),n=i}},cn.prototype.findCollapseIndex=function(t,e,n){if(!t.coord.equals2D(e.coord))return!1;var i=e.segmentIndex-t.segmentIndex;return e.isInterior()||i--,1===i&&(n[0]=t.segmentIndex+1,!0)},cn.prototype.findCollapsesFromInsertedNodes=function(t){for(var e=new Array(1).fill(null),n=this.iterator(),i=n.next();n.hasNext();){var r=n.next();this.findCollapseIndex(i,r,e)&&t.add(new M(e[0])),i=r}},cn.prototype.getEdge=function(){return this._edge},cn.prototype.addEndpoints=function(){var t=this._edge.size()-1;this.add(this._edge.getCoordinate(0),0),this.add(this._edge.getCoordinate(t),t)},cn.prototype.createSplitEdge=function(t,e){var n=e.segmentIndex-t.segmentIndex+2,i=this._edge.getCoordinate(e.segmentIndex),r=e.isInterior()||!e.coord.equals2D(i);r||n--;var o=new Array(n).fill(null),s=0;o[s++]=new C(t.coord);for(var a=t.segmentIndex+1;a<=e.segmentIndex;a++)o[s++]=this._edge.getCoordinate(a);return r&&(o[s]=new C(e.coord)),new gn(o,this._edge.getData())},cn.prototype.add=function(t,e){var n=new ln(this._edge,t,e,this._edge.getSegmentOctant(e)),i=this._nodeMap.get(n);return null!==i?(et.isTrue(i.coord.equals2D(t),"Found equal nodes with different coordinates"),i):(this._nodeMap.put(n,n),n)},cn.prototype.checkSplitEdgesCorrectness=function(t){var e=this._edge.getCoordinates(),n=t.get(0).getCoordinate(0);if(!n.equals2D(e[0]))throw new $("bad split edge start point at "+n);var i=t.get(t.size()-1).getCoordinates(),r=i[i.length-1];if(!r.equals2D(e[e.length-1]))throw new $("bad split edge end point at "+r)},cn.prototype.interfaces_=function(){return[]},cn.prototype.getClass=function(){return cn};var pn=function(){};pn.prototype.interfaces_=function(){return[]},pn.prototype.getClass=function(){return pn},pn.octant=function(){if("number"==typeof arguments[0]&&"number"==typeof arguments[1]){var t=arguments[0],e=arguments[1];if(0===t&&0===e)throw new m("Cannot compute the octant for point ( "+t+", "+e+" )");var n=Math.abs(t),i=Math.abs(e);return t>=0?e>=0?n>=i?0:1:n>=i?7:6:e>=0?n>=i?3:2:n>=i?4:5}if(arguments[0]instanceof C&&arguments[1]instanceof C){var r=arguments[0],o=arguments[1],s=o.x-r.x,a=o.y-r.y;if(0===s&&0===a)throw new m("Cannot compute the octant for two identical points "+r);return pn.octant(s,a)}};var hn=function(){};hn.prototype.getCoordinates=function(){},hn.prototype.size=function(){},hn.prototype.getCoordinate=function(t){},hn.prototype.isClosed=function(){},hn.prototype.setData=function(t){},hn.prototype.getData=function(){},hn.prototype.interfaces_=function(){return[]},hn.prototype.getClass=function(){return hn};var fn=function(){};fn.prototype.addIntersection=function(t,e){},fn.prototype.interfaces_=function(){return[hn]},fn.prototype.getClass=function(){return fn};var gn=function(){this._nodeList=new cn(this),this._pts=null,this._data=null;var t=arguments[0],e=arguments[1];this._pts=t,this._data=e};gn.prototype.getCoordinates=function(){return this._pts},gn.prototype.size=function(){return this._pts.length},gn.prototype.getCoordinate=function(t){return this._pts[t]},gn.prototype.isClosed=function(){return this._pts[0].equals(this._pts[this._pts.length-1])},gn.prototype.getSegmentOctant=function(t){return t===this._pts.length-1?-1:this.safeOctant(this.getCoordinate(t),this.getCoordinate(t+1))},gn.prototype.setData=function(t){this._data=t},gn.prototype.safeOctant=function(t,e){return t.equals2D(e)?0:pn.octant(t,e)},gn.prototype.getData=function(){return this._data},gn.prototype.addIntersection=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];this.addIntersectionNode(t,e)}else if(4===arguments.length){var n=arguments[0],i=arguments[1],r=arguments[3],o=new C(n.getIntersection(r));this.addIntersection(o,i)}},gn.prototype.toString=function(){return Z.toLineString(new ue(this._pts))},gn.prototype.getNodeList=function(){return this._nodeList},gn.prototype.addIntersectionNode=function(t,e){var n=e,i=n+1;if(i<this._pts.length){var r=this._pts[i];t.equals2D(r)&&(n=i)}return this._nodeList.add(t,n)},gn.prototype.addIntersections=function(t,e,n){for(var i=0;i<t.getIntersectionNum();i++)this.addIntersection(t,e,n,i)},gn.prototype.interfaces_=function(){return[fn]},gn.prototype.getClass=function(){return gn},gn.getNodedSubstrings=function(){if(1===arguments.length){var t=arguments[0],e=new Nt;return gn.getNodedSubstrings(t,e),e}if(2===arguments.length)for(var n=arguments[0],i=arguments[1],r=n.iterator();r.hasNext();){r.next().getNodeList().addSplitEdges(i)}};var dn=function(){if(this.p0=null,this.p1=null,0===arguments.length)this.p0=new C,this.p1=new C;else if(1===arguments.length){var t=arguments[0];this.p0=new C(t.p0),this.p1=new C(t.p1)}else if(2===arguments.length)this.p0=arguments[0],this.p1=arguments[1];else if(4===arguments.length){var e=arguments[0],n=arguments[1],i=arguments[2],r=arguments[3];this.p0=new C(e,n),this.p1=new C(i,r)}},yn={serialVersionUID:{configurable:!0}};dn.prototype.minX=function(){return Math.min(this.p0.x,this.p1.x)},dn.prototype.orientationIndex=function(){if(arguments[0]instanceof dn){var t=arguments[0],e=at.orientationIndex(this.p0,this.p1,t.p0),n=at.orientationIndex(this.p0,this.p1,t.p1);return e>=0&&n>=0?Math.max(e,n):e<=0&&n<=0?Math.max(e,n):0}if(arguments[0]instanceof C){var i=arguments[0];return at.orientationIndex(this.p0,this.p1,i)}},dn.prototype.toGeometry=function(t){return t.createLineString([this.p0,this.p1])},dn.prototype.isVertical=function(){return this.p0.x===this.p1.x},dn.prototype.equals=function(t){if(!(t instanceof dn))return!1;var e=t;return this.p0.equals(e.p0)&&this.p1.equals(e.p1)},dn.prototype.intersection=function(t){var e=new rt;return e.computeIntersection(this.p0,this.p1,t.p0,t.p1),e.hasIntersection()?e.getIntersection(0):null},dn.prototype.project=function(){if(arguments[0]instanceof C){var t=arguments[0];if(t.equals(this.p0)||t.equals(this.p1))return new C(t);var e=this.projectionFactor(t),n=new C;return n.x=this.p0.x+e*(this.p1.x-this.p0.x),n.y=this.p0.y+e*(this.p1.y-this.p0.y),n}if(arguments[0]instanceof dn){var i=arguments[0],r=this.projectionFactor(i.p0),o=this.projectionFactor(i.p1);if(r>=1&&o>=1)return null;if(r<=0&&o<=0)return null;var s=this.project(i.p0);r<0&&(s=this.p0),r>1&&(s=this.p1);var a=this.project(i.p1);return o<0&&(a=this.p0),o>1&&(a=this.p1),new dn(s,a)}},dn.prototype.normalize=function(){this.p1.compareTo(this.p0)<0&&this.reverse()},dn.prototype.angle=function(){return Math.atan2(this.p1.y-this.p0.y,this.p1.x-this.p0.x)},dn.prototype.getCoordinate=function(t){return 0===t?this.p0:this.p1},dn.prototype.distancePerpendicular=function(t){return at.distancePointLinePerpendicular(t,this.p0,this.p1)},dn.prototype.minY=function(){return Math.min(this.p0.y,this.p1.y)},dn.prototype.midPoint=function(){return dn.midPoint(this.p0,this.p1)},dn.prototype.projectionFactor=function(t){if(t.equals(this.p0))return 0;if(t.equals(this.p1))return 1;var e=this.p1.x-this.p0.x,n=this.p1.y-this.p0.y,i=e*e+n*n;if(i<=0)return v.NaN;return((t.x-this.p0.x)*e+(t.y-this.p0.y)*n)/i},dn.prototype.closestPoints=function(t){var e=this.intersection(t);if(null!==e)return[e,e];var n=new Array(2).fill(null),i=v.MAX_VALUE,r=null,o=this.closestPoint(t.p0);i=o.distance(t.p0),n[0]=o,n[1]=t.p0;var s=this.closestPoint(t.p1);(r=s.distance(t.p1))<i&&(i=r,n[0]=s,n[1]=t.p1);var a=t.closestPoint(this.p0);(r=a.distance(this.p0))<i&&(i=r,n[0]=this.p0,n[1]=a);var u=t.closestPoint(this.p1);return(r=u.distance(this.p1))<i&&(i=r,n[0]=this.p1,n[1]=u),n},dn.prototype.closestPoint=function(t){var e=this.projectionFactor(t);if(e>0&&e<1)return this.project(t);return this.p0.distance(t)<this.p1.distance(t)?this.p0:this.p1},dn.prototype.maxX=function(){return Math.max(this.p0.x,this.p1.x)},dn.prototype.getLength=function(){return this.p0.distance(this.p1)},dn.prototype.compareTo=function(t){var e=t,n=this.p0.compareTo(e.p0);return 0!==n?n:this.p1.compareTo(e.p1)},dn.prototype.reverse=function(){var t=this.p0;this.p0=this.p1,this.p1=t},dn.prototype.equalsTopo=function(t){return this.p0.equals(t.p0)&&(this.p1.equals(t.p1)||this.p0.equals(t.p1))&&this.p1.equals(t.p0)},dn.prototype.lineIntersection=function(t){try{return k.intersection(this.p0,this.p1,t.p0,t.p1)}catch(t){if(!(t instanceof X))throw t}return null},dn.prototype.maxY=function(){return Math.max(this.p0.y,this.p1.y)},dn.prototype.pointAlongOffset=function(t,e){var n=this.p0.x+t*(this.p1.x-this.p0.x),i=this.p0.y+t*(this.p1.y-this.p0.y),r=this.p1.x-this.p0.x,o=this.p1.y-this.p0.y,s=Math.sqrt(r*r+o*o),a=0,u=0;if(0!==e){if(s<=0)throw new Error("Cannot compute offset from zero-length line segment");a=e*r/s,u=e*o/s}return new C(n-u,i+a)},dn.prototype.setCoordinates=function(){if(1===arguments.length){var t=arguments[0];this.setCoordinates(t.p0,t.p1)}else if(2===arguments.length){var e=arguments[0],n=arguments[1];this.p0.x=e.x,this.p0.y=e.y,this.p1.x=n.x,this.p1.y=n.y}},dn.prototype.segmentFraction=function(t){var e=this.projectionFactor(t);return e<0?e=0:(e>1||v.isNaN(e))&&(e=1),e},dn.prototype.toString=function(){return"LINESTRING( "+this.p0.x+" "+this.p0.y+", "+this.p1.x+" "+this.p1.y+")"},dn.prototype.isHorizontal=function(){return this.p0.y===this.p1.y},dn.prototype.distance=function(){if(arguments[0]instanceof dn){var t=arguments[0];return at.distanceLineLine(this.p0,this.p1,t.p0,t.p1)}if(arguments[0]instanceof C){var e=arguments[0];return at.distancePointLine(e,this.p0,this.p1)}},dn.prototype.pointAlong=function(t){var e=new C;return e.x=this.p0.x+t*(this.p1.x-this.p0.x),e.y=this.p0.y+t*(this.p1.y-this.p0.y),e},dn.prototype.hashCode=function(){var t=v.doubleToLongBits(this.p0.x);t^=31*v.doubleToLongBits(this.p0.y);var e=Math.trunc(t)^Math.trunc(t>>32),n=v.doubleToLongBits(this.p1.x);n^=31*v.doubleToLongBits(this.p1.y);return e^(Math.trunc(n)^Math.trunc(n>>32))},dn.prototype.interfaces_=function(){return[E,e]},dn.prototype.getClass=function(){return dn},dn.midPoint=function(t,e){return new C((t.x+e.x)/2,(t.y+e.y)/2)},yn.serialVersionUID.get=function(){return 0x2d2172135f411c00},Object.defineProperties(dn,yn);var _n=function(){this.tempEnv1=new j,this.tempEnv2=new j,this._overlapSeg1=new dn,this._overlapSeg2=new dn};_n.prototype.overlap=function(){if(2===arguments.length);else if(4===arguments.length){var t=arguments[0],e=arguments[1],n=arguments[2],i=arguments[3];t.getLineSegment(e,this._overlapSeg1),n.getLineSegment(i,this._overlapSeg2),this.overlap(this._overlapSeg1,this._overlapSeg2)}},_n.prototype.interfaces_=function(){return[]},_n.prototype.getClass=function(){return _n};var mn=function(){this._pts=null,this._start=null,this._end=null,this._env=null,this._context=null,this._id=null;var t=arguments[0],e=arguments[1],n=arguments[2],i=arguments[3];this._pts=t,this._start=e,this._end=n,this._context=i};mn.prototype.getLineSegment=function(t,e){e.p0=this._pts[t],e.p1=this._pts[t+1]},mn.prototype.computeSelect=function(t,e,n,i){var r=this._pts[e],o=this._pts[n];if(i.tempEnv1.init(r,o),n-e==1)return i.select(this,e),null;if(!t.intersects(i.tempEnv1))return null;var s=Math.trunc((e+n)/2);e<s&&this.computeSelect(t,e,s,i),s<n&&this.computeSelect(t,s,n,i)},mn.prototype.getCoordinates=function(){for(var t=new Array(this._end-this._start+1).fill(null),e=0,n=this._start;n<=this._end;n++)t[e++]=this._pts[n];return t},mn.prototype.computeOverlaps=function(t,e){this.computeOverlapsInternal(this._start,this._end,t,t._start,t._end,e)},mn.prototype.setId=function(t){this._id=t},mn.prototype.select=function(t,e){this.computeSelect(t,this._start,this._end,e)},mn.prototype.getEnvelope=function(){if(null===this._env){var t=this._pts[this._start],e=this._pts[this._end];this._env=new j(t,e)}return this._env},mn.prototype.getEndIndex=function(){return this._end},mn.prototype.getStartIndex=function(){return this._start},mn.prototype.getContext=function(){return this._context},mn.prototype.getId=function(){return this._id},mn.prototype.computeOverlapsInternal=function(t,e,n,i,r,o){var s=this._pts[t],a=this._pts[e],u=n._pts[i],l=n._pts[r];if(e-t==1&&r-i==1)return o.overlap(this,t,n,i),null;if(o.tempEnv1.init(s,a),o.tempEnv2.init(u,l),!o.tempEnv1.intersects(o.tempEnv2))return null;var c=Math.trunc((t+e)/2),p=Math.trunc((i+r)/2);t<c&&(i<p&&this.computeOverlapsInternal(t,c,n,i,p,o),p<r&&this.computeOverlapsInternal(t,c,n,p,r,o)),c<e&&(i<p&&this.computeOverlapsInternal(c,e,n,i,p,o),p<r&&this.computeOverlapsInternal(c,e,n,p,r,o))},mn.prototype.interfaces_=function(){return[]},mn.prototype.getClass=function(){return mn};var vn=function(){};vn.prototype.interfaces_=function(){return[]},vn.prototype.getClass=function(){return vn},vn.getChainStartIndices=function(t){var e=0,n=new Nt;n.add(new M(e));do{var i=vn.findChainEnd(t,e);n.add(new M(i)),e=i}while(e<t.length-1);return vn.toIntArray(n)},vn.findChainEnd=function(t,e){for(var n=e;n<t.length-1&&t[n].equals2D(t[n+1]);)n++;if(n>=t.length-1)return t.length-1;for(var i=Be.quadrant(t[n],t[n+1]),r=e+1;r<t.length;){if(!t[r-1].equals2D(t[r])){if(Be.quadrant(t[r-1],t[r])!==i)break}r++}return r-1},vn.getChains=function(){if(1===arguments.length){var t=arguments[0];return vn.getChains(t,null)}if(2===arguments.length){for(var e=arguments[0],n=arguments[1],i=new Nt,r=vn.getChainStartIndices(e),o=0;o<r.length-1;o++){var s=new mn(e,r[o],r[o+1],n);i.add(s)}return i}},vn.toIntArray=function(t){for(var e=new Array(t.size()).fill(null),n=0;n<e.length;n++)e[n]=t.get(n).intValue();return e};var In=function(){};In.prototype.computeNodes=function(t){},In.prototype.getNodedSubstrings=function(){},In.prototype.interfaces_=function(){return[]},In.prototype.getClass=function(){return In};var En=function(){if(this._segInt=null,0===arguments.length);else if(1===arguments.length){var t=arguments[0];this.setSegmentIntersector(t)}};En.prototype.setSegmentIntersector=function(t){this._segInt=t},En.prototype.interfaces_=function(){return[In]},En.prototype.getClass=function(){return En};var xn=function(t){function e(e){e?t.call(this,e):t.call(this),this._monoChains=new Nt,this._index=new sn,this._idCounter=0,this._nodedSegStrings=null,this._nOverlaps=0}t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e;var n={SegmentOverlapAction:{configurable:!0}};return e.prototype.getMonotoneChains=function(){return this._monoChains},e.prototype.getNodedSubstrings=function(){return gn.getNodedSubstrings(this._nodedSegStrings)},e.prototype.getIndex=function(){return this._index},e.prototype.add=function(t){for(var e=vn.getChains(t.getCoordinates(),t).iterator();e.hasNext();){var n=e.next();n.setId(this._idCounter++),this._index.insert(n.getEnvelope(),n),this._monoChains.add(n)}},e.prototype.computeNodes=function(t){this._nodedSegStrings=t;for(var e=t.iterator();e.hasNext();)this.add(e.next());this.intersectChains()},e.prototype.intersectChains=function(){for(var t=new Nn(this._segInt),e=this._monoChains.iterator();e.hasNext();)for(var n=e.next(),i=this._index.query(n.getEnvelope()).iterator();i.hasNext();){var r=i.next();if(r.getId()>n.getId()&&(n.computeOverlaps(r,t),this._nOverlaps++),this._segInt.isDone())return null}},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},n.SegmentOverlapAction.get=function(){return Nn},Object.defineProperties(e,n),e}(En),Nn=function(t){function e(){t.call(this),this._si=null;var e=arguments[0];this._si=e}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.overlap=function(){if(4!==arguments.length)return t.prototype.overlap.apply(this,arguments);var e=arguments[0],n=arguments[1],i=arguments[2],r=arguments[3],o=e.getContext(),s=i.getContext();this._si.processIntersections(o,n,s,r)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(_n),Cn=function t(){if(this._quadrantSegments=t.DEFAULT_QUADRANT_SEGMENTS,this._endCapStyle=t.CAP_ROUND,this._joinStyle=t.JOIN_ROUND,this._mitreLimit=t.DEFAULT_MITRE_LIMIT,this._isSingleSided=!1,this._simplifyFactor=t.DEFAULT_SIMPLIFY_FACTOR,0===arguments.length);else if(1===arguments.length){var e=arguments[0];this.setQuadrantSegments(e)}else if(2===arguments.length){var n=arguments[0],i=arguments[1];this.setQuadrantSegments(n),this.setEndCapStyle(i)}else if(4===arguments.length){var r=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3];this.setQuadrantSegments(r),this.setEndCapStyle(o),this.setJoinStyle(s),this.setMitreLimit(a)}},Sn={CAP_ROUND:{configurable:!0},CAP_FLAT:{configurable:!0},CAP_SQUARE:{configurable:!0},JOIN_ROUND:{configurable:!0},JOIN_MITRE:{configurable:!0},JOIN_BEVEL:{configurable:!0},DEFAULT_QUADRANT_SEGMENTS:{configurable:!0},DEFAULT_MITRE_LIMIT:{configurable:!0},DEFAULT_SIMPLIFY_FACTOR:{configurable:!0}};Cn.prototype.getEndCapStyle=function(){return this._endCapStyle},Cn.prototype.isSingleSided=function(){return this._isSingleSided},Cn.prototype.setQuadrantSegments=function(t){this._quadrantSegments=t,0===this._quadrantSegments&&(this._joinStyle=Cn.JOIN_BEVEL),this._quadrantSegments<0&&(this._joinStyle=Cn.JOIN_MITRE,this._mitreLimit=Math.abs(this._quadrantSegments)),t<=0&&(this._quadrantSegments=1),this._joinStyle!==Cn.JOIN_ROUND&&(this._quadrantSegments=Cn.DEFAULT_QUADRANT_SEGMENTS)},Cn.prototype.getJoinStyle=function(){return this._joinStyle},Cn.prototype.setJoinStyle=function(t){this._joinStyle=t},Cn.prototype.setSimplifyFactor=function(t){this._simplifyFactor=t<0?0:t},Cn.prototype.getSimplifyFactor=function(){return this._simplifyFactor},Cn.prototype.getQuadrantSegments=function(){return this._quadrantSegments},Cn.prototype.setEndCapStyle=function(t){this._endCapStyle=t},Cn.prototype.getMitreLimit=function(){return this._mitreLimit},Cn.prototype.setMitreLimit=function(t){this._mitreLimit=t},Cn.prototype.setSingleSided=function(t){this._isSingleSided=t},Cn.prototype.interfaces_=function(){return[]},Cn.prototype.getClass=function(){return Cn},Cn.bufferDistanceError=function(t){var e=Math.PI/2/t;return 1-Math.cos(e/2)},Sn.CAP_ROUND.get=function(){return 1},Sn.CAP_FLAT.get=function(){return 2},Sn.CAP_SQUARE.get=function(){return 3},Sn.JOIN_ROUND.get=function(){return 1},Sn.JOIN_MITRE.get=function(){return 2},Sn.JOIN_BEVEL.get=function(){return 3},Sn.DEFAULT_QUADRANT_SEGMENTS.get=function(){return 8},Sn.DEFAULT_MITRE_LIMIT.get=function(){return 5},Sn.DEFAULT_SIMPLIFY_FACTOR.get=function(){return.01},Object.defineProperties(Cn,Sn);var Ln=function(t){this._distanceTol=null,this._isDeleted=null,this._angleOrientation=at.COUNTERCLOCKWISE,this._inputLine=t||null},bn={INIT:{configurable:!0},DELETE:{configurable:!0},KEEP:{configurable:!0},NUM_PTS_TO_CHECK:{configurable:!0}};Ln.prototype.isDeletable=function(t,e,n,i){var r=this._inputLine[t],o=this._inputLine[e],s=this._inputLine[n];return!!this.isConcave(r,o,s)&&(!!this.isShallow(r,o,s,i)&&this.isShallowSampled(r,o,t,n,i))},Ln.prototype.deleteShallowConcavities=function(){for(var t=1,e=this.findNextNonDeletedIndex(t),n=this.findNextNonDeletedIndex(e),i=!1;n<this._inputLine.length;){var r=!1;this.isDeletable(t,e,n,this._distanceTol)&&(this._isDeleted[e]=Ln.DELETE,r=!0,i=!0),t=r?n:e,e=this.findNextNonDeletedIndex(t),n=this.findNextNonDeletedIndex(e)}return i},Ln.prototype.isShallowConcavity=function(t,e,n,i){if(!(at.computeOrientation(t,e,n)===this._angleOrientation))return!1;return at.distancePointLine(e,t,n)<i},Ln.prototype.isShallowSampled=function(t,e,n,i,r){var o=Math.trunc((i-n)/Ln.NUM_PTS_TO_CHECK);o<=0&&(o=1);for(var s=n;s<i;s+=o)if(!this.isShallow(t,e,this._inputLine[s],r))return!1;return!0},Ln.prototype.isConcave=function(t,e,n){var i=at.computeOrientation(t,e,n)===this._angleOrientation;return i},Ln.prototype.simplify=function(t){this._distanceTol=Math.abs(t),t<0&&(this._angleOrientation=at.CLOCKWISE),this._isDeleted=new Array(this._inputLine.length).fill(null);var e=!1;do{e=this.deleteShallowConcavities()}while(e);return this.collapseLine()},Ln.prototype.findNextNonDeletedIndex=function(t){for(var e=t+1;e<this._inputLine.length&&this._isDeleted[e]===Ln.DELETE;)e++;return e},Ln.prototype.isShallow=function(t,e,n,i){return at.distancePointLine(e,t,n)<i},Ln.prototype.collapseLine=function(){for(var t=new St,e=0;e<this._inputLine.length;e++)this._isDeleted[e]!==Ln.DELETE&&t.add(this._inputLine[e]);return t.toCoordinateArray()},Ln.prototype.interfaces_=function(){return[]},Ln.prototype.getClass=function(){return Ln},Ln.simplify=function(t,e){return new Ln(t).simplify(e)},bn.INIT.get=function(){return 0},bn.DELETE.get=function(){return 1},bn.KEEP.get=function(){return 1},bn.NUM_PTS_TO_CHECK.get=function(){return 10},Object.defineProperties(Ln,bn);var wn=function(){this._ptList=null,this._precisionModel=null,this._minimimVertexDistance=0,this._ptList=new Nt},On={COORDINATE_ARRAY_TYPE:{configurable:!0}};wn.prototype.getCoordinates=function(){return this._ptList.toArray(wn.COORDINATE_ARRAY_TYPE)},wn.prototype.setPrecisionModel=function(t){this._precisionModel=t},wn.prototype.addPt=function(t){var e=new C(t);if(this._precisionModel.makePrecise(e),this.isRedundant(e))return null;this._ptList.add(e)},wn.prototype.revere=function(){},wn.prototype.addPts=function(t,e){if(e)for(var n=0;n<t.length;n++)this.addPt(t[n]);else for(var i=t.length-1;i>=0;i--)this.addPt(t[i])},wn.prototype.isRedundant=function(t){if(this._ptList.size()<1)return!1;var e=this._ptList.get(this._ptList.size()-1);return t.distance(e)<this._minimimVertexDistance},wn.prototype.toString=function(){return(new _e).createLineString(this.getCoordinates()).toString()},wn.prototype.closeRing=function(){if(this._ptList.size()<1)return null;var t=new C(this._ptList.get(0)),e=this._ptList.get(this._ptList.size()-1);if(t.equals(e))return null;this._ptList.add(t)},wn.prototype.setMinimumVertexDistance=function(t){this._minimimVertexDistance=t},wn.prototype.interfaces_=function(){return[]},wn.prototype.getClass=function(){return wn},On.COORDINATE_ARRAY_TYPE.get=function(){return new Array(0).fill(null)},Object.defineProperties(wn,On);var Tn=function(){},Rn={PI_TIMES_2:{configurable:!0},PI_OVER_2:{configurable:!0},PI_OVER_4:{configurable:!0},COUNTERCLOCKWISE:{configurable:!0},CLOCKWISE:{configurable:!0},NONE:{configurable:!0}};Tn.prototype.interfaces_=function(){return[]},Tn.prototype.getClass=function(){return Tn},Tn.toDegrees=function(t){return 180*t/Math.PI},Tn.normalize=function(t){for(;t>Math.PI;)t-=Tn.PI_TIMES_2;for(;t<=-Math.PI;)t+=Tn.PI_TIMES_2;return t},Tn.angle=function(){if(1===arguments.length){var t=arguments[0];return Math.atan2(t.y,t.x)}if(2===arguments.length){var e=arguments[0],n=arguments[1],i=n.x-e.x,r=n.y-e.y;return Math.atan2(r,i)}},Tn.isAcute=function(t,e,n){var i=t.x-e.x,r=t.y-e.y;return i*(n.x-e.x)+r*(n.y-e.y)>0},Tn.isObtuse=function(t,e,n){var i=t.x-e.x,r=t.y-e.y;return i*(n.x-e.x)+r*(n.y-e.y)<0},Tn.interiorAngle=function(t,e,n){var i=Tn.angle(e,t),r=Tn.angle(e,n);return Math.abs(r-i)},Tn.normalizePositive=function(t){if(t<0){for(;t<0;)t+=Tn.PI_TIMES_2;t>=Tn.PI_TIMES_2&&(t=0)}else{for(;t>=Tn.PI_TIMES_2;)t-=Tn.PI_TIMES_2;t<0&&(t=0)}return t},Tn.angleBetween=function(t,e,n){var i=Tn.angle(e,t),r=Tn.angle(e,n);return Tn.diff(i,r)},Tn.diff=function(t,e){var n=null;return(n=t<e?e-t:t-e)>Math.PI&&(n=2*Math.PI-n),n},Tn.toRadians=function(t){return t*Math.PI/180},Tn.getTurn=function(t,e){var n=Math.sin(e-t);return n>0?Tn.COUNTERCLOCKWISE:n<0?Tn.CLOCKWISE:Tn.NONE},Tn.angleBetweenOriented=function(t,e,n){var i=Tn.angle(e,t),r=Tn.angle(e,n)-i;return r<=-Math.PI?r+Tn.PI_TIMES_2:r>Math.PI?r-Tn.PI_TIMES_2:r},Rn.PI_TIMES_2.get=function(){return 2*Math.PI},Rn.PI_OVER_2.get=function(){return Math.PI/2},Rn.PI_OVER_4.get=function(){return Math.PI/4},Rn.COUNTERCLOCKWISE.get=function(){return at.COUNTERCLOCKWISE},Rn.CLOCKWISE.get=function(){return at.CLOCKWISE},Rn.NONE.get=function(){return at.COLLINEAR},Object.defineProperties(Tn,Rn);var Pn=function t(){this._maxCurveSegmentError=0,this._filletAngleQuantum=null,this._closingSegLengthFactor=1,this._segList=null,this._distance=0,this._precisionModel=null,this._bufParams=null,this._li=null,this._s0=null,this._s1=null,this._s2=null,this._seg0=new dn,this._seg1=new dn,this._offset0=new dn,this._offset1=new dn,this._side=0,this._hasNarrowConcaveAngle=!1;var e=arguments[0],n=arguments[1],i=arguments[2];this._precisionModel=e,this._bufParams=n,this._li=new rt,this._filletAngleQuantum=Math.PI/2/n.getQuadrantSegments(),n.getQuadrantSegments()>=8&&n.getJoinStyle()===Cn.JOIN_ROUND&&(this._closingSegLengthFactor=t.MAX_CLOSING_SEG_LEN_FACTOR),this.init(i)},Dn={OFFSET_SEGMENT_SEPARATION_FACTOR:{configurable:!0},INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR:{configurable:!0},CURVE_VERTEX_SNAP_DISTANCE_FACTOR:{configurable:!0},MAX_CLOSING_SEG_LEN_FACTOR:{configurable:!0}};Pn.prototype.addNextSegment=function(t,e){if(this._s0=this._s1,this._s1=this._s2,this._s2=t,this._seg0.setCoordinates(this._s0,this._s1),this.computeOffsetSegment(this._seg0,this._side,this._distance,this._offset0),this._seg1.setCoordinates(this._s1,this._s2),this.computeOffsetSegment(this._seg1,this._side,this._distance,this._offset1),this._s1.equals(this._s2))return null;var n=at.computeOrientation(this._s0,this._s1,this._s2),i=n===at.CLOCKWISE&&this._side===Se.LEFT||n===at.COUNTERCLOCKWISE&&this._side===Se.RIGHT;0===n?this.addCollinear(e):i?this.addOutsideTurn(n,e):this.addInsideTurn(n,e)},Pn.prototype.addLineEndCap=function(t,e){var n=new dn(t,e),i=new dn;this.computeOffsetSegment(n,Se.LEFT,this._distance,i);var r=new dn;this.computeOffsetSegment(n,Se.RIGHT,this._distance,r);var o=e.x-t.x,s=e.y-t.y,a=Math.atan2(s,o);switch(this._bufParams.getEndCapStyle()){case Cn.CAP_ROUND:this._segList.addPt(i.p1),this.addFilletArc(e,a+Math.PI/2,a-Math.PI/2,at.CLOCKWISE,this._distance),this._segList.addPt(r.p1);break;case Cn.CAP_FLAT:this._segList.addPt(i.p1),this._segList.addPt(r.p1);break;case Cn.CAP_SQUARE:var u=new C;u.x=Math.abs(this._distance)*Math.cos(a),u.y=Math.abs(this._distance)*Math.sin(a);var l=new C(i.p1.x+u.x,i.p1.y+u.y),c=new C(r.p1.x+u.x,r.p1.y+u.y);this._segList.addPt(l),this._segList.addPt(c)}},Pn.prototype.getCoordinates=function(){return this._segList.getCoordinates()},Pn.prototype.addMitreJoin=function(t,e,n,i){var r=!0,o=null;try{o=k.intersection(e.p0,e.p1,n.p0,n.p1);(i<=0?1:o.distance(t)/Math.abs(i))>this._bufParams.getMitreLimit()&&(r=!1)}catch(t){if(!(t instanceof X))throw t;o=new C(0,0),r=!1}r?this._segList.addPt(o):this.addLimitedMitreJoin(e,n,i,this._bufParams.getMitreLimit())},Pn.prototype.addFilletCorner=function(t,e,n,i,r){var o=e.x-t.x,s=e.y-t.y,a=Math.atan2(s,o),u=n.x-t.x,l=n.y-t.y,c=Math.atan2(l,u);i===at.CLOCKWISE?a<=c&&(a+=2*Math.PI):a>=c&&(a-=2*Math.PI),this._segList.addPt(e),this.addFilletArc(t,a,c,i,r),this._segList.addPt(n)},Pn.prototype.addOutsideTurn=function(t,e){if(this._offset0.p1.distance(this._offset1.p0)<this._distance*Pn.OFFSET_SEGMENT_SEPARATION_FACTOR)return this._segList.addPt(this._offset0.p1),null;this._bufParams.getJoinStyle()===Cn.JOIN_MITRE?this.addMitreJoin(this._s1,this._offset0,this._offset1,this._distance):this._bufParams.getJoinStyle()===Cn.JOIN_BEVEL?this.addBevelJoin(this._offset0,this._offset1):(e&&this._segList.addPt(this._offset0.p1),this.addFilletCorner(this._s1,this._offset0.p1,this._offset1.p0,t,this._distance),this._segList.addPt(this._offset1.p0))},Pn.prototype.createSquare=function(t){this._segList.addPt(new C(t.x+this._distance,t.y+this._distance)),this._segList.addPt(new C(t.x+this._distance,t.y-this._distance)),this._segList.addPt(new C(t.x-this._distance,t.y-this._distance)),this._segList.addPt(new C(t.x-this._distance,t.y+this._distance)),this._segList.closeRing()},Pn.prototype.addSegments=function(t,e){this._segList.addPts(t,e)},Pn.prototype.addFirstSegment=function(){this._segList.addPt(this._offset1.p0)},Pn.prototype.addLastSegment=function(){this._segList.addPt(this._offset1.p1)},Pn.prototype.initSideSegments=function(t,e,n){this._s1=t,this._s2=e,this._side=n,this._seg1.setCoordinates(t,e),this.computeOffsetSegment(this._seg1,n,this._distance,this._offset1)},Pn.prototype.addLimitedMitreJoin=function(t,e,n,i){var r=this._seg0.p1,o=Tn.angle(r,this._seg0.p0),s=Tn.angleBetweenOriented(this._seg0.p0,r,this._seg1.p1)/2,a=Tn.normalize(o+s),u=Tn.normalize(a+Math.PI),l=i*n,c=n-l*Math.abs(Math.sin(s)),p=r.x+l*Math.cos(u),h=r.y+l*Math.sin(u),f=new C(p,h),g=new dn(r,f),d=g.pointAlongOffset(1,c),y=g.pointAlongOffset(1,-c);this._side===Se.LEFT?(this._segList.addPt(d),this._segList.addPt(y)):(this._segList.addPt(y),this._segList.addPt(d))},Pn.prototype.computeOffsetSegment=function(t,e,n,i){var r=e===Se.LEFT?1:-1,o=t.p1.x-t.p0.x,s=t.p1.y-t.p0.y,a=Math.sqrt(o*o+s*s),u=r*n*o/a,l=r*n*s/a;i.p0.x=t.p0.x-l,i.p0.y=t.p0.y+u,i.p1.x=t.p1.x-l,i.p1.y=t.p1.y+u},Pn.prototype.addFilletArc=function(t,e,n,i,r){var o=i===at.CLOCKWISE?-1:1,s=Math.abs(e-n),a=Math.trunc(s/this._filletAngleQuantum+.5);if(a<1)return null;for(var u=s/a,l=0,c=new C;l<s;){var p=e+o*l;c.x=t.x+r*Math.cos(p),c.y=t.y+r*Math.sin(p),this._segList.addPt(c),l+=u}},Pn.prototype.addInsideTurn=function(t,e){if(this._li.computeIntersection(this._offset0.p0,this._offset0.p1,this._offset1.p0,this._offset1.p1),this._li.hasIntersection())this._segList.addPt(this._li.getIntersection(0));else if(this._hasNarrowConcaveAngle=!0,this._offset0.p1.distance(this._offset1.p0)<this._distance*Pn.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR)this._segList.addPt(this._offset0.p1);else{if(this._segList.addPt(this._offset0.p1),this._closingSegLengthFactor>0){var n=new C((this._closingSegLengthFactor*this._offset0.p1.x+this._s1.x)/(this._closingSegLengthFactor+1),(this._closingSegLengthFactor*this._offset0.p1.y+this._s1.y)/(this._closingSegLengthFactor+1));this._segList.addPt(n);var i=new C((this._closingSegLengthFactor*this._offset1.p0.x+this._s1.x)/(this._closingSegLengthFactor+1),(this._closingSegLengthFactor*this._offset1.p0.y+this._s1.y)/(this._closingSegLengthFactor+1));this._segList.addPt(i)}else this._segList.addPt(this._s1);this._segList.addPt(this._offset1.p0)}},Pn.prototype.createCircle=function(t){var e=new C(t.x+this._distance,t.y);this._segList.addPt(e),this.addFilletArc(t,0,2*Math.PI,-1,this._distance),this._segList.closeRing()},Pn.prototype.addBevelJoin=function(t,e){this._segList.addPt(t.p1),this._segList.addPt(e.p0)},Pn.prototype.init=function(t){this._distance=t,this._maxCurveSegmentError=t*(1-Math.cos(this._filletAngleQuantum/2)),this._segList=new wn,this._segList.setPrecisionModel(this._precisionModel),this._segList.setMinimumVertexDistance(t*Pn.CURVE_VERTEX_SNAP_DISTANCE_FACTOR)},Pn.prototype.addCollinear=function(t){this._li.computeIntersection(this._s0,this._s1,this._s1,this._s2);this._li.getIntersectionNum()>=2&&(this._bufParams.getJoinStyle()===Cn.JOIN_BEVEL||this._bufParams.getJoinStyle()===Cn.JOIN_MITRE?(t&&this._segList.addPt(this._offset0.p1),this._segList.addPt(this._offset1.p0)):this.addFilletCorner(this._s1,this._offset0.p1,this._offset1.p0,at.CLOCKWISE,this._distance))},Pn.prototype.closeRing=function(){this._segList.closeRing()},Pn.prototype.hasNarrowConcaveAngle=function(){return this._hasNarrowConcaveAngle},Pn.prototype.interfaces_=function(){return[]},Pn.prototype.getClass=function(){return Pn},Dn.OFFSET_SEGMENT_SEPARATION_FACTOR.get=function(){return.001},Dn.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR.get=function(){return.001},Dn.CURVE_VERTEX_SNAP_DISTANCE_FACTOR.get=function(){return 1e-6},Dn.MAX_CLOSING_SEG_LEN_FACTOR.get=function(){return 80},Object.defineProperties(Pn,Dn);var Mn=function(){this._distance=0,this._precisionModel=null,this._bufParams=null;var t=arguments[0],e=arguments[1];this._precisionModel=t,this._bufParams=e};Mn.prototype.getOffsetCurve=function(t,e){if(this._distance=e,0===e)return null;var n=e<0,i=Math.abs(e),r=this.getSegGen(i);t.length<=1?this.computePointCurve(t[0],r):this.computeOffsetCurve(t,n,r);var o=r.getCoordinates();return n&&Lt.reverse(o),o},Mn.prototype.computeSingleSidedBufferCurve=function(t,e,n){var i=this.simplifyTolerance(this._distance);if(e){n.addSegments(t,!0);var r=Ln.simplify(t,-i),o=r.length-1;n.initSideSegments(r[o],r[o-1],Se.LEFT),n.addFirstSegment();for(var s=o-2;s>=0;s--)n.addNextSegment(r[s],!0)}else{n.addSegments(t,!1);var a=Ln.simplify(t,i),u=a.length-1;n.initSideSegments(a[0],a[1],Se.LEFT),n.addFirstSegment();for(var l=2;l<=u;l++)n.addNextSegment(a[l],!0)}n.addLastSegment(),n.closeRing()},Mn.prototype.computeRingBufferCurve=function(t,e,n){var i=this.simplifyTolerance(this._distance);e===Se.RIGHT&&(i=-i);var r=Ln.simplify(t,i),o=r.length-1;n.initSideSegments(r[o-1],r[0],e);for(var s=1;s<=o;s++){var a=1!==s;n.addNextSegment(r[s],a)}n.closeRing()},Mn.prototype.computeLineBufferCurve=function(t,e){var n=this.simplifyTolerance(this._distance),i=Ln.simplify(t,n),r=i.length-1;e.initSideSegments(i[0],i[1],Se.LEFT);for(var o=2;o<=r;o++)e.addNextSegment(i[o],!0);e.addLastSegment(),e.addLineEndCap(i[r-1],i[r]);var s=Ln.simplify(t,-n),a=s.length-1;e.initSideSegments(s[a],s[a-1],Se.LEFT);for(var u=a-2;u>=0;u--)e.addNextSegment(s[u],!0);e.addLastSegment(),e.addLineEndCap(s[1],s[0]),e.closeRing()},Mn.prototype.computePointCurve=function(t,e){switch(this._bufParams.getEndCapStyle()){case Cn.CAP_ROUND:e.createCircle(t);break;case Cn.CAP_SQUARE:e.createSquare(t)}},Mn.prototype.getLineCurve=function(t,e){if(this._distance=e,e<0&&!this._bufParams.isSingleSided())return null;if(0===e)return null;var n=Math.abs(e),i=this.getSegGen(n);if(t.length<=1)this.computePointCurve(t[0],i);else if(this._bufParams.isSingleSided()){var r=e<0;this.computeSingleSidedBufferCurve(t,r,i)}else this.computeLineBufferCurve(t,i);return i.getCoordinates()},Mn.prototype.getBufferParameters=function(){return this._bufParams},Mn.prototype.simplifyTolerance=function(t){return t*this._bufParams.getSimplifyFactor()},Mn.prototype.getRingCurve=function(t,e,n){if(this._distance=n,t.length<=2)return this.getLineCurve(t,n);if(0===n)return Mn.copyCoordinates(t);var i=this.getSegGen(n);return this.computeRingBufferCurve(t,e,i),i.getCoordinates()},Mn.prototype.computeOffsetCurve=function(t,e,n){var i=this.simplifyTolerance(this._distance);if(e){var r=Ln.simplify(t,-i),o=r.length-1;n.initSideSegments(r[o],r[o-1],Se.LEFT),n.addFirstSegment();for(var s=o-2;s>=0;s--)n.addNextSegment(r[s],!0)}else{var a=Ln.simplify(t,i),u=a.length-1;n.initSideSegments(a[0],a[1],Se.LEFT),n.addFirstSegment();for(var l=2;l<=u;l++)n.addNextSegment(a[l],!0)}n.addLastSegment()},Mn.prototype.getSegGen=function(t){return new Pn(this._precisionModel,this._bufParams,t)},Mn.prototype.interfaces_=function(){return[]},Mn.prototype.getClass=function(){return Mn},Mn.copyCoordinates=function(t){for(var e=new Array(t.length).fill(null),n=0;n<e.length;n++)e[n]=new C(t[n]);return e};var An=function(){this._subgraphs=null,this._seg=new dn,this._cga=new at;var t=arguments[0];this._subgraphs=t},Fn={DepthSegment:{configurable:!0}};An.prototype.findStabbedSegments=function(){if(1===arguments.length){for(var t=arguments[0],e=new Nt,n=this._subgraphs.iterator();n.hasNext();){var i=n.next(),r=i.getEnvelope();t.y<r.getMinY()||t.y>r.getMaxY()||this.findStabbedSegments(t,i.getDirectedEdges(),e)}return e}if(3===arguments.length)if(T(arguments[2],xt)&&arguments[0]instanceof C&&arguments[1]instanceof ze)for(var o=arguments[0],s=arguments[1],a=arguments[2],u=s.getEdge().getCoordinates(),l=0;l<u.length-1;l++){this._seg.p0=u[l],this._seg.p1=u[l+1],this._seg.p0.y>this._seg.p1.y&&this._seg.reverse();if(!(Math.max(this._seg.p0.x,this._seg.p1.x)<o.x)&&!(this._seg.isHorizontal()||o.y<this._seg.p0.y||o.y>this._seg.p1.y||at.computeOrientation(this._seg.p0,this._seg.p1,o)===at.RIGHT)){var c=s.getDepth(Se.LEFT);this._seg.p0.equals(u[l])||(c=s.getDepth(Se.RIGHT));var p=new Gn(this._seg,c);a.add(p)}}else if(T(arguments[2],xt)&&arguments[0]instanceof C&&T(arguments[1],xt))for(var h=arguments[0],f=arguments[1],g=arguments[2],d=f.iterator();d.hasNext();){var y=d.next();y.isForward()&&this.findStabbedSegments(h,y,g)}},An.prototype.getDepth=function(t){var e=this.findStabbedSegments(t);if(0===e.size())return 0;return $e.min(e)._leftDepth},An.prototype.interfaces_=function(){return[]},An.prototype.getClass=function(){return An},Fn.DepthSegment.get=function(){return Gn},Object.defineProperties(An,Fn);var Gn=function(){this._upwardSeg=null,this._leftDepth=null;var t=arguments[0],e=arguments[1];this._upwardSeg=new dn(t),this._leftDepth=e};Gn.prototype.compareTo=function(t){var e=t;if(this._upwardSeg.minX()>=e._upwardSeg.maxX())return 1;if(this._upwardSeg.maxX()<=e._upwardSeg.minX())return-1;var n=this._upwardSeg.orientationIndex(e._upwardSeg);return 0!==n?n:0!=(n=-1*e._upwardSeg.orientationIndex(this._upwardSeg))?n:this._upwardSeg.compareTo(e._upwardSeg)},Gn.prototype.compareX=function(t,e){var n=t.p0.compareTo(e.p0);return 0!==n?n:t.p1.compareTo(e.p1)},Gn.prototype.toString=function(){return this._upwardSeg.toString()},Gn.prototype.interfaces_=function(){return[E]},Gn.prototype.getClass=function(){return Gn};var qn=function(t,e,n){this.p0=t||null,this.p1=e||null,this.p2=n||null};qn.prototype.area=function(){return qn.area(this.p0,this.p1,this.p2)},qn.prototype.signedArea=function(){return qn.signedArea(this.p0,this.p1,this.p2)},qn.prototype.interpolateZ=function(t){if(null===t)throw new m("Supplied point is null.");return qn.interpolateZ(t,this.p0,this.p1,this.p2)},qn.prototype.longestSideLength=function(){return qn.longestSideLength(this.p0,this.p1,this.p2)},qn.prototype.isAcute=function(){return qn.isAcute(this.p0,this.p1,this.p2)},qn.prototype.circumcentre=function(){return qn.circumcentre(this.p0,this.p1,this.p2)},qn.prototype.area3D=function(){return qn.area3D(this.p0,this.p1,this.p2)},qn.prototype.centroid=function(){return qn.centroid(this.p0,this.p1,this.p2)},qn.prototype.inCentre=function(){return qn.inCentre(this.p0,this.p1,this.p2)},qn.prototype.interfaces_=function(){return[]},qn.prototype.getClass=function(){return qn},qn.area=function(t,e,n){return Math.abs(((n.x-t.x)*(e.y-t.y)-(e.x-t.x)*(n.y-t.y))/2)},qn.signedArea=function(t,e,n){return((n.x-t.x)*(e.y-t.y)-(e.x-t.x)*(n.y-t.y))/2},qn.det=function(t,e,n,i){return t*i-e*n},qn.interpolateZ=function(t,e,n,i){var r=e.x,o=e.y,s=n.x-r,a=i.x-r,u=n.y-o,l=i.y-o,c=s*l-a*u,p=t.x-r,h=t.y-o,f=(l*p-a*h)/c,g=(-u*p+s*h)/c;return e.z+f*(n.z-e.z)+g*(i.z-e.z)},qn.longestSideLength=function(t,e,n){var i=t.distance(e),r=e.distance(n),o=n.distance(t),s=i;return r>s&&(s=r),o>s&&(s=o),s},qn.isAcute=function(t,e,n){return!!Tn.isAcute(t,e,n)&&(!!Tn.isAcute(e,n,t)&&!!Tn.isAcute(n,t,e))},qn.circumcentre=function(t,e,n){var i=n.x,r=n.y,o=t.x-i,s=t.y-r,a=e.x-i,u=e.y-r,l=2*qn.det(o,s,a,u),c=qn.det(s,o*o+s*s,u,a*a+u*u),p=qn.det(o,o*o+s*s,a,a*a+u*u);return new C(i-c/l,r+p/l)},qn.perpendicularBisector=function(t,e){var n=e.x-t.x,i=e.y-t.y,r=new k(t.x+n/2,t.y+i/2,1),o=new k(t.x-i+n/2,t.y+n+i/2,1);return new k(r,o)},qn.angleBisector=function(t,e,n){var i=e.distance(t),r=i/(i+e.distance(n)),o=n.x-t.x,s=n.y-t.y;return new C(t.x+r*o,t.y+r*s)},qn.area3D=function(t,e,n){var i=e.x-t.x,r=e.y-t.y,o=e.z-t.z,s=n.x-t.x,a=n.y-t.y,u=n.z-t.z,l=r*u-o*a,c=o*s-i*u,p=i*a-r*s,h=l*l+c*c+p*p,f=Math.sqrt(h)/2;return f},qn.centroid=function(t,e,n){var i=(t.x+e.x+n.x)/3,r=(t.y+e.y+n.y)/3;return new C(i,r)},qn.inCentre=function(t,e,n){var i=e.distance(n),r=t.distance(n),o=t.distance(e),s=i+r+o,a=(i*t.x+r*e.x+o*n.x)/s,u=(i*t.y+r*e.y+o*n.y)/s;return new C(a,u)};var Bn=function(){this._inputGeom=null,this._distance=null,this._curveBuilder=null,this._curveList=new Nt;var t=arguments[0],e=arguments[1],n=arguments[2];this._inputGeom=t,this._distance=e,this._curveBuilder=n};Bn.prototype.addPoint=function(t){if(this._distance<=0)return null;var e=t.getCoordinates(),n=this._curveBuilder.getLineCurve(e,this._distance);this.addCurve(n,w.EXTERIOR,w.INTERIOR)},Bn.prototype.addPolygon=function(t){var e=this._distance,n=Se.LEFT;this._distance<0&&(e=-this._distance,n=Se.RIGHT);var i=t.getExteriorRing(),r=Lt.removeRepeatedPoints(i.getCoordinates());if(this._distance<0&&this.isErodedCompletely(i,this._distance))return null;if(this._distance<=0&&r.length<3)return null;this.addPolygonRing(r,e,n,w.EXTERIOR,w.INTERIOR);for(var o=0;o<t.getNumInteriorRing();o++){var s=t.getInteriorRingN(o),a=Lt.removeRepeatedPoints(s.getCoordinates());this._distance>0&&this.isErodedCompletely(s,-this._distance)||this.addPolygonRing(a,e,Se.opposite(n),w.INTERIOR,w.EXTERIOR)}},Bn.prototype.isTriangleErodedCompletely=function(t,e){var n=new qn(t[0],t[1],t[2]),i=n.inCentre();return at.distancePointLine(i,n.p0,n.p1)<Math.abs(e)},Bn.prototype.addLineString=function(t){if(this._distance<=0&&!this._curveBuilder.getBufferParameters().isSingleSided())return null;var e=Lt.removeRepeatedPoints(t.getCoordinates()),n=this._curveBuilder.getLineCurve(e,this._distance);this.addCurve(n,w.EXTERIOR,w.INTERIOR)},Bn.prototype.addCurve=function(t,e,n){if(null===t||t.length<2)return null;var i=new gn(t,new Pe(0,w.BOUNDARY,e,n));this._curveList.add(i)},Bn.prototype.getCurves=function(){return this.add(this._inputGeom),this._curveList},Bn.prototype.addPolygonRing=function(t,e,n,i,r){if(0===e&&t.length<ee.MINIMUM_VALID_SIZE)return null;var o=i,s=r;t.length>=ee.MINIMUM_VALID_SIZE&&at.isCCW(t)&&(o=r,s=i,n=Se.opposite(n));var a=this._curveBuilder.getRingCurve(t,n,e);this.addCurve(a,o,s)},Bn.prototype.add=function(t){if(t.isEmpty())return null;t instanceof $t?this.addPolygon(t):t instanceof Kt?this.addLineString(t):t instanceof Qt?this.addPoint(t):t instanceof te?this.addCollection(t):t instanceof Xt?this.addCollection(t):t instanceof ne?this.addCollection(t):t instanceof zt&&this.addCollection(t)},Bn.prototype.isErodedCompletely=function(t,e){var n=t.getCoordinates();if(n.length<4)return e<0;if(4===n.length)return this.isTriangleErodedCompletely(n,e);var i=t.getEnvelopeInternal(),r=Math.min(i.getHeight(),i.getWidth());return e<0&&2*Math.abs(e)>r},Bn.prototype.addCollection=function(t){for(var e=0;e<t.getNumGeometries();e++){var n=t.getGeometryN(e);this.add(n)}},Bn.prototype.interfaces_=function(){return[]},Bn.prototype.getClass=function(){return Bn};var Vn=function(){};Vn.prototype.locate=function(t){},Vn.prototype.interfaces_=function(){return[]},Vn.prototype.getClass=function(){return Vn};var Un=function(){this._parent=null,this._atStart=null,this._max=null,this._index=null,this._subcollectionIterator=null;var t=arguments[0];this._parent=t,this._atStart=!0,this._index=0,this._max=t.getNumGeometries()};Un.prototype.next=function(){if(this._atStart)return this._atStart=!1,Un.isAtomic(this._parent)&&this._index++,this._parent;if(null!==this._subcollectionIterator){if(this._subcollectionIterator.hasNext())return this._subcollectionIterator.next();this._subcollectionIterator=null}if(this._index>=this._max)throw new i;var t=this._parent.getGeometryN(this._index++);return t instanceof zt?(this._subcollectionIterator=new Un(t),this._subcollectionIterator.next()):t},Un.prototype.remove=function(){throw new Error(this.getClass().getName())},Un.prototype.hasNext=function(){if(this._atStart)return!0;if(null!==this._subcollectionIterator){if(this._subcollectionIterator.hasNext())return!0;this._subcollectionIterator=null}return!(this._index>=this._max)},Un.prototype.interfaces_=function(){return[Et]},Un.prototype.getClass=function(){return Un},Un.isAtomic=function(t){return!(t instanceof zt)};var zn=function(){this._geom=null;var t=arguments[0];this._geom=t};zn.prototype.locate=function(t){return zn.locate(t,this._geom)},zn.prototype.interfaces_=function(){return[Vn]},zn.prototype.getClass=function(){return zn},zn.isPointInRing=function(t,e){return!!e.getEnvelopeInternal().intersects(t)&&at.isPointInRing(t,e.getCoordinates())},zn.containsPointInPolygon=function(t,e){if(e.isEmpty())return!1;var n=e.getExteriorRing();if(!zn.isPointInRing(t,n))return!1;for(var i=0;i<e.getNumInteriorRing();i++){var r=e.getInteriorRingN(i);if(zn.isPointInRing(t,r))return!1}return!0},zn.containsPoint=function(t,e){if(e instanceof $t)return zn.containsPointInPolygon(t,e);if(e instanceof zt)for(var n=new Un(e);n.hasNext();){var i=n.next();if(i!==e&&zn.containsPoint(t,i))return!0}return!1},zn.locate=function(t,e){return e.isEmpty()?w.EXTERIOR:zn.containsPoint(t,e)?w.INTERIOR:w.EXTERIOR};var Xn=function(){this._edgeMap=new p,this._edgeList=null,this._ptInAreaLocation=[w.NONE,w.NONE]};Xn.prototype.getNextCW=function(t){this.getEdges();var e=this._edgeList.indexOf(t),n=e-1;return 0===e&&(n=this._edgeList.size()-1),this._edgeList.get(n)},Xn.prototype.propagateSideLabels=function(t){for(var e=w.NONE,n=this.iterator();n.hasNext();){var i=n.next().getLabel();i.isArea(t)&&i.getLocation(t,Se.LEFT)!==w.NONE&&(e=i.getLocation(t,Se.LEFT))}if(e===w.NONE)return null;for(var r=e,o=this.iterator();o.hasNext();){var s=o.next(),a=s.getLabel();if(a.getLocation(t,Se.ON)===w.NONE&&a.setLocation(t,Se.ON,r),a.isArea(t)){var u=a.getLocation(t,Se.LEFT),l=a.getLocation(t,Se.RIGHT);if(l!==w.NONE){if(l!==r)throw new we("side location conflict",s.getCoordinate());u===w.NONE&&et.shouldNeverReachHere("found single null side (at "+s.getCoordinate()+")"),r=u}else et.isTrue(a.getLocation(t,Se.LEFT)===w.NONE,"found single null side"),a.setLocation(t,Se.RIGHT,r),a.setLocation(t,Se.LEFT,r)}}},Xn.prototype.getCoordinate=function(){var t=this.iterator();if(!t.hasNext())return null;return t.next().getCoordinate()},Xn.prototype.print=function(t){Y.out.println("EdgeEndStar:   "+this.getCoordinate());for(var e=this.iterator();e.hasNext();){e.next().print(t)}},Xn.prototype.isAreaLabelsConsistent=function(t){return this.computeEdgeEndLabels(t.getBoundaryNodeRule()),this.checkAreaLabelsConsistent(0)},Xn.prototype.checkAreaLabelsConsistent=function(t){var e=this.getEdges();if(e.size()<=0)return!0;var n=e.size()-1,i=e.get(n).getLabel().getLocation(t,Se.LEFT);et.isTrue(i!==w.NONE,"Found unlabelled area edge");for(var r=i,o=this.iterator();o.hasNext();){var s=o.next().getLabel();et.isTrue(s.isArea(t),"Found non-area edge");var a=s.getLocation(t,Se.LEFT),u=s.getLocation(t,Se.RIGHT);if(a===u)return!1;if(u!==r)return!1;r=a}return!0},Xn.prototype.findIndex=function(t){this.iterator();for(var e=0;e<this._edgeList.size();e++){if(this._edgeList.get(e)===t)return e}return-1},Xn.prototype.iterator=function(){return this.getEdges().iterator()},Xn.prototype.getEdges=function(){return null===this._edgeList&&(this._edgeList=new Nt(this._edgeMap.values())),this._edgeList},Xn.prototype.getLocation=function(t,e,n){return this._ptInAreaLocation[t]===w.NONE&&(this._ptInAreaLocation[t]=zn.locate(e,n[t].getGeometry())),this._ptInAreaLocation[t]},Xn.prototype.toString=function(){var t=new D;t.append("EdgeEndStar:   "+this.getCoordinate()),t.append("\n");for(var e=this.iterator();e.hasNext();){var n=e.next();t.append(n),t.append("\n")}return t.toString()},Xn.prototype.computeEdgeEndLabels=function(t){for(var e=this.iterator();e.hasNext();){e.next().computeLabel(t)}},Xn.prototype.computeLabelling=function(t){this.computeEdgeEndLabels(t[0].getBoundaryNodeRule()),this.propagateSideLabels(0),this.propagateSideLabels(1);for(var e=[!1,!1],n=this.iterator();n.hasNext();)for(var i=n.next().getLabel(),r=0;r<2;r++)i.isLine(r)&&i.getLocation(r)===w.BOUNDARY&&(e[r]=!0);for(var o=this.iterator();o.hasNext();)for(var s=o.next(),a=s.getLabel(),u=0;u<2;u++)if(a.isAnyNull(u)){var l=w.NONE;if(e[u])l=w.EXTERIOR;else{var c=s.getCoordinate();l=this.getLocation(u,c,t)}a.setAllLocationsIfNull(u,l)}},Xn.prototype.getDegree=function(){return this._edgeMap.size()},Xn.prototype.insertEdgeEnd=function(t,e){this._edgeMap.put(t,e),this._edgeList=null},Xn.prototype.interfaces_=function(){return[]},Xn.prototype.getClass=function(){return Xn};var Yn=function(t){function e(){t.call(this),this._resultAreaEdgeList=null,this._label=null,this._SCANNING_FOR_INCOMING=1,this._LINKING_TO_OUTGOING=2}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.linkResultDirectedEdges=function(){this.getResultAreaEdges();for(var t=null,e=null,n=this._SCANNING_FOR_INCOMING,i=0;i<this._resultAreaEdgeList.size();i++){var r=this._resultAreaEdgeList.get(i),o=r.getSym();if(r.getLabel().isArea())switch(null===t&&r.isInResult()&&(t=r),n){case this._SCANNING_FOR_INCOMING:if(!o.isInResult())continue;e=o,n=this._LINKING_TO_OUTGOING;break;case this._LINKING_TO_OUTGOING:if(!r.isInResult())continue;e.setNext(r),n=this._SCANNING_FOR_INCOMING}}if(n===this._LINKING_TO_OUTGOING){if(null===t)throw new we("no outgoing dirEdge found",this.getCoordinate());et.isTrue(t.isInResult(),"unable to link last incoming dirEdge"),e.setNext(t)}},e.prototype.insert=function(t){var e=t;this.insertEdgeEnd(e,e)},e.prototype.getRightmostEdge=function(){var t=this.getEdges(),e=t.size();if(e<1)return null;var n=t.get(0);if(1===e)return n;var i=t.get(e-1),r=n.getQuadrant(),o=i.getQuadrant();return Be.isNorthern(r)&&Be.isNorthern(o)?n:Be.isNorthern(r)||Be.isNorthern(o)?0!==n.getDy()?n:0!==i.getDy()?i:(et.shouldNeverReachHere("found two horizontal edges incident on node"),null):i},e.prototype.print=function(t){Y.out.println("DirectedEdgeStar: "+this.getCoordinate());for(var e=this.iterator();e.hasNext();){var n=e.next();t.print("out "),n.print(t),t.println(),t.print("in "),n.getSym().print(t),t.println()}},e.prototype.getResultAreaEdges=function(){if(null!==this._resultAreaEdgeList)return this._resultAreaEdgeList;this._resultAreaEdgeList=new Nt;for(var t=this.iterator();t.hasNext();){var e=t.next();(e.isInResult()||e.getSym().isInResult())&&this._resultAreaEdgeList.add(e)}return this._resultAreaEdgeList},e.prototype.updateLabelling=function(t){for(var e=this.iterator();e.hasNext();){var n=e.next().getLabel();n.setAllLocationsIfNull(0,t.getLocation(0)),n.setAllLocationsIfNull(1,t.getLocation(1))}},e.prototype.linkAllDirectedEdges=function(){this.getEdges();for(var t=null,e=null,n=this._edgeList.size()-1;n>=0;n--){var i=this._edgeList.get(n),r=i.getSym();null===e&&(e=r),null!==t&&r.setNext(t),t=i}e.setNext(t)},e.prototype.computeDepths=function(){if(1===arguments.length){var t=arguments[0],e=this.findIndex(t),n=t.getDepth(Se.LEFT),i=t.getDepth(Se.RIGHT),r=this.computeDepths(e+1,this._edgeList.size(),n);if(this.computeDepths(0,e,r)!==i)throw new we("depth mismatch at "+t.getCoordinate())}else if(3===arguments.length){for(var o=arguments[0],s=arguments[1],a=arguments[2],u=o;u<s;u++){var l=this._edgeList.get(u);l.setEdgeDepths(Se.RIGHT,a),a=l.getDepth(Se.LEFT)}return a}},e.prototype.mergeSymLabels=function(){for(var t=this.iterator();t.hasNext();){var e=t.next();e.getLabel().merge(e.getSym().getLabel())}},e.prototype.linkMinimalDirectedEdges=function(t){for(var e=null,n=null,i=this._SCANNING_FOR_INCOMING,r=this._resultAreaEdgeList.size()-1;r>=0;r--){var o=this._resultAreaEdgeList.get(r),s=o.getSym();switch(null===e&&o.getEdgeRing()===t&&(e=o),i){case this._SCANNING_FOR_INCOMING:if(s.getEdgeRing()!==t)continue;n=s,i=this._LINKING_TO_OUTGOING;break;case this._LINKING_TO_OUTGOING:if(o.getEdgeRing()!==t)continue;n.setNextMin(o),i=this._SCANNING_FOR_INCOMING}}i===this._LINKING_TO_OUTGOING&&(et.isTrue(null!==e,"found null for first outgoing dirEdge"),et.isTrue(e.getEdgeRing()===t,"unable to link last incoming dirEdge"),n.setNextMin(e))},e.prototype.getOutgoingDegree=function(){if(0===arguments.length){for(var t=0,e=this.iterator();e.hasNext();){e.next().isInResult()&&t++}return t}if(1===arguments.length){for(var n=arguments[0],i=0,r=this.iterator();r.hasNext();){r.next().getEdgeRing()===n&&i++}return i}},e.prototype.getLabel=function(){return this._label},e.prototype.findCoveredLineEdges=function(){for(var t=w.NONE,e=this.iterator();e.hasNext();){var n=e.next(),i=n.getSym();if(!n.isLineEdge()){if(n.isInResult()){t=w.INTERIOR;break}if(i.isInResult()){t=w.EXTERIOR;break}}}if(t===w.NONE)return null;for(var r=t,o=this.iterator();o.hasNext();){var s=o.next(),a=s.getSym();s.isLineEdge()?s.getEdge().setCovered(r===w.INTERIOR):(s.isInResult()&&(r=w.EXTERIOR),a.isInResult()&&(r=w.INTERIOR))}},e.prototype.computeLabelling=function(e){t.prototype.computeLabelling.call(this,e),this._label=new Pe(w.NONE);for(var n=this.iterator();n.hasNext();)for(var i=n.next().getEdge().getLabel(),r=0;r<2;r++){var o=i.getLocation(r);o!==w.INTERIOR&&o!==w.BOUNDARY||this._label.setLocation(r,w.INTERIOR)}},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Xn),kn=function(t){function e(){t.apply(this,arguments)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.createNode=function(t){return new Ge(t,new Yn)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Xe),jn=function t(){this._pts=null,this._orientation=null;var e=arguments[0];this._pts=e,this._orientation=t.orientation(e)};jn.prototype.compareTo=function(t){var e=t;return jn.compareOriented(this._pts,this._orientation,e._pts,e._orientation)},jn.prototype.interfaces_=function(){return[E]},jn.prototype.getClass=function(){return jn},jn.orientation=function(t){return 1===Lt.increasingDirection(t)},jn.compareOriented=function(t,e,n,i){for(var r=e?1:-1,o=i?1:-1,s=e?t.length:-1,a=i?n.length:-1,u=e?0:t.length-1,l=i?0:n.length-1;;){var c=t[u].compareTo(n[l]);if(0!==c)return c;var p=(u+=r)===s,h=(l+=o)===a;if(p&&!h)return-1;if(!p&&h)return 1;if(p&&h)return 0}};var Hn=function(){this._edges=new Nt,this._ocaMap=new p};Hn.prototype.print=function(t){t.print("MULTILINESTRING ( ");for(var e=0;e<this._edges.size();e++){var n=this._edges.get(e);e>0&&t.print(","),t.print("(");for(var i=n.getCoordinates(),r=0;r<i.length;r++)r>0&&t.print(","),t.print(i[r].x+" "+i[r].y);t.println(")")}t.print(")  ")},Hn.prototype.addAll=function(t){for(var e=t.iterator();e.hasNext();)this.add(e.next())},Hn.prototype.findEdgeIndex=function(t){for(var e=0;e<this._edges.size();e++)if(this._edges.get(e).equals(t))return e;return-1},Hn.prototype.iterator=function(){return this._edges.iterator()},Hn.prototype.getEdges=function(){return this._edges},Hn.prototype.get=function(t){return this._edges.get(t)},Hn.prototype.findEqualEdge=function(t){var e=new jn(t.getCoordinates());return this._ocaMap.get(e)},Hn.prototype.add=function(t){this._edges.add(t);var e=new jn(t.getCoordinates());this._ocaMap.put(e,t)},Hn.prototype.interfaces_=function(){return[]},Hn.prototype.getClass=function(){return Hn};var Wn=function(){};Wn.prototype.processIntersections=function(t,e,n,i){},Wn.prototype.isDone=function(){},Wn.prototype.interfaces_=function(){return[]},Wn.prototype.getClass=function(){return Wn};var Kn=function(){this._hasIntersection=!1,this._hasProper=!1,this._hasProperInterior=!1,this._hasInterior=!1,this._properIntersectionPoint=null,this._li=null,this._isSelfIntersection=null,this.numIntersections=0,this.numInteriorIntersections=0,this.numProperIntersections=0,this.numTests=0;var t=arguments[0];this._li=t};Kn.prototype.isTrivialIntersection=function(t,e,n,i){if(t===n&&1===this._li.getIntersectionNum()){if(Kn.isAdjacentSegments(e,i))return!0;if(t.isClosed()){var r=t.size()-1;if(0===e&&i===r||0===i&&e===r)return!0}}return!1},Kn.prototype.getProperIntersectionPoint=function(){return this._properIntersectionPoint},Kn.prototype.hasProperInteriorIntersection=function(){return this._hasProperInterior},Kn.prototype.getLineIntersector=function(){return this._li},Kn.prototype.hasProperIntersection=function(){return this._hasProper},Kn.prototype.processIntersections=function(t,e,n,i){if(t===n&&e===i)return null;this.numTests++;var r=t.getCoordinates()[e],o=t.getCoordinates()[e+1],s=n.getCoordinates()[i],a=n.getCoordinates()[i+1];this._li.computeIntersection(r,o,s,a),this._li.hasIntersection()&&(this.numIntersections++,this._li.isInteriorIntersection()&&(this.numInteriorIntersections++,this._hasInterior=!0),this.isTrivialIntersection(t,e,n,i)||(this._hasIntersection=!0,t.addIntersections(this._li,e,0),n.addIntersections(this._li,i,1),this._li.isProper()&&(this.numProperIntersections++,this._hasProper=!0,this._hasProperInterior=!0)))},Kn.prototype.hasIntersection=function(){return this._hasIntersection},Kn.prototype.isDone=function(){return!1},Kn.prototype.hasInteriorIntersection=function(){return this._hasInterior},Kn.prototype.interfaces_=function(){return[Wn]},Kn.prototype.getClass=function(){return Kn},Kn.isAdjacentSegments=function(t,e){return 1===Math.abs(t-e)};var Jn=function(){this.coord=null,this.segmentIndex=null,this.dist=null;var t=arguments[0],e=arguments[1],n=arguments[2];this.coord=new C(t),this.segmentIndex=e,this.dist=n};Jn.prototype.getSegmentIndex=function(){return this.segmentIndex},Jn.prototype.getCoordinate=function(){return this.coord},Jn.prototype.print=function(t){t.print(this.coord),t.print(" seg # = "+this.segmentIndex),t.println(" dist = "+this.dist)},Jn.prototype.compareTo=function(t){var e=t;return this.compare(e.segmentIndex,e.dist)},Jn.prototype.isEndPoint=function(t){return 0===this.segmentIndex&&0===this.dist||this.segmentIndex===t},Jn.prototype.toString=function(){return this.coord+" seg # = "+this.segmentIndex+" dist = "+this.dist},Jn.prototype.getDistance=function(){return this.dist},Jn.prototype.compare=function(t,e){return this.segmentIndex<t?-1:this.segmentIndex>t?1:this.dist<e?-1:this.dist>e?1:0},Jn.prototype.interfaces_=function(){return[E]},Jn.prototype.getClass=function(){return Jn};var Qn=function(){this._nodeMap=new p,this.edge=null;var t=arguments[0];this.edge=t};Qn.prototype.print=function(t){t.println("Intersections:");for(var e=this.iterator();e.hasNext();){e.next().print(t)}},Qn.prototype.iterator=function(){return this._nodeMap.values().iterator()},Qn.prototype.addSplitEdges=function(t){this.addEndpoints();for(var e=this.iterator(),n=e.next();e.hasNext();){var i=e.next(),r=this.createSplitEdge(n,i);t.add(r),n=i}},Qn.prototype.addEndpoints=function(){var t=this.edge.pts.length-1;this.add(this.edge.pts[0],0,0),this.add(this.edge.pts[t],t,0)},Qn.prototype.createSplitEdge=function(t,e){var n=e.segmentIndex-t.segmentIndex+2,i=this.edge.pts[e.segmentIndex],r=e.dist>0||!e.coord.equals2D(i);r||n--;var o=new Array(n).fill(null),s=0;o[s++]=new C(t.coord);for(var a=t.segmentIndex+1;a<=e.segmentIndex;a++)o[s++]=this.edge.pts[a];return r&&(o[s]=e.coord),new ni(o,new Pe(this.edge._label))},Qn.prototype.add=function(t,e,n){var i=new Jn(t,e,n),r=this._nodeMap.get(i);return null!==r?r:(this._nodeMap.put(i,i),i)},Qn.prototype.isIntersection=function(t){for(var e=this.iterator();e.hasNext();){if(e.next().coord.equals(t))return!0}return!1},Qn.prototype.interfaces_=function(){return[]},Qn.prototype.getClass=function(){return Qn};var Zn=function(){};Zn.prototype.getChainStartIndices=function(t){var e=0,n=new Nt;n.add(new M(e));do{var i=this.findChainEnd(t,e);n.add(new M(i)),e=i}while(e<t.length-1);return Zn.toIntArray(n)},Zn.prototype.findChainEnd=function(t,e){for(var n=Be.quadrant(t[e],t[e+1]),i=e+1;i<t.length;){if(Be.quadrant(t[i-1],t[i])!==n)break;i++}return i-1},Zn.prototype.interfaces_=function(){return[]},Zn.prototype.getClass=function(){return Zn},Zn.toIntArray=function(t){for(var e=new Array(t.size()).fill(null),n=0;n<e.length;n++)e[n]=t.get(n).intValue();return e};var $n=function(){this.e=null,this.pts=null,this.startIndex=null,this.env1=new j,this.env2=new j;var t=arguments[0];this.e=t,this.pts=t.getCoordinates();var e=new Zn;this.startIndex=e.getChainStartIndices(this.pts)};$n.prototype.getCoordinates=function(){return this.pts},$n.prototype.getMaxX=function(t){var e=this.pts[this.startIndex[t]].x,n=this.pts[this.startIndex[t+1]].x;return e>n?e:n},$n.prototype.getMinX=function(t){var e=this.pts[this.startIndex[t]].x,n=this.pts[this.startIndex[t+1]].x;return e<n?e:n},$n.prototype.computeIntersectsForChain=function(){if(4===arguments.length){var t=arguments[0],e=arguments[1],n=arguments[2],i=arguments[3];this.computeIntersectsForChain(this.startIndex[t],this.startIndex[t+1],e,e.startIndex[n],e.startIndex[n+1],i)}else if(6===arguments.length){var r=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3],u=arguments[4],l=arguments[5],c=this.pts[r],p=this.pts[o],h=s.pts[a],f=s.pts[u];if(o-r==1&&u-a==1)return l.addIntersections(this.e,r,s.e,a),null;if(this.env1.init(c,p),this.env2.init(h,f),!this.env1.intersects(this.env2))return null;var g=Math.trunc((r+o)/2),d=Math.trunc((a+u)/2);r<g&&(a<d&&this.computeIntersectsForChain(r,g,s,a,d,l),d<u&&this.computeIntersectsForChain(r,g,s,d,u,l)),g<o&&(a<d&&this.computeIntersectsForChain(g,o,s,a,d,l),d<u&&this.computeIntersectsForChain(g,o,s,d,u,l))}},$n.prototype.getStartIndexes=function(){return this.startIndex},$n.prototype.computeIntersects=function(t,e){for(var n=0;n<this.startIndex.length-1;n++)for(var i=0;i<t.startIndex.length-1;i++)this.computeIntersectsForChain(n,t,i,e)},$n.prototype.interfaces_=function(){return[]},$n.prototype.getClass=function(){return $n};var ti=function t(){this._depth=Array(2).fill().map(function(){return Array(3)});for(var e=0;e<2;e++)for(var n=0;n<3;n++)this._depth[e][n]=t.NULL_VALUE},ei={NULL_VALUE:{configurable:!0}};ti.prototype.getDepth=function(t,e){return this._depth[t][e]},ti.prototype.setDepth=function(t,e,n){this._depth[t][e]=n},ti.prototype.isNull=function(){if(0===arguments.length){for(var t=0;t<2;t++)for(var e=0;e<3;e++)if(this._depth[t][e]!==ti.NULL_VALUE)return!1;return!0}if(1===arguments.length){var n=arguments[0];return this._depth[n][1]===ti.NULL_VALUE}if(2===arguments.length){var i=arguments[0],r=arguments[1];return this._depth[i][r]===ti.NULL_VALUE}},ti.prototype.normalize=function(){for(var t=0;t<2;t++)if(!this.isNull(t)){var e=this._depth[t][1];this._depth[t][2]<e&&(e=this._depth[t][2]),e<0&&(e=0);for(var n=1;n<3;n++){var i=0;this._depth[t][n]>e&&(i=1),this._depth[t][n]=i}}},ti.prototype.getDelta=function(t){return this._depth[t][Se.RIGHT]-this._depth[t][Se.LEFT]},ti.prototype.getLocation=function(t,e){return this._depth[t][e]<=0?w.EXTERIOR:w.INTERIOR},ti.prototype.toString=function(){return"A: "+this._depth[0][1]+","+this._depth[0][2]+" B: "+this._depth[1][1]+","+this._depth[1][2]},ti.prototype.add=function(){if(1===arguments.length)for(var t=arguments[0],e=0;e<2;e++)for(var n=1;n<3;n++){var i=t.getLocation(e,n);i!==w.EXTERIOR&&i!==w.INTERIOR||(this.isNull(e,n)?this._depth[e][n]=ti.depthAtLocation(i):this._depth[e][n]+=ti.depthAtLocation(i))}else if(3===arguments.length){var r=arguments[0],o=arguments[1];arguments[2]===w.INTERIOR&&this._depth[r][o]++}},ti.prototype.interfaces_=function(){return[]},ti.prototype.getClass=function(){return ti},ti.depthAtLocation=function(t){return t===w.EXTERIOR?0:t===w.INTERIOR?1:ti.NULL_VALUE},ei.NULL_VALUE.get=function(){return-1},Object.defineProperties(ti,ei);var ni=function(t){function e(){if(t.call(this),this.pts=null,this._env=null,this.eiList=new Qn(this),this._name=null,this._mce=null,this._isIsolated=!0,this._depth=new ti,this._depthDelta=0,1===arguments.length){var n=arguments[0];e.call(this,n,null)}else if(2===arguments.length){var i=arguments[0],r=arguments[1];this.pts=i,this._label=r}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.getDepth=function(){return this._depth},e.prototype.getCollapsedEdge=function(){var t=new Array(2).fill(null);t[0]=this.pts[0],t[1]=this.pts[1];return new e(t,Pe.toLineLabel(this._label))},e.prototype.isIsolated=function(){return this._isIsolated},e.prototype.getCoordinates=function(){return this.pts},e.prototype.setIsolated=function(t){this._isIsolated=t},e.prototype.setName=function(t){this._name=t},e.prototype.equals=function(t){if(!(t instanceof e))return!1;var n=t;if(this.pts.length!==n.pts.length)return!1;for(var i=!0,r=!0,o=this.pts.length,s=0;s<this.pts.length;s++)if(this.pts[s].equals2D(n.pts[s])||(i=!1),this.pts[s].equals2D(n.pts[--o])||(r=!1),!i&&!r)return!1;return!0},e.prototype.getCoordinate=function(){if(0===arguments.length)return this.pts.length>0?this.pts[0]:null;if(1===arguments.length){var t=arguments[0];return this.pts[t]}},e.prototype.print=function(t){t.print("edge "+this._name+": "),t.print("LINESTRING (");for(var e=0;e<this.pts.length;e++)e>0&&t.print(","),t.print(this.pts[e].x+" "+this.pts[e].y);t.print(")  "+this._label+" "+this._depthDelta)},e.prototype.computeIM=function(t){e.updateIM(this._label,t)},e.prototype.isCollapsed=function(){return!!this._label.isArea()&&(3===this.pts.length&&!!this.pts[0].equals(this.pts[2]))},e.prototype.isClosed=function(){return this.pts[0].equals(this.pts[this.pts.length-1])},e.prototype.getMaximumSegmentIndex=function(){return this.pts.length-1},e.prototype.getDepthDelta=function(){return this._depthDelta},e.prototype.getNumPoints=function(){return this.pts.length},e.prototype.printReverse=function(t){t.print("edge "+this._name+": ");for(var e=this.pts.length-1;e>=0;e--)t.print(this.pts[e]+" ");t.println("")},e.prototype.getMonotoneChainEdge=function(){return null===this._mce&&(this._mce=new $n(this)),this._mce},e.prototype.getEnvelope=function(){if(null===this._env){this._env=new j;for(var t=0;t<this.pts.length;t++)this._env.expandToInclude(this.pts[t])}return this._env},e.prototype.addIntersection=function(t,e,n,i){var r=new C(t.getIntersection(i)),o=e,s=t.getEdgeDistance(n,i),a=o+1;if(a<this.pts.length){var u=this.pts[a];r.equals2D(u)&&(o=a,s=0)}this.eiList.add(r,o,s)},e.prototype.toString=function(){var t=new D;t.append("edge "+this._name+": "),t.append("LINESTRING (");for(var e=0;e<this.pts.length;e++)e>0&&t.append(","),t.append(this.pts[e].x+" "+this.pts[e].y);return t.append(")  "+this._label+" "+this._depthDelta),t.toString()},e.prototype.isPointwiseEqual=function(t){if(this.pts.length!==t.pts.length)return!1;for(var e=0;e<this.pts.length;e++)if(!this.pts[e].equals2D(t.pts[e]))return!1;return!0},e.prototype.setDepthDelta=function(t){this._depthDelta=t},e.prototype.getEdgeIntersectionList=function(){return this.eiList},e.prototype.addIntersections=function(t,e,n){for(var i=0;i<t.getIntersectionNum();i++)this.addIntersection(t,e,n,i)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e.updateIM=function(){if(2!==arguments.length)return t.prototype.updateIM.apply(this,arguments);var e=arguments[0],n=arguments[1];n.setAtLeastIfValid(e.getLocation(0,Se.ON),e.getLocation(1,Se.ON),1),e.isArea()&&(n.setAtLeastIfValid(e.getLocation(0,Se.LEFT),e.getLocation(1,Se.LEFT),2),n.setAtLeastIfValid(e.getLocation(0,Se.RIGHT),e.getLocation(1,Se.RIGHT),2))},e}(Fe),ii=function(t){this._workingPrecisionModel=null,this._workingNoder=null,this._geomFact=null,this._graph=null,this._edgeList=new Hn,this._bufParams=t||null};ii.prototype.setWorkingPrecisionModel=function(t){this._workingPrecisionModel=t},ii.prototype.insertUniqueEdge=function(t){var e=this._edgeList.findEqualEdge(t);if(null!==e){var n=e.getLabel(),i=t.getLabel();e.isPointwiseEqual(t)||(i=new Pe(t.getLabel())).flip(),n.merge(i);var r=ii.depthDelta(i),o=e.getDepthDelta()+r;e.setDepthDelta(o)}else this._edgeList.add(t),t.setDepthDelta(ii.depthDelta(t.getLabel()))},ii.prototype.buildSubgraphs=function(t,e){for(var n=new Nt,i=t.iterator();i.hasNext();){var r=i.next(),o=r.getRightmostCoordinate(),s=new An(n).getDepth(o);r.computeDepth(s),r.findResultEdges(),n.add(r),e.add(r.getDirectedEdges(),r.getNodes())}},ii.prototype.createSubgraphs=function(t){for(var e=new Nt,n=t.getNodes().iterator();n.hasNext();){var i=n.next();if(!i.isVisited()){var r=new Te;r.create(i),e.add(r)}}return $e.sort(e,$e.reverseOrder()),e},ii.prototype.createEmptyResultGeometry=function(){return this._geomFact.createPolygon()},ii.prototype.getNoder=function(t){if(null!==this._workingNoder)return this._workingNoder;var e=new xn,n=new rt;return n.setPrecisionModel(t),e.setSegmentIntersector(new Kn(n)),e},ii.prototype.buffer=function(t,e){var n=this._workingPrecisionModel;null===n&&(n=t.getPrecisionModel()),this._geomFact=t.getFactory();var i=new Mn(n,this._bufParams),r=new Bn(t,e,i).getCurves();if(r.size()<=0)return this.createEmptyResultGeometry();this.computeNodedEdges(r,n),this._graph=new Ye(new kn),this._graph.addEdges(this._edgeList.getEdges());var o=this.createSubgraphs(this._graph),s=new ke(this._geomFact);this.buildSubgraphs(o,s);var a=s.getPolygons();if(a.size()<=0)return this.createEmptyResultGeometry();return this._geomFact.buildGeometry(a)},ii.prototype.computeNodedEdges=function(t,e){var n=this.getNoder(e);n.computeNodes(t);for(var i=n.getNodedSubstrings().iterator();i.hasNext();){var r=i.next(),o=r.getCoordinates();if(2!==o.length||!o[0].equals2D(o[1])){var s=r.getData(),a=new ni(r.getCoordinates(),new Pe(s));this.insertUniqueEdge(a)}}},ii.prototype.setNoder=function(t){this._workingNoder=t},ii.prototype.interfaces_=function(){return[]},ii.prototype.getClass=function(){return ii},ii.depthDelta=function(t){var e=t.getLocation(0,Se.LEFT),n=t.getLocation(0,Se.RIGHT);return e===w.INTERIOR&&n===w.EXTERIOR?1:e===w.EXTERIOR&&n===w.INTERIOR?-1:0},ii.convertSegStrings=function(t){for(var e=new _e,n=new Nt;t.hasNext();){var i=t.next(),r=e.createLineString(i.getCoordinates());n.add(r)}return e.buildGeometry(n)};var ri=function(){if(this._noder=null,this._scaleFactor=null,this._offsetX=null,this._offsetY=null,this._isScaled=!1,2===arguments.length){var t=arguments[0],e=arguments[1];this._noder=t,this._scaleFactor=e,this._offsetX=0,this._offsetY=0,this._isScaled=!this.isIntegerPrecision()}else if(4===arguments.length){var n=arguments[0],i=arguments[1],r=arguments[2],o=arguments[3];this._noder=n,this._scaleFactor=i,this._offsetX=r,this._offsetY=o,this._isScaled=!this.isIntegerPrecision()}};ri.prototype.rescale=function(){if(T(arguments[0],It))for(var t=arguments[0].iterator();t.hasNext();){var e=t.next();this.rescale(e.getCoordinates())}else if(arguments[0]instanceof Array){for(var n=arguments[0],i=0;i<n.length;i++)n[i].x=n[i].x/this._scaleFactor+this._offsetX,n[i].y=n[i].y/this._scaleFactor+this._offsetY;2===n.length&&n[0].equals2D(n[1])&&Y.out.println(n)}},ri.prototype.scale=function(){if(T(arguments[0],It)){for(var t=arguments[0],e=new Nt,n=t.iterator();n.hasNext();){var i=n.next();e.add(new gn(this.scale(i.getCoordinates()),i.getData()))}return e}if(arguments[0]instanceof Array){for(var r=arguments[0],o=new Array(r.length).fill(null),s=0;s<r.length;s++)o[s]=new C(Math.round((r[s].x-this._offsetX)*this._scaleFactor),Math.round((r[s].y-this._offsetY)*this._scaleFactor),r[s].z);return Lt.removeRepeatedPoints(o)}},ri.prototype.isIntegerPrecision=function(){return 1===this._scaleFactor},ri.prototype.getNodedSubstrings=function(){var t=this._noder.getNodedSubstrings();return this._isScaled&&this.rescale(t),t},ri.prototype.computeNodes=function(t){var e=t;this._isScaled&&(e=this.scale(t)),this._noder.computeNodes(e)},ri.prototype.interfaces_=function(){return[In]},ri.prototype.getClass=function(){return ri};var oi=function(){this._li=new rt,this._segStrings=null;var t=arguments[0];this._segStrings=t},si={fact:{configurable:!0}};oi.prototype.checkEndPtVertexIntersections=function(){if(0===arguments.length)for(var t=this._segStrings.iterator();t.hasNext();){var e=t.next().getCoordinates();this.checkEndPtVertexIntersections(e[0],this._segStrings),this.checkEndPtVertexIntersections(e[e.length-1],this._segStrings)}else if(2===arguments.length)for(var n=arguments[0],i=arguments[1].iterator();i.hasNext();)for(var r=i.next().getCoordinates(),o=1;o<r.length-1;o++)if(r[o].equals(n))throw new $("found endpt/interior pt intersection at index "+o+" :pt "+n)},oi.prototype.checkInteriorIntersections=function(){if(0===arguments.length)for(var t=this._segStrings.iterator();t.hasNext();)for(var e=t.next(),n=this._segStrings.iterator();n.hasNext();){var i=n.next();this.checkInteriorIntersections(e,i)}else if(2===arguments.length)for(var r=arguments[0],o=arguments[1],s=r.getCoordinates(),a=o.getCoordinates(),u=0;u<s.length-1;u++)for(var l=0;l<a.length-1;l++)this.checkInteriorIntersections(r,u,o,l);else if(4===arguments.length){var c=arguments[0],p=arguments[1],h=arguments[2],f=arguments[3];if(c===h&&p===f)return null;var g=c.getCoordinates()[p],d=c.getCoordinates()[p+1],y=h.getCoordinates()[f],_=h.getCoordinates()[f+1];if(this._li.computeIntersection(g,d,y,_),this._li.hasIntersection()&&(this._li.isProper()||this.hasInteriorIntersection(this._li,g,d)||this.hasInteriorIntersection(this._li,y,_)))throw new $("found non-noded intersection at "+g+"-"+d+" and "+y+"-"+_)}},oi.prototype.checkValid=function(){this.checkEndPtVertexIntersections(),this.checkInteriorIntersections(),this.checkCollapses()},oi.prototype.checkCollapses=function(){if(0===arguments.length)for(var t=this._segStrings.iterator();t.hasNext();){var e=t.next();this.checkCollapses(e)}else if(1===arguments.length)for(var n=arguments[0].getCoordinates(),i=0;i<n.length-2;i++)this.checkCollapse(n[i],n[i+1],n[i+2])},oi.prototype.hasInteriorIntersection=function(t,e,n){for(var i=0;i<t.getIntersectionNum();i++){var r=t.getIntersection(i);if(!r.equals(e)&&!r.equals(n))return!0}return!1},oi.prototype.checkCollapse=function(t,e,n){if(t.equals(n))throw new $("found non-noded collapse at "+oi.fact.createLineString([t,e,n]))},oi.prototype.interfaces_=function(){return[]},oi.prototype.getClass=function(){return oi},si.fact.get=function(){return new _e},Object.defineProperties(oi,si);var ai=function(){this._li=null,this._pt=null,this._originalPt=null,this._ptScaled=null,this._p0Scaled=null,this._p1Scaled=null,this._scaleFactor=null,this._minx=null,this._maxx=null,this._miny=null,this._maxy=null,this._corner=new Array(4).fill(null),this._safeEnv=null;var t=arguments[0],e=arguments[1],n=arguments[2];if(this._originalPt=t,this._pt=t,this._scaleFactor=e,this._li=n,e<=0)throw new m("Scale factor must be non-zero");1!==e&&(this._pt=new C(this.scale(t.x),this.scale(t.y)),this._p0Scaled=new C,this._p1Scaled=new C),this.initCorners(this._pt)},ui={SAFE_ENV_EXPANSION_FACTOR:{configurable:!0}};ai.prototype.intersectsScaled=function(t,e){var n=Math.min(t.x,e.x),i=Math.max(t.x,e.x),r=Math.min(t.y,e.y),o=Math.max(t.y,e.y),s=this._maxx<n||this._minx>i||this._maxy<r||this._miny>o;if(s)return!1;var a=this.intersectsToleranceSquare(t,e);return et.isTrue(!(s&&a),"Found bad envelope test"),a},ai.prototype.initCorners=function(t){this._minx=t.x-.5,this._maxx=t.x+.5,this._miny=t.y-.5,this._maxy=t.y+.5,this._corner[0]=new C(this._maxx,this._maxy),this._corner[1]=new C(this._minx,this._maxy),this._corner[2]=new C(this._minx,this._miny),this._corner[3]=new C(this._maxx,this._miny)},ai.prototype.intersects=function(t,e){return 1===this._scaleFactor?this.intersectsScaled(t,e):(this.copyScaled(t,this._p0Scaled),this.copyScaled(e,this._p1Scaled),this.intersectsScaled(this._p0Scaled,this._p1Scaled))},ai.prototype.scale=function(t){return Math.round(t*this._scaleFactor)},ai.prototype.getCoordinate=function(){return this._originalPt},ai.prototype.copyScaled=function(t,e){e.x=this.scale(t.x),e.y=this.scale(t.y)},ai.prototype.getSafeEnvelope=function(){if(null===this._safeEnv){var t=ai.SAFE_ENV_EXPANSION_FACTOR/this._scaleFactor;this._safeEnv=new j(this._originalPt.x-t,this._originalPt.x+t,this._originalPt.y-t,this._originalPt.y+t)}return this._safeEnv},ai.prototype.intersectsPixelClosure=function(t,e){return this._li.computeIntersection(t,e,this._corner[0],this._corner[1]),!!this._li.hasIntersection()||(this._li.computeIntersection(t,e,this._corner[1],this._corner[2]),!!this._li.hasIntersection()||(this._li.computeIntersection(t,e,this._corner[2],this._corner[3]),!!this._li.hasIntersection()||(this._li.computeIntersection(t,e,this._corner[3],this._corner[0]),!!this._li.hasIntersection())))},ai.prototype.intersectsToleranceSquare=function(t,e){var n=!1,i=!1;return this._li.computeIntersection(t,e,this._corner[0],this._corner[1]),!!this._li.isProper()||(this._li.computeIntersection(t,e,this._corner[1],this._corner[2]),!!this._li.isProper()||(this._li.hasIntersection()&&(n=!0),this._li.computeIntersection(t,e,this._corner[2],this._corner[3]),!!this._li.isProper()||(this._li.hasIntersection()&&(i=!0),this._li.computeIntersection(t,e,this._corner[3],this._corner[0]),!!this._li.isProper()||(!(!n||!i)||(!!t.equals(this._pt)||!!e.equals(this._pt))))))},ai.prototype.addSnappedNode=function(t,e){var n=t.getCoordinate(e),i=t.getCoordinate(e+1);return!!this.intersects(n,i)&&(t.addIntersection(this.getCoordinate(),e),!0)},ai.prototype.interfaces_=function(){return[]},ai.prototype.getClass=function(){return ai},ui.SAFE_ENV_EXPANSION_FACTOR.get=function(){return.75},Object.defineProperties(ai,ui);var li=function(){this.tempEnv1=new j,this.selectedSegment=new dn};li.prototype.select=function(){if(1===arguments.length);else if(2===arguments.length){var t=arguments[0],e=arguments[1];t.getLineSegment(e,this.selectedSegment),this.select(this.selectedSegment)}},li.prototype.interfaces_=function(){return[]},li.prototype.getClass=function(){return li};var ci=function(){this._index=null;var t=arguments[0];this._index=t},pi={HotPixelSnapAction:{configurable:!0}};ci.prototype.snap=function(){if(1===arguments.length){var t=arguments[0];return this.snap(t,null,-1)}if(3===arguments.length){var e=arguments[0],n=arguments[1],i=arguments[2],r=e.getSafeEnvelope(),o=new hi(e,n,i);return this._index.query(r,{interfaces_:function(){return[Ke]},visitItem:function(t){t.select(r,o)}}),o.isNodeAdded()}},ci.prototype.interfaces_=function(){return[]},ci.prototype.getClass=function(){return ci},pi.HotPixelSnapAction.get=function(){return hi},Object.defineProperties(ci,pi);var hi=function(t){function e(){t.call(this),this._hotPixel=null,this._parentEdge=null,this._hotPixelVertexIndex=null,this._isNodeAdded=!1;var e=arguments[0],n=arguments[1],i=arguments[2];this._hotPixel=e,this._parentEdge=n,this._hotPixelVertexIndex=i}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.isNodeAdded=function(){return this._isNodeAdded},e.prototype.select=function(){if(2!==arguments.length)return t.prototype.select.apply(this,arguments);var e=arguments[0],n=arguments[1],i=e.getContext();if(null!==this._parentEdge&&i===this._parentEdge&&n===this._hotPixelVertexIndex)return null;this._isNodeAdded=this._hotPixel.addSnappedNode(i,n)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(li),fi=function(){this._li=null,this._interiorIntersections=null;var t=arguments[0];this._li=t,this._interiorIntersections=new Nt};fi.prototype.processIntersections=function(t,e,n,i){if(t===n&&e===i)return null;var r=t.getCoordinates()[e],o=t.getCoordinates()[e+1],s=n.getCoordinates()[i],a=n.getCoordinates()[i+1];if(this._li.computeIntersection(r,o,s,a),this._li.hasIntersection()&&this._li.isInteriorIntersection()){for(var u=0;u<this._li.getIntersectionNum();u++)this._interiorIntersections.add(this._li.getIntersection(u));t.addIntersections(this._li,e,0),n.addIntersections(this._li,i,1)}},fi.prototype.isDone=function(){return!1},fi.prototype.getInteriorIntersections=function(){return this._interiorIntersections},fi.prototype.interfaces_=function(){return[Wn]},fi.prototype.getClass=function(){return fi};var gi=function(){this._pm=null,this._li=null,this._scaleFactor=null,this._noder=null,this._pointSnapper=null,this._nodedSegStrings=null;var t=arguments[0];this._pm=t,this._li=new rt,this._li.setPrecisionModel(t),this._scaleFactor=t.getScale()};gi.prototype.checkCorrectness=function(t){var e=gn.getNodedSubstrings(t),n=new oi(e);try{n.checkValid()}catch(t){if(!(t instanceof z))throw t;t.printStackTrace()}},gi.prototype.getNodedSubstrings=function(){return gn.getNodedSubstrings(this._nodedSegStrings)},gi.prototype.snapRound=function(t,e){var n=this.findInteriorIntersections(t,e);this.computeIntersectionSnaps(n),this.computeVertexSnaps(t)},gi.prototype.findInteriorIntersections=function(t,e){var n=new fi(e);return this._noder.setSegmentIntersector(n),this._noder.computeNodes(t),n.getInteriorIntersections()},gi.prototype.computeVertexSnaps=function(){if(T(arguments[0],It))for(var t=arguments[0].iterator();t.hasNext();){var e=t.next();this.computeVertexSnaps(e)}else if(arguments[0]instanceof gn)for(var n=arguments[0],i=n.getCoordinates(),r=0;r<i.length;r++){var o=new ai(i[r],this._scaleFactor,this._li);this._pointSnapper.snap(o,n,r)&&n.addIntersection(i[r],r)}},gi.prototype.computeNodes=function(t){this._nodedSegStrings=t,this._noder=new xn,this._pointSnapper=new ci(this._noder.getIndex()),this.snapRound(t,this._li)},gi.prototype.computeIntersectionSnaps=function(t){for(var e=t.iterator();e.hasNext();){var n=e.next(),i=new ai(n,this._scaleFactor,this._li);this._pointSnapper.snap(i)}},gi.prototype.interfaces_=function(){return[In]},gi.prototype.getClass=function(){return gi};var di=function(){if(this._argGeom=null,this._distance=null,this._bufParams=new Cn,this._resultGeometry=null,this._saveException=null,1===arguments.length){var t=arguments[0];this._argGeom=t}else if(2===arguments.length){var e=arguments[0],n=arguments[1];this._argGeom=e,this._bufParams=n}},yi={CAP_ROUND:{configurable:!0},CAP_BUTT:{configurable:!0},CAP_FLAT:{configurable:!0},CAP_SQUARE:{configurable:!0},MAX_PRECISION_DIGITS:{configurable:!0}};di.prototype.bufferFixedPrecision=function(t){var e=new ri(new gi(new fe(1)),t.getScale()),n=new ii(this._bufParams);n.setWorkingPrecisionModel(t),n.setNoder(e),this._resultGeometry=n.buffer(this._argGeom,this._distance)},di.prototype.bufferReducedPrecision=function(){var t=this;if(0===arguments.length){for(var e=di.MAX_PRECISION_DIGITS;e>=0;e--){try{t.bufferReducedPrecision(e)}catch(e){if(!(e instanceof we))throw e;t._saveException=e}if(null!==t._resultGeometry)return null}throw this._saveException}if(1===arguments.length){var n=arguments[0],i=di.precisionScaleFactor(this._argGeom,this._distance,n),r=new fe(i);this.bufferFixedPrecision(r)}},di.prototype.computeGeometry=function(){if(this.bufferOriginalPrecision(),null!==this._resultGeometry)return null;var t=this._argGeom.getFactory().getPrecisionModel();t.getType()===fe.FIXED?this.bufferFixedPrecision(t):this.bufferReducedPrecision()},di.prototype.setQuadrantSegments=function(t){this._bufParams.setQuadrantSegments(t)},di.prototype.bufferOriginalPrecision=function(){try{var t=new ii(this._bufParams);this._resultGeometry=t.buffer(this._argGeom,this._distance)}catch(t){if(!(t instanceof $))throw t;this._saveException=t}},di.prototype.getResultGeometry=function(t){return this._distance=t,this.computeGeometry(),this._resultGeometry},di.prototype.setEndCapStyle=function(t){this._bufParams.setEndCapStyle(t)},di.prototype.interfaces_=function(){return[]},di.prototype.getClass=function(){return di},di.bufferOp=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];return new di(t).getResultGeometry(e)}if(3===arguments.length){if(Number.isInteger(arguments[2])&&arguments[0]instanceof ct&&"number"==typeof arguments[1]){var n=arguments[0],i=arguments[1],r=arguments[2],o=new di(n);o.setQuadrantSegments(r);return o.getResultGeometry(i)}if(arguments[2]instanceof Cn&&arguments[0]instanceof ct&&"number"==typeof arguments[1]){var s=arguments[0],a=arguments[1],u=arguments[2];return new di(s,u).getResultGeometry(a)}}else if(4===arguments.length){var l=arguments[0],c=arguments[1],p=arguments[2],h=arguments[3],f=new di(l);f.setQuadrantSegments(p),f.setEndCapStyle(h);return f.getResultGeometry(c)}},di.precisionScaleFactor=function(t,e,n){var i=t.getEnvelopeInternal(),r=R.max(Math.abs(i.getMaxX()),Math.abs(i.getMaxY()),Math.abs(i.getMinX()),Math.abs(i.getMinY()))+2*(e>0?e:0),o=n-Math.trunc(Math.log(r)/Math.log(10)+1);return Math.pow(10,o)},yi.CAP_ROUND.get=function(){return Cn.CAP_ROUND},yi.CAP_BUTT.get=function(){return Cn.CAP_FLAT},yi.CAP_FLAT.get=function(){return Cn.CAP_FLAT},yi.CAP_SQUARE.get=function(){return Cn.CAP_SQUARE},yi.MAX_PRECISION_DIGITS.get=function(){return 12},Object.defineProperties(di,yi);var _i=function(){this._pt=[new C,new C],this._distance=v.NaN,this._isNull=!0};_i.prototype.getCoordinates=function(){return this._pt},_i.prototype.getCoordinate=function(t){return this._pt[t]},_i.prototype.setMinimum=function(){if(1===arguments.length){var t=arguments[0];this.setMinimum(t._pt[0],t._pt[1])}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(this._isNull)return this.initialize(e,n),null;var i=e.distance(n);i<this._distance&&this.initialize(e,n,i)}},_i.prototype.initialize=function(){if(0===arguments.length)this._isNull=!0;else if(2===arguments.length){var t=arguments[0],e=arguments[1];this._pt[0].setCoordinate(t),this._pt[1].setCoordinate(e),this._distance=t.distance(e),this._isNull=!1}else if(3===arguments.length){var n=arguments[0],i=arguments[1],r=arguments[2];this._pt[0].setCoordinate(n),this._pt[1].setCoordinate(i),this._distance=r,this._isNull=!1}},_i.prototype.getDistance=function(){return this._distance},_i.prototype.setMaximum=function(){if(1===arguments.length){var t=arguments[0];this.setMaximum(t._pt[0],t._pt[1])}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(this._isNull)return this.initialize(e,n),null;var i=e.distance(n);i>this._distance&&this.initialize(e,n,i)}},_i.prototype.interfaces_=function(){return[]},_i.prototype.getClass=function(){return _i};var mi=function(){};mi.prototype.interfaces_=function(){return[]},mi.prototype.getClass=function(){return mi},mi.computeDistance=function(){if(arguments[2]instanceof _i&&arguments[0]instanceof Kt&&arguments[1]instanceof C)for(var t=arguments[0],e=arguments[1],n=arguments[2],i=t.getCoordinates(),r=new dn,o=0;o<i.length-1;o++){r.setCoordinates(i[o],i[o+1]);var s=r.closestPoint(e);n.setMinimum(s,e)}else if(arguments[2]instanceof _i&&arguments[0]instanceof $t&&arguments[1]instanceof C){var a=arguments[0],u=arguments[1],l=arguments[2];mi.computeDistance(a.getExteriorRing(),u,l);for(var c=0;c<a.getNumInteriorRing();c++)mi.computeDistance(a.getInteriorRingN(c),u,l)}else if(arguments[2]instanceof _i&&arguments[0]instanceof ct&&arguments[1]instanceof C){var p=arguments[0],h=arguments[1],f=arguments[2];if(p instanceof Kt)mi.computeDistance(p,h,f);else if(p instanceof $t)mi.computeDistance(p,h,f);else if(p instanceof zt)for(var g=p,d=0;d<g.getNumGeometries();d++){var y=g.getGeometryN(d);mi.computeDistance(y,h,f)}else f.setMinimum(p.getCoordinate(),h)}else if(arguments[2]instanceof _i&&arguments[0]instanceof dn&&arguments[1]instanceof C){var _=arguments[0],m=arguments[1],v=arguments[2],I=_.closestPoint(m);v.setMinimum(I,m)}};var vi=function(t){this._maxPtDist=new _i,this._inputGeom=t||null},Ii={MaxPointDistanceFilter:{configurable:!0},MaxMidpointDistanceFilter:{configurable:!0}};vi.prototype.computeMaxMidpointDistance=function(t){var e=new xi(this._inputGeom);t.apply(e),this._maxPtDist.setMaximum(e.getMaxPointDistance())},vi.prototype.computeMaxVertexDistance=function(t){var e=new Ei(this._inputGeom);t.apply(e),this._maxPtDist.setMaximum(e.getMaxPointDistance())},vi.prototype.findDistance=function(t){return this.computeMaxVertexDistance(t),this.computeMaxMidpointDistance(t),this._maxPtDist.getDistance()},vi.prototype.getDistancePoints=function(){return this._maxPtDist},vi.prototype.interfaces_=function(){return[]},vi.prototype.getClass=function(){return vi},Ii.MaxPointDistanceFilter.get=function(){return Ei},Ii.MaxMidpointDistanceFilter.get=function(){return xi},Object.defineProperties(vi,Ii);var Ei=function(t){this._maxPtDist=new _i,this._minPtDist=new _i,this._geom=t||null};Ei.prototype.filter=function(t){this._minPtDist.initialize(),mi.computeDistance(this._geom,t,this._minPtDist),this._maxPtDist.setMaximum(this._minPtDist)},Ei.prototype.getMaxPointDistance=function(){return this._maxPtDist},Ei.prototype.interfaces_=function(){return[ft]},Ei.prototype.getClass=function(){return Ei};var xi=function(t){this._maxPtDist=new _i,this._minPtDist=new _i,this._geom=t||null};xi.prototype.filter=function(t,e){if(0===e)return null;var n=t.getCoordinate(e-1),i=t.getCoordinate(e),r=new C((n.x+i.x)/2,(n.y+i.y)/2);this._minPtDist.initialize(),mi.computeDistance(this._geom,r,this._minPtDist),this._maxPtDist.setMaximum(this._minPtDist)},xi.prototype.isDone=function(){return!1},xi.prototype.isGeometryChanged=function(){return!1},xi.prototype.getMaxPointDistance=function(){return this._maxPtDist},xi.prototype.interfaces_=function(){return[Ut]},xi.prototype.getClass=function(){return xi};var Ni=function(t){this._comps=t||null};Ni.prototype.filter=function(t){t instanceof $t&&this._comps.add(t)},Ni.prototype.interfaces_=function(){return[Vt]},Ni.prototype.getClass=function(){return Ni},Ni.getPolygons=function(){if(1===arguments.length){var t=arguments[0];return Ni.getPolygons(t,new Nt)}if(2===arguments.length){var e=arguments[0],n=arguments[1];return e instanceof $t?n.add(e):e instanceof zt&&e.apply(new Ni(n)),n}};var Ci=function(){if(this._lines=null,this._isForcedToLineString=!1,1===arguments.length){var t=arguments[0];this._lines=t}else if(2===arguments.length){var e=arguments[0],n=arguments[1];this._lines=e,this._isForcedToLineString=n}};Ci.prototype.filter=function(t){if(this._isForcedToLineString&&t instanceof ee){var e=t.getFactory().createLineString(t.getCoordinateSequence());return this._lines.add(e),null}t instanceof Kt&&this._lines.add(t)},Ci.prototype.setForceToLineString=function(t){this._isForcedToLineString=t},Ci.prototype.interfaces_=function(){return[lt]},Ci.prototype.getClass=function(){return Ci},Ci.getGeometry=function(){if(1===arguments.length){var t=arguments[0];return t.getFactory().buildGeometry(Ci.getLines(t))}if(2===arguments.length){var e=arguments[0],n=arguments[1];return e.getFactory().buildGeometry(Ci.getLines(e,n))}},Ci.getLines=function(){if(1===arguments.length){var t=arguments[0];return Ci.getLines(t,!1)}if(2===arguments.length){if(T(arguments[0],It)&&T(arguments[1],It)){for(var e=arguments[0],n=arguments[1],i=e.iterator();i.hasNext();){var r=i.next();Ci.getLines(r,n)}return n}if(arguments[0]instanceof ct&&"boolean"==typeof arguments[1]){var o=arguments[0],s=arguments[1],a=new Nt;return o.apply(new Ci(a,s)),a}if(arguments[0]instanceof ct&&T(arguments[1],It)){var u=arguments[0],l=arguments[1];return u instanceof Kt?l.add(u):u.apply(new Ci(l)),l}}else if(3===arguments.length){if("boolean"==typeof arguments[2]&&T(arguments[0],It)&&T(arguments[1],It)){for(var c=arguments[0],p=arguments[1],h=arguments[2],f=c.iterator();f.hasNext();){var g=f.next();Ci.getLines(g,p,h)}return p}if("boolean"==typeof arguments[2]&&arguments[0]instanceof ct&&T(arguments[1],It)){var d=arguments[0],y=arguments[1],_=arguments[2];return d.apply(new Ci(y,_)),y}}};var Si=function(){if(this._boundaryRule=gt.OGC_SFS_BOUNDARY_RULE,this._isIn=null,this._numBoundaries=null,0===arguments.length);else if(1===arguments.length){var t=arguments[0];if(null===t)throw new m("Rule must be non-null");this._boundaryRule=t}};Si.prototype.locateInternal=function(){if(arguments[0]instanceof C&&arguments[1]instanceof $t){var t=arguments[0],e=arguments[1];if(e.isEmpty())return w.EXTERIOR;var n=e.getExteriorRing(),i=this.locateInPolygonRing(t,n);if(i===w.EXTERIOR)return w.EXTERIOR;if(i===w.BOUNDARY)return w.BOUNDARY;for(var r=0;r<e.getNumInteriorRing();r++){var o=e.getInteriorRingN(r),s=this.locateInPolygonRing(t,o);if(s===w.INTERIOR)return w.EXTERIOR;if(s===w.BOUNDARY)return w.BOUNDARY}return w.INTERIOR}if(arguments[0]instanceof C&&arguments[1]instanceof Kt){var a=arguments[0],u=arguments[1];if(!u.getEnvelopeInternal().intersects(a))return w.EXTERIOR;var l=u.getCoordinates();return u.isClosed()||!a.equals(l[0])&&!a.equals(l[l.length-1])?at.isOnLine(a,l)?w.INTERIOR:w.EXTERIOR:w.BOUNDARY}if(arguments[0]instanceof C&&arguments[1]instanceof Qt){var c=arguments[0];return arguments[1].getCoordinate().equals2D(c)?w.INTERIOR:w.EXTERIOR}},Si.prototype.locateInPolygonRing=function(t,e){return e.getEnvelopeInternal().intersects(t)?at.locatePointInRing(t,e.getCoordinates()):w.EXTERIOR},Si.prototype.intersects=function(t,e){return this.locate(t,e)!==w.EXTERIOR},Si.prototype.updateLocationInfo=function(t){t===w.INTERIOR&&(this._isIn=!0),t===w.BOUNDARY&&this._numBoundaries++},Si.prototype.computeLocation=function(t,e){if(e instanceof Qt&&this.updateLocationInfo(this.locateInternal(t,e)),e instanceof Kt)this.updateLocationInfo(this.locateInternal(t,e));else if(e instanceof $t)this.updateLocationInfo(this.locateInternal(t,e));else if(e instanceof Xt)for(var n=e,i=0;i<n.getNumGeometries();i++){var r=n.getGeometryN(i);this.updateLocationInfo(this.locateInternal(t,r))}else if(e instanceof ne)for(var o=e,s=0;s<o.getNumGeometries();s++){var a=o.getGeometryN(s);this.updateLocationInfo(this.locateInternal(t,a))}else if(e instanceof zt)for(var u=new Un(e);u.hasNext();){var l=u.next();l!==e&&this.computeLocation(t,l)}},Si.prototype.locate=function(t,e){return e.isEmpty()?w.EXTERIOR:e instanceof Kt?this.locateInternal(t,e):e instanceof $t?this.locateInternal(t,e):(this._isIn=!1,this._numBoundaries=0,this.computeLocation(t,e),this._boundaryRule.isInBoundary(this._numBoundaries)?w.BOUNDARY:this._numBoundaries>0||this._isIn?w.INTERIOR:w.EXTERIOR)},Si.prototype.interfaces_=function(){return[]},Si.prototype.getClass=function(){return Si};var Li=function t(){if(this._component=null,this._segIndex=null,this._pt=null,2===arguments.length){var e=arguments[0],n=arguments[1];t.call(this,e,t.INSIDE_AREA,n)}else if(3===arguments.length){var i=arguments[0],r=arguments[1],o=arguments[2];this._component=i,this._segIndex=r,this._pt=o}},bi={INSIDE_AREA:{configurable:!0}};Li.prototype.isInsideArea=function(){return this._segIndex===Li.INSIDE_AREA},Li.prototype.getCoordinate=function(){return this._pt},Li.prototype.getGeometryComponent=function(){return this._component},Li.prototype.getSegmentIndex=function(){return this._segIndex},Li.prototype.interfaces_=function(){return[]},Li.prototype.getClass=function(){return Li},bi.INSIDE_AREA.get=function(){return-1},Object.defineProperties(Li,bi);var wi=function(t){this._pts=t||null};wi.prototype.filter=function(t){t instanceof Qt&&this._pts.add(t)},wi.prototype.interfaces_=function(){return[Vt]},wi.prototype.getClass=function(){return wi},wi.getPoints=function(){if(1===arguments.length){var t=arguments[0];return t instanceof Qt?$e.singletonList(t):wi.getPoints(t,new Nt)}if(2===arguments.length){var e=arguments[0],n=arguments[1];return e instanceof Qt?n.add(e):e instanceof zt&&e.apply(new wi(n)),n}};var Oi=function(){this._locations=null;var t=arguments[0];this._locations=t};Oi.prototype.filter=function(t){(t instanceof Qt||t instanceof Kt||t instanceof $t)&&this._locations.add(new Li(t,0,t.getCoordinate()))},Oi.prototype.interfaces_=function(){return[Vt]},Oi.prototype.getClass=function(){return Oi},Oi.getLocations=function(t){var e=new Nt;return t.apply(new Oi(e)),e};var Ti=function(){if(this._geom=null,this._terminateDistance=0,this._ptLocator=new Si,this._minDistanceLocation=null,this._minDistance=v.MAX_VALUE,2===arguments.length){var t=arguments[0],e=arguments[1];this._geom=[t,e],this._terminateDistance=0}else if(3===arguments.length){var n=arguments[0],i=arguments[1],r=arguments[2];this._geom=new Array(2).fill(null),this._geom[0]=n,this._geom[1]=i,this._terminateDistance=r}};Ti.prototype.computeContainmentDistance=function(){if(0===arguments.length){var t=new Array(2).fill(null);if(this.computeContainmentDistance(0,t),this._minDistance<=this._terminateDistance)return null;this.computeContainmentDistance(1,t)}else if(2===arguments.length){var e=arguments[0],n=arguments[1],i=1-e,r=Ni.getPolygons(this._geom[e]);if(r.size()>0){var o=Oi.getLocations(this._geom[i]);if(this.computeContainmentDistance(o,r,n),this._minDistance<=this._terminateDistance)return this._minDistanceLocation[i]=n[0],this._minDistanceLocation[e]=n[1],null}}else if(3===arguments.length)if(arguments[2]instanceof Array&&T(arguments[0],xt)&&T(arguments[1],xt)){for(var s=arguments[0],a=arguments[1],u=arguments[2],l=0;l<s.size();l++)for(var c=s.get(l),p=0;p<a.size();p++)if(this.computeContainmentDistance(c,a.get(p),u),this._minDistance<=this._terminateDistance)return null}else if(arguments[2]instanceof Array&&arguments[0]instanceof Li&&arguments[1]instanceof $t){var h=arguments[0],f=arguments[1],g=arguments[2],d=h.getCoordinate();if(w.EXTERIOR!==this._ptLocator.locate(d,f))return this._minDistance=0,g[0]=h,g[1]=new Li(f,d),null}},Ti.prototype.computeMinDistanceLinesPoints=function(t,e,n){for(var i=0;i<t.size();i++)for(var r=t.get(i),o=0;o<e.size();o++){var s=e.get(o);if(this.computeMinDistance(r,s,n),this._minDistance<=this._terminateDistance)return null}},Ti.prototype.computeFacetDistance=function(){var t=new Array(2).fill(null),e=Ci.getLines(this._geom[0]),n=Ci.getLines(this._geom[1]),i=wi.getPoints(this._geom[0]),r=wi.getPoints(this._geom[1]);return this.computeMinDistanceLines(e,n,t),this.updateMinDistance(t,!1),this._minDistance<=this._terminateDistance?null:(t[0]=null,t[1]=null,this.computeMinDistanceLinesPoints(e,r,t),this.updateMinDistance(t,!1),this._minDistance<=this._terminateDistance?null:(t[0]=null,t[1]=null,this.computeMinDistanceLinesPoints(n,i,t),this.updateMinDistance(t,!0),this._minDistance<=this._terminateDistance?null:(t[0]=null,t[1]=null,this.computeMinDistancePoints(i,r,t),void this.updateMinDistance(t,!1))))},Ti.prototype.nearestLocations=function(){return this.computeMinDistance(),this._minDistanceLocation},Ti.prototype.updateMinDistance=function(t,e){if(null===t[0])return null;e?(this._minDistanceLocation[0]=t[1],this._minDistanceLocation[1]=t[0]):(this._minDistanceLocation[0]=t[0],this._minDistanceLocation[1]=t[1])},Ti.prototype.nearestPoints=function(){this.computeMinDistance();return[this._minDistanceLocation[0].getCoordinate(),this._minDistanceLocation[1].getCoordinate()]},Ti.prototype.computeMinDistance=function(){if(0===arguments.length){if(null!==this._minDistanceLocation)return null;if(this._minDistanceLocation=new Array(2).fill(null),this.computeContainmentDistance(),this._minDistance<=this._terminateDistance)return null;this.computeFacetDistance()}else if(3===arguments.length)if(arguments[2]instanceof Array&&arguments[0]instanceof Kt&&arguments[1]instanceof Qt){var t=arguments[0],e=arguments[1],n=arguments[2];if(t.getEnvelopeInternal().distance(e.getEnvelopeInternal())>this._minDistance)return null;for(var i=t.getCoordinates(),r=e.getCoordinate(),o=0;o<i.length-1;o++){var s=at.distancePointLine(r,i[o],i[o+1]);if(s<this._minDistance){this._minDistance=s;var a=new dn(i[o],i[o+1]).closestPoint(r);n[0]=new Li(t,o,a),n[1]=new Li(e,0,r)}if(this._minDistance<=this._terminateDistance)return null}}else if(arguments[2]instanceof Array&&arguments[0]instanceof Kt&&arguments[1]instanceof Kt){var u=arguments[0],l=arguments[1],c=arguments[2];if(u.getEnvelopeInternal().distance(l.getEnvelopeInternal())>this._minDistance)return null;for(var p=u.getCoordinates(),h=l.getCoordinates(),f=0;f<p.length-1;f++)for(var g=0;g<h.length-1;g++){var d=at.distanceLineLine(p[f],p[f+1],h[g],h[g+1]);if(d<this._minDistance){this._minDistance=d;var y=new dn(p[f],p[f+1]),_=new dn(h[g],h[g+1]),m=y.closestPoints(_);c[0]=new Li(u,f,m[0]),c[1]=new Li(l,g,m[1])}if(this._minDistance<=this._terminateDistance)return null}}},Ti.prototype.computeMinDistancePoints=function(t,e,n){for(var i=0;i<t.size();i++)for(var r=t.get(i),o=0;o<e.size();o++){var s=e.get(o),a=r.getCoordinate().distance(s.getCoordinate());if(a<this._minDistance&&(this._minDistance=a,n[0]=new Li(r,0,r.getCoordinate()),n[1]=new Li(s,0,s.getCoordinate())),this._minDistance<=this._terminateDistance)return null}},Ti.prototype.distance=function(){if(null===this._geom[0]||null===this._geom[1])throw new m("null geometries are not supported");return this._geom[0].isEmpty()||this._geom[1].isEmpty()?0:(this.computeMinDistance(),this._minDistance)},Ti.prototype.computeMinDistanceLines=function(t,e,n){for(var i=0;i<t.size();i++)for(var r=t.get(i),o=0;o<e.size();o++){var s=e.get(o);if(this.computeMinDistance(r,s,n),this._minDistance<=this._terminateDistance)return null}},Ti.prototype.interfaces_=function(){return[]},Ti.prototype.getClass=function(){return Ti},Ti.distance=function(t,e){return new Ti(t,e).distance()},Ti.isWithinDistance=function(t,e,n){return new Ti(t,e,n).distance()<=n},Ti.nearestPoints=function(t,e){return new Ti(t,e).nearestPoints()};var Ri=function(){this._pt=[new C,new C],this._distance=v.NaN,this._isNull=!0};Ri.prototype.getCoordinates=function(){return this._pt},Ri.prototype.getCoordinate=function(t){return this._pt[t]},Ri.prototype.setMinimum=function(){if(1===arguments.length){var t=arguments[0];this.setMinimum(t._pt[0],t._pt[1])}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(this._isNull)return this.initialize(e,n),null;var i=e.distance(n);i<this._distance&&this.initialize(e,n,i)}},Ri.prototype.initialize=function(){if(0===arguments.length)this._isNull=!0;else if(2===arguments.length){var t=arguments[0],e=arguments[1];this._pt[0].setCoordinate(t),this._pt[1].setCoordinate(e),this._distance=t.distance(e),this._isNull=!1}else if(3===arguments.length){var n=arguments[0],i=arguments[1],r=arguments[2];this._pt[0].setCoordinate(n),this._pt[1].setCoordinate(i),this._distance=r,this._isNull=!1}},Ri.prototype.toString=function(){return Z.toLineString(this._pt[0],this._pt[1])},Ri.prototype.getDistance=function(){return this._distance},Ri.prototype.setMaximum=function(){if(1===arguments.length){var t=arguments[0];this.setMaximum(t._pt[0],t._pt[1])}else if(2===arguments.length){var e=arguments[0],n=arguments[1];if(this._isNull)return this.initialize(e,n),null;var i=e.distance(n);i>this._distance&&this.initialize(e,n,i)}},Ri.prototype.interfaces_=function(){return[]},Ri.prototype.getClass=function(){return Ri};var Pi=function(){};Pi.prototype.interfaces_=function(){return[]},Pi.prototype.getClass=function(){return Pi},Pi.computeDistance=function(){if(arguments[2]instanceof Ri&&arguments[0]instanceof Kt&&arguments[1]instanceof C)for(var t=arguments[0],e=arguments[1],n=arguments[2],i=new dn,r=t.getCoordinates(),o=0;o<r.length-1;o++){i.setCoordinates(r[o],r[o+1]);var s=i.closestPoint(e);n.setMinimum(s,e)}else if(arguments[2]instanceof Ri&&arguments[0]instanceof $t&&arguments[1]instanceof C){var a=arguments[0],u=arguments[1],l=arguments[2];Pi.computeDistance(a.getExteriorRing(),u,l);for(var c=0;c<a.getNumInteriorRing();c++)Pi.computeDistance(a.getInteriorRingN(c),u,l)}else if(arguments[2]instanceof Ri&&arguments[0]instanceof ct&&arguments[1]instanceof C){var p=arguments[0],h=arguments[1],f=arguments[2];if(p instanceof Kt)Pi.computeDistance(p,h,f);else if(p instanceof $t)Pi.computeDistance(p,h,f);else if(p instanceof zt)for(var g=p,d=0;d<g.getNumGeometries();d++){var y=g.getGeometryN(d);Pi.computeDistance(y,h,f)}else f.setMinimum(p.getCoordinate(),h)}else if(arguments[2]instanceof Ri&&arguments[0]instanceof dn&&arguments[1]instanceof C){var _=arguments[0],m=arguments[1],v=arguments[2],I=_.closestPoint(m);v.setMinimum(I,m)}};var Di=function(){this._g0=null,this._g1=null,this._ptDist=new Ri,this._densifyFrac=0;var t=arguments[0],e=arguments[1];this._g0=t,this._g1=e},Mi={MaxPointDistanceFilter:{configurable:!0},MaxDensifiedByFractionDistanceFilter:{configurable:!0}};Di.prototype.getCoordinates=function(){return this._ptDist.getCoordinates()},Di.prototype.setDensifyFraction=function(t){if(t>1||t<=0)throw new m("Fraction is not in range (0.0 - 1.0]");this._densifyFrac=t},Di.prototype.compute=function(t,e){this.computeOrientedDistance(t,e,this._ptDist),this.computeOrientedDistance(e,t,this._ptDist)},Di.prototype.distance=function(){return this.compute(this._g0,this._g1),this._ptDist.getDistance()},Di.prototype.computeOrientedDistance=function(t,e,n){var i=new Ai(e);if(t.apply(i),n.setMaximum(i.getMaxPointDistance()),this._densifyFrac>0){var r=new Fi(e,this._densifyFrac);t.apply(r),n.setMaximum(r.getMaxPointDistance())}},Di.prototype.orientedDistance=function(){return this.computeOrientedDistance(this._g0,this._g1,this._ptDist),this._ptDist.getDistance()},Di.prototype.interfaces_=function(){return[]},Di.prototype.getClass=function(){return Di},Di.distance=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];return new Di(t,e).distance()}if(3===arguments.length){var n=arguments[0],i=arguments[1],r=arguments[2],o=new Di(n,i);return o.setDensifyFraction(r),o.distance()}},Mi.MaxPointDistanceFilter.get=function(){return Ai},Mi.MaxDensifiedByFractionDistanceFilter.get=function(){return Fi},Object.defineProperties(Di,Mi);var Ai=function(){this._maxPtDist=new Ri,this._minPtDist=new Ri,this._euclideanDist=new Pi,this._geom=null;var t=arguments[0];this._geom=t};Ai.prototype.filter=function(t){this._minPtDist.initialize(),Pi.computeDistance(this._geom,t,this._minPtDist),this._maxPtDist.setMaximum(this._minPtDist)},Ai.prototype.getMaxPointDistance=function(){return this._maxPtDist},Ai.prototype.interfaces_=function(){return[ft]},Ai.prototype.getClass=function(){return Ai};var Fi=function(){this._maxPtDist=new Ri,this._minPtDist=new Ri,this._geom=null,this._numSubSegs=0;var t=arguments[0],e=arguments[1];this._geom=t,this._numSubSegs=Math.trunc(Math.round(1/e))};Fi.prototype.filter=function(t,e){if(0===e)return null;for(var n=t.getCoordinate(e-1),i=t.getCoordinate(e),r=(i.x-n.x)/this._numSubSegs,o=(i.y-n.y)/this._numSubSegs,s=0;s<this._numSubSegs;s++){var a=n.x+s*r,u=n.y+s*o,l=new C(a,u);this._minPtDist.initialize(),Pi.computeDistance(this._geom,l,this._minPtDist),this._maxPtDist.setMaximum(this._minPtDist)}},Fi.prototype.isDone=function(){return!1},Fi.prototype.isGeometryChanged=function(){return!1},Fi.prototype.getMaxPointDistance=function(){return this._maxPtDist},Fi.prototype.interfaces_=function(){return[Ut]},Fi.prototype.getClass=function(){return Fi};var Gi=function(t,e,n){this._minValidDistance=null,this._maxValidDistance=null,this._minDistanceFound=null,this._maxDistanceFound=null,this._isValid=!0,this._errMsg=null,this._errorLocation=null,this._errorIndicator=null,this._input=t||null,this._bufDistance=e||null,this._result=n||null},qi={VERBOSE:{configurable:!0},MAX_DISTANCE_DIFF_FRAC:{configurable:!0}};Gi.prototype.checkMaximumDistance=function(t,e,n){var i=new Di(e,t);if(i.setDensifyFraction(.25),this._maxDistanceFound=i.orientedDistance(),this._maxDistanceFound>n){this._isValid=!1;var r=i.getCoordinates();this._errorLocation=r[1],this._errorIndicator=t.getFactory().createLineString(r),this._errMsg="Distance between buffer curve and input is too large ("+this._maxDistanceFound+" at "+Z.toLineString(r[0],r[1])+")"}},Gi.prototype.isValid=function(){var t=Math.abs(this._bufDistance),e=Gi.MAX_DISTANCE_DIFF_FRAC*t;return this._minValidDistance=t-e,this._maxValidDistance=t+e,!(!this._input.isEmpty()&&!this._result.isEmpty())||(this._bufDistance>0?this.checkPositiveValid():this.checkNegativeValid(),Gi.VERBOSE&&Y.out.println("Min Dist= "+this._minDistanceFound+"  err= "+(1-this._minDistanceFound/this._bufDistance)+"  Max Dist= "+this._maxDistanceFound+"  err= "+(this._maxDistanceFound/this._bufDistance-1)),this._isValid)},Gi.prototype.checkNegativeValid=function(){if(!(this._input instanceof $t||this._input instanceof ne||this._input instanceof zt))return null;var t=this.getPolygonLines(this._input);if(this.checkMinimumDistance(t,this._result,this._minValidDistance),!this._isValid)return null;this.checkMaximumDistance(t,this._result,this._maxValidDistance)},Gi.prototype.getErrorIndicator=function(){return this._errorIndicator},Gi.prototype.checkMinimumDistance=function(t,e,n){var i=new Ti(t,e,n);if(this._minDistanceFound=i.distance(),this._minDistanceFound<n){this._isValid=!1;var r=i.nearestPoints();this._errorLocation=i.nearestPoints()[1],this._errorIndicator=t.getFactory().createLineString(r),this._errMsg="Distance between buffer curve and input is too small ("+this._minDistanceFound+" at "+Z.toLineString(r[0],r[1])+" )"}},Gi.prototype.checkPositiveValid=function(){var t=this._result.getBoundary();if(this.checkMinimumDistance(this._input,t,this._minValidDistance),!this._isValid)return null;this.checkMaximumDistance(this._input,t,this._maxValidDistance)},Gi.prototype.getErrorLocation=function(){return this._errorLocation},Gi.prototype.getPolygonLines=function(t){for(var e=new Nt,n=new Ci(e),i=Ni.getPolygons(t).iterator();i.hasNext();){i.next().apply(n)}return t.getFactory().buildGeometry(e)},Gi.prototype.getErrorMessage=function(){return this._errMsg},Gi.prototype.interfaces_=function(){return[]},Gi.prototype.getClass=function(){return Gi},qi.VERBOSE.get=function(){return!1},qi.MAX_DISTANCE_DIFF_FRAC.get=function(){return.012},Object.defineProperties(Gi,qi);var Bi=function(t,e,n){this._isValid=!0,this._errorMsg=null,this._errorLocation=null,this._errorIndicator=null,this._input=t||null,this._distance=e||null,this._result=n||null},Vi={VERBOSE:{configurable:!0},MAX_ENV_DIFF_FRAC:{configurable:!0}};Bi.prototype.isValid=function(){return this.checkPolygonal(),this._isValid?(this.checkExpectedEmpty(),this._isValid?(this.checkEnvelope(),this._isValid?(this.checkArea(),this._isValid?(this.checkDistance(),this._isValid):this._isValid):this._isValid):this._isValid):this._isValid},Bi.prototype.checkEnvelope=function(){if(this._distance<0)return null;var t=this._distance*Bi.MAX_ENV_DIFF_FRAC;0===t&&(t=.001);var e=new j(this._input.getEnvelopeInternal());e.expandBy(this._distance);var n=new j(this._result.getEnvelopeInternal());n.expandBy(t),n.contains(e)||(this._isValid=!1,this._errorMsg="Buffer envelope is incorrect",this._errorIndicator=this._input.getFactory().toGeometry(n)),this.report("Envelope")},Bi.prototype.checkDistance=function(){var t=new Gi(this._input,this._distance,this._result);t.isValid()||(this._isValid=!1,this._errorMsg=t.getErrorMessage(),this._errorLocation=t.getErrorLocation(),this._errorIndicator=t.getErrorIndicator()),this.report("Distance")},Bi.prototype.checkArea=function(){var t=this._input.getArea(),e=this._result.getArea();this._distance>0&&t>e&&(this._isValid=!1,this._errorMsg="Area of positive buffer is smaller than input",this._errorIndicator=this._result),this._distance<0&&t<e&&(this._isValid=!1,this._errorMsg="Area of negative buffer is larger than input",this._errorIndicator=this._result),this.report("Area")},Bi.prototype.checkPolygonal=function(){this._result instanceof $t||this._result instanceof ne||(this._isValid=!1),this._errorMsg="Result is not polygonal",this._errorIndicator=this._result,this.report("Polygonal")},Bi.prototype.getErrorIndicator=function(){return this._errorIndicator},Bi.prototype.getErrorLocation=function(){return this._errorLocation},Bi.prototype.checkExpectedEmpty=function(){return this._input.getDimension()>=2?null:this._distance>0?null:(this._result.isEmpty()||(this._isValid=!1,this._errorMsg="Result is non-empty",this._errorIndicator=this._result),void this.report("ExpectedEmpty"))},Bi.prototype.report=function(t){if(!Bi.VERBOSE)return null;Y.out.println("Check "+t+": "+(this._isValid?"passed":"FAILED"))},Bi.prototype.getErrorMessage=function(){return this._errorMsg},Bi.prototype.interfaces_=function(){return[]},Bi.prototype.getClass=function(){return Bi},Bi.isValidMsg=function(t,e,n){var i=new Bi(t,e,n);return i.isValid()?null:i.getErrorMessage()},Bi.isValid=function(t,e,n){return!!new Bi(t,e,n).isValid()},Vi.VERBOSE.get=function(){return!1},Vi.MAX_ENV_DIFF_FRAC.get=function(){return.012},Object.defineProperties(Bi,Vi);var Ui=function(){this._pts=null,this._data=null;var t=arguments[0],e=arguments[1];this._pts=t,this._data=e};Ui.prototype.getCoordinates=function(){return this._pts},Ui.prototype.size=function(){return this._pts.length},Ui.prototype.getCoordinate=function(t){return this._pts[t]},Ui.prototype.isClosed=function(){return this._pts[0].equals(this._pts[this._pts.length-1])},Ui.prototype.getSegmentOctant=function(t){return t===this._pts.length-1?-1:pn.octant(this.getCoordinate(t),this.getCoordinate(t+1))},Ui.prototype.setData=function(t){this._data=t},Ui.prototype.getData=function(){return this._data},Ui.prototype.toString=function(){return Z.toLineString(new ue(this._pts))},Ui.prototype.interfaces_=function(){return[hn]},Ui.prototype.getClass=function(){return Ui};var zi=function(){this._findAllIntersections=!1,this._isCheckEndSegmentsOnly=!1,this._li=null,this._interiorIntersection=null,this._intSegments=null,this._intersections=new Nt,this._intersectionCount=0,this._keepIntersections=!0;var t=arguments[0];this._li=t,this._interiorIntersection=null};zi.prototype.getInteriorIntersection=function(){return this._interiorIntersection},zi.prototype.setCheckEndSegmentsOnly=function(t){this._isCheckEndSegmentsOnly=t},zi.prototype.getIntersectionSegments=function(){return this._intSegments},zi.prototype.count=function(){return this._intersectionCount},zi.prototype.getIntersections=function(){return this._intersections},zi.prototype.setFindAllIntersections=function(t){this._findAllIntersections=t},zi.prototype.setKeepIntersections=function(t){this._keepIntersections=t},zi.prototype.processIntersections=function(t,e,n,i){if(!this._findAllIntersections&&this.hasIntersection())return null;if(t===n&&e===i)return null;if(this._isCheckEndSegmentsOnly){if(!(this.isEndSegment(t,e)||this.isEndSegment(n,i)))return null}var r=t.getCoordinates()[e],o=t.getCoordinates()[e+1],s=n.getCoordinates()[i],a=n.getCoordinates()[i+1];this._li.computeIntersection(r,o,s,a),this._li.hasIntersection()&&this._li.isInteriorIntersection()&&(this._intSegments=new Array(4).fill(null),this._intSegments[0]=r,this._intSegments[1]=o,this._intSegments[2]=s,this._intSegments[3]=a,this._interiorIntersection=this._li.getIntersection(0),this._keepIntersections&&this._intersections.add(this._interiorIntersection),this._intersectionCount++)},zi.prototype.isEndSegment=function(t,e){return 0===e||e>=t.size()-2},zi.prototype.hasIntersection=function(){return null!==this._interiorIntersection},zi.prototype.isDone=function(){return!this._findAllIntersections&&null!==this._interiorIntersection},zi.prototype.interfaces_=function(){return[Wn]},zi.prototype.getClass=function(){return zi},zi.createAllIntersectionsFinder=function(t){var e=new zi(t);return e.setFindAllIntersections(!0),e},zi.createAnyIntersectionFinder=function(t){return new zi(t)},zi.createIntersectionCounter=function(t){var e=new zi(t);return e.setFindAllIntersections(!0),e.setKeepIntersections(!1),e};var Xi=function(){this._li=new rt,this._segStrings=null,this._findAllIntersections=!1,this._segInt=null,this._isValid=!0;var t=arguments[0];this._segStrings=t};Xi.prototype.execute=function(){if(null!==this._segInt)return null;this.checkInteriorIntersections()},Xi.prototype.getIntersections=function(){return this._segInt.getIntersections()},Xi.prototype.isValid=function(){return this.execute(),this._isValid},Xi.prototype.setFindAllIntersections=function(t){this._findAllIntersections=t},Xi.prototype.checkInteriorIntersections=function(){this._isValid=!0,this._segInt=new zi(this._li),this._segInt.setFindAllIntersections(this._findAllIntersections);var t=new xn;if(t.setSegmentIntersector(this._segInt),t.computeNodes(this._segStrings),this._segInt.hasIntersection())return this._isValid=!1,null},Xi.prototype.checkValid=function(){if(this.execute(),!this._isValid)throw new we(this.getErrorMessage(),this._segInt.getInteriorIntersection())},Xi.prototype.getErrorMessage=function(){if(this._isValid)return"no intersections found";var t=this._segInt.getIntersectionSegments();return"found non-noded intersection between "+Z.toLineString(t[0],t[1])+" and "+Z.toLineString(t[2],t[3])},Xi.prototype.interfaces_=function(){return[]},Xi.prototype.getClass=function(){return Xi},Xi.computeIntersections=function(t){var e=new Xi(t);return e.setFindAllIntersections(!0),e.isValid(),e.getIntersections()};var Yi=function t(){this._nv=null;var e=arguments[0];this._nv=new Xi(t.toSegmentStrings(e))};Yi.prototype.checkValid=function(){this._nv.checkValid()},Yi.prototype.interfaces_=function(){return[]},Yi.prototype.getClass=function(){return Yi},Yi.toSegmentStrings=function(t){for(var e=new Nt,n=t.iterator();n.hasNext();){var i=n.next();e.add(new Ui(i.getCoordinates(),i))}return e},Yi.checkValid=function(t){new Yi(t).checkValid()};var ki=function(t){this._mapOp=t};ki.prototype.map=function(t){for(var e=new Nt,n=0;n<t.getNumGeometries();n++){var i=this._mapOp.map(t.getGeometryN(n));i.isEmpty()||e.add(i)}return t.getFactory().createGeometryCollection(_e.toGeometryArray(e))},ki.prototype.interfaces_=function(){return[]},ki.prototype.getClass=function(){return ki},ki.map=function(t,e){return new ki(e).map(t)};var ji=function(){this._op=null,this._geometryFactory=null,this._ptLocator=null,this._lineEdgesList=new Nt,this._resultLineList=new Nt;var t=arguments[0],e=arguments[1],n=arguments[2];this._op=t,this._geometryFactory=e,this._ptLocator=n};ji.prototype.collectLines=function(t){for(var e=this._op.getGraph().getEdgeEnds().iterator();e.hasNext();){var n=e.next();this.collectLineEdge(n,t,this._lineEdgesList),this.collectBoundaryTouchEdge(n,t,this._lineEdgesList)}},ji.prototype.labelIsolatedLine=function(t,e){var n=this._ptLocator.locate(t.getCoordinate(),this._op.getArgGeometry(e));t.getLabel().setLocation(e,n)},ji.prototype.build=function(t){return this.findCoveredLineEdges(),this.collectLines(t),this.buildLines(t),this._resultLineList},ji.prototype.collectLineEdge=function(t,e,n){var i=t.getLabel(),r=t.getEdge();t.isLineEdge()&&(t.isVisited()||!Lr.isResultOfOp(i,e)||r.isCovered()||(n.add(r),t.setVisitedEdge(!0)))},ji.prototype.findCoveredLineEdges=function(){for(var t=this._op.getGraph().getNodes().iterator();t.hasNext();){t.next().getEdges().findCoveredLineEdges()}for(var e=this._op.getGraph().getEdgeEnds().iterator();e.hasNext();){var n=e.next(),i=n.getEdge();if(n.isLineEdge()&&!i.isCoveredSet()){var r=this._op.isCoveredByA(n.getCoordinate());i.setCovered(r)}}},ji.prototype.labelIsolatedLines=function(t){for(var e=t.iterator();e.hasNext();){var n=e.next(),i=n.getLabel();n.isIsolated()&&(i.isNull(0)?this.labelIsolatedLine(n,0):this.labelIsolatedLine(n,1))}},ji.prototype.buildLines=function(t){for(var e=this._lineEdgesList.iterator();e.hasNext();){var n=e.next(),i=this._geometryFactory.createLineString(n.getCoordinates());this._resultLineList.add(i),n.setInResult(!0)}},ji.prototype.collectBoundaryTouchEdge=function(t,e,n){var i=t.getLabel();return t.isLineEdge()?null:t.isVisited()?null:t.isInteriorAreaEdge()?null:t.getEdge().isInResult()?null:(et.isTrue(!(t.isInResult()||t.getSym().isInResult())||!t.getEdge().isInResult()),void(Lr.isResultOfOp(i,e)&&e===Lr.INTERSECTION&&(n.add(t.getEdge()),t.setVisitedEdge(!0))))},ji.prototype.interfaces_=function(){return[]},ji.prototype.getClass=function(){return ji};var Hi=function(){this._op=null,this._geometryFactory=null,this._resultPointList=new Nt;var t=arguments[0],e=arguments[1];this._op=t,this._geometryFactory=e};Hi.prototype.filterCoveredNodeToPoint=function(t){var e=t.getCoordinate();if(!this._op.isCoveredByLA(e)){var n=this._geometryFactory.createPoint(e);this._resultPointList.add(n)}},Hi.prototype.extractNonCoveredResultNodes=function(t){for(var e=this._op.getGraph().getNodes().iterator();e.hasNext();){var n=e.next();if(!n.isInResult()&&(!n.isIncidentEdgeInResult()&&(0===n.getEdges().getDegree()||t===Lr.INTERSECTION))){var i=n.getLabel();Lr.isResultOfOp(i,t)&&this.filterCoveredNodeToPoint(n)}}},Hi.prototype.build=function(t){return this.extractNonCoveredResultNodes(t),this._resultPointList},Hi.prototype.interfaces_=function(){return[]},Hi.prototype.getClass=function(){return Hi};var Wi=function(){this._inputGeom=null,this._factory=null,this._pruneEmptyGeometry=!0,this._preserveGeometryCollectionType=!0,this._preserveCollections=!1,this._preserveType=!1};Wi.prototype.transformPoint=function(t,e){return this._factory.createPoint(this.transformCoordinates(t.getCoordinateSequence(),t))},Wi.prototype.transformPolygon=function(t,e){var n=!0,i=this.transformLinearRing(t.getExteriorRing(),t);null!==i&&i instanceof ee&&!i.isEmpty()||(n=!1);for(var r=new Nt,o=0;o<t.getNumInteriorRing();o++){var s=this.transformLinearRing(t.getInteriorRingN(o),t);null===s||s.isEmpty()||(s instanceof ee||(n=!1),r.add(s))}if(n)return this._factory.createPolygon(i,r.toArray([]));var a=new Nt;return null!==i&&a.add(i),a.addAll(r),this._factory.buildGeometry(a)},Wi.prototype.createCoordinateSequence=function(t){return this._factory.getCoordinateSequenceFactory().create(t)},Wi.prototype.getInputGeometry=function(){return this._inputGeom},Wi.prototype.transformMultiLineString=function(t,e){for(var n=new Nt,i=0;i<t.getNumGeometries();i++){var r=this.transformLineString(t.getGeometryN(i),t);null!==r&&(r.isEmpty()||n.add(r))}return this._factory.buildGeometry(n)},Wi.prototype.transformCoordinates=function(t,e){return this.copy(t)},Wi.prototype.transformLineString=function(t,e){return this._factory.createLineString(this.transformCoordinates(t.getCoordinateSequence(),t))},Wi.prototype.transformMultiPoint=function(t,e){for(var n=new Nt,i=0;i<t.getNumGeometries();i++){var r=this.transformPoint(t.getGeometryN(i),t);null!==r&&(r.isEmpty()||n.add(r))}return this._factory.buildGeometry(n)},Wi.prototype.transformMultiPolygon=function(t,e){for(var n=new Nt,i=0;i<t.getNumGeometries();i++){var r=this.transformPolygon(t.getGeometryN(i),t);null!==r&&(r.isEmpty()||n.add(r))}return this._factory.buildGeometry(n)},Wi.prototype.copy=function(t){return t.copy()},Wi.prototype.transformGeometryCollection=function(t,e){for(var n=new Nt,i=0;i<t.getNumGeometries();i++){var r=this.transform(t.getGeometryN(i));null!==r&&(this._pruneEmptyGeometry&&r.isEmpty()||n.add(r))}return this._preserveGeometryCollectionType?this._factory.createGeometryCollection(_e.toGeometryArray(n)):this._factory.buildGeometry(n)},Wi.prototype.transform=function(t){if(this._inputGeom=t,this._factory=t.getFactory(),t instanceof Qt)return this.transformPoint(t,null);if(t instanceof te)return this.transformMultiPoint(t,null);if(t instanceof ee)return this.transformLinearRing(t,null);if(t instanceof Kt)return this.transformLineString(t,null);if(t instanceof Xt)return this.transformMultiLineString(t,null);if(t instanceof $t)return this.transformPolygon(t,null);if(t instanceof ne)return this.transformMultiPolygon(t,null);if(t instanceof zt)return this.transformGeometryCollection(t,null);throw new m("Unknown Geometry subtype: "+t.getClass().getName())},Wi.prototype.transformLinearRing=function(t,e){var n=this.transformCoordinates(t.getCoordinateSequence(),t);if(null===n)return this._factory.createLinearRing(null);var i=n.size();return i>0&&i<4&&!this._preserveType?this._factory.createLineString(n):this._factory.createLinearRing(n)},Wi.prototype.interfaces_=function(){return[]},Wi.prototype.getClass=function(){return Wi};var Ki=function t(){if(this._snapTolerance=0,this._srcPts=null,this._seg=new dn,this._allowSnappingToSourceVertices=!1,this._isClosed=!1,arguments[0]instanceof Kt&&"number"==typeof arguments[1]){var e=arguments[0],n=arguments[1];t.call(this,e.getCoordinates(),n)}else if(arguments[0]instanceof Array&&"number"==typeof arguments[1]){var i=arguments[0],r=arguments[1];this._srcPts=i,this._isClosed=t.isClosed(i),this._snapTolerance=r}};Ki.prototype.snapVertices=function(t,e){for(var n=this._isClosed?t.size()-1:t.size(),i=0;i<n;i++){var r=t.get(i),o=this.findSnapForVertex(r,e);null!==o&&(t.set(i,new C(o)),0===i&&this._isClosed&&t.set(t.size()-1,new C(o)))}},Ki.prototype.findSnapForVertex=function(t,e){for(var n=0;n<e.length;n++){if(t.equals2D(e[n]))return null;if(t.distance(e[n])<this._snapTolerance)return e[n]}return null},Ki.prototype.snapTo=function(t){var e=new St(this._srcPts);this.snapVertices(e,t),this.snapSegments(e,t);return e.toCoordinateArray()},Ki.prototype.snapSegments=function(t,e){if(0===e.length)return null;var n=e.length;e[0].equals2D(e[e.length-1])&&(n=e.length-1);for(var i=0;i<n;i++){var r=e[i],o=this.findSegmentIndexToSnap(r,t);o>=0&&t.add(o+1,new C(r),!1)}},Ki.prototype.findSegmentIndexToSnap=function(t,e){for(var n=v.MAX_VALUE,i=-1,r=0;r<e.size()-1;r++){if(this._seg.p0=e.get(r),this._seg.p1=e.get(r+1),this._seg.p0.equals2D(t)||this._seg.p1.equals2D(t)){if(this._allowSnappingToSourceVertices)continue;return-1}var o=this._seg.distance(t);o<this._snapTolerance&&o<n&&(n=o,i=r)}return i},Ki.prototype.setAllowSnappingToSourceVertices=function(t){this._allowSnappingToSourceVertices=t},Ki.prototype.interfaces_=function(){return[]},Ki.prototype.getClass=function(){return Ki},Ki.isClosed=function(t){return!(t.length<=1)&&t[0].equals2D(t[t.length-1])};var Ji=function(t){this._srcGeom=t||null},Qi={SNAP_PRECISION_FACTOR:{configurable:!0}};Ji.prototype.snapTo=function(t,e){var n=this.extractTargetCoordinates(t);return new Zi(e,n).transform(this._srcGeom)},Ji.prototype.snapToSelf=function(t,e){var n=this.extractTargetCoordinates(this._srcGeom),i=new Zi(t,n,!0).transform(this._srcGeom),r=i;return e&&T(r,Zt)&&(r=i.buffer(0)),r},Ji.prototype.computeSnapTolerance=function(t){return this.computeMinimumSegmentLength(t)/10},Ji.prototype.extractTargetCoordinates=function(t){for(var e=new f,n=t.getCoordinates(),i=0;i<n.length;i++)e.add(n[i]);return e.toArray(new Array(0).fill(null))},Ji.prototype.computeMinimumSegmentLength=function(t){for(var e=v.MAX_VALUE,n=0;n<t.length-1;n++){var i=t[n].distance(t[n+1]);i<e&&(e=i)}return e},Ji.prototype.interfaces_=function(){return[]},Ji.prototype.getClass=function(){return Ji},Ji.snap=function(t,e,n){var i=new Array(2).fill(null),r=new Ji(t);i[0]=r.snapTo(e,n);var o=new Ji(e);return i[1]=o.snapTo(i[0],n),i},Ji.computeOverlaySnapTolerance=function(){if(1===arguments.length){var t=arguments[0],e=Ji.computeSizeBasedSnapTolerance(t),n=t.getPrecisionModel();if(n.getType()===fe.FIXED){var i=1/n.getScale()*2/1.415;i>e&&(e=i)}return e}if(2===arguments.length){var r=arguments[0],o=arguments[1];return Math.min(Ji.computeOverlaySnapTolerance(r),Ji.computeOverlaySnapTolerance(o))}},Ji.computeSizeBasedSnapTolerance=function(t){var e=t.getEnvelopeInternal();return Math.min(e.getHeight(),e.getWidth())*Ji.SNAP_PRECISION_FACTOR},Ji.snapToSelf=function(t,e,n){return new Ji(t).snapToSelf(e,n)},Qi.SNAP_PRECISION_FACTOR.get=function(){return 1e-9},Object.defineProperties(Ji,Qi);var Zi=function(t){function e(e,n,i){t.call(this),this._snapTolerance=e||null,this._snapPts=n||null,this._isSelfSnap=void 0!==i&&i}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.snapLine=function(t,e){var n=new Ki(t,this._snapTolerance);return n.setAllowSnappingToSourceVertices(this._isSelfSnap),n.snapTo(e)},e.prototype.transformCoordinates=function(t,e){var n=t.toCoordinateArray(),i=this.snapLine(n,this._snapPts);return this._factory.getCoordinateSequenceFactory().create(i)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Wi),$i=function(){this._isFirst=!0,this._commonMantissaBitsCount=53,this._commonBits=0,this._commonSignExp=null};$i.prototype.getCommon=function(){return v.longBitsToDouble(this._commonBits)},$i.prototype.add=function(t){var e=v.doubleToLongBits(t);if(this._isFirst)return this._commonBits=e,this._commonSignExp=$i.signExpBits(this._commonBits),this._isFirst=!1,null;if($i.signExpBits(e)!==this._commonSignExp)return this._commonBits=0,null;this._commonMantissaBitsCount=$i.numCommonMostSigMantissaBits(this._commonBits,e),this._commonBits=$i.zeroLowerBits(this._commonBits,64-(12+this._commonMantissaBitsCount))},$i.prototype.toString=function(){if(1===arguments.length){var t=arguments[0],e=v.longBitsToDouble(t),n="0000000000000000000000000000000000000000000000000000000000000000"+v.toBinaryString(t),i=n.substring(n.length-64);return i.substring(0,1)+"  "+i.substring(1,12)+"(exp) "+i.substring(12)+" [ "+e+" ]"}},$i.prototype.interfaces_=function(){return[]},$i.prototype.getClass=function(){return $i},$i.getBit=function(t,e){return 0!=(t&1<<e)?1:0},$i.signExpBits=function(t){return t>>52},$i.zeroLowerBits=function(t,e){return t&~((1<<e)-1)},$i.numCommonMostSigMantissaBits=function(t,e){for(var n=0,i=52;i>=0;i--){if($i.getBit(t,i)!==$i.getBit(e,i))return n;n++}return 52};var tr=function(){this._commonCoord=null,this._ccFilter=new nr},er={CommonCoordinateFilter:{configurable:!0},Translater:{configurable:!0}};tr.prototype.addCommonBits=function(t){var e=new ir(this._commonCoord);t.apply(e),t.geometryChanged()},tr.prototype.removeCommonBits=function(t){if(0===this._commonCoord.x&&0===this._commonCoord.y)return t;var e=new C(this._commonCoord);e.x=-e.x,e.y=-e.y;var n=new ir(e);return t.apply(n),t.geometryChanged(),t},tr.prototype.getCommonCoordinate=function(){return this._commonCoord},tr.prototype.add=function(t){t.apply(this._ccFilter),this._commonCoord=this._ccFilter.getCommonCoordinate()},tr.prototype.interfaces_=function(){return[]},tr.prototype.getClass=function(){return tr},er.CommonCoordinateFilter.get=function(){return nr},er.Translater.get=function(){return ir},Object.defineProperties(tr,er);var nr=function(){this._commonBitsX=new $i,this._commonBitsY=new $i};nr.prototype.filter=function(t){this._commonBitsX.add(t.x),this._commonBitsY.add(t.y)},nr.prototype.getCommonCoordinate=function(){return new C(this._commonBitsX.getCommon(),this._commonBitsY.getCommon())},nr.prototype.interfaces_=function(){return[ft]},nr.prototype.getClass=function(){return nr};var ir=function(){this.trans=null;var t=arguments[0];this.trans=t};ir.prototype.filter=function(t,e){var n=t.getOrdinate(e,0)+this.trans.x,i=t.getOrdinate(e,1)+this.trans.y;t.setOrdinate(e,0,n),t.setOrdinate(e,1,i)},ir.prototype.isDone=function(){return!1},ir.prototype.isGeometryChanged=function(){return!0},ir.prototype.interfaces_=function(){return[Ut]},ir.prototype.getClass=function(){return ir};var rr=function(t,e){this._geom=new Array(2).fill(null),this._snapTolerance=null,this._cbr=null,this._geom[0]=t,this._geom[1]=e,this.computeSnapTolerance()};rr.prototype.selfSnap=function(t){return new Ji(t).snapTo(t,this._snapTolerance)},rr.prototype.removeCommonBits=function(t){this._cbr=new tr,this._cbr.add(t[0]),this._cbr.add(t[1]);var e=new Array(2).fill(null);return e[0]=this._cbr.removeCommonBits(t[0].copy()),e[1]=this._cbr.removeCommonBits(t[1].copy()),e},rr.prototype.prepareResult=function(t){return this._cbr.addCommonBits(t),t},rr.prototype.getResultGeometry=function(t){var e=this.snap(this._geom),n=Lr.overlayOp(e[0],e[1],t);return this.prepareResult(n)},rr.prototype.checkValid=function(t){t.isValid()||Y.out.println("Snapped geometry is invalid")},rr.prototype.computeSnapTolerance=function(){this._snapTolerance=Ji.computeOverlaySnapTolerance(this._geom[0],this._geom[1])},rr.prototype.snap=function(t){var e=this.removeCommonBits(t);return Ji.snap(e[0],e[1],this._snapTolerance)},rr.prototype.interfaces_=function(){return[]},rr.prototype.getClass=function(){return rr},rr.overlayOp=function(t,e,n){return new rr(t,e).getResultGeometry(n)},rr.union=function(t,e){return rr.overlayOp(t,e,Lr.UNION)},rr.intersection=function(t,e){return rr.overlayOp(t,e,Lr.INTERSECTION)},rr.symDifference=function(t,e){return rr.overlayOp(t,e,Lr.SYMDIFFERENCE)},rr.difference=function(t,e){return rr.overlayOp(t,e,Lr.DIFFERENCE)};var or=function(t,e){this._geom=new Array(2).fill(null),this._geom[0]=t,this._geom[1]=e};or.prototype.getResultGeometry=function(t){var e=null,n=!1,i=null;try{e=Lr.overlayOp(this._geom[0],this._geom[1],t);n=!0}catch(t){if(!(t instanceof $))throw t;i=t}if(!n)try{e=rr.overlayOp(this._geom[0],this._geom[1],t)}catch(t){throw t instanceof $?i:t}return e},or.prototype.interfaces_=function(){return[]},or.prototype.getClass=function(){return or},or.overlayOp=function(t,e,n){return new or(t,e).getResultGeometry(n)},or.union=function(t,e){return or.overlayOp(t,e,Lr.UNION)},or.intersection=function(t,e){return or.overlayOp(t,e,Lr.INTERSECTION)},or.symDifference=function(t,e){return or.overlayOp(t,e,Lr.SYMDIFFERENCE)},or.difference=function(t,e){return or.overlayOp(t,e,Lr.DIFFERENCE)};var sr=function(){this.mce=null,this.chainIndex=null;var t=arguments[0],e=arguments[1];this.mce=t,this.chainIndex=e};sr.prototype.computeIntersections=function(t,e){this.mce.computeIntersectsForChain(this.chainIndex,t.mce,t.chainIndex,e)},sr.prototype.interfaces_=function(){return[]},sr.prototype.getClass=function(){return sr};var ar=function t(){if(this._label=null,this._xValue=null,this._eventType=null,this._insertEvent=null,this._deleteEventIndex=null,this._obj=null,2===arguments.length){var e=arguments[0],n=arguments[1];this._eventType=t.DELETE,this._xValue=e,this._insertEvent=n}else if(3===arguments.length){var i=arguments[0],r=arguments[1],o=arguments[2];this._eventType=t.INSERT,this._label=i,this._xValue=r,this._obj=o}},ur={INSERT:{configurable:!0},DELETE:{configurable:!0}};ar.prototype.isDelete=function(){return this._eventType===ar.DELETE},ar.prototype.setDeleteEventIndex=function(t){this._deleteEventIndex=t},ar.prototype.getObject=function(){return this._obj},ar.prototype.compareTo=function(t){var e=t;return this._xValue<e._xValue?-1:this._xValue>e._xValue?1:this._eventType<e._eventType?-1:this._eventType>e._eventType?1:0},ar.prototype.getInsertEvent=function(){return this._insertEvent},ar.prototype.isInsert=function(){return this._eventType===ar.INSERT},ar.prototype.isSameLabel=function(t){return null!==this._label&&this._label===t._label},ar.prototype.getDeleteEventIndex=function(){return this._deleteEventIndex},ar.prototype.interfaces_=function(){return[E]},ar.prototype.getClass=function(){return ar},ur.INSERT.get=function(){return 1},ur.DELETE.get=function(){return 2},Object.defineProperties(ar,ur);var lr=function(){};lr.prototype.interfaces_=function(){return[]},lr.prototype.getClass=function(){return lr};var cr=function(){this._hasIntersection=!1,this._hasProper=!1,this._hasProperInterior=!1,this._properIntersectionPoint=null,this._li=null,this._includeProper=null,this._recordIsolated=null,this._isSelfIntersection=null,this._numIntersections=0,this.numTests=0,this._bdyNodes=null,this._isDone=!1,this._isDoneWhenProperInt=!1;var t=arguments[0],e=arguments[1],n=arguments[2];this._li=t,this._includeProper=e,this._recordIsolated=n};cr.prototype.isTrivialIntersection=function(t,e,n,i){if(t===n&&1===this._li.getIntersectionNum()){if(cr.isAdjacentSegments(e,i))return!0;if(t.isClosed()){var r=t.getNumPoints()-1;if(0===e&&i===r||0===i&&e===r)return!0}}return!1},cr.prototype.getProperIntersectionPoint=function(){return this._properIntersectionPoint},cr.prototype.setIsDoneIfProperInt=function(t){this._isDoneWhenProperInt=t},cr.prototype.hasProperInteriorIntersection=function(){return this._hasProperInterior},cr.prototype.isBoundaryPointInternal=function(t,e){for(var n=e.iterator();n.hasNext();){var i=n.next().getCoordinate();if(t.isIntersection(i))return!0}return!1},cr.prototype.hasProperIntersection=function(){return this._hasProper},cr.prototype.hasIntersection=function(){return this._hasIntersection},cr.prototype.isDone=function(){return this._isDone},cr.prototype.isBoundaryPoint=function(t,e){return null!==e&&(!!this.isBoundaryPointInternal(t,e[0])||!!this.isBoundaryPointInternal(t,e[1]))},cr.prototype.setBoundaryNodes=function(t,e){this._bdyNodes=new Array(2).fill(null),this._bdyNodes[0]=t,this._bdyNodes[1]=e},cr.prototype.addIntersections=function(t,e,n,i){if(t===n&&e===i)return null;this.numTests++;var r=t.getCoordinates()[e],o=t.getCoordinates()[e+1],s=n.getCoordinates()[i],a=n.getCoordinates()[i+1];this._li.computeIntersection(r,o,s,a),this._li.hasIntersection()&&(this._recordIsolated&&(t.setIsolated(!1),n.setIsolated(!1)),this._numIntersections++,this.isTrivialIntersection(t,e,n,i)||(this._hasIntersection=!0,!this._includeProper&&this._li.isProper()||(t.addIntersections(this._li,e,0),n.addIntersections(this._li,i,1)),this._li.isProper()&&(this._properIntersectionPoint=this._li.getIntersection(0).copy(),this._hasProper=!0,this._isDoneWhenProperInt&&(this._isDone=!0),this.isBoundaryPoint(this._li,this._bdyNodes)||(this._hasProperInterior=!0))))},cr.prototype.interfaces_=function(){return[]},cr.prototype.getClass=function(){return cr},cr.isAdjacentSegments=function(t,e){return 1===Math.abs(t-e)};var pr=function(t){function e(){t.call(this),this.events=new Nt,this.nOverlaps=null}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.prepareEvents=function(){$e.sort(this.events);for(var t=0;t<this.events.size();t++){var e=this.events.get(t);e.isDelete()&&e.getInsertEvent().setDeleteEventIndex(t)}},e.prototype.computeIntersections=function(){if(1===arguments.length){var t=arguments[0];this.nOverlaps=0,this.prepareEvents();for(var e=0;e<this.events.size();e++){var n=this.events.get(e);if(n.isInsert()&&this.processOverlaps(e,n.getDeleteEventIndex(),n,t),t.isDone())break}}else if(3===arguments.length)if(arguments[2]instanceof cr&&T(arguments[0],xt)&&T(arguments[1],xt)){var i=arguments[0],r=arguments[1],o=arguments[2];this.addEdges(i,i),this.addEdges(r,r),this.computeIntersections(o)}else if("boolean"==typeof arguments[2]&&T(arguments[0],xt)&&arguments[1]instanceof cr){var s=arguments[0],a=arguments[1];arguments[2]?this.addEdges(s,null):this.addEdges(s),this.computeIntersections(a)}},e.prototype.addEdge=function(t,e){for(var n=t.getMonotoneChainEdge(),i=n.getStartIndexes(),r=0;r<i.length-1;r++){var o=new sr(n,r),s=new ar(e,n.getMinX(r),o);this.events.add(s),this.events.add(new ar(n.getMaxX(r),s))}},e.prototype.processOverlaps=function(t,e,n,i){for(var r=n.getObject(),o=t;o<e;o++){var s=this.events.get(o);if(s.isInsert()){var a=s.getObject();n.isSameLabel(s)||(r.computeIntersections(a,i),this.nOverlaps++)}}},e.prototype.addEdges=function(){if(1===arguments.length)for(var t=arguments[0].iterator();t.hasNext();){var e=t.next();this.addEdge(e,e)}else if(2===arguments.length)for(var n=arguments[0],i=arguments[1],r=n.iterator();r.hasNext();){var o=r.next();this.addEdge(o,i)}},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(lr),hr=function(){this._min=v.POSITIVE_INFINITY,this._max=v.NEGATIVE_INFINITY},fr={NodeComparator:{configurable:!0}};hr.prototype.getMin=function(){return this._min},hr.prototype.intersects=function(t,e){return!(this._min>e||this._max<t)},hr.prototype.getMax=function(){return this._max},hr.prototype.toString=function(){return Z.toLineString(new C(this._min,0),new C(this._max,0))},hr.prototype.interfaces_=function(){return[]},hr.prototype.getClass=function(){return hr},fr.NodeComparator.get=function(){return gr},Object.defineProperties(hr,fr);var gr=function(){};gr.prototype.compare=function(t,e){var n=t,i=e,r=(n._min+n._max)/2,o=(i._min+i._max)/2;return r<o?-1:r>o?1:0},gr.prototype.interfaces_=function(){return[N]},gr.prototype.getClass=function(){return gr};var dr=function(t){function e(){t.call(this),this._item=null;var e=arguments[0],n=arguments[1],i=arguments[2];this._min=e,this._max=n,this._item=i}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.query=function(t,e,n){if(!this.intersects(t,e))return null;n.visitItem(this._item)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(hr),yr=function(t){function e(){t.call(this),this._node1=null,this._node2=null;var e=arguments[0],n=arguments[1];this._node1=e,this._node2=n,this.buildExtent(this._node1,this._node2)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.buildExtent=function(t,e){this._min=Math.min(t._min,e._min),this._max=Math.max(t._max,e._max)},e.prototype.query=function(t,e,n){if(!this.intersects(t,e))return null;null!==this._node1&&this._node1.query(t,e,n),null!==this._node2&&this._node2.query(t,e,n)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(hr),_r=function(){this._leaves=new Nt,this._root=null,this._level=0};_r.prototype.buildTree=function(){$e.sort(this._leaves,new hr.NodeComparator);for(var t=this._leaves,e=null,n=new Nt;;){if(this.buildLevel(t,n),1===n.size())return n.get(0);e=t,t=n,n=e}},_r.prototype.insert=function(t,e,n){if(null!==this._root)throw new Error("Index cannot be added to once it has been queried");this._leaves.add(new dr(t,e,n))},_r.prototype.query=function(t,e,n){this.init(),this._root.query(t,e,n)},_r.prototype.buildRoot=function(){if(null!==this._root)return null;this._root=this.buildTree()},_r.prototype.printNode=function(t){Y.out.println(Z.toLineString(new C(t._min,this._level),new C(t._max,this._level)))},_r.prototype.init=function(){if(null!==this._root)return null;this.buildRoot()},_r.prototype.buildLevel=function(t,e){this._level++,e.clear();for(var n=0;n<t.size();n+=2){var i=t.get(n);if(null===(n+1<t.size()?t.get(n):null))e.add(i);else{var r=new yr(t.get(n),t.get(n+1));e.add(r)}}},_r.prototype.interfaces_=function(){return[]},_r.prototype.getClass=function(){return _r};var mr=function(){this._items=new Nt};mr.prototype.visitItem=function(t){this._items.add(t)},mr.prototype.getItems=function(){return this._items},mr.prototype.interfaces_=function(){return[Ke]},mr.prototype.getClass=function(){return mr};var vr=function(){this._index=null;var t=arguments[0];if(!T(t,Zt))throw new m("Argument must be Polygonal");this._index=new xr(t)},Ir={SegmentVisitor:{configurable:!0},IntervalIndexedGeometry:{configurable:!0}};vr.prototype.locate=function(t){var e=new st(t),n=new Er(e);return this._index.query(t.y,t.y,n),e.getLocation()},vr.prototype.interfaces_=function(){return[Vn]},vr.prototype.getClass=function(){return vr},Ir.SegmentVisitor.get=function(){return Er},Ir.IntervalIndexedGeometry.get=function(){return xr},Object.defineProperties(vr,Ir);var Er=function(){this._counter=null;var t=arguments[0];this._counter=t};Er.prototype.visitItem=function(t){var e=t;this._counter.countSegment(e.getCoordinate(0),e.getCoordinate(1))},Er.prototype.interfaces_=function(){return[Ke]},Er.prototype.getClass=function(){return Er};var xr=function(){this._index=new _r;var t=arguments[0];this.init(t)};xr.prototype.init=function(t){for(var e=Ci.getLines(t).iterator();e.hasNext();){var n=e.next().getCoordinates();this.addLine(n)}},xr.prototype.addLine=function(t){for(var e=1;e<t.length;e++){var n=new dn(t[e-1],t[e]),i=Math.min(n.p0.y,n.p1.y),r=Math.max(n.p0.y,n.p1.y);this._index.insert(i,r,n)}},xr.prototype.query=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1],n=new mr;return this._index.query(t,e,n),n.getItems()}if(3===arguments.length){var i=arguments[0],r=arguments[1],o=arguments[2];this._index.query(i,r,o)}},xr.prototype.interfaces_=function(){return[]},xr.prototype.getClass=function(){return xr};var Nr=function(t){function e(){if(t.call(this),this._parentGeom=null,this._lineEdgeMap=new he,this._boundaryNodeRule=null,this._useBoundaryDeterminationRule=!0,this._argIndex=null,this._boundaryNodes=null,this._hasTooFewPoints=!1,this._invalidPoint=null,this._areaPtLocator=null,this._ptLocator=new Si,2===arguments.length){var e=arguments[0],n=arguments[1],i=gt.OGC_SFS_BOUNDARY_RULE;this._argIndex=e,this._parentGeom=n,this._boundaryNodeRule=i,null!==n&&this.add(n)}else if(3===arguments.length){var r=arguments[0],o=arguments[1],s=arguments[2];this._argIndex=r,this._parentGeom=o,this._boundaryNodeRule=s,null!==o&&this.add(o)}}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.insertBoundaryPoint=function(t,n){var i=this._nodes.addNode(n).getLabel(),r=1;w.NONE;i.getLocation(t,Se.ON)===w.BOUNDARY&&r++;var o=e.determineBoundary(this._boundaryNodeRule,r);i.setLocation(t,o)},e.prototype.computeSelfNodes=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1];return this.computeSelfNodes(t,e,!1)}if(3===arguments.length){var n=arguments[0],i=arguments[1],r=arguments[2],o=new cr(n,!0,!1);o.setIsDoneIfProperInt(r);var s=this.createEdgeSetIntersector(),a=this._parentGeom instanceof ee||this._parentGeom instanceof $t||this._parentGeom instanceof ne,u=i||!a;return s.computeIntersections(this._edges,o,u),this.addSelfIntersectionNodes(this._argIndex),o}},e.prototype.computeSplitEdges=function(t){for(var e=this._edges.iterator();e.hasNext();){e.next().eiList.addSplitEdges(t)}},e.prototype.computeEdgeIntersections=function(t,e,n){var i=new cr(e,n,!0);i.setBoundaryNodes(this.getBoundaryNodes(),t.getBoundaryNodes());return this.createEdgeSetIntersector().computeIntersections(this._edges,t._edges,i),i},e.prototype.getGeometry=function(){return this._parentGeom},e.prototype.getBoundaryNodeRule=function(){return this._boundaryNodeRule},e.prototype.hasTooFewPoints=function(){return this._hasTooFewPoints},e.prototype.addPoint=function(){if(arguments[0]instanceof Qt){var t=arguments[0].getCoordinate();this.insertPoint(this._argIndex,t,w.INTERIOR)}else if(arguments[0]instanceof C){var e=arguments[0];this.insertPoint(this._argIndex,e,w.INTERIOR)}},e.prototype.addPolygon=function(t){this.addPolygonRing(t.getExteriorRing(),w.EXTERIOR,w.INTERIOR);for(var e=0;e<t.getNumInteriorRing();e++){var n=t.getInteriorRingN(e);this.addPolygonRing(n,w.INTERIOR,w.EXTERIOR)}},e.prototype.addEdge=function(t){this.insertEdge(t);var e=t.getCoordinates();this.insertPoint(this._argIndex,e[0],w.BOUNDARY),this.insertPoint(this._argIndex,e[e.length-1],w.BOUNDARY)},e.prototype.addLineString=function(t){var e=Lt.removeRepeatedPoints(t.getCoordinates());if(e.length<2)return this._hasTooFewPoints=!0,this._invalidPoint=e[0],null;var n=new ni(e,new Pe(this._argIndex,w.INTERIOR));this._lineEdgeMap.put(t,n),this.insertEdge(n),et.isTrue(e.length>=2,"found LineString with single point"),this.insertBoundaryPoint(this._argIndex,e[0]),this.insertBoundaryPoint(this._argIndex,e[e.length-1])},e.prototype.getInvalidPoint=function(){return this._invalidPoint},e.prototype.getBoundaryPoints=function(){for(var t=this.getBoundaryNodes(),e=new Array(t.size()).fill(null),n=0,i=t.iterator();i.hasNext();){var r=i.next();e[n++]=r.getCoordinate().copy()}return e},e.prototype.getBoundaryNodes=function(){return null===this._boundaryNodes&&(this._boundaryNodes=this._nodes.getBoundaryNodes(this._argIndex)),this._boundaryNodes},e.prototype.addSelfIntersectionNode=function(t,e,n){if(this.isBoundaryNode(t,e))return null;n===w.BOUNDARY&&this._useBoundaryDeterminationRule?this.insertBoundaryPoint(t,e):this.insertPoint(t,e,n)},e.prototype.addPolygonRing=function(t,e,n){if(t.isEmpty())return null;var i=Lt.removeRepeatedPoints(t.getCoordinates());if(i.length<4)return this._hasTooFewPoints=!0,this._invalidPoint=i[0],null;var r=e,o=n;at.isCCW(i)&&(r=n,o=e);var s=new ni(i,new Pe(this._argIndex,w.BOUNDARY,r,o));this._lineEdgeMap.put(t,s),this.insertEdge(s),this.insertPoint(this._argIndex,i[0],w.BOUNDARY)},e.prototype.insertPoint=function(t,e,n){var i=this._nodes.addNode(e),r=i.getLabel();null===r?i._label=new Pe(t,n):r.setLocation(t,n)},e.prototype.createEdgeSetIntersector=function(){return new pr},e.prototype.addSelfIntersectionNodes=function(t){for(var e=this._edges.iterator();e.hasNext();)for(var n=e.next(),i=n.getLabel().getLocation(t),r=n.eiList.iterator();r.hasNext();){var o=r.next();this.addSelfIntersectionNode(t,o.coord,i)}},e.prototype.add=function(){if(1!==arguments.length)return t.prototype.add.apply(this,arguments);var e=arguments[0];if(e.isEmpty())return null;if(e instanceof ne&&(this._useBoundaryDeterminationRule=!1),e instanceof $t)this.addPolygon(e);else if(e instanceof Kt)this.addLineString(e);else if(e instanceof Qt)this.addPoint(e);else if(e instanceof te)this.addCollection(e);else if(e instanceof Xt)this.addCollection(e);else if(e instanceof ne)this.addCollection(e);else{if(!(e instanceof zt))throw new Error(e.getClass().getName());this.addCollection(e)}},e.prototype.addCollection=function(t){for(var e=0;e<t.getNumGeometries();e++){var n=t.getGeometryN(e);this.add(n)}},e.prototype.locate=function(t){return T(this._parentGeom,Zt)&&this._parentGeom.getNumGeometries()>50?(null===this._areaPtLocator&&(this._areaPtLocator=new vr(this._parentGeom)),this._areaPtLocator.locate(t)):this._ptLocator.locate(t,this._parentGeom)},e.prototype.findEdge=function(){if(1===arguments.length){var e=arguments[0];return this._lineEdgeMap.get(e)}return t.prototype.findEdge.apply(this,arguments)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e.determineBoundary=function(t,e){return t.isInBoundary(e)?w.BOUNDARY:w.INTERIOR},e}(Ye),Cr=function(){if(this._li=new rt,this._resultPrecisionModel=null,this._arg=null,1===arguments.length){var t=arguments[0];this.setComputationPrecision(t.getPrecisionModel()),this._arg=new Array(1).fill(null),this._arg[0]=new Nr(0,t)}else if(2===arguments.length){var e=arguments[0],n=arguments[1],i=gt.OGC_SFS_BOUNDARY_RULE;e.getPrecisionModel().compareTo(n.getPrecisionModel())>=0?this.setComputationPrecision(e.getPrecisionModel()):this.setComputationPrecision(n.getPrecisionModel()),this._arg=new Array(2).fill(null),this._arg[0]=new Nr(0,e,i),this._arg[1]=new Nr(1,n,i)}else if(3===arguments.length){var r=arguments[0],o=arguments[1],s=arguments[2];r.getPrecisionModel().compareTo(o.getPrecisionModel())>=0?this.setComputationPrecision(r.getPrecisionModel()):this.setComputationPrecision(o.getPrecisionModel()),this._arg=new Array(2).fill(null),this._arg[0]=new Nr(0,r,s),this._arg[1]=new Nr(1,o,s)}};Cr.prototype.getArgGeometry=function(t){return this._arg[t].getGeometry()},Cr.prototype.setComputationPrecision=function(t){this._resultPrecisionModel=t,this._li.setPrecisionModel(this._resultPrecisionModel)},Cr.prototype.interfaces_=function(){return[]},Cr.prototype.getClass=function(){return Cr};var Sr=function(){};Sr.prototype.interfaces_=function(){return[]},Sr.prototype.getClass=function(){return Sr},Sr.map=function(){if(arguments[0]instanceof ct&&T(arguments[1],Sr.MapOp)){for(var t=arguments[0],e=arguments[1],n=new Nt,i=0;i<t.getNumGeometries();i++){var r=e.map(t.getGeometryN(i));null!==r&&n.add(r)}return t.getFactory().buildGeometry(n)}if(T(arguments[0],It)&&T(arguments[1],Sr.MapOp)){for(var o=arguments[0],s=arguments[1],a=new Nt,u=o.iterator();u.hasNext();){var l=u.next(),c=s.map(l);null!==c&&a.add(c)}return a}},Sr.MapOp=function(){};var Lr=function(t){function e(){var e=arguments[0],n=arguments[1];t.call(this,e,n),this._ptLocator=new Si,this._geomFact=null,this._resultGeom=null,this._graph=null,this._edgeList=new Hn,this._resultPolyList=new Nt,this._resultLineList=new Nt,this._resultPointList=new Nt,this._graph=new Ye(new kn),this._geomFact=e.getFactory()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.insertUniqueEdge=function(t){var e=this._edgeList.findEqualEdge(t);if(null!==e){var n=e.getLabel(),i=t.getLabel();e.isPointwiseEqual(t)||(i=new Pe(t.getLabel())).flip();var r=e.getDepth();r.isNull()&&r.add(n),r.add(i),n.merge(i)}else this._edgeList.add(t)},e.prototype.getGraph=function(){return this._graph},e.prototype.cancelDuplicateResultEdges=function(){for(var t=this._graph.getEdgeEnds().iterator();t.hasNext();){var e=t.next(),n=e.getSym();e.isInResult()&&n.isInResult()&&(e.setInResult(!1),n.setInResult(!1))}},e.prototype.isCoveredByLA=function(t){return!!this.isCovered(t,this._resultLineList)||!!this.isCovered(t,this._resultPolyList)},e.prototype.computeGeometry=function(t,n,i,r){var o=new Nt;return o.addAll(t),o.addAll(n),o.addAll(i),o.isEmpty()?e.createEmptyResult(r,this._arg[0].getGeometry(),this._arg[1].getGeometry(),this._geomFact):this._geomFact.buildGeometry(o)},e.prototype.mergeSymLabels=function(){for(var t=this._graph.getNodes().iterator();t.hasNext();){t.next().getEdges().mergeSymLabels()}},e.prototype.isCovered=function(t,e){for(var n=e.iterator();n.hasNext();){var i=n.next();if(this._ptLocator.locate(t,i)!==w.EXTERIOR)return!0}return!1},e.prototype.replaceCollapsedEdges=function(){for(var t=new Nt,e=this._edgeList.iterator();e.hasNext();){var n=e.next();n.isCollapsed()&&(e.remove(),t.add(n.getCollapsedEdge()))}this._edgeList.addAll(t)},e.prototype.updateNodeLabelling=function(){for(var t=this._graph.getNodes().iterator();t.hasNext();){var e=t.next(),n=e.getEdges().getLabel();e.getLabel().merge(n)}},e.prototype.getResultGeometry=function(t){return this.computeOverlay(t),this._resultGeom},e.prototype.insertUniqueEdges=function(t){for(var e=t.iterator();e.hasNext();){var n=e.next();this.insertUniqueEdge(n)}},e.prototype.computeOverlay=function(t){this.copyPoints(0),this.copyPoints(1),this._arg[0].computeSelfNodes(this._li,!1),this._arg[1].computeSelfNodes(this._li,!1),this._arg[0].computeEdgeIntersections(this._arg[1],this._li,!0);var e=new Nt;this._arg[0].computeSplitEdges(e),this._arg[1].computeSplitEdges(e),this.insertUniqueEdges(e),this.computeLabelsFromDepths(),this.replaceCollapsedEdges(),Yi.checkValid(this._edgeList.getEdges()),this._graph.addEdges(this._edgeList.getEdges()),this.computeLabelling(),this.labelIncompleteNodes(),this.findResultAreaEdges(t),this.cancelDuplicateResultEdges();var n=new ke(this._geomFact);n.add(this._graph),this._resultPolyList=n.getPolygons();var i=new ji(this,this._geomFact,this._ptLocator);this._resultLineList=i.build(t);var r=new Hi(this,this._geomFact,this._ptLocator);this._resultPointList=r.build(t),this._resultGeom=this.computeGeometry(this._resultPointList,this._resultLineList,this._resultPolyList,t)},e.prototype.labelIncompleteNode=function(t,e){var n=this._ptLocator.locate(t.getCoordinate(),this._arg[e].getGeometry());t.getLabel().setLocation(e,n)},e.prototype.copyPoints=function(t){for(var e=this._arg[t].getNodeIterator();e.hasNext();){var n=e.next();this._graph.addNode(n.getCoordinate()).setLabel(t,n.getLabel().getLocation(t))}},e.prototype.findResultAreaEdges=function(t){for(var n=this._graph.getEdgeEnds().iterator();n.hasNext();){var i=n.next(),r=i.getLabel();r.isArea()&&!i.isInteriorAreaEdge()&&e.isResultOfOp(r.getLocation(0,Se.RIGHT),r.getLocation(1,Se.RIGHT),t)&&i.setInResult(!0)}},e.prototype.computeLabelsFromDepths=function(){for(var t=this._edgeList.iterator();t.hasNext();){var e=t.next(),n=e.getLabel(),i=e.getDepth();if(!i.isNull()){i.normalize();for(var r=0;r<2;r++)n.isNull(r)||!n.isArea()||i.isNull(r)||(0===i.getDelta(r)?n.toLine(r):(et.isTrue(!i.isNull(r,Se.LEFT),"depth of LEFT side has not been initialized"),n.setLocation(r,Se.LEFT,i.getLocation(r,Se.LEFT)),et.isTrue(!i.isNull(r,Se.RIGHT),"depth of RIGHT side has not been initialized"),n.setLocation(r,Se.RIGHT,i.getLocation(r,Se.RIGHT))))}}},e.prototype.computeLabelling=function(){for(var t=this._graph.getNodes().iterator();t.hasNext();){t.next().getEdges().computeLabelling(this._arg)}this.mergeSymLabels(),this.updateNodeLabelling()},e.prototype.labelIncompleteNodes=function(){for(var t=this._graph.getNodes().iterator();t.hasNext();){var e=t.next(),n=e.getLabel();e.isIsolated()&&(n.isNull(0)?this.labelIncompleteNode(e,0):this.labelIncompleteNode(e,1)),e.getEdges().updateLabelling(n)}},e.prototype.isCoveredByA=function(t){return!!this.isCovered(t,this._resultPolyList)},e.prototype.interfaces_=function(){return[]},e.prototype.getClass=function(){return e},e}(Cr);Lr.overlayOp=function(t,e,n){return new Lr(t,e).getResultGeometry(n)},Lr.intersection=function(t,e){if(t.isEmpty()||e.isEmpty())return Lr.createEmptyResult(Lr.INTERSECTION,t,e,t.getFactory());if(t.isGeometryCollection()){var n=e;return ki.map(t,{interfaces_:function(){return[Sr.MapOp]},map:function(t){return t.intersection(n)}})}return t.checkNotGeometryCollection(t),t.checkNotGeometryCollection(e),or.overlayOp(t,e,Lr.INTERSECTION)},Lr.symDifference=function(t,e){if(t.isEmpty()||e.isEmpty()){if(t.isEmpty()&&e.isEmpty())return Lr.createEmptyResult(Lr.SYMDIFFERENCE,t,e,t.getFactory());if(t.isEmpty())return e.copy();if(e.isEmpty())return t.copy()}return t.checkNotGeometryCollection(t),t.checkNotGeometryCollection(e),or.overlayOp(t,e,Lr.SYMDIFFERENCE)},Lr.resultDimension=function(t,e,n){var i=e.getDimension(),r=n.getDimension(),o=-1;switch(t){case Lr.INTERSECTION:o=Math.min(i,r);break;case Lr.UNION:o=Math.max(i,r);break;case Lr.DIFFERENCE:o=i;break;case Lr.SYMDIFFERENCE:o=Math.max(i,r)}return o},Lr.createEmptyResult=function(t,e,n,i){var r=null;switch(Lr.resultDimension(t,e,n)){case-1:r=i.createGeometryCollection(new Array(0).fill(null));break;case 0:r=i.createPoint();break;case 1:r=i.createLineString();break;case 2:r=i.createPolygon()}return r},Lr.difference=function(t,e){return t.isEmpty()?Lr.createEmptyResult(Lr.DIFFERENCE,t,e,t.getFactory()):e.isEmpty()?t.copy():(t.checkNotGeometryCollection(t),t.checkNotGeometryCollection(e),or.overlayOp(t,e,Lr.DIFFERENCE))},Lr.isResultOfOp=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1],n=t.getLocation(0),i=t.getLocation(1);return Lr.isResultOfOp(n,i,e)}if(3===arguments.length){var r=arguments[0],o=arguments[1],s=arguments[2];switch(r===w.BOUNDARY&&(r=w.INTERIOR),o===w.BOUNDARY&&(o=w.INTERIOR),s){case Lr.INTERSECTION:return r===w.INTERIOR&&o===w.INTERIOR;case Lr.UNION:return r===w.INTERIOR||o===w.INTERIOR;case Lr.DIFFERENCE:return r===w.INTERIOR&&o!==w.INTERIOR;case Lr.SYMDIFFERENCE:return r===w.INTERIOR&&o!==w.INTERIOR||r!==w.INTERIOR&&o===w.INTERIOR}return!1}},Lr.INTERSECTION=1,Lr.UNION=2,Lr.DIFFERENCE=3,Lr.SYMDIFFERENCE=4;var br=function(){this._g=null,this._boundaryDistanceTolerance=null,this._linework=null,this._ptLocator=new Si,this._seg=new dn;var t=arguments[0],e=arguments[1];this._g=t,this._boundaryDistanceTolerance=e,this._linework=this.extractLinework(t)};br.prototype.isWithinToleranceOfBoundary=function(t){for(var e=0;e<this._linework.getNumGeometries();e++)for(var n=this._linework.getGeometryN(e).getCoordinateSequence(),i=0;i<n.size()-1;i++){n.getCoordinate(i,this._seg.p0),n.getCoordinate(i+1,this._seg.p1);if(this._seg.distance(t)<=this._boundaryDistanceTolerance)return!0}return!1},br.prototype.getLocation=function(t){return this.isWithinToleranceOfBoundary(t)?w.BOUNDARY:this._ptLocator.locate(t,this._g)},br.prototype.extractLinework=function(t){var e=new wr;t.apply(e);var n=e.getLinework(),i=_e.toLineStringArray(n);return t.getFactory().createMultiLineString(i)},br.prototype.interfaces_=function(){return[]},br.prototype.getClass=function(){return br};var wr=function(){this._linework=null,this._linework=new Nt};wr.prototype.getLinework=function(){return this._linework},wr.prototype.filter=function(t){if(t instanceof $t){var e=t;this._linework.add(e.getExteriorRing());for(var n=0;n<e.getNumInteriorRing();n++)this._linework.add(e.getInteriorRingN(n))}},wr.prototype.interfaces_=function(){return[Vt]},wr.prototype.getClass=function(){return wr};var Or=function(){this._g=null,this._doLeft=!0,this._doRight=!0;var t=arguments[0];this._g=t};Or.prototype.extractPoints=function(t,e,n){for(var i=t.getCoordinates(),r=0;r<i.length-1;r++)this.computeOffsetPoints(i[r],i[r+1],e,n)},Or.prototype.setSidesToGenerate=function(t,e){this._doLeft=t,this._doRight=e},Or.prototype.getPoints=function(t){for(var e=new Nt,n=Ci.getLines(this._g).iterator();n.hasNext();){var i=n.next();this.extractPoints(i,t,e)}return e},Or.prototype.computeOffsetPoints=function(t,e,n,i){var r=e.x-t.x,o=e.y-t.y,s=Math.sqrt(r*r+o*o),a=n*r/s,u=n*o/s,l=(e.x+t.x)/2,c=(e.y+t.y)/2;if(this._doLeft){var p=new C(l-u,c+a);i.add(p)}if(this._doRight){var h=new C(l+u,c-a);i.add(h)}},Or.prototype.interfaces_=function(){return[]},Or.prototype.getClass=function(){return Or};var Tr=function t(){this._geom=null,this._locFinder=null,this._location=new Array(3).fill(null),this._invalidLocation=null,this._boundaryDistanceTolerance=t.TOLERANCE,this._testCoords=new Nt;var e=arguments[0],n=arguments[1],i=arguments[2];this._boundaryDistanceTolerance=t.computeBoundaryDistanceTolerance(e,n),this._geom=[e,n,i],this._locFinder=[new br(this._geom[0],this._boundaryDistanceTolerance),new br(this._geom[1],this._boundaryDistanceTolerance),new br(this._geom[2],this._boundaryDistanceTolerance)]},Rr={TOLERANCE:{configurable:!0}};Tr.prototype.reportResult=function(t,e,n){Y.out.println("Overlay result invalid - A:"+w.toLocationSymbol(e[0])+" B:"+w.toLocationSymbol(e[1])+" expected:"+(n?"i":"e")+" actual:"+w.toLocationSymbol(e[2]))},Tr.prototype.isValid=function(t){this.addTestPts(this._geom[0]),this.addTestPts(this._geom[1]);var e=this.checkValid(t);return e},Tr.prototype.checkValid=function(){if(1===arguments.length){for(var t=arguments[0],e=0;e<this._testCoords.size();e++){var n=this._testCoords.get(e);if(!this.checkValid(t,n))return this._invalidLocation=n,!1}return!0}if(2===arguments.length){var i=arguments[0],r=arguments[1];return this._location[0]=this._locFinder[0].getLocation(r),this._location[1]=this._locFinder[1].getLocation(r),this._location[2]=this._locFinder[2].getLocation(r),!!Tr.hasLocation(this._location,w.BOUNDARY)||this.isValidResult(i,this._location)}},Tr.prototype.addTestPts=function(t){var e=new Or(t);this._testCoords.addAll(e.getPoints(5*this._boundaryDistanceTolerance))},Tr.prototype.isValidResult=function(t,e){var n=Lr.isResultOfOp(e[0],e[1],t),i=!(n^e[2]===w.INTERIOR);return i||this.reportResult(t,e,n),i},Tr.prototype.getInvalidLocation=function(){return this._invalidLocation},Tr.prototype.interfaces_=function(){return[]},Tr.prototype.getClass=function(){return Tr},Tr.hasLocation=function(t,e){for(var n=0;n<3;n++)if(t[n]===e)return!0;return!1},Tr.computeBoundaryDistanceTolerance=function(t,e){return Math.min(Ji.computeSizeBasedSnapTolerance(t),Ji.computeSizeBasedSnapTolerance(e))},Tr.isValid=function(t,e,n,i){return new Tr(t,e,i).isValid(n)},Rr.TOLERANCE.get=function(){return 1e-6},Object.defineProperties(Tr,Rr);var Pr=function t(e){this._geomFactory=null,this._skipEmpty=!1,this._inputGeoms=null,this._geomFactory=t.extractFactory(e),this._inputGeoms=e};Pr.prototype.extractElements=function(t,e){if(null===t)return null;for(var n=0;n<t.getNumGeometries();n++){var i=t.getGeometryN(n);this._skipEmpty&&i.isEmpty()||e.add(i)}},Pr.prototype.combine=function(){for(var t=new Nt,e=this._inputGeoms.iterator();e.hasNext();){var n=e.next();this.extractElements(n,t)}return 0===t.size()?null!==this._geomFactory?this._geomFactory.createGeometryCollection(null):null:this._geomFactory.buildGeometry(t)},Pr.prototype.interfaces_=function(){return[]},Pr.prototype.getClass=function(){return Pr},Pr.combine=function(){if(1===arguments.length){var t=arguments[0];return new Pr(t).combine()}if(2===arguments.length){var e=arguments[0],n=arguments[1];return new Pr(Pr.createList(e,n)).combine()}if(3===arguments.length){var i=arguments[0],r=arguments[1],o=arguments[2];return new Pr(Pr.createList(i,r,o)).combine()}},Pr.extractFactory=function(t){return t.isEmpty()?null:t.iterator().next().getFactory()},Pr.createList=function(){if(2===arguments.length){var t=arguments[0],e=arguments[1],n=new Nt;return n.add(t),n.add(e),n}if(3===arguments.length){var i=arguments[0],r=arguments[1],o=arguments[2],s=new Nt;return s.add(i),s.add(r),s.add(o),s}};var Dr=function(){this._inputPolys=null,this._geomFactory=null;var t=arguments[0];this._inputPolys=t,null===this._inputPolys&&(this._inputPolys=new Nt)},Mr={STRTREE_NODE_CAPACITY:{configurable:!0}};Dr.prototype.reduceToGeometries=function(t){for(var e=new Nt,n=t.iterator();n.hasNext();){var i=n.next(),r=null;T(i,xt)?r=this.unionTree(i):i instanceof ct&&(r=i),e.add(r)}return e},Dr.prototype.extractByEnvelope=function(t,e,n){for(var i=new Nt,r=0;r<e.getNumGeometries();r++){var o=e.getGeometryN(r);o.getEnvelopeInternal().intersects(t)?i.add(o):n.add(o)}return this._geomFactory.buildGeometry(i)},Dr.prototype.unionOptimized=function(t,e){var n=t.getEnvelopeInternal(),i=e.getEnvelopeInternal();if(!n.intersects(i)){return Pr.combine(t,e)}if(t.getNumGeometries()<=1&&e.getNumGeometries()<=1)return this.unionActual(t,e);var r=n.intersection(i);return this.unionUsingEnvelopeIntersection(t,e,r)},Dr.prototype.union=function(){if(null===this._inputPolys)throw new Error("union() method cannot be called twice");if(this._inputPolys.isEmpty())return null;this._geomFactory=this._inputPolys.iterator().next().getFactory();for(var t=new sn(Dr.STRTREE_NODE_CAPACITY),e=this._inputPolys.iterator();e.hasNext();){var n=e.next();t.insert(n.getEnvelopeInternal(),n)}this._inputPolys=null;var i=t.itemsTree();return this.unionTree(i)},Dr.prototype.binaryUnion=function(){if(1===arguments.length){var t=arguments[0];return this.binaryUnion(t,0,t.size())}if(3===arguments.length){var e=arguments[0],n=arguments[1],i=arguments[2];if(i-n<=1){var r=Dr.getGeometry(e,n);return this.unionSafe(r,null)}if(i-n==2)return this.unionSafe(Dr.getGeometry(e,n),Dr.getGeometry(e,n+1));var o=Math.trunc((i+n)/2),s=this.binaryUnion(e,n,o),a=this.binaryUnion(e,o,i);return this.unionSafe(s,a)}},Dr.prototype.repeatedUnion=function(t){for(var e=null,n=t.iterator();n.hasNext();){var i=n.next();e=null===e?i.copy():e.union(i)}return e},Dr.prototype.unionSafe=function(t,e){return null===t&&null===e?null:null===t?e.copy():null===e?t.copy():this.unionOptimized(t,e)},Dr.prototype.unionActual=function(t,e){return Dr.restrictToPolygons(t.union(e))},Dr.prototype.unionTree=function(t){var e=this.reduceToGeometries(t);return this.binaryUnion(e)},Dr.prototype.unionUsingEnvelopeIntersection=function(t,e,n){var i=new Nt,r=this.extractByEnvelope(n,t,i),o=this.extractByEnvelope(n,e,i),s=this.unionActual(r,o);i.add(s);return Pr.combine(i)},Dr.prototype.bufferUnion=function(){if(1===arguments.length){var t=arguments[0];return t.get(0).getFactory().buildGeometry(t).buffer(0)}if(2===arguments.length){var e=arguments[0],n=arguments[1];return e.getFactory().createGeometryCollection([e,n]).buffer(0)}},Dr.prototype.interfaces_=function(){return[]},Dr.prototype.getClass=function(){return Dr},Dr.restrictToPolygons=function(t){if(T(t,Zt))return t;var e=Ni.getPolygons(t);return 1===e.size()?e.get(0):t.getFactory().createMultiPolygon(_e.toPolygonArray(e))},Dr.getGeometry=function(t,e){return e>=t.size()?null:t.get(e)},Dr.union=function(t){return new Dr(t).union()},Mr.STRTREE_NODE_CAPACITY.get=function(){return 4},Object.defineProperties(Dr,Mr);var Ar=function(){};Ar.prototype.interfaces_=function(){return[]},Ar.prototype.getClass=function(){return Ar},Ar.union=function(t,e){if(t.isEmpty()||e.isEmpty()){if(t.isEmpty()&&e.isEmpty())return Lr.createEmptyResult(Lr.UNION,t,e,t.getFactory());if(t.isEmpty())return e.copy();if(e.isEmpty())return t.copy()}return t.checkNotGeometryCollection(t),t.checkNotGeometryCollection(e),or.overlayOp(t,e,Lr.UNION)},t.GeoJSONReader=Ne,t.GeoJSONWriter=Ce,t.OverlayOp=Lr,t.UnionOp=Ar,t.BufferOp=di,Object.defineProperty(t,"__esModule",{value:!0})});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var window = __webpack_require__(38)
var isFunction = __webpack_require__(39)
var parseHeaders = __webpack_require__(40)
var xtend = __webpack_require__(44)

module.exports = createXHR
// Allow use of default import syntax in TypeScript
module.exports.default = createXHR;
createXHR.XMLHttpRequest = window.XMLHttpRequest || noop
createXHR.XDomainRequest = "withCredentials" in (new createXHR.XMLHttpRequest()) ? createXHR.XMLHttpRequest : window.XDomainRequest

forEachArray(["get", "put", "post", "patch", "head", "delete"], function(method) {
    createXHR[method === "delete" ? "del" : method] = function(uri, options, callback) {
        options = initParams(uri, options, callback)
        options.method = method.toUpperCase()
        return _createXHR(options)
    }
})

function forEachArray(array, iterator) {
    for (var i = 0; i < array.length; i++) {
        iterator(array[i])
    }
}

function isEmpty(obj){
    for(var i in obj){
        if(obj.hasOwnProperty(i)) return false
    }
    return true
}

function initParams(uri, options, callback) {
    var params = uri

    if (isFunction(options)) {
        callback = options
        if (typeof uri === "string") {
            params = {uri:uri}
        }
    } else {
        params = xtend(options, {uri: uri})
    }

    params.callback = callback
    return params
}

function createXHR(uri, options, callback) {
    options = initParams(uri, options, callback)
    return _createXHR(options)
}

function _createXHR(options) {
    if(typeof options.callback === "undefined"){
        throw new Error("callback argument missing")
    }

    var called = false
    var callback = function cbOnce(err, response, body){
        if(!called){
            called = true
            options.callback(err, response, body)
        }
    }

    function readystatechange() {
        if (xhr.readyState === 4) {
            setTimeout(loadFunc, 0)
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = undefined

        if (xhr.response) {
            body = xhr.response
        } else {
            body = xhr.responseText || getXml(xhr)
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    function errorFunc(evt) {
        clearTimeout(timeoutTimer)
        if(!(evt instanceof Error)){
            evt = new Error("" + (evt || "Unknown XMLHttpRequest Error") )
        }
        evt.statusCode = 0
        return callback(evt, failureResponse)
    }

    // will load the data & process the response in a special response object
    function loadFunc() {
        if (aborted) return
        var status
        clearTimeout(timeoutTimer)
        if(options.useXDR && xhr.status===undefined) {
            //IE8 CORS GET successful response doesn't have a status field, but body is fine
            status = 200
        } else {
            status = (xhr.status === 1223 ? 204 : xhr.status)
        }
        var response = failureResponse
        var err = null

        if (status !== 0){
            response = {
                body: getBody(),
                statusCode: status,
                method: method,
                headers: {},
                url: uri,
                rawRequest: xhr
            }
            if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
                response.headers = parseHeaders(xhr.getAllResponseHeaders())
            }
        } else {
            err = new Error("Internal XMLHttpRequest Error")
        }
        return callback(err, response, response.body)
    }

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new createXHR.XDomainRequest()
        }else{
            xhr = new createXHR.XMLHttpRequest()
        }
    }

    var key
    var aborted
    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var timeoutTimer
    var failureResponse = {
        body: undefined,
        headers: {},
        statusCode: 0,
        method: method,
        url: uri,
        rawRequest: xhr
    }

    if ("json" in options && options.json !== false) {
        isJson = true
        headers["accept"] || headers["Accept"] || (headers["Accept"] = "application/json") //Don't override existing accept header declared by user
        if (method !== "GET" && method !== "HEAD") {
            headers["content-type"] || headers["Content-Type"] || (headers["Content-Type"] = "application/json") //Don't override existing accept header declared by user
            body = JSON.stringify(options.json === true ? body : options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = loadFunc
    xhr.onerror = errorFunc
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    xhr.onabort = function(){
        aborted = true;
    }
    xhr.ontimeout = errorFunc
    xhr.open(method, uri, !sync, options.username, options.password)
    //has to be after open
    if(!sync) {
        xhr.withCredentials = !!options.withCredentials
    }
    // Cannot set timeout with sync request
    // not setting timeout on the xhr object, because of old webkits etc. not handling that correctly
    // both npm's request and jquery 1.x use this kind of timeout, so this is being consistent
    if (!sync && options.timeout > 0 ) {
        timeoutTimer = setTimeout(function(){
            if (aborted) return
            aborted = true//IE9 may still call readystatechange
            xhr.abort("timeout")
            var e = new Error("XMLHttpRequest timeout")
            e.code = "ETIMEDOUT"
            errorFunc(e)
        }, options.timeout )
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers && !isEmpty(options.headers)) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }

    if ("beforeSend" in options &&
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    // Microsoft Edge browser sends "undefined" when send is called with undefined value.
    // XMLHttpRequest spec says to pass null as body to indicate no body
    // See https://github.com/naugtur/xhr/issues/100.
    xhr.send(body || null)

    return xhr


}

function getXml(xhr) {
    // xhr.responseXML will throw Exception "InvalidStateError" or "DOMException"
    // See https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseXML.
    try {
        if (xhr.responseType === "document") {
            return xhr.responseXML
        }
        var firefoxBugTakenEffect = xhr.responseXML && xhr.responseXML.documentElement.nodeName === "parsererror"
        if (xhr.responseType === "" && !firefoxBugTakenEffect) {
            return xhr.responseXML
        }
    } catch (e) {}

    return null
}

function noop() {}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(25);
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = __webpack_require__(14);
exports.Duplex = __webpack_require__(3);
exports.Transform = __webpack_require__(29);
exports.PassThrough = __webpack_require__(65);


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, setImmediate, global) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.



/*<replacement>*/

var pna = __webpack_require__(8);
/*</replacement>*/

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = __webpack_require__(6);
util.inherits = __webpack_require__(4);
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: __webpack_require__(64)
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(26);
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__(9).Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

var destroyImpl = __webpack_require__(27);

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || __webpack_require__(3);

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var writableHwm = options.writableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || __webpack_require__(3);

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;

    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  pna.nextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    pna.nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    pna.nextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    pna.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      pna.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(62).setImmediate, __webpack_require__(1)))

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coordEach", function() { return coordEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coordReduce", function() { return coordReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propEach", function() { return propEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "propReduce", function() { return propReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureEach", function() { return featureEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureReduce", function() { return featureReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coordAll", function() { return coordAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geomEach", function() { return geomEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "geomReduce", function() { return geomReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenEach", function() { return flattenEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenReduce", function() { return flattenReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentEach", function() { return segmentEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "segmentReduce", function() { return segmentReduce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineEach", function() { return lineEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineReduce", function() { return lineReduce; });
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _turf_helpers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Callback for coordEach
 *
 * @callback coordEachCallback
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */

/**
 * Iterate over coordinates in any GeoJSON object, similar to Array.forEach()
 *
 * @name coordEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentCoord, coordIndex, featureIndex, multiFeatureIndex)
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordEach(features, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */
function coordEach(geojson, callback, excludeWrapCoord) {
    // Handles null Geometry -- Skips this GeoJSON
    if (geojson === null) return;
    var j, k, l, geometry, stopG, coords,
        geometryMaybeCollection,
        wrapShrink = 0,
        coordIndex = 0,
        isGeometryCollection,
        type = geojson.type,
        isFeatureCollection = type === 'FeatureCollection',
        isFeature = type === 'Feature',
        stop = isFeatureCollection ? geojson.features.length : 1;

    // This logic may look a little weird. The reason why it is that way
    // is because it's trying to be fast. GeoJSON supports multiple kinds
    // of objects at its root: FeatureCollection, Features, Geometries.
    // This function has the responsibility of handling all of them, and that
    // means that some of the `for` loops you see below actually just don't apply
    // to certain inputs. For instance, if you give this just a
    // Point geometry, then both loops are short-circuited and all we do
    // is gradually rename the input until it's called 'geometry'.
    //
    // This also aims to allocate as few resources as possible: just a
    // few numbers and booleans, rather than any temporary arrays as would
    // be required with the normalization approach.
    for (var featureIndex = 0; featureIndex < stop; featureIndex++) {
        geometryMaybeCollection = (isFeatureCollection ? geojson.features[featureIndex].geometry :
            (isFeature ? geojson.geometry : geojson));
        isGeometryCollection = (geometryMaybeCollection) ? geometryMaybeCollection.type === 'GeometryCollection' : false;
        stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

        for (var geomIndex = 0; geomIndex < stopG; geomIndex++) {
            var multiFeatureIndex = 0;
            var geometryIndex = 0;
            geometry = isGeometryCollection ?
                geometryMaybeCollection.geometries[geomIndex] : geometryMaybeCollection;

            // Handles null Geometry -- Skips this geometry
            if (geometry === null) continue;
            coords = geometry.coordinates;
            var geomType = geometry.type;

            wrapShrink = (excludeWrapCoord && (geomType === 'Polygon' || geomType === 'MultiPolygon')) ? 1 : 0;

            switch (geomType) {
            case null:
                break;
            case 'Point':
                callback(coords, coordIndex, featureIndex, multiFeatureIndex, geometryIndex);
                coordIndex++;
                multiFeatureIndex++;
                break;
            case 'LineString':
            case 'MultiPoint':
                for (j = 0; j < coords.length; j++) {
                    callback(coords[j], coordIndex, featureIndex, multiFeatureIndex, geometryIndex);
                    coordIndex++;
                    if (geomType === 'MultiPoint') multiFeatureIndex++;
                }
                if (geomType === 'LineString') multiFeatureIndex++;
                break;
            case 'Polygon':
            case 'MultiLineString':
                for (j = 0; j < coords.length; j++) {
                    for (k = 0; k < coords[j].length - wrapShrink; k++) {
                        callback(coords[j][k], coordIndex, featureIndex, multiFeatureIndex, geometryIndex);
                        coordIndex++;
                    }
                    if (geomType === 'MultiLineString') multiFeatureIndex++;
                    if (geomType === 'Polygon') geometryIndex++;
                }
                if (geomType === 'Polygon') multiFeatureIndex++;
                break;
            case 'MultiPolygon':
                for (j = 0; j < coords.length; j++) {
                    if (geomType === 'MultiPolygon') geometryIndex = 0;
                    for (k = 0; k < coords[j].length; k++) {
                        for (l = 0; l < coords[j][k].length - wrapShrink; l++) {
                            callback(coords[j][k][l], coordIndex, featureIndex, multiFeatureIndex, geometryIndex);
                            coordIndex++;
                        }
                        geometryIndex++;
                    }
                    multiFeatureIndex++;
                }
                break;
            case 'GeometryCollection':
                for (j = 0; j < geometry.geometries.length; j++)
                    coordEach(geometry.geometries[j], callback, excludeWrapCoord);
                break;
            default:
                throw new Error('Unknown Geometry Type');
            }
        }
    }
}

/**
 * Callback for coordReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback coordReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Array<number>} currentCoord The current coordinate being processed.
 * @param {number} coordIndex The current index of the coordinate being processed.
 * Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 */

/**
 * Reduce coordinates in any GeoJSON object, similar to Array.reduce()
 *
 * @name coordReduce
 * @param {FeatureCollection|Geometry|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentCoord, coordIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.coordReduce(features, function (previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentCoord
 *   //=coordIndex
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentCoord;
 * });
 */
function coordReduce(geojson, callback, initialValue, excludeWrapCoord) {
    var previousValue = initialValue;
    coordEach(geojson, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
        if (coordIndex === 0 && initialValue === undefined) previousValue = currentCoord;
        else previousValue = callback(previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex);
    }, excludeWrapCoord);
    return previousValue;
}

/**
 * Callback for propEach
 *
 * @callback propEachCallback
 * @param {Object} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Iterate over properties in any GeoJSON object, similar to Array.forEach()
 *
 * @name propEach
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentProperties, featureIndex)
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propEach(features, function (currentProperties, featureIndex) {
 *   //=currentProperties
 *   //=featureIndex
 * });
 */
function propEach(geojson, callback) {
    var i;
    switch (geojson.type) {
    case 'FeatureCollection':
        for (i = 0; i < geojson.features.length; i++) {
            callback(geojson.features[i].properties, i);
        }
        break;
    case 'Feature':
        callback(geojson.properties, 0);
        break;
    }
}


/**
 * Callback for propReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback propReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {*} currentProperties The current Properties being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Reduce properties in any GeoJSON object into a single value,
 * similar to how Array.reduce works. However, in this case we lazily run
 * the reduction, so an array of all properties is unnecessary.
 *
 * @name propReduce
 * @param {FeatureCollection|Feature} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentProperties, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.propReduce(features, function (previousValue, currentProperties, featureIndex) {
 *   //=previousValue
 *   //=currentProperties
 *   //=featureIndex
 *   return currentProperties
 * });
 */
function propReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    propEach(geojson, function (currentProperties, featureIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentProperties;
        else previousValue = callback(previousValue, currentProperties, featureIndex);
    });
    return previousValue;
}

/**
 * Callback for featureEach
 *
 * @callback featureEachCallback
 * @param {Feature<any>} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Iterate over features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name featureEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex)
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.featureEach(features, function (currentFeature, featureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 * });
 */
function featureEach(geojson, callback) {
    if (geojson.type === 'Feature') {
        callback(geojson, 0);
    } else if (geojson.type === 'FeatureCollection') {
        for (var i = 0; i < geojson.features.length; i++) {
            callback(geojson.features[i], i);
        }
    }
}

/**
 * Callback for featureReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback featureReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 */

/**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name featureReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {"foo": "bar"}),
 *   turf.point([36, 53], {"hello": "world"})
 * ]);
 *
 * turf.featureReduce(features, function (previousValue, currentFeature, featureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   return currentFeature
 * });
 */
function featureReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    featureEach(geojson, function (currentFeature, featureIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentFeature;
        else previousValue = callback(previousValue, currentFeature, featureIndex);
    });
    return previousValue;
}

/**
 * Get all coordinates from any GeoJSON object.
 *
 * @name coordAll
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @returns {Array<Array<number>>} coordinate position array
 * @example
 * var features = turf.featureCollection([
 *   turf.point([26, 37], {foo: 'bar'}),
 *   turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * var coords = turf.coordAll(features);
 * //= [[26, 37], [36, 53]]
 */
function coordAll(geojson) {
    var coords = [];
    coordEach(geojson, function (coord) {
        coords.push(coord);
    });
    return coords;
}

/**
 * Callback for geomEach
 *
 * @callback geomEachCallback
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */

/**
 * Iterate over each geometry in any GeoJSON object, similar to Array.forEach()
 *
 * @name geomEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomEach(features, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 * });
 */
function geomEach(geojson, callback) {
    var i, j, g, geometry, stopG,
        geometryMaybeCollection,
        isGeometryCollection,
        featureProperties,
        featureBBox,
        featureId,
        featureIndex = 0,
        isFeatureCollection = geojson.type === 'FeatureCollection',
        isFeature = geojson.type === 'Feature',
        stop = isFeatureCollection ? geojson.features.length : 1;

    // This logic may look a little weird. The reason why it is that way
    // is because it's trying to be fast. GeoJSON supports multiple kinds
    // of objects at its root: FeatureCollection, Features, Geometries.
    // This function has the responsibility of handling all of them, and that
    // means that some of the `for` loops you see below actually just don't apply
    // to certain inputs. For instance, if you give this just a
    // Point geometry, then both loops are short-circuited and all we do
    // is gradually rename the input until it's called 'geometry'.
    //
    // This also aims to allocate as few resources as possible: just a
    // few numbers and booleans, rather than any temporary arrays as would
    // be required with the normalization approach.
    for (i = 0; i < stop; i++) {

        geometryMaybeCollection = (isFeatureCollection ? geojson.features[i].geometry :
            (isFeature ? geojson.geometry : geojson));
        featureProperties = (isFeatureCollection ? geojson.features[i].properties :
            (isFeature ? geojson.properties : {}));
        featureBBox = (isFeatureCollection ? geojson.features[i].bbox :
            (isFeature ? geojson.bbox : undefined));
        featureId = (isFeatureCollection ? geojson.features[i].id :
            (isFeature ? geojson.id : undefined));
        isGeometryCollection = (geometryMaybeCollection) ? geometryMaybeCollection.type === 'GeometryCollection' : false;
        stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

        for (g = 0; g < stopG; g++) {
            geometry = isGeometryCollection ?
                geometryMaybeCollection.geometries[g] : geometryMaybeCollection;

            // Handle null Geometry
            if (geometry === null) {
                callback(null, featureIndex, featureProperties, featureBBox, featureId);
                continue;
            }
            switch (geometry.type) {
            case 'Point':
            case 'LineString':
            case 'MultiPoint':
            case 'Polygon':
            case 'MultiLineString':
            case 'MultiPolygon': {
                callback(geometry, featureIndex, featureProperties, featureBBox, featureId);
                break;
            }
            case 'GeometryCollection': {
                for (j = 0; j < geometry.geometries.length; j++) {
                    callback(geometry.geometries[j], featureIndex, featureProperties, featureBBox, featureId);
                }
                break;
            }
            default:
                throw new Error('Unknown Geometry Type');
            }
        }
        // Only increase `featureIndex` per each feature
        featureIndex++;
    }
}

/**
 * Callback for geomReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback geomReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Geometry} currentGeometry The current Geometry being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {Object} featureProperties The current Feature Properties being processed.
 * @param {Array<number>} featureBBox The current Feature BBox being processed.
 * @param {number|string} featureId The current Feature Id being processed.
 */

/**
 * Reduce geometry in any GeoJSON object, similar to Array.reduce().
 *
 * @name geomReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.point([36, 53], {hello: 'world'})
 * ]);
 *
 * turf.geomReduce(features, function (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
 *   //=previousValue
 *   //=currentGeometry
 *   //=featureIndex
 *   //=featureProperties
 *   //=featureBBox
 *   //=featureId
 *   return currentGeometry
 * });
 */
function geomReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    geomEach(geojson, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentGeometry;
        else previousValue = callback(previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId);
    });
    return previousValue;
}

/**
 * Callback for flattenEach
 *
 * @callback flattenEachCallback
 * @param {Feature} currentFeature The current flattened feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */

/**
 * Iterate over flattened features in any GeoJSON object, similar to
 * Array.forEach.
 *
 * @name flattenEach
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (currentFeature, featureIndex, multiFeatureIndex)
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenEach(features, function (currentFeature, featureIndex, multiFeatureIndex) {
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 * });
 */
function flattenEach(geojson, callback) {
    geomEach(geojson, function (geometry, featureIndex, properties, bbox, id) {
        // Callback for single geometry
        var type = (geometry === null) ? null : geometry.type;
        switch (type) {
        case null:
        case 'Point':
        case 'LineString':
        case 'Polygon':
            callback(Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["feature"])(geometry, properties, {bbox: bbox, id: id}), featureIndex, 0);
            return;
        }

        var geomType;

        // Callback for multi-geometry
        switch (type) {
        case 'MultiPoint':
            geomType = 'Point';
            break;
        case 'MultiLineString':
            geomType = 'LineString';
            break;
        case 'MultiPolygon':
            geomType = 'Polygon';
            break;
        }

        geometry.coordinates.forEach(function (coordinate, multiFeatureIndex) {
            var geom = {
                type: geomType,
                coordinates: coordinate
            };
            callback(Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["feature"])(geom, properties), featureIndex, multiFeatureIndex);
        });

    });
}

/**
 * Callback for flattenReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback flattenReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature} currentFeature The current Feature being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 */

/**
 * Reduce flattened features in any GeoJSON object, similar to Array.reduce().
 *
 * @name flattenReduce
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
 * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex, multiFeatureIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var features = turf.featureCollection([
 *     turf.point([26, 37], {foo: 'bar'}),
 *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
 * ]);
 *
 * turf.flattenReduce(features, function (previousValue, currentFeature, featureIndex, multiFeatureIndex) {
 *   //=previousValue
 *   //=currentFeature
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   return currentFeature
 * });
 */
function flattenReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    flattenEach(geojson, function (currentFeature, featureIndex, multiFeatureIndex) {
        if (featureIndex === 0 && multiFeatureIndex === 0 && initialValue === undefined) previousValue = currentFeature;
        else previousValue = callback(previousValue, currentFeature, featureIndex, multiFeatureIndex);
    });
    return previousValue;
}

/**
 * Callback for segmentEach
 *
 * @callback segmentEachCallback
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 * @returns {void}
 */

/**
 * Iterate over 2-vertex line segment in any GeoJSON object, similar to Array.forEach()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex)
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentEach(polygon, function (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //=currentSegment
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   //=segmentIndex
 * });
 *
 * // Calculate the total number of segments
 * var total = 0;
 * turf.segmentEach(polygon, function () {
 *     total++;
 * });
 */
function segmentEach(geojson, callback) {
    flattenEach(geojson, function (feature$$1, featureIndex, multiFeatureIndex) {
        var segmentIndex = 0;

        // Exclude null Geometries
        if (!feature$$1.geometry) return;
        // (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
        var type = feature$$1.geometry.type;
        if (type === 'Point' || type === 'MultiPoint') return;

        // Generate 2-vertex line segments
        coordReduce(feature$$1, function (previousCoords, currentCoord, coordIndex, featureIndexCoord, mutliPartIndexCoord, geometryIndex) {
            var currentSegment = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["lineString"])([previousCoords, currentCoord], feature$$1.properties);
            callback(currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex);
            segmentIndex++;
            return currentCoord;
        });
    });
}

/**
 * Callback for segmentReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback segmentReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentSegment The current Segment being processed.
 * @param {number} featureIndex The current index of the Feature being processed.
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
 * @param {number} geometryIndex The current index of the Geometry being processed.
 * @param {number} segmentIndex The current index of the Segment being processed.
 */

/**
 * Reduce 2-vertex line segment in any GeoJSON object, similar to Array.reduce()
 * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
 *
 * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
 * @param {Function} callback a method that takes (previousValue, currentSegment, currentIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {void}
 * @example
 * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
 *
 * // Iterate over GeoJSON by 2-vertex segments
 * turf.segmentReduce(polygon, function (previousSegment, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
 *   //= previousSegment
 *   //= currentSegment
 *   //= featureIndex
 *   //= multiFeatureIndex
 *   //= geometryIndex
 *   //= segmentInex
 *   return currentSegment
 * });
 *
 * // Calculate the total number of segments
 * var initialValue = 0
 * var total = turf.segmentReduce(polygon, function (previousValue) {
 *     previousValue++;
 *     return previousValue;
 * }, initialValue);
 */
function segmentReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    var started = false;
    segmentEach(geojson, function (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
        if (started === false && initialValue === undefined) previousValue = currentSegment;
        else previousValue = callback(previousValue, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex);
        started = true;
    });
    return previousValue;
}

/**
 * Callback for lineEach
 *
 * @callback lineEachCallback
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */

/**
 * Iterate over line or ring coordinates in LineString, Polygon, MultiLineString, MultiPolygon Features or Geometries,
 * similar to Array.forEach.
 *
 * @name lineEach
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @example
 * var multiLine = turf.multiLineString([
 *   [[26, 37], [35, 45]],
 *   [[36, 53], [38, 50], [41, 55]]
 * ]);
 *
 * turf.lineEach(multiLine, function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 * });
 */
function lineEach(geojson, callback) {
    // validation
    if (!geojson) throw new Error('geojson is required');

    flattenEach(geojson, function (feature$$1, featureIndex, multiFeatureIndex) {
        if (feature$$1.geometry === null) return;
        var type = feature$$1.geometry.type;
        var coords = feature$$1.geometry.coordinates;
        switch (type) {
        case 'LineString':
            callback(feature$$1, featureIndex, multiFeatureIndex, 0, 0);
            break;
        case 'Polygon':
            for (var geometryIndex = 0; geometryIndex < coords.length; geometryIndex++) {
                callback(Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["lineString"])(coords[geometryIndex], feature$$1.properties), featureIndex, multiFeatureIndex, geometryIndex);
            }
            break;
        }
    });
}

/**
 * Callback for lineReduce
 *
 * The first time the callback function is called, the values provided as arguments depend
 * on whether the reduce method has an initialValue argument.
 *
 * If an initialValue is provided to the reduce method:
 *  - The previousValue argument is initialValue.
 *  - The currentValue argument is the value of the first element present in the array.
 *
 * If an initialValue is not provided:
 *  - The previousValue argument is the value of the first element present in the array.
 *  - The currentValue argument is the value of the second element present in the array.
 *
 * @callback lineReduceCallback
 * @param {*} previousValue The accumulated value previously returned in the last invocation
 * of the callback, or initialValue, if supplied.
 * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed.
 * @param {number} featureIndex The current index of the Feature being processed
 * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
 * @param {number} geometryIndex The current index of the Geometry being processed
 */

/**
 * Reduce features in any GeoJSON object, similar to Array.reduce().
 *
 * @name lineReduce
 * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
 * @param {Function} callback a method that takes (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex)
 * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
 * @returns {*} The value that results from the reduction.
 * @example
 * var multiPoly = turf.multiPolygon([
 *   turf.polygon([[[12,48],[2,41],[24,38],[12,48]], [[9,44],[13,41],[13,45],[9,44]]]),
 *   turf.polygon([[[5, 5], [0, 0], [2, 2], [4, 4], [5, 5]]])
 * ]);
 *
 * turf.lineReduce(multiPoly, function (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
 *   //=previousValue
 *   //=currentLine
 *   //=featureIndex
 *   //=multiFeatureIndex
 *   //=geometryIndex
 *   return currentLine
 * });
 */
function lineReduce(geojson, callback, initialValue) {
    var previousValue = initialValue;
    lineEach(geojson, function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
        if (featureIndex === 0 && initialValue === undefined) previousValue = currentLine;
        else previousValue = callback(previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex);
    });
    return previousValue;
}




/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// http://en.wikipedia.org/wiki/Haversine_formula
// http://www.movable-type.co.uk/scripts/latlong.html
var helpers_1 = __webpack_require__(0);
var invariant_1 = __webpack_require__(5);
/**
 * Takes a {@link Point} and calculates the location of a destination point given a distance in
 * degrees, radians, miles, or kilometers; and bearing in degrees.
 * This uses the [Haversine formula](http://en.wikipedia.org/wiki/Haversine_formula) to account for global curvature.
 *
 * @name destination
 * @param {Coord} origin starting point
 * @param {number} distance distance from the origin point
 * @param {number} bearing ranging from -180 to 180
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] miles, kilometers, degrees, or radians
 * @param {Object} [options.properties={}] Translate properties to Point
 * @returns {Feature<Point>} destination point
 * @example
 * var point = turf.point([-75.343, 39.984]);
 * var distance = 50;
 * var bearing = 90;
 * var options = {units: 'miles'};
 *
 * var destination = turf.destination(point, distance, bearing, options);
 *
 * //addToMap
 * var addToMap = [point, destination]
 * destination.properties['marker-color'] = '#f00';
 * point.properties['marker-color'] = '#0f0';
 */
function destination(origin, distance, bearing, options) {
    if (options === void 0) { options = {}; }
    // Handle input
    var coordinates1 = invariant_1.getCoord(origin);
    var longitude1 = helpers_1.degreesToRadians(coordinates1[0]);
    var latitude1 = helpers_1.degreesToRadians(coordinates1[1]);
    var bearingRad = helpers_1.degreesToRadians(bearing);
    var radians = helpers_1.lengthToRadians(distance, options.units);
    // Main
    var latitude2 = Math.asin(Math.sin(latitude1) * Math.cos(radians) +
        Math.cos(latitude1) * Math.sin(radians) * Math.cos(bearingRad));
    var longitude2 = longitude1 + Math.atan2(Math.sin(bearingRad) * Math.sin(radians) * Math.cos(latitude1), Math.cos(radians) - Math.sin(latitude1) * Math.sin(latitude2));
    var lng = helpers_1.radiansToDegrees(longitude2);
    var lat = helpers_1.radiansToDegrees(latitude2);
    return helpers_1.point([lng, lat], options.properties);
}
exports.default = destination;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Pbf;

var ieee754 = __webpack_require__(20);

function Pbf(buf) {
    this.buf = ArrayBuffer.isView && ArrayBuffer.isView(buf) ? buf : new Uint8Array(buf || 0);
    this.pos = 0;
    this.type = 0;
    this.length = this.buf.length;
}

Pbf.Varint  = 0; // varint: int32, int64, uint32, uint64, sint32, sint64, bool, enum
Pbf.Fixed64 = 1; // 64-bit: double, fixed64, sfixed64
Pbf.Bytes   = 2; // length-delimited: string, bytes, embedded messages, packed repeated fields
Pbf.Fixed32 = 5; // 32-bit: float, fixed32, sfixed32

var SHIFT_LEFT_32 = (1 << 16) * (1 << 16),
    SHIFT_RIGHT_32 = 1 / SHIFT_LEFT_32;

Pbf.prototype = {

    destroy: function() {
        this.buf = null;
    },

    // === READING =================================================================

    readFields: function(readField, result, end) {
        end = end || this.length;

        while (this.pos < end) {
            var val = this.readVarint(),
                tag = val >> 3,
                startPos = this.pos;

            this.type = val & 0x7;
            readField(tag, result, this);

            if (this.pos === startPos) this.skip(val);
        }
        return result;
    },

    readMessage: function(readField, result) {
        return this.readFields(readField, result, this.readVarint() + this.pos);
    },

    readFixed32: function() {
        var val = readUInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
    },

    readSFixed32: function() {
        var val = readInt32(this.buf, this.pos);
        this.pos += 4;
        return val;
    },

    // 64-bit int handling is based on github.com/dpw/node-buffer-more-ints (MIT-licensed)

    readFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readUInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readSFixed64: function() {
        var val = readUInt32(this.buf, this.pos) + readInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
        this.pos += 8;
        return val;
    },

    readFloat: function() {
        var val = ieee754.read(this.buf, this.pos, true, 23, 4);
        this.pos += 4;
        return val;
    },

    readDouble: function() {
        var val = ieee754.read(this.buf, this.pos, true, 52, 8);
        this.pos += 8;
        return val;
    },

    readVarint: function(isSigned) {
        var buf = this.buf,
            val, b;

        b = buf[this.pos++]; val  =  b & 0x7f;        if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 7;  if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 14; if (b < 0x80) return val;
        b = buf[this.pos++]; val |= (b & 0x7f) << 21; if (b < 0x80) return val;
        b = buf[this.pos];   val |= (b & 0x0f) << 28;

        return readVarintRemainder(val, isSigned, this);
    },

    readVarint64: function() { // for compatibility with v2.0.1
        return this.readVarint(true);
    },

    readSVarint: function() {
        var num = this.readVarint();
        return num % 2 === 1 ? (num + 1) / -2 : num / 2; // zigzag encoding
    },

    readBoolean: function() {
        return Boolean(this.readVarint());
    },

    readString: function() {
        var end = this.readVarint() + this.pos,
            str = readUtf8(this.buf, this.pos, end);
        this.pos = end;
        return str;
    },

    readBytes: function() {
        var end = this.readVarint() + this.pos,
            buffer = this.buf.subarray(this.pos, end);
        this.pos = end;
        return buffer;
    },

    // verbose for performance reasons; doesn't affect gzipped size

    readPackedVarint: function(arr, isSigned) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readVarint(isSigned));
        return arr;
    },
    readPackedSVarint: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSVarint());
        return arr;
    },
    readPackedBoolean: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readBoolean());
        return arr;
    },
    readPackedFloat: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFloat());
        return arr;
    },
    readPackedDouble: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readDouble());
        return arr;
    },
    readPackedFixed32: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFixed32());
        return arr;
    },
    readPackedSFixed32: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSFixed32());
        return arr;
    },
    readPackedFixed64: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readFixed64());
        return arr;
    },
    readPackedSFixed64: function(arr) {
        var end = readPackedEnd(this);
        arr = arr || [];
        while (this.pos < end) arr.push(this.readSFixed64());
        return arr;
    },

    skip: function(val) {
        var type = val & 0x7;
        if (type === Pbf.Varint) while (this.buf[this.pos++] > 0x7f) {}
        else if (type === Pbf.Bytes) this.pos = this.readVarint() + this.pos;
        else if (type === Pbf.Fixed32) this.pos += 4;
        else if (type === Pbf.Fixed64) this.pos += 8;
        else throw new Error('Unimplemented type: ' + type);
    },

    // === WRITING =================================================================

    writeTag: function(tag, type) {
        this.writeVarint((tag << 3) | type);
    },

    realloc: function(min) {
        var length = this.length || 16;

        while (length < this.pos + min) length *= 2;

        if (length !== this.length) {
            var buf = new Uint8Array(length);
            buf.set(this.buf);
            this.buf = buf;
            this.length = length;
        }
    },

    finish: function() {
        this.length = this.pos;
        this.pos = 0;
        return this.buf.subarray(0, this.length);
    },

    writeFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
    },

    writeSFixed32: function(val) {
        this.realloc(4);
        writeInt32(this.buf, val, this.pos);
        this.pos += 4;
    },

    writeFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeSFixed64: function(val) {
        this.realloc(8);
        writeInt32(this.buf, val & -1, this.pos);
        writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
        this.pos += 8;
    },

    writeVarint: function(val) {
        val = +val || 0;

        if (val > 0xfffffff || val < 0) {
            writeBigVarint(val, this);
            return;
        }

        this.realloc(4);

        this.buf[this.pos++] =           val & 0x7f  | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
        this.buf[this.pos++] =   (val >>> 7) & 0x7f;
    },

    writeSVarint: function(val) {
        this.writeVarint(val < 0 ? -val * 2 - 1 : val * 2);
    },

    writeBoolean: function(val) {
        this.writeVarint(Boolean(val));
    },

    writeString: function(str) {
        str = String(str);
        this.realloc(str.length * 4);

        this.pos++; // reserve 1 byte for short string length

        var startPos = this.pos;
        // write the string directly to the buffer and see how much was written
        this.pos = writeUtf8(this.buf, str, this.pos);
        var len = this.pos - startPos;

        if (len >= 0x80) makeRoomForExtraLength(startPos, len, this);

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writeFloat: function(val) {
        this.realloc(4);
        ieee754.write(this.buf, val, this.pos, true, 23, 4);
        this.pos += 4;
    },

    writeDouble: function(val) {
        this.realloc(8);
        ieee754.write(this.buf, val, this.pos, true, 52, 8);
        this.pos += 8;
    },

    writeBytes: function(buffer) {
        var len = buffer.length;
        this.writeVarint(len);
        this.realloc(len);
        for (var i = 0; i < len; i++) this.buf[this.pos++] = buffer[i];
    },

    writeRawMessage: function(fn, obj) {
        this.pos++; // reserve 1 byte for short message length

        // write the message directly to the buffer and see how much was written
        var startPos = this.pos;
        fn(obj, this);
        var len = this.pos - startPos;

        if (len >= 0x80) makeRoomForExtraLength(startPos, len, this);

        // finally, write the message length in the reserved place and restore the position
        this.pos = startPos - 1;
        this.writeVarint(len);
        this.pos += len;
    },

    writeMessage: function(tag, fn, obj) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeRawMessage(fn, obj);
    },

    writePackedVarint:   function(tag, arr) { this.writeMessage(tag, writePackedVarint, arr);   },
    writePackedSVarint:  function(tag, arr) { this.writeMessage(tag, writePackedSVarint, arr);  },
    writePackedBoolean:  function(tag, arr) { this.writeMessage(tag, writePackedBoolean, arr);  },
    writePackedFloat:    function(tag, arr) { this.writeMessage(tag, writePackedFloat, arr);    },
    writePackedDouble:   function(tag, arr) { this.writeMessage(tag, writePackedDouble, arr);   },
    writePackedFixed32:  function(tag, arr) { this.writeMessage(tag, writePackedFixed32, arr);  },
    writePackedSFixed32: function(tag, arr) { this.writeMessage(tag, writePackedSFixed32, arr); },
    writePackedFixed64:  function(tag, arr) { this.writeMessage(tag, writePackedFixed64, arr);  },
    writePackedSFixed64: function(tag, arr) { this.writeMessage(tag, writePackedSFixed64, arr); },

    writeBytesField: function(tag, buffer) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeBytes(buffer);
    },
    writeFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFixed32(val);
    },
    writeSFixed32Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeSFixed32(val);
    },
    writeFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeFixed64(val);
    },
    writeSFixed64Field: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeSFixed64(val);
    },
    writeVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeVarint(val);
    },
    writeSVarintField: function(tag, val) {
        this.writeTag(tag, Pbf.Varint);
        this.writeSVarint(val);
    },
    writeStringField: function(tag, str) {
        this.writeTag(tag, Pbf.Bytes);
        this.writeString(str);
    },
    writeFloatField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed32);
        this.writeFloat(val);
    },
    writeDoubleField: function(tag, val) {
        this.writeTag(tag, Pbf.Fixed64);
        this.writeDouble(val);
    },
    writeBooleanField: function(tag, val) {
        this.writeVarintField(tag, Boolean(val));
    }
};

function readVarintRemainder(l, s, p) {
    var buf = p.buf,
        h, b;

    b = buf[p.pos++]; h  = (b & 0x70) >> 4;  if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 3;  if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 10; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 17; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x7f) << 24; if (b < 0x80) return toNum(l, h, s);
    b = buf[p.pos++]; h |= (b & 0x01) << 31; if (b < 0x80) return toNum(l, h, s);

    throw new Error('Expected varint not more than 10 bytes');
}

function readPackedEnd(pbf) {
    return pbf.type === Pbf.Bytes ?
        pbf.readVarint() + pbf.pos : pbf.pos + 1;
}

function toNum(low, high, isSigned) {
    if (isSigned) {
        return high * 0x100000000 + (low >>> 0);
    }

    return ((high >>> 0) * 0x100000000) + (low >>> 0);
}

function writeBigVarint(val, pbf) {
    var low, high;

    if (val >= 0) {
        low  = (val % 0x100000000) | 0;
        high = (val / 0x100000000) | 0;
    } else {
        low  = ~(-val % 0x100000000);
        high = ~(-val / 0x100000000);

        if (low ^ 0xffffffff) {
            low = (low + 1) | 0;
        } else {
            low = 0;
            high = (high + 1) | 0;
        }
    }

    if (val >= 0x10000000000000000 || val < -0x10000000000000000) {
        throw new Error('Given varint doesn\'t fit into 10 bytes');
    }

    pbf.realloc(10);

    writeBigVarintLow(low, high, pbf);
    writeBigVarintHigh(high, pbf);
}

function writeBigVarintLow(low, high, pbf) {
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
    pbf.buf[pbf.pos]   = low & 0x7f;
}

function writeBigVarintHigh(high, pbf) {
    var lsb = (high & 0x07) << 4;

    pbf.buf[pbf.pos++] |= lsb         | ((high >>>= 3) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
    pbf.buf[pbf.pos++]  = high & 0x7f;
}

function makeRoomForExtraLength(startPos, len, pbf) {
    var extraLen =
        len <= 0x3fff ? 1 :
        len <= 0x1fffff ? 2 :
        len <= 0xfffffff ? 3 : Math.ceil(Math.log(len) / (Math.LN2 * 7));

    // if 1 byte isn't enough for encoding message length, shift the data to the right
    pbf.realloc(extraLen);
    for (var i = pbf.pos - 1; i >= startPos; i--) pbf.buf[i + extraLen] = pbf.buf[i];
}

function writePackedVarint(arr, pbf)   { for (var i = 0; i < arr.length; i++) pbf.writeVarint(arr[i]);   }
function writePackedSVarint(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeSVarint(arr[i]);  }
function writePackedFloat(arr, pbf)    { for (var i = 0; i < arr.length; i++) pbf.writeFloat(arr[i]);    }
function writePackedDouble(arr, pbf)   { for (var i = 0; i < arr.length; i++) pbf.writeDouble(arr[i]);   }
function writePackedBoolean(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeBoolean(arr[i]);  }
function writePackedFixed32(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeFixed32(arr[i]);  }
function writePackedSFixed32(arr, pbf) { for (var i = 0; i < arr.length; i++) pbf.writeSFixed32(arr[i]); }
function writePackedFixed64(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeFixed64(arr[i]);  }
function writePackedSFixed64(arr, pbf) { for (var i = 0; i < arr.length; i++) pbf.writeSFixed64(arr[i]); }

// Buffer code below from https://github.com/feross/buffer, MIT-licensed

function readUInt32(buf, pos) {
    return ((buf[pos]) |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16)) +
        (buf[pos + 3] * 0x1000000);
}

function writeInt32(buf, val, pos) {
    buf[pos] = val;
    buf[pos + 1] = (val >>> 8);
    buf[pos + 2] = (val >>> 16);
    buf[pos + 3] = (val >>> 24);
}

function readInt32(buf, pos) {
    return ((buf[pos]) |
        (buf[pos + 1] << 8) |
        (buf[pos + 2] << 16)) +
        (buf[pos + 3] << 24);
}

function readUtf8(buf, pos, end) {
    var str = '';
    var i = pos;

    while (i < end) {
        var b0 = buf[i];
        var c = null; // codepoint
        var bytesPerSequence =
            b0 > 0xEF ? 4 :
            b0 > 0xDF ? 3 :
            b0 > 0xBF ? 2 : 1;

        if (i + bytesPerSequence > end) break;

        var b1, b2, b3;

        if (bytesPerSequence === 1) {
            if (b0 < 0x80) {
                c = b0;
            }
        } else if (bytesPerSequence === 2) {
            b1 = buf[i + 1];
            if ((b1 & 0xC0) === 0x80) {
                c = (b0 & 0x1F) << 0x6 | (b1 & 0x3F);
                if (c <= 0x7F) {
                    c = null;
                }
            }
        } else if (bytesPerSequence === 3) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80) {
                c = (b0 & 0xF) << 0xC | (b1 & 0x3F) << 0x6 | (b2 & 0x3F);
                if (c <= 0x7FF || (c >= 0xD800 && c <= 0xDFFF)) {
                    c = null;
                }
            }
        } else if (bytesPerSequence === 4) {
            b1 = buf[i + 1];
            b2 = buf[i + 2];
            b3 = buf[i + 3];
            if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
                c = (b0 & 0xF) << 0x12 | (b1 & 0x3F) << 0xC | (b2 & 0x3F) << 0x6 | (b3 & 0x3F);
                if (c <= 0xFFFF || c >= 0x110000) {
                    c = null;
                }
            }
        }

        if (c === null) {
            c = 0xFFFD;
            bytesPerSequence = 1;

        } else if (c > 0xFFFF) {
            c -= 0x10000;
            str += String.fromCharCode(c >>> 10 & 0x3FF | 0xD800);
            c = 0xDC00 | c & 0x3FF;
        }

        str += String.fromCharCode(c);
        i += bytesPerSequence;
    }

    return str;
}

function writeUtf8(buf, str, pos) {
    for (var i = 0, c, lead; i < str.length; i++) {
        c = str.charCodeAt(i); // code point

        if (c > 0xD7FF && c < 0xE000) {
            if (lead) {
                if (c < 0xDC00) {
                    buf[pos++] = 0xEF;
                    buf[pos++] = 0xBF;
                    buf[pos++] = 0xBD;
                    lead = c;
                    continue;
                } else {
                    c = lead - 0xD800 << 10 | c - 0xDC00 | 0x10000;
                    lead = null;
                }
            } else {
                if (c > 0xDBFF || (i + 1 === str.length)) {
                    buf[pos++] = 0xEF;
                    buf[pos++] = 0xBF;
                    buf[pos++] = 0xBD;
                } else {
                    lead = c;
                }
                continue;
            }
        } else if (lead) {
            buf[pos++] = 0xEF;
            buf[pos++] = 0xBF;
            buf[pos++] = 0xBD;
            lead = null;
        }

        if (c < 0x80) {
            buf[pos++] = c;
        } else {
            if (c < 0x800) {
                buf[pos++] = c >> 0x6 | 0xC0;
            } else {
                if (c < 0x10000) {
                    buf[pos++] = c >> 0xC | 0xE0;
                } else {
                    buf[pos++] = c >> 0x12 | 0xF0;
                    buf[pos++] = c >> 0xC & 0x3F | 0x80;
                }
                buf[pos++] = c >> 0x6 & 0x3F | 0x80;
            }
            buf[pos++] = c & 0x3F | 0x80;
        }
    }
    return pos;
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports.VectorTile = __webpack_require__(45);
module.exports.VectorTileFeature = __webpack_require__(22);
module.exports.VectorTileLayer = __webpack_require__(21);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VectorTileFeature = __webpack_require__(22);

module.exports = VectorTileLayer;

function VectorTileLayer(pbf, end) {
    // Public
    this.version = 1;
    this.name = null;
    this.extent = 4096;
    this.length = 0;

    // Private
    this._pbf = pbf;
    this._keys = [];
    this._values = [];
    this._features = [];

    pbf.readFields(readLayer, this, end);

    this.length = this._features.length;
}

function readLayer(tag, layer, pbf) {
    if (tag === 15) layer.version = pbf.readVarint();
    else if (tag === 1) layer.name = pbf.readString();
    else if (tag === 5) layer.extent = pbf.readVarint();
    else if (tag === 2) layer._features.push(pbf.pos);
    else if (tag === 3) layer._keys.push(pbf.readString());
    else if (tag === 4) layer._values.push(readValueMessage(pbf));
}

function readValueMessage(pbf) {
    var value = null,
        end = pbf.readVarint() + pbf.pos;

    while (pbf.pos < end) {
        var tag = pbf.readVarint() >> 3;

        value = tag === 1 ? pbf.readString() :
            tag === 2 ? pbf.readFloat() :
            tag === 3 ? pbf.readDouble() :
            tag === 4 ? pbf.readVarint64() :
            tag === 5 ? pbf.readVarint() :
            tag === 6 ? pbf.readSVarint() :
            tag === 7 ? pbf.readBoolean() : null;
    }

    return value;
}

// return feature `i` from this layer as a `VectorTileFeature`
VectorTileLayer.prototype.feature = function(i) {
    if (i < 0 || i >= this._features.length) throw new Error('feature index out of bounds');

    this._pbf.pos = this._features[i];

    var end = this._pbf.readVarint() + this._pbf.pos;
    return new VectorTileFeature(this._pbf, end, this.extent, this._keys, this._values);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Point = __webpack_require__(46);

module.exports = VectorTileFeature;

function VectorTileFeature(pbf, end, extent, keys, values) {
    // Public
    this.properties = {};
    this.extent = extent;
    this.type = 0;

    // Private
    this._pbf = pbf;
    this._geometry = -1;
    this._keys = keys;
    this._values = values;

    pbf.readFields(readFeature, this, end);
}

function readFeature(tag, feature, pbf) {
    if (tag == 1) feature.id = pbf.readVarint();
    else if (tag == 2) readTag(pbf, feature);
    else if (tag == 3) feature.type = pbf.readVarint();
    else if (tag == 4) feature._geometry = pbf.pos;
}

function readTag(pbf, feature) {
    var end = pbf.readVarint() + pbf.pos;

    while (pbf.pos < end) {
        var key = feature._keys[pbf.readVarint()],
            value = feature._values[pbf.readVarint()];
        feature.properties[key] = value;
    }
}

VectorTileFeature.types = ['Unknown', 'Point', 'LineString', 'Polygon'];

VectorTileFeature.prototype.loadGeometry = function() {
    var pbf = this._pbf;
    pbf.pos = this._geometry;

    var end = pbf.readVarint() + pbf.pos,
        cmd = 1,
        length = 0,
        x = 0,
        y = 0,
        lines = [],
        line;

    while (pbf.pos < end) {
        if (length <= 0) {
            var cmdLen = pbf.readVarint();
            cmd = cmdLen & 0x7;
            length = cmdLen >> 3;
        }

        length--;

        if (cmd === 1 || cmd === 2) {
            x += pbf.readSVarint();
            y += pbf.readSVarint();

            if (cmd === 1) { // moveTo
                if (line) lines.push(line);
                line = [];
            }

            line.push(new Point(x, y));

        } else if (cmd === 7) {

            // Workaround for https://github.com/mapbox/mapnik-vector-tile/issues/90
            if (line) {
                line.push(line[0].clone()); // closePolygon
            }

        } else {
            throw new Error('unknown command ' + cmd);
        }
    }

    if (line) lines.push(line);

    return lines;
};

VectorTileFeature.prototype.bbox = function() {
    var pbf = this._pbf;
    pbf.pos = this._geometry;

    var end = pbf.readVarint() + pbf.pos,
        cmd = 1,
        length = 0,
        x = 0,
        y = 0,
        x1 = Infinity,
        x2 = -Infinity,
        y1 = Infinity,
        y2 = -Infinity;

    while (pbf.pos < end) {
        if (length <= 0) {
            var cmdLen = pbf.readVarint();
            cmd = cmdLen & 0x7;
            length = cmdLen >> 3;
        }

        length--;

        if (cmd === 1 || cmd === 2) {
            x += pbf.readSVarint();
            y += pbf.readSVarint();
            if (x < x1) x1 = x;
            if (x > x2) x2 = x;
            if (y < y1) y1 = y;
            if (y > y2) y2 = y;

        } else if (cmd !== 7) {
            throw new Error('unknown command ' + cmd);
        }
    }

    return [x1, y1, x2, y2];
};

VectorTileFeature.prototype.toGeoJSON = function(x, y, z) {
    var size = this.extent * Math.pow(2, z),
        x0 = this.extent * x,
        y0 = this.extent * y,
        coords = this.loadGeometry(),
        type = VectorTileFeature.types[this.type],
        i, j;

    function project(line) {
        for (var j = 0; j < line.length; j++) {
            var p = line[j], y2 = 180 - (p.y + y0) * 360 / size;
            line[j] = [
                (p.x + x0) * 360 / size - 180,
                360 / Math.PI * Math.atan(Math.exp(y2 * Math.PI / 180)) - 90
            ];
        }
    }

    switch (this.type) {
    case 1:
        var points = [];
        for (i = 0; i < coords.length; i++) {
            points[i] = coords[i][0];
        }
        coords = points;
        project(coords);
        break;

    case 2:
        for (i = 0; i < coords.length; i++) {
            project(coords[i]);
        }
        break;

    case 3:
        coords = classifyRings(coords);
        for (i = 0; i < coords.length; i++) {
            for (j = 0; j < coords[i].length; j++) {
                project(coords[i][j]);
            }
        }
        break;
    }

    if (coords.length === 1) {
        coords = coords[0];
    } else {
        type = 'Multi' + type;
    }

    var result = {
        type: "Feature",
        geometry: {
            type: type,
            coordinates: coords
        },
        properties: this.properties
    };

    if ('id' in this) {
        result.id = this.id;
    }

    return result;
};

// classifies an array of rings into polygons with outer rings and holes

function classifyRings(rings) {
    var len = rings.length;

    if (len <= 1) return [rings];

    var polygons = [],
        polygon,
        ccw;

    for (var i = 0; i < len; i++) {
        var area = signedArea(rings[i]);
        if (area === 0) continue;

        if (ccw === undefined) ccw = area < 0;

        if (ccw === area < 0) {
            if (polygon) polygons.push(polygon);
            polygon = [rings[i]];

        } else {
            polygon.push(rings[i]);
        }
    }
    if (polygon) polygons.push(polygon);

    return polygons;
}

function signedArea(ring) {
    var sum = 0;
    for (var i = 0, len = ring.length, j = len - 1, p1, p2; i < len; j = i++) {
        p1 = ring[i];
        p2 = ring[j];
        sum += (p2.x - p1.x) * (p1.y + p2.y);
    }
    return sum;
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var iota = __webpack_require__(49)
var isBuffer = __webpack_require__(50)

var hasTypedArrays  = ((typeof Float64Array) !== "undefined")

function compare1st(a, b) {
  return a[0] - b[0]
}

function order() {
  var stride = this.stride
  var terms = new Array(stride.length)
  var i
  for(i=0; i<terms.length; ++i) {
    terms[i] = [Math.abs(stride[i]), i]
  }
  terms.sort(compare1st)
  var result = new Array(terms.length)
  for(i=0; i<result.length; ++i) {
    result[i] = terms[i][1]
  }
  return result
}

function compileConstructor(dtype, dimension) {
  var className = ["View", dimension, "d", dtype].join("")
  if(dimension < 0) {
    className = "View_Nil" + dtype
  }
  var useGetters = (dtype === "generic")

  if(dimension === -1) {
    //Special case for trivial arrays
    var code =
      "function "+className+"(a){this.data=a;};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return -1};\
proto.size=0;\
proto.dimension=-1;\
proto.shape=proto.stride=proto.order=[];\
proto.lo=proto.hi=proto.transpose=proto.step=\
function(){return new "+className+"(this.data);};\
proto.get=proto.set=function(){};\
proto.pick=function(){return null};\
return function construct_"+className+"(a){return new "+className+"(a);}"
    var procedure = new Function(code)
    return procedure()
  } else if(dimension === 0) {
    //Special case for 0d arrays
    var code =
      "function "+className+"(a,d) {\
this.data = a;\
this.offset = d\
};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return this.offset};\
proto.dimension=0;\
proto.size=1;\
proto.shape=\
proto.stride=\
proto.order=[];\
proto.lo=\
proto.hi=\
proto.transpose=\
proto.step=function "+className+"_copy() {\
return new "+className+"(this.data,this.offset)\
};\
proto.pick=function "+className+"_pick(){\
return TrivialArray(this.data);\
};\
proto.valueOf=proto.get=function "+className+"_get(){\
return "+(useGetters ? "this.data.get(this.offset)" : "this.data[this.offset]")+
"};\
proto.set=function "+className+"_set(v){\
return "+(useGetters ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v")+"\
};\
return function construct_"+className+"(a,b,c,d){return new "+className+"(a,d)}"
    var procedure = new Function("TrivialArray", code)
    return procedure(CACHED_CONSTRUCTORS[dtype][0])
  }

  var code = ["'use strict'"]

  //Create constructor for view
  var indices = iota(dimension)
  var args = indices.map(function(i) { return "i"+i })
  var index_str = "this.offset+" + indices.map(function(i) {
        return "this.stride[" + i + "]*i" + i
      }).join("+")
  var shapeArg = indices.map(function(i) {
      return "b"+i
    }).join(",")
  var strideArg = indices.map(function(i) {
      return "c"+i
    }).join(",")
  code.push(
    "function "+className+"(a," + shapeArg + "," + strideArg + ",d){this.data=a",
      "this.shape=[" + shapeArg + "]",
      "this.stride=[" + strideArg + "]",
      "this.offset=d|0}",
    "var proto="+className+".prototype",
    "proto.dtype='"+dtype+"'",
    "proto.dimension="+dimension)

  //view.size:
  code.push("Object.defineProperty(proto,'size',{get:function "+className+"_size(){\
return "+indices.map(function(i) { return "this.shape["+i+"]" }).join("*"),
"}})")

  //view.order:
  if(dimension === 1) {
    code.push("proto.order=[0]")
  } else {
    code.push("Object.defineProperty(proto,'order',{get:")
    if(dimension < 4) {
      code.push("function "+className+"_order(){")
      if(dimension === 2) {
        code.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})")
      } else if(dimension === 3) {
        code.push(
"var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);\
if(s0>s1){\
if(s1>s2){\
return [2,1,0];\
}else if(s0>s2){\
return [1,2,0];\
}else{\
return [1,0,2];\
}\
}else if(s0>s2){\
return [2,0,1];\
}else if(s2>s1){\
return [0,1,2];\
}else{\
return [0,2,1];\
}}})")
      }
    } else {
      code.push("ORDER})")
    }
  }

  //view.set(i0, ..., v):
  code.push(
"proto.set=function "+className+"_set("+args.join(",")+",v){")
  if(useGetters) {
    code.push("return this.data.set("+index_str+",v)}")
  } else {
    code.push("return this.data["+index_str+"]=v}")
  }

  //view.get(i0, ...):
  code.push("proto.get=function "+className+"_get("+args.join(",")+"){")
  if(useGetters) {
    code.push("return this.data.get("+index_str+")}")
  } else {
    code.push("return this.data["+index_str+"]}")
  }

  //view.index:
  code.push(
    "proto.index=function "+className+"_index(", args.join(), "){return "+index_str+"}")

  //view.hi():
  code.push("proto.hi=function "+className+"_hi("+args.join(",")+"){return new "+className+"(this.data,"+
    indices.map(function(i) {
      return ["(typeof i",i,"!=='number'||i",i,"<0)?this.shape[", i, "]:i", i,"|0"].join("")
    }).join(",")+","+
    indices.map(function(i) {
      return "this.stride["+i + "]"
    }).join(",")+",this.offset)}")

  //view.lo():
  var a_vars = indices.map(function(i) { return "a"+i+"=this.shape["+i+"]" })
  var c_vars = indices.map(function(i) { return "c"+i+"=this.stride["+i+"]" })
  code.push("proto.lo=function "+className+"_lo("+args.join(",")+"){var b=this.offset,d=0,"+a_vars.join(",")+","+c_vars.join(","))
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'&&i"+i+">=0){\
d=i"+i+"|0;\
b+=c"+i+"*d;\
a"+i+"-=d}")
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a"+i
    }).join(",")+","+
    indices.map(function(i) {
      return "c"+i
    }).join(",")+",b)}")

  //view.step():
  code.push("proto.step=function "+className+"_step("+args.join(",")+"){var "+
    indices.map(function(i) {
      return "a"+i+"=this.shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "b"+i+"=this.stride["+i+"]"
    }).join(",")+",c=this.offset,d=0,ceil=Math.ceil")
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'){\
d=i"+i+"|0;\
if(d<0){\
c+=b"+i+"*(a"+i+"-1);\
a"+i+"=ceil(-a"+i+"/d)\
}else{\
a"+i+"=ceil(a"+i+"/d)\
}\
b"+i+"*=d\
}")
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a" + i
    }).join(",")+","+
    indices.map(function(i) {
      return "b" + i
    }).join(",")+",c)}")

  //view.transpose():
  var tShape = new Array(dimension)
  var tStride = new Array(dimension)
  for(var i=0; i<dimension; ++i) {
    tShape[i] = "a[i"+i+"]"
    tStride[i] = "b[i"+i+"]"
  }
  code.push("proto.transpose=function "+className+"_transpose("+args+"){"+
    args.map(function(n,idx) { return n + "=(" + n + "===undefined?" + idx + ":" + n + "|0)"}).join(";"),
    "var a=this.shape,b=this.stride;return new "+className+"(this.data,"+tShape.join(",")+","+tStride.join(",")+",this.offset)}")

  //view.pick():
  code.push("proto.pick=function "+className+"_pick("+args+"){var a=[],b=[],c=this.offset")
  for(var i=0; i<dimension; ++i) {
    code.push("if(typeof i"+i+"==='number'&&i"+i+">=0){c=(c+this.stride["+i+"]*i"+i+")|0}else{a.push(this.shape["+i+"]);b.push(this.stride["+i+"])}")
  }
  code.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}")

  //Add return statement
  code.push("return function construct_"+className+"(data,shape,stride,offset){return new "+className+"(data,"+
    indices.map(function(i) {
      return "shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "stride["+i+"]"
    }).join(",")+",offset)}")

  //Compile procedure
  var procedure = new Function("CTOR_LIST", "ORDER", code.join("\n"))
  return procedure(CACHED_CONSTRUCTORS[dtype], order)
}

function arrayDType(data) {
  if(isBuffer(data)) {
    return "buffer"
  }
  if(hasTypedArrays) {
    switch(Object.prototype.toString.call(data)) {
      case "[object Float64Array]":
        return "float64"
      case "[object Float32Array]":
        return "float32"
      case "[object Int8Array]":
        return "int8"
      case "[object Int16Array]":
        return "int16"
      case "[object Int32Array]":
        return "int32"
      case "[object Uint8Array]":
        return "uint8"
      case "[object Uint16Array]":
        return "uint16"
      case "[object Uint32Array]":
        return "uint32"
      case "[object Uint8ClampedArray]":
        return "uint8_clamped"
    }
  }
  if(Array.isArray(data)) {
    return "array"
  }
  return "generic"
}

var CACHED_CONSTRUCTORS = {
  "float32":[],
  "float64":[],
  "int8":[],
  "int16":[],
  "int32":[],
  "uint8":[],
  "uint16":[],
  "uint32":[],
  "array":[],
  "uint8_clamped":[],
  "buffer":[],
  "generic":[]
}

;(function() {
  for(var id in CACHED_CONSTRUCTORS) {
    CACHED_CONSTRUCTORS[id].push(compileConstructor(id, -1))
  }
});

function wrappedNDArrayCtor(data, shape, stride, offset) {
  if(data === undefined) {
    var ctor = CACHED_CONSTRUCTORS.array[0]
    return ctor([])
  } else if(typeof data === "number") {
    data = [data]
  }
  if(shape === undefined) {
    shape = [ data.length ]
  }
  var d = shape.length
  if(stride === undefined) {
    stride = new Array(d)
    for(var i=d-1, sz=1; i>=0; --i) {
      stride[i] = sz
      sz *= shape[i]
    }
  }
  if(offset === undefined) {
    offset = 0
    for(var i=0; i<d; ++i) {
      if(stride[i] < 0) {
        offset -= (shape[i]-1)*stride[i]
      }
    }
  }
  var dtype = arrayDType(data)
  var ctor_list = CACHED_CONSTRUCTORS[dtype]
  while(ctor_list.length <= d+1) {
    ctor_list.push(compileConstructor(dtype, ctor_list.length-1))
  }
  var ctor = ctor_list[d+1]
  return ctor(data, shape, stride, offset)
}

module.exports = wrappedNDArrayCtor


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var pna = __webpack_require__(8);
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = __webpack_require__(23);
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = __webpack_require__(12).EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = __webpack_require__(26);
/*</replacement>*/

/*<replacement>*/

var Buffer = __webpack_require__(9).Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

/*<replacement>*/
var util = __webpack_require__(6);
util.inherits = __webpack_require__(4);
/*</replacement>*/

/*<replacement>*/
var debugUtil = __webpack_require__(59);
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = __webpack_require__(60);
var destroyImpl = __webpack_require__(27);
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream) {
  Duplex = Duplex || __webpack_require__(3);

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var readableHwm = options.readableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = __webpack_require__(28).StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || __webpack_require__(3);

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = __webpack_require__(28).StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    pna.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        pna.nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    pna.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;

  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  this._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    pna.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12).EventEmitter;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*<replacement>*/

var pna = __webpack_require__(8);
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      pna.nextTick(emitErrorNT, this, err);
    }
    return this;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      pna.nextTick(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });

  return this;
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __webpack_require__(9).Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.



module.exports = Transform;

var Duplex = __webpack_require__(3);

/*<replacement>*/
var util = __webpack_require__(6);
util.inherits = __webpack_require__(4);
/*</replacement>*/

util.inherits(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return this.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);

  cb(er);

  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function') {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this2 = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this2.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');

  if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__30__;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var meta_1 = __webpack_require__(15);
// Note: change RADIUS => earthRadius
var RADIUS = 6378137;
/**
 * Takes one or more features and returns their area in square meters.
 *
 * @name area
 * @param {GeoJSON} geojson input GeoJSON feature(s)
 * @returns {number} area in square meters
 * @example
 * var polygon = turf.polygon([[[125, -15], [113, -22], [154, -27], [144, -15], [125, -15]]]);
 *
 * var area = turf.area(polygon);
 *
 * //addToMap
 * var addToMap = [polygon]
 * polygon.properties.area = area
 */
function area(geojson) {
    return meta_1.geomReduce(geojson, function (value, geom) {
        return value + calculateArea(geom);
    }, 0);
}
exports.default = area;
/**
 * Calculate Area
 *
 * @private
 * @param {Geometry} geom GeoJSON Geometries
 * @returns {number} area
 */
function calculateArea(geom) {
    var total = 0;
    var i;
    switch (geom.type) {
        case "Polygon":
            return polygonArea(geom.coordinates);
        case "MultiPolygon":
            for (i = 0; i < geom.coordinates.length; i++) {
                total += polygonArea(geom.coordinates[i]);
            }
            return total;
        case "Point":
        case "MultiPoint":
        case "LineString":
        case "MultiLineString":
            return 0;
    }
    return 0;
}
function polygonArea(coords) {
    var total = 0;
    if (coords && coords.length > 0) {
        total += Math.abs(ringArea(coords[0]));
        for (var i = 1; i < coords.length; i++) {
            total -= Math.abs(ringArea(coords[i]));
        }
    }
    return total;
}
/**
 * @private
 * Calculate the approximate area of the polygon were it projected onto the earth.
 * Note that this area will be positive if ring is oriented clockwise, otherwise it will be negative.
 *
 * Reference:
 * Robert. G. Chamberlain and William H. Duquette, "Some Algorithms for Polygons on a Sphere",
 * JPL Publication 07-03, Jet Propulsion
 * Laboratory, Pasadena, CA, June 2007 http://trs-new.jpl.nasa.gov/dspace/handle/2014/40409
 *
 * @param {Array<Array<number>>} coords Ring Coordinates
 * @returns {number} The approximate signed geodesic area of the polygon in square meters.
 */
function ringArea(coords) {
    var p1;
    var p2;
    var p3;
    var lowerIndex;
    var middleIndex;
    var upperIndex;
    var i;
    var total = 0;
    var coordsLength = coords.length;
    if (coordsLength > 2) {
        for (i = 0; i < coordsLength; i++) {
            if (i === coordsLength - 2) {
                lowerIndex = coordsLength - 2;
                middleIndex = coordsLength - 1;
                upperIndex = 0;
            }
            else if (i === coordsLength - 1) {
                lowerIndex = coordsLength - 1;
                middleIndex = 0;
                upperIndex = 1;
            }
            else {
                lowerIndex = i;
                middleIndex = i + 1;
                upperIndex = i + 2;
            }
            p1 = coords[lowerIndex];
            p2 = coords[middleIndex];
            p3 = coords[upperIndex];
            total += (rad(p3[0]) - rad(p1[0])) * Math.sin(rad(p2[1]));
        }
        total = total * RADIUS * RADIUS / 2;
    }
    return total;
}
function rad(num) {
    return num * Math.PI / 180;
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var tilebelt = __webpack_require__(37);

/**
 * Given a geometry, create cells and return them in a format easily readable
 * by any software that reads GeoJSON.
 *
 * @alias geojson
 * @param {Object} geom GeoJSON geometry
 * @param {Object} limits an object with min_zoom and max_zoom properties
 * specifying the minimum and maximum level to be tiled.
 * @returns {Object} FeatureCollection of cells formatted as GeoJSON Features
 */
exports.geojson = function (geom, limits) {
    return {
        type: 'FeatureCollection',
        features: getTiles(geom, limits).map(tileToFeature)
    };
};

function tileToFeature(t) {
    return {
        type: 'Feature',
        geometry: tilebelt.tileToGeoJSON(t),
        properties: {}
    };
}

/**
 * Given a geometry, create cells and return them in their raw form,
 * as an array of cell identifiers.
 *
 * @alias tiles
 * @param {Object} geom GeoJSON geometry
 * @param {Object} limits an object with min_zoom and max_zoom properties
 * specifying the minimum and maximum level to be tiled.
 * @returns {Array<Array<number>>} An array of tiles given as [x, y, z] arrays
 */
exports.tiles = getTiles;

/**
 * Given a geometry, create cells and return them as
 * [quadkey](http://msdn.microsoft.com/en-us/library/bb259689.aspx) indexes.
 *
 * @alias indexes
 * @param {Object} geom GeoJSON geometry
 * @param {Object} limits an object with min_zoom and max_zoom properties
 * specifying the minimum and maximum level to be tiled.
 * @returns {Array<String>} An array of tiles given as quadkeys.
 */
exports.indexes = function (geom, limits) {
    return getTiles(geom, limits).map(tilebelt.tileToQuadkey);
};

function getTiles(geom, limits) {
    var i, tile,
        coords = geom.coordinates,
        maxZoom = limits.max_zoom,
        tileHash = {},
        tiles = [];

    if (geom.type === 'Point') {
        return [tilebelt.pointToTile(coords[0], coords[1], maxZoom)];

    } else if (geom.type === 'MultiPoint') {
        for (i = 0; i < coords.length; i++) {
            tile = tilebelt.pointToTile(coords[i][0], coords[i][1], maxZoom);
            tileHash[toID(tile[0], tile[1], tile[2])] = true;
        }
    } else if (geom.type === 'LineString') {
        lineCover(tileHash, coords, maxZoom);

    } else if (geom.type === 'MultiLineString') {
        for (i = 0; i < coords.length; i++) {
            lineCover(tileHash, coords[i], maxZoom);
        }
    } else if (geom.type === 'Polygon') {
        polygonCover(tileHash, tiles, coords, maxZoom);

    } else if (geom.type === 'MultiPolygon') {
        for (i = 0; i < coords.length; i++) {
            polygonCover(tileHash, tiles, coords[i], maxZoom);
        }
    } else {
        throw new Error('Geometry type not implemented');
    }

    if (limits.min_zoom !== maxZoom) {
        // sync tile hash and tile array so that both contain the same tiles
        var len = tiles.length;
        appendHashTiles(tileHash, tiles);
        for (i = 0; i < len; i++) {
            var t = tiles[i];
            tileHash[toID(t[0], t[1], t[2])] = true;
        }
        return mergeTiles(tileHash, tiles, limits);
    }

    appendHashTiles(tileHash, tiles);
    return tiles;
}

function mergeTiles(tileHash, tiles, limits) {
    var mergedTiles = [];

    for (var z = limits.max_zoom; z > limits.min_zoom; z--) {

        var parentTileHash = {};
        var parentTiles = [];

        for (var i = 0; i < tiles.length; i++) {
            var t = tiles[i];

            if (t[0] % 2 === 0 && t[1] % 2 === 0) {
                var id2 = toID(t[0] + 1, t[1], z),
                    id3 = toID(t[0], t[1] + 1, z),
                    id4 = toID(t[0] + 1, t[1] + 1, z);

                if (tileHash[id2] && tileHash[id3] && tileHash[id4]) {
                    tileHash[toID(t[0], t[1], t[2])] = false;
                    tileHash[id2] = false;
                    tileHash[id3] = false;
                    tileHash[id4] = false;

                    var parentTile = [t[0] / 2, t[1] / 2, z - 1];

                    if (z - 1 === limits.min_zoom) mergedTiles.push(parentTile);
                    else {
                        parentTileHash[toID(t[0] / 2, t[1] / 2, z - 1)] = true;
                        parentTiles.push(parentTile);
                    }
                }
            }
        }

        for (i = 0; i < tiles.length; i++) {
            t = tiles[i];
            if (tileHash[toID(t[0], t[1], t[2])]) mergedTiles.push(t);
        }

        tileHash = parentTileHash;
        tiles = parentTiles;
    }

    return mergedTiles;
}

function polygonCover(tileHash, tileArray, geom, zoom) {
    var intersections = [];

    for (var i = 0; i < geom.length; i++) {
        var ring = [];
        lineCover(tileHash, geom[i], zoom, ring);

        for (var j = 0, len = ring.length, k = len - 1; j < len; k = j++) {
            var m = (j + 1) % len;
            var y = ring[j][1];

            // add interesction if it's not local extremum or duplicate
            if ((y > ring[k][1] || y > ring[m][1]) && // not local minimum
                (y < ring[k][1] || y < ring[m][1]) && // not local maximum
                y !== ring[m][1]) intersections.push(ring[j]);
        }
    }

    intersections.sort(compareTiles); // sort by y, then x

    for (i = 0; i < intersections.length; i += 2) {
        // fill tiles between pairs of intersections
        y = intersections[i][1];
        for (var x = intersections[i][0] + 1; x < intersections[i + 1][0]; x++) {
            var id = toID(x, y, zoom);
            if (!tileHash[id]) {
                tileArray.push([x, y, zoom]);
            }
        }
    }
}

function compareTiles(a, b) {
    return (a[1] - b[1]) || (a[0] - b[0]);
}

function lineCover(tileHash, coords, maxZoom, ring) {
    var prevX, prevY;

    for (var i = 0; i < coords.length - 1; i++) {
        var start = tilebelt.pointToTileFraction(coords[i][0], coords[i][1], maxZoom),
            stop = tilebelt.pointToTileFraction(coords[i + 1][0], coords[i + 1][1], maxZoom),
            x0 = start[0],
            y0 = start[1],
            x1 = stop[0],
            y1 = stop[1],
            dx = x1 - x0,
            dy = y1 - y0;

        if (dy === 0 && dx === 0) continue;

        var sx = dx > 0 ? 1 : -1,
            sy = dy > 0 ? 1 : -1,
            x = Math.floor(x0),
            y = Math.floor(y0),
            tMaxX = dx === 0 ? Infinity : Math.abs(((dx > 0 ? 1 : 0) + x - x0) / dx),
            tMaxY = dy === 0 ? Infinity : Math.abs(((dy > 0 ? 1 : 0) + y - y0) / dy),
            tdx = Math.abs(sx / dx),
            tdy = Math.abs(sy / dy);

        if (x !== prevX || y !== prevY) {
            tileHash[toID(x, y, maxZoom)] = true;
            if (ring && y !== prevY) ring.push([x, y]);
            prevX = x;
            prevY = y;
        }

        while (tMaxX < 1 || tMaxY < 1) {
            if (tMaxX < tMaxY) {
                tMaxX += tdx;
                x += sx;
            } else {
                tMaxY += tdy;
                y += sy;
            }
            tileHash[toID(x, y, maxZoom)] = true;
            if (ring && y !== prevY) ring.push([x, y]);
            prevX = x;
            prevY = y;
        }
    }

    if (ring && y === ring[0][1]) ring.pop();
}

function appendHashTiles(hash, tiles) {
    var keys = Object.keys(hash);
    for (var i = 0; i < keys.length; i++) {
        tiles.push(fromID(+keys[i]));
    }
}

function toID(x, y, z) {
    var dim = 2 * (1 << z);
    return ((dim * y + x) * 32) + z;
}

function fromID(id) {
    var z = id % 32,
        dim = 2 * (1 << z),
        xy = ((id - z) / 32),
        x = xy % dim,
        y = ((xy - x) / dim) % dim;
    return [x, y, z];
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, Buffer) {

var path          = __webpack_require__(48)
var ndarray       = __webpack_require__(24)
var GifReader     = __webpack_require__(51).GifReader
var pack          = __webpack_require__(52)
var through       = __webpack_require__(57)
var parseDataURI  = __webpack_require__(70)

function defaultImage(url, cb) {
  var img = new Image()
  img.crossOrigin = "Anonymous"
  img.onload = function() {
    var canvas = document.createElement('canvas')
    canvas.width = img.width
    canvas.height = img.height
    var context = canvas.getContext('2d')
    context.drawImage(img, 0, 0)
    var pixels = context.getImageData(0, 0, img.width, img.height)
    cb(null, ndarray(new Uint8Array(pixels.data), [img.width, img.height, 4], [4, 4*img.width, 1], 0))
  }
  img.onerror = function(err) {
    cb(err)
  }
  img.src = url
}

//Animated gif loading
function handleGif(data, cb) {
  var reader
  try {
    reader = new GifReader(data)
  } catch(err) {
    cb(err)
    return
  }
  if(reader.numFrames() > 0) {
    var nshape = [reader.numFrames(), reader.height, reader.width, 4]
    var ndata = new Uint8Array(nshape[0] * nshape[1] * nshape[2] * nshape[3])
    var result = ndarray(ndata, nshape)
    try {
      for(var i=0; i<reader.numFrames(); ++i) {
        reader.decodeAndBlitFrameRGBA(i, ndata.subarray(
          result.index(i, 0, 0, 0),
          result.index(i+1, 0, 0, 0)))
      }
    } catch(err) {
      cb(err)
      return
    }
    cb(null, result.transpose(0,2,1))
  } else {
    var nshape = [reader.height, reader.width, 4]
    var ndata = new Uint8Array(nshape[0] * nshape[1] * nshape[2])
    var result = ndarray(ndata, nshape)
    try {
      reader.decodeAndBlitFrameRGBA(0, ndata)
    } catch(err) {
      cb(err)
      return
    }
    cb(null, result.transpose(1,0))
  }
}

function httpGif(url, cb) {
  var xhr          = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.responseType = 'arraybuffer'
  if(xhr.overrideMimeType){
    xhr.overrideMimeType('application/binary')
  }
  xhr.onerror = function(err) {
    cb(err)
  }
  xhr.onload = function() {
    if(xhr.readyState !== 4) {
      return
    }
    var data = new Uint8Array(xhr.response)
    handleGif(data, cb)
    return
  }
  xhr.send()
}

function copyBuffer(buffer) {
  if(buffer[0] === undefined) {
    var n = buffer.length
    var result = new Uint8Array(n)
    for(var i=0; i<n; ++i) {
      result[i] = buffer.get(i)
    }
    return result
  } else {
    return new Uint8Array(buffer)
  }
}

function dataGif(url, cb) {
  process.nextTick(function() {
    try {
      var buffer = parseDataURI(url)
      if(buffer) {
        handleGif(copyBuffer(buffer), cb)
      } else {
        cb(new Error('Error parsing data URI'))
      }
    } catch(err) {
      cb(err)
    }
  })
}

module.exports = function getPixels(url, type, cb) {
  if(!cb) {
    cb = type
    type = ''
  }
  var ext = path.extname(url)
  switch(type || ext.toUpperCase()) {
    case '.GIF':
      httpGif(url, cb)
    break
    default:
      if(Buffer.isBuffer(url)) {
        url = 'data:' + type + ';base64,' + url.toString('base64')
      }
      if(url.indexOf('data:image/gif;') === 0) {
        dataGif(url, cb)
      } else {
        defaultImage(url, cb)
      }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2), __webpack_require__(7).Buffer))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var SphericalMercator = (function(){

// Closures including constants and other precalculated values.
var cache = {},
    EPSLN = 1.0e-10,
    D2R = Math.PI / 180,
    R2D = 180 / Math.PI,
    // 900913 properties.
    A = 6378137.0,
    MAXEXTENT = 20037508.342789244;

function isFloat(n){
    return Number(n) === n && n % 1 !== 0;
}

// SphericalMercator constructor: precaches calculations
// for fast tile lookups.
function SphericalMercator(options) {
    options = options || {};
    this.size = options.size || 256;
    if (!cache[this.size]) {
        var size = this.size;
        var c = cache[this.size] = {};
        c.Bc = [];
        c.Cc = [];
        c.zc = [];
        c.Ac = [];
        for (var d = 0; d < 30; d++) {
            c.Bc.push(size / 360);
            c.Cc.push(size / (2 * Math.PI));
            c.zc.push(size / 2);
            c.Ac.push(size);
            size *= 2;
        }
    }
    this.Bc = cache[this.size].Bc;
    this.Cc = cache[this.size].Cc;
    this.zc = cache[this.size].zc;
    this.Ac = cache[this.size].Ac;
};

// Convert lon lat to screen pixel value
//
// - `ll` {Array} `[lon, lat]` array of geographic coordinates.
// - `zoom` {Number} zoom level.
SphericalMercator.prototype.px = function(ll, zoom) {
  if (isFloat(zoom)) {
    var size = this.size * Math.pow(2, zoom);
    var d = size / 2;
    var bc = (size / 360);
    var cc = (size / (2 * Math.PI));
    var ac = size;
    var f = Math.min(Math.max(Math.sin(D2R * ll[1]), -0.9999), 0.9999);
    var x = d + ll[0] * bc;
    var y = d + 0.5 * Math.log((1 + f) / (1 - f)) * -cc;
    (x > ac) && (x = ac);
    (y > ac) && (y = ac);
    //(x < 0) && (x = 0);
    //(y < 0) && (y = 0);
    return [x, y];
  } else {
    var d = this.zc[zoom];
    var f = Math.min(Math.max(Math.sin(D2R * ll[1]), -0.9999), 0.9999);
    var x = Math.round(d + ll[0] * this.Bc[zoom]);
    var y = Math.round(d + 0.5 * Math.log((1 + f) / (1 - f)) * (-this.Cc[zoom]));
    (x > this.Ac[zoom]) && (x = this.Ac[zoom]);
    (y > this.Ac[zoom]) && (y = this.Ac[zoom]);
    //(x < 0) && (x = 0);
    //(y < 0) && (y = 0);
    return [x, y];
  }
};

// Convert screen pixel value to lon lat
//
// - `px` {Array} `[x, y]` array of geographic coordinates.
// - `zoom` {Number} zoom level.
SphericalMercator.prototype.ll = function(px, zoom) {
  if (isFloat(zoom)) {
    var size = this.size * Math.pow(2, zoom);
    var bc = (size / 360);
    var cc = (size / (2 * Math.PI));
    var zc = size / 2;
    var g = (px[1] - zc) / -cc;
    var lon = (px[0] - zc) / bc;
    var lat = R2D * (2 * Math.atan(Math.exp(g)) - 0.5 * Math.PI);
    return [lon, lat];
  } else {
    var g = (px[1] - this.zc[zoom]) / (-this.Cc[zoom]);
    var lon = (px[0] - this.zc[zoom]) / this.Bc[zoom];
    var lat = R2D * (2 * Math.atan(Math.exp(g)) - 0.5 * Math.PI);
    return [lon, lat];
  }
};

// Convert tile xyz value to bbox of the form `[w, s, e, n]`
//
// - `x` {Number} x (longitude) number.
// - `y` {Number} y (latitude) number.
// - `zoom` {Number} zoom.
// - `tms_style` {Boolean} whether to compute using tms-style.
// - `srs` {String} projection for resulting bbox (WGS84|900913).
// - `return` {Array} bbox array of values in form `[w, s, e, n]`.
SphericalMercator.prototype.bbox = function(x, y, zoom, tms_style, srs) {
    // Convert xyz into bbox with srs WGS84
    if (tms_style) {
        y = (Math.pow(2, zoom) - 1) - y;
    }
    // Use +y to make sure it's a number to avoid inadvertent concatenation.
    var ll = [x * this.size, (+y + 1) * this.size]; // lower left
    // Use +x to make sure it's a number to avoid inadvertent concatenation.
    var ur = [(+x + 1) * this.size, y * this.size]; // upper right
    var bbox = this.ll(ll, zoom).concat(this.ll(ur, zoom));

    // If web mercator requested reproject to 900913.
    if (srs === '900913') {
        return this.convert(bbox, '900913');
    } else {
        return bbox;
    }
};

// Convert bbox to xyx bounds
//
// - `bbox` {Number} bbox in the form `[w, s, e, n]`.
// - `zoom` {Number} zoom.
// - `tms_style` {Boolean} whether to compute using tms-style.
// - `srs` {String} projection of input bbox (WGS84|900913).
// - `@return` {Object} XYZ bounds containing minX, maxX, minY, maxY properties.
SphericalMercator.prototype.xyz = function(bbox, zoom, tms_style, srs) {
    // If web mercator provided reproject to WGS84.
    if (srs === '900913') {
        bbox = this.convert(bbox, 'WGS84');
    }

    var ll = [bbox[0], bbox[1]]; // lower left
    var ur = [bbox[2], bbox[3]]; // upper right
    var px_ll = this.px(ll, zoom);
    var px_ur = this.px(ur, zoom);
    // Y = 0 for XYZ is the top hence minY uses px_ur[1].
    var x = [ Math.floor(px_ll[0] / this.size), Math.floor((px_ur[0] - 1) / this.size) ];
    var y = [ Math.floor(px_ur[1] / this.size), Math.floor((px_ll[1] - 1) / this.size) ];
    var bounds = {
        minX: Math.min.apply(Math, x) < 0 ? 0 : Math.min.apply(Math, x),
        minY: Math.min.apply(Math, y) < 0 ? 0 : Math.min.apply(Math, y),
        maxX: Math.max.apply(Math, x),
        maxY: Math.max.apply(Math, y)
    };
    if (tms_style) {
        var tms = {
            minY: (Math.pow(2, zoom) - 1) - bounds.maxY,
            maxY: (Math.pow(2, zoom) - 1) - bounds.minY
        };
        bounds.minY = tms.minY;
        bounds.maxY = tms.maxY;
    }
    return bounds;
};

// Convert projection of given bbox.
//
// - `bbox` {Number} bbox in the form `[w, s, e, n]`.
// - `to` {String} projection of output bbox (WGS84|900913). Input bbox
//   assumed to be the "other" projection.
// - `@return` {Object} bbox with reprojected coordinates.
SphericalMercator.prototype.convert = function(bbox, to) {
    if (to === '900913') {
        return this.forward(bbox.slice(0, 2)).concat(this.forward(bbox.slice(2,4)));
    } else {
        return this.inverse(bbox.slice(0, 2)).concat(this.inverse(bbox.slice(2,4)));
    }
};

// Convert lon/lat values to 900913 x/y.
SphericalMercator.prototype.forward = function(ll) {
    var xy = [
        A * ll[0] * D2R,
        A * Math.log(Math.tan((Math.PI*0.25) + (0.5 * ll[1] * D2R)))
    ];
    // if xy value is beyond maxextent (e.g. poles), return maxextent.
    (xy[0] > MAXEXTENT) && (xy[0] = MAXEXTENT);
    (xy[0] < -MAXEXTENT) && (xy[0] = -MAXEXTENT);
    (xy[1] > MAXEXTENT) && (xy[1] = MAXEXTENT);
    (xy[1] < -MAXEXTENT) && (xy[1] = -MAXEXTENT);
    return xy;
};

// Convert 900913 x/y values to lon/lat.
SphericalMercator.prototype.inverse = function(xy) {
    return [
        (xy[0] * R2D / A),
        ((Math.PI*0.5) - 2.0 * Math.atan(Math.exp(-xy[1] / A))) * R2D
    ];
};

return SphericalMercator;

})();

if (true) {
    module.exports = exports = SphericalMercator;
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __webpack_require__(0);
var invariant_1 = __webpack_require__(5);
var martinez = __importStar(__webpack_require__(36));
/**
 * Takes two {@link Polygon|polygon} or {@link MultiPolygon|multi-polygon} geometries and
 * finds their polygonal intersection. If they don't intersect, returns null.
 *
 * @name intersect
 * @param {Feature<Polygon | MultiPolygon>} poly1 the first polygon or multipolygon
 * @param {Feature<Polygon | MultiPolygon>} poly2 the second polygon or multipolygon
 * @param {Object} [options={}] Optional Parameters
 * @param {Object} [options.properties={}] Translate GeoJSON Properties to Feature
 * @returns {Feature|null} returns a feature representing the area they share (either a {@link Polygon} or
 * {@link MultiPolygon}). If they do not share any area, returns `null`.
 * @example
 * var poly1 = turf.polygon([[
 *   [-122.801742, 45.48565],
 *   [-122.801742, 45.60491],
 *   [-122.584762, 45.60491],
 *   [-122.584762, 45.48565],
 *   [-122.801742, 45.48565]
 * ]]);
 *
 * var poly2 = turf.polygon([[
 *   [-122.520217, 45.535693],
 *   [-122.64038, 45.553967],
 *   [-122.720031, 45.526554],
 *   [-122.669906, 45.507309],
 *   [-122.723464, 45.446643],
 *   [-122.532577, 45.408574],
 *   [-122.487258, 45.477466],
 *   [-122.520217, 45.535693]
 * ]]);
 *
 * var intersection = turf.intersect(poly1, poly2);
 *
 * //addToMap
 * var addToMap = [poly1, poly2, intersection];
 */
function intersect(poly1, poly2, options) {
    if (options === void 0) { options = {}; }
    var geom1 = invariant_1.getGeom(poly1);
    var geom2 = invariant_1.getGeom(poly2);
    if (geom1.type === "Polygon" && geom2.type === "Polygon") {
        var intersection = martinez.intersection(geom1.coordinates, geom2.coordinates);
        if (intersection === null || intersection.length === 0) {
            return null;
        }
        if (intersection.length === 1) {
            var start = intersection[0][0][0];
            var end = intersection[0][0][intersection[0][0].length - 1];
            if (start[0] === end[0] && start[1] === end[1]) {
                return helpers_1.polygon(intersection[0], options.properties);
            }
            return null;
        }
        return helpers_1.multiPolygon(intersection, options.properties);
    }
    else if (geom1.type === "MultiPolygon") {
        var resultCoords = [];
        // iterate through the polygon and run intersect with each part, adding to the resultCoords.
        for (var _i = 0, _a = geom1.coordinates; _i < _a.length; _i++) {
            var coords = _a[_i];
            var subGeom = invariant_1.getGeom(helpers_1.polygon(coords));
            var subIntersection = intersect(subGeom, geom2);
            if (subIntersection) {
                var subIntGeom = invariant_1.getGeom(subIntersection);
                if (subIntGeom.type === "Polygon") {
                    resultCoords.push(subIntGeom.coordinates);
                }
                else if (subIntGeom.type === "MultiPolygon") {
                    resultCoords = resultCoords.concat(subIntGeom.coordinates);
                }
                else {
                    throw new Error("intersection is invalid");
                }
            }
        }
        // Make a polygon with the result
        if (resultCoords.length === 0) {
            return null;
        }
        if (resultCoords.length === 1) {
            return helpers_1.polygon(resultCoords[0], options.properties);
        }
        else {
            return helpers_1.multiPolygon(resultCoords, options.properties);
        }
    }
    else if (geom2.type === "MultiPolygon") {
        // geom1 is a polygon and geom2 a multiPolygon,
        // put the multiPolygon first and fallback to the previous case.
        return intersect(geom2, geom1);
    }
    else {
        // handle invalid geometry types
        throw new Error("poly1 and poly2 must be either polygons or multiPolygons");
    }
}
exports.default = intersect;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * martinez v0.4.3
 * Martinez polygon clipping algorithm, does boolean operation on polygons (multipolygons, polygons with holes etc): intersection, union, difference, xor
 *
 * @author Alex Milevski <info@w8r.name>
 * @license MIT
 * @preserve
 */

(function (global, factory) {
   true ? factory(exports) :
  undefined;
}(this, (function (exports) { 'use strict';

  function DEFAULT_COMPARE (a, b) { return a > b ? 1 : a < b ? -1 : 0; }

  var SplayTree = function SplayTree(compare, noDuplicates) {
    if ( compare === void 0 ) compare = DEFAULT_COMPARE;
    if ( noDuplicates === void 0 ) noDuplicates = false;

    this._compare = compare;
    this._root = null;
    this._size = 0;
    this._noDuplicates = !!noDuplicates;
  };

  var prototypeAccessors = { size: { configurable: true } };


  SplayTree.prototype.rotateLeft = function rotateLeft (x) {
    var y = x.right;
    if (y) {
      x.right = y.left;
      if (y.left) { y.left.parent = x; }
      y.parent = x.parent;
    }

    if (!x.parent)              { this._root = y; }
    else if (x === x.parent.left) { x.parent.left = y; }
    else                        { x.parent.right = y; }
    if (y) { y.left = x; }
    x.parent = y;
  };


  SplayTree.prototype.rotateRight = function rotateRight (x) {
    var y = x.left;
    if (y) {
      x.left = y.right;
      if (y.right) { y.right.parent = x; }
      y.parent = x.parent;
    }

    if (!x.parent)             { this._root = y; }
    else if(x === x.parent.left) { x.parent.left = y; }
    else                       { x.parent.right = y; }
    if (y) { y.right = x; }
    x.parent = y;
  };


  SplayTree.prototype._splay = function _splay (x) {
      var this$1 = this;

    while (x.parent) {
      var p = x.parent;
      if (!p.parent) {
        if (p.left === x) { this$1.rotateRight(p); }
        else            { this$1.rotateLeft(p); }
      } else if (p.left === x && p.parent.left === p) {
        this$1.rotateRight(p.parent);
        this$1.rotateRight(p);
      } else if (p.right === x && p.parent.right === p) {
        this$1.rotateLeft(p.parent);
        this$1.rotateLeft(p);
      } else if (p.left === x && p.parent.right === p) {
        this$1.rotateRight(p);
        this$1.rotateLeft(p);
      } else {
        this$1.rotateLeft(p);
        this$1.rotateRight(p);
      }
    }
  };


  SplayTree.prototype.splay = function splay (x) {
      var this$1 = this;

    var p, gp, ggp, l, r;

    while (x.parent) {
      p = x.parent;
      gp = p.parent;

      if (gp && gp.parent) {
        ggp = gp.parent;
        if (ggp.left === gp) { ggp.left= x; }
        else               { ggp.right = x; }
        x.parent = ggp;
      } else {
        x.parent = null;
        this$1._root = x;
      }

      l = x.left; r = x.right;

      if (x === p.left) { // left
        if (gp) {
          if (gp.left === p) {
            /* zig-zig */
            if (p.right) {
              gp.left = p.right;
              gp.left.parent = gp;
            } else { gp.left = null; }

            p.right = gp;
            gp.parent = p;
          } else {
            /* zig-zag */
            if (l) {
              gp.right = l;
              l.parent = gp;
            } else { gp.right = null; }

            x.left  = gp;
            gp.parent = x;
          }
        }
        if (r) {
          p.left = r;
          r.parent = p;
        } else { p.left = null; }

        x.right= p;
        p.parent = x;
      } else { // right
        if (gp) {
          if (gp.right === p) {
            /* zig-zig */
            if (p.left) {
              gp.right = p.left;
              gp.right.parent = gp;
            } else { gp.right = null; }

            p.left = gp;
            gp.parent = p;
          } else {
            /* zig-zag */
            if (r) {
              gp.left = r;
              r.parent = gp;
            } else { gp.left = null; }

            x.right = gp;
            gp.parent = x;
          }
        }
        if (l) {
          p.right = l;
          l.parent = p;
        } else { p.right = null; }

        x.left = p;
        p.parent = x;
      }
    }
  };


  SplayTree.prototype.replace = function replace (u, v) {
    if (!u.parent) { this._root = v; }
    else if (u === u.parent.left) { u.parent.left = v; }
    else { u.parent.right = v; }
    if (v) { v.parent = u.parent; }
  };


  SplayTree.prototype.minNode = function minNode (u) {
      if ( u === void 0 ) u = this._root;

    if (u) { while (u.left) { u = u.left; } }
    return u;
  };


  SplayTree.prototype.maxNode = function maxNode (u) {
      if ( u === void 0 ) u = this._root;

    if (u) { while (u.right) { u = u.right; } }
    return u;
  };


  SplayTree.prototype.insert = function insert (key, data) {
    var z = this._root;
    var p = null;
    var comp = this._compare;
    var cmp;

    if (this._noDuplicates) {
      while (z) {
        p = z;
        cmp = comp(z.key, key);
        if (cmp === 0) { return; }
        else if (comp(z.key, key) < 0) { z = z.right; }
        else { z = z.left; }
      }
    } else {
      while (z) {
        p = z;
        if (comp(z.key, key) < 0) { z = z.right; }
        else { z = z.left; }
      }
    }

    z = { key: key, data: data, left: null, right: null, parent: p };

    if (!p)                        { this._root = z; }
    else if (comp(p.key, z.key) < 0) { p.right = z; }
    else                           { p.left= z; }

    this.splay(z);
    this._size++;
    return z;
  };


  SplayTree.prototype.find = function find (key) {
    var z  = this._root;
    var comp = this._compare;
    while (z) {
      var cmp = comp(z.key, key);
      if    (cmp < 0) { z = z.right; }
      else if (cmp > 0) { z = z.left; }
      else            { return z; }
    }
    return null;
  };

  /**
   * Whether the tree contains a node with the given key
   * @param{Key} key
   * @return {boolean} true/false
   */
  SplayTree.prototype.contains = function contains (key) {
    var node     = this._root;
    var comparator = this._compare;
    while (node){
      var cmp = comparator(key, node.key);
      if    (cmp === 0) { return true; }
      else if (cmp < 0) { node = node.left; }
      else              { node = node.right; }
    }

    return false;
  };


  SplayTree.prototype.remove = function remove (key) {
    var z = this.find(key);

    if (!z) { return false; }

    this.splay(z);

    if (!z.left) { this.replace(z, z.right); }
    else if (!z.right) { this.replace(z, z.left); }
    else {
      var y = this.minNode(z.right);
      if (y.parent !== z) {
        this.replace(y, y.right);
        y.right = z.right;
        y.right.parent = y;
      }
      this.replace(z, y);
      y.left = z.left;
      y.left.parent = y;
    }

    this._size--;
    return true;
  };


  SplayTree.prototype.removeNode = function removeNode (z) {
    if (!z) { return false; }

    this.splay(z);

    if (!z.left) { this.replace(z, z.right); }
    else if (!z.right) { this.replace(z, z.left); }
    else {
      var y = this.minNode(z.right);
      if (y.parent !== z) {
        this.replace(y, y.right);
        y.right = z.right;
        y.right.parent = y;
      }
      this.replace(z, y);
      y.left = z.left;
      y.left.parent = y;
    }

    this._size--;
    return true;
  };


  SplayTree.prototype.erase = function erase (key) {
    var z = this.find(key);
    if (!z) { return; }

    this.splay(z);

    var s = z.left;
    var t = z.right;

    var sMax = null;
    if (s) {
      s.parent = null;
      sMax = this.maxNode(s);
      this.splay(sMax);
      this._root = sMax;
    }
    if (t) {
      if (s) { sMax.right = t; }
      else { this._root = t; }
      t.parent = sMax;
    }

    this._size--;
  };

  /**
   * Removes and returns the node with smallest key
   * @return {?Node}
   */
  SplayTree.prototype.pop = function pop () {
    var node = this._root, returnValue = null;
    if (node) {
      while (node.left) { node = node.left; }
      returnValue = { key: node.key, data: node.data };
      this.remove(node.key);
    }
    return returnValue;
  };


  /* eslint-disable class-methods-use-this */

  /**
   * Successor node
   * @param{Node} node
   * @return {?Node}
   */
  SplayTree.prototype.next = function next (node) {
    var successor = node;
    if (successor) {
      if (successor.right) {
        successor = successor.right;
        while (successor && successor.left) { successor = successor.left; }
      } else {
        successor = node.parent;
        while (successor && successor.right === node) {
          node = successor; successor = successor.parent;
        }
      }
    }
    return successor;
  };


  /**
   * Predecessor node
   * @param{Node} node
   * @return {?Node}
   */
  SplayTree.prototype.prev = function prev (node) {
    var predecessor = node;
    if (predecessor) {
      if (predecessor.left) {
        predecessor = predecessor.left;
        while (predecessor && predecessor.right) { predecessor = predecessor.right; }
      } else {
        predecessor = node.parent;
        while (predecessor && predecessor.left === node) {
          node = predecessor;
          predecessor = predecessor.parent;
        }
      }
    }
    return predecessor;
  };
  /* eslint-enable class-methods-use-this */


  /**
   * @param{forEachCallback} callback
   * @return {SplayTree}
   */
  SplayTree.prototype.forEach = function forEach (callback) {
    var current = this._root;
    var s = [], done = false, i = 0;

    while (!done) {
      // Reach the left most Node of the current Node
      if (current) {
        // Place pointer to a tree node on the stack
        // before traversing the node's left subtree
        s.push(current);
        current = current.left;
      } else {
        // BackTrack from the empty subtree and visit the Node
        // at the top of the stack; however, if the stack is
        // empty you are done
        if (s.length > 0) {
          current = s.pop();
          callback(current, i++);

          // We have visited the node and its left
          // subtree. Now, it's right subtree's turn
          current = current.right;
        } else { done = true; }
      }
    }
    return this;
  };


  /**
   * Walk key range from `low` to `high`. Stops if `fn` returns a value.
   * @param{Key}    low
   * @param{Key}    high
   * @param{Function} fn
   * @param{*?}     ctx
   * @return {SplayTree}
   */
  SplayTree.prototype.range = function range (low, high, fn, ctx) {
      var this$1 = this;

    var Q = [];
    var compare = this._compare;
    var node = this._root, cmp;

    while (Q.length !== 0 || node) {
      if (node) {
        Q.push(node);
        node = node.left;
      } else {
        node = Q.pop();
        cmp = compare(node.key, high);
        if (cmp > 0) {
          break;
        } else if (compare(node.key, low) >= 0) {
          if (fn.call(ctx, node)) { return this$1; } // stop if smth is returned
        }
        node = node.right;
      }
    }
    return this;
  };

  /**
   * Returns all keys in order
   * @return {Array<Key>}
   */
  SplayTree.prototype.keys = function keys () {
    var current = this._root;
    var s = [], r = [], done = false;

    while (!done) {
      if (current) {
        s.push(current);
        current = current.left;
      } else {
        if (s.length > 0) {
          current = s.pop();
          r.push(current.key);
          current = current.right;
        } else { done = true; }
      }
    }
    return r;
  };


  /**
   * Returns `data` fields of all nodes in order.
   * @return {Array<Value>}
   */
  SplayTree.prototype.values = function values () {
    var current = this._root;
    var s = [], r = [], done = false;

    while (!done) {
      if (current) {
        s.push(current);
        current = current.left;
      } else {
        if (s.length > 0) {
          current = s.pop();
          r.push(current.data);
          current = current.right;
        } else { done = true; }
      }
    }
    return r;
  };


  /**
   * Returns node at given index
   * @param{number} index
   * @return {?Node}
   */
  SplayTree.prototype.at = function at (index) {
    // removed after a consideration, more misleading than useful
    // index = index % this.size;
    // if (index < 0) index = this.size - index;

    var current = this._root;
    var s = [], done = false, i = 0;

    while (!done) {
      if (current) {
        s.push(current);
        current = current.left;
      } else {
        if (s.length > 0) {
          current = s.pop();
          if (i === index) { return current; }
          i++;
          current = current.right;
        } else { done = true; }
      }
    }
    return null;
  };

  /**
   * Bulk-load items. Both array have to be same size
   * @param{Array<Key>}  keys
   * @param{Array<Value>}[values]
   * @param{Boolean}     [presort=false] Pre-sort keys and values, using
   *                                       tree's comparator. Sorting is done
   *                                       in-place
   * @return {AVLTree}
   */
  SplayTree.prototype.load = function load (keys, values, presort) {
      if ( keys === void 0 ) keys = [];
      if ( values === void 0 ) values = [];
      if ( presort === void 0 ) presort = false;

    if (this._size !== 0) { throw new Error('bulk-load: tree is not empty'); }
    var size = keys.length;
    if (presort) { sort(keys, values, 0, size - 1, this._compare); }
    this._root = loadRecursive(null, keys, values, 0, size);
    this._size = size;
    return this;
  };


  SplayTree.prototype.min = function min () {
    var node = this.minNode(this._root);
    if (node) { return node.key; }
    else    { return null; }
  };


  SplayTree.prototype.max = function max () {
    var node = this.maxNode(this._root);
    if (node) { return node.key; }
    else    { return null; }
  };

  SplayTree.prototype.isEmpty = function isEmpty () { return this._root === null; };
  prototypeAccessors.size.get = function () { return this._size; };


  /**
   * Create a tree and load it with items
   * @param{Array<Key>}        keys
   * @param{Array<Value>?}      [values]

   * @param{Function?}          [comparator]
   * @param{Boolean?}           [presort=false] Pre-sort keys and values, using
   *                                             tree's comparator. Sorting is done
   *                                             in-place
   * @param{Boolean?}           [noDuplicates=false] Allow duplicates
   * @return {SplayTree}
   */
  SplayTree.createTree = function createTree (keys, values, comparator, presort, noDuplicates) {
    return new SplayTree(comparator, noDuplicates).load(keys, values, presort);
  };

  Object.defineProperties( SplayTree.prototype, prototypeAccessors );


  function loadRecursive (parent, keys, values, start, end) {
    var size = end - start;
    if (size > 0) {
      var middle = start + Math.floor(size / 2);
      var key    = keys[middle];
      var data   = values[middle];
      var node   = { key: key, data: data, parent: parent };
      node.left    = loadRecursive(node, keys, values, start, middle);
      node.right   = loadRecursive(node, keys, values, middle + 1, end);
      return node;
    }
    return null;
  }


  function sort(keys, values, left, right, compare) {
    if (left >= right) { return; }

    var pivot = keys[(left + right) >> 1];
    var i = left - 1;
    var j = right + 1;

    while (true) {
      do { i++; } while (compare(keys[i], pivot) < 0);
      do { j--; } while (compare(keys[j], pivot) > 0);
      if (i >= j) { break; }

      var tmp = keys[i];
      keys[i] = keys[j];
      keys[j] = tmp;

      tmp = values[i];
      values[i] = values[j];
      values[j] = tmp;
    }

    sort(keys, values,  left,     j, compare);
    sort(keys, values, j + 1, right, compare);
  }

  var NORMAL               = 0;
  var NON_CONTRIBUTING     = 1;
  var SAME_TRANSITION      = 2;
  var DIFFERENT_TRANSITION = 3;

  var INTERSECTION = 0;
  var UNION        = 1;
  var DIFFERENCE   = 2;
  var XOR          = 3;

  /**
   * @param  {SweepEvent} event
   * @param  {SweepEvent} prev
   * @param  {Operation} operation
   */
  function computeFields (event, prev, operation) {
    // compute inOut and otherInOut fields
    if (prev === null) {
      event.inOut      = false;
      event.otherInOut = true;

    // previous line segment in sweepline belongs to the same polygon
    } else {
      if (event.isSubject === prev.isSubject) {
        event.inOut      = !prev.inOut;
        event.otherInOut = prev.otherInOut;

      // previous line segment in sweepline belongs to the clipping polygon
      } else {
        event.inOut      = !prev.otherInOut;
        event.otherInOut = prev.isVertical() ? !prev.inOut : prev.inOut;
      }

      // compute prevInResult field
      if (prev) {
        event.prevInResult = (!inResult(prev, operation) || prev.isVertical())
          ? prev.prevInResult : prev;
      }
    }

    // check if the line segment belongs to the Boolean operation
    event.inResult = inResult(event, operation);
  }


  /* eslint-disable indent */
  function inResult(event, operation) {
    switch (event.type) {
      case NORMAL:
        switch (operation) {
          case INTERSECTION:
            return !event.otherInOut;
          case UNION:
            return event.otherInOut;
          case DIFFERENCE:
            // return (event.isSubject && !event.otherInOut) ||
            //         (!event.isSubject && event.otherInOut);
            return (event.isSubject && event.otherInOut) ||
                    (!event.isSubject && !event.otherInOut);
          case XOR:
            return true;
        }
        break;
      case SAME_TRANSITION:
        return operation === INTERSECTION || operation === UNION;
      case DIFFERENT_TRANSITION:
        return operation === DIFFERENCE;
      case NON_CONTRIBUTING:
        return false;
    }
    return false;
  }
  /* eslint-enable indent */

  var SweepEvent = function SweepEvent (point, left, otherEvent, isSubject, edgeType) {

    /**
     * Is left endpoint?
     * @type {Boolean}
     */
    this.left = left;

    /**
     * @type {Array.<Number>}
     */
    this.point = point;

    /**
     * Other edge reference
     * @type {SweepEvent}
     */
    this.otherEvent = otherEvent;

    /**
     * Belongs to source or clipping polygon
     * @type {Boolean}
     */
    this.isSubject = isSubject;

    /**
     * Edge contribution type
     * @type {Number}
     */
    this.type = edgeType || NORMAL;


    /**
     * In-out transition for the sweepline crossing polygon
     * @type {Boolean}
     */
    this.inOut = false;


    /**
     * @type {Boolean}
     */
    this.otherInOut = false;

    /**
     * Previous event in result?
     * @type {SweepEvent}
     */
    this.prevInResult = null;

    /**
     * Does event belong to result?
     * @type {Boolean}
     */
    this.inResult = false;


    // connection step

    /**
     * @type {Boolean}
     */
    this.resultInOut = false;

    this.isExteriorRing = true;
  };


  /**
   * @param{Array.<Number>}p
   * @return {Boolean}
   */
  SweepEvent.prototype.isBelow = function isBelow (p) {
    var p0 = this.point, p1 = this.otherEvent.point;
    return this.left
      ? (p0[0] - p[0]) * (p1[1] - p[1]) - (p1[0] - p[0]) * (p0[1] - p[1]) > 0
      // signedArea(this.point, this.otherEvent.point, p) > 0 :
      : (p1[0] - p[0]) * (p0[1] - p[1]) - (p0[0] - p[0]) * (p1[1] - p[1]) > 0;
      //signedArea(this.otherEvent.point, this.point, p) > 0;
  };


  /**
   * @param{Array.<Number>}p
   * @return {Boolean}
   */
  SweepEvent.prototype.isAbove = function isAbove (p) {
    return !this.isBelow(p);
  };


  /**
   * @return {Boolean}
   */
  SweepEvent.prototype.isVertical = function isVertical () {
    return this.point[0] === this.otherEvent.point[0];
  };


  SweepEvent.prototype.clone = function clone () {
    var copy = new SweepEvent(
      this.point, this.left, this.otherEvent, this.isSubject, this.type);

    copy.inResult     = this.inResult;
    copy.prevInResult = this.prevInResult;
    copy.isExteriorRing = this.isExteriorRing;
    copy.inOut        = this.inOut;
    copy.otherInOut   = this.otherInOut;

    return copy;
  };

  function equals(p1, p2) {
    if (p1[0] === p2[0]) {
      if (p1[1] === p2[1]) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  // const EPSILON = 1e-9;
  // const abs = Math.abs;
  // TODO https://github.com/w8r/martinez/issues/6#issuecomment-262847164
  // Precision problem.
  //
  // module.exports = function equals(p1, p2) {
  //   return abs(p1[0] - p2[0]) <= EPSILON && abs(p1[1] - p2[1]) <= EPSILON;
  // };

  /**
   * Signed area of the triangle (p0, p1, p2)
   * @param  {Array.<Number>} p0
   * @param  {Array.<Number>} p1
   * @param  {Array.<Number>} p2
   * @return {Number}
   */
  function signedArea(p0, p1, p2) {
    return (p0[0] - p2[0]) * (p1[1] - p2[1]) - (p1[0] - p2[0]) * (p0[1] - p2[1]);
  }

  /**
   * @param  {SweepEvent} e1
   * @param  {SweepEvent} e2
   * @return {Number}
   */
  function compareEvents(e1, e2) {
    var p1 = e1.point;
    var p2 = e2.point;

    // Different x-coordinate
    if (p1[0] > p2[0]) { return 1; }
    if (p1[0] < p2[0]) { return -1; }

    // Different points, but same x-coordinate
    // Event with lower y-coordinate is processed first
    if (p1[1] !== p2[1]) { return p1[1] > p2[1] ? 1 : -1; }

    return specialCases(e1, e2, p1, p2);
  }


  /* eslint-disable no-unused-vars */
  function specialCases(e1, e2, p1, p2) {
    // Same coordinates, but one is a left endpoint and the other is
    // a right endpoint. The right endpoint is processed first
    if (e1.left !== e2.left)
      { return e1.left ? 1 : -1; }

    // const p2 = e1.otherEvent.point, p3 = e2.otherEvent.point;
    // const sa = (p1[0] - p3[0]) * (p2[1] - p3[1]) - (p2[0] - p3[0]) * (p1[1] - p3[1])
    // Same coordinates, both events
    // are left endpoints or right endpoints.
    // not collinear
    if (signedArea(p1, e1.otherEvent.point, e2.otherEvent.point) !== 0) {
      // the event associate to the bottom segment is processed first
      return (!e1.isBelow(e2.otherEvent.point)) ? 1 : -1;
    }

    return (!e1.isSubject && e2.isSubject) ? 1 : -1;
  }
  /* eslint-enable no-unused-vars */

  /**
   * @param  {SweepEvent} se
   * @param  {Array.<Number>} p
   * @param  {Queue} queue
   * @return {Queue}
   */
  function divideSegment(se, p, queue)  {
    var r = new SweepEvent(p, false, se,            se.isSubject);
    var l = new SweepEvent(p, true,  se.otherEvent, se.isSubject);

    /* eslint-disable no-console */
    if (equals(se.point, se.otherEvent.point)) {

      console.warn('what is that, a collapsed segment?', se);
    }
    /* eslint-enable no-console */

    r.contourId = l.contourId = se.contourId;

    // avoid a rounding error. The left event would be processed after the right event
    if (compareEvents(l, se.otherEvent) > 0) {
      se.otherEvent.left = true;
      l.left = false;
    }

    // avoid a rounding error. The left event would be processed after the right event
    // if (compareEvents(se, r) > 0) {}

    se.otherEvent.otherEvent = l;
    se.otherEvent = r;

    queue.push(l);
    queue.push(r);

    return queue;
  }

  //const EPS = 1e-9;

  /**
   * Finds the magnitude of the cross product of two vectors (if we pretend
   * they're in three dimensions)
   *
   * @param {Object} a First vector
   * @param {Object} b Second vector
   * @private
   * @returns {Number} The magnitude of the cross product
   */
  function crossProduct(a, b) {
    return (a[0] * b[1]) - (a[1] * b[0]);
  }

  /**
   * Finds the dot product of two vectors.
   *
   * @param {Object} a First vector
   * @param {Object} b Second vector
   * @private
   * @returns {Number} The dot product
   */
  function dotProduct(a, b) {
    return (a[0] * b[0]) + (a[1] * b[1]);
  }

  /**
   * Finds the intersection (if any) between two line segments a and b, given the
   * line segments' end points a1, a2 and b1, b2.
   *
   * This algorithm is based on Schneider and Eberly.
   * http://www.cimec.org.ar/~ncalvo/Schneider_Eberly.pdf
   * Page 244.
   *
   * @param {Array.<Number>} a1 point of first line
   * @param {Array.<Number>} a2 point of first line
   * @param {Array.<Number>} b1 point of second line
   * @param {Array.<Number>} b2 point of second line
   * @param {Boolean=}       noEndpointTouch whether to skip single touchpoints
   *                                         (meaning connected segments) as
   *                                         intersections
   * @returns {Array.<Array.<Number>>|Null} If the lines intersect, the point of
   * intersection. If they overlap, the two end points of the overlapping segment.
   * Otherwise, null.
   */
  function intersection (a1, a2, b1, b2, noEndpointTouch) {
    // The algorithm expects our lines in the form P + sd, where P is a point,
    // s is on the interval [0, 1], and d is a vector.
    // We are passed two points. P can be the first point of each pair. The
    // vector, then, could be thought of as the distance (in x and y components)
    // from the first point to the second point.
    // So first, let's make our vectors:
    var va = [a2[0] - a1[0], a2[1] - a1[1]];
    var vb = [b2[0] - b1[0], b2[1] - b1[1]];
    // We also define a function to convert back to regular point form:

    /* eslint-disable arrow-body-style */

    function toPoint(p, s, d) {
      return [
        p[0] + s * d[0],
        p[1] + s * d[1]
      ];
    }

    /* eslint-enable arrow-body-style */

    // The rest is pretty much a straight port of the algorithm.
    var e = [b1[0] - a1[0], b1[1] - a1[1]];
    var kross    = crossProduct(va, vb);
    var sqrKross = kross * kross;
    var sqrLenA  = dotProduct(va, va);
    //const sqrLenB  = dotProduct(vb, vb);

    // Check for line intersection. This works because of the properties of the
    // cross product -- specifically, two vectors are parallel if and only if the
    // cross product is the 0 vector. The full calculation involves relative error
    // to account for possible very small line segments. See Schneider & Eberly
    // for details.
    if (sqrKross > 0/* EPS * sqrLenB * sqLenA */) {
      // If they're not parallel, then (because these are line segments) they
      // still might not actually intersect. This code checks that the
      // intersection point of the lines is actually on both line segments.
      var s = crossProduct(e, vb) / kross;
      if (s < 0 || s > 1) {
        // not on line segment a
        return null;
      }
      var t = crossProduct(e, va) / kross;
      if (t < 0 || t > 1) {
        // not on line segment b
        return null;
      }
      if (s === 0 || s === 1) {
        // on an endpoint of line segment a
        return noEndpointTouch ? null : [toPoint(a1, s, va)];
      }
      if (t === 0 || t === 1) {
        // on an endpoint of line segment b
        return noEndpointTouch ? null : [toPoint(b1, t, vb)];
      }
      return [toPoint(a1, s, va)];
    }

    // If we've reached this point, then the lines are either parallel or the
    // same, but the segments could overlap partially or fully, or not at all.
    // So we need to find the overlap, if any. To do that, we can use e, which is
    // the (vector) difference between the two initial points. If this is parallel
    // with the line itself, then the two lines are the same line, and there will
    // be overlap.
    //const sqrLenE = dotProduct(e, e);
    kross = crossProduct(e, va);
    sqrKross = kross * kross;

    if (sqrKross > 0 /* EPS * sqLenB * sqLenE */) {
    // Lines are just parallel, not the same. No overlap.
      return null;
    }

    var sa = dotProduct(va, e) / sqrLenA;
    var sb = sa + dotProduct(va, vb) / sqrLenA;
    var smin = Math.min(sa, sb);
    var smax = Math.max(sa, sb);

    // this is, essentially, the FindIntersection acting on floats from
    // Schneider & Eberly, just inlined into this function.
    if (smin <= 1 && smax >= 0) {

      // overlap on an end point
      if (smin === 1) {
        return noEndpointTouch ? null : [toPoint(a1, smin > 0 ? smin : 0, va)];
      }

      if (smax === 0) {
        return noEndpointTouch ? null : [toPoint(a1, smax < 1 ? smax : 1, va)];
      }

      if (noEndpointTouch && smin === 0 && smax === 1) { return null; }

      // There's overlap on a segment -- two points of intersection. Return both.
      return [
        toPoint(a1, smin > 0 ? smin : 0, va),
        toPoint(a1, smax < 1 ? smax : 1, va)
      ];
    }

    return null;
  }

  /**
   * @param  {SweepEvent} se1
   * @param  {SweepEvent} se2
   * @param  {Queue}      queue
   * @return {Number}
   */
  function possibleIntersection (se1, se2, queue) {
    // that disallows self-intersecting polygons,
    // did cost us half a day, so I'll leave it
    // out of respect
    // if (se1.isSubject === se2.isSubject) return;
    var inter = intersection(
      se1.point, se1.otherEvent.point,
      se2.point, se2.otherEvent.point
    );

    var nintersections = inter ? inter.length : 0;
    if (nintersections === 0) { return 0; } // no intersection

    // the line segments intersect at an endpoint of both line segments
    if ((nintersections === 1) &&
        (equals(se1.point, se2.point) ||
         equals(se1.otherEvent.point, se2.otherEvent.point))) {
      return 0;
    }

    if (nintersections === 2 && se1.isSubject === se2.isSubject) {
      // if(se1.contourId === se2.contourId){
      // console.warn('Edges of the same polygon overlap',
      //   se1.point, se1.otherEvent.point, se2.point, se2.otherEvent.point);
      // }
      //throw new Error('Edges of the same polygon overlap');
      return 0;
    }

    // The line segments associated to se1 and se2 intersect
    if (nintersections === 1) {

      // if the intersection point is not an endpoint of se1
      if (!equals(se1.point, inter[0]) && !equals(se1.otherEvent.point, inter[0])) {
        divideSegment(se1, inter[0], queue);
      }

      // if the intersection point is not an endpoint of se2
      if (!equals(se2.point, inter[0]) && !equals(se2.otherEvent.point, inter[0])) {
        divideSegment(se2, inter[0], queue);
      }
      return 1;
    }

    // The line segments associated to se1 and se2 overlap
    var events        = [];
    var leftCoincide  = false;
    var rightCoincide = false;

    if (equals(se1.point, se2.point)) {
      leftCoincide = true; // linked
    } else if (compareEvents(se1, se2) === 1) {
      events.push(se2, se1);
    } else {
      events.push(se1, se2);
    }

    if (equals(se1.otherEvent.point, se2.otherEvent.point)) {
      rightCoincide = true;
    } else if (compareEvents(se1.otherEvent, se2.otherEvent) === 1) {
      events.push(se2.otherEvent, se1.otherEvent);
    } else {
      events.push(se1.otherEvent, se2.otherEvent);
    }

    if ((leftCoincide && rightCoincide) || leftCoincide) {
      // both line segments are equal or share the left endpoint
      se2.type = NON_CONTRIBUTING;
      se1.type = (se2.inOut === se1.inOut)
        ? SAME_TRANSITION : DIFFERENT_TRANSITION;

      if (leftCoincide && !rightCoincide) {
        // honestly no idea, but changing events selection from [2, 1]
        // to [0, 1] fixes the overlapping self-intersecting polygons issue
        divideSegment(events[1].otherEvent, events[0].point, queue);
      }
      return 2;
    }

    // the line segments share the right endpoint
    if (rightCoincide) {
      divideSegment(events[0], events[1].point, queue);
      return 3;
    }

    // no line segment includes totally the other one
    if (events[0] !== events[3].otherEvent) {
      divideSegment(events[0], events[1].point, queue);
      divideSegment(events[1], events[2].point, queue);
      return 3;
    }

    // one line segment includes the other one
    divideSegment(events[0], events[1].point, queue);
    divideSegment(events[3].otherEvent, events[2].point, queue);

    return 3;
  }

  /**
   * @param  {SweepEvent} le1
   * @param  {SweepEvent} le2
   * @return {Number}
   */
  function compareSegments(le1, le2) {
    if (le1 === le2) { return 0; }

    // Segments are not collinear
    if (signedArea(le1.point, le1.otherEvent.point, le2.point) !== 0 ||
      signedArea(le1.point, le1.otherEvent.point, le2.otherEvent.point) !== 0) {

      // If they share their left endpoint use the right endpoint to sort
      if (equals(le1.point, le2.point)) { return le1.isBelow(le2.otherEvent.point) ? -1 : 1; }

      // Different left endpoint: use the left endpoint to sort
      if (le1.point[0] === le2.point[0]) { return le1.point[1] < le2.point[1] ? -1 : 1; }

      // has the line segment associated to e1 been inserted
      // into S after the line segment associated to e2 ?
      if (compareEvents(le1, le2) === 1) { return le2.isAbove(le1.point) ? -1 : 1; }

      // The line segment associated to e2 has been inserted
      // into S after the line segment associated to e1
      return le1.isBelow(le2.point) ? -1 : 1;
    }

    if (le1.isSubject === le2.isSubject) { // same polygon
      var p1 = le1.point, p2 = le2.point;
      if (p1[0] === p2[0] && p1[1] === p2[1]/*equals(le1.point, le2.point)*/) {
        p1 = le1.otherEvent.point; p2 = le2.otherEvent.point;
        if (p1[0] === p2[0] && p1[1] === p2[1]) { return 0; }
        else { return le1.contourId > le2.contourId ? 1 : -1; }
      }
    } else { // Segments are collinear, but belong to separate polygons
      return le1.isSubject ? -1 : 1;
    }

    return compareEvents(le1, le2) === 1 ? 1 : -1;
  }

  function subdivide(eventQueue, subject, clipping, sbbox, cbbox, operation) {
    var sweepLine = new SplayTree(compareSegments);
    var sortedEvents = [];

    var rightbound = Math.min(sbbox[2], cbbox[2]);

    var prev, next, begin;

    while (eventQueue.length !== 0) {
      var event = eventQueue.pop();
      sortedEvents.push(event);

      // optimization by bboxes for intersection and difference goes here
      if ((operation === INTERSECTION && event.point[0] > rightbound) ||
          (operation === DIFFERENCE   && event.point[0] > sbbox[2])) {
        break;
      }

      if (event.left) {
        next  = prev = sweepLine.insert(event);
        begin = sweepLine.minNode();

        if (prev !== begin) { prev = sweepLine.prev(prev); }
        else                { prev = null; }

        next = sweepLine.next(next);

        var prevEvent = prev ? prev.key : null;
        var prevprevEvent = (void 0);
        computeFields(event, prevEvent, operation);
        if (next) {
          if (possibleIntersection(event, next.key, eventQueue) === 2) {
            computeFields(event, prevEvent, operation);
            computeFields(event, next.key, operation);
          }
        }

        if (prev) {
          if (possibleIntersection(prev.key, event, eventQueue) === 2) {
            var prevprev = prev;
            if (prevprev !== begin) { prevprev = sweepLine.prev(prevprev); }
            else                    { prevprev = null; }

            prevprevEvent = prevprev ? prevprev.key : null;
            computeFields(prevEvent, prevprevEvent, operation);
            computeFields(event,     prevEvent,     operation);
          }
        }
      } else {
        event = event.otherEvent;
        next = prev = sweepLine.find(event);

        if (prev && next) {

          if (prev !== begin) { prev = sweepLine.prev(prev); }
          else                { prev = null; }

          next = sweepLine.next(next);
          sweepLine.remove(event);

          if (next && prev) {
            possibleIntersection(prev.key, next.key, eventQueue);
          }
        }
      }
    }
    return sortedEvents;
  }

  /**
   * @param  {Array.<SweepEvent>} sortedEvents
   * @return {Array.<SweepEvent>}
   */
  function orderEvents(sortedEvents) {
    var event, i, len, tmp;
    var resultEvents = [];
    for (i = 0, len = sortedEvents.length; i < len; i++) {
      event = sortedEvents[i];
      if ((event.left && event.inResult) ||
        (!event.left && event.otherEvent.inResult)) {
        resultEvents.push(event);
      }
    }
    // Due to overlapping edges the resultEvents array can be not wholly sorted
    var sorted = false;
    while (!sorted) {
      sorted = true;
      for (i = 0, len = resultEvents.length; i < len; i++) {
        if ((i + 1) < len &&
          compareEvents(resultEvents[i], resultEvents[i + 1]) === 1) {
          tmp = resultEvents[i];
          resultEvents[i] = resultEvents[i + 1];
          resultEvents[i + 1] = tmp;
          sorted = false;
        }
      }
    }


    for (i = 0, len = resultEvents.length; i < len; i++) {
      event = resultEvents[i];
      event.pos = i;
    }

    // imagine, the right event is found in the beginning of the queue,
    // when his left counterpart is not marked yet
    for (i = 0, len = resultEvents.length; i < len; i++) {
      event = resultEvents[i];
      if (!event.left) {
        tmp = event.pos;
        event.pos = event.otherEvent.pos;
        event.otherEvent.pos = tmp;
      }
    }

    return resultEvents;
  }


  /**
   * @param  {Number} pos
   * @param  {Array.<SweepEvent>} resultEvents
   * @param  {Object>}    processed
   * @return {Number}
   */
  function nextPos(pos, resultEvents, processed, origIndex) {
    var newPos = pos + 1;
    var length = resultEvents.length;
    if (newPos > length - 1) { return pos - 1; }
    var p  = resultEvents[pos].point;
    var p1 = resultEvents[newPos].point;


    // while in range and not the current one by value
    while (newPos < length && p1[0] === p[0] && p1[1] === p[1]) {
      if (!processed[newPos]) {
        return newPos;
      } else   {
        newPos++;
      }
      p1 = resultEvents[newPos].point;
    }

    newPos = pos - 1;

    while (processed[newPos] && newPos >= origIndex) {
      newPos--;
    }
    return newPos;
  }


  /**
   * @param  {Array.<SweepEvent>} sortedEvents
   * @return {Array.<*>} polygons
   */
  function connectEdges(sortedEvents, operation) {
    var i, len;
    var resultEvents = orderEvents(sortedEvents);

    // "false"-filled array
    var processed = {};
    var result = [];
    var event;

    for (i = 0, len = resultEvents.length; i < len; i++) {
      if (processed[i]) { continue; }
      var contour = [[]];

      if (!resultEvents[i].isExteriorRing) {
        if (operation === DIFFERENCE && !resultEvents[i].isSubject && result.length === 0) {
          result.push(contour);
        } else if (result.length === 0) {
          result.push([[contour]]);
        } else {
          result[result.length - 1].push(contour[0]);
        }
      } else if (operation === DIFFERENCE && !resultEvents[i].isSubject && result.length > 1) {
        result[result.length - 1].push(contour[0]);
      } else {
        result.push(contour);
      }

      var ringId = result.length - 1;
      var pos = i;

      var initial = resultEvents[i].point;
      contour[0].push(initial);

      while (pos >= i) {
        event = resultEvents[pos];
        processed[pos] = true;

        if (event.left) {
          event.resultInOut = false;
          event.contourId   = ringId;
        } else {
          event.otherEvent.resultInOut = true;
          event.otherEvent.contourId   = ringId;
        }

        pos = event.pos;
        processed[pos] = true;
        contour[0].push(resultEvents[pos].point);
        pos = nextPos(pos, resultEvents, processed, i);
      }

      pos = pos === -1 ? i : pos;

      event = resultEvents[pos];
      processed[pos] = processed[event.pos] = true;
      event.otherEvent.resultInOut = true;
      event.otherEvent.contourId   = ringId;
    }

    // Handle if the result is a polygon (eg not multipoly)
    // Commented it again, let's see what do we mean by that
    // if (result.length === 1) result = result[0];
    return result;
  }

  var tinyqueue = TinyQueue;
  var default_1 = TinyQueue;

  function TinyQueue(data, compare) {
      var this$1 = this;

      if (!(this instanceof TinyQueue)) { return new TinyQueue(data, compare); }

      this.data = data || [];
      this.length = this.data.length;
      this.compare = compare || defaultCompare;

      if (this.length > 0) {
          for (var i = (this.length >> 1) - 1; i >= 0; i--) { this$1._down(i); }
      }
  }

  function defaultCompare(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
  }

  TinyQueue.prototype = {

      push: function (item) {
          this.data.push(item);
          this.length++;
          this._up(this.length - 1);
      },

      pop: function () {
          if (this.length === 0) { return undefined; }

          var top = this.data[0];
          this.length--;

          if (this.length > 0) {
              this.data[0] = this.data[this.length];
              this._down(0);
          }
          this.data.pop();

          return top;
      },

      peek: function () {
          return this.data[0];
      },

      _up: function (pos) {
          var data = this.data;
          var compare = this.compare;
          var item = data[pos];

          while (pos > 0) {
              var parent = (pos - 1) >> 1;
              var current = data[parent];
              if (compare(item, current) >= 0) { break; }
              data[pos] = current;
              pos = parent;
          }

          data[pos] = item;
      },

      _down: function (pos) {
          var this$1 = this;

          var data = this.data;
          var compare = this.compare;
          var halfLength = this.length >> 1;
          var item = data[pos];

          while (pos < halfLength) {
              var left = (pos << 1) + 1;
              var right = left + 1;
              var best = data[left];

              if (right < this$1.length && compare(data[right], best) < 0) {
                  left = right;
                  best = data[right];
              }
              if (compare(best, item) >= 0) { break; }

              data[pos] = best;
              pos = left;
          }

          data[pos] = item;
      }
  };
  tinyqueue.default = default_1;

  var max = Math.max;
  var min = Math.min;

  var contourId = 0;


  function processPolygon(contourOrHole, isSubject, depth, Q, bbox, isExteriorRing) {
    var i, len, s1, s2, e1, e2;
    for (i = 0, len = contourOrHole.length - 1; i < len; i++) {
      s1 = contourOrHole[i];
      s2 = contourOrHole[i + 1];
      e1 = new SweepEvent(s1, false, undefined, isSubject);
      e2 = new SweepEvent(s2, false, e1,        isSubject);
      e1.otherEvent = e2;

      if (s1[0] === s2[0] && s1[1] === s2[1]) {
        continue; // skip collapsed edges, or it breaks
      }

      e1.contourId = e2.contourId = depth;
      if (!isExteriorRing) {
        e1.isExteriorRing = false;
        e2.isExteriorRing = false;
      }
      if (compareEvents(e1, e2) > 0) {
        e2.left = true;
      } else {
        e1.left = true;
      }

      var x = s1[0], y = s1[1];
      bbox[0] = min(bbox[0], x);
      bbox[1] = min(bbox[1], y);
      bbox[2] = max(bbox[2], x);
      bbox[3] = max(bbox[3], y);

      // Pushing it so the queue is sorted from left to right,
      // with object on the left having the highest priority.
      Q.push(e1);
      Q.push(e2);
    }
  }


  function fillQueue(subject, clipping, sbbox, cbbox, operation) {
    var eventQueue = new tinyqueue(null, compareEvents);
    var polygonSet, isExteriorRing, i, ii, j, jj; //, k, kk;

    for (i = 0, ii = subject.length; i < ii; i++) {
      polygonSet = subject[i];
      for (j = 0, jj = polygonSet.length; j < jj; j++) {
        isExteriorRing = j === 0;
        if (isExteriorRing) { contourId++; }
        processPolygon(polygonSet[j], true, contourId, eventQueue, sbbox, isExteriorRing);
      }
    }

    for (i = 0, ii = clipping.length; i < ii; i++) {
      polygonSet = clipping[i];
      for (j = 0, jj = polygonSet.length; j < jj; j++) {
        isExteriorRing = j === 0;
        if (operation === DIFFERENCE) { isExteriorRing = false; }
        if (isExteriorRing) { contourId++; }
        processPolygon(polygonSet[j], false, contourId, eventQueue, cbbox, isExteriorRing);
      }
    }

    return eventQueue;
  }

  var EMPTY = [];


  function trivialOperation(subject, clipping, operation) {
    var result = null;
    if (subject.length * clipping.length === 0) {
      if        (operation === INTERSECTION) {
        result = EMPTY;
      } else if (operation === DIFFERENCE) {
        result = subject;
      } else if (operation === UNION ||
                 operation === XOR) {
        result = (subject.length === 0) ? clipping : subject;
      }
    }
    return result;
  }


  function compareBBoxes(subject, clipping, sbbox, cbbox, operation) {
    var result = null;
    if (sbbox[0] > cbbox[2] ||
        cbbox[0] > sbbox[2] ||
        sbbox[1] > cbbox[3] ||
        cbbox[1] > sbbox[3]) {
      if        (operation === INTERSECTION) {
        result = EMPTY;
      } else if (operation === DIFFERENCE) {
        result = subject;
      } else if (operation === UNION ||
                 operation === XOR) {
        result = subject.concat(clipping);
      }
    }
    return result;
  }


  function boolean(subject, clipping, operation) {
    if (typeof subject[0][0][0] === 'number') {
      subject = [subject];
    }
    if (typeof clipping[0][0][0] === 'number') {
      clipping = [clipping];
    }
    var trivial = trivialOperation(subject, clipping, operation);
    if (trivial) {
      return trivial === EMPTY ? null : trivial;
    }
    var sbbox = [Infinity, Infinity, -Infinity, -Infinity];
    var cbbox = [Infinity, Infinity, -Infinity, -Infinity];

    //console.time('fill queue');
    var eventQueue = fillQueue(subject, clipping, sbbox, cbbox, operation);
    //console.timeEnd('fill queue');

    trivial = compareBBoxes(subject, clipping, sbbox, cbbox, operation);
    if (trivial) {
      return trivial === EMPTY ? null : trivial;
    }
    //console.time('subdivide edges');
    var sortedEvents = subdivide(eventQueue, subject, clipping, sbbox, cbbox, operation);
    //console.timeEnd('subdivide edges');

    //console.time('connect vertices');
    var result = connectEdges(sortedEvents, operation);
    //console.timeEnd('connect vertices');
    return result;
  }

  function union (subject, clipping) {
    return boolean(subject, clipping, UNION);
  }

  function diff (subject, clipping) {
    return boolean(subject, clipping, DIFFERENCE);
  }

  function xor (subject, clipping){
    return boolean(subject, clipping, XOR);
  }

  function intersection$1 (subject, clipping) {
    return boolean(subject, clipping, INTERSECTION);
  }

  /**
   * @enum {Number}
   */
  var operations = { UNION: UNION, DIFFERENCE: DIFFERENCE, INTERSECTION: INTERSECTION, XOR: XOR };

  exports.union = union;
  exports.diff = diff;
  exports.xor = xor;
  exports.intersection = intersection$1;
  exports.operations = operations;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=martinez.umd.js.map


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var d2r = Math.PI / 180,
    r2d = 180 / Math.PI;

/**
 * Get the bbox of a tile
 *
 * @name tileToBBOX
 * @param {Array<number>} tile
 * @returns {Array<number>} bbox
 * @example
 * var bbox = tileToBBOX([5, 10, 10])
 * //=bbox
 */
function tileToBBOX(tile) {
    var e = tile2lon(tile[0] + 1, tile[2]);
    var w = tile2lon(tile[0], tile[2]);
    var s = tile2lat(tile[1] + 1, tile[2]);
    var n = tile2lat(tile[1], tile[2]);
    return [w, s, e, n];
}

/**
 * Get a geojson representation of a tile
 *
 * @name tileToGeoJSON
 * @param {Array<number>} tile
 * @returns {Feature<Polygon>}
 * @example
 * var poly = tileToGeoJSON([5, 10, 10])
 * //=poly
 */
function tileToGeoJSON(tile) {
    var bbox = tileToBBOX(tile);
    var poly = {
        type: 'Polygon',
        coordinates: [[
            [bbox[0], bbox[1]],
            [bbox[0], bbox[3]],
            [bbox[2], bbox[3]],
            [bbox[2], bbox[1]],
            [bbox[0], bbox[1]]
        ]]
    };
    return poly;
}

function tile2lon(x, z) {
    return x / Math.pow(2, z) * 360 - 180;
}

function tile2lat(y, z) {
    var n = Math.PI - 2 * Math.PI * y / Math.pow(2, z);
    return r2d * Math.atan(0.5 * (Math.exp(n) - Math.exp(-n)));
}

/**
 * Get the tile for a point at a specified zoom level
 *
 * @name pointToTile
 * @param {number} lon
 * @param {number} lat
 * @param {number} z
 * @returns {Array<number>} tile
 * @example
 * var tile = pointToTile(1, 1, 20)
 * //=tile
 */
function pointToTile(lon, lat, z) {
    var tile = pointToTileFraction(lon, lat, z);
    tile[0] = Math.floor(tile[0]);
    tile[1] = Math.floor(tile[1]);
    return tile;
}

/**
 * Get the 4 tiles one zoom level higher
 *
 * @name getChildren
 * @param {Array<number>} tile
 * @returns {Array<Array<number>>} tiles
 * @example
 * var tiles = getChildren([5, 10, 10])
 * //=tiles
 */
function getChildren(tile) {
    return [
        [tile[0] * 2, tile[1] * 2, tile[2] + 1],
        [tile[0] * 2 + 1, tile[1] * 2, tile[2 ] + 1],
        [tile[0] * 2 + 1, tile[1] * 2 + 1, tile[2] + 1],
        [tile[0] * 2, tile[1] * 2 + 1, tile[2] + 1]
    ];
}

/**
 * Get the tile one zoom level lower
 *
 * @name getParent
 * @param {Array<number>} tile
 * @returns {Array<number>} tile
 * @example
 * var tile = getParent([5, 10, 10])
 * //=tile
 */
function getParent(tile) {
    // top left
    if (tile[0] % 2 === 0 && tile[1] % 2 === 0) {
        return [tile[0] / 2, tile[1] / 2, tile[2] - 1];
    }
    // bottom left
    if ((tile[0] % 2 === 0) && (!tile[1] % 2 === 0)) {
        return [tile[0] / 2, (tile[1] - 1) / 2, tile[2] - 1];
    }
    // top right
    if ((!tile[0] % 2 === 0) && (tile[1] % 2 === 0)) {
        return [(tile[0] - 1) / 2, (tile[1]) / 2, tile[2] - 1];
    }
    // bottom right
    return [(tile[0] - 1) / 2, (tile[1] - 1) / 2, tile[2] - 1];
}

function getSiblings(tile) {
    return getChildren(getParent(tile));
}

/**
 * Get the 3 sibling tiles for a tile
 *
 * @name getSiblings
 * @param {Array<number>} tile
 * @returns {Array<Array<number>>} tiles
 * @example
 * var tiles = getSiblings([5, 10, 10])
 * //=tiles
 */
function hasSiblings(tile, tiles) {
    var siblings = getSiblings(tile);
    for (var i = 0; i < siblings.length; i++) {
        if (!hasTile(tiles, siblings[i])) return false;
    }
    return true;
}

/**
 * Check to see if an array of tiles contains a particular tile
 *
 * @name hasTile
 * @param {Array<Array<number>>} tiles
 * @param {Array<number>} tile
 * @returns {boolean}
 * @example
 * var tiles = [
 *     [0, 0, 5],
 *     [0, 1, 5],
 *     [1, 1, 5],
 *     [1, 0, 5]
 * ]
 * hasTile(tiles, [0, 0, 5])
 * //=boolean
 */
function hasTile(tiles, tile) {
    for (var i = 0; i < tiles.length; i++) {
        if (tilesEqual(tiles[i], tile)) return true;
    }
    return false;
}

/**
 * Check to see if two tiles are the same
 *
 * @name tilesEqual
 * @param {Array<number>} tile1
 * @param {Array<number>} tile2
 * @returns {boolean}
 * @example
 * tilesEqual([0, 1, 5], [0, 0, 5])
 * //=boolean
 */
function tilesEqual(tile1, tile2) {
    return (
        tile1[0] === tile2[0] &&
        tile1[1] === tile2[1] &&
        tile1[2] === tile2[2]
    );
}

/**
 * Get the quadkey for a tile
 *
 * @name tileToQuadkey
 * @param {Array<number>} tile
 * @returns {string} quadkey
 * @example
 * var quadkey = tileToQuadkey([0, 1, 5])
 * //=quadkey
 */
function tileToQuadkey(tile) {
    var index = '';
    for (var z = tile[2]; z > 0; z--) {
        var b = 0;
        var mask = 1 << (z - 1);
        if ((tile[0] & mask) !== 0) b++;
        if ((tile[1] & mask) !== 0) b += 2;
        index += b.toString();
    }
    return index;
}

/**
 * Get the tile for a quadkey
 *
 * @name quadkeyToTile
 * @param {string} quadkey
 * @returns {Array<number>} tile
 * @example
 * var tile = quadkeyToTile('00001033')
 * //=tile
 */
function quadkeyToTile(quadkey) {
    var x = 0;
    var y = 0;
    var z = quadkey.length;

    for (var i = z; i > 0; i--) {
        var mask = 1 << (i - 1);
        var q = +quadkey[z - i];
        if (q === 1) x |= mask;
        if (q === 2) y |= mask;
        if (q === 3) {
            x |= mask;
            y |= mask;
        }
    }
    return [x, y, z];
}

/**
 * Get the smallest tile to cover a bbox
 *
 * @name bboxToTile
 * @param {Array<number>} bbox
 * @returns {Array<number>} tile
 * @example
 * var tile = bboxToTile([ -178, 84, -177, 85 ])
 * //=tile
 */
function bboxToTile(bboxCoords) {
    var min = pointToTile(bboxCoords[0], bboxCoords[1], 32);
    var max = pointToTile(bboxCoords[2], bboxCoords[3], 32);
    var bbox = [min[0], min[1], max[0], max[1]];

    var z = getBboxZoom(bbox);
    if (z === 0) return [0, 0, 0];
    var x = bbox[0] >>> (32 - z);
    var y = bbox[1] >>> (32 - z);
    return [x, y, z];
}

function getBboxZoom(bbox) {
    var MAX_ZOOM = 28;
    for (var z = 0; z < MAX_ZOOM; z++) {
        var mask = 1 << (32 - (z + 1));
        if (((bbox[0] & mask) !== (bbox[2] & mask)) ||
            ((bbox[1] & mask) !== (bbox[3] & mask))) {
            return z;
        }
    }

    return MAX_ZOOM;
}

/**
 * Get the precise fractional tile location for a point at a zoom level
 *
 * @name pointToTileFraction
 * @param {number} lon
 * @param {number} lat
 * @param {number} z
 * @returns {Array<number>} tile fraction
 * var tile = pointToTileFraction(30.5, 50.5, 15)
 * //=tile
 */
function pointToTileFraction(lon, lat, z) {
    var sin = Math.sin(lat * d2r),
        z2 = Math.pow(2, z),
        x = z2 * (lon / 360 + 0.5),
        y = z2 * (0.5 - 0.25 * Math.log((1 + sin) / (1 - sin)) / Math.PI);
    return [x, y, z];
}

module.exports = {
    tileToGeoJSON: tileToGeoJSON,
    tileToBBOX: tileToBBOX,
    getChildren: getChildren,
    getParent: getParent,
    getSiblings: getSiblings,
    hasTile: hasTile,
    hasSiblings: hasSiblings,
    tilesEqual: tilesEqual,
    tileToQuadkey: tileToQuadkey,
    quadkeyToTile: quadkeyToTile,
    pointToTile: pointToTile,
    bboxToTile: bboxToTile,
    pointToTileFraction: pointToTileFraction
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var trim = __webpack_require__(41)
  , forEach = __webpack_require__(42)
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  forEach(
      trim(headers).split('\n')
    , function (row) {
        var index = row.indexOf(':')
          , key = trim(row.slice(0, index)).toLowerCase()
          , value = trim(row.slice(index + 1))

        if (typeof(result[key]) === 'undefined') {
          result[key] = value
        } else if (isArray(result[key])) {
          result[key].push(value)
        } else {
          result[key] = [ result[key], value ]
        }
      }
  )

  return result
}

/***/ }),
/* 41 */
/***/ (function(module, exports) {


exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isCallable = __webpack_require__(43);

var toStr = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

var forEachArray = function forEachArray(array, iterator, receiver) {
    for (var i = 0, len = array.length; i < len; i++) {
        if (hasOwnProperty.call(array, i)) {
            if (receiver == null) {
                iterator(array[i], i, array);
            } else {
                iterator.call(receiver, array[i], i, array);
            }
        }
    }
};

var forEachString = function forEachString(string, iterator, receiver) {
    for (var i = 0, len = string.length; i < len; i++) {
        // no such thing as a sparse string.
        if (receiver == null) {
            iterator(string.charAt(i), i, string);
        } else {
            iterator.call(receiver, string.charAt(i), i, string);
        }
    }
};

var forEachObject = function forEachObject(object, iterator, receiver) {
    for (var k in object) {
        if (hasOwnProperty.call(object, k)) {
            if (receiver == null) {
                iterator(object[k], k, object);
            } else {
                iterator.call(receiver, object[k], k, object);
            }
        }
    }
};

var forEach = function forEach(list, iterator, thisArg) {
    if (!isCallable(iterator)) {
        throw new TypeError('iterator must be a function');
    }

    var receiver;
    if (arguments.length >= 3) {
        receiver = thisArg;
    }

    if (toStr.call(list) === '[object Array]') {
        forEachArray(list, iterator, receiver);
    } else if (typeof list === 'string') {
        forEachString(list, iterator, receiver);
    } else {
        forEachObject(list, iterator, receiver);
    }
};

module.exports = forEach;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fnToStr = Function.prototype.toString;

var constructorRegex = /^\s*class\b/;
var isES6ClassFn = function isES6ClassFunction(value) {
	try {
		var fnStr = fnToStr.call(value);
		return constructorRegex.test(fnStr);
	} catch (e) {
		return false; // not a function
	}
};

var tryFunctionObject = function tryFunctionToStr(value) {
	try {
		if (isES6ClassFn(value)) { return false; }
		fnToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var fnClass = '[object Function]';
var genClass = '[object GeneratorFunction]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isCallable(value) {
	if (!value) { return false; }
	if (typeof value !== 'function' && typeof value !== 'object') { return false; }
	if (typeof value === 'function' && !value.prototype) { return true; }
	if (hasToStringTag) { return tryFunctionObject(value); }
	if (isES6ClassFn(value)) { return false; }
	var strClass = toStr.call(value);
	return strClass === fnClass || strClass === genClass;
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var VectorTileLayer = __webpack_require__(21);

module.exports = VectorTile;

function VectorTile(pbf, end) {
    this.layers = pbf.readFields(readTile, {}, end);
}

function readTile(tag, layers, pbf) {
    if (tag === 3) {
        var layer = new VectorTileLayer(pbf, pbf.readVarint() + pbf.pos);
        if (layer.length) layers[layer.name] = layer;
    }
}



/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = Point;

/**
 * A standalone point geometry with useful accessor, comparison, and
 * modification methods.
 *
 * @class Point
 * @param {Number} x the x-coordinate. this could be longitude or screen
 * pixels, or any other sort of unit.
 * @param {Number} y the y-coordinate. this could be latitude or screen
 * pixels, or any other sort of unit.
 * @example
 * var point = new Point(-77, 38);
 */
function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype = {

    /**
     * Clone this point, returning a new point that can be modified
     * without affecting the old one.
     * @return {Point} the clone
     */
    clone: function() { return new Point(this.x, this.y); },

    /**
     * Add this point's x & y coordinates to another point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    add:     function(p) { return this.clone()._add(p); },

    /**
     * Subtract this point's x & y coordinates to from point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    sub:     function(p) { return this.clone()._sub(p); },

    /**
     * Multiply this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    multByPoint:    function(p) { return this.clone()._multByPoint(p); },

    /**
     * Divide this point's x & y coordinates by point,
     * yielding a new point.
     * @param {Point} p the other point
     * @return {Point} output point
     */
    divByPoint:     function(p) { return this.clone()._divByPoint(p); },

    /**
     * Multiply this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    mult:    function(k) { return this.clone()._mult(k); },

    /**
     * Divide this point's x & y coordinates by a factor,
     * yielding a new point.
     * @param {Point} k factor
     * @return {Point} output point
     */
    div:     function(k) { return this.clone()._div(k); },

    /**
     * Rotate this point around the 0, 0 origin by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @return {Point} output point
     */
    rotate:  function(a) { return this.clone()._rotate(a); },

    /**
     * Rotate this point around p point by an angle a,
     * given in radians
     * @param {Number} a angle to rotate around, in radians
     * @param {Point} p Point to rotate around
     * @return {Point} output point
     */
    rotateAround:  function(a,p) { return this.clone()._rotateAround(a,p); },

    /**
     * Multiply this point by a 4x1 transformation matrix
     * @param {Array<Number>} m transformation matrix
     * @return {Point} output point
     */
    matMult: function(m) { return this.clone()._matMult(m); },

    /**
     * Calculate this point but as a unit vector from 0, 0, meaning
     * that the distance from the resulting point to the 0, 0
     * coordinate will be equal to 1 and the angle from the resulting
     * point to the 0, 0 coordinate will be the same as before.
     * @return {Point} unit vector point
     */
    unit:    function() { return this.clone()._unit(); },

    /**
     * Compute a perpendicular point, where the new y coordinate
     * is the old x coordinate and the new x coordinate is the old y
     * coordinate multiplied by -1
     * @return {Point} perpendicular point
     */
    perp:    function() { return this.clone()._perp(); },

    /**
     * Return a version of this point with the x & y coordinates
     * rounded to integers.
     * @return {Point} rounded point
     */
    round:   function() { return this.clone()._round(); },

    /**
     * Return the magitude of this point: this is the Euclidean
     * distance from the 0, 0 coordinate to this point's x and y
     * coordinates.
     * @return {Number} magnitude
     */
    mag: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    },

    /**
     * Judge whether this point is equal to another point, returning
     * true or false.
     * @param {Point} other the other point
     * @return {boolean} whether the points are equal
     */
    equals: function(other) {
        return this.x === other.x &&
               this.y === other.y;
    },

    /**
     * Calculate the distance from this point to another point
     * @param {Point} p the other point
     * @return {Number} distance
     */
    dist: function(p) {
        return Math.sqrt(this.distSqr(p));
    },

    /**
     * Calculate the distance from this point to another point,
     * without the square root step. Useful if you're comparing
     * relative distances.
     * @param {Point} p the other point
     * @return {Number} distance
     */
    distSqr: function(p) {
        var dx = p.x - this.x,
            dy = p.y - this.y;
        return dx * dx + dy * dy;
    },

    /**
     * Get the angle from the 0, 0 coordinate to this point, in radians
     * coordinates.
     * @return {Number} angle
     */
    angle: function() {
        return Math.atan2(this.y, this.x);
    },

    /**
     * Get the angle from this point to another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleTo: function(b) {
        return Math.atan2(this.y - b.y, this.x - b.x);
    },

    /**
     * Get the angle between this point and another point, in radians
     * @param {Point} b the other point
     * @return {Number} angle
     */
    angleWith: function(b) {
        return this.angleWithSep(b.x, b.y);
    },

    /*
     * Find the angle of the two vectors, solving the formula for
     * the cross product a x b = |a||b|sin(θ) for θ.
     * @param {Number} x the x-coordinate
     * @param {Number} y the y-coordinate
     * @return {Number} the angle in radians
     */
    angleWithSep: function(x, y) {
        return Math.atan2(
            this.x * y - this.y * x,
            this.x * x + this.y * y);
    },

    _matMult: function(m) {
        var x = m[0] * this.x + m[1] * this.y,
            y = m[2] * this.x + m[3] * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _add: function(p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    },

    _sub: function(p) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    },

    _mult: function(k) {
        this.x *= k;
        this.y *= k;
        return this;
    },

    _div: function(k) {
        this.x /= k;
        this.y /= k;
        return this;
    },

    _multByPoint: function(p) {
        this.x *= p.x;
        this.y *= p.y;
        return this;
    },

    _divByPoint: function(p) {
        this.x /= p.x;
        this.y /= p.y;
        return this;
    },

    _unit: function() {
        this._div(this.mag());
        return this;
    },

    _perp: function() {
        var y = this.y;
        this.y = this.x;
        this.x = -y;
        return this;
    },

    _rotate: function(angle) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = cos * this.x - sin * this.y,
            y = sin * this.x + cos * this.y;
        this.x = x;
        this.y = y;
        return this;
    },

    _rotateAround: function(angle, p) {
        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            x = p.x + cos * (this.x - p.x) - sin * (this.y - p.y),
            y = p.y + sin * (this.x - p.x) + cos * (this.y - p.y);
        this.x = x;
        this.y = y;
        return this;
    },

    _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
};

/**
 * Construct a point from an array if necessary, otherwise if the input
 * is already a Point, or an unknown type, return it unchanged
 * @param {Array<Number>|Point|*} a any kind of input value
 * @return {Point} constructed point, or passed-through value.
 * @example
 * // this
 * var point = Point.convert([0, 1]);
 * // is equivalent to
 * var point = new Point(0, 1);
 */
Point.convert = function (a) {
    if (a instanceof Point) {
        return a;
    }
    if (Array.isArray(a)) {
        return new Point(a[0], a[1]);
    }
    return a;
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  for (var i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function iota(n) {
  var result = new Array(n)
  for(var i=0; i<n; ++i) {
    result[i] = i
  }
  return result
}

module.exports = iota

/***/ }),
/* 50 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// (c) Dean McNamee <dean@gmail.com>, 2013.
//
// https://github.com/deanm/omggif
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
// FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
// IN THE SOFTWARE.
//
// omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
// including animation and compression.  It does not rely on any specific
// underlying system, so should run in the browser, Node, or Plask.



function GifWriter(buf, width, height, gopts) {
  var p = 0;

  var gopts = gopts === undefined ? { } : gopts;
  var loop_count = gopts.loop === undefined ? null : gopts.loop;
  var global_palette = gopts.palette === undefined ? null : gopts.palette;

  if (width <= 0 || height <= 0 || width > 65535 || height > 65535)
    throw new Error("Width/Height invalid.");

  function check_palette_and_num_colors(palette) {
    var num_colors = palette.length;
    if (num_colors < 2 || num_colors > 256 ||  num_colors & (num_colors-1)) {
      throw new Error(
          "Invalid code/color length, must be power of 2 and 2 .. 256.");
    }
    return num_colors;
  }

  // - Header.
  buf[p++] = 0x47; buf[p++] = 0x49; buf[p++] = 0x46;  // GIF
  buf[p++] = 0x38; buf[p++] = 0x39; buf[p++] = 0x61;  // 89a

  // Handling of Global Color Table (palette) and background index.
  var gp_num_colors_pow2 = 0;
  var background = 0;
  if (global_palette !== null) {
    var gp_num_colors = check_palette_and_num_colors(global_palette);
    while (gp_num_colors >>= 1) ++gp_num_colors_pow2;
    gp_num_colors = 1 << gp_num_colors_pow2;
    --gp_num_colors_pow2;
    if (gopts.background !== undefined) {
      background = gopts.background;
      if (background >= gp_num_colors)
        throw new Error("Background index out of range.");
      // The GIF spec states that a background index of 0 should be ignored, so
      // this is probably a mistake and you really want to set it to another
      // slot in the palette.  But actually in the end most browsers, etc end
      // up ignoring this almost completely (including for dispose background).
      if (background === 0)
        throw new Error("Background index explicitly passed as 0.");
    }
  }

  // - Logical Screen Descriptor.
  // NOTE(deanm): w/h apparently ignored by implementations, but set anyway.
  buf[p++] = width & 0xff; buf[p++] = width >> 8 & 0xff;
  buf[p++] = height & 0xff; buf[p++] = height >> 8 & 0xff;
  // NOTE: Indicates 0-bpp original color resolution (unused?).
  buf[p++] = (global_palette !== null ? 0x80 : 0) |  // Global Color Table Flag.
             gp_num_colors_pow2;  // NOTE: No sort flag (unused?).
  buf[p++] = background;  // Background Color Index.
  buf[p++] = 0;  // Pixel aspect ratio (unused?).

  // - Global Color Table
  if (global_palette !== null) {
    for (var i = 0, il = global_palette.length; i < il; ++i) {
      var rgb = global_palette[i];
      buf[p++] = rgb >> 16 & 0xff;
      buf[p++] = rgb >> 8 & 0xff;
      buf[p++] = rgb & 0xff;
    }
  }

  if (loop_count !== null) {  // Netscape block for looping.
    if (loop_count < 0 || loop_count > 65535)
      throw new Error("Loop count invalid.")
    // Extension code, label, and length.
    buf[p++] = 0x21; buf[p++] = 0xff; buf[p++] = 0x0b;
    // NETSCAPE2.0
    buf[p++] = 0x4e; buf[p++] = 0x45; buf[p++] = 0x54; buf[p++] = 0x53;
    buf[p++] = 0x43; buf[p++] = 0x41; buf[p++] = 0x50; buf[p++] = 0x45;
    buf[p++] = 0x32; buf[p++] = 0x2e; buf[p++] = 0x30;
    // Sub-block
    buf[p++] = 0x03; buf[p++] = 0x01;
    buf[p++] = loop_count & 0xff; buf[p++] = loop_count >> 8 & 0xff;
    buf[p++] = 0x00;  // Terminator.
  }


  var ended = false;

  this.addFrame = function(x, y, w, h, indexed_pixels, opts) {
    if (ended === true) { --p; ended = false; }  // Un-end.

    opts = opts === undefined ? { } : opts;

    // TODO(deanm): Bounds check x, y.  Do they need to be within the virtual
    // canvas width/height, I imagine?
    if (x < 0 || y < 0 || x > 65535 || y > 65535)
      throw new Error("x/y invalid.")

    if (w <= 0 || h <= 0 || w > 65535 || h > 65535)
      throw new Error("Width/Height invalid.")

    if (indexed_pixels.length < w * h)
      throw new Error("Not enough pixels for the frame size.");

    var using_local_palette = true;
    var palette = opts.palette;
    if (palette === undefined || palette === null) {
      using_local_palette = false;
      palette = global_palette;
    }

    if (palette === undefined || palette === null)
      throw new Error("Must supply either a local or global palette.");

    var num_colors = check_palette_and_num_colors(palette);

    // Compute the min_code_size (power of 2), destroying num_colors.
    var min_code_size = 0;
    while (num_colors >>= 1) ++min_code_size;
    num_colors = 1 << min_code_size;  // Now we can easily get it back.

    var delay = opts.delay === undefined ? 0 : opts.delay;

    // From the spec:
    //     0 -   No disposal specified. The decoder is
    //           not required to take any action.
    //     1 -   Do not dispose. The graphic is to be left
    //           in place.
    //     2 -   Restore to background color. The area used by the
    //           graphic must be restored to the background color.
    //     3 -   Restore to previous. The decoder is required to
    //           restore the area overwritten by the graphic with
    //           what was there prior to rendering the graphic.
    //  4-7 -    To be defined.
    // NOTE(deanm): Dispose background doesn't really work, apparently most
    // browsers ignore the background palette index and clear to transparency.
    var disposal = opts.disposal === undefined ? 0 : opts.disposal;
    if (disposal < 0 || disposal > 3)  // 4-7 is reserved.
      throw new Error("Disposal out of range.");

    var use_transparency = false;
    var transparent_index = 0;
    if (opts.transparent !== undefined && opts.transparent !== null) {
      use_transparency = true;
      transparent_index = opts.transparent;
      if (transparent_index < 0 || transparent_index >= num_colors)
        throw new Error("Transparent color index.");
    }

    if (disposal !== 0 || use_transparency || delay !== 0) {
      // - Graphics Control Extension
      buf[p++] = 0x21; buf[p++] = 0xf9;  // Extension / Label.
      buf[p++] = 4;  // Byte size.

      buf[p++] = disposal << 2 | (use_transparency === true ? 1 : 0);
      buf[p++] = delay & 0xff; buf[p++] = delay >> 8 & 0xff;
      buf[p++] = transparent_index;  // Transparent color index.
      buf[p++] = 0;  // Block Terminator.
    }

    // - Image Descriptor
    buf[p++] = 0x2c;  // Image Seperator.
    buf[p++] = x & 0xff; buf[p++] = x >> 8 & 0xff;  // Left.
    buf[p++] = y & 0xff; buf[p++] = y >> 8 & 0xff;  // Top.
    buf[p++] = w & 0xff; buf[p++] = w >> 8 & 0xff;
    buf[p++] = h & 0xff; buf[p++] = h >> 8 & 0xff;
    // NOTE: No sort flag (unused?).
    // TODO(deanm): Support interlace.
    buf[p++] = using_local_palette === true ? (0x80 | (min_code_size-1)) : 0;

    // - Local Color Table
    if (using_local_palette === true) {
      for (var i = 0, il = palette.length; i < il; ++i) {
        var rgb = palette[i];
        buf[p++] = rgb >> 16 & 0xff;
        buf[p++] = rgb >> 8 & 0xff;
        buf[p++] = rgb & 0xff;
      }
    }

    p = GifWriterOutputLZWCodeStream(
            buf, p, min_code_size < 2 ? 2 : min_code_size, indexed_pixels);

    return p;
  };

  this.end = function() {
    if (ended === false) {
      buf[p++] = 0x3b;  // Trailer.
      ended = true;
    }
    return p;
  };

  this.getOutputBuffer = function() { return buf; };
  this.setOutputBuffer = function(v) { buf = v; };
  this.getOutputBufferPosition = function() { return p; };
  this.setOutputBufferPosition = function(v) { p = v; };
}

// Main compression routine, palette indexes -> LZW code stream.
// |index_stream| must have at least one entry.
function GifWriterOutputLZWCodeStream(buf, p, min_code_size, index_stream) {
  buf[p++] = min_code_size;
  var cur_subblock = p++;  // Pointing at the length field.

  var clear_code = 1 << min_code_size;
  var code_mask = clear_code - 1;
  var eoi_code = clear_code + 1;
  var next_code = eoi_code + 1;

  var cur_code_size = min_code_size + 1;  // Number of bits per code.
  var cur_shift = 0;
  // We have at most 12-bit codes, so we should have to hold a max of 19
  // bits here (and then we would write out).
  var cur = 0;

  function emit_bytes_to_buffer(bit_block_size) {
    while (cur_shift >= bit_block_size) {
      buf[p++] = cur & 0xff;
      cur >>= 8; cur_shift -= 8;
      if (p === cur_subblock + 256) {  // Finished a subblock.
        buf[cur_subblock] = 255;
        cur_subblock = p++;
      }
    }
  }

  function emit_code(c) {
    cur |= c << cur_shift;
    cur_shift += cur_code_size;
    emit_bytes_to_buffer(8);
  }

  // I am not an expert on the topic, and I don't want to write a thesis.
  // However, it is good to outline here the basic algorithm and the few data
  // structures and optimizations here that make this implementation fast.
  // The basic idea behind LZW is to build a table of previously seen runs
  // addressed by a short id (herein called output code).  All data is
  // referenced by a code, which represents one or more values from the
  // original input stream.  All input bytes can be referenced as the same
  // value as an output code.  So if you didn't want any compression, you
  // could more or less just output the original bytes as codes (there are
  // some details to this, but it is the idea).  In order to achieve
  // compression, values greater then the input range (codes can be up to
  // 12-bit while input only 8-bit) represent a sequence of previously seen
  // inputs.  The decompressor is able to build the same mapping while
  // decoding, so there is always a shared common knowledge between the
  // encoding and decoder, which is also important for "timing" aspects like
  // how to handle variable bit width code encoding.
  //
  // One obvious but very important consequence of the table system is there
  // is always a unique id (at most 12-bits) to map the runs.  'A' might be
  // 4, then 'AA' might be 10, 'AAA' 11, 'AAAA' 12, etc.  This relationship
  // can be used for an effecient lookup strategy for the code mapping.  We
  // need to know if a run has been seen before, and be able to map that run
  // to the output code.  Since we start with known unique ids (input bytes),
  // and then from those build more unique ids (table entries), we can
  // continue this chain (almost like a linked list) to always have small
  // integer values that represent the current byte chains in the encoder.
  // This means instead of tracking the input bytes (AAAABCD) to know our
  // current state, we can track the table entry for AAAABC (it is guaranteed
  // to exist by the nature of the algorithm) and the next character D.
  // Therefor the tuple of (table_entry, byte) is guaranteed to also be
  // unique.  This allows us to create a simple lookup key for mapping input
  // sequences to codes (table indices) without having to store or search
  // any of the code sequences.  So if 'AAAA' has a table entry of 12, the
  // tuple of ('AAAA', K) for any input byte K will be unique, and can be our
  // key.  This leads to a integer value at most 20-bits, which can always
  // fit in an SMI value and be used as a fast sparse array / object key.

  // Output code for the current contents of the index buffer.
  var ib_code = index_stream[0] & code_mask;  // Load first input index.
  var code_table = { };  // Key'd on our 20-bit "tuple".

  emit_code(clear_code);  // Spec says first code should be a clear code.

  // First index already loaded, process the rest of the stream.
  for (var i = 1, il = index_stream.length; i < il; ++i) {
    var k = index_stream[i] & code_mask;
    var cur_key = ib_code << 8 | k;  // (prev, k) unique tuple.
    var cur_code = code_table[cur_key];  // buffer + k.

    // Check if we have to create a new code table entry.
    if (cur_code === undefined) {  // We don't have buffer + k.
      // Emit index buffer (without k).
      // This is an inline version of emit_code, because this is the core
      // writing routine of the compressor (and V8 cannot inline emit_code
      // because it is a closure here in a different context).  Additionally
      // we can call emit_byte_to_buffer less often, because we can have
      // 30-bits (from our 31-bit signed SMI), and we know our codes will only
      // be 12-bits, so can safely have 18-bits there without overflow.
      // emit_code(ib_code);
      cur |= ib_code << cur_shift;
      cur_shift += cur_code_size;
      while (cur_shift >= 8) {
        buf[p++] = cur & 0xff;
        cur >>= 8; cur_shift -= 8;
        if (p === cur_subblock + 256) {  // Finished a subblock.
          buf[cur_subblock] = 255;
          cur_subblock = p++;
        }
      }

      if (next_code === 4096) {  // Table full, need a clear.
        emit_code(clear_code);
        next_code = eoi_code + 1;
        cur_code_size = min_code_size + 1;
        code_table = { };
      } else {  // Table not full, insert a new entry.
        // Increase our variable bit code sizes if necessary.  This is a bit
        // tricky as it is based on "timing" between the encoding and
        // decoder.  From the encoders perspective this should happen after
        // we've already emitted the index buffer and are about to create the
        // first table entry that would overflow our current code bit size.
        if (next_code >= (1 << cur_code_size)) ++cur_code_size;
        code_table[cur_key] = next_code++;  // Insert into code table.
      }

      ib_code = k;  // Index buffer to single input k.
    } else {
      ib_code = cur_code;  // Index buffer to sequence in code table.
    }
  }

  emit_code(ib_code);  // There will still be something in the index buffer.
  emit_code(eoi_code);  // End Of Information.

  // Flush / finalize the sub-blocks stream to the buffer.
  emit_bytes_to_buffer(1);

  // Finish the sub-blocks, writing out any unfinished lengths and
  // terminating with a sub-block of length 0.  If we have already started
  // but not yet used a sub-block it can just become the terminator.
  if (cur_subblock + 1 === p) {  // Started but unused.
    buf[cur_subblock] = 0;
  } else {  // Started and used, write length and additional terminator block.
    buf[cur_subblock] = p - cur_subblock - 1;
    buf[p++] = 0;
  }
  return p;
}

function GifReader(buf) {
  var p = 0;

  // - Header (GIF87a or GIF89a).
  if (buf[p++] !== 0x47 ||            buf[p++] !== 0x49 || buf[p++] !== 0x46 ||
      buf[p++] !== 0x38 || (buf[p++]+1 & 0xfd) !== 0x38 || buf[p++] !== 0x61) {
    throw new Error("Invalid GIF 87a/89a header.");
  }

  // - Logical Screen Descriptor.
  var width = buf[p++] | buf[p++] << 8;
  var height = buf[p++] | buf[p++] << 8;
  var pf0 = buf[p++];  // <Packed Fields>.
  var global_palette_flag = pf0 >> 7;
  var num_global_colors_pow2 = pf0 & 0x7;
  var num_global_colors = 1 << (num_global_colors_pow2 + 1);
  var background = buf[p++];
  buf[p++];  // Pixel aspect ratio (unused?).

  var global_palette_offset = null;
  var global_palette_size   = null;

  if (global_palette_flag) {
    global_palette_offset = p;
    global_palette_size = num_global_colors;
    p += num_global_colors * 3;  // Seek past palette.
  }

  var no_eof = true;

  var frames = [ ];

  var delay = 0;
  var transparent_index = null;
  var disposal = 0;  // 0 - No disposal specified.
  var loop_count = null;

  this.width = width;
  this.height = height;

  while (no_eof && p < buf.length) {
    switch (buf[p++]) {
      case 0x21:  // Graphics Control Extension Block
        switch (buf[p++]) {
          case 0xff:  // Application specific block
            // Try if it's a Netscape block (with animation loop counter).
            if (buf[p   ] !== 0x0b ||  // 21 FF already read, check block size.
                // NETSCAPE2.0
                buf[p+1 ] == 0x4e && buf[p+2 ] == 0x45 && buf[p+3 ] == 0x54 &&
                buf[p+4 ] == 0x53 && buf[p+5 ] == 0x43 && buf[p+6 ] == 0x41 &&
                buf[p+7 ] == 0x50 && buf[p+8 ] == 0x45 && buf[p+9 ] == 0x32 &&
                buf[p+10] == 0x2e && buf[p+11] == 0x30 &&
                // Sub-block
                buf[p+12] == 0x03 && buf[p+13] == 0x01 && buf[p+16] == 0) {
              p += 14;
              loop_count = buf[p++] | buf[p++] << 8;
              p++;  // Skip terminator.
            } else {  // We don't know what it is, just try to get past it.
              p += 12;
              while (true) {  // Seek through subblocks.
                var block_size = buf[p++];
                // Bad block size (ex: undefined from an out of bounds read).
                if (!(block_size >= 0)) throw Error("Invalid block size");
                if (block_size === 0) break;  // 0 size is terminator
                p += block_size;
              }
            }
            break;

          case 0xf9:  // Graphics Control Extension
            if (buf[p++] !== 0x4 || buf[p+4] !== 0)
              throw new Error("Invalid graphics extension block.");
            var pf1 = buf[p++];
            delay = buf[p++] | buf[p++] << 8;
            transparent_index = buf[p++];
            if ((pf1 & 1) === 0) transparent_index = null;
            disposal = pf1 >> 2 & 0x7;
            p++;  // Skip terminator.
            break;

          case 0xfe:  // Comment Extension.
            while (true) {  // Seek through subblocks.
              var block_size = buf[p++];
              // Bad block size (ex: undefined from an out of bounds read).
              if (!(block_size >= 0)) throw Error("Invalid block size");
              if (block_size === 0) break;  // 0 size is terminator
              // console.log(buf.slice(p, p+block_size).toString('ascii'));
              p += block_size;
            }
            break;

          default:
            throw new Error(
                "Unknown graphic control label: 0x" + buf[p-1].toString(16));
        }
        break;

      case 0x2c:  // Image Descriptor.
        var x = buf[p++] | buf[p++] << 8;
        var y = buf[p++] | buf[p++] << 8;
        var w = buf[p++] | buf[p++] << 8;
        var h = buf[p++] | buf[p++] << 8;
        var pf2 = buf[p++];
        var local_palette_flag = pf2 >> 7;
        var interlace_flag = pf2 >> 6 & 1;
        var num_local_colors_pow2 = pf2 & 0x7;
        var num_local_colors = 1 << (num_local_colors_pow2 + 1);
        var palette_offset = global_palette_offset;
        var palette_size = global_palette_size;
        var has_local_palette = false;
        if (local_palette_flag) {
          var has_local_palette = true;
          palette_offset = p;  // Override with local palette.
          palette_size = num_local_colors;
          p += num_local_colors * 3;  // Seek past palette.
        }

        var data_offset = p;

        p++;  // codesize
        while (true) {
          var block_size = buf[p++];
          // Bad block size (ex: undefined from an out of bounds read).
          if (!(block_size >= 0)) throw Error("Invalid block size");
          if (block_size === 0) break;  // 0 size is terminator
          p += block_size;
        }

        frames.push({x: x, y: y, width: w, height: h,
                     has_local_palette: has_local_palette,
                     palette_offset: palette_offset,
                     palette_size: palette_size,
                     data_offset: data_offset,
                     data_length: p - data_offset,
                     transparent_index: transparent_index,
                     interlaced: !!interlace_flag,
                     delay: delay,
                     disposal: disposal});
        break;

      case 0x3b:  // Trailer Marker (end of file).
        no_eof = false;
        break;

      default:
        throw new Error("Unknown gif block: 0x" + buf[p-1].toString(16));
        break;
    }
  }

  this.numFrames = function() {
    return frames.length;
  };

  this.loopCount = function() {
    return loop_count;
  };

  this.frameInfo = function(frame_num) {
    if (frame_num < 0 || frame_num >= frames.length)
      throw new Error("Frame index out of range.");
    return frames[frame_num];
  }

  this.decodeAndBlitFrameBGRA = function(frame_num, pixels) {
    var frame = this.frameInfo(frame_num);
    var num_pixels = frame.width * frame.height;
    var index_stream = new Uint8Array(num_pixels);  // At most 8-bit indices.
    GifReaderLZWOutputIndexStream(
        buf, frame.data_offset, index_stream, num_pixels);
    var palette_offset = frame.palette_offset;

    // NOTE(deanm): It seems to be much faster to compare index to 256 than
    // to === null.  Not sure why, but CompareStub_EQ_STRICT shows up high in
    // the profile, not sure if it's related to using a Uint8Array.
    var trans = frame.transparent_index;
    if (trans === null) trans = 256;

    // We are possibly just blitting to a portion of the entire frame.
    // That is a subrect within the framerect, so the additional pixels
    // must be skipped over after we finished a scanline.
    var framewidth  = frame.width;
    var framestride = width - framewidth;
    var xleft       = framewidth;  // Number of subrect pixels left in scanline.

    // Output indicies of the top left and bottom right corners of the subrect.
    var opbeg = ((frame.y * width) + frame.x) * 4;
    var opend = ((frame.y + frame.height) * width + frame.x) * 4;
    var op    = opbeg;

    var scanstride = framestride * 4;

    // Use scanstride to skip past the rows when interlacing.  This is skipping
    // 7 rows for the first two passes, then 3 then 1.
    if (frame.interlaced === true) {
      scanstride += width * 4 * 7;  // Pass 1.
    }

    var interlaceskip = 8;  // Tracking the row interval in the current pass.

    for (var i = 0, il = index_stream.length; i < il; ++i) {
      var index = index_stream[i];

      if (xleft === 0) {  // Beginning of new scan line
        op += scanstride;
        xleft = framewidth;
        if (op >= opend) { // Catch the wrap to switch passes when interlacing.
          scanstride = framestride * 4 + width * 4 * (interlaceskip-1);
          // interlaceskip / 2 * 4 is interlaceskip << 1.
          op = opbeg + (framewidth + framestride) * (interlaceskip << 1);
          interlaceskip >>= 1;
        }
      }

      if (index === trans) {
        op += 4;
      } else {
        var r = buf[palette_offset + index * 3];
        var g = buf[palette_offset + index * 3 + 1];
        var b = buf[palette_offset + index * 3 + 2];
        pixels[op++] = b;
        pixels[op++] = g;
        pixels[op++] = r;
        pixels[op++] = 255;
      }
      --xleft;
    }
  };

  // I will go to copy and paste hell one day...
  this.decodeAndBlitFrameRGBA = function(frame_num, pixels) {
    var frame = this.frameInfo(frame_num);
    var num_pixels = frame.width * frame.height;
    var index_stream = new Uint8Array(num_pixels);  // At most 8-bit indices.
    GifReaderLZWOutputIndexStream(
        buf, frame.data_offset, index_stream, num_pixels);
    var palette_offset = frame.palette_offset;

    // NOTE(deanm): It seems to be much faster to compare index to 256 than
    // to === null.  Not sure why, but CompareStub_EQ_STRICT shows up high in
    // the profile, not sure if it's related to using a Uint8Array.
    var trans = frame.transparent_index;
    if (trans === null) trans = 256;

    // We are possibly just blitting to a portion of the entire frame.
    // That is a subrect within the framerect, so the additional pixels
    // must be skipped over after we finished a scanline.
    var framewidth  = frame.width;
    var framestride = width - framewidth;
    var xleft       = framewidth;  // Number of subrect pixels left in scanline.

    // Output indicies of the top left and bottom right corners of the subrect.
    var opbeg = ((frame.y * width) + frame.x) * 4;
    var opend = ((frame.y + frame.height) * width + frame.x) * 4;
    var op    = opbeg;

    var scanstride = framestride * 4;

    // Use scanstride to skip past the rows when interlacing.  This is skipping
    // 7 rows for the first two passes, then 3 then 1.
    if (frame.interlaced === true) {
      scanstride += width * 4 * 7;  // Pass 1.
    }

    var interlaceskip = 8;  // Tracking the row interval in the current pass.

    for (var i = 0, il = index_stream.length; i < il; ++i) {
      var index = index_stream[i];

      if (xleft === 0) {  // Beginning of new scan line
        op += scanstride;
        xleft = framewidth;
        if (op >= opend) { // Catch the wrap to switch passes when interlacing.
          scanstride = framestride * 4 + width * 4 * (interlaceskip-1);
          // interlaceskip / 2 * 4 is interlaceskip << 1.
          op = opbeg + (framewidth + framestride) * (interlaceskip << 1);
          interlaceskip >>= 1;
        }
      }

      if (index === trans) {
        op += 4;
      } else {
        var r = buf[palette_offset + index * 3];
        var g = buf[palette_offset + index * 3 + 1];
        var b = buf[palette_offset + index * 3 + 2];
        pixels[op++] = r;
        pixels[op++] = g;
        pixels[op++] = b;
        pixels[op++] = 255;
      }
      --xleft;
    }
  };
}

function GifReaderLZWOutputIndexStream(code_stream, p, output, output_length) {
  var min_code_size = code_stream[p++];

  var clear_code = 1 << min_code_size;
  var eoi_code = clear_code + 1;
  var next_code = eoi_code + 1;

  var cur_code_size = min_code_size + 1;  // Number of bits per code.
  // NOTE: This shares the same name as the encoder, but has a different
  // meaning here.  Here this masks each code coming from the code stream.
  var code_mask = (1 << cur_code_size) - 1;
  var cur_shift = 0;
  var cur = 0;

  var op = 0;  // Output pointer.

  var subblock_size = code_stream[p++];

  // TODO(deanm): Would using a TypedArray be any faster?  At least it would
  // solve the fast mode / backing store uncertainty.
  // var code_table = Array(4096);
  var code_table = new Int32Array(4096);  // Can be signed, we only use 20 bits.

  var prev_code = null;  // Track code-1.

  while (true) {
    // Read up to two bytes, making sure we always 12-bits for max sized code.
    while (cur_shift < 16) {
      if (subblock_size === 0) break;  // No more data to be read.

      cur |= code_stream[p++] << cur_shift;
      cur_shift += 8;

      if (subblock_size === 1) {  // Never let it get to 0 to hold logic above.
        subblock_size = code_stream[p++];  // Next subblock.
      } else {
        --subblock_size;
      }
    }

    // TODO(deanm): We should never really get here, we should have received
    // and EOI.
    if (cur_shift < cur_code_size)
      break;

    var code = cur & code_mask;
    cur >>= cur_code_size;
    cur_shift -= cur_code_size;

    // TODO(deanm): Maybe should check that the first code was a clear code,
    // at least this is what you're supposed to do.  But actually our encoder
    // now doesn't emit a clear code first anyway.
    if (code === clear_code) {
      // We don't actually have to clear the table.  This could be a good idea
      // for greater error checking, but we don't really do any anyway.  We
      // will just track it with next_code and overwrite old entries.

      next_code = eoi_code + 1;
      cur_code_size = min_code_size + 1;
      code_mask = (1 << cur_code_size) - 1;

      // Don't update prev_code ?
      prev_code = null;
      continue;
    } else if (code === eoi_code) {
      break;
    }

    // We have a similar situation as the decoder, where we want to store
    // variable length entries (code table entries), but we want to do in a
    // faster manner than an array of arrays.  The code below stores sort of a
    // linked list within the code table, and then "chases" through it to
    // construct the dictionary entries.  When a new entry is created, just the
    // last byte is stored, and the rest (prefix) of the entry is only
    // referenced by its table entry.  Then the code chases through the
    // prefixes until it reaches a single byte code.  We have to chase twice,
    // first to compute the length, and then to actually copy the data to the
    // output (backwards, since we know the length).  The alternative would be
    // storing something in an intermediate stack, but that doesn't make any
    // more sense.  I implemented an approach where it also stored the length
    // in the code table, although it's a bit tricky because you run out of
    // bits (12 + 12 + 8), but I didn't measure much improvements (the table
    // entries are generally not the long).  Even when I created benchmarks for
    // very long table entries the complexity did not seem worth it.
    // The code table stores the prefix entry in 12 bits and then the suffix
    // byte in 8 bits, so each entry is 20 bits.

    var chase_code = code < next_code ? code : prev_code;

    // Chase what we will output, either {CODE} or {CODE-1}.
    var chase_length = 0;
    var chase = chase_code;
    while (chase > clear_code) {
      chase = code_table[chase] >> 8;
      ++chase_length;
    }

    var k = chase;

    var op_end = op + chase_length + (chase_code !== code ? 1 : 0);
    if (op_end > output_length) {
      console.log("Warning, gif stream longer than expected.");
      return;
    }

    // Already have the first byte from the chase, might as well write it fast.
    output[op++] = k;

    op += chase_length;
    var b = op;  // Track pointer, writing backwards.

    if (chase_code !== code)  // The case of emitting {CODE-1} + k.
      output[op++] = k;

    chase = chase_code;
    while (chase_length--) {
      chase = code_table[chase];
      output[--b] = chase & 0xff;  // Write backwards.
      chase >>= 8;  // Pull down to the prefix code.
    }

    if (prev_code !== null && next_code < 4096) {
      code_table[next_code++] = prev_code << 8 | k;
      // TODO(deanm): Figure out this clearing vs code growth logic better.  I
      // have an feeling that it should just happen somewhere else, for now it
      // is awkward between when we grow past the max and then hit a clear code.
      // For now just check if we hit the max 12-bits (then a clear code should
      // follow, also of course encoded in 12-bits).
      if (next_code >= code_mask+1 && cur_code_size < 12) {
        ++cur_code_size;
        code_mask = code_mask << 1 | 1;
      }
    }

    prev_code = code;
  }

  if (op !== output_length) {
    console.log("Warning, gif stream shorter than expected.");
  }

  return output;
}

// CommonJS.
try { exports.GifWriter = GifWriter; exports.GifReader = GifReader } catch(e) {}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ndarray = __webpack_require__(24)
var do_convert = __webpack_require__(53)

module.exports = function convert(arr, result) {
  var shape = [], c = arr, sz = 1
  while(Array.isArray(c)) {
    shape.push(c.length)
    sz *= c.length
    c = c[0]
  }
  if(shape.length === 0) {
    return ndarray()
  }
  if(!result) {
    result = ndarray(new Float64Array(sz), shape)
  }
  do_convert(result, arr)
  return result
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports=__webpack_require__(54)({"args":["array","scalar","index"],"pre":{"body":"{}","args":[],"thisVars":[],"localVars":[]},"body":{"body":"{\nvar _inline_1_v=_inline_1_arg1_,_inline_1_i\nfor(_inline_1_i=0;_inline_1_i<_inline_1_arg2_.length-1;++_inline_1_i) {\n_inline_1_v=_inline_1_v[_inline_1_arg2_[_inline_1_i]]\n}\n_inline_1_arg0_=_inline_1_v[_inline_1_arg2_[_inline_1_arg2_.length-1]]\n}","args":[{"name":"_inline_1_arg0_","lvalue":true,"rvalue":false,"count":1},{"name":"_inline_1_arg1_","lvalue":false,"rvalue":true,"count":1},{"name":"_inline_1_arg2_","lvalue":false,"rvalue":true,"count":4}],"thisVars":[],"localVars":["_inline_1_i","_inline_1_v"]},"post":{"body":"{}","args":[],"thisVars":[],"localVars":[]},"funcName":"convert","blockSize":64})


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createThunk = __webpack_require__(55)

function Procedure() {
  this.argTypes = []
  this.shimArgs = []
  this.arrayArgs = []
  this.arrayBlockIndices = []
  this.scalarArgs = []
  this.offsetArgs = []
  this.offsetArgIndex = []
  this.indexArgs = []
  this.shapeArgs = []
  this.funcName = ""
  this.pre = null
  this.body = null
  this.post = null
  this.debug = false
}

function compileCwise(user_args) {
  //Create procedure
  var proc = new Procedure()
  
  //Parse blocks
  proc.pre    = user_args.pre
  proc.body   = user_args.body
  proc.post   = user_args.post

  //Parse arguments
  var proc_args = user_args.args.slice(0)
  proc.argTypes = proc_args
  for(var i=0; i<proc_args.length; ++i) {
    var arg_type = proc_args[i]
    if(arg_type === "array" || (typeof arg_type === "object" && arg_type.blockIndices)) {
      proc.argTypes[i] = "array"
      proc.arrayArgs.push(i)
      proc.arrayBlockIndices.push(arg_type.blockIndices ? arg_type.blockIndices : 0)
      proc.shimArgs.push("array" + i)
      if(i < proc.pre.args.length && proc.pre.args[i].count>0) {
        throw new Error("cwise: pre() block may not reference array args")
      }
      if(i < proc.post.args.length && proc.post.args[i].count>0) {
        throw new Error("cwise: post() block may not reference array args")
      }
    } else if(arg_type === "scalar") {
      proc.scalarArgs.push(i)
      proc.shimArgs.push("scalar" + i)
    } else if(arg_type === "index") {
      proc.indexArgs.push(i)
      if(i < proc.pre.args.length && proc.pre.args[i].count > 0) {
        throw new Error("cwise: pre() block may not reference array index")
      }
      if(i < proc.body.args.length && proc.body.args[i].lvalue) {
        throw new Error("cwise: body() block may not write to array index")
      }
      if(i < proc.post.args.length && proc.post.args[i].count > 0) {
        throw new Error("cwise: post() block may not reference array index")
      }
    } else if(arg_type === "shape") {
      proc.shapeArgs.push(i)
      if(i < proc.pre.args.length && proc.pre.args[i].lvalue) {
        throw new Error("cwise: pre() block may not write to array shape")
      }
      if(i < proc.body.args.length && proc.body.args[i].lvalue) {
        throw new Error("cwise: body() block may not write to array shape")
      }
      if(i < proc.post.args.length && proc.post.args[i].lvalue) {
        throw new Error("cwise: post() block may not write to array shape")
      }
    } else if(typeof arg_type === "object" && arg_type.offset) {
      proc.argTypes[i] = "offset"
      proc.offsetArgs.push({ array: arg_type.array, offset:arg_type.offset })
      proc.offsetArgIndex.push(i)
    } else {
      throw new Error("cwise: Unknown argument type " + proc_args[i])
    }
  }
  
  //Make sure at least one array argument was specified
  if(proc.arrayArgs.length <= 0) {
    throw new Error("cwise: No array arguments specified")
  }
  
  //Make sure arguments are correct
  if(proc.pre.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in pre() block")
  }
  if(proc.body.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in body() block")
  }
  if(proc.post.args.length > proc_args.length) {
    throw new Error("cwise: Too many arguments in post() block")
  }

  //Check debug flag
  proc.debug = !!user_args.printCode || !!user_args.debug
  
  //Retrieve name
  proc.funcName = user_args.funcName || "cwise"
  
  //Read in block size
  proc.blockSize = user_args.blockSize || 64

  return createThunk(proc)
}

module.exports = compileCwise


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// The function below is called when constructing a cwise function object, and does the following:
// A function object is constructed which accepts as argument a compilation function and returns another function.
// It is this other function that is eventually returned by createThunk, and this function is the one that actually
// checks whether a certain pattern of arguments has already been used before and compiles new loops as needed.
// The compilation passed to the first function object is used for compiling new functions.
// Once this function object is created, it is called with compile as argument, where the first argument of compile
// is bound to "proc" (essentially containing a preprocessed version of the user arguments to cwise).
// So createThunk roughly works like this:
// function createThunk(proc) {
//   var thunk = function(compileBound) {
//     var CACHED = {}
//     return function(arrays and scalars) {
//       if (dtype and order of arrays in CACHED) {
//         var func = CACHED[dtype and order of arrays]
//       } else {
//         var func = CACHED[dtype and order of arrays] = compileBound(dtype and order of arrays)
//       }
//       return func(arrays and scalars)
//     }
//   }
//   return thunk(compile.bind1(proc))
// }

var compile = __webpack_require__(56)

function createThunk(proc) {
  var code = ["'use strict'", "var CACHED={}"]
  var vars = []
  var thunkName = proc.funcName + "_cwise_thunk"
  
  //Build thunk
  code.push(["return function ", thunkName, "(", proc.shimArgs.join(","), "){"].join(""))
  var typesig = []
  var string_typesig = []
  var proc_args = [["array",proc.arrayArgs[0],".shape.slice(", // Slice shape so that we only retain the shape over which we iterate (which gets passed to the cwise operator as SS).
                    Math.max(0,proc.arrayBlockIndices[0]),proc.arrayBlockIndices[0]<0?(","+proc.arrayBlockIndices[0]+")"):")"].join("")]
  var shapeLengthConditions = [], shapeConditions = []
  // Process array arguments
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    var j = proc.arrayArgs[i]
    vars.push(["t", j, "=array", j, ".dtype,",
               "r", j, "=array", j, ".order"].join(""))
    typesig.push("t" + j)
    typesig.push("r" + j)
    string_typesig.push("t"+j)
    string_typesig.push("r"+j+".join()")
    proc_args.push("array" + j + ".data")
    proc_args.push("array" + j + ".stride")
    proc_args.push("array" + j + ".offset|0")
    if (i>0) { // Gather conditions to check for shape equality (ignoring block indices)
      shapeLengthConditions.push("array" + proc.arrayArgs[0] + ".shape.length===array" + j + ".shape.length+" + (Math.abs(proc.arrayBlockIndices[0])-Math.abs(proc.arrayBlockIndices[i])))
      shapeConditions.push("array" + proc.arrayArgs[0] + ".shape[shapeIndex+" + Math.max(0,proc.arrayBlockIndices[0]) + "]===array" + j + ".shape[shapeIndex+" + Math.max(0,proc.arrayBlockIndices[i]) + "]")
    }
  }
  // Check for shape equality
  if (proc.arrayArgs.length > 1) {
    code.push("if (!(" + shapeLengthConditions.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')")
    code.push("for(var shapeIndex=array" + proc.arrayArgs[0] + ".shape.length-" + Math.abs(proc.arrayBlockIndices[0]) + "; shapeIndex-->0;) {")
    code.push("if (!(" + shapeConditions.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same shape!')")
    code.push("}")
  }
  // Process scalar arguments
  for(var i=0; i<proc.scalarArgs.length; ++i) {
    proc_args.push("scalar" + proc.scalarArgs[i])
  }
  // Check for cached function (and if not present, generate it)
  vars.push(["type=[", string_typesig.join(","), "].join()"].join(""))
  vars.push("proc=CACHED[type]")
  code.push("var " + vars.join(","))
  
  code.push(["if(!proc){",
             "CACHED[type]=proc=compile([", typesig.join(","), "])}",
             "return proc(", proc_args.join(","), ")}"].join(""))

  if(proc.debug) {
    console.log("-----Generated thunk:\n" + code.join("\n") + "\n----------")
  }
  
  //Compile thunk
  var thunk = new Function("compile", code.join("\n"))
  return thunk(compile.bind(undefined, proc))
}

module.exports = createThunk


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uniq = __webpack_require__(16)

// This function generates very simple loops analogous to how you typically traverse arrays (the outermost loop corresponds to the slowest changing index, the innermost loop to the fastest changing index)
// TODO: If two arrays have the same strides (and offsets) there is potential for decreasing the number of "pointers" and related variables. The drawback is that the type signature would become more specific and that there would thus be less potential for caching, but it might still be worth it, especially when dealing with large numbers of arguments.
function innerFill(order, proc, body) {
  var dimension = order.length
    , nargs = proc.arrayArgs.length
    , has_index = proc.indexArgs.length>0
    , code = []
    , vars = []
    , idx=0, pidx=0, i, j
  for(i=0; i<dimension; ++i) { // Iteration variables
    vars.push(["i",i,"=0"].join(""))
  }
  //Compute scan deltas
  for(j=0; j<nargs; ++j) {
    for(i=0; i<dimension; ++i) {
      pidx = idx
      idx = order[i]
      if(i === 0) { // The innermost/fastest dimension's delta is simply its stride
        vars.push(["d",j,"s",i,"=t",j,"p",idx].join(""))
      } else { // For other dimensions the delta is basically the stride minus something which essentially "rewinds" the previous (more inner) dimension
        vars.push(["d",j,"s",i,"=(t",j,"p",idx,"-s",pidx,"*t",j,"p",pidx,")"].join(""))
      }
    }
  }
  if (vars.length > 0) {
    code.push("var " + vars.join(","))
  }  
  //Scan loop
  for(i=dimension-1; i>=0; --i) { // Start at largest stride and work your way inwards
    idx = order[i]
    code.push(["for(i",i,"=0;i",i,"<s",idx,";++i",i,"){"].join(""))
  }
  //Push body of inner loop
  code.push(body)
  //Advance scan pointers
  for(i=0; i<dimension; ++i) {
    pidx = idx
    idx = order[i]
    for(j=0; j<nargs; ++j) {
      code.push(["p",j,"+=d",j,"s",i].join(""))
    }
    if(has_index) {
      if(i > 0) {
        code.push(["index[",pidx,"]-=s",pidx].join(""))
      }
      code.push(["++index[",idx,"]"].join(""))
    }
    code.push("}")
  }
  return code.join("\n")
}

// Generate "outer" loops that loop over blocks of data, applying "inner" loops to the blocks by manipulating the local variables in such a way that the inner loop only "sees" the current block.
// TODO: If this is used, then the previous declaration (done by generateCwiseOp) of s* is essentially unnecessary.
//       I believe the s* are not used elsewhere (in particular, I don't think they're used in the pre/post parts and "shape" is defined independently), so it would be possible to make defining the s* dependent on what loop method is being used.
function outerFill(matched, order, proc, body) {
  var dimension = order.length
    , nargs = proc.arrayArgs.length
    , blockSize = proc.blockSize
    , has_index = proc.indexArgs.length > 0
    , code = []
  for(var i=0; i<nargs; ++i) {
    code.push(["var offset",i,"=p",i].join(""))
  }
  //Generate loops for unmatched dimensions
  // The order in which these dimensions are traversed is fairly arbitrary (from small stride to large stride, for the first argument)
  // TODO: It would be nice if the order in which these loops are placed would also be somehow "optimal" (at the very least we should check that it really doesn't hurt us if they're not).
  for(var i=matched; i<dimension; ++i) {
    code.push(["for(var j"+i+"=SS[", order[i], "]|0;j", i, ">0;){"].join("")) // Iterate back to front
    code.push(["if(j",i,"<",blockSize,"){"].join("")) // Either decrease j by blockSize (s = blockSize), or set it to zero (after setting s = j).
    code.push(["s",order[i],"=j",i].join(""))
    code.push(["j",i,"=0"].join(""))
    code.push(["}else{s",order[i],"=",blockSize].join(""))
    code.push(["j",i,"-=",blockSize,"}"].join(""))
    if(has_index) {
      code.push(["index[",order[i],"]=j",i].join(""))
    }
  }
  for(var i=0; i<nargs; ++i) {
    var indexStr = ["offset"+i]
    for(var j=matched; j<dimension; ++j) {
      indexStr.push(["j",j,"*t",i,"p",order[j]].join(""))
    }
    code.push(["p",i,"=(",indexStr.join("+"),")"].join(""))
  }
  code.push(innerFill(order, proc, body))
  for(var i=matched; i<dimension; ++i) {
    code.push("}")
  }
  return code.join("\n")
}

//Count the number of compatible inner orders
// This is the length of the longest common prefix of the arrays in orders.
// Each array in orders lists the dimensions of the correspond ndarray in order of increasing stride.
// This is thus the maximum number of dimensions that can be efficiently traversed by simple nested loops for all arrays.
function countMatches(orders) {
  var matched = 0, dimension = orders[0].length
  while(matched < dimension) {
    for(var j=1; j<orders.length; ++j) {
      if(orders[j][matched] !== orders[0][matched]) {
        return matched
      }
    }
    ++matched
  }
  return matched
}

//Processes a block according to the given data types
// Replaces variable names by different ones, either "local" ones (that are then ferried in and out of the given array) or ones matching the arguments that the function performing the ultimate loop will accept.
function processBlock(block, proc, dtypes) {
  var code = block.body
  var pre = []
  var post = []
  for(var i=0; i<block.args.length; ++i) {
    var carg = block.args[i]
    if(carg.count <= 0) {
      continue
    }
    var re = new RegExp(carg.name, "g")
    var ptrStr = ""
    var arrNum = proc.arrayArgs.indexOf(i)
    switch(proc.argTypes[i]) {
      case "offset":
        var offArgIndex = proc.offsetArgIndex.indexOf(i)
        var offArg = proc.offsetArgs[offArgIndex]
        arrNum = offArg.array
        ptrStr = "+q" + offArgIndex // Adds offset to the "pointer" in the array
      case "array":
        ptrStr = "p" + arrNum + ptrStr
        var localStr = "l" + i
        var arrStr = "a" + arrNum
        if (proc.arrayBlockIndices[arrNum] === 0) { // Argument to body is just a single value from this array
          if(carg.count === 1) { // Argument/array used only once(?)
            if(dtypes[arrNum] === "generic") {
              if(carg.lvalue) {
                pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // Is this necessary if the argument is ONLY used as an lvalue? (keep in mind that we can have a += something, so we would actually need to check carg.rvalue)
                code = code.replace(re, localStr)
                post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
              } else {
                code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""))
              }
            } else {
              code = code.replace(re, [arrStr, "[", ptrStr, "]"].join(""))
            }
          } else if(dtypes[arrNum] === "generic") {
            pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // TODO: Could we optimize by checking for carg.rvalue?
            code = code.replace(re, localStr)
            if(carg.lvalue) {
              post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
            }
          } else {
            pre.push(["var ", localStr, "=", arrStr, "[", ptrStr, "]"].join("")) // TODO: Could we optimize by checking for carg.rvalue?
            code = code.replace(re, localStr)
            if(carg.lvalue) {
              post.push([arrStr, "[", ptrStr, "]=", localStr].join(""))
            }
          }
        } else { // Argument to body is a "block"
          var reStrArr = [carg.name], ptrStrArr = [ptrStr]
          for(var j=0; j<Math.abs(proc.arrayBlockIndices[arrNum]); j++) {
            reStrArr.push("\\s*\\[([^\\]]+)\\]")
            ptrStrArr.push("$" + (j+1) + "*t" + arrNum + "b" + j) // Matched index times stride
          }
          re = new RegExp(reStrArr.join(""), "g")
          ptrStr = ptrStrArr.join("+")
          if(dtypes[arrNum] === "generic") {
            /*if(carg.lvalue) {
              pre.push(["var ", localStr, "=", arrStr, ".get(", ptrStr, ")"].join("")) // Is this necessary if the argument is ONLY used as an lvalue? (keep in mind that we can have a += something, so we would actually need to check carg.rvalue)
              code = code.replace(re, localStr)
              post.push([arrStr, ".set(", ptrStr, ",", localStr,")"].join(""))
            } else {
              code = code.replace(re, [arrStr, ".get(", ptrStr, ")"].join(""))
            }*/
            throw new Error("cwise: Generic arrays not supported in combination with blocks!")
          } else {
            // This does not produce any local variables, even if variables are used multiple times. It would be possible to do so, but it would complicate things quite a bit.
            code = code.replace(re, [arrStr, "[", ptrStr, "]"].join(""))
          }
        }
      break
      case "scalar":
        code = code.replace(re, "Y" + proc.scalarArgs.indexOf(i))
      break
      case "index":
        code = code.replace(re, "index")
      break
      case "shape":
        code = code.replace(re, "shape")
      break
    }
  }
  return [pre.join("\n"), code, post.join("\n")].join("\n").trim()
}

function typeSummary(dtypes) {
  var summary = new Array(dtypes.length)
  var allEqual = true
  for(var i=0; i<dtypes.length; ++i) {
    var t = dtypes[i]
    var digits = t.match(/\d+/)
    if(!digits) {
      digits = ""
    } else {
      digits = digits[0]
    }
    if(t.charAt(0) === 0) {
      summary[i] = "u" + t.charAt(1) + digits
    } else {
      summary[i] = t.charAt(0) + digits
    }
    if(i > 0) {
      allEqual = allEqual && summary[i] === summary[i-1]
    }
  }
  if(allEqual) {
    return summary[0]
  }
  return summary.join("")
}

//Generates a cwise operator
function generateCWiseOp(proc, typesig) {

  //Compute dimension
  // Arrays get put first in typesig, and there are two entries per array (dtype and order), so this gets the number of dimensions in the first array arg.
  var dimension = (typesig[1].length - Math.abs(proc.arrayBlockIndices[0]))|0
  var orders = new Array(proc.arrayArgs.length)
  var dtypes = new Array(proc.arrayArgs.length)
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    dtypes[i] = typesig[2*i]
    orders[i] = typesig[2*i+1]
  }
  
  //Determine where block and loop indices start and end
  var blockBegin = [], blockEnd = [] // These indices are exposed as blocks
  var loopBegin = [], loopEnd = [] // These indices are iterated over
  var loopOrders = [] // orders restricted to the loop indices
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    if (proc.arrayBlockIndices[i]<0) {
      loopBegin.push(0)
      loopEnd.push(dimension)
      blockBegin.push(dimension)
      blockEnd.push(dimension+proc.arrayBlockIndices[i])
    } else {
      loopBegin.push(proc.arrayBlockIndices[i]) // Non-negative
      loopEnd.push(proc.arrayBlockIndices[i]+dimension)
      blockBegin.push(0)
      blockEnd.push(proc.arrayBlockIndices[i])
    }
    var newOrder = []
    for(var j=0; j<orders[i].length; j++) {
      if (loopBegin[i]<=orders[i][j] && orders[i][j]<loopEnd[i]) {
        newOrder.push(orders[i][j]-loopBegin[i]) // If this is a loop index, put it in newOrder, subtracting loopBegin, to make sure that all loopOrders are using a common set of indices.
      }
    }
    loopOrders.push(newOrder)
  }

  //First create arguments for procedure
  var arglist = ["SS"] // SS is the overall shape over which we iterate
  var code = ["'use strict'"]
  var vars = []
  
  for(var j=0; j<dimension; ++j) {
    vars.push(["s", j, "=SS[", j, "]"].join("")) // The limits for each dimension.
  }
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    arglist.push("a"+i) // Actual data array
    arglist.push("t"+i) // Strides
    arglist.push("p"+i) // Offset in the array at which the data starts (also used for iterating over the data)
    
    for(var j=0; j<dimension; ++j) { // Unpack the strides into vars for looping
      vars.push(["t",i,"p",j,"=t",i,"[",loopBegin[i]+j,"]"].join(""))
    }
    
    for(var j=0; j<Math.abs(proc.arrayBlockIndices[i]); ++j) { // Unpack the strides into vars for block iteration
      vars.push(["t",i,"b",j,"=t",i,"[",blockBegin[i]+j,"]"].join(""))
    }
  }
  for(var i=0; i<proc.scalarArgs.length; ++i) {
    arglist.push("Y" + i)
  }
  if(proc.shapeArgs.length > 0) {
    vars.push("shape=SS.slice(0)") // Makes the shape over which we iterate available to the user defined functions (so you can use width/height for example)
  }
  if(proc.indexArgs.length > 0) {
    // Prepare an array to keep track of the (logical) indices, initialized to dimension zeroes.
    var zeros = new Array(dimension)
    for(var i=0; i<dimension; ++i) {
      zeros[i] = "0"
    }
    vars.push(["index=[", zeros.join(","), "]"].join(""))
  }
  for(var i=0; i<proc.offsetArgs.length; ++i) { // Offset arguments used for stencil operations
    var off_arg = proc.offsetArgs[i]
    var init_string = []
    for(var j=0; j<off_arg.offset.length; ++j) {
      if(off_arg.offset[j] === 0) {
        continue
      } else if(off_arg.offset[j] === 1) {
        init_string.push(["t", off_arg.array, "p", j].join(""))      
      } else {
        init_string.push([off_arg.offset[j], "*t", off_arg.array, "p", j].join(""))
      }
    }
    if(init_string.length === 0) {
      vars.push("q" + i + "=0")
    } else {
      vars.push(["q", i, "=", init_string.join("+")].join(""))
    }
  }

  //Prepare this variables
  var thisVars = uniq([].concat(proc.pre.thisVars)
                      .concat(proc.body.thisVars)
                      .concat(proc.post.thisVars))
  vars = vars.concat(thisVars)
  if (vars.length > 0) {
    code.push("var " + vars.join(","))
  }
  for(var i=0; i<proc.arrayArgs.length; ++i) {
    code.push("p"+i+"|=0")
  }
  
  //Inline prelude
  if(proc.pre.body.length > 3) {
    code.push(processBlock(proc.pre, proc, dtypes))
  }

  //Process body
  var body = processBlock(proc.body, proc, dtypes)
  var matched = countMatches(loopOrders)
  if(matched < dimension) {
    code.push(outerFill(matched, loopOrders[0], proc, body)) // TODO: Rather than passing loopOrders[0], it might be interesting to look at passing an order that represents the majority of the arguments for example.
  } else {
    code.push(innerFill(loopOrders[0], proc, body))
  }

  //Inline epilog
  if(proc.post.body.length > 3) {
    code.push(processBlock(proc.post, proc, dtypes))
  }
  
  if(proc.debug) {
    console.log("-----Generated cwise routine for ", typesig, ":\n" + code.join("\n") + "\n----------")
  }
  
  var loopName = [(proc.funcName||"unnamed"), "_cwise_loop_", orders[0].join("s"),"m",matched,typeSummary(dtypes)].join("")
  var f = new Function(["function ",loopName,"(", arglist.join(","),"){", code.join("\n"),"} return ", loopName].join(""))
  return f()
}
module.exports = generateCWiseOp


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {var Stream = __webpack_require__(58)

// through
//
// a stream that does nothing but re-emit the input.
// useful for aggregating a series of changing but not ending streams into one stream)

exports = module.exports = through
through.through = through

//create a readable writable stream.

function through (write, end, opts) {
  write = write || function (data) { this.queue(data) }
  end = end || function () { this.queue(null) }

  var ended = false, destroyed = false, buffer = [], _ended = false
  var stream = new Stream()
  stream.readable = stream.writable = true
  stream.paused = false

//  stream.autoPause   = !(opts && opts.autoPause   === false)
  stream.autoDestroy = !(opts && opts.autoDestroy === false)

  stream.write = function (data) {
    write.call(this, data)
    return !stream.paused
  }

  function drain() {
    while(buffer.length && !stream.paused) {
      var data = buffer.shift()
      if(null === data)
        return stream.emit('end')
      else
        stream.emit('data', data)
    }
  }

  stream.queue = stream.push = function (data) {
//    console.error(ended)
    if(_ended) return stream
    if(data === null) _ended = true
    buffer.push(data)
    drain()
    return stream
  }

  //this will be registered as the first 'end' listener
  //must call destroy next tick, to make sure we're after any
  //stream piped from here.
  //this is only a problem if end is not emitted synchronously.
  //a nicer way to do this is to make sure this is the last listener for 'end'

  stream.on('end', function () {
    stream.readable = false
    if(!stream.writable && stream.autoDestroy)
      process.nextTick(function () {
        stream.destroy()
      })
  })

  function _end () {
    stream.writable = false
    end.call(stream)
    if(!stream.readable && stream.autoDestroy)
      stream.destroy()
  }

  stream.end = function (data) {
    if(ended) return
    ended = true
    if(arguments.length) stream.write(data)
    _end() // will emit or queue
    return stream
  }

  stream.destroy = function () {
    if(destroyed) return
    destroyed = true
    ended = true
    buffer.length = 0
    stream.writable = stream.readable = false
    stream.emit('close')
    return stream
  }

  stream.pause = function () {
    if(stream.paused) return
    stream.paused = true
    return stream
  }

  stream.resume = function () {
    if(stream.paused) {
      stream.paused = false
      stream.emit('resume')
    }
    drain()
    //may have become paused again,
    //as drain emits 'data'.
    if(!stream.paused)
      stream.emit('drain')
    return stream
  }
  return stream
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

module.exports = Stream;

var EE = __webpack_require__(12).EventEmitter;
var inherits = __webpack_require__(4);

inherits(Stream, EE);
Stream.Readable = __webpack_require__(13);
Stream.Writable = __webpack_require__(66);
Stream.Duplex = __webpack_require__(67);
Stream.Transform = __webpack_require__(68);
Stream.PassThrough = __webpack_require__(69);

// Backwards-compat with node 0.4.x
Stream.Stream = Stream;



// old-style streams.  Note that the pipe method (the only relevant
// part of this class) is overridden in the Readable class.

function Stream() {
  EE.call(this);
}

Stream.prototype.pipe = function(dest, options) {
  var source = this;

  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }

  source.on('data', ondata);

  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }

  dest.on('drain', ondrain);

  // If the 'end' option is not supplied, dest.end() will be called when
  // source gets the 'end' or 'close' events.  Only dest.end() once.
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on('end', onend);
    source.on('close', onclose);
  }

  var didOnEnd = false;
  function onend() {
    if (didOnEnd) return;
    didOnEnd = true;

    dest.end();
  }


  function onclose() {
    if (didOnEnd) return;
    didOnEnd = true;

    if (typeof dest.destroy === 'function') dest.destroy();
  }

  // don't leave dangling pipes when there are errors.
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, 'error') === 0) {
      throw er; // Unhandled stream error in pipe.
    }
  }

  source.on('error', onerror);
  dest.on('error', onerror);

  // remove all the event listeners that were added.
  function cleanup() {
    source.removeListener('data', ondata);
    dest.removeListener('drain', ondrain);

    source.removeListener('end', onend);
    source.removeListener('close', onclose);

    source.removeListener('error', onerror);
    dest.removeListener('error', onerror);

    source.removeListener('end', cleanup);
    source.removeListener('close', cleanup);

    dest.removeListener('close', cleanup);
  }

  source.on('end', cleanup);
  source.on('close', cleanup);

  dest.on('close', cleanup);

  dest.emit('pipe', source);

  // Allow for unix-like usage: A.pipe(B).pipe(C)
  return dest;
};


/***/ }),
/* 59 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = __webpack_require__(9).Buffer;
var util = __webpack_require__(61);

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

if (util && util.inspect && util.inspect.custom) {
  module.exports.prototype[util.inspect.custom] = function () {
    var obj = util.inspect({ length: this.length });
    return this.constructor.name + ' ' + obj;
  };
}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(63);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.



module.exports = PassThrough;

var Transform = __webpack_require__(29);

/*<replacement>*/
var util = __webpack_require__(6);
util.inherits = __webpack_require__(4);
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13).Transform


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13).PassThrough


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(Buffer) {
/**
 * Module exports.
 */

module.exports = dataUriToBuffer;

/**
 * Returns a `Buffer` instance from the given data URI `uri`.
 *
 * @param {String} uri Data URI to turn into a Buffer instance
 * @return {Buffer} Buffer instance from Data URI
 * @api public
 */

function dataUriToBuffer (uri) {
  if (!/^data\:/i.test(uri)) {
    throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');
  }

  // strip newlines
  uri = uri.replace(/\r?\n/g, '');

  // split the URI up into the "metadata" and the "data" portions
  var firstComma = uri.indexOf(',');
  if (-1 === firstComma || firstComma <= 4) throw new TypeError('malformed data: URI');

  // remove the "data:" scheme and parse the metadata
  var meta = uri.substring(5, firstComma).split(';');

  var base64 = false;
  var charset = 'US-ASCII';
  for (var i = 0; i < meta.length; i++) {
    if ('base64' == meta[i]) {
      base64 = true;
    } else if (0 == meta[i].indexOf('charset=')) {
      charset = meta[i].substring(8);
    }
  }

  // get the encoded data portion and decode URI-encoded chars
  var data = unescape(uri.substring(firstComma + 1));

  var encoding = base64 ? 'base64' : 'ascii';
  var buffer = new Buffer(data, encoding);

  // set `.type` property to MIME type
  buffer.type = meta[0] || 'text/plain';

  // set the `.charset` property
  buffer.charset = charset;

  return buffer;
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(7).Buffer))

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "THREE"
var external_THREE_ = __webpack_require__(30);

// EXTERNAL MODULE: ./node_modules/@turf/helpers/index.js
var helpers = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@turf/meta/main.es.js
var main_es = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/@turf/invariant/index.js
var invariant = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/@turf/clone/main.es.js
/**
 * Returns a cloned copy of the passed GeoJSON Object, including possible 'Foreign Members'.
 * ~3-5x faster than the common JSON.parse + JSON.stringify combo method.
 *
 * @name clone
 * @param {GeoJSON} geojson GeoJSON Object
 * @returns {GeoJSON} cloned GeoJSON Object
 * @example
 * var line = turf.lineString([[-74, 40], [-78, 42], [-82, 35]], {color: 'red'});
 *
 * var lineCloned = turf.clone(line);
 */
function clone(geojson) {
    if (!geojson) throw new Error('geojson is required');

    switch (geojson.type) {
    case 'Feature':
        return cloneFeature(geojson);
    case 'FeatureCollection':
        return cloneFeatureCollection(geojson);
    case 'Point':
    case 'LineString':
    case 'Polygon':
    case 'MultiPoint':
    case 'MultiLineString':
    case 'MultiPolygon':
    case 'GeometryCollection':
        return cloneGeometry(geojson);
    default:
        throw new Error('unknown GeoJSON type');
    }
}

/**
 * Clone Feature
 *
 * @private
 * @param {Feature<any>} geojson GeoJSON Feature
 * @returns {Feature<any>} cloned Feature
 */
function cloneFeature(geojson) {
    var cloned = {type: 'Feature'};
    // Preserve Foreign Members
    Object.keys(geojson).forEach(function (key) {
        switch (key) {
        case 'type':
        case 'properties':
        case 'geometry':
            return;
        default:
            cloned[key] = geojson[key];
        }
    });
    // Add properties & geometry last
    cloned.properties = cloneProperties(geojson.properties);
    cloned.geometry = cloneGeometry(geojson.geometry);
    return cloned;
}

/**
 * Clone Properties
 *
 * @private
 * @param {Object} properties GeoJSON Properties
 * @returns {Object} cloned Properties
 */
function cloneProperties(properties) {
    var cloned = {};
    if (!properties) return cloned;
    Object.keys(properties).forEach(function (key) {
        var value = properties[key];
        if (typeof value === 'object') {
            if (value === null) {
                // handle null
                cloned[key] = null;
            } else if (value.length) {
                // handle Array
                cloned[key] = value.map(function (item) {
                    return item;
                });
            } else {
                // handle generic Object
                cloned[key] = cloneProperties(value);
            }
        } else cloned[key] = value;
    });
    return cloned;
}

/**
 * Clone Feature Collection
 *
 * @private
 * @param {FeatureCollection<any>} geojson GeoJSON Feature Collection
 * @returns {FeatureCollection<any>} cloned Feature Collection
 */
function cloneFeatureCollection(geojson) {
    var cloned = {type: 'FeatureCollection'};

    // Preserve Foreign Members
    Object.keys(geojson).forEach(function (key) {
        switch (key) {
        case 'type':
        case 'features':
            return;
        default:
            cloned[key] = geojson[key];
        }
    });
    // Add features
    cloned.features = geojson.features.map(function (feature) {
        return cloneFeature(feature);
    });
    return cloned;
}

/**
 * Clone Geometry
 *
 * @private
 * @param {Geometry<any>} geometry GeoJSON Geometry
 * @returns {Geometry<any>} cloned Geometry
 */
function cloneGeometry(geometry) {
    var geom = {type: geometry.type};
    if (geometry.bbox) geom.bbox = geometry.bbox;

    if (geometry.type === 'GeometryCollection') {
        geom.geometries = geometry.geometries.map(function (geom) {
            return cloneGeometry(geom);
        });
        return geom;
    }
    geom.coordinates = deepSlice(geometry.coordinates);
    return geom;
}

/**
 * Deep Slice coordinates
 *
 * @private
 * @param {Coordinates} coords Coordinates
 * @returns {Coordinates} all coordinates sliced
 */
function deepSlice(coords) {
    if (typeof coords[0] !== 'object') { return coords.slice(); }
    return coords.map(function (coord) {
        return deepSlice(coord);
    });
}

/* harmony default export */ var clone_main_es = (clone);

// CONCATENATED MODULE: ./node_modules/@turf/rhumb-destination/main.es.js



// https://en.wikipedia.org/wiki/Rhumb_line
/**
 * Returns the destination {@link Point} having travelled the given distance along a Rhumb line from the
 * origin Point with the (varant) given bearing.
 *
 * @name rhumbDestination
 * @param {Coord} origin starting point
 * @param {number} distance distance from the starting point
 * @param {number} bearing varant bearing angle ranging from -180 to 180 degrees from north
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] can be degrees, radians, miles, or kilometers
 * @param {Object} [options.properties={}] translate properties to destination point
 * @returns {Feature<Point>} Destination point.
 * @example
 * var pt = turf.point([-75.343, 39.984], {"marker-color": "F00"});
 * var distance = 50;
 * var bearing = 90;
 * var options = {units: 'miles'};
 *
 * var destination = turf.rhumbDestination(pt, distance, bearing, options);
 *
 * //addToMap
 * var addToMap = [pt, destination]
 * destination.properties['marker-color'] = '#00F';
 */
function rhumbDestination(origin, distance, bearing, options) {
    // Optional parameters
    options = options || {};
    if (!Object(helpers["isObject"])(options)) throw new Error('options is invalid');
    var units = options.units;
    var properties = options.properties;

    // validation
    if (!origin) throw new Error('origin is required');
    if (distance === undefined || distance === null) throw new Error('distance is required');
    if (bearing === undefined || bearing === null) throw new Error('bearing is required');
    if (!(distance >= 0)) throw new Error('distance must be greater than 0');

    var distanceInMeters = Object(helpers["convertLength"])(distance, units, 'meters');
    var coords = Object(invariant["getCoord"])(origin);
    var destination = calculateRhumbDestination(coords, distanceInMeters, bearing);

    // compensate the crossing of the 180th meridian (https://macwright.org/2016/09/26/the-180th-meridian.html)
    // solution from https://github.com/mapbox/mapbox-gl-js/issues/3250#issuecomment-294887678
    destination[0] += (destination[0] - coords[0] > 180) ? -360 : (coords[0] - destination[0] > 180) ? 360 : 0;
    return Object(helpers["point"])(destination, properties);
}

/**
 * Returns the destination point having travelled along a rhumb line from origin point the given
 * distance on the  given bearing.
 * Adapted from Geodesy: http://www.movable-type.co.uk/scripts/latlong.html#rhumblines
 *
 * @private
 * @param   {Array<number>} origin - point
 * @param   {number} distance - Distance travelled, in same units as earth radius (default: metres).
 * @param   {number} bearing - Bearing in degrees from north.
 * @param   {number} [radius=6371e3] - (Mean) radius of earth (defaults to radius in metres).
 * @returns {Array<number>} Destination point.
 */
function calculateRhumbDestination(origin, distance, bearing, radius) {
    // φ => phi
    // λ => lambda
    // ψ => psi
    // Δ => Delta
    // δ => delta
    // θ => theta

    radius = (radius === undefined) ? helpers["earthRadius"] : Number(radius);

    var delta = distance / radius; // angular distance in radians
    var lambda1 = origin[0] * Math.PI / 180; // to radians, but without normalize to 𝜋
    var phi1 = Object(helpers["degreesToRadians"])(origin[1]);
    var theta = Object(helpers["degreesToRadians"])(bearing);

    var DeltaPhi = delta * Math.cos(theta);
    var phi2 = phi1 + DeltaPhi;

    // check for some daft bugger going past the pole, normalise latitude if so
    if (Math.abs(phi2) > Math.PI / 2) phi2 = phi2 > 0 ? Math.PI - phi2 : -Math.PI - phi2;

    var DeltaPsi = Math.log(Math.tan(phi2 / 2 + Math.PI / 4) / Math.tan(phi1 / 2 + Math.PI / 4));
    var q = Math.abs(DeltaPsi) > 10e-12 ? DeltaPhi / DeltaPsi : Math.cos(phi1); // E-W course becomes ill-conditioned with 0/0

    var DeltaLambda = delta * Math.sin(theta) / q;
    var lambda2 = lambda1 + DeltaLambda;

    return [((lambda2 * 180 / Math.PI) + 540) % 360 - 180, phi2 * 180 / Math.PI]; // normalise to −180..+180°
}

/* harmony default export */ var rhumb_destination_main_es = (rhumbDestination);

// CONCATENATED MODULE: ./node_modules/@turf/transform-translate/main.es.js






/**
 * Moves any geojson Feature or Geometry of a specified distance along a Rhumb Line
 * on the provided direction angle.
 *
 * @name transformTranslate
 * @param {GeoJSON} geojson object to be translated
 * @param {number} distance length of the motion; negative values determine motion in opposite direction
 * @param {number} direction of the motion; angle from North in decimal degrees, positive clockwise
 * @param {Object} [options={}] Optional parameters
 * @param {string} [options.units='kilometers'] in which `distance` will be express; miles, kilometers, degrees, or radians
 * @param {number} [options.zTranslation=0] length of the vertical motion, same unit of distance
 * @param {boolean} [options.mutate=false] allows GeoJSON input to be mutated (significant performance increase if true)
 * @returns {GeoJSON} the translated GeoJSON object
 * @example
 * var poly = turf.polygon([[[0,29],[3.5,29],[2.5,32],[0,29]]]);
 * var translatedPoly = turf.transformTranslate(poly, 100, 35);
 *
 * //addToMap
 * var addToMap = [poly, translatedPoly];
 * translatedPoly.properties = {stroke: '#F00', 'stroke-width': 4};
 */
function transformTranslate(geojson, distance, direction, options) {
    // Optional parameters
    options = options || {};
    if (!Object(helpers["isObject"])(options)) throw new Error('options is invalid');
    var units = options.units;
    var zTranslation = options.zTranslation;
    var mutate = options.mutate;

    // Input validation
    if (!geojson) throw new Error('geojson is required');
    if (distance === undefined || distance === null || isNaN(distance)) throw new Error('distance is required');
    if (zTranslation && typeof zTranslation !== 'number' && isNaN(zTranslation)) throw new Error('zTranslation is not a number');

    // Shortcut no-motion
    zTranslation = (zTranslation !== undefined) ? zTranslation : 0;
    if (distance === 0 && zTranslation === 0) return geojson;

    if (direction === undefined || direction === null || isNaN(direction)) throw new Error('direction is required');

    // Invert with negative distances
    if (distance < 0) {
        distance = -distance;
        direction = -direction;
    }

    // Clone geojson to avoid side effects
    if (mutate === false || mutate === undefined) geojson = clone_main_es(geojson);

    // Translate each coordinate
    Object(main_es["coordEach"])(geojson, function (pointCoords) {
        var newCoords = Object(invariant["getCoords"])(rhumb_destination_main_es(pointCoords, distance, direction, {units: units}));
        pointCoords[0] = newCoords[0];
        pointCoords[1] = newCoords[1];
        if (zTranslation && pointCoords.length === 3) pointCoords[2] += zTranslation;
    });
    return geojson;
}

/* harmony default export */ var transform_translate_main_es = (transformTranslate);

// EXTERNAL MODULE: ./node_modules/turf-jsts/jsts.min.js
var jsts_min = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/@turf/union/main.es.js


/**
 * Takes two or more {@link Polygon|polygons} and returns a combined polygon. If the input polygons are not contiguous, this function returns a {@link MultiPolygon} feature.
 *
 * @name union
 * @param {...Feature<Polygon>} A polygon to combine
 * @returns {Feature<(Polygon|MultiPolygon)>} a combined {@link Polygon} or {@link MultiPolygon} feature
 * @example
 * var poly1 = turf.polygon([[
 *     [-82.574787, 35.594087],
 *     [-82.574787, 35.615581],
 *     [-82.545261, 35.615581],
 *     [-82.545261, 35.594087],
 *     [-82.574787, 35.594087]
 * ]], {"fill": "#0f0"});
 * var poly2 = turf.polygon([[
 *     [-82.560024, 35.585153],
 *     [-82.560024, 35.602602],
 *     [-82.52964, 35.602602],
 *     [-82.52964, 35.585153],
 *     [-82.560024, 35.585153]
 * ]], {"fill": "#00f"});
 *
 * var union = turf.union(poly1, poly2);
 *
 * //addToMap
 * var addToMap = [poly1, poly2, union];
 */
function union() {
    var reader = new jsts_min["GeoJSONReader"]();
    var result = reader.read(JSON.stringify(arguments[0].geometry));

    for (var i = 1; i < arguments.length; i++) {
        result = jsts_min["UnionOp"].union(result, reader.read(JSON.stringify(arguments[i].geometry)));
    }

    var writer = new jsts_min["GeoJSONWriter"]();
    result = writer.write(result);

    return {
        type: 'Feature',
        geometry: result,
        properties: arguments[0].properties
    };
}

/* harmony default export */ var union_main_es = (union);

// EXTERNAL MODULE: ./node_modules/@turf/area/index.js
var _turf_area = __webpack_require__(31);
var area_default = /*#__PURE__*/__webpack_require__.n(_turf_area);

// EXTERNAL MODULE: ./node_modules/@turf/destination/index.js
var _turf_destination = __webpack_require__(17);
var destination_default = /*#__PURE__*/__webpack_require__.n(_turf_destination);

// EXTERNAL MODULE: ./node_modules/@turf/intersect/index.js
var intersect = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@mapbox/tile-cover/index.js
var tile_cover = __webpack_require__(32);
var tile_cover_default = /*#__PURE__*/__webpack_require__.n(tile_cover);

// EXTERNAL MODULE: ./node_modules/xhr/index.js
var xhr = __webpack_require__(11);
var xhr_default = /*#__PURE__*/__webpack_require__.n(xhr);

// EXTERNAL MODULE: ./node_modules/pbf/index.js
var node_modules_pbf = __webpack_require__(18);
var pbf_default = /*#__PURE__*/__webpack_require__.n(node_modules_pbf);

// EXTERNAL MODULE: ./node_modules/@mapbox/vector-tile/index.js
var vector_tile = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/uniq/uniq.js
var uniq = __webpack_require__(16);
var uniq_default = /*#__PURE__*/__webpack_require__.n(uniq);

// EXTERNAL MODULE: ./node_modules/get-pixels/dom-pixels.js
var dom_pixels = __webpack_require__(33);
var dom_pixels_default = /*#__PURE__*/__webpack_require__.n(dom_pixels);

// EXTERNAL MODULE: ./node_modules/@mapbox/sphericalmercator/sphericalmercator.js
var sphericalmercator = __webpack_require__(34);
var sphericalmercator_default = /*#__PURE__*/__webpack_require__.n(sphericalmercator);

// CONCATENATED MODULE: ./src/index.js
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// if THREE is global (via script-tag loading), use that THREE to prevent
// conflicts with ES6 version. (Line objects become broken, otherwise...)

// console.log('window.THREE:', window.THREE);
var THREE = window.THREE ? window.THREE : external_THREE_;

// import * as turf from '@turf/turf'; // need being more selective - http://turfjs.org/getting-started/
// import { intersect } from '@turf/turf'; // TEST of tree-shaking, not working... FIXME
// console.log('turf:', turf);
//========

// console.log('turfHelpers:', turfHelpers);


//======== FIXME try v7 in future??
// v5 approach introduces jsts.min.js causing bloat (to 482KB)
// https://github.com/Turfjs/turf/issues/1392#issuecomment-403189175
// @turf/union v5.1.5 ok; v6 fails (broken at ele 1160 for the river data)......

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




// turf.intersect (v5.1.6) fails in case MultiPolygon -- https://github.com/Turfjs/turf/issues/702
// so, use this module version with recent fix instead

// console.log('turfIntersect:', turfIntersect);







// no longer used; see colorRangeNonD3()
// import * as d3 from 'd3'; // be more selective - https://github.com/d3/d3
// import { scaleLinear, interpolateRgb } from 'd3'; // not much difference...
// console.log('d3:', d3);




var sixteenthPixelRanges = function () {
    var cols = 512;
    var rows = 512;
    var scaleFactor = 4;
    var ranges = [];
    for (var c = 0; c < scaleFactor; c++) {
        for (var r = 0; r < scaleFactor; r++) {
            ranges.push([[r * (rows / scaleFactor - 1) + r, (r + 1) * rows / scaleFactor], [c * (cols / scaleFactor - 1) + c, (c + 1) * cols / scaleFactor]]);
        }
    };
    return ranges;
}();

var constVertices = 128;
var constTilePixels = new sphericalmercator_default.a({ size: 128 });
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
var computeSeamRows = function computeSeamRows(shift) {
    var totalCount = 49152; // 128 * 128 * 3
    var rowCount = 384; // 128 * 3
    var rows = [[], [], [], []];
    for (var c = 0; c < rowCount; c += 3) {
        // 0, 1, 2, 3; north, west, south, east; +y, -x, -y, +x
        rows[0].push(c + 1 + shift);
        rows[1].push(c / 3 * rowCount + 1 + shift);
        rows[2].push(c + 1 + totalCount - rowCount + shift);
        rows[3].push((c / 3 + 1) * rowCount - 2 + shift);
    }
    return rows;
};
var constSeamRows = computeSeamRows(1);
// console.log('constSeamRows:', constSeamRows);

var src_ThreeGeo = function () {
    function ThreeGeo() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        _classCallCheck(this, ThreeGeo);

        var defaults = {
            unitsSide: 1.0,
            tokenMapbox: "",
            apiVector: 'mapbox-terrain-vector',
            apiRgb: 'mapbox-terrain-rgb',
            apiSatellite: 'mapbox-satellite'
        };
        var actual = Object.assign({}, defaults, opts);
        this.constUnitsSide = actual.unitsSide;
        this.tokenMapbox = actual.tokenMapbox;
        this.apiVector = actual.apiVector;
        this.apiRgb = actual.apiRgb;
        this.apiSatellite = actual.apiSatellite;
    }

    _createClass(ThreeGeo, [{
        key: 'projectCoord',
        value: function projectCoord(coord, nw, se) {
            // lonlat to pixel coordinates
            return [this.constUnitsSide * (1 - (coord[0] - nw[0]) / (se[0] - nw[0])), -this.constUnitsSide * (coord[1] - se[1]) / (se[1] - nw[1])];
        }
    }, {
        key: 'buildSliceGeometry',
        value: function buildSliceGeometry(coords, iContour, color, contours, nw, se, radius) {
            var _this = this;

            var shadedContour = new THREE.Shape();
            var wireframeContours = [new THREE.Geometry()];

            var h = iContour;
            var unitsPerMeter = ThreeGeo.getUnitsPerMeter(this.constUnitsSide, radius);
            var pz = -contours[h].ele * unitsPerMeter;

            // iterate through vertices per shape
            // console.log('coords[0]:', coords[0]);
            coords[0].forEach(function (coord, index) {
                var _projectCoord = _this.projectCoord(coord, nw, se),
                    _projectCoord2 = _slicedToArray(_projectCoord, 2),
                    px = _projectCoord2[0],
                    py = _projectCoord2[1];

                wireframeContours[0].vertices.push(new THREE.Vector3(px, py, pz));
                if (index === 0) {
                    shadedContour.moveTo(px, py);
                } else {
                    shadedContour.lineTo(px, py);
                }
            });

            // carve out holes (if none, would automatically skip this)
            for (var k = 1; k < coords.length; k++) {
                // console.log('holes');
                var holePath = new THREE.Path();
                wireframeContours.push(new THREE.Geometry());

                // iterate through hole path vertices
                for (var j = 0; j < coords[k].length; j++) {
                    var _projectCoord3 = this.projectCoord(coords[k][j], nw, se),
                        _projectCoord4 = _slicedToArray(_projectCoord3, 2),
                        px = _projectCoord4[0],
                        py = _projectCoord4[1];

                    wireframeContours[k].vertices.push(new THREE.Vector3(px, py, pz));
                    if (j === 0) {
                        holePath.moveTo(px, py);
                    } else {
                        holePath.lineTo(px, py);
                    }
                }
                shadedContour.holes.push(holePath);
            }

            var lines = [];
            wireframeContours.forEach(function (_loop, _index) {
                var line = new THREE.Line(wireframeContours[0], new THREE.LineBasicMaterial({
                    color: 0xcccccc
                }));

                //======== align x-y : east-north
                line.rotation.y = Math.PI;
                line.position.x = _this.constUnitsSide / 2;
                line.position.y = -_this.constUnitsSide / 2;
                line.name = 'dem-vec-line-' + contours[h].ele + '-' + line.uuid;

                // line.visible = false;
                lines.push(line);
            });

            var extrudeGeom = new THREE.ExtrudeGeometry(shadedContour, {
                depth: contours[h + 1] ? unitsPerMeter * (contours[h + 1].ele - contours[h].ele) : unitsPerMeter * (contours[h].ele - contours[h - 1].ele),
                bevelEnabled: false
            });
            var extrudeShade = new THREE.Mesh(extrudeGeom, new THREE.MeshBasicMaterial({
                color: color,
                wireframe: false
                // wireframe: true,
            }));

            //======== align x-y : east-north
            extrudeShade.rotation.y = Math.PI;
            extrudeShade.position.x = this.constUnitsSide / 2;
            extrudeShade.position.y = -this.constUnitsSide / 2;
            extrudeShade.position.z = -pz;
            extrudeShade.name = 'dem-vec-shade-' + contours[h].ele + '-' + extrudeShade.uuid;

            return [lines, extrudeShade];
        }
    }, {
        key: 'getVectorDem',
        value: function getVectorDem(contours, northWest, southEast, radius) {
            var _this2 = this;

            // console.log('getVectorDem():', contours, northWest, southEast, radius);

            // deprecated to remove the d3 dependency (save ~125KB)
            // const colorRange = d3.scaleLinear()
            //     .domain([0, contours.length])
            //     .interpolate(d3.interpolateRgb)
            //     .range(["#231918", "#ed6356"]);
            //========
            var _getColorRange = function _getColorRange(range, len) {
                var _rgb = function _rgb(hex) {
                    return [hex >> 16, (hex & 0x00ff00) >> 8, hex & 0x0000ff];
                };
                var arrStart = _rgb(range[0]);
                var arrDiff = _rgb(range[1] - range[0]);
                return function (ic) {
                    var r = arrStart[0] + Math.floor(ic * arrDiff[0] / len);
                    var g = arrStart[1] + Math.floor(ic * arrDiff[1] / len);
                    var b = arrStart[2] + Math.floor(ic * arrDiff[2] / len);
                    // console.log('r g b:', r, g, b);
                    return (r << 16) + (g << 8) + b;
                };
            };
            var colorRange = _getColorRange([0x231918, 0xed6356], contours.length);

            var objs = [];
            var addSlice = function addSlice(coords, ic) {
                // console.log('coords:', coords);
                var _buildSliceGeometry = _this2.buildSliceGeometry(coords, ic, colorRange(ic), contours, northWest, southEast, radius),
                    _buildSliceGeometry2 = _slicedToArray(_buildSliceGeometry, 2),
                    lines = _buildSliceGeometry2[0],
                    extrudeShade = _buildSliceGeometry2[1];

                lines.forEach(function (line) {
                    objs.push(line);
                });
                objs.push(extrudeShade);
            };

            // iterate through elevations
            for (var ic = 0; ic < contours.length; ic++) {
                var level = contours[ic].geometry.geometry;
                // if (ic !== 110) continue; // debug

                // console.log('level.type:', level.type);
                if (level.type === 'Polygon') {
                    addSlice(level.coordinates, ic);
                } else if (level.type === 'MultiPolygon') {
                    // iterate through shapes per elevation
                    for (var i = 0; i < level.coordinates.length; i++) {
                        addSlice(level.coordinates[i], ic);
                    }
                }
            }
            return objs;
        }
    }, {
        key: 'processRgbTile',
        value: function processRgbTile(pixels, zoomposEle, zpCovered, bbox, radius) {
            var _this3 = this;

            var elevations = [];
            if (pixels) {
                var R = void 0,
                    G = void 0,
                    B = void 0;
                for (var e = 0; e < pixels.data.length; e += 4) {
                    R = pixels.data[e];
                    G = pixels.data[e + 1];
                    B = pixels.data[e + 2];
                    elevations.push(-10000 + (R * 256 * 256 + G * 256 + B) * 0.1);
                }
            } else {
                elevations = new Array(262144).fill(0); // 512 * 512 (=1/4 MB)
            }
            // console.log('elevations:', elevations); // elevations: (262144) [...]

            // figure out tile coordinates of the 16 grandchildren of this tile
            var sixteenths = [];
            for (var c = 0; c < 4; c++) {
                // col
                for (var r = 0; r < 4; r++) {
                    // row
                    sixteenths.push([zoomposEle[0] + 2, zoomposEle[1] * 4 + c, zoomposEle[2] * 4 + r].join('/'));
                }
            }
            // console.log('sixteenths:', sixteenths);

            var zpCoveredStr = zpCovered.map(function (zp) {
                return zp.join('/');
            });
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

            var unitsPerMeter = ThreeGeo.getUnitsPerMeter(this.constUnitsSide, radius);
            var dataEle = [];
            sixteenths.forEach(function (zoomposStr, index) {
                if (!zpCoveredStr.includes(zoomposStr)) return;

                var zoompos = ThreeGeo.deslash(zoomposStr);
                var pxRange = sixteenthPixelRanges[index];
                var elev = [];

                for (var _r = pxRange[0][0]; _r < pxRange[0][1]; _r++) {
                    for (var _c = pxRange[1][0]; _c < pxRange[1][1]; _c++) {
                        elev.push(elevations[_r * 512 + _c]);
                    }
                }
                // console.log('elev:', elev); // 16384 = 128 * 128 elements

                var array = [];
                var dataIndex = 0;
                for (var row = 0; row < constVertices; row++) {
                    for (var col = 0; col < constVertices; col++) {
                        var lonlatPixel = constTilePixels.ll([zoompos[1] * 128 + col, zoompos[2] * 128 + row], zoompos[0]);
                        // console.log('lonlatPixel:', lonlatPixel);

                        var _projectCoord5 = _this3.projectCoord(lonlatPixel, bbox.northWest, bbox.southEast),
                            _projectCoord6 = _slicedToArray(_projectCoord5, 2),
                            px = _projectCoord6[0],
                            py = _projectCoord6[1];
                        // NOTE: do use shift = 1 for computeSeamRows()


                        array.push(-px, py, elev[dataIndex] * unitsPerMeter);
                        dataIndex++;
                    }
                }
                // console.log('zoompos, array:', zoompos, array); // 49152 = 128*128*3 elements
                dataEle.push([zoompos, array]);
            });
            // console.log('dataEle:', dataEle);
            return dataEle;
        }
    }, {
        key: 'getRgbDem',
        value: function getRgbDem(dataEle, apiSatellite, onSatelliteMat) {
            var _this4 = this;

            console.log('apiSatellite:', apiSatellite);

            // dataEle should be sorted so that ThreeGeo.resolveSeams() is applied
            // in the proper order, or the results will have broken stripes
            // due to stitchWithNei3()
            dataEle.sort(function (zp1, zp2) {
                return zp1[0].join('/') > zp2[0].join('/') ? 1 : -1;
            });
            // console.log('dataEle (sorted):', dataEle);

            var objs = [];
            var dataEleIds = ThreeGeo.getDataEleIds(dataEle);
            dataEle.forEach(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    zoompos = _ref2[0],
                    array = _ref2[1];

                // console.log(zoompos, array);
                if (array.length !== constVertices * constVertices * 3) {
                    // assumtion on the size of the array failed...
                    console.log('woops: already seams resolved? or what..., NOP');
                    return;
                }

                // console.log('dealing with the seams of:', zoompos);
                var cSegments = ThreeGeo.resolveSeams(array, ThreeGeo.getNeighborsInfo(dataEle, dataEleIds, zoompos));
                // w and h don't matter since position.array is being overwritten
                var geom = new THREE.PlaneBufferGeometry(1, 1, cSegments[0], cSegments[1]);
                geom.attributes.position.array = new Float32Array(array);
                //--------
                // test identifying a 127x1 "belt"
                // let geom = new THREE.PlaneBufferGeometry(1, 1, 127, 1);
                // let arr = array;
                // arr.length = 128*2*3;
                // geom.attributes.position.array = new Float32Array(arr);

                var plane = new THREE.Mesh(geom, new THREE.MeshBasicMaterial({
                    wireframe: true,
                    color: 0x999999
                }));
                plane.position.x = _this4.constUnitsSide / 2;
                plane.position.y = -_this4.constUnitsSide / 2;
                plane.name = 'dem-rgb-' + zoompos.join('/');
                objs.push(plane);

                ThreeGeo.resolveTex(zoompos, apiSatellite, _this4.tokenMapbox, function (tex) {
                    if (tex) {
                        plane.material = new THREE.MeshBasicMaterial({
                            side: THREE.FrontSide,
                            // side: THREE.DoubleSide,
                            map: tex
                        });
                    }
                    if (onSatelliteMat) {
                        onSatelliteMat(plane);
                    }
                });
            });
            return objs;
        }
    }, {
        key: 'getRgbTiles',
        value: function getRgbTiles(zpCovered, bbox, radius, apiRgb, apiSatellite, onRgbDem, onSatelliteMat) {
            var _this5 = this;

            var zpEle = ThreeGeo.getZoomposEle(zpCovered); // e.g. satellite's zoom: 14
            console.log('zpEle:', zpEle); // e.g. dem's zoom: 12 (=14-2)

            var dataEleCovered = [];
            var count = 0; // TODO use Promise() instead ??
            zpEle.forEach(function (zoompos) {
                // console.log('ele zoompos', zoompos);
                ThreeGeo.fetchTile(zoompos, apiRgb, _this5.tokenMapbox, function (pixels) {
                    if (pixels) {
                        dataEleCovered = dataEleCovered.concat(_this5.processRgbTile(pixels, zoompos, zpCovered, bbox, radius));
                        console.log('now ' + dataEleCovered.length + ' satellite tiles in dataEleCovered');
                    } else {
                        console.log('fetchTile() failed for rgb dem of zp: ' + zoompos + ' (count: ' + count + '/' + zpEle.length + ')');
                    }

                    count++;
                    if (count === zpEle.length) {
                        console.log('dataEleCovered:', dataEleCovered);
                        if (onRgbDem) {
                            onRgbDem(_this5.getRgbDem(dataEleCovered, apiSatellite, onSatelliteMat));
                        }
                    }
                });
            });
        }
    }, {
        key: 'getVectorTiles',
        value: function getVectorTiles(zpCovered, bbox, radius, apiVector, onVectorDem) {
            var _this6 = this;

            var zpEle = ThreeGeo.getZoomposEle(zpCovered); // e.g. satellite's zoom: 14
            console.log('zpEle:', zpEle); // e.g. dem's zoom: 12 (=14-2)

            var bottomTiles = []; // will get reduced
            var geojson = { // will get reduced
                type: "FeatureCollection",
                features: []
            };
            var count = 0; // TODO use Promise() instead ??
            zpEle.forEach(function (zoompos) {
                ThreeGeo.fetchTile(zoompos, apiVector, _this6.tokenMapbox, function (tile) {
                    if (tile) {
                        ThreeGeo.processVectorTile(tile, zoompos, geojson, bottomTiles);
                    } else {
                        console.log('fetchTile() failed for vector dem of zp: ' + zoompos + ' (count: ' + count + '/' + zpEle.length + ')');
                    }

                    count++;
                    if (count === zpEle.length) {
                        var contours = ThreeGeo.processVectorGeojson(geojson, bottomTiles, bbox.feature, radius);
                        onVectorDem(_this6.getVectorDem(contours, bbox.northWest, bbox.southEast, radius));
                    }
                });
            });
        }
    }, {
        key: 'getTerrain',


        // tiles to cover a 5km-radius:  - processing
        // zoom: 15, // 64  <= 8x8 tiles - 8s
        // zoom: 14, // 20  <= 5x5 tiles - 4s (high resolution)
        // zoom: 13, // 6-9 <= 3x3 tiles - 2s (default)
        // zoom: 12, // 2-4 <= 2x2 tiles - 1s
        // zoom: 11, // 1 tile           - 0s
        value: function getTerrain(origin, radius, zoom) {
            var callbacks = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

            var bbox = ThreeGeo.getBbox(origin, radius);
            console.log('bbox:', bbox);

            var zpCovered = ThreeGeo.getZoomposCovered(bbox.feature, zoom);
            console.log('zpCovered:', zpCovered);
            if (0) {}

            if (callbacks.onVectorDem) {
                this.getVectorTiles(zpCovered, bbox, radius, this.apiVector, callbacks.onVectorDem);
            }
            if (callbacks.onRgbDem) {
                this.getRgbTiles(zpCovered, bbox, radius, this.apiRgb, this.apiSatellite, callbacks.onRgbDem, callbacks.onSatelliteMat);
            }
        }
    }, {
        key: 'setApiVector',
        value: function setApiVector(api) {
            this.apiVector = api;
        }
    }, {
        key: 'setApiRgb',
        value: function setApiRgb(api) {
            this.apiRgb = api;
        }
    }, {
        key: 'setApiSatellite',
        value: function setApiSatellite(api) {
            this.apiSatellite = api;
        }
    }], [{
        key: 'getEleList',
        value: function getEleList(geojson) {
            var mapper = function mapper(feature) {
                return feature.properties.ele;
            };
            return uniq_default()(geojson.features.map(mapper)).sort(function (a, b) {
                return a - b;
            });
        }
    }, {
        key: 'addBottomEle',
        value: function addBottomEle(geojson, bottomTiles, eleList) {
            bottomTiles.forEach(function (bottom) {
                var tileBottomEle = bottom.properties.ele;
                for (var k = eleList[0]; k < tileBottomEle; k += 10) {
                    // console.log('k:', k);
                    geojson.features.push({
                        type: "Feature",
                        geometry: bottom.geometry,
                        properties: { ele: k }
                    });
                }
            });
        }
    }, {
        key: 'getContours',
        value: function getContours(eleList, geojson, polygon, maxArea) {
            var contours = [];

            // iterate through elevations, and merge polys of the same elevation

            var _loop2 = function _loop2(x) {
                // console.log(`getContours(): ${x}/${eleList.length}`);
                var currentElevation = eleList[x];
                var elevationPolys = geojson.features.filter(function (feature) {
                    return feature.properties.ele === currentElevation;
                });

                try {
                    // merge between tiles
                    var feats = helpers["featureCollection"](elevationPolys).features;
                    // console.log(currentElevation, feats.length, feats);
                    // feats.forEach(feat => { console.log('type:', feat.geometry.type); }); // 'Polygon'

                    var mergedElevationPoly = feats.reduce(function (accm, feat) {
                        return union_main_es(accm, feat);
                    }, feats[0]);
                    // console.log('@@@', mergedElevationPoly, currentElevation);

                    if (0) {}

                    // console.log('@@@mergedElevationPoly:', mergedElevationPoly);
                    if (mergedElevationPoly) {
                        // console.log('@@@merge success', currentElevation);
                        var contourArea = area_default()(mergedElevationPoly.geometry);
                        // L.mapbox.featureLayer().setGeoJSON(mergedElevationPoly).addTo(map);

                        contours.push({
                            'geometry': mergedElevationPoly,
                            'ele': currentElevation,
                            'area': contourArea
                        });
                    }
                } catch (error) {
                    // on merge fail, insert the previous contour again and skip
                    console.log('merge failed at elevation ' + currentElevation);
                    console.log(error.message);
                }
            };

            for (var x = 0; x < eleList.length; x++) {
                _loop2(x);
            }

            // remove contour undercuts
            if (0) { var prevContour, currContour, m; }

            return contours;
        }
    }, {
        key: 'getUnitsPerMeter',
        value: function getUnitsPerMeter(unitsSide, radius) {
            return unitsSide / (radius * Math.pow(2, 0.5) * 1000);
        }
    }, {
        key: 'dumpBufferAsBlob',
        value: function dumpBufferAsBlob(buffer, name) {
            // https://discourse.threejs.org/t/how-to-create-a-new-file-and-save-it-with-arraybuffer-content/628/2
            var file = new Blob([buffer], { type: "application/octet-stream" });
            var anc = document.createElement("a");
            anc.href = URL.createObjectURL(file);
            anc.download = name;
            document.body.appendChild(anc);
            anc.click();
        }
    }, {
        key: 'blobToBuffer',
        value: function blobToBuffer(blob, cb) {
            // https://stackoverflow.com/questions/15341912/how-to-go-from-blob-to-arraybuffer
            var fr = new FileReader();
            fr.onload = function (e) {
                var buffer = e.target.result;
                cb(buffer);
            };
            fr.readAsArrayBuffer(blob);
        }
    }, {
        key: 'getUriOffline',
        value: function getUriOffline(api, zoompos) {
            return api + '-' + zoompos.join('-') + '.blob';
        }
    }, {
        key: 'getUriMapbox',
        value: function getUriMapbox(token, api, zoompos) {
            var prefix = void 0,
                res = void 0;
            switch (api) {
                case 'mapbox-terrain-vector':
                    prefix = 'https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2';
                    res = '.vector.pbf';
                    break;
                case 'mapbox-terrain-rgb':
                    prefix = 'https://api.mapbox.com/v4/mapbox.terrain-rgb';
                    res = '@2x.pngraw';
                    break;
                case 'mapbox-satellite':
                    prefix = 'https://api.mapbox.com/v4/mapbox.streets-satellite';
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
            return prefix + '/' + zoompos.join('/') + res + '?access_token=' + token;
        }
    }, {
        key: 'fetchTile',
        value: function fetchTile(zoompos, api, token, cb) {
            var _this7 = this;

            var isOnline = api.startsWith('mapbox-');
            var uri = isOnline ? this.getUriMapbox(token, api, zoompos) : this.getUriOffline(api, zoompos);
            var xhrDumpBlob = function xhrDumpBlob(uri, api, zoompos) {
                xhr_default()({ uri: uri, responseType: 'arraybuffer' }, function (error, response, buffer) {
                    if (error || response.statusCode === 404) {
                        console.log('xhrDumpBlob(): failed for uri: ' + uri);
                        return;
                    }

                    var name = api + '-' + zoompos.join('-') + '.blob';
                    _this7.dumpBufferAsBlob(buffer, name);
                });
            };
            var dumpBlobForDebug = 0;

            if (api.includes('mapbox-terrain-vector')) {
                if (isOnline) {
                    if (dumpBlobForDebug) {
                        xhrDumpBlob(uri, api, zoompos);
                        // return;
                    }
                    xhr_default()({ uri: uri, responseType: 'arraybuffer' }, function (error, response, buffer) {
                        if (error || response.statusCode === 404) {
                            cb(null);
                            return;
                        }
                        // console.log('mapbox -> buffer:', buffer); // ArrayBuffer(39353) {}
                        cb(new vector_tile["VectorTile"](new pbf_default.a(buffer)));
                    });
                } else {
                    xhr_default()({ uri: uri, responseType: 'blob' }, function (error, response, blob) {
                        // console.log('error, response, blob:', error, response, blob);
                        if (error || response.statusCode === 404) {
                            cb(null);
                            return;
                        }
                        _this7.blobToBuffer(blob, function (buffer) {
                            // console.log('blob -> buffer:', buffer); // ArrayBuffer(39353) {}
                            try {
                                var pbf = new pbf_default.a(buffer);
                                cb(new vector_tile["VectorTile"](pbf));
                            } catch (e) {
                                // console.log('e:', e);
                                cb(null);
                                return;
                            }
                        });
                    });
                }
            } else if (api.includes('mapbox-terrain-rgb') || api.includes('mapbox-satellite')) {

                // if (isOnline && dumpBlobForDebug && api.includes('mapbox-terrain-rgb')) {
                // if (isOnline && dumpBlobForDebug && api.includes('mapbox-satellite')) {
                if (isOnline && dumpBlobForDebug) {
                    xhrDumpBlob(uri, api, zoompos);
                    // return;
                }

                // console.log('uri:', uri);
                dom_pixels_default()(uri, function (err, pixels) {
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

    }, {
        key: 'getZoomposCovered',
        value: function getZoomposCovered(polygon, zoom) {
            // isochrone polygon
            // https://www.mapbox.com/vector-tiles/mapbox-terrain/#contour
            // Zoom level  Contour Interval
            // 9  500 meters
            // 10  200 meters
            // 11  100 meters
            // 12  50 meters
            // 13  20 meters
            // 14+  10 meters
            var limits = {
                min_zoom: zoom,
                max_zoom: zoom
            };
            return tile_cover_default.a.tiles(polygon.geometry, limits) // poszoom
            .map(function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 3),
                    x = _ref4[0],
                    y = _ref4[1],
                    z = _ref4[2];

                return [z, x, y];
            }); // zoompos now!!
        }
    }, {
        key: 'getZoomposEle',
        value: function getZoomposEle(zpArray) {
            // compute elevation tiles belonging to the gradparent zoom level
            var elevations = {};
            zpArray.forEach(function (zoompos) {
                var grandparent = [zoompos[0] - 2, Math.floor(zoompos[1] / 4), Math.floor(zoompos[2] / 4)];
                if (elevations[grandparent]) {
                    elevations[grandparent].push(zoompos);
                } else {
                    elevations[grandparent] = [zoompos];
                }
            });
            // console.log('elevations:', elevations);

            var zpEle = Object.keys(elevations).map(function (triplet) {
                return triplet.split(',').map(function (num) {
                    return parseFloat(num);
                });
            });
            // console.log('zpEle:', zpEle);
            return zpEle;
        }
    }, {
        key: 'processVectorTile',
        value: function processVectorTile(tile, zoompos, geojson, bottomTiles) {
            var contour = tile.layers.contour;
            if (!contour) {
                // zoom <= 8
                console.log('processVectorTile(): no contours! (zoom=' + zoompos[0] + ')');
                return;
            }

            //populate geoJSON

            var _loop3 = function _loop3(i) {
                // convert each feature (within #population) into a geoJSON polygon,
                // and push it into our variable
                var feature = tile.layers.contour.feature(i).toGeoJSON(zoompos[1], zoompos[2], zoompos[0]);
                if (i === 0) {
                    bottomTiles.push(feature);
                }

                // break multigons into multiple polygons
                if (feature.geometry.type === 'MultiPolygon') {
                    feature.geometry.coordinates.forEach(function (polygon) {
                        var feat = {
                            type: 'Feature',
                            properties: { ele: feature.properties.ele },
                            geometry: { type: 'Polygon', coordinates: polygon }
                        };
                        geojson.features.push(feat);
                    });
                } else {
                    // single polygons can be pushed in as-is
                    geojson.features.push(feature);
                }
            };

            for (var i = 0; i < tile.layers.contour.length; i++) {
                _loop3(i);
            }
        }
    }, {
        key: 'processVectorGeojson',
        value: function processVectorGeojson(geojson, bottomTiles, polygon, radius) {
            // console.log('polygon:', polygon);
            // console.log('bottomTiles:', bottomTiles);
            var eleList = this.getEleList(geojson);
            // console.log('eleList:', eleList);
            this.addBottomEle(geojson, bottomTiles, eleList);
            // console.log('geojson:', geojson);

            var maxArea = radius * radius * 2 * 1000000; // (r * sqrt2 * 1000)**2
            var contours = this.getContours(eleList, geojson, polygon, maxArea);
            // console.log('contours:', contours);
            return contours;
        }
    }, {
        key: 'deslash',
        value: function deslash(input) {
            return input.split('/').map(function (str) {
                return parseInt(str);
            });
        }
    }, {
        key: 'stitchWithNei2',
        value: function stitchWithNei2(array, arrayNei) {
            // add a new south row
            for (var i = 0; i < constVertices; i++) {
                var indexZ = constSeamRows[2][i] + constVertices * 3; // new south row
                var indexZNei = constSeamRows[0][i]; // north row to copy
                array[indexZ - 2] = arrayNei[indexZNei - 2]; // a new x
                array[indexZ - 1] = arrayNei[indexZNei - 1]; // a new y
                array[indexZ] = arrayNei[indexZNei]; // a new z
            }
        }
    }, {
        key: 'stitchWithNei3',
        value: function stitchWithNei3(array, arrayNei) {
            // add a new east col
            for (var i = 0; i < constVertices; i++) {
                var indexZ = constSeamRows[3][i] + (1 + i) * 3; // new east col
                var indexZNei = constSeamRows[1][i]; // west col to copy
                // https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index
                // arr = [0,1,2,3]
                // arr.splice(2, 0, 99)
                // arr
                // (5) [0, 1, 99, 2, 3]
                array.splice(indexZ - 2, 0, arrayNei[indexZNei - 2]);
                array.splice(indexZ - 1, 0, arrayNei[indexZNei - 1]);
                array.splice(indexZ, 0, arrayNei[indexZNei]);
            }
        }
    }, {
        key: 'resolveSeams',
        value: function resolveSeams(array, infoNei) {
            var _this8 = this;

            // console.log('infoNei:', infoNei);
            var cSegments = [constVertices - 1, constVertices - 1];

            Object.entries(infoNei).forEach(function (_ref5) {
                var _ref6 = _slicedToArray(_ref5, 2),
                    idxNei = _ref6[0],
                    arrayNei = _ref6[1];

                if (idxNei === "2") {
                    // console.log('now stitchWithNei2()...');
                    _this8.stitchWithNei2(array, arrayNei);
                    cSegments[1]++;
                } else if (idxNei === "3") {
                    // console.log('now stitchWithNei3()...');
                    _this8.stitchWithNei3(array, arrayNei);
                    cSegments[0]++;
                }
            });

            if (cSegments[0] === constVertices && cSegments[1] === constVertices) {
                // Both stitchWithNei2() and stitchWithNei3() were
                // applided to this array.  Need filling a diagonal pothole.
                // console.log('filling a pothole...');
                var arrayNei6 = infoNei["6"];
                if (arrayNei6) {
                    array.push(arrayNei6[0], arrayNei6[1], arrayNei6[2]);
                } else {
                    // filling with a degenerated triangle
                    var len = array.length;
                    array.push(array[len - 3], array[len - 2], array[len - 1]);
                }
            }
            return cSegments;
        }
    }, {
        key: 'getNeighbors8',
        value: function getNeighbors8(zoompos) {
            // 8-neighbors:
            // 4 0 7
            // 1 + 3
            // 5 2 6
            //--------
            // 0, 1, 2, 3: north, west, south, east; +y, -x, -y, +x
            // 4, 5, 6, 7: diagonal neighbors
            var zoomposNeighborsDiff = [[0, 0, -1], [0, -1, 0], [0, 0, 1], [0, 1, 0], [0, -1, -1], [0, -1, 1], [0, 1, 1], [0, 1, -1]];
            var neighbors = [];
            zoomposNeighborsDiff.forEach(function (zoomposDiff) {
                var zoomposNei = zoomposDiff.map(function (coord, idxCoord) {
                    return coord + zoompos[idxCoord];
                });
                // console.log('8-neighbor candidate:', zoomposNei);
                neighbors.push(zoomposNei);
            });
            return neighbors;
        }
    }, {
        key: 'getDataEleIds',
        value: function getDataEleIds(dataEle) {
            var ids = {};
            dataEle.forEach(function (data, idx) {
                ids[data[0].join('/')] = idx;
            });
            console.log('ids:', ids);
            return ids;
        }
    }, {
        key: 'getNeighborsInfo',
        value: function getNeighborsInfo(dataEle, dataEleIds, zoompos) {
            var infoNei = {};
            this.getNeighbors8(zoompos).forEach(function (zoomposNei, idxNei) {
                var id = zoomposNei.join('/');
                if (id in dataEleIds) {
                    var arrayNei = dataEle[dataEleIds[id]][1];
                    // console.log('real neighbor yes:', zoomposNei, idxNei, arrayNei);
                    infoNei[idxNei] = arrayNei;
                }
            });
            return infoNei;
        }
    }, {
        key: 'resolveTex',
        value: function resolveTex(zoompos, apiSatellite, token, onTex) {
            this.fetchTile(zoompos, apiSatellite, token, function (pixels) {
                var tex = null;
                if (pixels) {
                    // console.log("satellite pixels", pixels.shape.slice());
                    // console.log('satellite pixels:', pixels);
                    // https://threejs.org/docs/#api/textures/DataTexture
                    tex = new THREE.DataTexture(pixels.data, pixels.shape[0], pixels.shape[1], THREE.RGBAFormat);
                    tex.flipY = true;
                    tex.needsUpdate = true;
                } else {
                    console.log('fetchTile() failed for tex of zp: ' + zoompos);
                }
                if (onTex) {
                    onTex(tex);
                }
            });
        }
    }, {
        key: 'getBbox',
        value: function getBbox(origin, radius) {
            var reverseCoords = function reverseCoords(coords) {
                return [coords[1], coords[0]];
            };
            var northWest = destination_default()(helpers["point"](reverseCoords(origin)), radius, -45, { units: 'kilometers' }).geometry.coordinates;
            var southEast = destination_default()(helpers["point"](reverseCoords(origin)), radius, 135, { units: 'kilometers' }).geometry.coordinates;
            var testPolygon = {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "type": "Polygon",
                        "coordinates": [[]]
                    }
                }]
            };
            var polygon = testPolygon.features[0];
            polygon.geometry.coordinates[0] = [northWest, [southEast[0], northWest[1]], southEast, [northWest[0], southEast[1]], northWest];
            // console.log('testPolygon:', testPolygon);
            return {
                feature: polygon,
                northWest: northWest,
                southEast: southEast
            };
        }
    }]);

    return ThreeGeo;
}();

/* harmony default export */ var src = __webpack_exports__["default"] = (src_ThreeGeo);

/***/ })
/******/ ])["default"];
});