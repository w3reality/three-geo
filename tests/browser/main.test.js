const path = require('path');
const fs = require('fs-extra');
const { Server } = require('es-pack-js');

const libName = 'three-geo';
const outDir = path.join(__dirname, '../../target');

const modPath = `${outDir}/${libName}.min.js`;
// const modPath = `${outDir}/${libName}.js`; // dev !!!!

const tmpModPath = `${__dirname}/__tmp.min.js`;

let output;
let server = null;
beforeAll(async () => {
    const serveDir = __dirname;
    server = await (new Server(serveDir)).listen();

    const tmpThreePath = path.join(__dirname, './__three.min.js');
    fs.copySync(path.join(__dirname, '../../node_modules/three/build/three.min.js'),
        tmpThreePath);
    fs.copySync(modPath, tmpModPath);

    const page = await browser.newPage();
    await page.goto(`http://localhost:${server.port}/index.html`);

    expect(await page.title()).toBe('tests');

    await page.waitForFunction(`typeof window.output === "object"`);
    output = await page.evaluate(() => window.output);

    fs.removeSync(tmpThreePath);
    fs.removeSync(tmpModPath);
});
afterAll(async () => {
    server.close();
    server = null;
});

test('output', () => {
    expect(typeof output).toBe('object');
});
test('`new`', () => {
    expect(output['new']).toEqual(['function', 1]);
});

test('rgb-noexist`: case when no rgb DEM files were fetched', () => {
    expect(output['rgb-noexist']).toEqual(null);
});
test('rgb-eiger', () => {
    const { err, name, len, tile } = output['rgb-eiger'];
    expect(err).toEqual(null);
    expect(name).toEqual('dem-rgb');
    expect(len).toEqual(4);

    const [t0, t1, t2] = tile;
    expect(t0 === 2138 || t0 === 2139).toBeTruthy();
    expect(t1 === 1447 || t1 === 1448).toBeTruthy();
    expect(t2).toBe(12);
});
test('rgb-table', () => {
    const { err, name, len, tile } = output['rgb-table'];
    expect(err).toEqual(null);
    expect(name).toEqual('dem-rgb');
    expect(len).toEqual(4);

    const [t0, t1, t2] = tile;
    expect(t0 === 9029 || t0 === 9030).toBeTruthy();
    expect(t1 === 9836 || t1 === 9837).toBeTruthy();
    expect(t2).toBe(14);
});
test('vec-table', () => {
    const { err, name, len } = output['vec-table'];
    expect(err).toEqual(null);
    expect(name).toEqual('dem-vec');
    expect(len).toBe(0); // Expect 0 for now; using an empty pbf
});
