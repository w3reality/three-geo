const setupApi = (tgeo, preset, base) => {
    tgeo.tokenMapbox = 'zzzz';
    tgeo.useNodePixels = preset === 'node';
    tgeo.setApiVector(`${base}/custom-terrain-vector`);
    tgeo.setApiRgb(`${base}/custom-terrain-rgb`);
    tgeo.setApiSatellite(`${base}/custom-satellite`);
};

const run = async fn => {
    let err = null, out;
    try {
        out = await fn();
    } catch (e) {
        err = e.toString();
    }
    return { err, out };
};

const units = {};

units['rgb-noexist'] = async (ThreeGeo, dataDir, preset='node') => {
    const tgeo = new ThreeGeo();

    // The API call should return even when no rgb DEM files are fetched
    const loc = {name: 'noexist', origin: [46.5763, 7.9904], radius: 5.0, zoom: 12};
    setupApi(tgeo, preset, `${dataDir}/${loc.name}`);

    const { origin, radius, zoom } = loc;
    const ret = await run(() => tgeo.getTerrainRgb(origin, radius, zoom));

    if (preset === 'browser') {
        return ret.err;
    } else {
        expect(ret.err).toBe(null);
    }
};

units['rgb-eiger'] = async (ThreeGeo, dataDir, preset='node') => {
    const tgeo = new ThreeGeo();

    const loc = {name: 'eiger', origin: [46.5763, 7.9904], radius: 5.0, zoom: 12};
    setupApi(tgeo, preset, `${dataDir}/${loc.name}`);

    const { origin, radius, zoom } = loc;
    const ret = await run(() => tgeo.getTerrainRgb(origin, radius, zoom));

    const err = ret.err;
    const name = ret.out.name;
    const len = ret.out.children.length;
    const tile = ret.out.children[0].userData.threeGeo.tile;

    if (preset === 'browser') {
        return { err, name, len, tile };
    } else {
        expect(err).toBe(null);
        expect(name).toBe('dem-rgb');
        expect(len).toBe(4);

        const [t0, t1, t2] = tile;
        expect(t0 === 2138 || t0 === 2139).toBeTruthy();
        expect(t1 === 1447 || t1 === 1448).toBeTruthy();
        expect(t2).toBe(12);
    }
};

units['rgb-table'] = async (ThreeGeo, dataDir, preset='node') => {
    const tgeo = new ThreeGeo();

    const loc = {name: 'table', origin: [-33.9625, 18.4107], radius: 1.25, zoom: 14};
    setupApi(tgeo, preset, `${dataDir}/${loc.name}`);

    const { origin, radius, zoom } = loc;
    const ret = await run(() => tgeo.getTerrainRgb(origin, radius, zoom));

    const err = ret.err;
    const name = ret.out.name;
    const len = ret.out.children.length;
    const tile = ret.out.children[0].userData.threeGeo.tile;

    if (preset === 'browser') {
        return { err, name, len, tile };
    } else {
        expect(err).toBe(null);
        expect(name).toBe('dem-rgb');
        expect(len).toBe(4);

        const [t0, t1, t2] = tile;
        expect(t0 === 9029 || t0 === 9030).toBeTruthy();
        expect(t1 === 9836 || t1 === 9837).toBeTruthy();
        expect(t2).toBe(14);
    }
};

units['vec-table'] = async (ThreeGeo, dataDir, preset='node') => {
    const tgeo = new ThreeGeo();

    const loc = {name: 'table', origin: [-33.9625, 18.4107], radius: 1.25, zoom: 14};
    setupApi(tgeo, preset, `${dataDir}/${loc.name}`);

    const { origin, radius, zoom } = loc;
    const ret = await run(() => tgeo.getTerrainVector(origin, radius, zoom));

    const err = ret.err;
    const name = ret.out.name;
    const len = ret.out.children.length;

    if (preset === 'browser') {
        return { err, name, len };
    } else {
        expect(err).toBe(null);
        expect(name).toBe('dem-vec');
        expect(len).toBe(0); // Expect 0 for now; using an empty pbf
    }
};

if (typeof document !== 'undefined') {
    window.units = units;
}

module.exports = units; // (This should be a top-level statement.)
