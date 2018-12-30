class Core {
    constructor(s, i) {
        this.x = 0;
        this.y = 0;
        this.initR = s;
        this.r = s;
        this.i = i;
    }
    show() {
        noFill();
        applyMatrix();
        translate(width / 2, height / 2);
        stroke(col[3].r, col[3].g, col[3].b);
        ellipse(this.x, this.y, this.r, this.r, 50);
        resetMatrix();
    }
    update(freq) {
        this.r = freq > this.initR ? freq : this.initR;
        //this.x = freq > 150 ? freq - 150 : 0;
    }
}
