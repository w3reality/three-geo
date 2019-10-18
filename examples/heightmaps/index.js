
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

const isDebug = 1;
if (isDebug) {
    tgeo.tokenMapbox = 'zzzz';
    tgeo.setApiRgb(`../geo-viewer/cache/eiger/mapbox-terrain-rgb`);
    tgeo.setApiSatellite(`../geo-viewer/cache/eiger/mapbox-satellite`);
    // console.log('tgeo:', tgeo);
}

// $('body').css('font-family')  // FIXME refactor.....
const createTextCanvas = (str, width, height, opts={}) => {
    const defaults = {
        bg: "#fff",
        tbg: "#fff",
        tfg: "#000",
        fontFamily: "Times", // FIXME refactor.....
    };
    const actual = Object.assign({}, defaults, opts);

    const can = document.createElement("canvas");
    can.width = width;
    can.height = height;

    const ctx = can.getContext("2d");
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";

    str = str.replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/, "\"");
    const [w, h] = [ctx.measureText(str).width + 16, 45];

    // ctx.font = `48px ${actual.fontFamily}`;
    ctx.font = `36px ${actual.fontFamily}`;

    ctx.fillStyle = actual.bg;
    ctx.fillRect(0, 0, can.width, can.height);

    ctx.fillStyle = actual.tbg;
    ctx.fillRect(0, 0, w, 45);

    ctx.fillStyle = actual.tfg;
    // ctx.fillText(str, 25, 35+25); // ok for 256, 128
    ctx.fillText(str, 25, 35); // ok for 256, 64

    return can;
};
const createPanelSprite = (can, pixelsPerUnit=512) => {
    const mat = new THREE.SpriteMaterial({
        map: new THREE.Texture(can),
        opacity: 0.7,
        color: 0xffffff,
    });
    mat.map.needsUpdate = true;
    const sp = new THREE.Sprite(mat);
    sp.scale.set(
        can.width/pixelsPerUnit, can.height/pixelsPerUnit, 1.0);
    return sp;
};

const demToObjects = (demUri, demTile, proj) => {
    const { obj, offset, size } = ThreeGeo.Utils.bboxToWireframe(
        ThreeGeo.Utils.tileToBbox(demTile), proj, {
            offsetZ: - 0.1,
            color: 0xcc00cc,
        });
    // console.log('offset, size:', offset, size);

    let _demUri = demUri;
    if (isDebug) {
        const [tx, ty, tz] = demTile;
        // _demUri = `../geo-viewer/cache/eiger/mapbox-terrain-rgb-${tz}-${tx}-${ty}.blob.debug.png`;
        _demUri = `../geo-viewer/cache/eiger/mapbox-terrain-rgb-${tz}-${tx}-${ty}.blob`;
    }

    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(size[0], size[1]),
        new THREE.MeshBasicMaterial({
            map: new THREE.TextureLoader().load(_demUri),
            // side: THREE.DoubleSide,
        }));
    plane.position.set(...offset);

    const sprite = createPanelSprite(
        createTextCanvas(`${demTile.join('-')}`, 256, 64, {tfg: '#f0f'}));
    sprite.position.set(offset[0], offset[1], offset[2] + 0.1);

    return {
        wireframe: obj,
        plane: plane,
        sprite: sprite,
    };
};

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
    const { proj, bbox, unitsPerMeter } = tgeo.getProjection(origin, radius);
    // console.log('proj:', proj);
    // console.log('unitsPerMeter:', unitsPerMeter);

    const srcDemUris = {};

    $msg.empty();
    $msg.append(`<div>---- ROI ----</div>`);
    $msg.append(`<div>lat lng: (${origin[0]}, ${origin[1]})</div>`);
    $msg.append(`<div>radius: ${radius} [km]</div>`);
    $msg.append(`<div>units per km: ${unitsPerMeter * 1000}</div>`);
    $msg.append(`<div>bbox (w, s, e, n): (${bbox.map(q => q.toFixed(4)).join(', ')})</div>`);
    $msg.append(`<div>---- Terrain Composition ----</div>`);

    tgeo.getTerrain(origin, radius, 12, {
        onRgbDem: (meshes) => {
            meshes.forEach((mesh) => {
                console.log('rgb DEM mesh:', mesh);
                scene.add(mesh);
                console.log('userData:', mesh.userData);

                //======== how to access the post-processed heightmap
                const array = mesh.geometry.attributes.position.array;
                // console.log('array:', array);
                console.log('array.length:', array.length); // 3x128x128 (+ deltaSeams)

                //======== how to visualize constituent tiles of the terrain
                const tile = mesh.userData.threeGeo.tile;
                const { obj, offset } = ThreeGeo.Utils.bboxToWireframe(
                    ThreeGeo.Utils.tileToBbox(tile), proj, {offsetZ: - 0.05});
                const sp = createPanelSprite(
                    createTextCanvas(`${tile.join('-')}`, 256, 64, {tfg: '#0ff'}));
                sp.position.set(offset[0], offset[1], offset[2] + 0.05);
                scene.add(obj, sp);

                //======== how to access src DEM being used (grand-parental tile)
                // ref - https://www.mapbox.com/help/access-elevation-data/#mapbox-terrain-rgb
                const srcDem = mesh.userData.threeGeo.srcDem;
                const srcDemUri = `${srcDem.uri}${tgeo.tokenMapbox}`;
                const srcDemTile = srcDem.tile;
                // console.log('srcDemUri:', srcDemUri);

                if (! srcDemUris[srcDemUri]) {
                    // console.log('adding:', srcDemUri);
                    srcDemUris[srcDemUri] = true;

                    const {wireframe, plane, sprite} = demToObjects(srcDemUri, srcDemTile, proj);
                    scene.add(wireframe, plane, sprite);
                }

                $msg.append(`<div><span style="color: #00ffffff;">tile ${tile.join('-')}</span> using <span style="color: #ff00ffff";>DEM ${srcDemTile.join('-')}</span></div>`);
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
