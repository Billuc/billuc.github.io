const modal = $(".modal-container")[0];
const close = $(".close")[0];
const cards = $(".card.modal");

for (let one_card of cards) {
  one_card.onclick = function() {
    modal.style.display = "block";
    var mHead = $(".modal-header")[0];
    var mBody = $(".modal-body")[0];
    var mTitle = $(mHead).find("p")[0];
    var mText = $(mBody).find("p")[0];
    var mImg =  $(mBody).find("img")[0];
    var mLink = $(mBody).find("a")[0];

    var pLink = $(one_card).find(".title")[0];
    var pText = $(one_card).find(".desc")[0];
    var pImg =  $(one_card).find("img")[0];

    $(mTitle).text($(pLink).text());
    $(mText).text($(pText).text());
    $(mImg).replaceWith($(pImg).clone());

    var link_in_a = $(pLink).attr("href");
    var newLink = $(pLink).clone();
    $(newLink).text(link_in_a);
    $(mLink).replaceWith(newLink);
  }
}

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
  const modal_content = $(".modal-content")[0];
  modal_content.classList.add("onclose");

  setTimeout(() => {
    modal.style.display = "none";
    modal_content.classList.remove("onclose");
  }, 400);
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    const modal_content = $(".modal-content")[0];
    modal_content.classList.add("onclose");
  
    setTimeout(() => {
      modal.style.display = "none";
      modal_content.classList.remove("onclose");
    }, 400);
  }
}