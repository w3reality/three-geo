import * as THREE_ES6 from 'three';
const THREE = window.THREE ? window.THREE : THREE_ES6;

import turfTransformTranslate from '@turf/transform-translate';
import turfTransformRotate from '@turf/transform-rotate';

// TODO doc
class Utils {
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

}
export default Utils;
