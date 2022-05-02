import Env from './env.js';
//import Env from './envs-ignore/env-dev.js';
//import Env from './envs-ignore/env-io.js';

import Threelet from '../../deps/threelet.esm.js';
import ThreeGeo from '../../../src';
import GuiHelper from './gui-helper.js';
import MapHelper from './map-helper.js';
import Msg from './msg-helper.js';
import Loader from './loader.js';
import Laser from './laser.js';
import Orbit from './orbit.js';
import Marker from './marker.js';

const { THREE, Stats } = window;

class App extends Threelet {
    // override
    onCreate(params) {
        this.env = Env;
        this.scene = new THREE.Scene();
        this.sceneMarker = new THREE.Scene();

        this.initComponents();

        this.camera.position.set(0, 0, 1.5);
        this.camera.up.set(0, 0, 1);

        this.stats = this.setup('mod-stats', Stats, {panelType: 1});
        this.render = () => { // override
            this.stats.update();
            this.resizeCanvas();

            this.updateAnim();
            this._render();
            this.msg.update(this.camera, this.projection);
            this.map.plotCam(this.camera);
        };
        this.setup('mod-controls', THREE.OrbitControls);
        this.render(); // first time

        this.initGui();
        //this.closeGui();

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
        this.renderer.render(this.sceneMarker, this.camera);
    }

