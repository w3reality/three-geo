import Env from './env.js';
//import Env from './envs-ignore/env-dev.js';
//import Env from './envs-ignore/env-io.js';

import Threelet from '../../deps/threelet.esm.js';
import GuiHelper from './gui-helper.js';
import MapHelper from './map-helper.js';
import MediaHelper from './media.js';
import Monitor from './monitor.js';
import Loader from './loader.js';
import Laser from './laser.js';
import Orbit from './orbit.js';
import Marker from './marker.js';
import Anim from './anim.js';

const { THREE  } = window;
const { OrbitControls } = THREE;

class App extends Threelet {
    constructor() {
        super({ canvas: document.getElementById('viewer') });
    }

    onCreate(_params) { // override
        this.env = Env;

        this.camera.position.set(0, 0, 1.5);
        this.camera.up.set(0, 0, 1);
        this.renderer.autoClear = false;

        this.initComponents();

        this.render = () => { // override
            this._render();
            this.monitor.updateStats();
            this.monitor.updateCam(this.camera, this.projection);
            this.map.plotCam(this.camera);
        };
        this.setup('mod-controls', OrbitControls);
        this.render(); // first time

        this.anim = new Anim(this.render, this.onAnimate.bind(this));
        this.gui = App.createGui(this.guiCallbacks(), this.env, this.monitor.dom);

        this.monitor.updateTerrain(this.origin, this.zoom);
        this.monitor.updateMap(this.map.getZoom());
        this.monitor.updateCam(this.camera, this.projection);
        this.map.plotCam(this.camera);

        this.on('pointer-move', (mx, my) => this.pick(mx, my));
        this.on('pointer-click', (mx, my) => this.updateMeasure(mx, my));
        this.on('pointer-click-right', (mx, my) => this.updateOrbit(mx, my));
    }

    _render() {
        this.resizeCanvas();
        this.renderer.clear();
        this.renderer.render(this.scene, this.camera);
        this.renderer.clearDepth();
        this.renderer.render(this.marker.scene, this.camera);
    }

    onAnimate(t, dt) {
        this.orbit.move(this.camera, t, dt);

        if (this.env.isDev) { Anim._updateTestObjects(this, t, dt); } // dev
    }

    initComponents() {
        if (this.env.isDev) { Anim._addTestObjects(this, Threelet); } // dev

        const grids = new THREE.Group();
        grids.add(this.scene.getObjectByName('walls'));
        grids.add(this.scene.getObjectByName('axes'));
        grids.name = 'singleton-grids';
        this.scene.add(grids);
        this.grids = grids;

        //

        const loader = new Loader(this.scene, this.env);
        const { origin, radius, zoom, vis, title } = App.resolveParams(this.env);
        const projection = loader.projection(origin, radius);

        this.loader = loader;
        this.origin = origin;
        this.radius = radius;
        this.zoom = zoom;
        this.vis = vis;
        this.projection = projection;
        this.wireframeMat = new THREE.MeshBasicMaterial({ wireframe: true, color: 0x999999 });

        this.updateTerrain(title);

        //

        this.monitor = new Monitor(this.env);
        this.map = new MapHelper({
            dom: document.getElementById('map'),
            domWrapper: document.getElementById('map-wrapper'),
            origin, radius, projection,
            enableTiles: this.env.enableTilesLeaflet === true,
            onBuildTerrain: ll => {
                this.reloadPageWithLocation(ll, App.parseQuery().title);
            },
            onMapZoomEnd: zoom => {
                this.monitor.updateMap(zoom);
                this.map.plotCam(this.camera);
            },
        });
        this.media = new MediaHelper(
            document.getElementById('media'),
            document.getElementById('media-wrapper'));

        //

        this.laser = new Laser(this.scene, this.camera);
        this.orbit = new Orbit(this.scene);
        this.marker = new Marker(new THREE.Scene());
    }

