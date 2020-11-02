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

			var newHead = newXml.head.children;
			var newBody = newXml.body.children;

			var content = document.getElementById("content");
			if (content) {
				content.parentNode.removeChild(content);
			}

			/*var currentHead = document.head;
			if (currentHead) {
				var headElements = currentHead.children;
				if (headElements) {
					var i, elt;
					for (i = 0; i < headElements.length; i++) {
						elt = headElements[i];
						if (elt.nodeName != "SCRIPT") {
							elt.parentNode.removeChild(elt);
							i--;
						}
					}
				}
			}*/

			//Partie moche ou l'on sort les éléments de newBody pour les mettre dans le *
			// tableau elements que l'on parcourt pour ajouter les elements au body !
			// Pour une raison inconnue, l'ajout direct au body bugue et seuls 3 des 5
			// parties sont ajoutées !
			goThroughArrayAndAddTo(newBody, $("#content"));
			//goThroughArrayAndAddTo(newHead, $("head"));

			if (document.getElementById('education_button')) {
				expand_or_collapse('education_button', 'education_elements');
			}
		});
	})
	.fail(function(data2) {
		console.log("Retrieving the xml failed !");
		console.log(data2);
		window.location.replace("./MyResume.pdf");
	});
}

function goThroughArrayAndAddTo(pArray, pAddTo) {
	var elements = [];

	for (var i = 0; i < pArray.length; i++) {
		var element = pArray[i];
		elements.push(element);
	}

	elements.forEach(function(item, index, array) {
		pAddTo.append(item);
	});
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
	var collapsibles = document.getElementsByClassName("collapsible");

	for (var i = 0; i < collapsibles.length; i++) {
		if (collapsibles[i].style.maxHeight)
			collapsibles[i].style.maxHeight = null;
		collapsibles[i].style.visibility = "hidden";
	}
}

function setLangEn() {
	var fr = document.getElementsByClassName("fr");
	var en = document.getElementsByClassName("en");

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
}

function setLangFr() {
	var fr = document.getElementsByClassName("fr");
	var en = document.getElementsByClassName("en");

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
}