    initComponents() {
        //======== add light
        if (0) {
            // https://github.com/mrdoob/three.js/blob/master/examples/webvr_cubes.html
            this.scene.add(new THREE.HemisphereLight(0x606060, 0x404040));
            const light = new THREE.DirectionalLight(0xffffff);
            light.position.set(0, 0, 1).normalize();
            this.scene.add(light);
        }

        //======== add sub-camera
        if (0) {
            const cam = new THREE.PerspectiveCamera(60, 1, 0.01, 0.5);
            this.scene.add(new THREE.CameraHelper(cam));
            cam.position.set(0, 0, 2);
            cam.rotation.x = Math.PI / 4;
            cam.updateMatrixWorld();  // reflect pose change to CameraHelper
        }

        //======== add walls and axes
        const walls = new THREE.LineSegments(
            new THREE.EdgesGeometry(new THREE.BoxBufferGeometry(1, 1, 1)),
            new THREE.LineBasicMaterial({ color: 0xcccccc }));
        walls.position.set(0, 0, 0);
        walls.name = "singleton-walls";
        this.scene.add(walls);

        const axes = new THREE.AxesHelper(1);
        axes.name = "singleton-axes";
        this.scene.add(axes);

        //

        this.renderer.autoClear = false;
        this.wireframeMat = new THREE.MeshBasicMaterial({
            wireframe: true,
            color: 0x999999,
        });
        //>>>>>>>> >>>>>>>>
        this.satelliteMats = {}; // !!!!!!!!
        this.objsInteractive = []; // !!!!!!!!
        this.unitsSide = 1.0;
        this.tgeo = new ThreeGeo({
            unitsSide: this.unitsSide,
            tokenMapbox: this.env.tokenMapbox,
        });
        this.loader = new Loader(this.scene, this.tgeo);

        //

        const { origin, radius, zoom, vis, title } = App.resolveParams(this.env);
        const projection = this.loader.projection(origin, radius);

        this.origin = origin;
        this.radius = radius;
        this.zoom = zoom;
        this.vis = vis;
        this.projection = projection;
        this.updateTerrain(vis, title);

        //

        this.map = new MapHelper({
            origin, radius, projection,
            mapId: 'map',
            enableTiles: this.env.enableTilesLeaflet === true,
            onBuildTerrain: ll => { this.reloadPageWithLocation(ll, App.parseQuery().title); },
            onMapZoomEnd: () => { this.map.plotCam(this.camera); },
        });

        this.msg = new Msg({
            msg: document.getElementById('msg'),
            msgTerrain: document.getElementById('msgTerrain'),
            msgMeasure: document.getElementById('msgMeasure'),
        });

        this.guiHelper = null;
        this.laser = new Laser(this.scene, this.camera);
        this.orbit = new Orbit(this.scene);
        this.marker = new Marker(this.sceneMarker);
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

    //
    // gui
    //

    initGui() {
        const animToggler = App.createAnimToggler(this.render);
        const cbs = {
            onCapture: () => {
                this.capture();
            },
            onChangeGrids: value => {
                this.toggleGrids(value);
            },
            onChangeAutoOrbit: value => {
                this.toggleAutoOrbit(value);
                if (value) {
                    console.log('starting anim...');
                    animToggler(true);
                } else {
                    console.log('stopping anim...');
                    animToggler(false);
                }
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

        //

        const defaults = App.guiDefaults();
        const data = Object.assign({}, defaults);

        this.guiHelper = new GuiHelper(data, cbs, this.env)
            .setDefaults(defaults);
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

    static createAnimToggler(render) {
        let stopAnim = true;
        const animate = () => {
            if (stopAnim) {
                console.log('animate(): stopping');
                return;
            }
            requestAnimationFrame(animate);
            render();
        };

        return (tf) => {
            if (tf) {
                stopAnim = false;
                animate();
            } else {
                stopAnim = true;
            }
        };
    }

    //
    // loading stuff
    //

    static _disposeMaterial(mat) {
        if (mat.map) mat.map.dispose();
        mat.dispose();
    }

    static _disposeObject(obj) {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) this._disposeMaterial(obj.material);
        if (obj.texture) obj.texture.dispose();
    }

    clearTerrainObjects() {
        this.renderer.dispose();

        // this.wireframeMat             intact
        // this.objsInteractive          to be cleared // !!!!!!!!
        // ::this.satelliteMats          to be cleared
        //   dem-rgb-...                 to be cleared
        //   dem-rgb-...                 to be cleared
        //   ...                         to be cleared
        //====
        this.objsInteractive.length = 0; // !!!!!!!!
        this.loader.doneVector = false;
        this.loader.doneRgb = false;
        Object.entries(this.satelliteMats).forEach(([k, mat]) => {
            delete this.satelliteMats[k];
            App._disposeMaterial(mat);
        });

        // this.scene.children
        //   ::Mesh walls                intact
        //   ::Mesh dem-rgb-...          to be cleared
        //   ::Group dem-vec             to be cleared
        //   ::Laser ""     orbit        this.orbit.updateAxis(null)
        //   ::LineLoop ""  orbit        this.orbit.remove()
        //   ::Laser ""     pointer      intact
        //====
        this.scene.children.filter(
            obj => obj.name.startsWith('dem-'))
                .forEach(dem => {
                    dem.parent.remove(dem);
                    App._disposeObject(dem);
                });
        this.orbit.updateAxis(null);
        this.orbit.remove();
        this.map.plotOrbit(null);
        if (this.guiHelper) {
            this.guiHelper.autoOrbitController.setValue(false);
        }

        // this.sceneMarker.children
        //   ::Laser ""     singleton-mark-tmp   this.marker.updateTmp(null)
        //   ::Laser ""     mark-<date>          to be cleared
        //   ::Laser ""     mark-<date>          to be cleared
        //   ......................              to be cleared
        //====
        this.marker.updateTmp(null);
        this.marker.marks().forEach(mark => {
            mark.parent.remove(mark);
            App._disposeObject(mark);
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
            if (1) {
                console.log('======== ========');
                console.log('this:', this);
                console.log('this.scene.children:', this.scene.children);
                console.log('this.sceneMarker.children:', this.sceneMarker.children);
                console.log('======== ========');
            }

            const proj = this.loader.projection(ll, this.radius);
            this.map.update(ll, proj);
            this.map.plotCam(this.camera);
            this.msg.updateTerrain(ll, this.zoom);

            this.origin = ll;
            this.projection = proj;
            this.updateTerrain(this.vis, title);
        }
    }

    updateTerrain(vis, title) {
        if (this.env.isDev) {
            let loc = 'invalid';
            if (title.includes('Table')) loc = 'table';
            if (title.includes('Eiger')) loc = 'eiger';
            if (title.includes('River')) loc = 'river';
            if (title.includes('Akagi')) loc = 'akagi';

            this.tgeo.setApiVector(`../../cache/${loc}/custom-terrain-vector`);
            this.tgeo.setApiRgb(`../../cache/${loc}/custom-terrain-rgb`);
            this.tgeo.setApiSatellite(`../../cache/${loc}/custom-satellite`);
        }

        this._updateTerrain(vis);
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
                if (vis === 'satellite' && node.name in this.satelliteMats) {
                    node.material = this.satelliteMats[node.name];
                    node.material.needsUpdate = true;
                    node.visible = true;
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
            if (vis === 'contours' && !this.loader.doneVector) {
                await this.loader.getTerrainVector(origin, radius, zoom, refresh);
            } else if (vis !== 'contours' && !this.loader.doneRgb) {
                await this.loader.getTerrainRgb(origin, radius, zoom, refresh);
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
        this.scene.getObjectByName("singleton-walls").visible = tf;
        this.scene.getObjectByName("singleton-axes").visible = tf;
        this.render();
    }

    static applyCustom(meshes, func) {
        const visibilities = {};

        meshes.forEach(mesh => {
            visibilities[mesh.uuid] = mesh.visible; // save
            mesh.visible = true; // forcing for raycast
        });

        const output = func(meshes); // apply

        meshes.forEach(mesh => {
            mesh.visible = visibilities[mesh.uuid]; // restore
        });

        return output;
    }

    raycastCustom(mx, my) {
        return App.applyCustom(
            this.objsInteractive, meshes => this.raycastFromMouse(mx, my, meshes));
    }

    updateMeasure(mx, my) {
        const isect = this.raycastCustom(mx, my);
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
        const isect = this.raycastCustom(mx, my);
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
                this.guiHelper.autoOrbitController.setValue(false);
            }
        }

        if (this.guiHelper && !this.guiHelper.data.autoOrbit) {
            this.render();
        }
    }

    pick(mx, my) {
        if (!this.laser.active && this.marker.pair.length !== 1) {
            return;
        }

        const isect = this.raycastCustom(mx, my);
        if (isect !== null) {
            const pt = isect.point;

            this.laser.prepare();
            if (this.laser.active) {
                App.applyCustom(
                    this.objsInteractive, meshes => this.laser.shoot(pt, meshes));
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

    closeGui() {
        this.guiHelper.gui.close();
    }

    updateAnim() {
        this.orbit.move(this.camera);

        // There could be new animating objects
        // ...
    }
}

export default App;