    static resolveParams(env) {
        const { origin, mode, title } = this.parseQuery();
        const vis = mode.toLowerCase();

        // https://docs.mapbox.com/data/tilesets/guides/access-elevation-data/#mapbox-terrain-rgb
        // vector dem: 9--15 (at 8, no contour data returned)
        //    rbg dem: ?--15
        const zoom = env.zoom || 13; // satellite zoom resolution -- min: 11, defaut: 13, max: 17
        const radius = 5.0 * 2**(13 - zoom);

        return { origin, radius, zoom, vis, title };
    }

    static parseQuery() {
        const params = new URLSearchParams(document.location.search);
        const lat = params.get('lat');
        const lng = params.get('lng');
        const md = params.get('mode');
        const ttl = params.get('title');

        // const fallback = [ [ 36.2058, -112.4413 ], 'Colorado River' ];
        const fallback = [ [ -33.9625, 18.4107 ], 'Table Mountain' ];

        const [ origin, title ] = (lat && lng) ?
            [ [ Number(lat), Number(lng) ], ttl ] : fallback;
        const mode = this.capitalizeFirst((md || 'Satellite').toLowerCase());

        return { origin, title, mode };
    }

    static capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    static createGui(cbs, env, monitorDom) {
        const { mode, title } = this.parseQuery();
        const defaults = {
            isDev: () => {},
            mode,
            capture: () => {},
            grids: true,
            autoOrbit: false,
            vrLaser: false,
            reset: () => {},
            loc: title ? title.replace('_', ' ') : '',
            leaflet: true,
            media: false,
            sourceCode: () => {},
        };

        const gh = new GuiHelper(env)
            .setDefaults(defaults)
            .setCallbacks(cbs)
            .appendToFooter(monitorDom);

        if (env.isGuiClosed) {
            gh.close();
        }

        return gh;
    }

    guiCallbacks() {
        return {
            onChangeMode: mode => {
                this._updateTerrain(mode.toLowerCase());
            },
            onCapture: () => {
                this.capture();
            },
            onChangeGrids: tf => {
                this.grids.visible = tf;
                this.render();
            },
            onChangeAutoOrbit: tf => {
                this.orbit.active = tf;
                if (tf && !this.orbit.exists()) {
                    const pt = new THREE.Vector3(0, 0, 0);
                    this.orbit.updateAxis(pt);
                    this.orbit.add(this.camera, pt);
                    this.map.plotOrbit(this.orbit.data());
                }

                this.anim.toggle(tf);
            },
            onChangeVrLaser: tf => {
                this.laser.active = tf;
            },
            onChangeLeaflet: tf => {
                this.map.toggle(tf);
            },
            onChangeMedia: tf => {
                this.media.toggle(tf);
            },
            onChangeLoc: (value, locations) => {
                if (value === '(none)') { // dummy case
                    return;
                }

                if (value in locations) {
                    this.reloadPageWithLocation(
                        locations[value], value.replace(' ', '_'));
                }
            },
        };
    }

    clearTerrainObjects() {
        this.renderer.dispose();

        this.loader.doneVec = false;
        this.loader.doneRgb = false;
        this.loader.clearRgbMaterials();
        this.loader.clearInteractives();
        this.scene.children
            .filter(obj => obj.name.startsWith('dem-'))
            .forEach(dem => {
                dem.parent.remove(dem);
                Loader.disposeObject(dem);
            });

        this.orbit.updateAxis(null);
        this.orbit.remove();
        this.map.plotOrbit(null);
        if (this.gui) {
            this.gui.setAutoOrbit(false);
        }

        this.marker.updateTmp(null);
        this.marker.marks().forEach(mark => {
            mark.parent.remove(mark);
            Loader.disposeObject(mark);
        });
    }

    reloadPageWithLocation(ll, title) {
        let href = `./index.html?lat=${ll[0]}&lng=${ll[1]}`;
        if (title) {
            href += `&title=${title}`;
        }

        if (0) {
            window.location.href = href; // deprecated
        } else {
            // https://stackoverflow.com/questions/35395485/change-url-without-refresh-the-page/35395594
            // window.history.pushState(null, '', href);
            window.history.replaceState(null, '', href);

            this.clearTerrainObjects();
            this.render();
            if (this.env.isDev) {
                console.log('======== ========');
                console.log('this:', this);
                console.log('this.scene.children:', this.scene.children);
                console.log('this.marker.scene.children:', this.marker.scene.children);
                console.log('======== ========');
            }

            const proj = this.loader.projection(ll, this.radius);
            this.map.update(ll, proj);
            this.map.plotCam(this.camera);
            this.monitor.updateTerrain(ll, this.zoom);

            this.origin = ll;
            this.projection = proj;
            this.updateTerrain(title);
        }
    }

