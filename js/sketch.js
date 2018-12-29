let creepers = [],
    col = {
        0: {
            r: 0,
            g: 0,
            b: 0
        },
        1: {
            r: 0,
            g: 0,
            b: 0
        },
        2: {
            r: 0,
            g: 0,
            b: 0
        },
        3: {
            r: 0,
            g: 0,
            b: 0
        },
        4: {
            r: 0,
            g: 0,
            b: 0
        }
    };

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, P2D);
    for (let i = 0; i < 20; i++) {
        creepers[i] = new Creeper(0, 0);
    }
}

function draw() {
    background(col[0].r, col[0].g, col[0].b);

    for (let i in creepers) {
        creepers[i].show();
        creepers[i].update();
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}
