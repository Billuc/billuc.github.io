var index;
var articles;
var nbArticles;
var angleRotation;

function init() {
  index = 0;
  articles = document.getElementsByClassName("article");
  nbArticles = articles.length;
  angleRotation = 0;

  makeRotations();
}

function toRight() {
  index = index+1;
  if (index == nbArticles) index = 0;
  angleRotation = angleRotation - 360/nbArticles;

  makeRotations();
}

function toLeft() {
  index = index-1;
  if (index == -1) index = nbArticles-1;
  angleRotation = angleRotation + 360/nbArticles;

  makeRotations();
}

function makeRotations() {
  for (let i = 0; i < articles.length; i++) {
    const element = articles[i];

    if (i == index) {
      element.style.transform = "translate(-50%, -50%) rotateY(" + (angleRotation + i*360/nbArticles) + "deg) scale(1)";
      element.style.zIndex = "1";
      element.style.opacity = "1";
      element.style.pointerEvents = "auto";
    }
    else {
      element.style.transform = "translate(-50%, -50%) rotateY(" + (angleRotation + i*360/nbArticles) + "deg) scale(0.8)";
      element.style.zIndex = "0";
      element.style.opacity = "0.2";
      element.style.pointerEvents = "none";
    }
  }
}