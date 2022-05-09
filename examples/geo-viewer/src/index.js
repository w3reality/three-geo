import Env from './env.js';
//import Env from './envs-ignore/env-dev.js';
//import Env from './envs-ignore/env-io.js';

import Threelet from '../../deps/threelet.esm.js';
import GuiHelper from './gui-helper.js';
import MapHelper from './map-helper.js';
import Msg from './msg-helper.js';
import Loader from './loader.js';
import Laser from './laser.js';
import Orbit from './orbit.js';
import Marker from './marker.js';
import Anim from './anim.js';

const { THREE, Stats } = window;

class App extends Threelet {
    onCreate(_params) { // override
        this.env = Env;

        this.camera.position.set(0, 0, 1.5);
        this.camera.up.set(0, 0, 1);
        this.renderer.autoClear = false;

        this.initComponents();

        this.stats = this.setup('mod-stats', Stats, { panelType: 1 });
        this.render = () => { // override
            this.stats.update();
            this.resizeCanvas();

            this._render();
            this.msg.update(this.camera, this.projection);
            this.map.plotCam(this.camera);
        };
        this.setup('mod-controls', THREE.OrbitControls);
        this.render(); // first time

        this.anim = new Anim(this.render, this.onAnimate.bind(this));
        this.guiHelper = this.initGui(
            this.stats.dom, document.getElementById('msg-wrapper'));

        this.msg.update(this.camera, this.projection);
        this.msg.updateTerrain(this.origin, this.zoom);
        this.map.plotCam(this.camera);

        this.on('pointer-move', (mx, my) => this.pick(mx, my));
        this.on('pointer-click', (mx, my) => this.updateMeasure(mx, my));
        this.on('pointer-click-right', (mx, my) => this.updateOrbit(mx, my));
    }

    _render() {
        this.renderer.clear();
        this.renderer.render(this.scene, this.camera);
        this.renderer.clearDepth();
        this.renderer.render(this.marker.scene, this.camera);
    }

    onAnimate(t, dt) {
        this.orbit.move(this.camera);

        if (this.env.isDev) { Anim._updateTestObjects(this, t, dt); } // dev
    }

    initComponents() {
        if (this.env.isDev) { Anim._addTestObjects(this, Threelet); } // dev

        this.scene.getObjectByName('walls').name = 'singleton-walls';
        this.scene.getObjectByName('axes').name = 'singleton-axes';

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

        this.map = new MapHelper({
            dom: document.getElementById('map'),
            domWrapper: document.getElementById('map-wrapper'),
            origin, radius, projection,
            enableTiles: this.env.enableTilesLeaflet === true,
            onBuildTerrain: ll => { this.reloadPageWithLocation(ll, App.parseQuery().title); },
            onMapZoomEnd: () => { this.map.plotCam(this.camera); },
        });

        this.msg = new Msg({
            msg: document.getElementById('msg'),
            msgTerrain: document.getElementById('msg-terrain'),
            msgMeasure: document.getElementById('msg-measure'),
        });

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

    initGui(statsDom, msgWrapper) {
        const cbs = {
            onCapture: () => {
                this.capture();
            },
            onChangeGrids: value => {
                this.toggleGrids(value);
            },
            onChangeAutoOrbit: tf => {
                this.toggleAutoOrbit(tf);
                this.anim.toggle(tf);
            },
            onChangeMode: mode => {
                this._updateTerrain(mode.toLowerCase());
            },
            onChangeVrLaser: value => {
                this.toggleVrLaser(value);
            },
            onChangeLeaflet: value => {
                this.toggleMap(value);
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

        const defaults = App.guiDefaults();
        const data = Object.assign({}, defaults);
        const gh = new GuiHelper(data, cbs, this.env)
            .setDefaults(defaults);

        if (this.env.isGuiClosed) {
            gh.close();
        }

        statsDom.style.position = ''; // clear the default
        gh.appendToFooter(statsDom);

        msgWrapper.style.display = '';
        gh.appendToFooter(msgWrapper);

        return gh;
    }

    static guiDefaults() {
        const { mode, title } = this.parseQuery();

        return {
            isDev: () => {},
            mode,
            capture: () => {},
            grids: true,
            autoOrbit: false,
            vrLaser: false,
            reset: () => {},
            loc: title ? title.replace('_', ' ') : '',
            leaflet: true,
            sourceCode: () => {},
        };
    }

    clearTerrainObjects() {
        this.renderer.dispose();

        // this.wireframeMat             intact
        //   dem-rgb-...                 to be cleared
        //   dem-rgb-...                 to be cleared
        //   ...                         to be cleared
        //====
        this.loader.doneVec = false;
        this.loader.doneRgb = false;
        this.loader.clearRgbMaterials();
        this.loader.clearInteractives();

        // this.scene.children
        //   ::LineSegments  singleton-walls       intact
        //   ::AxesHelper    singleton-axes        intact
        //   ::Laser         singleton-laser-vr    intact
        //   ::Mesh          dem-rgb-...           to be cleared
        //   ::Group         dem-vec               to be cleared
        //   ::Laser         singleton-orbit-axis  this.orbit.updateAxis(null)
        //   ::LineLoop      orbit                 this.orbit.remove()
        //====
        this.scene.children
            .filter(obj => obj.name.startsWith('dem-'))
            .forEach(dem => {
                dem.parent.remove(dem);
                Loader.disposeObject(dem);
            });
        this.orbit.updateAxis(null);
        this.orbit.remove();
        this.map.plotOrbit(null);
        if (this.guiHelper) {
            this.guiHelper.setAutoOrbit(false);
        }

        // this.marker.scene.children
        //   ::Laser ""     singleton-mark-tmp   this.marker.updateTmp(null)
        //   ::Laser ""     mark-<date>          to be cleared
        //                  mark-<date>          to be cleared
        //                  ...
        //====
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
            this.msg.updateTerrain(ll, this.zoom);

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

    toggleAutoOrbit(tf) {
        this.orbit.active = tf;

        if (tf && !this.orbit.exists()) {
            const pt = new THREE.Vector3(0, 0, 0);
            this.orbit.updateAxis(pt);
            this.orbit.add(this.camera, pt);
            this.map.plotOrbit(this.orbit.data());
        }
    }

    toggleVrLaser(tf) {
        this.laser.active = tf;
    }

    toggleGrids(tf) {
        this.scene.getObjectByName('singleton-walls').visible = tf;
        this.scene.getObjectByName('singleton-axes').visible = tf;
        this.render();
    }

    updateMeasure(mx, my) {
        const isect = this.raycastInteractives(mx, my);
        if (isect !== null) {
            this.marker.update(isect.point);
        } else {
            this.marker.updateTmp(null);
        }

        if (this.guiHelper && !this.guiHelper.data.autoOrbit) {
            this.render();
        }

        this.msg.updateMeasure(this.marker.pair, this.projection);
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

            if (this.guiHelper) {
                this.guiHelper.setAutoOrbit(false);
            }
        }

        if (this.guiHelper && !this.guiHelper.data.autoOrbit) {
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

        if (this.guiHelper && !this.guiHelper.data.autoOrbit) {
            this.render();
        }
    }

    toggleMap(tf) {
        this.map.toggle(tf);
    }
}

export default App;