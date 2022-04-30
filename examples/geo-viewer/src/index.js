import env from './env.js';
//import env from './envs-ignore/env-dev.js';
//import env from './envs-ignore/env-io.js';

import Threelet from '../../deps/threelet.esm.js';
import ThreeGeo from '../../../src';
import GuiHelper from './gui-helper.js';
import MapHelper from './map-helper.js';
import MsgHelper from './msg-helper.js';
import Laser from './laser.js';
import Orbit from './orbit.js';
import Marker from './marker.js';

const { THREE, Stats } = window;

class App extends Threelet {
    // override
    onCreate(params) {
        this.env = env;
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
            this.showMsg();
            this.plotCamInMap();
        };
        this.setup('mod-controls', THREE.OrbitControls);
        this.render(); // first time

        this.initGui();
        //this.closeGui();

        this.showMsg();
        this.plotCamInMap();
        this.showMsgTerrain();

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

        // ======== adding geo tiles
        this.renderer.autoClear = false;

        this.wireframeMat = new THREE.MeshBasicMaterial({
            wireframe: true,
            color: 0x999999,
        });
        this.satelliteMats = {};
        this.objsInteractive = [];
        this._isRgbDemLoaded = false;
        this._isVectorDemLoaded = false;
        this.unitsSide = 1.0;

        this.tgeo = new ThreeGeo({
            unitsSide: this.unitsSide,
            tokenMapbox: this.env.tokenMapbox,
        });

        // https://docs.mapbox.com/data/tilesets/guides/access-elevation-data/#mapbox-terrain-rgb
        // vector dem: 9--15 (at 8, no contour data returned)
        //    rbg dem: ?--15
        this._zoom = this.env.zoom || 13; // satellite zoom resolution -- min: 11, defaut: 13, max: 17
        this._radius = 5.0*2**(13-this._zoom);

        const { origin, mode, title } = App.parseQuery();
        this._origin = origin;
        this._vis = mode;
        this.updateTerrain(this._vis, title);

        this._projection = this.tgeo.getProjection(this._origin, this._radius);

        //

        this.guiHelper = null;

        this.mapHelper = new MapHelper({
            origin: this._origin,
            radius: this._radius,
            projection: this._projection,
            mapId: 'map',
            enableTiles: this.env.enableTilesLeaflet === true,
            onBuildTerrain: ll => { this.reloadPageWithLocation(ll, App.parseQuery().title); },
            onMapZoomEnd: () => { this.plotCamInMap(); },
        });

        this.msgHelper = new MsgHelper({
            msg: document.getElementById('msg'),
            msgTerrain: document.getElementById('msgTerrain'),
            msgMeasure: document.getElementById('msgMeasure'),
        });

        //

        this.laser = new Laser(this.scene, this.camera);

        this.orbit = new Orbit(this.scene);

