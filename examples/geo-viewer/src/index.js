import * as THREE from 'three';
import Stats from 'stats.js';

import OrbitControls from 'three-es6-plugin/es6/OrbitControls';

import env from './env.js';
// import env from './envs-ignore/env-dev.js';
// import env from './envs-ignore/env-io.js';

import GuiHelper from './gui-helper.js';
import Viewer from './viewer.js';

const canvas = document.getElementById("canvas");
const camera = new THREE.PerspectiveCamera(75, canvas.width/canvas.height, 0.001, 1000);
camera.position.set(0, 0, 1.5);
camera.up.set(0, 0, 1); // important for OrbitControls

const renderer = new THREE.WebGLRenderer({
    // alpha: true,
    canvas: canvas,
    preserveDrawingBuffer: true, // to support .toDataURL()
});

const controls = new OrbitControls(camera, renderer.domElement);

// https://stackoverflow.com/questions/29884485/threejs-canvas-size-based-on-container
const resizeCanvasToDisplaySize = (force=false) => {
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    // adjust displayBuffer size to match
    if (force || canvas.width != width || canvas.height != height) {
        // you must pass false here or three.js sadly fights the browser
        // console.log "resizing: #{canvas.width} #{canvas.height} -> #{width} #{height}"
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }
};
resizeCanvasToDisplaySize(true); // first time


const viewer = new Viewer(env, canvas, camera, renderer);
console.log('viewer:', viewer);

// begin render stuff --------
let stats = new Stats();
stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);
let render = () => {
    stats.update();
    resizeCanvasToDisplaySize();
    viewer.render();
};

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
// end render stuff --------

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
            if (!viewer.hasOrbit()) {
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


// main --------
render(); // first time
viewer.toggleMap(guiData.leaflet);
viewer.showMsg(camera);
viewer.plotCamInMap(camera);
viewer.showMsgTerrain();

controls.addEventListener('change', () => {
    if (! guiData.autoOrbit) render();

    viewer.showMsg(camera);
    viewer.plotCamInMap(camera);
});
