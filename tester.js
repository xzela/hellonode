
// function wait_two_seconds(callback) {
// 	console.log("... waiting two seconds");
// 	setTimeout(function() {
// 		callback();
// 	}, 2000);
// }

// function wait_one_second(callback) {
// 	console.log("... waiting one second");
// 	setTimeout(function() {
// 		callback();
// 	}, 1000);
// }

function display() {
	console.log("world");
}

var foo = function() {
	//wait_two_seconds(wait_one_second(display));
	setTimeout(function() {
		console.log("world");
	}, 2000);
}
foo();
console.log("hello");
console.log("hello2");

