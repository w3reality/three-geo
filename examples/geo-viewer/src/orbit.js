import ThreeGeo from '../../../src';

class Orbit {
    constructor(scene, camera) {
        this._cam = camera;

        // laser ....................
        // this._laser = new ThreeGeo.Laser({ color: 0xffffff });
        // this._laser.name = name;
        // scene.add(this._laser);
    }

    // laser ....................
    // prepare() {
    //     this._laser.setSource(this._src, this._cam);
    // }
    // shoot(pt, meshes) {
    //     this._laser.pointWithRaytrace(pt, meshes, 0xffffff, 16);
    // }
    // clear() {
    //     this._laser.clearPoints();
    // }
}

export default Orbit;