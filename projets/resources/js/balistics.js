let header = $("#header").addClass("black-fg");
const INIT_HEADER = "<b>Balistics</b>";
const WON_HEADER = "<br/>You touched it !";
const LOST_HEADER = "<br/>Failed :(";
const DESKTOP_HEADER = "<br/> Press Space to play"
const TOUCH_HEADER = "<br/> Double tap to play";

const canvas = $("#demo-canvas")[0];
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const cubeSize = 50;
const gravity = 10;

let cubePos;
let lost, won;
let oldPos, newPos, timePrevFrame, timeElapsed, anim;
let angle, angleFixed, angleIncrement;
let power, powerFixed, powerIncrement;

document.addEventListener('keydown', handleKey);
let mobile = new MobileHandler();
mobile.setTargets(canvas);
mobile.addDoubleTapListener(play);

init();
window.requestAnimationFrame(drawCanvas);

function init() {
    lost = false;
    won = false;
    
    updateHeader();

    oldPos = [0, 0];
    newPos = [0, 0];
    timeElapsed = 0;
    anim = false;

    angle = 0;
    angleFixed = false;
    angleIncrement = 1;

    power = 75;
    powerFixed = false;
    powerIncrement = 1.5;

    cubePos = (1 - Math.random() * 0.5) * width;
}

function drawCanvas() {
    if (!(angleFixed && powerFixed)) {
        // Clearing the canvas
        ctx.clearRect(0, 0, width, height);
        ctx.save();
    
        ctx.fillStyle = "#00FF00";
        ctx.fillRect(
            cubePos - cubeSize,
            height - cubeSize,
            cubeSize,
            cubeSize
        );
    
        ctx.beginPath();
        ctx.save();
        
        ctx.strokeStyle = "#FF0000";
        ctx.lineWidth = 2;
    
        ctx.translate(0, height);
        ctx.moveTo(0, 0);
        ctx.lineTo(
            power * Math.cos(angle * Math.PI / 180),
            -power * Math.sin(angle * Math.PI / 180)
        );
    
        ctx.stroke();
        ctx.restore();
    
        if (!angleFixed) {
            angle += angleIncrement;
        }
        else if (!powerFixed) {
            power += powerIncrement;
        }
        
        if (angle <= 0 || angle >= 90) {
            angleIncrement *= -1;
        }
        if (power <= 25 || power >= 125) {
            powerIncrement *= -1;
        }

        ctx.restore();
    }
    else if (anim) {
        let timeNow = new Date().getTime()
        let delta = timeNow - timePrevFrame;
        calcNewPos(delta);

        console.log(newPos);

        ctx.beginPath();
        ctx.save();
        
        ctx.strokeStyle = "#0000FF";
        ctx.lineWidth = 2;
    
        ctx.moveTo(oldPos[0], height - oldPos[1]);
        ctx.lineTo(newPos[0], height - newPos[1]);
    
        ctx.stroke();
        ctx.restore();

        timePrevFrame = timeNow;
        oldPos[0] = newPos[0];
        oldPos[1] = newPos[1];

        if (detectCollision()) anim = false;
    }

    // ------------------ Next Frame -------------------
    window.requestAnimationFrame(drawCanvas);
}

function handleKey(keyEvent) {
    if (anim) return;

    if (keyEvent.keyCode == 32) play();
}

function play() {
    if (!angleFixed) {
        angleFixed = true;
    }
    else if (!powerFixed) {
        powerFixed = true;
        anim = true;
        timePrevFrame = new Date().getTime();
    }
    else {
        init();
    }
}

function calcNewPos(delta) {
    timeElapsed += 2 * delta / 1000; // *2 to make it go faster

    newPos[0] = power * Math.cos(angle * Math.PI / 180) * timeElapsed;
    newPos[1] = - gravity * timeElapsed * timeElapsed + power * Math.sin(angle * Math.PI / 180) * timeElapsed;
}

function detectCollision() {
    if (oldPos[0] >= width || oldPos[1] <= 0) {
        lost = true;
        updateHeader();
        return true;
    }
    else {
        if (
            oldPos[0] >= cubePos - cubeSize && 
            oldPos[0] <= cubePos &&
            oldPos[1] >= 0 &&
            oldPos[1] <= cubeSize
        ) {
            won = true;
            updateHeader();
            return true;
        }
        else {
            return false;
        }
    }
}

function updateHeader() {
    let isMobileDevice = isMobile();
    let headerText = INIT_HEADER;

    if (lost) {
        headerText += LOST_HEADER;
    }
    else if (won) {
        headerText += WON_HEADER;
    }

    headerText += isMobileDevice ? TOUCH_HEADER : DESKTOP_HEADER;

    $(header).html(headerText);
}
