
function orderPizza(name, cookTime) {
	console.log("user  is ordering a " + name + " pizza");
	return { name: name, time: cookTime, cooked: false };
}

function putPizzaInOven(pizza, callback) {
	if (pizza) {
		console.log("worker is placing a " + pizza.name + " pizza in the oven");
		return callback(pizza);
	} else {
		console.log("no more pizzas, closing oven")
	}
}

function cookPizza(pizza, callback) {
	console.log("cooking " + pizza.name + " pizza for " + pizza.time + " seconds");
	setTimeout(function() {
		console.log("Done cooking " + pizza.name + " pizza");
		putPizzaInOven(pizzas.shift(), cookPizza);
	}, pizza.time)
}

function order() {
	console.log("user is placing an order");
	pizzas = [orderPizza("cheese", 2000), orderPizza("meat", 3000)];
	putPizzaInOven(pizzas.shift(), cookPizza);
}

order();