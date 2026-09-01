// console.log("Hello world");

let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let total = dice1 + dice2;
console.log("Dice 1:", dice1);
console.log("Dice2:", dice2);
console.log("Total:", total);

// Example 1: Simple student object
let student = {
  name: "Alice",
  age: 20,
  grade: "A",
};
console.log(student);

// Example 2: Product object
let product = {
  title: "Laptop",
  price: 45000,
  inStock: true,
};
console.log(product.title);  

// Example 3: Geographic location
let city = {
  latitude: "28.7041° N",
  longitude: "77.1025° E",
  city: "Delhi",
};
console.log(city);

// Example 4: Book object
let book = {
  title: "JavaScript Guide",
  author: "John Doe",
  pages: 350,
  published: 2024,
};
book.pages = 200;
console.log(book.author, book.pages);
// book.pages = 200
// console.log(book.pages);
// Example 5: Social media post
let post = {
  username: "coder_dev",
  content: "Learning JavaScript!",
  likes: 150,
  comments: 23,
};
console.log(post);
// 2. Accessing Object Properties
// Example 1: Using dot notation
let student2 = { name: "Alex", age: 21, city: "Seattle" };
console.log(student2.name); // "Alex"
console.log(student2.age); // 21

// Example 2: Using bracket notation
console.log(student["city"]); // "Seattle"
console.log(student["name"]); // "Alex"

// Example 3: When to use bracket notation (spaces in key)
let person = { "first name": "John", "last name": "Doe" };
console.log(person["first name"]); // "John"
// Example 4: Using variables with bracket notation
let key = "age";
console.log(student[key]); // 21
// Example 5: Mixed access
let car = { brand: "Toyota", model: "Camry", year: 2024 };
console.log(car.brand); // "Toyota"
console.log(car["model"]); // "Camry"
// 3. Modifying Objects (Add, Update, Delete)
// Example 1: Updating existing properties
let student3 = { name: "Alex", age: 21, city: "Seattle" };
student3.age = 22;
student3.city = "Boston";
console.log(student3); // { name: "Alex", age: 22, city: "Boston" }
// Example 2: Adding new properties
student3.grade = "A+";
student3.major = "Computer Science";
console.log(student3);
// { name: "Alex", age: 22, city: "Boston", grade: "A+", major: "Computer Science" }
// Example 3: Deleting properties
delete student3.city;
console.log(student3); // { name: "Alex", age: 22, grade: "A+", major: "Computer Science" }
// Example 4: Multiple modifications
let product1 = { name: "Phone", price: 30000 };
product1.price = 28000; // Update
product1.brand = "Samsung"; // Add
delete product1.name; // Delete
console.log(product1); // { price: 28000, brand: "Samsung" }
// Example 5: Using bracket notation for modifications
let car1 = { brand: "Honda" };
car1["model"] = "Civic";
car1["year"] = 2024;
console.log(car1); // { brand: "Honda", model: "Civic", year: 2024 }
// 4. Nested Objects (Object of Objects)
// Example 5: Accessing and modifying nested values
let school = {
  classA: { students: 30, teacher: "Ms. Smith" },
  classB: { students: 28, teacher: "Mr. Brown" },
};
school.classA.students = 32;
school.classB.teacher = "Ms. Johnson";
console.log(school.classA.students); // 32
console.log(school.classB.teacher); // "Ms. Johnson"
// Example 2: Company departments
let company = {
  engineering: { employees: 50, manager: "John" },
  sales: { employees: 30, manager: "Sarah" },
  hr: { employees: 10, manager: "Mike" },
};
console.log(company.engineering.employees); // 50
console.log(company.sales.manager); // "Sarah"
let product2 = {
  nakya: { employees: 25, manager: "Sidra" },
  sales: { employees: 30, manager: "Yousra" },
  hr: { employees: 5, manager: "Arfiya" },
};
console.log(product2.nakya.manager);
console.log(product2.hr.manager);
// 5. Array of Objects
// Example 3: Social media posts
let posts = [
  { username: "user1", content: "Hello World!", likes: 50 },
  { username: "user2", content: "JavaScript is fun", likes: 120 },
  { username: "user3", content: "Coding daily", likes: 85 },
];
console.log(posts[1].username); // "user2"
console.log(posts[0].likes); // 50

// Example 4: Course list
let courses = [
  { name: "Math", id: 101, credits: 3 },
  { name: "Physics", id: 102, credits: 4 },
  { name: "Chemistry", id: 103, credits: 3 },
];
console.log(courses[0].credits); // 3
console.log(courses[1].name); // "Physics"

// Example 5: Modifying array of objects
let cars = [
  { brand: "Toyota", model: "Camry", year: 2020 },
  { brand: "Honda", model: "Civic", year: 2021 },
];
cars[0].year = 2024;
cars.push({ brand: "Ford", model: "Mustang", year: 2023 });
console.log(cars[0].year); // 2024
console.log(cars[2].brand); // "Ford"

