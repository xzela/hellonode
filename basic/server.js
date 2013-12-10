var http = require('http');
function onRequest(request, response) {
	console.log("Request received");
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('hello world');
	response.end();
}
var server = http.createServer(onRequest);
server.listen(3000);

console.log("Server has Started.");