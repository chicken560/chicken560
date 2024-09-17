let email = "user@example.com";
let isValidEmail;
if (email == email.indexOf("@", ".")) {
	isValidEmail = true;
} else {
	isValidEmail = false;
}
console.log("Is the email valid? " + isValidEmail);

let enteredDate = "2021-04-30";
let formattedDate = enteredDate.split("-");
formattedDate.shift("2021");
formattedDate.unshift();
console.log(formattedDate);
