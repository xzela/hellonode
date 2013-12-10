var http = require('http');

function start() {
	function onRequest(request, response) {
		console.log("Request received");
		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write('hello world');
		response.end();
	}

	http.createServer(onRequest).listen(3000);
	console.log("Server has Started.");
}

exports.start = start;
