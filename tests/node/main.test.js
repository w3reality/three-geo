const path = require('path');

const libName = 'three-geo';
const outDir = path.join(__dirname, '../../target');
const __modPath = `${outDir}/${libName}.min.js`;
//const __modPath = `${outDir}/${libName}.js`; // dev !!!!

// kludge: make sure `global.require` inside `ThreeGeo` is available
global.require = require;

const ThreeGeo = require(__modPath);
test('constructor', () => {
    expect(typeof ThreeGeo).toBe('function');
    expect(typeof ThreeGeo.Laser).toBe('function');
});

const tgeo = new ThreeGeo(); // THREE is internally `require()`-d
test('`new`', () => {
    expect(tgeo.constUnitsSide).toBe(1);

    const laser = new ThreeGeo.Laser();
    expect(laser.type).toBe('Line');
});

const run = async (fnName, loc) => {
    const customDir = path.join(__dirname, '../data');
    const { name, origin, radius, zoom } = loc;
    tgeo.tokenMapbox = 'zzzz';
    tgeo.setApiVector(`${customDir}/${name}/custom-terrain-vector`);
    tgeo.setApiRgb(`${customDir}/${name}/custom-terrain-rgb`);
    tgeo.setApiSatellite(`${customDir}/${name}/custom-satellite`);

    const fn = tgeo[fnName].bind(tgeo);
    let group, err;
    try {
        group = await fn(origin, radius, zoom);
    } catch (e) {
        err = e.toString();
    }
    return { group, err };
};

test('`getTerrainRgb()`: eiger', async () => {
    const loc = {name: 'eiger', origin: [46.5763, 7.9904], radius: 5.0, zoom: 12};
    const ret = await run('getTerrainRgb', loc);

    expect(ret.err).toBe(undefined);

    expect(ret.group.name).toBe('dem-rgb');
    expect(ret.group.children.length).toBe(4);

    const [t0, t1, t2] = ret.group.children[0].userData.threeGeo.tile;
    expect(t0 === 2138 || t0 === 2139).toBeTruthy();
    expect(t1 === 1447 || t1 === 1448).toBeTruthy();
    expect(t2).toBe(12);
});

test('`getTerrainRgb()`: table', async () => {
    const loc = {name: 'table', origin: [-33.9625, 18.4107], radius: 1.25, zoom: 14};
    const ret = await run('getTerrainRgb', loc);

    expect(ret.err).toBe(undefined);

    expect(ret.group.name).toBe('dem-rgb');
    expect(ret.group.children.length).toBe(4);

    const [t0, t1, t2] = ret.group.children[0].userData.threeGeo.tile;
    expect(t0 === 9029 || t0 === 9030).toBeTruthy();
    expect(t1 === 9836 || t1 === 9837).toBeTruthy();
    expect(t2).toBe(14);
});

test('`getTerrainVector()`: table', async () => {
    const loc = {name: 'table', origin: [-33.9625, 18.4107], radius: 1.25, zoom: 14};
    const ret = await run('getTerrainVector', loc);

    expect(ret.err).toBe(undefined);

    expect(ret.group.name).toBe('dem-vec');
    expect(ret.group.children.length).toBe(0); // Expect 0 since using an empty pbf
});
