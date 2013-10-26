var url = require("url")
function route(request, response) {
	var pathname = url.parse(request.url).pathname;
	console.log("about to route a request for: " + pathname);
	var query = url.parse(request.url).query;
	console.log("got the following query: " + query);
	return query || 'none';
}

// expose to the outside world
exports.route = route;