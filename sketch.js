var canvas;
var palette;
var watch = [];

function setup() {
    canvas = createCanvas(600, 600);
    canvas.parent('sketch');
    
    watch.push(document.getElementById('watch01'));
    watch.push(document.getElementById('watch02'));

    palette = {
        bg: color('#051126'),
        highBg: color('#010102'),
        main: color('#007f97'),
        complement: color('#7c587f'),
        fg: color('#CCE5E5')
    };
}

function draw() {
    background(palette.highBg);
    noStroke();
    fill(palette.main);
    ellipse(mouseX, mouseY, 50, 50);

    watch[0].innerHTML = mouseX;
    watch[1].innerHTML = mouseY;
}

function mousePressed() {
}
