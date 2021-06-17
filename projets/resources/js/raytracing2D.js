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

class Boundary {
    constructor(p1, p2, c = "#aaa") {
        this.start = p1;
        this.end = p2;
        this.color = c;
    }

    draw(pCtx) {
        pCtx.fillStyle = this.color;
        pCtx.strokeStyle = this.color;

        pCtx.lineWidth = 2;

        pCtx.beginPath();
        pCtx.moveTo(this.start.x, this.start.y);
        pCtx.lineTo(this.end.x, this.end.y);
        pCtx.closePath();
        pCtx.stroke();
    }

    drawAsEdge(pCtx) {
        pCtx.fillStyle = this.color;
        pCtx.strokeStyle = this.color;

        pCtx.lineTo(this.end.x, this.end.y);
    }

    intersection(ray) {
        let toEnd = this.end.substract(this.start);
        let toRayPos = ray.pos.substract(this.start);
        
        let u = (- ray.dir.x * toRayPos.y + ray.dir.y * toRayPos.x) / (- ray.dir.x * toEnd.y + ray.dir.y * toEnd.x);
        let t = (- toRayPos.x * toEnd.y + toRayPos.y * toEnd.x) / (ray.dir.x * toEnd.y - ray.dir.y * toEnd.x);

        if (u > 1 || u < 0 || t <= 0) return null;
        return this.start.add(toEnd.scale(u));
    }
}

class Square {
    constructor(first, third, c="#ff0") {
        this.a = first;
        this.c = third;

        this.color = c;

        let center = first.lerp(third, 0.5);

        this.b = center.add(center.perpDir(this.c));
        this.d = center.add(center.perpDir(this.c).scale(-1));

        this.edges = [];
        
        this.edges.push(new Boundary(this.a, this.b, this.color));
        this.edges.push(new Boundary(this.b, this.c, this.color));
        this.edges.push(new Boundary(this.c, this.d, this.color));
        this.edges.push(new Boundary(this.d, this.a, this.color));
    }

    draw(pCtx) {
        pCtx.save();

        pCtx.beginPath()
        pCtx.moveTo(this.edges[0].start.x, this.edges[0].start.y);
        for (let e of this.edges) {
            e.drawAsEdge(pCtx);
        }
        pCtx.closePath();
        pCtx.fill();
        
        pCtx.restore();
    }

    intersection(ray) {
        let minDist = Number.MAX_VALUE;
        let intersect = null;

        for (let e of this.edges) {
            let inter = e.intersection(ray);

            if (inter) {
                const dist = ray.pos.substract(inter).len();

                if (dist < minDist) {
                    minDist = dist;
                    intersect = inter;
                }
            }
        }

        return intersect;
    }
}

class Ray {
    constructor(pPos, pDir, pHandler, c="#f00") {
        this.pos = pPos;
        this.dir = pDir.normalize();
        this.color = c;
        this.handler = pHandler;
    }

    draw(pCtx) {
        const endPt = this.handler.cast(this);

        if (endPt) {
            pCtx.fillStyle = this.color;
            pCtx.strokeStyle = this.color;
    
            pCtx.beginPath();
            pCtx.moveTo(this.pos.x, this.pos.y);
            pCtx.lineTo(endPt.x, endPt.y);
            pCtx.closePath();
            pCtx.stroke();
        }
    }
}

class RayHandler {
    constructor() {
        this.shapes = [];
        this.rays = [];
        this.pos = new Point(-1,-1);
    }

    addShape(s) {
        this.shapes.push(s);
    }

    generateRays(rayNb) {
        this.rays = [];

        for (let i = 0; i < rayNb; i++) {
            let angle = 2 * i * Math.PI / rayNb;
            this.rays.push(   
                                new Ray(
                                    this.pos, 
                                    new Point(
                                        Math.cos(angle),
                                        Math.sin(angle)
                                    ),
                                    this
                                )
                            );
        }
    }

    cast(ray) {
        let minDist = Number.MAX_VALUE;
        let intersect = null;

        for (let s of this.shapes) {
            let inter = s.intersection(ray);

            if (inter) {
                const dist = ray.pos.substract(inter).len();

                if (dist < minDist) {
                    minDist = dist;
                    intersect = inter;
                }
            }
        }

        return intersect;
    }

    setPosition(pPos) {
        this.pos = pPos;
        for (let r of this.rays) {
            r.pos = pPos;
        }
    }

    drawRays(pCtx) {
        for (let r of this.rays) {
            pCtx.save();
            r.draw(pCtx);
            pCtx.restore();
        }
    }
    
    drawShapes(pCtx) {
        for (let s of this.shapes) {
            pCtx.save();
            s.draw(pCtx);
            pCtx.restore();
        }
    }
}

let header = $("#header").addClass("black-fg");
const INIT_HEADER = "<b>RayTracing2D</b><br/>";
const MOUSE_HEADER = "Move your mouse over the canvas";
const TOUCH_HEADER = "Touch and drag over the canvas";

const canvas = $("#demo-canvas")[0];
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

document.addEventListener('mousemove', (e) => {
    castRays([ e.clientX, e.clientY ]);
})
let mobile = new MobileHandler();
mobile.setTargets(canvas);
mobile.addTouchAndDragListeners(castRays);

$(header).html(INIT_HEADER + (mobile.isMobile() ? TOUCH_HEADER : MOUSE_HEADER));


const handler = new RayHandler();
handler.addShape(
    new Square(
        new Point(
            0.1 * width,
            0.5 * height
        ),
        new Point(
            0.3 * width,
            0.6 * height
        )
    )
);
handler.addShape(
    new Boundary(
        new Point(
            0.2 * width,
            0.9 * height
        ),
        new Point(
            0.8 * width,
            0.4 * height
        )
    )
);

// Canvas boundaries
handler.addShape(new Boundary(new Point(0, 0), new Point(width, 0), "#000"));
handler.addShape(new Boundary(new Point(width, 0), new Point(width, height), "#000"));
handler.addShape(new Boundary(new Point(width, height), new Point(0, height), "#000"));
handler.addShape(new Boundary(new Point(0, height), new Point(0, 0), "#000"));

handler.generateRays(100);
window.requestAnimationFrame(drawCanvas);

function castRays(position) {
    // https://stackoverflow.com/a/17130415
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    handler.setPosition(new Point((position[0] - rect.left) * scaleX, (position[1] - rect.top) * scaleY));
}

function drawCanvas() {
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    
    handler.drawShapes(ctx);
    handler.drawRays(ctx);

    ctx.restore();
    window.requestAnimationFrame(drawCanvas);
}