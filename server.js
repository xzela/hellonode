var http = require('http');
var fs = require('fs');
var host = "127.0.0.1";
var port = 1337;
var server = http.createServer(function(request, response){
	console.log("Received request: " + request.url);
	fs.readFile('.' + request.url, function(error, data){
		if (error) {
			response.writeHead(404, {'Content-type': 'text/plain'});
			response.end("Page not Found");
		}
		response.writeHead(200, {'Content-type': 'text/plain'});
		response.end(data);

	});
});

server.listen(port, host, function() {
	console.log("listening on: " + host + ":" + port);
})