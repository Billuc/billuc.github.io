var def_speed = 130;

function typeWriter(elt, i, speed = def_speed) {
    txt = elt.getAttribute("data");

    if (i <= txt.length) {
        elt.innerHTML = txt.slice(0 , i + 1);
        setTimeout(() => typeWriter(elt, i + 1, speed), speed);
    }
}

function typeElement(element) {
    var attr = element.setAttribute("data", element.innerHTML);
    
    typeWriter(element, 0, 2 * 1000 / element.innerHTML.length);
}