import Stats from 'three/examples/jsm/libs/stats.module';

class Widget {
    constructor() {
        const stats = new Stats();
        Widget._initStyle(stats.dom.style)

        this._stats = stats;
        this.dom = stats.dom;
    }

    _clearPanels() {
        while (this.dom.firstChild) {
            this.dom.firstChild.remove();
        }
    }

    static _initStyle(sty) {
        Object.assign(sty, {
            position: null,
            'z-index': null,
            display: 'inline-block',
        });
    }
}

class StatsWidget extends Widget {
    constructor() {
        super();
        this._stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
    }

    update() {
        this._stats.update();
    }
}

class ClockWidget extends Widget {
    constructor() {
        super();

        const stats = this._stats;
        this._clearPanels();

        const panel = stats.addPanel(ClockWidget.createPanel('CLOCK', '#ccc', '#002'));
        const panel24 = stats.addPanel(ClockWidget.createPanel('CLOCK 24H', '#ccc', '#002'));
        stats.showPanel(0);
    }

    static createPanel(name, fg, bg) {
        // cf. https://github.com/mrdoob/stats.js/blob/1ecb62cd10f30789b540dcdbbd473f1de6eed614/build/stats.module.js#L112

        // ...

        return new Stats.Panel(name, fg, bg); // dummy
    }
}

export { StatsWidget, ClockWidget };