    updateTerrain(title) {
        if (this.env.isDev) {
            this.loader.setDebugApis(title);
        }

        this._updateTerrain(this.vis);
    }

    static isTokenSet(token) {
        if (token !== '********') return true;

        const msg = 'Please set a valid Mapbox token in env.js';
        console.warn(msg);
        alert(msg);
        return false;
    }

    updateVisibility(vis) {
        this.vis = vis;
        this.scene.traverse(node => {
            if (!(node instanceof THREE.Mesh) &&
                !(node instanceof THREE.Line)) return;

            if (!node.name) return;

            if (node.name.startsWith('dem-rgb-')) {
                if (vis === 'satellite') {
                    const rgbMats = this.loader.getRgbMaterials();
                    if (node.name in rgbMats) {
                        node.material = rgbMats[node.name];
                        node.material.needsUpdate = true;
                        node.visible = true;
                    }
                } else if (vis === 'wireframe') {
                    node.material = this.wireframeMat;
                    node.material.needsUpdate = true;
                    node.visible = true;
                } else if (vis === 'contours') {
                    node.visible = false;
                }
            } else if (node.name.startsWith('dem-vec-')) {
                node.visible = vis === 'contours';
            }
        });
    }

    async _updateTerrain(vis) {
        const refresh = () => {
            this.updateVisibility(vis);
            this.render();
        };

        if (!App.isTokenSet(this.env.tokenMapbox)) {
            return refresh();
        }

        const { origin, radius, zoom } = this;
        try {
            if (vis === 'contours' && !this.loader.doneVec) {
                await this.loader.getVecTerrain(origin, radius, zoom, refresh);
            } else if (vis !== 'contours' && !this.loader.doneRgb) {
                await this.loader.getRgbTerrain(origin, radius, zoom, refresh);
            } else {
                refresh();
            }
        } catch (err) {
            console.error('_updateTerrain(): err:', err);
        }
    }

    updateMeasure(mx, my) {
        const isect = this.raycastInteractives(mx, my);
        if (isect !== null) {
            this.marker.update(isect.point);
        } else {
            this.marker.updateTmp(null);
        }

        if (this.gui && !this.gui.data.autoOrbit) {
            this.render();
        }

        this.monitor.updateMeasure(this.marker.pair, this.projection);
    }

    updateOrbit(mx, my) {
        const isect = this.raycastInteractives(mx, my);
        if (isect !== null) {
            console.log('(orbit) mesh hit:', isect.object.name);

            const pt = isect.point;
            this.orbit.updateAxis(pt);
            this.orbit.remove();
            this.orbit.add(this.camera, pt);
            this.map.plotOrbit(this.orbit.data());
        } else {
            console.log('(orbit) no isects');

            this.orbit.updateAxis(null);
            this.orbit.remove();
            this.map.plotOrbit(null);

            if (this.gui) {
                this.gui.setAutoOrbit(false);
            }
        }

        if (this.gui && !this.gui.data.autoOrbit) {
            this.render();
        }
    }

    raycastInteractives(mx, my) {
        return this.loader.interact(meshes => this.raycastFromMouse(mx, my, meshes));
    }

    pick(mx, my) {
        if (!this.laser.active && this.marker.pair.length !== 1) {
            return;
        }

        const isect = this.raycastInteractives(mx, my);
        if (isect !== null) {
            const pt = isect.point;

            this.laser.prepare();
            if (this.laser.active) {
                this.loader.interact(meshes => this.laser.shoot(pt, meshes));
            }

            this.marker.pick(pt);
        } else {
            this.laser.clear();
        }

        if (this.gui && !this.gui.data.autoOrbit) {
            this.render();
        }
    }
}

export default App;