const DEFAULT_FREQUENCY = 130;

function whenLoaded() {
    var cursor_elts = document.getElementsByClassName("cursor-anim");
    for (var elt of cursor_elts) {
        typeElement(elt);
    }
}

function typeWriter(cursor_element, current_length, frequency = DEFAULT_FREQUENCY) {
    var element_text = cursor_element.getAttribute("data");

    if (current_length <= element_text.length) {
        cursor_element.innerHTML = element_text.slice(0 , current_length + 1);
        setTimeout(() => typeWriter(cursor_element, current_length + 1, frequency), frequency);
    }
    else {
        cursor_element.removeAttribute("data");
    }
}

function typeElement(element) {
    element.setAttribute("data", element.innerHTML);
    
    typeWriter(element, 0, 2 * 1000 / element.innerHTML.length);
}