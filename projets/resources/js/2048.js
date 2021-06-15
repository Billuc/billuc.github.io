let header = $("#header").addClass("black-fg");

const canvas = $("#demo-canvas")[0];
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const UP = 0;
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;

let grid;
let prevGrid;
let won, lost;

init();
document.addEventListener('keydown', handleEvent);

function init() {
    grid = [
        0,0,0,0,
        0,0,0,0,
        0,0,0,0,
        0,0,0,0
    ];
    won = false;
    lost = false;
    $(header).html("<b>Py2048</b><br/> Use the arrows to play, U to undo");

    placeRandom();
    placeRandom();

    prevGrid = [...grid];
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

function handleEvent(keyEvent) {
    switch (keyEvent.keyCode) {
        case 37:                // Left
            makeMove(LEFT);
            break;
        case 38:                // Up
            makeMove(UP);
            break;
        case 39:                // Right
            makeMove(RIGHT);
            break;
        case 40:                // Down
            makeMove(DOWN);
            break;
        case 82:                // R
            init();
            break;
        case 85:                // U
            undo();
            break;
    }
}

function checkIfLost() {
    for (let i = 0; i < 15; i++) {
        const val = grid[i];
        const col = i % 4;
        const row = (i - col) / 4;

        if (
            val == 0 ||
            (row < 3 && grid[i + 4] == val) ||
            (col < 3 && grid[i + 1] == val)            
        ) return false;
    }

    if (!lost) {
        $(header).html($(header).html() + "<br/>You lost :( Press R to restart !");
        lost  = true;
    }
    return true;
}

function checkIfWon() {
    for (let val of grid) {
        if (val >= 2048) {
            if (!won) {
                $(header).html($(header).html() + "<br/>You won !");
                won = true;
            }
            return true;
        }
    }

    return false;
}

function undo() {
    grid = [...prevGrid];
}

function makeMove(direction) {
    let tempGrid = [...grid];
    let moved = false;

    if (direction == UP) {
        for (let c = 0; c < 4; c++) {
            let fusionned = 0;

            for (let r = 1; r < 4; r++) {
                if (grid[4 * r + c] != 0) {
                    let val = grid[4 * r + c];

                    for (let newR = r - 1; newR >= fusionned; newR--) {
                        if (grid[4 * newR + c] == 0) {
                            grid[4 * newR + c] = val;
                            grid[4 * (newR + 1) + c] = 0;
                            moved = true;
                        }
                        else if (grid[4 * newR + c] == val) {
                            grid[4 * newR + c] = 2 * val;
                            grid[4 * (newR + 1) + c] = 0;
                            fusionned++;
                            moved = true;
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        }
    }
    if (direction == DOWN) {
        for (let c = 0; c < 4; c++) {
            let fusionned = 0;

            for (let r = 2; r >= 0; r--) {
                if (grid[4 * r + c] != 0) {
                    let val = grid[4 * r + c];

                    for (let newR = r + 1; newR <= 3 - fusionned; newR++) {
                        if (grid[4 * newR + c] == 0) {
                            grid[4 * newR + c] = val;
                            grid[4 * (newR - 1) + c] = 0;
                            moved = true;
                        }
                        else if (grid[4 * newR + c] == val) {
                            grid[4 * newR + c] = 2 * val;
                            grid[4 * (newR - 1) + c] = 0;
                            fusionned++;
                            moved = true;
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        }
    }
    if (direction == LEFT) {
        for (let r = 0; r < 4; r++) {
            let fusionned = 0;

            for (let c = 1; c < 4; c++) {
                if (grid[4 * r + c] != 0) {
                    let val = grid[4 * r + c];

                    for (let newC = c - 1; newC >= fusionned; newC--) {
                        if (grid[4 * r + newC] == 0) {
                            grid[4 * r + newC] = val;
                            grid[4 * r + (newC + 1)] = 0;
                            moved = true;
                        }
                        else if (grid[4 * r + newC] == val) {
                            grid[4 * r + newC] = 2 * val;
                            grid[4 * r + (newC + 1)] = 0;
                            fusionned++;
                            moved = true;
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        }
    }
    if (direction == RIGHT) {
        for (let r = 0; r < 4; r++) {
            let fusionned = 0;

            for (let c = 2; c >= 0; c--) {
                if (grid[4 * r + c] != 0) {
                    let val = grid[4 * r + c];

                    for (let newC = c + 1; newC <= 3 - fusionned; newC++) {
                        if (grid[4 * r + newC] == 0) {
                            grid[4 * r + newC] = val;
                            grid[4 * r + (newC - 1)] = 0;
                            moved = true;
                        }
                        else if (grid[4 * r + newC] == val) {
                            grid[4 * r + newC] = 2 * val;
                            grid[4 * r + (newC - 1)] = 0;
                            fusionned++;
                            moved = true;
                        }
                        else {
                            break;
                        }
                    }
                }
            }
        }
    }

    if (moved) {
        prevGrid = tempGrid;
        placeRandom();
    
        checkIfWon();
        checkIfLost();
    }
}

function placeRandom() {
    let freeBoxes = []
    
    grid.forEach((element, index) => {
        if (element == 0) {
            freeBoxes = [...freeBoxes, index];
        }
    });

    grid[freeBoxes[Math.floor(Math.random() * freeBoxes.length)]] = Math.random() > 0.75 ? 4 : 2;
}