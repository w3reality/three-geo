import env from './env.js';
//import env from './envs-ignore/env-dev.js';
//import env from './envs-ignore/env-io.js';

import Threelet from '../../deps/threelet.esm.js';
import Viewer from './viewer.js';

class App extends Threelet {
    // override
    onCreate(params) {
        this.camera.position.set(0, 0, 1.5);
        this.camera.up.set(0, 0, 1); // The up vector is along +z for this app

        const viewer = new Viewer(this, env);
        this.stats = null;

        this.render = () => { // override
            if (this.stats) { this.stats.update(); }
            this.resizeCanvas();

            viewer.updateAnim();
            viewer.render();
            viewer.showMsg();
            viewer.plotCamInMap();
        };

        viewer.initGui(env, this.render);
        //viewer.closeGui();

        viewer.showMsg();
        viewer.plotCamInMap();
        viewer.showMsgTerrain();

        this.on('pointer-move', (mx, my) => viewer.pick(mx, my));
        this.on('pointer-click', (mx, my) => viewer.updateMeasure(mx, my));
        this.on('pointer-click-right', (mx, my) => viewer.updateOrbit(mx, my));

        this._appData = { viewer };
    }
}

export default App;