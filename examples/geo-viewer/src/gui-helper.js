import OoGui from 'oo-gui/src';

class GuiHelper extends OoGui {
    constructor(env) {
        super(new Object() /* data */, {
            title: 'geo-viewer',
            width: 240,
        });

        this.onChangeMode = null;
        this.onCapture = null;
        this.onChangeGrids = null;
        this.onChangeAutoOrbit = null;
        this.onChangeVrLaser = null;
        this.onChangeLeaflet = null;
        this.onChangeMedia = null;
        this.onChangeLoc = null;

        this.env = env;
        this._autoOrbitController = null;
        this.footer = GuiHelper.createFooter();
    }

    setCallbacks(cbs) {
        Object.assign(this, cbs);
        return this;
    }

    // impl
    init(gui, data, params) {
        Object.assign(data, this.defaults);

        this.locations = { // key: [lat, lng],
            '(none)': [0, 0], // dummy
            'Table Mountain': [-33.9625, 18.4107],
            'Eiger': [46.5763, 7.9904],
            'Colorado River': [36.2058, -112.4413],
            'Mount Fuji': [35.3778, 138.7472],
            'k2': [35.8818, 76.5142],
            // 'Akagi': [36.5457, 139.1766],
            // 'Cruach Ardrain': [56.3562, -4.5940],
            // 'giza': [29.9791, 31.1342],
        };

        this.env.isDev && gui.add(params, 'isDev')
            .name('isDev: true !!')
            .domElement.addEventListener('click', ev => {
                console.log('this.env:', this.env);
                if (1) {
                    const { origin, pathname } = window.location;
                    window.location.href = `${origin}${pathname}`;
                }
            });

        gui.add(params, 'mode', ['Satellite', 'Wireframe', 'Contours'])
            .name('Terrain')
            .onChange(value => {
                this.onChangeMode(value);
                data.mode = value;
            });

        gui.add(params, 'capture')
            .name('Capture Now')
            .domElement.addEventListener('click', ev => {
                this.onCapture();
            });

        gui.add(params, 'grids')
            .name('Grids')
            .onChange(tf => {
                this.onChangeGrids(tf);
                data.grids = tf;
            });

        this._autoOrbitController = gui.add(params, 'autoOrbit')
            .name('Orbit')
            .onChange(tf => {
                this.onChangeAutoOrbit(tf);
                data.autoOrbit = tf;
            });

        gui.add(params, 'vrLaser')
            .name('Laser')
            .onChange(tf => {
                this.onChangeVrLaser(tf);
                data.vrLaser = tf;
            });

        // debug
        0 && gui.add(params, 'reset')
            .name('Reset')
            .domElement.addEventListener('click', ev => {
                this.applyDefaults();
                this.onChangeMode(params.mode);
                this.onChangeAutoOrbit(params.autoOrbit);
                //this.onChangeVrLaser(value);
                Object.assign(data, params);
            });

        gui.add(params, 'leaflet')
            .name('Map')
            .onChange(tf => {
                this.onChangeLeaflet(tf);
                data.leaflet = tf;
            });

        this.env.isDev && gui.add(params, 'media')
            .name('Media')
            .onChange(tf => {
                this.onChangeMedia(tf);
                data.media = tf;
            });

        gui.add(params, 'loc', Object.keys(this.locations))
            .name('Location')
            .onChange(value => {
                this.onChangeLoc(value, this.locations);
                data.Loc = value;
            });

        gui.add(params, 'sourceCode')
            .name('Source Code')
            .domElement.addEventListener('click', ev => {
                window.location.href = "https://github.com/w3reality/three-geo/tree/master/examples/geo-viewer";
            });

        gui.domElement
            .getElementsByClassName('children')[0]
            .appendChild(this.footer);
    }

    setAutoOrbit(tf) {
        this._autoOrbitController.setValue(tf);
    }

    close() {
        this.gui.close();
    }

    appendToFooter(el) {
        this.footer.appendChild(el);

        return this;
    }

    static createFooter() {
        const ft = document.createElement('div');
        Object.assign(ft.style, {
            margin: '4px',
        });

        return ft;
    }
}

export default GuiHelper;