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
        this.r = freq > this.initR ? freq : freq > 120 ? freq * 4 : this.initR;
        say(freq);
        //this.x = freq > 150 ? freq - 150 : 0;
    }
}
