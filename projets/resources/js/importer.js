let queryParamDict = {};
const query = window.location.search.substring(1);

const vars = query.split("&");

for (var arg of vars) {
    var pair = arg.split("=");
    queryParamDict[pair[0]] = queryParamDict[pair[0]] || pair[1];
}

if (queryParamDict["script"]) {
    const scriptName = queryParamDict["script"];
    var newScriptNode = $(document.createElement('script'))
        .attr("src", "./js/" + scriptName);
    $("head").append(newScriptNode);
}

$("title").append(queryParamDict["name"] || "Demo");