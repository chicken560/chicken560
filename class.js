const prompt = require("prompt-sync")();
class BankAccount {
	constructor(accountNumber, balance) {
		this.accountNumber = accountNumber;
		this.balance = balance;
		console.log(`Account number: ${accountNumber}`);
		console.log(`Your balance: $${this.balance}`);
	}
	deposit(amount) {
		this.balance += amount;
		console.log(`You have deposited: $${amount}`);
	}
	withdraw(amount) {
		if (amount <= this.balance) {
			this.balance -= amount;
			console.log(`You have withdrawn: $${amount}`);
		} else {
			console.log(`you have withdrawn: $${amount}`);
			console.log(`You don't have enough money to withdraw`);
		}
	}
	displayBalance() {
		console.log(`You have $${this.balance} in the bank.`);
	}
}
const account = new BankAccount("B-davis", 1500);
account.deposit(900);
account.withdraw(2000);
account.displayBalance();

class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}
class Cart {
	constructor() {
		this.products = [];
	}

	addProduct(product) {
		this.products.push(product);
		console.log(`${product.name} added to cart.`);
	}

	getTotal() {
		return this.products.reduce(
			(total, product) => total + product.price,
			0,
		);
	}
}
const apple = new Product("Apple", 2.8);
const bread = new Product("Bread", 5);
const cart = new Cart();
cart.addProduct(apple);
cart.addProduct(bread);
console.log(`Total price: ${cart.getTotal()}`);
