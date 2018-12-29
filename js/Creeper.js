class Creeper {
    construtor(x, y) {
        this.pos = createVector(x, y);
        this.step = createVector(10, 10);
    }
    show() {
        stroke(255);
        strokeWeight(2);
        noFill();
        line(this.pos.x, this.pos.y, this.step.x, this.step.y);
    }
    update() {
        //        this.step.x = 10;
        //        this.step.y = 10;
    }
}
