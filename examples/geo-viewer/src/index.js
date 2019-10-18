// import env from './env.js';
import env from './envs-ignore/env-dev.js';
// import env from './envs-ignore/env-io.js';

import GuiHelper from './gui-helper.js';
import Viewer from './viewer.js';

//

const threelet = new Threelet({
    canvas: document.getElementById("canvas"),
});
const { scene, canvas, camera, renderer } = threelet;
camera.position.set(0, 0, 1.5);
camera.up.set(0, 0, 1); // important for OrbitControls

const stats = threelet.setup('mod-stats', window.Stats, {panelType: 1});
const viewer = new Viewer(env, canvas, camera, renderer);
console.log('viewer:', viewer);

const render = () => {
    stats.update();
    threelet.resizeCanvas();
    viewer.render();
    viewer.showMsg(camera);
    viewer.plotCamInMap(camera);
};
threelet.render = render; // override
const controls = threelet.setup('mod-controls', THREE.OrbitControls);

const group = new THREE.Group();
group.rotation.x = - Math.PI/2;
scene.add(group);

//

let _stopAnim = true;
const _animate = () => {
    if (_stopAnim) {
        console.log('_animate(): stopping');
        return;
    }
    requestAnimationFrame(_animate);
    render();
};
const toggleAnimation = (tf) => {
    if (tf) {
        _stopAnim = false;
        _animate();
    } else {
        _stopAnim = true;
    }
};

//

const query = Viewer.parseQuery();
const guiData = { // with defaults
    vis: query.mode,
    grids: true,
    autoOrbit: false,
    vrLaser: false,
    //----
    loc: query.title ? query.title.replace('_', ' ') : "",
    leaflet: true,
};
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
            toggleAnimation(true);
        } else {
            console.log('stopping anim...');
            toggleAnimation(false);
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
// guiHelper.gui.close();
viewer.setGuiHelper(guiHelper);

const getMouseCoords = e => {
    // https://stackoverflow.com/questions/55677/how-do-i-get-the-coordinates-of-a-mouse-click-on-a-canvas-element/18053642#18053642
    let rect = canvas.getBoundingClientRect();
    let mx = e.clientX - rect.left;
    let my = e.clientY - rect.top;
    // console.log('getMouseCoords():', mx, my, canvas.width, canvas.height);
    return [mx, my];
};

// https://stackoverflow.com/questions/6042202/how-to-distinguish-mouse-click-and-drag
let isDragging = false;
renderer.domElement.addEventListener("mousedown", e => {
    isDragging = false;
}, false);
renderer.domElement.addEventListener("mousemove", e => {
    isDragging = true;
    let coords = getMouseCoords(e);
    viewer.pick(coords[0], coords[1]);
}, false);
renderer.domElement.addEventListener("mouseup", e => {
    // console.log('e:', e);
    if (isDragging) {
        console.log("mouseup: drag");
        // nop
    } else {
        console.log("mouseup: click");
        let coords = getMouseCoords(e);
        if (e.button === 0) {
            viewer.updateMeasure(coords[0], coords[1]);
        } else if (e.button === 2) {
            viewer.updateOrbit(coords[0], coords[1]);
        }
    }
}, false);

// main

render(); // first time
viewer.toggleMap(guiData.leaflet);
viewer.showMsg(camera);
viewer.plotCamInMap(camera);
viewer.showMsgTerrain();
