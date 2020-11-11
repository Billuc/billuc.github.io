var page_number = 0;

function extract() {
    var frame1Obj = document.getElementById("easyXDM_default5001_provider");
    var frame1Content = frame1Obj.contentWindow.document.body.innerHTML;

    var frame2Obj = frame1Content.getElementById("epub-container");
    var frame2Content = frame2Obj.contentWindow.document.body.innerHTML;


    var image = frame2Content.getElementById("pbk-page");
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
script.src = 'http://127.0.0.1:8887/extract-script.js';
document.head.appendChild(script);
*/