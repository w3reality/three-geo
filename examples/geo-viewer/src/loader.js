class Loader {
    constructor(scene, tgeo) {
        this._scene = scene;
        this._tgeo = tgeo; // !!!!!!!!

        this.doneVector = false;
        this.doneRgb = false;
    }

    projection(ll, radius) {
        return this._tgeo.getProjection(ll, radius);
    }

    async getTerrainVector(origin, radius, zoom, refresh) {
        this.doneVector = true;

        this._scene.add(await this._tgeo.getTerrainVector(origin, radius, zoom));
        refresh();
    }

    getTerrainRgb(origin, radius, zoom, refresh) {
        this.doneRgb = true;

        return new Promise((res, rej) => {
            try {
                this._tgeo.getTerrain(origin, radius, zoom, {
                    onRgbDem: objs => {
                        objs.forEach(obj => { // dem-rgb-<zoompos>
                            //this.objsInteractive.push(obj); // !!!!!!!!
                            this._scene.add(obj);
                            refresh();
                        });
                    },
                    onSatelliteMat: plane => { // to be called *after* `onRgbDem`
                        plane.material.side = THREE.DoubleSide;
                        //this.satelliteMats[plane.name] = plane.material; // !!!!!!!!
                        refresh();
                        res();
                    },
                });
            } catch (err) { rej(err); }
        });
    }
}

export default Loader;