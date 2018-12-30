class Core {
    constructor(s, i) {
        this.x = 0;
        this.y = 0;
        this.initR = s;
        this.r = s;
        this.i = i;
    }
    show() {
        let altC = 9 % (this.i + 1) == 0 ? 3 : 9 % (this.i + 1);
        noFill();
        applyMatrix();
        translate(width / 2, height / 2);
        stroke(col[altC].r, col[altC].g, col[altC].b);
        ellipse(this.x, this.y, this.r, this.r, 50);
        resetMatrix();
    }
    update(freq) {
        this.r = freq > this.initR ? freq : freq > 80 ? freq * 5 : this.initR;
    }
}
