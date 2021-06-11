function loadXMLDoc(xmlUrl, pAsync) {
	return $.ajax({
		url: xmlUrl,
		dataType: 'xml',
		method: "GET",
		async: pAsync
	})
}

async function createResume(xslName) {
	const xsltProcessor = new XSLTProcessor();

	try {
		let xsl = await loadXMLDoc(xslName, true);
		xsltProcessor.importStylesheet(xsl);

		let xml = await loadXMLDoc("resumeLucB.xml", true);
		let newXml = xsltProcessor.transformToDocument(xml);

		$("#cvstyle").remove();
		$("head").append($("#cvstyle", newXml));
		$("#content").replaceWith($("#content", newXml));

		setLangEn();
	}
	catch (e) {
		console.error("Retrieving the xml failed !");
		window.location.replace("./CV_Luc_Billaud.pdf");
	}
}

function expand_or_collapse(idSelf, idContent) {
	var self = document.getElementById(idSelf);
	self.classList.toggle("active");

	var content = document.getElementById(idContent);

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
	const collapsibles = $(".collapsible");

	for (let collapse of collapsibles) {
		if (collapse.style.maxHeight) 	collapse.style.maxHeight = null;
		collapse.style.visibility = "hidden";
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
	const fr = $(".fr");
	const en = $(".en");

	for (let french_elt of fr) {
		french_elt.style.display = "none";
	}

	for (let english_elt of en) {
		english_elt.style.display = "inline";
	}

	$('#eng-flag').addClass("selected");
	$('#fra-flag').removeClass("selected");

	collapseAll();
}

function setLangFr() {
	const fr = $(".fr");
	const en = $(".en");

	for (let french_elt of fr) {
		french_elt.style.display = "inline";
	}

	for (let english_elt of en) {
		english_elt.style.display = "none";
	}

	$('#fra-flag').addClass("selected");
	$('#eng-flag').removeClass("selected");

	collapseAll();
}
