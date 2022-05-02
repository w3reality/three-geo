class Loader {
    constructor(scene, tgeo) {
        this._scene = scene;
        this._tgeo = tgeo;

        //
    }

    projection(ll, radius) {
        return this._tgeo.getProjection(ll, radius);
    }
}

export default Loader;