// 6. The Math Object - Introduction
// Example 1: Math constants
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

// Example 2: Absolute value
console.log(Math.abs(-42)); // 42
console.log(Math.abs(15)); // 15
console.log(Math.abs(-7.5)); // 7.5

// Example 3: Power (exponentiation)
console.log(Math.pow(2, 3)); // 8 (23)
console.log(Math.pow(5, 2)); // 25 (52)
console.log(Math.pow(10, 3)); // 1000 (103)

// Example 4: Rounding down and up
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5

// Example 5: Using Math.PI for calculations
let radius = 5;
let circumference = 2 * Math.PI * radius;
let area = Math.PI * radius * radius;
console.log(circumference); // 31.41592653589793
console.log(area); // 78.53981633974483


// 7. Math.random() - Generating Random Numbers

// Example 1: Basic random decimal
console.log(Math.random()); // 0.6472... (different each time)
console.log(Math.random()); // 0.2851...
console.log(Math.random()); // 0.9234...

// Example 2: Random decimal scaled to 10
let num = Math.random() * 10;
console.log(num); // 4.637... (between 0 and 10)

// Example 3: Random decimal scaled to 100
let percentage = Math.random() * 100;
console.log(percentage); // 73.245... (between 0 and 100)

// Example 4: Multiple random numbers
console.log(Math.random() * 5); // 0 to 5
console.log(Math.random() * 20); // 0 to 20
console.log(Math.random() * 50); // 0 to 50

// Example 5: Understanding the range
console.log(Math.random()); // Could be: 0.000... to 0.999...
console.log(Math.random() * 10); // Could be: 0.000... to 9.999...
console.log(Math.random() * 100); // Could be: 0.000... to 99.999...

// 8. Generating Random Integers

// Example 1: Random integer from 1 to 10 (step by step)
let step1 = Math.random(); // 0.463...
let step2 = step1 * 10; // 4.63...
let step3 = Math.floor(step2); // 4
let step4 = step3 + 1; // 5
console.log(step4); // 5

// Example 2: Random integer from 1 to 10 (one line)
let random = Math.floor(Math.random() * 10) + 1;
console.log(random); // Could be: 1, 2, 3, 4, 5, 6, 7, 8, 9, or 10

// Example 3: Random integer from 1 to 100
let random100 = Math.floor(Math.random() * 100) + 1;
console.log(random100); // 1 to 100

// Example 4: Random integer from 1 to 6 (dice roll)
let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log(diceRoll); // 1, 2, 3, 4, 5, or 6

// Example 5: Random integer from 1 to 5
let rating = Math.floor(Math.random() * 5) + 1;
console.log(rating); // 1, 2, 3, 4, or 5

// 9. Random Number Formula
// Example 1: Random number from 1 to 10
let num1 = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
// Simplifies to: Math.floor(Math.random() * 10) + 1
console.log(num1);

// Example 2: Random number from 5 to 10
let num2 = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
// Simplifies to: Math.floor(Math.random() * 6) + 5
console.log(num2); // 5, 6, 7, 8, 9, or 10

// Example 3: Random number from 50 to 100
let num3 = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
// Simplifies to: Math.floor(Math.random() * 51) + 50
console.log(num3);

// Example 4: Random number from 20 to 30
let num4 = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
// Simplifies to: Math.floor(Math.random() * 11) + 20
console.log(num4);

// Example 5: Random number from -10 to 10
let num5 = Math.floor(Math.random() * (10 - -10 + 1)) + -10;
// Simplifies to: Math.floor(Math.random() * 21) - 10
console.log(num5);

// 10. Practical Random Number Applications
// Example 1: Random dice roll (1-6)
let dice = Math.floor(Math.random() * 6) + 1;
console.log("You rolled: " + dice);

// Example 2: Random choice from array
let colors = ["red", "green", "blue", "yellow"];
let randomIndex = Math.floor(Math.random() * colors.length);
console.log("Random color: " + colors[randomIndex]);

// Example 3: Random quiz question selector
let questions = ["Q1", "Q2", "Q3", "Q4", "Q5"];
let randomQ = Math.floor(Math.random() * questions.length);
console.log("Random question: " + questions[randomQ]);

// Example 4: Random ID generator (1000-9999)
let id = Math.floor(Math.random() * 9000) + 1000;
console.log("Generated ID: " + id);
// Example 5: Random percentage (0-100)
let Percentage = Math.floor(Math.random() * 101);
console.log("Random Percentage: " + Percentage + "%");

//JavaScript Day 6: Object Literals & Math Object - Assignment
// Question 1: Create an object called car with the following properties

let car2 = { brand: "Teasla", model: "3", year: "2024", color: "White" };
console.log(car2.brand); // "Teasla
console.log(car2.year);
