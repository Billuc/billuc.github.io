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

	var xslAjax = loadXMLDoc("./resume/" + xslName, true);

	xslAjax.done(function(data1) {
		xsl = data1;

		xsltProcessor.importStylesheet(xsl);

		var xmlAjax = loadXMLDoc("./resume/resumeLucB.xml", true);
		xmlAjax.done(function(data2) {
			xml = data2;

			var newXml = xsltProcessor.transformToDocument(xml);

			var newHead = newXml.head.children;
			var newBody = newXml.body.children;

			var content = document.getElementById("content");
			if (content) {
				content.parentNode.removeChild(content);
			}

			var currentHead = document.head;
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
			}

			//Partie moche ou l'on sort les éléments de newBody pour les mettre dans le *
			// tableau elements que l'on parcourt pour ajouter les elements au body !
			// Pour une raison inconnue, l'ajout direct au body bugue et seuls 3 des 5
			// parties sont ajoutées !
			goThroughArrayAndAddTo(newBody, $("body"));
			goThroughArrayAndAddTo(newHead, $("head"));
		});
	})
	.fail(function(data2) {
		alert("Retrieving the xml failed !");
		console.log(data2);
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

function makeCollapsible() {
	var coll = document.getElementsByClassName("collapsible");
	var i;

	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
			this.classList.toggle("active");
			var content = this.nextElementSibling;

			if (content.style.maxHeight){
				content.style.maxHeight = null;
			} else {
				content.style.maxHeight = content.scrollHeight + "px";
			}
		});
	}
}
