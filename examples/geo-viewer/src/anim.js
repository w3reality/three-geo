const { THREE } = window;

class Anim {
    constructor(render, onrender) {
        const clock = new THREE.Clock();
        const timeLast = clock.getElapsedTime();

        const data = {
            render, onrender, active: false,
            clock, timeLast,
        };
        this._run = Anim._createRunner(data);
        this._data = data;
    }

    static _createRunner(data) {
        const animate = () => {
            if (!data.active) return;

            requestAnimationFrame(animate);

            const time = data.clock.getElapsedTime();
            const dt = time - data.timeLast;
            data.timeLast = time;
            data.onrender(time, dt);

            data.render();
        };

        return animate;
    }

    toggle(tf) {
        if (!tf) {
            this._data.active = false;
        } else if (tf && !this._data.active) {
            this._data.active = true;
            this._run();
        }
    }

    static _addTestObjects(app, Threelet) {
        const { scene } = app;
        scene.add(Threelet.Utils.createTestHemisphereLight());
        scene.add(Threelet.Utils.createTestDirectionalLight());

        const objs = Threelet.Utils.createTestObjects([0,0,0]);
        objs.forEach(obj => scene.add(obj));

        app._testAnimObjs = objs;
    }

    static _updateTestObjects(app, t, dt) {
        const objs = app._testAnimObjs;

        objs[0].rotation.x += dt;
        objs[1].rotation.y += dt;
        objs[2].material.emissive.r = Math.sin(4*t) > 0 ? 1 : 0;
        objs[3].position.x = Math.sin(t);
        objs[4].position.y = Math.cos(t);
    }
}

export default Anim;