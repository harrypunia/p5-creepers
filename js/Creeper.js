class Creeper {
    constructor(x, y) {
        this.center = {
            x: width / 2,
            y: height / 2
        };
        this.pos = {
            x: x,
            y: y
        };
        this.step = {
            x: x,
            y: y
        };
        this.dist = {
            x: 0,
            y: 0
        }
        this.lastStroke = {
            r: 0,
            g: 0,
            b: 0
        }
        this.totalSteps = 20;
        this.life = 100;
        this.chance = 100;
        this.core = {
            w: 20,
            h: 20
        }
    }
    show() {
        stroke(this.lastStroke.r, this.lastStroke.g, this.lastStroke.b)
        line(this.pos.x, this.pos.y, this.step.x, this.step.y);
        this.pos.x = this.step.x;
        this.pos.y = this.step.y;
        this.update();
    }
    update() {
        let chance = Math.floor(random(this.chance)) == 1;
        if (chance) {
            this.updateDist();
            this.assignColor();
            if (this.catch(this.pos)) {} else {
                this.step.x = random(this.pos.x, this.pos.x + (this.dist.x / this.totalSteps));
                this.step.y = random(this.pos.y, this.pos.y + (this.dist.y / this.totalSteps));
            }
        }
    }
    catch (pos) {
        let coreRange = {
            x: this.core.w / 2,
            y: this.core.h / 2
        }
        if ((pos.x > this.center.x - coreRange.x && pos.x < this.center.x + coreRange.x) || (pos.y > this.center.y - coreRange.y && pos.y < this.center.y + coreRange.y)) {
            return true
        } else {
            return false
        }
    }
    updateDist() {
        this.dist.x = this.center.x - this.pos.x;
        this.dist.y = this.center.y - this.pos.y;
    }
    assignColor() {
        let r = col[Math.floor(random(5))].r,
            g = col[Math.floor(random(5))].g,
            b = col[Math.floor(random(5))].b;
        stroke(r, g, b);
        this.lastStroke.r = r;
        this.lastStroke.g = g;
        this.lastStroke.b = b;
    }
}
