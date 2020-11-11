var page_number = 0;

function extract() {
    var image = document.getElementById("pbk-page");
    var url = image.getAttribute("src");

    console.log(url);

    download("Page"+page_number+".jpeg", url);
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:image/jpeg;' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

function goToNext() {

}

extract();

/*
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://billuc.github.io/script.js';
document.head.appendChild(script);
*/