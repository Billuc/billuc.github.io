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
				content.innerHTML = "";
			}

			var currentHead = document.head;
			if (currentHead) {
				var headElements = currentHead.children;
				if (headElements) {
					for (var elt in headElements) {
						console.log(elt);
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
