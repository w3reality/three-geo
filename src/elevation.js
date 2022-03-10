import * as THREE from 'three';
import Utils from './utils.js';
import Laser from 'three-laser-pointer/src';

// WIP ? https://twitter.com/w3reality/status/1191311643491233792
class Elevation {
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
    static resolveElevation(x, y, lat, lng, meshes) {
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
}

export default Elevation;
