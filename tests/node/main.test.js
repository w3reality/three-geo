global.require = require;
const path = require('path');

const libName = 'three-geo';
const outDir = path.join(__dirname, '../../target');

const __modPath = `${outDir}/${libName}.min.js`;
// const __modPath = `${outDir}/${libName}.js`; // dev !!!!


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

const units = require(path.join(__dirname, '../units.js'));
const dataDir = path.join(__dirname, '../data');

test('rgb-noexist`: case when no rgb DEM files were fetched', async () => {
    await units['rgb-noexist'](ThreeGeo, dataDir);
});

test('rgb-eiger', async () => {
    await units['rgb-eiger'](ThreeGeo, dataDir);
});

test('rgb-table', async () => {
    await units['rgb-table'](ThreeGeo, dataDir);
});

test('vec-table', async () => {
    await units['vec-table'](ThreeGeo, dataDir);
});
