let todos = ["Buy Milk", "Attend meeting", "Read a book"];
todos.push("Learn JavaScript");
todos.shift();
todos.shift();
todos.unshift("Buy Milk");
todos.shift();
todos.unshift("Buy OJ");
todos.forEach((element, index) => {
	console.log(`${index + 1}: ${element}`);
});

let numbers = [1, 23, 42, 56, 33, 17, 8, 90];

console.log(numbers);
