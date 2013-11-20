
function wait_two_seconds(callback) {
	setTimeout(function() {
		callback();
	}, 2000);
}

function wait_one_second(callback) {
	setTimeout(function() {
		callback();
	}, 1000);
}

function display(result) {
	console.log(result);
}

var foo = function (callback) {
	setTimeout(function() {
		callback("world");
	}, 1000);
}

foo(display)
console.log("hello");
