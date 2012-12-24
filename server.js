var http = require("http");
var url = require("url");

var PORT = 8867;

function start(route, handle, storage) {
	
	function onRequest(request, response) {
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		route(handle, pathname, response, request, storage);
	}

	http.createServer(onRequest).listen(PORT);
	console.log("Server has started.");
}

exports.start = start;
