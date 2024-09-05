console.log("Theater Seating Arrangement:");
for (let rows = 1; rows <= 5; rows++) {
	let seatInRow;
	for (let seat = 1; seat <= 10; seat++) {
		seatInRow = `${rows}-${seat}`;
	}
	console.log(seatInRow);
}

console.log("Simple Interest Calculation:");
let principal = 1000;
let rate = 5;
let years = 1;
while (years <= 5) {
	let interest = (principal * rate * years) / 100;
	console.log(`Year ${years}:${interest}`);
	years++;
}

console.log("Prime Numbers between 2 and 30:");
for (let num = 2; num <= 30; num++) {
	let isPrime = true;
	for (let factor = 2; factor < num / 2; factor++) {
		if (num % factor) {
			isPrime = false;
			break;
		}
	}
	if (num % 2) {
		if (num % 3) {
			console.log(num);
		}
	}
}
