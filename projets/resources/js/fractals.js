class Point{
    constructor(pX, pY) {
        this.x = pX;
        this.y = pY;
    }

    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }

    add(p) {
        return new Point(
            this.x + p.x,
            this.y + p.y
        );
    }

    lerp(p, factor) {
        return new Point(
            this.x + (p.x - this.x) * factor,
            this.y + (p.y - this.y) * factor
        );
    }

    perpDir(p) {
        return new Point(
            p.y - this.y,
            this.x - p.x
        );
    }

    len() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    substract(p) {
        return new Point(
            this.x - p.x,
            this.y - p.y
        );
    }

    scale(factor) {
        return new Point(
            this.x * factor,
            this.y * factor
        );
    }

    normalize() {
        return this.scale(1 / this.len());
    }
}

class Fractal {
    constructor(pPattern, pStart = [
        new Point(0.1, 0.9),
        new Point(0.9, 0.9)
    ]) {
        this.points = pStart;
        this.pattern = pPattern;
    }

    doIterations(nbIter) {
        for (let i = 0; i < nbIter; i++) {
            this.iterate();
        }
    }

    iterate() {
        let newPoints = new Array(this.points.length - 1);
        let promises = []

        for (let i = 0; i < this.points.length - 1; i++) {
            promises.push(new Promise((res, rej) => {
                newPoints[i] = this.generatePoints(this.points[i], this.points[i + 1]);
                res();
            }));
        }

        Promise.all(promises)
            .then(() => {
                this.points = [];
                for (let ptArr of newPoints) {
                    this.points = this.points.concat(ptArr);
                    console.log(this.points);
                }
            });
    }

    paint(pCtx, pWidth, pHeight) {
        let currentPoint = this.points[0];
        let nextPoint = null;

        pCtx.beginPath();
        pCtx.save();

        const vmin = pWidth < pHeight ? pWidth : pHeight;
        const left = (pWidth - vmin) / 2;
        const top = (pHeight - vmin) / 2;

        pCtx.translate(left, top);

        for (let i = 0; i < this.points.length - 1; i++) {
            nextPoint = this.points[i + 1];

            pCtx.moveTo(currentPoint.x * vmin, currentPoint.y * vmin);
            pCtx.lineTo(nextPoint.x * vmin, nextPoint.y * vmin);
            pCtx.stroke();

            currentPoint = nextPoint;
        }

        pCtx.restore();
    }
    
	generatePoints(p1, p2) {
        let generatedPoints = [];

        let vect = p2.substract(p1);
        let normal = p1.perpDir(p2).scale(-1);

        // Basis change (transform matrix)
        let a, b, c, d;
        a = vect.x;
        b = normal.x;
        c = vect.y;
        d = normal.y;

        for (let p of this.pattern) {
            generatedPoints.push(new Point(
                a * p.x + b * (p.y - 1),
                c * p.x + d * (p.y - 1)
            ).add(p1));
        }

        return generatedPoints;
    }
}

let header = $("#header").addClass("black-fg");
const INIT_HEADER = "<b>JsFractals</b><br/> Right = Next iteration | Up/Down = change pattern";

const canvas = $("#demo-canvas")[0];
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const fractalCollection = [
    {
        pattern: [
            new Point(0, 1),
            new Point(1/3, 1),
            new Point(0.5, 1 - Math.sqrt(3)/6),
            new Point(2/3, 1),
            new Point(1, 1)
        ],
        start: undefined
    },
    {
        pattern: [
            new Point(0, 1),
            new Point(0.5, 1),
            new Point(0.25, 1 - Math.sqrt(3)/4),
            new Point(0.75, 1 - Math.sqrt(3)/4),
            new Point(0.5, 1),
            new Point(1, 1)
        ],
        start: undefined
    }
];
let fractalIndex = 0;
let currentFractal = new Fractal(
    fractalCollection[fractalIndex].pattern, 
    fractalCollection[fractalIndex].start
);

$(header).html(INIT_HEADER);
document.addEventListener('keydown', handleEvent);
window.requestAnimationFrame(drawCanvas);


function drawCanvas() {
    // Clearing the canvas
    ctx.clearRect(0, 0, width, height);
    ctx.save();

    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;

    currentFractal.paint(ctx, width, height);

    ctx.restore();
}

function handleEvent(keyEvent) {
    switch (keyEvent.keyCode) {
        case 38:                // Up
            fractalIndex = (fractalIndex - 1 < 0) ? fractalCollection.length - 1 : fractalIndex - 1;
            currentFractal = new Fractal(
                fractalCollection[fractalIndex].pattern, 
                fractalCollection[fractalIndex].start
            );

            window.requestAnimationFrame(drawCanvas);
            break;
        case 39:                // Right
            currentFractal.iterate();

            window.requestAnimationFrame(drawCanvas);
            break;
        case 40:                // Down
            fractalIndex = (fractalIndex + 1 >= fractalCollection.length) ? 0 : fractalIndex + 1;
            currentFractal = new Fractal(
                fractalCollection[fractalIndex].pattern, 
                fractalCollection[fractalIndex].start
            );
            
            window.requestAnimationFrame(drawCanvas);
            break;
    }
}