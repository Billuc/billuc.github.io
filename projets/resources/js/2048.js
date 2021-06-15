$("#header")
    .html("<b>Py2048</b><br/> Use the arrows to play, U to undo and R to restart")
    .addClass("black-fg");

const canvas = $("#demo-canvas")[0];
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

let grid = [
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0
];
let prevGrid = [
    0,0,0,0,
    0,0,0,0,
    0,0,0,0,
    0,0,0,0
];

let won = false;

init();

function init() {
    window.requestAnimationFrame(drawCanvas);
}

function drawCanvas() {
    // Clearing the canvas
    ctx.clearRect(0, 0, width, height);
    ctx.save();

    // ---------------- Drawing the grid ---------------------
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 4;
    let boxSize;

    if (width > height) {
        boxSize = 9 * height / 40; // 1/4th of 90%
        const wOffset = width / 2 - 2 * boxSize;

        ctx.translate(wOffset, height / 20);
    }
    else {
        boxSize = 9 * width / 40; // 1/4th of 90%
        const hOffset = height / 2 - 2 * boxSize;
        ctx.translate(width / 20, hOffset);
    }
    
    for (let i = 1; i < 4; i++) {
        ctx.strokeRect(0, 0, i * boxSize, 4 * boxSize);
        ctx.strokeRect(0, 0, 4 * boxSize, i * boxSize);
    }
    ctx.strokeRect(0, 0, 4 * boxSize, 4 * boxSize);

    //----------------- Drawing the boxes ------------------
    const fontSize = Math.floor(boxSize / 4);
    ctx.font = fontSize + "px Lucida Console";
        
    for (let j = 0; j < 16; j++) {
        const col = j % 4;
        const row = (j - col) / 4;

        const val = grid[j];
        let r, g, b;

        if (val != 0) {
            if (val <= 32) {
                r = 255;
                g = 255;
                b = 255 - 63.75 * (Math.log2(val) - 1); // log2(val/2)
            }
            else if (val <= 512) {
                r = 255;
                g = 255 - 63.75 * (Math.log2(val) - 5); // log2(val/32)
                b = 0;
            }
            else if (val <= 8192) {
                r = 255;
                g = 0;
                b = 63.75 * (Math.log2(val) - 9); // log2(val/512)
            }
            else if (val <= 131_072) {
                r = 255 - 63.75 * (Math.log2(val) - 13); // log2(val/8192)
                g = 0;
                b = 255;
            }
            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;

            const lineWidth = ctx.lineWidth;
            ctx.fillRect(
                col * boxSize + lineWidth / 2,
                row * boxSize + lineWidth / 2,
                boxSize - lineWidth,
                boxSize - lineWidth
            );

            ctx.fillStyle = "#000000";
            ctx.fillText(
                val, 
                (col + 0.5) * boxSize - fontSize * String(val).length / 4, 
                (row + 0.5) * boxSize + fontSize / 3
            );
        }
    }


    // ------------------ Next Frame -------------------
    ctx.restore();
    window.requestAnimationFrame(drawCanvas);
}

function handleEvent() {}

function checkIfLost() {
    let one_is_ok = false;

    grid.forEach((val, i) => {
        if (!one_is_ok && val != 0) {
            const col = i % 4;
            const row = (i - col) / 4;

            if (row > 0) {
                one_is_ok = one_is_ok || grid[(row - 1) * 4 + col] == val || grid[(row - 1) * 4 + col] == 0;
            }
            if (row < 3) {
                one_is_ok = one_is_ok || grid[(row + 1) * 4 + col] == val || grid[(row + 1) * 4 + col] == 0;
            }
            if (col > 0) {
                one_is_ok = one_is_ok || grid[row * 4 + col - 1] == val || grid[row * 4 + col - 1] == 0;
            }
            if (col < 3) {
                one_is_ok = one_is_ok || grid[row * 4 + col + 1] == val || grid[row * 4 + col + 1] == 0;
            }
        }
    });

    return !one_is_ok;
}

function undo() {}