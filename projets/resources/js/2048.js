let header = $("#header").addClass("black-fg");
const INIT_HEADER = "<b>JS2048</b><br/> Use the arrows to play, U to undo";
const TOUCH_HEADER = "<b>JS2048</b><br/> Swipe to play, Double tap to undo";
const WON_HEADER = "<br/>You won !";
const LOST_HEADER = "<br/>You lost :( Press R to restart !";
const LOST_TOUCH_HEADER = "<br/>You lost :( Swipe to restart !";

// check http://detectmobilebrowsers.com/
const isMobile = (function (a) {if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) return true;})(navigator.userAgent||navigator.vendor||window.opera);

if (isMobile) {
    $('html').css('min-height', window.innerHeight + "px");
    $('body').css('min-height', window.innerHeight + "px");
}

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
let won, lost = false;

let movements;
let anim;
let animTime;

let touchStart = null;

init();
document.addEventListener('keydown', handleKey);
document.addEventListener('touchstart', (e) => {
    touchStart = [
        e.touches[0].clientX, 
        e.touches[0].clientY
    ];
});
document.addEventListener('touchend', handleTouch);

function init() {
    grid = [
        0,0,0,0,
        0,0,0,0,
        0,0,0,0,
        0,0,0,0
    ];
    won = false;
    lost = false;
    updateHeader();

    movements = {};
    anim = false;
    animTime = 0;

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

        const val = (anim) ? prevGrid[j] : grid[j];
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

            if (anim) {
                let newCol, newRow;
                if (j in movements) {
                    newCol = movements[j] % 4;
                    newRow = (movements[j] - newCol) / 4;
                }
                else {
                    newCol = col;
                    newRow = row;
                }

                const cAnim = col + (newCol - col) * animTime;
                const rAnim = row + (newRow - row) * animTime;

                const lineWidth = ctx.lineWidth;
                ctx.fillRect(
                    cAnim * boxSize + lineWidth / 2,
                    rAnim * boxSize + lineWidth / 2,
                    boxSize - lineWidth,
                    boxSize - lineWidth
                );
    
                ctx.fillStyle = "#000000";
                ctx.fillText(
                    val, 
                    (cAnim + 0.5) * boxSize - fontSize * String(val).length / 4, 
                    (rAnim + 0.5) * boxSize + fontSize / 3
                );

                if (animTime >= 1)  anim = false;
                else                animTime += 0.01;
            }
            else {
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
    }


    // ------------------ Next Frame -------------------
    ctx.restore();
    window.requestAnimationFrame(drawCanvas);
}

function handleKey(keyEvent) {
    if (anim) return;

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

function handleTouch(event) {
    let touchEnd = [
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY
    ];

    let delta = [
        touchEnd[0] - touchStart[0],
        touchEnd[1] - touchStart[1]
    ];

    if (lost && (Math.abs(delta[0]) > 5 || Math.abs(delta[1]) > 5)) {
        init();
    }
    else if (Math.abs(delta[0]) > Math.abs(delta[1])) {
        if (delta[0] > 5) {
            makeMove(RIGHT);
        }
        else if (delta[0] < -5) {
            makeMove(LEFT);
        }
    }
    else if (Math.abs(delta[0]) < Math.abs(delta[1])) {
        if (delta[1] > 5) {
            makeMove(DOWN);
        }
        else if (delta[1] < -5) {
            makeMove(UP);
        }
    }
}

function checkIfLost() {
    for (let i = 0; i < 16; i++) {
        const val = grid[i];
        const col = i % 4;
        const row = (i - col) / 4;

        if (
            val == 0 ||
            (row < 3 && grid[i + 4] == val) ||
            (col < 3 && grid[i + 1] == val)            
        ) return false;
    }

    return true;
}

function checkIfWon() {
    for (let val of grid) {
        if (val >= 2048) {
            return true;
        }
    }

    return false;
}

function undo() {
    grid = [...prevGrid];
    updateHeader();
}

function makeMove(direction) {
    let tempGrid = [...grid];
    let moved = false;
    movements = {};

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

                            movements[4 * r + c] = 4 * newR + c;
                            moved = true;
                        }
                        else if (grid[4 * newR + c] == val) {
                            grid[4 * newR + c] = 2 * val;
                            grid[4 * (newR + 1) + c] = 0;
                            fusionned = newR + 1;
                            
                            movements[4 * r + c] = 4 * newR + c;
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
            let fusionned = 3;

            for (let r = 2; r >= 0; r--) {
                if (grid[4 * r + c] != 0) {
                    let val = grid[4 * r + c];

                    for (let newR = r + 1; newR <= fusionned; newR++) {
                        if (grid[4 * newR + c] == 0) {
                            grid[4 * newR + c] = val;
                            grid[4 * (newR - 1) + c] = 0;
                            
                            movements[4 * r + c] = 4 * newR + c;
                            moved = true;
                        }
                        else if (grid[4 * newR + c] == val) {
                            grid[4 * newR + c] = 2 * val;
                            grid[4 * (newR - 1) + c] = 0;
                            fusionned = newR - 1;
                            
                            movements[4 * r + c] = 4 * newR + c;
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
                            
                            movements[4 * r + c] = 4 * r + newC;
                            moved = true;
                        }
                        else if (grid[4 * r + newC] == val) {
                            grid[4 * r + newC] = 2 * val;
                            grid[4 * r + (newC + 1)] = 0;
                            fusionned = newC + 1;
                            
                            movements[4 * r + c] = 4 * r + newC;
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
            let fusionned = 3;

            for (let c = 2; c >= 0; c--) {
                if (grid[4 * r + c] != 0) {
                    let val = grid[4 * r + c];

                    for (let newC = c + 1; newC <= fusionned; newC++) {
                        if (grid[4 * r + newC] == 0) {
                            grid[4 * r + newC] = val;
                            grid[4 * r + (newC - 1)] = 0;
                            
                            movements[4 * r + c] = 4 * r + newC;
                            moved = true;
                        }
                        else if (grid[4 * r + newC] == val) {
                            grid[4 * r + newC] = 2 * val;
                            grid[4 * r + (newC - 1)] = 0;
                            fusionned = newC - 1;
                            
                            movements[4 * r + c] = 4 * r + newC;
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
        updateHeader();

        anim = true;
        animTime = 0;
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

function updateHeader() {
    won = checkIfWon();
    lost = checkIfLost();

    let newHeader = isMobile ? TOUCH_HEADER : INIT_HEADER;
    if (lost) {
        newHeader += isMobile ? LOST_TOUCH_HEADER : LOST_HEADER;
    }
    else if (won) {
        newHeader += WON_HEADER;
    }

    $(header).html(newHeader);
}
