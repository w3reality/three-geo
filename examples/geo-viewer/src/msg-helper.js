class Msg {
    constructor(params) {
        this.msg = params.msg;
        this.msgTerrain = params.msgTerrain;
        this.msgMeasure = params.msgMeasure;
    }

    update(cam, projection) {
        const el = this.msg;

        Msg.clear(el);
        Msg.appendText(el, `pos [km]: ${Msg.toCoords(Msg.m2km(cam.position, projection.unitsPerMeter))}`);
        Msg.appendText(el, `rot [rad]: ${Msg.toCoords(cam.rotation)}`);
    }

    updateTerrain(origin, zoom) {
        const el = this.msgTerrain;

        Msg.clear(el);
        Msg.appendText(el, `lat lng: (${origin[0].toFixed(4)}, ${origin[1].toFixed(4)})`);
        Msg.appendText(el, `satellite zoom resolution [11-17]: ${zoom}`);
    }

    updateMeasure(pair, projection) {
        const el = this.msgMeasure;
        const { unitsPerMeter } = projection;

        Msg.clear(el);
        if (pair.length === 1) {
            Msg.appendText(el, `points: ${Msg.toCoords(Msg.m2km(pair[0], unitsPerMeter))} ->`);
        } else if (pair.length === 2) {
            const p0km = Msg.m2km(pair[0], unitsPerMeter);
            const p1km = Msg.m2km(pair[1], unitsPerMeter);
            Msg.appendText(el, `points: ${Msg.toCoords(p0km)} -> ${Msg.toCoords(p1km)}`);
            Msg.appendText(el, `euclidean dist: ${p0km.distanceTo(p1km).toFixed(3)}`);
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

export default Msg;