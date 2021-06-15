const DELAY = 300;
const delay = ms => new Promise(res => setTimeout(res, ms));

function displayCard(card) {
    card.style.opacity = "1";
    card.style.marginTop = "10px";
    card.style.marginBottom = "0px";

    setTimeout(() => {
        card.style.cursor = "pointer";
    }, 800);
}

async function doAnim() {
    const cards = $(".card.anim");

    for (let card of cards) {
        await delay(DELAY);
        displayCard(card);
    }
}

doAnim();