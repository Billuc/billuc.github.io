var def_speed = 400;
var projects;
    
function init_cards() {
    projects = $(".project");

    for (let i = 0; i < projects.length; i++) {
        const p = projects[i];
        p.style.display = "none";
    }

    displayCard(0);
}

function displayCard(i) {
    if (i < projects.length) {
        projects[i].style.display = "flex";
        setTimeout(() => displayCard(i + 1), def_speed);
    }
}