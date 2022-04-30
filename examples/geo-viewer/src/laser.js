import ThreeGeo from '../../../src';

const { THREE } = window;

class Laser {
    constructor(name, scene, camera) {
        this._cam = camera;
        this._src = new THREE.Vector3(0.003, -0.004, 0.002);

        this._laser = new ThreeGeo.Laser({ color: 0xffffff });
        this._laser.name = name;
        scene.add(this._laser);
    }

    prepare() {
        this._laser.setSource(this._src, this._cam);
    }

    shoot(pt, meshes) {
        this._laser.pointWithRaytrace(pt, meshes, 0xffffff, 16);
    }

    clear() {
        this._laser.clearPoints();
    }
}

export default Laser;