const carousel = $(".carousel")[0];
const carousel_elements = $(carousel).find(".carousel-element");
let index = -1;

$("#left").on('click', toLeft);
$("#right").on('click', toRight);



const dots = carousel_elements.map((i) => {
  return $(document.createElement('span'))
  .addClass("dot")
  .click(() => goTo(i));
})

const dots_container = $(document.createElement('div'));
dots_container.addClass("dots")

for (const d of dots) {
  d.appendTo(dots_container);
}

dots_container.appendTo(carousel);



for (let i = 0; i < carousel_elements.length; i++) {
  if (carousel_elements[i].classList.contains("active")) {
    if (index == -1) index = i;
    else carousel_elements[i].classList.remove("active");
  }
}

dots[index].addClass("current");


function toRight() {
  carousel_elements[index].classList.remove("active");
  carousel_elements[index].classList.remove("from-left");
  carousel_elements[index].classList.remove("from-right");
  dots[index].removeClass("current");

  index = (index + 1 == carousel_elements.length) ? 0 : index + 1;
  // pareil que index = (index + 1) % carousel_elements.length;

  carousel_elements[index].classList.add("active");
  carousel_elements[index].classList.add("from-right");
  dots[index].addClass("current");
}

function toLeft() {
  carousel_elements[index].classList.remove("active");
  carousel_elements[index].classList.remove("from-left");
  carousel_elements[index].classList.remove("from-right");
  dots[index].removeClass("current");

  index = (index - 1 == -1) ? carousel_elements.length - 1 : index - 1;
  // PAS pareil que index = (index - 1) % carousel_elements.length;
  
  carousel_elements[index].classList.add("active");
  carousel_elements[index].classList.add("from-left");
  dots[index].addClass("current");
}

function goTo(newIndex) {
  carousel_elements[index].classList.remove("active");
  carousel_elements[index].classList.remove("from-left");
  carousel_elements[index].classList.remove("from-right");
  dots[index].removeClass("current");

  carousel_elements[newIndex].classList.add("active");
  dots[newIndex].addClass("current");

  if (newIndex < index) {
    carousel_elements[newIndex].classList.add("from-left");
  }
  else if (newIndex > index) {
    carousel_elements[newIndex].classList.add("from-right");
  }

  index = newIndex;
}