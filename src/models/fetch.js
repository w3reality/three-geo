import xhr from 'xhr';
import Pbf from 'pbf';
import { VectorTile } from '@mapbox/vector-tile';

// For NodeJs, we load `get-pixels` dynamically (see `resolveGetPixels()`)

// For browser, here we load `get-pixels` statically
// import __getPixelsDom from 'get-pixels/dom-pixels'; // runtime error: `Buffer` not defined
import __getPixelsDom from './dom-pixels-3.3.3-workaround.js';

import Utils from '../utils.js';

class Fetch {
    static getUriCustom(api, zoompos) {
        // Resolve the api type
        // e.g. `../data/${name}/custom-terrain-rgb` -> `custom-terrain-rgb`
        let _api = api.split('/');
        _api = _api.length ? _api[_api.length - 1] : 'woops';

        let extension;
        switch (_api) {
            case 'custom-terrain-vector':
                extension = 'pbf';
                break;
            case 'custom-terrain-rgb':
                extension = 'png';
                break;
            case 'custom-satellite':
                extension = 'jpg';
                break;
            default:
                console.log('getUriCustom(): unsupported api:', api);
                return '';
        }
        return `${api}-${zoompos.join('-')}.${extension}`;
    }

    static getUriMapbox(token, api, zoompos) {
        let prefix, res = '';
        switch (api) {
            case 'mapbox-terrain-vector':
                // https://docs.mapbox.com/help/troubleshooting/access-elevation-data/#mapbox-terrain-vector-tileset
                // https://docs.mapbox.com/api/maps/#vector-tiles
                prefix = 'https://api.mapbox.com/v4/mapbox.mapbox-terrain-v2';
                res = '.vector.pbf';
                break;
            case 'mapbox-terrain-rgb':
                // https://docs.mapbox.com/help/troubleshooting/access-elevation-data/#mapbox-terrain-rgb
                prefix = 'https://api.mapbox.com/v4/mapbox.terrain-rgb';
                res = '@2x.pngraw';
                break;
            case 'mapbox-satellite':
                // https://docs.mapbox.com/help/troubleshooting/migrate-legacy-static-images-api/
                // https://docs.mapbox.com/api/maps/#static-tiles
                prefix = 'https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles';
                break;
            default:
                console.log('getUriMapbox(): unsupported api:', api);
                return '';
        }
        return `${prefix}/${zoompos.join('/')}${res}?access_token=${token}`;
    }

    static dumpBufferAsBlob(buffer, name) {
        // https://discourse.threejs.org/t/how-to-create-a-new-file-and-save-it-with-arraybuffer-content/628/2
        const file = new Blob([buffer], {type: 'application/octet-stream'});
        const anc = document.createElement('a');
        anc.href = URL.createObjectURL(file);
        anc.download = name;
        document.body.appendChild(anc);
        anc.click();
    }

    static async dumpBlob(uri, isNode, api, zoompos) {
        try {
            const ab = await this.req(uri, isNode);
            this.dumpBufferAsBlob(ab, `${api}-${zoompos.join('-')}.blob`);
        } catch (err) {
            console.error('dumpBlob(): err', err);
        }
    }

    static async getVectorTile(uri, isNode, cb) {
        try {
            if (isNode && !uri.startsWith('http://') && !uri.startsWith('https://')) {
                const fs = await this.resolveNodeFs();
                fs.readFile(uri, (error, data) =>
                    cb(error ? null : new VectorTile(new Pbf(data.buffer))));
            } else {
                cb(new VectorTile(new Pbf(await this.req(uri, isNode))));
            }
        } catch (err) {
            console.log('getVectorTile(): err', err);
            cb(null);
        }
    }

    static async resolveNodeFs() {
        return await Utils.Meta.nodeRequire(global, 'fs');
    }

    static async req(uri, isNode) {
        // "API is a subset of request" - https://github.com/naugtur/xhr
        const _req = isNode ? await Utils.Meta.nodeRequire(global, 'request') : xhr;

        return new Promise((res, rej) => {
            _req({ uri, responseType: 'arraybuffer' }, (error, response, ab) => {
                const err = error || !this.isAjaxSuccessful(response.statusCode);
                err ? rej(err) : res(ab);
            });
        });
    }

    static isAjaxSuccessful(stat) {
        console.log('stat:', stat);
        // https://stackoverflow.com/questions/21756910/how-to-use-status-codes-200-404-300-how-jquery-done-and-fail-work-internally
        return stat >= 200 && stat < 300 || stat === 304;
    }

    static async resolveGetPixels(isNode) {
        return isNode ?
            await Utils.Meta.nodeRequire(global, 'get-pixels/node-pixels') :
            __getPixelsDom; // use the statically imported one
    }

    // compute elevation tiles belonging to the gradparent zoom level
    static getZoomposEle(zpArray) {
        const elevations = {};
        zpArray.forEach(zoompos => {
            let grandparent = [
                zoompos[0]-2,
                Math.floor(zoompos[1]/4),
                Math.floor(zoompos[2]/4)];
            if (elevations[grandparent]) {
                elevations[grandparent].push(zoompos);
            } else {
                elevations[grandparent] = [zoompos];
            }
        });
        // console.log('elevations:', elevations);

        return Object.keys(elevations)
            .map(triplet => triplet.split(',').map(num => parseFloat(num)));
    }

    static fetchTile(zoompos, api, token, isNode, cb) {
        const isMapbox = api.startsWith('mapbox-');
        const uri = isMapbox ?
            this.getUriMapbox(token, api, zoompos) :
            this.getUriCustom(api, zoompos);
        console.log('fetchTile(): uri:', uri);

        if (api.includes('mapbox-terrain-vector') ||
            api.includes('custom-terrain-vector')) {
            //this.dumpBlob(uri, isNode, api, zoompos);

            this.getVectorTile(uri, isNode, cb);
        } else if (api.includes('mapbox-terrain-rgb') ||
                api.includes('mapbox-satellite') ||
                api.includes('custom-terrain-rgb') ||
                api.includes('custom-satellite')) {
            //this.dumpBlob(uri, isNode, api, zoompos);

            const _cb = (err, pixels) => cb(err ? null : pixels);
            this.resolveGetPixels(isNode)
                .then(fn => fn(uri, _cb))
                .catch(err => console.error('err:', err));
        } else {
            console.log('nop, unsupported api:', api);
        }
    }
}

export default Fetch;
