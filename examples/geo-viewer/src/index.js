// import env from './env.js';
import env from './envs-ignore/env-dev.js';
// import env from './envs-ignore/env-io.js';

import GuiHelper from './gui-helper.js';
import Viewer from './viewer.js';

class App extends Threelet {
    // override
    onCreate(params) {
        this.camera.position.set(0, 0, 1.5);
        this.camera.up.set(0, 0, 1); // The up vector is along +z for this app

        const stats = this.setup('mod-stats', window.Stats, {panelType: 1});
        const viewer = new Viewer(env, this);

        this.render = () => { // override
            stats.update();
            this.resizeCanvas();
            viewer.render();
            viewer.showMsg(this.camera);
            viewer.plotCamInMap(this.camera);
        };
        this.setup('mod-controls', THREE.OrbitControls);

        const guiData = App.createGuiData();
        viewer.setGuiHelper(
            App.createGuiHelper(env, guiData, viewer, this.render));

        // viewer.closeGui();
        viewer.toggleMap(guiData.leaflet);
        viewer.showMsg(this.camera);
        viewer.plotCamInMap(this.camera);
        viewer.showMsgTerrain();

        this.setupMouseInterface(viewer);
        this._appData = { stats, viewer, guiData };
    }

    setupMouseInterface(viewer) {
        this.on('mouse-move', (mx, my) => viewer.pick(mx, my));
        this.on('mouse-click', (mx, my) => viewer.updateMeasure(mx, my));
        this.on('mouse-click-right', (mx, my) => viewer.updateOrbit(mx, my));
    }

    static createGuiData() {
        const query = Viewer.parseQuery();
        return { // with defaults
            vis: query.mode,
            grids: true,
            autoOrbit: false,
            vrLaser: false,
            //----
            loc: query.title ? query.title.replace('_', ' ') : "",
            leaflet: true,
        };
    }
    static createAnimToggler(render) {
        let stopAnim = true;
        const animate = () => {
            if (stopAnim) {
                console.log('animate(): stopping');
                return;
            }
            requestAnimationFrame(animate);
            render();
        };

        return (tf) => {
            if (tf) {
                stopAnim = false;
                animate();
            } else {
                stopAnim = true;
            }
        };
    }
    static createGuiHelper(env, guiData, viewer, render) {
        const animToggler = this.createAnimToggler(render); // a closure
        const guiHelper = new GuiHelper(env, guiData, {
            onCapture: () => {
                viewer.capture();
            },
            onChangeGrids: (value) => {
                viewer.toggleGrids(value);
            },
            onChangeAutoOrbit: (value) => {
                viewer.toggleOrbiting(value);
                if (value) {
                    if (! viewer.hasOrbit()) {
                        viewer.setOrbitDefault();
                    }
                    console.log('starting anim...');
                    animToggler(true);
                } else {
                    console.log('stopping anim...');
                    animToggler(false);
                }
            },
            onChangeVis: (value) => {
                console.log('vis:', value);
                if (value === 'Contours') {
                    viewer.loadVectorDem(() => {
                        viewer.updateMode(value);
                        render();
                    });
                } else {
                    viewer.loadRgbDem(() => {
                        viewer.updateMode(value);
                        render();
                    });
                }
            },
            onChangeVrLaser: (value) => {
                viewer.toggleVrLaser(value);
            },
            onChangeLeaflet: (value) => {
                viewer.toggleMap(value);
            },
            onChangeLoc: (value, locations) => {
                if (value === "(none)") { // dummy case
                    return;
                }

                if (value in locations) {
                    let title = value.replace(' ', '_');
                    let ll = locations[value];
                    viewer.reloadPageWithLocation(ll, title);
                }
            },
        });
        guiHelper.setDefaults({
            isDev: () => {},
            vis: guiData.vis,
            capture: () => {},
            grids: guiData.grids,
            //----
            autoOrbit: guiData.autoOrbit,
            vrLaser: guiData.vrLaser,
            reset: () => {},
            //----
            loc: guiData.loc,
            leaflet: guiData.leaflet,
            sourceCode: () => {},
        });
        return guiHelper;
    }
}

const app = new App({
    canvas: document.getElementById("canvas"),
});
app.render(); // first time
