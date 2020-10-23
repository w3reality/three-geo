const units = {};

const setupApi = (tgeo, base) => {
    tgeo.tokenMapbox = 'zzzz';
    tgeo.setApiVector(`${base}/custom-terrain-vector`);
    tgeo.setApiRgb(`${base}/custom-terrain-rgb`);
    tgeo.setApiSatellite(`${base}/custom-satellite`);
};

const run = async fn => {
    let err, out;
    try {
        out = await fn();
    } catch (e) {
        err = e.toString();
    }
    return { err, out };
};

units['rgb-noexist'] = async (ThreeGeo, dataDir) => {
    const tgeo = new ThreeGeo();

    // The API call should return even when no rgb DEM files are fetched
    const loc = {name: 'noexist', origin: [46.5763, 7.9904], radius: 5.0, zoom: 12};
    setupApi(tgeo, `${dataDir}/${loc.name}`);

    const { origin, radius, zoom } = loc;
    const ret = await run(() => tgeo.getTerrainRgb(origin, radius, zoom));

    expect(ret.err).toBe(undefined);
};

units['rgb-eiger'] = async (ThreeGeo, dataDir) => {
    const tgeo = new ThreeGeo();

    const loc = {name: 'eiger', origin: [46.5763, 7.9904], radius: 5.0, zoom: 12};
    setupApi(tgeo, `${dataDir}/${loc.name}`);

    const { origin, radius, zoom } = loc;
    const ret = await run(() => tgeo.getTerrainRgb(origin, radius, zoom));

    expect(ret.err).toBe(undefined);
    expect(ret.out.name).toBe('dem-rgb');
    expect(ret.out.children.length).toBe(4);

    const [t0, t1, t2] = ret.out.children[0].userData.threeGeo.tile;
    expect(t0 === 2138 || t0 === 2139).toBeTruthy();
    expect(t1 === 1447 || t1 === 1448).toBeTruthy();
    expect(t2).toBe(12);
};

units['rgb-table'] = async (ThreeGeo, dataDir) => {
    const tgeo = new ThreeGeo();

    const loc = {name: 'table', origin: [-33.9625, 18.4107], radius: 1.25, zoom: 14};
    setupApi(tgeo, `${dataDir}/${loc.name}`);

    const { origin, radius, zoom } = loc;
    const ret = await run(() => tgeo.getTerrainRgb(origin, radius, zoom));

    expect(ret.err).toBe(undefined);
    expect(ret.out.name).toBe('dem-rgb');
    expect(ret.out.children.length).toBe(4);

    const [t0, t1, t2] = ret.out.children[0].userData.threeGeo.tile;
    expect(t0 === 9029 || t0 === 9030).toBeTruthy();
    expect(t1 === 9836 || t1 === 9837).toBeTruthy();
    expect(t2).toBe(14);
};

units['vec-table'] = async (ThreeGeo, dataDir) => {
    const tgeo = new ThreeGeo();

    const loc = {name: 'table', origin: [-33.9625, 18.4107], radius: 1.25, zoom: 14};
    setupApi(tgeo, `${dataDir}/${loc.name}`);

    const { origin, radius, zoom } = loc;
    const ret = await run(() => tgeo.getTerrainVector(origin, radius, zoom));

    expect(ret.err).toBe(undefined);
    expect(ret.out.name).toBe('dem-vec');
    expect(ret.out.children.length).toBe(0); // Expect 0 since using an empty pbf
};

module.exports = units;
