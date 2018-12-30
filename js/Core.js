class Core {
    constructor(s) {
        this.x = 0;
        this.y = 0;
        this.r = s;
    }
    show() {
        noStroke();
        applyMatrix();
        translate(width / 2, height / 2);
        fill(col[0].r, col[0].g, col[0].b)
        ellipse(this.x, this.y, this.r, this.r)
        resetMatrix();
    }
}
