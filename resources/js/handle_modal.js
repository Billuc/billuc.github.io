function init_modal() {

    var modal = $(".modal")[0];
    var close = $(".close")[0];
    var projects = $(".project");

    for (let i = 0; i < projects.length; i++) {
      const p = projects[i];
      p.onclick = function() {
        modal.style.display = "block";
        var mHead = $(".modal-header")[0];
        var mBody = $(".modal-body")[0];
        var mTitle = $(mHead).find("p")[0];
        var mText = $(mBody).find("p")[0];
        var mImg =  $(mBody).find("img")[0];
        var mLink = $(mBody).find("a")[0];

        var pLink = $(p).find(".title")[0];
        var pText = $(p).find(".desc")[0];
        var pImg =  $(p).find("img")[0];

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
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
}