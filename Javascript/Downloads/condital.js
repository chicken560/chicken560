let prompt = require("prompt-sync")();

const username = "user123";
const password = "pass123";
let enteredUsername = prompt("Username ");
let enteredPassword = prompt("Password ");
if (enteredUsername == username) {
	if (enteredPassword == password) {
		console.log("Login successful");
	} else {
		console.log("Incorrect password");
	}
} else {
	console.log("Username not found");
}

const income = 80000;
let taxRate;

if (income <= 10000) {
	taxRate = "0%";
} else if (income <= 30000) {
	taxRate = "10%";
} else if (income <= 70000) {
	taxRate = "20%";
} else if (income > 70000) {
	taxRate = "30%";
}
let calculated_tax = taxRate;
console.log("Tax to be paid: ", calculated_tax);

const favoriteSeason = "Spring";

switch (favoriteSeason) {
	case "Spring":
		console.log("it is cool during the day");
		break;
	case "Winter":
		console.log("It is very cold outside");
		break;
	case "Fall":
		console.log("It has so many different colors outside");
		break;
	default:
		console.log("It is very hot outside today");
		break;
}

const orderAmount = 120;

const discount = orderAmount > 100 ? "10%" : "5%";
const finalAmount = discount * orderAmount;
console.log("Final amount after discount: $<final_amount>");
