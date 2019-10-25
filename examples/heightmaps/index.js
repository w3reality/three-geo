const threelet = new Threelet({
    canvas: document.getElementById("canvas"),
});
threelet.setup('mod-controls', THREE.OrbitControls);
threelet.setup('mod-stats', window.Stats, {panelType: 1});

const { scene, render } = threelet;
render(); // first time

const group = new THREE.Group();
group.rotation.x = - Math.PI/2;
scene.add(group);

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

const createTextSprite = (text, color) => Threelet.Utils.createCanvasSprite(
    Threelet.Utils.createCanvasFromText(text, 256, 64, {
        tfg: color,
        fontSize: '36px',
        fontFamily: 'Times',
    }));

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

    const sp = createTextSprite(`${demTile.join('-')}`, '#f0f');
    sp.position.set(offset[0], offset[1], offset[2] + 0.1);

    return {
        wireframe: obj,
        plane: plane,
        sprite: sp,
    };
};

const $msg = $('#msg');

if (tgeo.tokenMapbox.startsWith('****')) {
    const warning = 'Please set your Mapbox API token in the ThreeGeo constructor.';
    // alert(warning);
    $msg.append(`<div>${warning}</div>`);
    alert(warning);
    throw warning;
}

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
            group.add(mesh);
            console.log('userData:', mesh.userData);

            //======== how to access the post-processed heightmap
            const array = mesh.geometry.attributes.position.array;
            // console.log('array:', array);
            console.log('array.length:', array.length); // 3x128x128 (+ deltaSeams)

            //======== how to visualize constituent tiles of the terrain
            const tile = mesh.userData.threeGeo.tile;
            const { obj, offset } = ThreeGeo.Utils.bboxToWireframe(
                ThreeGeo.Utils.tileToBbox(tile), proj, {offsetZ: - 0.05});

            const sp = createTextSprite(`${tile.join('-')}`, '#0ff');
            sp.position.set(offset[0], offset[1], offset[2] + 0.05);
            group.add(obj, sp);

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
                group.add(wireframe, plane, sprite);
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
