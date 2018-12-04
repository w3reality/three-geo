
const canvas = document.getElementById("canvas");
const camera = new THREE.PerspectiveCamera(75, canvas.width/canvas.height, 0.001, 1000);
camera.position.set(0, 0, 1.5);
camera.up.set(0, 0, 1); // important for OrbitControls

const renderer = new THREE.WebGLRenderer({
    // alpha: true,
    canvas: canvas,
});

const controls = new THREE.OrbitControls(camera, renderer.domElement);

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

// object stuff --------
const scene = new THREE.Scene();
const walls = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxBufferGeometry(1, 1, 1)),
    new THREE.LineBasicMaterial({color: 0xcccccc}));
walls.position.set(0, 0, 0);
scene.add(walls);
scene.add(new THREE.AxesHelper(1));

// render stuff --------
const stats = new Stats();
stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild(stats.dom);
const render = () => {
    stats.update();
    resizeCanvasToDisplaySize();
    renderer.render(scene, camera);
};


// main --------
render(); // first time
controls.addEventListener('change', render);

const tgeo = new ThreeGeo({
    tokenMapbox: '********', // <---- set your Mapbox API token here
});

const isDebug = 0;
if (isDebug) {
    tgeo.tokenMapbox = 'zzzz';
    tgeo.setApiVector(`../geo-viewer/cache/eiger/mapbox-terrain-vector`);
    tgeo.setApiRgb(`../geo-viewer/cache/eiger/mapbox-terrain-rgb`);
    tgeo.setApiSatellite(`../geo-viewer/cache/eiger/mapbox-satellite`);
    // console.log('tgeo:', tgeo);
}

const $msg = $('#msg');

if (tgeo.tokenMapbox.startsWith('****')) {
    const warning = 'Please set your Mapbox API token in ThreeGeo constructor.';
    // alert(warning);
    $msg.append(`<div>${warning}</div>`);
} else {
    // params: [lat, lng], terrain's radius (km), zoom resolution, callbacks
    // Beware the value of radius; radius > 5.0 (km) could trigger huge number of tile API calls!!
    const origin = [46.5763, 7.9904];
    const radius = 5.0;
    const {proj, projInv, bbox, unitsPerMeter} = tgeo.getProjection(origin, radius);
    // console.log('proj:', proj);
    // console.log('projInv:', projInv);
    // console.log('unitsPerMeter:', unitsPerMeter);

    const laser = new Laser({color: 0xff00ff});
    scene.add(laser);

    $msg.empty();
    $msg.append(`<div>---- ROI ----</div>`);
    $msg.append(`<div>lat lng: (${origin[0]}, ${origin[1]})</div>`);
    $msg.append(`<div>radius: ${radius} [km]</div>`);
    $msg.append(`<div>units per km: ${unitsPerMeter * 1000}</div>`);
    $msg.append(`<div>bbox (w, s, e, n): (${bbox.map(q => q.toFixed(4)).join(', ')})</div>`);
    $msg.append(`<div>---- Log ----</div>`);

    tgeo.getTerrain(origin, radius, 12, {
        // onVectorDem: (mesh) => { /* just for debugging ajax */ },
        onRgbDem: (meshes) => {

            const pt = new THREE.Vector3(0, 0, 0);
            laser.setSource(new THREE.Vector3(0.3, -0.4, -0.2), camera);
            laser.pointWithRaytrace(pt, meshes);

            meshes.forEach((mesh) => {
                console.log('rgb DEM mesh:', mesh);
                scene.add(mesh);

                //======== how to access the post-processed heightmap
                const array = mesh.geometry.attributes.position.array;
                // console.log('array:', array);
                console.log('array.length:', array.length); // 3x128x128 (+ deltaSeams)

            });
            render();
        },
        onSatelliteMat: (mesh) => {
            mesh.material.wireframe = true;
            // mesh.material.side = THREE.DoubleSide;
            render();
        },
    });
}
