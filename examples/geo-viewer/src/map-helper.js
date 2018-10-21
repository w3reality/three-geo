
// if THREE is global (via script-tag loading), use that THREE to prevent
// conflicts with ES6 version. (Line objects become broken, otherwise...)
import * as THREE_ES6 from 'three';
// console.log('window.THREE:', window.THREE);
const THREE = window.THREE ? window.THREE : THREE_ES6;

import ThreeGeo from '../../../src'; // for dev; fast compile
// import ThreeGeo from '../../../lib/three-geo.js'; // for dev; slow compile

import L from 'leaflet';
// console.log('L:', L);

// import * as turf from '@turf/turf';
//========
import * as turfHelpers from '@turf/helpers';
import turfDistance from '@turf/distance';
// import turfLineDistance from '@turf/line-distance'; // ?? runtime error about distance()
import turfTransformTranslate from '@turf/transform-translate';
import turfTransformRotate from '@turf/transform-rotate';
import turfCircle from '@turf/circle/index';

import $ from 'jquery';
// console.log('$:', $);

import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
// import { GeoSearchControl, OpenStreetMapProvider } from '/Users/j/Projects/j-devel/leaflet-geosearch';


class MapHelper {
    constructor(options={}) {
        const defaults = {
            origin: null,
            radius: null,
            unitsPerMeter: null,
            mapId: 'map',
            enableTiles: false,
            onBuildTerrain: null,
        };
        let actual = Object.assign({}, defaults, options);
        if (!actual.origin || !actual.radius || !actual.unitsPerMeter) {
            throw "Invalid origin, radius, or unitsPerMeter";
        }
        this.origin = actual.origin;
        this.radius = actual.radius;
        this.unitsPerMeter = actual.unitsPerMeter;
        this.mapId = actual.mapId;
        this.enableTiles = actual.enableTiles;
        this.onBuildTerrain = actual.onBuildTerrain;

        let _origin = actual.origin;
        let _radius = actual.radius;
        let _unitsPerMeter = actual.unitsPerMeter;
        let _mapId = actual.mapId;
        let _enableTiles = actual.enableTiles;


        // let this.map = L.map(_mapId, {center: latlng, zoom: 13});
        this.map = L.map(_mapId).setView(_origin, 12);

        MapHelper.addSearchControl(this.map, (ll) => { // latlng
            this.buildTerrain(ll);
        });

        // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
        //     foo: 'bar',
        if (_enableTiles) { // ?? when cache off, often getting 504 errors per CORS ........
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                // crossOrigin: true,
            }).addTo(this.map);
        }

        //--------
        this._bboxLayers = [];

        let _bbox = ThreeGeo.getBbox(_origin, _radius);
        console.log('_bbox:', _bbox);
        this.updateBboxLayers(_origin, _bbox.feature); // first time

        //--------
        this.markerTmp = null;
        this.bbTmp = null;
        this.map.on('click', e => {
            // console.log('e:', e);
            this.showDialog([e.latlng.lat, e.latlng.lng]);
        });

        this.camMarker = null;
        this.orbitMarker = null;
        this.orbitCircle = null;

        if (0) { // turf experiments...
            const _map = this.map;
            let nw = MapHelper.swap(_bbox.northWest); // latlng
            let se = MapHelper.swap(_bbox.southEast);
            // L.marker(nw).addTo(_map);
            // L.marker(se).addTo(_map);

            let ptOrigin = MapHelper.mkGeoJsonPoint(_origin);
            let ptNw = MapHelper.mkGeoJsonPoint(nw);
            let ptSe = MapHelper.mkGeoJsonPoint(se);

            let dist = turf.distance(ptNw, ptSe, {units: "kilometers"});
            console.log('dist:', dist);
            let ttOpts = {permanent: true, direction: 'right'};
            L.geoJson(ptNw).addTo(_map).bindTooltip(`nw: ${MapHelper.llToString(nw)}`, ttOpts);
            L.geoJson(ptSe).addTo(_map).bindTooltip(`se: ${MapHelper.llToString(nw)} dist: ${dist.toFixed(3)} km`, ttOpts);

            if (0) {
                // FIXME why turf.buffer's circle too small??????
                // related ?? https://github.com/Turfjs/turf/issues/801

                // let buffered = turf.buffer(ptOrigin, 5, {units: "kilometers"});
                // let result = turf.featureCollection([buffered, ptOrigin]);
                // L.geoJson(buffered).addTo(_map).bindPopup("<h2>5 km</h2>");
                // L.geoJson(result).addTo(_map).bindPopup("<h2>5 km</h2>");
                //----
                // var point = turf.point([-90.548630, 14.616599]);
                // var buffered = turf.buffer(point, 500, {units: 'miles'});
                let point = turf.point([_origin[1], _origin[0]]);
                var buffered = turf.buffer(point, 5, {units: 'kilometers'});
                L.geoJson(buffered).addTo(_map).bindPopup("<h2>5 km</h2>");

                let e1 = turf.envelope(buffered);
                let l2 = turf.lineString([
                    e1.geometry.coordinates[0][0],
                    e1.geometry.coordinates[0][1]]
                );
                let d2 = turf.lineDistance(l2, {units: 'kilometers'});
                // L.geoJson(e1).addTo(_map);
                L.geoJson(l2).addTo(_map);
                console.log('d2:', d2);
            }

            let c1 = turf.circle(ptOrigin, 5, {units: 'kilometers'});
            let c2 = turf.circle(ptOrigin, 5 / Math.sqrt(2), {units: 'kilometers'});
            L.geoJson(c1).addTo(_map);
            let e2 = turf.envelope(c2);
            L.geoJson(e2).addTo(_map);
        }
    }

    static addSearchControl(map, onLocationSelected) {
        // https://github.com/smeijer/leaflet-geosearch#geosearchcontrol
        const searchControl = new GeoSearchControl({
            provider: new OpenStreetMapProvider(),
            style: 'bar',
            //--------
            // if autoComplete is false, need manually calling provider.search({ query: input.value })
            autoComplete: true,         // optional: true|false  - default true
            autoCompleteDelay: 250,     // optional: number      - default 250
            //--------
            showMarker: false,          // optional: true|false  - default true
            showPopup: false,           // optional: true|false  - default false
            // marker: {                // optional: L.Marker    - default L.Icon.Default
            //     icon: new L.Icon.Default(),
            //     draggable: false,
            // },
            // popupFormat: ({ query, result }) => result.label,   // optional: function    - default returns result label
            // maxMarkers: 1,              // optional: number      - default 1
            retainZoomLevel: true,      // optional: true|false  - default false
            animateZoom: true,          // optional: true|false  - default true
            autoClose: false,           // optional: true|false  - default false
            searchLabel: 'Search for',  // optional: string      - default 'Enter address'
            keepResult: false           // optional: true|false  - default false
        });
        // console.log('searchControl:', searchControl);

        map.addControl(searchControl).on('geosearch/showlocation', (data) => {
            searchControl.closeResults();
            // console.log('data:', data);
            console.log('label:', data.location.label);
            // y, x : lat, lng
            onLocationSelected([Number(data.location.y), Number(data.location.x)]);
        });

        /* workaround for --
            Uncaught TypeError: Cannot read property '-1' of undefined
                at ResultList.select
                at NewClass.selectResult
                at HTMLInputElement.<anonymous>
            in leaflet-geosearch/src/resultList.js
                this.result is first initialized in render()
                but it's not called early enough...
        */
        searchControl.resultList.results = [];
        // but this DOES trigger result-select action even when list.selected is -1
        // (e.g. type some words in search bar and press ENTER)
        // so, sent a PR - https://github.com/smeijer/leaflet-geosearch/pull/178
        // that solves this issue.  FIXME later...


        // kludge -- prevent invoking this.map.on('click'
        // https://github.com/Leaflet/Leaflet/issues/1343#issuecomment-99494636
        // https://github.com/Leaflet/Leaflet/blob/master/src/control/Control.Zoom.js#L46
        const $geosearchForm = $('.leaflet-control-geosearch form');
        // console.log('el:', $geosearchForm[0]);
        L.DomEvent.disableClickPropagation($geosearchForm[0]);

        // https://stackoverflow.com/questions/19347269/jquery-keypress-arrow-keys
        $geosearchForm.on('keydown', (e) => {
            // console.log('e:', e);
            // prevent arrow keys' interaction with the orbit control
            e.stopPropagation();
        });
    }

    static swap(ll) {
        return [ll[1], ll[0]];
    }
    static llToString(ll) {
        return `${ll[0].toFixed(4)} ${ll[1].toFixed(4)}`;
    }
    static mkBuildMarker(ll, onBuild, onCancel) {
        // https://stackoverflow.com/questions/13698975/click-link-inside-leaflet-popup-and-do-javascript
        let container = $('<div />');
        container.html(`<div>${MapHelper.llToString(ll)}</div>`);
        container.append(`<div><a href='#' class='buildLink'>Build Terrain</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href='#' class='cancelLink'>[x]</a></div>`);
        // container.append($('<span class="bold">').text("abc..."))

        container.on('click', '.buildLink', onBuild);
        container.on('click', '.cancelLink', onCancel);
        let pp = L.popup({
            closeButton: false,
        }).setContent(container[0]);
        return L.marker(ll).bindPopup(pp);
    }
    static mkGeoJsonPoint(ll) {
        return {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": MapHelper.swap(ll), // lnglat
            },
        };
    }
    static mkOpts(color) {
        return {
            style: feature => {
                // let mag = feature.properties.mag; // e.g.
                return {
                    color: color,
                };
            },
        };
    }
    static mkBboxLayers(origin, ftBbox) {
        let ttStr = `lat lng: ${MapHelper.llToString(origin)}`;
        let llOrig = [origin[1], origin[0]];
        let llSw = ftBbox.geometry.coordinates[0][3];
        let line = turfHelpers.lineString([llOrig, llSw]);

        // let dist = turfLineDistance(line, {units: 'kilometers'}); // ?? runtime error about 'distance()'
        //========
        let dist = turfDistance(
            turfHelpers.point(llOrig),
            turfHelpers.point(llSw),
            {units: 'kilometers'});

        // console.log('dist:', dist.toFixed(3));

        let right = ftBbox.geometry.coordinates[0][1][0];
        let lineX = turfHelpers.lineString([llOrig,
            [origin[1] + 2*(right - origin[1]), origin[0]]
        ]);

        let top = ftBbox.geometry.coordinates[0][1][1];
        let lineY = turfHelpers.lineString([llOrig,
            [origin[1], origin[0] + 2*(top - origin[0])]
        ]);

        return [
            L.geoJson(ftBbox, this.mkOpts('white')),
            L.geoJson(lineX, this.mkOpts('red')),
            L.geoJson(lineY, this.mkOpts('green')),
            L.geoJson(line, this.mkOpts('white')).bindTooltip(`${dist.toFixed(1)} km`, {
                permanent: true,
                direction: 'right',
            }),
            L.geoJson(this.mkGeoJsonPoint(origin)).bindTooltip(ttStr, {
                permanent: true,
                direction: 'right',
            }),
        ];
    }
    static mkLineCam(cam, origin, unitsPerMeter) {
        // resolve cam's z-rotation w.r.t. the world
        // https://stackoverflow.com/questions/21557341/three-js-get-world-rotation-from-matrixworld
        // https://stackoverflow.com/questions/12784807/get-euler-rotation-from-quaternion
        // https://threejs.org/docs/#api/math/Euler
        // https://github.com/mrdoob/three.js/issues/11767
        let qn = new THREE.Quaternion();
        let rot = new THREE.Euler().setFromQuaternion(
            cam.getWorldQuaternion(qn), 'ZYX');
        let deg = - rot.z / Math.PI * 180;

        // resolve cam's horizontal fov
        // https://github.com/mrdoob/three.js/issues/1239
        let fovRad = cam.fov * Math.PI / 180;
        let hfov = 2 * Math.atan(Math.tan(fovRad / 2) * cam.aspect);
        // console.log('fov, aspect, degHfov:',
        //     cam.fov, cam.aspect, hfov / Math.PI * 180);

        // construct an oriented polygon for the camera
        let dist = 0.004; // "dist" of the pinhole to the screen
        let lineCam = turfTransformRotate(
            turfHelpers.lineString([
                [origin[1] - dist * Math.tan(hfov/2), origin[0] + dist],
                [origin[1], origin[0]],
                [origin[1] + dist * Math.tan(hfov/2), origin[0] + dist],
            ]), deg, {
                pivot: [origin[1], origin[0]],
                mutate: true, // significant performance increase if true
            });

        let vec = new THREE.Vector2(cam.position.x, cam.position.y)
            .divideScalar(unitsPerMeter);
        // console.log('vec:', vec); // in meters
        // http://turfjs.org/docs/#transformTranslate
        lineCam = turfTransformTranslate(
            lineCam,
            vec.length(),
            90.0 - vec.angle() * 180.0 / Math.PI, {
                units: 'meters',
                zTranslation: cam.position.z/unitsPerMeter,
                mutate: true, // significant performance increase if true
            });
        return lineCam;
    }


    toggle(tf) {
        $('#mapWrapper').toggle(tf);
    }
    plotCam(cam) {
        // console.log('cam:', cam);
        let lineCam = MapHelper.mkLineCam(cam, this.origin, this.unitsPerMeter);
        // console.log('lineCam:', lineCam);

        let camLatLngs = lineCam.geometry.coordinates.map(ll => MapHelper.swap(ll));
        // console.log('camLatLngs:', camLatLngs);
        if (this.camMarker) {
            this.camMarker.setLatLngs(camLatLngs);
        } else {
            // this.camMarker = L.polygon(camLatLngs).addTo(this.map);
            this.camMarker = L.polyline(camLatLngs).addTo(this.map);
            console.log('this.camMarker:', this.camMarker);
        }
    }
    plotOrbit(orbit) {
        console.log('plotOrbit(): orbit:', orbit);
        let _origin = this.origin;
        let _unitsPerMeter = this.unitsPerMeter;

        if (this.orbitMarker) {
            this.map.removeLayer(this.orbitMarker);
            this.orbitMarker = null;
        }
        if (this.orbitCircle) {
            this.map.removeLayer(this.orbitCircle);
            this.orbitCircle = null;
        }
        if (! orbit) return;

        // add orbitMarker
        let target = orbit.userData.target;
        let vec = new THREE.Vector2(target.x, target.y)
            .divideScalar(_unitsPerMeter);
        let ptTarget = turfTransformTranslate(
            turfHelpers.point([_origin[1], _origin[0]]),
            vec.length(),
            90.0 - vec.angle() * 180.0 / Math.PI, {
                units: 'meters',
                zTranslation: target.z / _unitsPerMeter,
                mutate: true, // significant performance increase if true
            });
        this.orbitMarker =
            L.marker(MapHelper.swap(ptTarget.geometry.coordinates))
                .bindTooltip("Orbit Axis", {
                    permanent: true,
                    direction: 'right',
                }).addTo(this.map);

        // add orbitCircle
        let circle = turfCircle(
            ptTarget, orbit.userData.radius / _unitsPerMeter, {
                units: 'meters',
            });
        this.orbitCircle =
            L.geoJson(circle, {
                style: feature => {
                    return {
                        dashArray: '3, 5',
                        color: '#ff00ff',
                        fillOpacity: 0.0,
                    };
                },
            }).addTo(this.map);
    }

    // update stuff --------
    clearBboxLayers() {
        this._bboxLayers.forEach(layer => { this.map.removeLayer(layer); });
        this._bboxLayers.length = 0;
    }
    updateBboxLayers(origin, ftBbox) {
        this.clearBboxLayers();
        this._bboxLayers = MapHelper.mkBboxLayers(origin, ftBbox);
        this._bboxLayers.forEach(layer => { layer.addTo(this.map); });
    }

    update(ll) {
        console.log('ll:', ll);
        this.origin = ll;
        this.map.panTo(ll);
        this.updateBboxLayers(ll, ThreeGeo.getBbox(ll, this.radius).feature);
    }

    clearTmpLayers() {
        if (this.markerTmp) this.map.removeLayer(this.markerTmp);
        if (this.bbTmp) this.map.removeLayer(this.bbTmp);
    }
    buildTerrain(ll) {
        this.clearTmpLayers();
        this.updateBboxLayers(ll, ThreeGeo.getBbox(ll, this.radius).feature);
        console.log('build terrain:', ll);
        if (this.onBuildTerrain) {
            this.onBuildTerrain(ll);
        }
    }
    showDialog(ll) {
        console.log('ll:', ll);
        this.map.panTo(ll);

        //-------- update temporary marker/bbox
        this.clearTmpLayers();
        let onBuild = () => {
            this.buildTerrain(ll)
        };
        let onCancel = () => {
            this.clearTmpLayers();
        };
        this.markerTmp = MapHelper.mkBuildMarker(ll, onBuild, onCancel)
            .addTo(this.map).openPopup();
        this.bbTmp = L.geoJson(ThreeGeo.getBbox(ll, this.radius).feature, {
            style: feature => { return {dashArray: '3, 5'}; },
        }).addTo(this.map);
    }

}

export default MapHelper;
