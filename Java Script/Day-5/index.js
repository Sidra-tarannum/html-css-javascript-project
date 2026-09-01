// class notes
console.log("Hello world!");
// for loop
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// 10-1
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
// while loop
// let UserPassword = prompt("Enter your password");
// let counter = 0;
// while (UserPassword !== "sidra123@") {
//   console.log("Wrong Password");
//   UserPassword = prompt("Enter Again");
// }
// console.log("You Got It 😊");

let counter1 = 1;
while (counter1 <= 5) {
  console.log("Sidra");
  counter1++;
}
// let favCar = "Bmw";
// let UserInput = prompt("Enter your fav car");
// while (UserInput !== favCar) {
//   console.log("You Are Wrong");
//   UserInput("Guess Again");
// }
// if (UserInput == favCar) {
//   console.log("Now you Guess it Right");
// }
// Nested loop
for (let i = 1; i <= 5; i++) {
  console.log(`-----${i}----`);
  for (let i = 1; i <= 10; i++) {
    console.log(i, i);
  }
}

// Problem 1: Print Numbers (3 point)
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Problem 2: Print Even Numbers (3 points)
for (let i = 2; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
// Problem 4: Multiplication Table (3 points)
let n = 5;
for (let i = 1; i <= 10; i++) {
  console.log(n + "*" + i + "=" + n * i);
}
// Part B: Nested Loops
// Problem 6: Number Grid
for (let row = 1; row <= 4; row++) {
  let line = "";
  for (let col = 1; col <= 4; col++) {
    line += `(${row},${col}) `;
  }
  console.log(line);
}
let cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];
for (let i = 0; i < cities.length; i++) {
  console.log(i + ":" + cities[i]);
}
// Reverse an Array
// [10, 20, 30, 40, 50];
for (let i = 50; i >= 10; i -= 10) {
  console.log(i);
}
// Problem 5: Sum of First N Numbers
let sum = 0;
for (let i = 0; i <= 20; i++) {
  sum += i;
}
console.log("Sum:", sum);

// Problem 14: Sum of Array
let numbers = [10, 25, 30, 45, 20];
let sum1 = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Sum:", sum);

// Problem 15: Find Maximum in Array
let scores = [78, 92, 85, 99, 88, 76];
let max = scores[0];
for (let i = 0; i < scores.length; i++) {
  if (scores[i] > max) {
    max = scores[i];
  }
}
console.log("Maximum", max);

// Problem 16: Nested Array Iteration
let teams = [
["Alice", "Bob"],
["Charlie", "David"],
["Eve", "Frank"]
];
for(let i=0; i<teams.length;i++){
  for(let j=0; j<teams.length;j++){
    console.log(teams[i][j]);
  }
}
// Part F: for...of Loop
// Problem 17: Basic for...of
let fruits = ["Apple", "Banana", "Orange", "Mango"];
for(let fruit of fruits){
  console.log(fruit);
}
  //  Problem 18: for...of with String
  let word = "LOOP";
  for(let letter of word){
    console.log(letter);
  }
  // Problem 19: Count Vowels with for...of
  let sentence = "JavaScript is awesome";
  let count = 0;
 for(let character of sentence.toLocaleLowerCase()){
  if ("aeiou".includes(character)){
    count++
  }
 }
 console.log("Numbers of vowels:-", count);
   
// class code
let favCar = "BMW"
let UserInput = prompt("Enter my fav car")
let attempts = 0
while (UserInput!==favCar && UserInput!=="quit") {
  if(attempts<5){
    UserInput=prompt("Enter Your Guess Again");
    attempts++;
  }else{
    break
  }
  
}
if (UserInput===favCar){
  console.log("WELL DONE🥰");
}else{
  console.log("You Ran Out Of Attempts");
}