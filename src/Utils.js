import * as THREE from 'three';

import turfTransformTranslate from '@turf/transform-translate';
import turfTransformRotate from '@turf/transform-rotate';
import tilebelt from "@mapbox/tilebelt";
import Laser from 'three-laser-pointer/src';

// TODO doc
class Utils {
    static createLine(arr, opts={color: 0xff0000, maxPoints: 256}) {
        const laser = new Laser(opts);
        laser.updatePoints(arr);
        return laser;
    }

    static translateTurfObject(turfObj, dx, dy, dz, unitsPerMeter, mutate=true) {
        const vec = new THREE.Vector2(dx, dy).divideScalar(unitsPerMeter);
        const theta = 90.0 - vec.angle() * 180.0 / Math.PI;
        return turfTransformTranslate(turfObj, vec.length(), theta, {
                units: 'meters',
                zTranslation: dz / unitsPerMeter,
                mutate: mutate, // "significant performance increase if true" per doc
            });
    }
    static rotateTurfObject(turfObj, deg, pivotLatlng, mutate=true) {
        return turfTransformRotate(turfObj, deg, {
                pivot: [pivotLatlng[1], pivotLatlng[0]],
                mutate: mutate,
            });
    }

    static bboxToWireframe(wsen, proj, opts={}) {
        const defaults = {
            offsetZ: 0.0,
            color: 0x00cccc,
            height: 0.001,
        };
        const actual = Object.assign({}, defaults, opts);

        const [w, s, e, n] = wsen; // of bbox
        // console.log('wsen:', wsen);
        const offset = proj([(s+n)/2, (w+e)/2]); // lat, lng -> x, y
        // console.log('offset:', offset);

        const [pw, pn] = proj([n, w]);
        const [pe, ps] = proj([s, e]);
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
    static tileToBbox(tile) {
        return tilebelt.tileToBBOX(tile);
    }
    static _consoleLog(...args) {
        // for eluding uglify
        const _console = console;
        _console.log.apply(_console, args);
    }
}
export default Utils;
