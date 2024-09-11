function celsiusToFahrenheit(celsius) {
	let Fahrenheit = (celsius * 9) / 5 + 32;
	console.log(Fahrenheit);
}
celsiusToFahrenheit(20);

function fahrenheitToCelsius(fahrenheit) {
	let Celsius = ((fahrenheit - 32) * 5) / 9;
	console.log(Celsius);
}
fahrenheitToCelsius(68);

function isPrime(num) {
	if (num % 2) {
		console.log(true);
	} else {
		console.log(false);
	}
}
isPrime(17);

function printMultiplicationTable(number, limit) {
	for (let i = 1; i <= limit; i++) {
		let result = number * i;
		let Multiplication = number + " x " + i + " = " + result;
		console.log(Multiplication);
	}
}
printMultiplicationTable(7, 10);
