const carousel = $(".carousel")[0];
const carousel_elements = $(carousel).find(".carousel-element");
let index = -1;

$("#left").on('click', toLeft);
$("#right").on('click', toRight);

// TODO : ajouter les dots

for (let i = 0; i < carousel_elements.length; i++) {
  if (carousel_elements[i].classList.contains("active")) {
    if (index == -1) index = i;
    else carousel_elements[i].classList.remove("active");
  }
}

function toRight() {
  carousel_elements[index].classList.remove("active");
  carousel_elements[index].classList.remove("from-left");
  carousel_elements[index].classList.remove("from-right");

  index = (index + 1 == carousel_elements.length) ? 0 : index + 1;
  // pareil que index = (index + 1) % carousel_elements.length;

  carousel_elements[index].classList.add("active");
  carousel_elements[index].classList.add("from-left");
}

function toLeft() {
  carousel_elements[index].classList.remove("active");
  carousel_elements[index].classList.remove("from-left");
  carousel_elements[index].classList.remove("from-right");

  index = (index - 1 == -1) ? carousel_elements.length - 1 : index - 1;
  // PAS pareil que index = (index - 1) % carousel_elements.length;
  
  carousel_elements[index].classList.add("active");
  carousel_elements[index].classList.add("from-right");
}