import { StatsWidget, ClockWidget } from './widgets.js';

class Mon {
    constructor(env) {
        const dom = document.createElement('div');
        this.dom = dom;

        if (env.isDev) {
            this._cw = new ClockWidget();
            dom.appendChild(this._cw.dom);
        }

        this._sw = new StatsWidget();
        dom.appendChild(this._sw.dom);

        Mon.appendText(dom, '---- Terrain ----');
        this._divTerrain = dom.appendChild(document.createElement('div'));
        Mon.appendText(dom, '[left-click]: pick a point for measurement');
        Mon.appendText(dom, '[right-click]: set an orbital axis');
        Mon.appendText(dom, '---- Map ----');
        this._divMap = dom.appendChild(document.createElement('div'));
        Mon.appendText(dom, '[left-click]: build a new terrain');
        Mon.appendText(dom, '---- Camera ----');
        this._divCam = dom.appendChild(document.createElement('div'));
        Mon.appendText(dom, '---- Measurement [km] ----');
        this._divMeasure = dom.appendChild(document.createElement('div'));
    }

    updateStats() {
        this._sw.update();
    }

    updateTerrain(origin, zoom) {
        const el = this._divTerrain;

        Mon.clear(el);
        Mon.appendText(el, `lat lng: (${origin[0].toFixed(4)}, ${origin[1].toFixed(4)})`);
        Mon.appendText(el, `satellite zoom resolution: ${zoom}`);
        Mon.appendText(el, `DEM resolution: ${zoom - 2}`);
    }

    updateMap(zoom) {
        const el = this._divMap;

        Mon.clear(el);
        Mon.appendText(el, `zoom: ${zoom}`);
    }

    updateCam(cam, projection) {
        const el = this._divCam;

        Mon.clear(el);
        Mon.appendText(el, `pos [km]: ${Mon.toCoords(Mon.m2km(cam.position, projection.unitsPerMeter))}`);
        Mon.appendText(el, `rot [rad]: ${Mon.toCoords(cam.rotation)}`);
    }

    updateMeasure(pair, projection) {
        const el = this._divMeasure;
        const { unitsPerMeter } = projection;

        Mon.clear(el);
        if (pair.length === 1) {
            Mon.appendText(el, `points: ${Mon.toCoords(Mon.m2km(pair[0], unitsPerMeter))} ->`);
        } else if (pair.length === 2) {
            const p0km = Mon.m2km(pair[0], unitsPerMeter);
            const p1km = Mon.m2km(pair[1], unitsPerMeter);
            Mon.appendText(el, `points: ${Mon.toCoords(p0km)} -> ${Mon.toCoords(p1km)}`);
            Mon.appendText(el, `euclidean dist: ${p0km.distanceTo(p1km).toFixed(3)}`);
        }
    }

    static toCoords(vec, nFloats=3) {
        return `(${vec.x.toFixed(nFloats)}, ${vec.y.toFixed(nFloats)}, ${vec.z.toFixed(nFloats)})`;
    }

    static toCoordsArray(vecArray) {
        return vecArray.map(vec => this.toCoords(vec)).join(', ');
    }

    static m2km(pt, unitsPerMeter) {
        return pt.clone().divideScalar(unitsPerMeter * 1000);
    }

    static appendText(el, text) {
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(text));
        el.appendChild(div);
    }

    static clear(parent) {
        while (parent.firstChild) {
            parent.firstChild.remove();
        }
    }
}

export default Mon;