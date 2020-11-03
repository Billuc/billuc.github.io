var def_speed = 400;
var projects;
    
function init_cards() {
    projects = $(".project");

    for (let i = 0; i < projects.length; i++) {
        const p = projects[i];
        p.style.opacity = "0";
        p.style.marginTop = "-100px";
        p.style.marginBottom = "100px";
    }

    displayCard(0);
}

function displayCard(i) {
    if (i < projects.length) {
        console.log(projects[i].style);

        projects[i].style.opacity = "1";
        projects[i].style.marginTop = "10px";
        projects[i].style.marginBottom = "0px";

        console.log(projects[i].style);
        
        setTimeout(() => displayCard(i + 1), def_speed);
    }
}