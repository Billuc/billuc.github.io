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
    var mGithub = $(mBody).find(".fa-git")[0];
    var mDemo = $(mBody).find(".toDemo")[0];

    var pLink = $(one_card).find(".title")[0];
    var pText = $(one_card).find(".desc")[0];
    var pImg =  $(one_card).find("img")[0];
    var pScript = $(one_card).find(".script-name")[0];

    $(mTitle).text($(pLink).text());
    $(mText).text($(pText).text());
    $(mImg).replaceWith($(pImg).clone());

    var github_link = $(pLink).attr("href");
    $(mGithub).attr("href", github_link);

    var scriptName = $(pScript).text();
    if (scriptName) {
      $(mDemo).attr("hidden", false);
      $(mDemo).attr("href", encodeURI("/projets/resources/project.html?name=" + $(pLink).text() + "&script=" + scriptName	));
    }
    else {
      $(mDemo).attr("hidden", true);
    }
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