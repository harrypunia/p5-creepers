let creepersLeft = [],
    creepersTop = [],
    creepersRight = [],
    creepersBottom = [],
    col = {
        0: {
            r: 0,
            g: 0,
            b: 0
        },
        1: {
            r: 49,
            g: 73,
            b: 60
        },
        2: {
            r: 122,
            g: 158,
            b: 126
        },
        3: {
            r: 124,
            g: 53,
            b: 69
        },
        4: {
            r: 1,
            g: 23,
            b: 47
        },
    };

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, P2D);
    for (let i = 0; i < 20; i++) {
        creepersLeft[i] = new Creeper(0, random(0, height));
        creepersTop[i] = new Creeper(random(0, width), 0);
        creepersRight[i] = new Creeper(width, random(0, height));
        creepersBottom[i] = new Creeper(random(0, width), height);
    }
    background(col[0].r, col[0].g, col[0].b);
}

function draw() {
    background(col[0].r, col[0].g, col[0].b, 10);

    for (let i in creepersLeft) {
        creepersLeft[i].show();
        creepersTop[i].show();
        creepersRight[i].show();
        creepersBottom[i].show();
    }
}

function windowResized() {
    resizeCanvas(window.innerWidth, window.innerHeight);
}
