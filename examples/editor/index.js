
THREE.Object3D.DefaultUp = new THREE.Vector3(0, 0, 1);

const canvas = document.getElementById("canvas");
const camera = new THREE.PerspectiveCamera(75, canvas.width/canvas.height, 0.001, 1000);
camera.position.set(0, 0, 1.5);

const renderer = new THREE.WebGLRenderer({
    // alpha: true,
    canvas: canvas,
});

const controls = new THREE.OrbitControls(camera, renderer.domElement);

// object stuff

const scene = new THREE.Scene();
const walls = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxBufferGeometry(1, 1, 1)),
    new THREE.LineBasicMaterial({color: 0xcccccc}));
walls.position.set(0, 0, 0);
scene.add(walls);
scene.add(new THREE.AxesHelper(1));

// render stuff

const stats = new Stats();
stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);
const render = () => {
    stats.update();
    renderer.render(scene, camera);
};

// main

controls.addEventListener('change', render);
render(); // first time

const tgeo = new ThreeGeo({
    tokenMapbox: '********', // <---- set your Mapbox API token here
});

if (0) {
    tgeo.tokenMapbox = 'zzzz';
    tgeo.setApiVector(`../geo-viewer/cache/eiger/custom-terrain-vector`);
    tgeo.setApiRgb(`../geo-viewer/cache/eiger/custom-terrain-rgb`);
    tgeo.setApiSatellite(`../geo-viewer/cache/eiger/custom-satellite`);
}

const msg = document.getElementById('msg');
const appendText = (el, text) => {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    el.appendChild(div);
};

if (tgeo.tokenMapbox.startsWith('****')) {
    const warning = 'Please set your Mapbox API token in ThreeGeo constructor.';
    appendText(msg, warning);
    throw warning;
}

(async () => {
    const origin = [46.5763, 7.9904];
    const radius = 5.0;
    const {proj, projInv, bbox, unitsPerMeter} =
        tgeo.getProjection(origin, radius);

    appendText(msg, `---- ROI ----`);
    appendText(msg, `lat lng: (${origin[0]}, ${origin[1]})`);
    appendText(msg, `radius: ${radius} [km]`);
    appendText(msg, `units per km: ${unitsPerMeter * 1000}`);
    appendText(msg, `bbox (w, s, e, n): (${bbox.map(q => q.toFixed(4)).join(', ')})`);
    appendText(msg, `---- Log ----`);

    const terrain = await tgeo.getTerrainRgb(origin, radius, 12);
    scene.add(terrain);

    terrain.children.forEach((mesh, idx) => {
        mesh.material.wireframe = true;
        // mesh.material.side = THREE.DoubleSide;

        // How to access the post-processed heightmap
        console.log('rgb DEM mesh:', mesh);
        const position = mesh.geometry.attributes.position;
        const arr = position.array;
        console.log('arr.length:', arr.length); // 3x128x128 (+ deltaSeams)

        if (idx % 2 > 0) return;

        for (let i = 0; i < arr.length; i += 3) { arr[i+2] = 0; }
        position.needsUpdate = true;
    });

    // FIXME: odd laser reflection...
    const laser = new ThreeGeo.Laser({color: 0xff00ff});
    laser.setSource(new THREE.Vector3(0, 0, 0), camera);
    laser.pointWithRaytrace(new THREE.Vector3(0, -0.5, 0), terrain.children);
    scene.add(laser);

    render();
})();