        this.marker = new Marker(this.sceneMarker);
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
            onChangeVis: value => {
                console.log('vis:', value);
                if (value === 'Contours') {
                    this.loadVectorDem(() => {
                        this.updateMode(value);
                        this.render();
                    });
                } else {
                    this.loadRgbDem(() => {
                        this.updateMode(value);
                        this.render();
                    });
                }
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
        const { mode: vis, title } = this.parseQuery();

        return {
            isDev: () => {},
            vis,
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
        // this.objsInteractive          to be cleared
        // this._isRgbDemLoaded          to be set false
        // this._isVectorDemLoaded       to be set false
        // ::this.satelliteMats          to be cleared
        //   dem-rgb-...                 to be cleared
        //   dem-rgb-...                 to be cleared
        //   ...                         to be cleared
        //====
        this.objsInteractive.length = 0;
        this._isRgbDemLoaded = false;
        this._isVectorDemLoaded = false;
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
        this.mapHelper.plotOrbit(null);
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

            // update leaflet
            this.mapHelper.update(
                ll, this.tgeo.getProjection(ll, this._radius));
            this.plotCamInMap();

            // update terrain
            this._origin = ll;
            this.showMsgTerrain();
            this.updateTerrain(this._vis, title);
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

        switch (vis.toLowerCase()) {
            case "satellite":
                console.log('update to satellite');
                this.loadRgbDem(() => {
                    this.render();
                });
                break;
            case "wireframe":
                console.log('update to wireframe');
                this.loadRgbDem(() => {
                    // override the default satellite texture
                    this.updateMode("Wireframe");
                    this.render();
                });
                break;
            case "contours":
                console.log('update to contours');
                this.loadVectorDem(() => {
                    this.render();
                });
                break;
            default:
                break;
        }
    }

    nop() { /* nop */ }

    static isTokenSet(token) {
        if (token !== '********') return true;

        const msg = 'Please set a valid Mapbox token in env.js';
        console.warn(msg);
        alert(msg);
        return false;
    }

    loadRgbDem(cb=this.nop) {
        if (this._isRgbDemLoaded) { return cb(); }
        if (!App.isTokenSet(this.env.tokenMapbox)) { return cb(); }

        this._isRgbDemLoaded = true;
        this.tgeo.getTerrain(this._origin, this._radius, this._zoom, {
            onRgbDem: (objs) => {
                // dem-rgb-<zoompos>
                objs.forEach((obj) => {
                    this.objsInteractive.push(obj);
                    this.scene.add(obj);
                    // console.log('obj:', obj);
                });
                this.render();
            },
            onSatelliteMat: (plane) => {
                plane.material.side = THREE.DoubleSide;
                this.satelliteMats[plane.name] = plane.material;
                this.render();
                return cb();
            },
        });
    }

    async loadVectorDem(cb=this.nop) {
        if (this._isVectorDemLoaded) { return cb(); }
        if (!App.isTokenSet(this.env.tokenMapbox)) { return cb(); }

        console.log('load vector dem: start');
        this._isVectorDemLoaded = true;

        const terrain = await this.tgeo.getTerrainVector(
            this._origin, this._radius, this._zoom);
        console.log('load vector dem: end');

        this.scene.add(terrain);
        this.render();
        cb();
    }

    toggleAutoOrbit(tf) {
        this.orbit.active = tf;

        if (tf && !this.orbit.exists()) {
            const pt = new THREE.Vector3(0, 0, 0);
            this.orbit.updateAxis(pt);
            this.orbit.add(this.camera, pt);
            this.mapHelper.plotOrbit(this.orbit.data());
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

    //
    // laser casting
    //

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

        this.showMsgMeasure(this.marker.pair);
    }

    updateOrbit(mx, my) {
        const isect = this.raycastCustom(mx, my);
        if (isect !== null) {
            console.log('(orbit) mesh hit:', isect.object.name);

            const pt = isect.point;
            this.orbit.updateAxis(pt);
            this.orbit.remove();
            this.orbit.add(this.camera, pt);
            this.mapHelper.plotOrbit(this.orbit.data());
        } else {
            console.log('(orbit) no isects');

            this.orbit.updateAxis(null);
            this.orbit.remove();
            this.mapHelper.plotOrbit(null);

            if (this.guiHelper) {
                this.guiHelper.autoOrbitController.setValue(false);
            }
        }

        if (this.guiHelper && !this.guiHelper.data.autoOrbit) {
            this.render();
        }
    }

    //

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

    //

    toggleMap(tf) {
        this.mapHelper.toggle(tf);
    }

    plotCamInMap() {
        this.mapHelper.plotCam(this.camera);
    }

    //

    showMsg() {
        this.msgHelper.showMsg(this.camera, this._projection.unitsPerMeter);
    }

    showMsgTerrain() {
        this.msgHelper.showMsgTerrain(this._origin, this._zoom);
    }

    showMsgMeasure(pair) {
        this.msgHelper.showMsgMeasure(pair, this._projection.unitsPerMeter);
    }

    //

    updateMode(vis) {
        this._vis = vis;
        this.scene.traverse((node) => {
            if (!(node instanceof THREE.Mesh) &&
                !(node instanceof THREE.Line)) return;

            // console.log(node.name);
            if (!node.name) return;

            if (node.name.startsWith('dem-rgb-')) {
                // console.log(`updating vis of ${node.name}`);
                if (vis === "Satellite" && node.name in this.satelliteMats) {
                    node.material = this.satelliteMats[node.name];
                    node.material.needsUpdate = true;
                    node.visible = true;
                } else if (vis === "Wireframe") {
                    node.material = this.wireframeMat;
                    node.material.needsUpdate = true;
                    node.visible = true;
                } else if (vis === "Contours") {
                    node.visible = false;
                }
            } else if (node.name.startsWith('dem-vec-')) {
                node.visible = vis === "Contours";
            }
        });
    }

    closeGui() {
        this.guiHelper.gui.close();
    }

    //

    updateAnim() {
        this.orbit.move(this.camera);

        // There could be new animating objects
        // ...
    }
}

export default App;