// Exercise 1: Valid Identifiers
let user_Name = "sidra";
console.log(user_Name);

// let number = 123Abc
// console.log(number)

let userEamil = "sidratarnnum@68gmail.com";
console.log(userEamil);
let isemailisright = true;
console.log(true);
let totalgrades = 85;
console.log(totalgrades);
let price1 = "$99.99";
console.log(price1);

let firstName = "sidra";
let lastName = "tarannum";
let fullName = firstName + "" + lastName;
console.log(fullName);

let message = "Hello,Iam sidra";
console.log(message);
let age = 20;
let info = "Sidra is 20 years old";
console.log(info);

let name = "Alice";
let score = 95;
message = `Student name: ${name} | Scored: ${score}`;
console.log(message);

let product = "laptop";
let price = 50000;
let qunatity = 2;
let total = price * qunatity;
let receipt = `Item name : ${product} | Qunatity : ${qunatity} | Total : ${total}`;
console.log(receipt);
// Problem 21: String Builder
let productName = "WireLessMouse";
let productPrice = 29.99;
let instock = true;
let description = `Product: Wireless Mouse | Price: $29.99 | In Stock: true`;

console.log(description);
// Problem 22: Initial Generator
let firstchar = "John";
let middleName = "Robert";
let lastchar = "Smith";
let fullchar = "JohnRobertSmith";
console.log(fullchar.length);

let firstchar1 = "John";
let middleName2 = "Robert";
let lastchar3 = "Smith";

// let join =`${firstchar1[3]} ${middleName2[4]}`
let intinal = `${firstchar1[3]} | ${middleName2[2]} | ${lastchar3[1]}`;
console.log(intinal);

// Loose vs Strict Equality
console.log(5 == 5);
console.log(5 === 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(true == 1);
console.log(true === 1);
console.log(0 == false);
console.log(0 === false);

// Template Literal Practice

let cityName = "Paris";
let temperature = 25;
// Create: "The temperature in Paris is 25 degrees."
let weather = `The temperature in pairs is 25 degrees..!`;
console.log(weather);

let hourOfDay = 14;
let userName = "Bob";
// Create: "Good afternoon, Bob! It's 14:00."
let greeting = `Good afternoon, Bob! It's 14:00`;
console.log(greeting);

// Comparison Operators
console.log(10 > 5);
console.log(3 < 2);
console.log(5 >= 5);
console.log(8 <= 10);
console.log(7 != 7);
console.log(15 > 20);

// String Comparison
console.log("a" > "A");
console.log("b" < "c");
console.log("apple" < "banana");
console.log("Z" < "a");
console.log("10" < "2");

// Practical Challenges
// Problem 18: User Greeting

let userName2 = "Sarah";
let hour = 9; // 9 AM
// Create a greeting: "Good morning, Sarah!"
// Hint: Use template literals
let greeting1 = `Good Morning, ${userName2}!`;
console.log(greeting1);

// Problem 19: Age Checker
let userAge = 16;
let minimumAge = 18;
// Write a comparison to check if user is old enough
let isOldEnough = userAge >= minimumAge;

console.log(isOldEnough); // Should print: false

// Problem 20: Email Validator
let email = "alice@example.com";
// Get the first character
let firstChar = email[0];
console.log(firstChar);

// Check if it's a lowercase letter (between 'a' and 'z')
let isValid = firstChar >= 'a' && firstChar <= 'z';
console.log(isValid);


