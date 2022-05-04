import ThreeGeo from '../../../src';

class Marker {
    constructor(scene) {
        this.scene = scene;
        this.pair = [];
        this._laserColor = null;

        const laser = new ThreeGeo.Laser({ maxPoints: 2 });
        laser.name = 'singleton-mark-tmp';
        this.scene.add(laser);
        this._laser = laser;
    }

    marks() { // excludes tmp (sigleton) one
        return this.scene.children.filter(obj => obj.name.startsWith('mark-'));
    }

    updateTmp(pt0=null, pt1=null, color=0xffffff) {
        if (pt0) {
            this._laser.setSource(pt0);
            this._laser.point(pt1, color);
            this._laser.visible = true;
        } else {
            this.pair.length = 0; // clear the array
            this._laser.visible = false;
        }
    }

    pick(pt) {
        if (this.pair.length === 1) {
            this.updateTmp(this.pair[0], pt, this._laserColor);
        } else {
            this.updateTmp(null);
        }
    }

    update(pt) {
        if (this.pair.length === 1) {
            this.pair.push(pt);

            const laser = new ThreeGeo.Laser({ maxPoints: 2, color: this._laserColor });
            laser.updatePoints(this.pair);
            laser.name = `mark-${Date.now()}`;
            this.scene.add(laser);
        } else {
            this.pair = [pt,];
            this._laserColor = 0x00ffff;
        }
    }
}

export default Marker;