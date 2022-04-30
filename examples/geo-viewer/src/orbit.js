import ThreeGeo from '../../../src';

const { THREE } = window;

class Orbit {
    constructor(scene) {
        this._scene = scene;

        this._orbit = null;
        this.active = false;

        const axis = new ThreeGeo.Laser({ maxPoints: 2 });
        axis.visible = false;
        axis.name = 'singleton-orbit-axis';
        this._scene.add(axis);
        this._axis = axis;
    }

    updateAxis(pt=null) {
        if (pt) {
            this._axis.setSource(pt);
            this._axis.point(pt.clone().setZ(pt.z + 0.8), 0xff00ff);
            this._axis.visible = true;
        } else {
            this._axis.clearPoints();
            this._axis.visible = false;
        }
    }

    move(cam) {
        const dat = this.data();
        if (this.active && dat) {
            const { target: pt, radius, theta } = dat;
            cam.position.setX(pt.x + radius * Math.cos(theta));
            cam.position.setY(pt.y + radius * Math.sin(theta));

            cam.lookAt(pt.x, pt.y, pt.z);
            //====
            // cam.lookAt( // look along the tangent
            //     pt.x + radius * Math.cos(theta + 0.01),
            //     pt.y + radius * Math.sin(theta + 0.01),
            //     cam.position.z);

            dat.theta += 0.01;
        }
    }

    add(cam, pt, segments=128) {
        const raw = Orbit.compute(cam, pt);
        const radius = raw.rvec.length();

        const geomTemp = new THREE.CircleGeometry(radius, segments);
        const { array } = geomTemp.attributes.position;

        // Hackish: Create a clone of `array` with the center vertex removed
        const arr = [];
        for (let idx = 3; idx < array.length; idx++) { arr.push(array[idx]); }

        const geom = new THREE.BufferGeometry();
        geom.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3));

        this._orbit = new THREE.LineLoop(geom, new THREE.LineBasicMaterial({color: 0xff00ff}));
        this._orbit.position.set(raw.center.x, raw.center.y, raw.center.z);
        this._orbit.userData.radius = radius;
        this._orbit.userData.target = raw.target;
        this._orbit.userData.theta = Math.atan2(raw.rvec.y, raw.rvec.x);

        this._scene.add(this._orbit);
    }

    exists() {
        return this._orbit !== null;
    }

    remove() {
        if (this.exists()) {
            this._scene.remove(this._orbit);
            this._orbit.geometry.dispose();
            this._orbit.material.dispose();

            this._orbit = null;
        }
    }

    data() {
        return this.exists() ? this._orbit.userData : null;
    }

    static compute(cam, pt) {
        const campos = cam.position.clone();

        // shrink the cone by 5 meters so the orbit is visible to the cam
        // const shift = pt.clone().sub(campos).normalize().multiplyScalar(0.005);
        //====
        const shift = new THREE.Vector3(0, 0, 0);

        const camposShifted = campos.add(shift);
        return {
            center: pt.clone().setZ(camposShifted.z),
            rvec: new THREE.Vector2(camposShifted.x - pt.x, camposShifted.y - pt.y),
            target: pt.clone(),
        };
    }
}

export default Orbit;