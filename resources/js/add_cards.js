var def_speed = 400;
var projects;
    
function init_cards() {
    projects = $(".project");

    for (let i = 0; i < projects.length; i++) {
        const p = projects[i];
        p.style.visibility = "hidden";
    }

    displayCard(0);
}

function displayCard(i) {
    if (i < projects.length) {
        projects[i].style.visibility = "visible";
        setTimeout(() => displayCard(i + 1), def_speed);
    }
}