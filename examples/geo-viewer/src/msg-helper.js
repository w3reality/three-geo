class MsgHelper {
    constructor(params) {
        this.msg = params.msg;
        this.msgTerrain = params.msgTerrain;
        this.msgMeasure = params.msgMeasure;
    }

    showMsg(cam, unitsPerMeter) {
        const el = this.msg;

        MsgHelper.clear(el);
        MsgHelper.appendText(el, `pos [km]: ${MsgHelper.toCoords(MsgHelper.m2km(cam.position, unitsPerMeter))}`);
        MsgHelper.appendText(el, `rot [rad]: ${MsgHelper.toCoords(cam.rotation)}`);
    }

    showMsgTerrain(origin, zoom) {
        const el = this.msgTerrain;

        MsgHelper.clear(el);
        MsgHelper.appendText(el, `lat lng: (${origin[0].toFixed(4)}, ${origin[1].toFixed(4)})`);
        MsgHelper.appendText(el, `satellite zoom resolution [11-17]: ${zoom}`);
    }

    showMsgMeasure(pair, unitsPerMeter) {
        const el = this.msgMeasure;

        MsgHelper.clear(el);
        if (pair.length === 1) {
            MsgHelper.appendText(el, `points: ${MsgHelper.toCoords(MsgHelper.m2km(pair[0], unitsPerMeter))} ->`);
        } else if (pair.length === 2) {
            const p0km = MsgHelper.m2km(pair[0], unitsPerMeter);
            const p1km = MsgHelper.m2km(pair[1], unitsPerMeter);
            MsgHelper.appendText(el, `points: ${MsgHelper.toCoords(p0km)} -> ${MsgHelper.toCoords(p1km)}`);
            MsgHelper.appendText(el, `euclidean dist: ${p0km.distanceTo(p1km).toFixed(3)}`);
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

export default MsgHelper;