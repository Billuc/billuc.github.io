function loadXMLDoc(xmlUrl, pAsync) {
	return $.ajax({
		url: xmlUrl,
		dataType: 'xml',
		method: "GET",
		async: pAsync
	})
}

function createResume(xslName) {
	var xsltProcessor = new XSLTProcessor();
	var xsl;
	var xml;

	var xslAjax = loadXMLDoc("./" + xslName, true);

	xslAjax.done(function(data1) {
		xsl = data1;

		xsltProcessor.importStylesheet(xsl);

		var xmlAjax = loadXMLDoc("./resumeLucB.xml", true);
		xmlAjax.done(function(data2) {
			xml = data2;
			var newXml = xsltProcessor.transformToDocument(xml);

			$("#cvstyle").remove();
			$("head").append($("#cvstyle", newXml));
			$("#content").replaceWith($("#content", newXml));

			setLangEn();

			//if (document.getElementById('education_button')) {
			if ($('#education_button')) {
				expand_or_collapse('education_button', 'education_elements');
			}
		});
	})
	.fail(function(data3) {
		console.log("Retrieving the xml failed !");
		console.log(data3);
		window.location.replace("./MyResume.pdf");
	});
}

function expand_or_collapse(idSelf, idContent) {
	//var self = document.getElementById(idSelf);
	var self = $("#" + idSelf);
	self.classList.toggle("active");

	//var content = document.getElementById(idContent);
	var content = $("#" + idContent);

	if (content.style.maxHeight){
		collapseAll();
		content.style.maxHeight = null;
		content.style.visibility = "hidden";
	} else {
		collapseAll();
		content.style.maxHeight = content.scrollHeight + "px";
		content.style.visibility = "visible";
	}
}

function collapseAll() {
	//var collapsibles = document.getElementsByClassName("collapsible");
	var collapsibles = $(".collapsible");

	for (var i = 0; i < collapsibles.length; i++) {
		if (collapsibles[i].style.maxHeight)
			collapsibles[i].style.maxHeight = null;
		collapsibles[i].style.visibility = "hidden";
	}
}

function createRegularResume() {
	createResume('HTMLResume.xsl');
	
	$('#regular-cv').addClass("selected");
	$('#column-cv').removeClass("selected");
}

function createColumnResume() {
	createResume('HTMLResumeCols.xsl');
	
	$('#column-cv').addClass("selected");
	$('#regular-cv').removeClass("selected");
}

function setLangEn() {
	//var fr = document.getElementsByClassName("fr");
	//var en = document.getElementsByClassName("en");
	var fr = $(".fr");
	var en = $(".en");

	for (let f = 0; f < fr.length; f++) {
		const element = fr[f];
		element.style.display = "none";
	}

	for (let e = 0; e < en.length; e++) {
		const element = en[e];
		element.style.display = "inline";
	}

	$('#eng-flag').addClass("selected");
	$('#fra-flag').removeClass("selected");

	collapseAll();
}

function setLangFr() {
	//var fr = document.getElementsByClassName("fr");
	//var en = document.getElementsByClassName("en");
	var fr = $(".fr");
	var en = $(".en");

	for (let e = 0; e < en.length; e++) {
		const element = en[e];
		element.style.display = "none";
	}

	for (let f = 0; f < fr.length; f++) {
		const element = fr[f];
		element.style.display = "inline";
	}

	$('#fra-flag').addClass("selected");
	$('#eng-flag').removeClass("selected");

	collapseAll();
}
