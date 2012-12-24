var querystring = require("querystring");


function start(response, request, storage) {
  console.log("Request handler 'start' was called.");

var data = storage.get("a_key");

  var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" '+
    'content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
	'<h3> START</h3>' +
	data + 
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}
exports.start = start;