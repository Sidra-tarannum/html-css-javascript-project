console.log("hello");
// Section 7: Array Methods (push, pop, shift, unshift)
let playlist = [];
playlist.push("song1");
playlist.push("song2");
let removedSong = playlist.pop();
playlist.unshift("song0");
console.log("Final Playlist", playlist);
console.log("RemovedSong", removedSong);
let queue = ["first", "second", "Third"];
let served = queue.shift();
queue.push("Fourth");
let served2 = queue.shift();
console.log("Remaining Queue", queue);
console.log("People Served::", served, served2);

// Section 8: Search Methods (indexOf, includes)
// Example 1: Basic replacement
let fruit = "I love apple pie";
console.log(fruit.replace("apple", "mango")); // "I love mango pie"
// Example 2: Only first occurrence is replaced
let text = "I love apple pie and apple juice";
console.log(text.replace("apple", "orange"));
// "I love orange pie and apple juice"
// Example 3: Case sensitivity
let message = "Sidra hello HELLO";
console.log(message.replace("sidra", "hi")); // "Hello hi HELLO"
// Example 4: Replacing spaces
let sentence = "Welcome Home";
console.log(sentence.replace(" ", "-")); // "Welcome-home"
// Example 5: Chaining with replace
let str = " javascript ";
let result = str.trim().replace("java", "type");
console.log(result); // "typescript"

// 9. Introduction to Arrays
let ArrayName = ["Bmw", "thar","merceds","toyota"]
console.log(ArrayName[0][0]);
console.log(ArrayName[0][1]);
console.log(ArrayName[0][2]);
console.log(ArrayName[0][3]);
// Example 2: Accessing array elements (0-indexed)
let fruits = ["apple", "banana", "mango"];
console.log(fruits[0][3]); // "l"
console.log(fruits[2][4]); 
console.log(fruits [1]);
// Example 3: Arrays with different data types
let Mixed = ["HELLO", 25, false, 20]
console.log(Mixed [3]);
console.log(Mixed [0]);
 // Example 4: Array length property
let number = [10, 20, 30, 40, 50, 60, 70,80, 90, 100]
console.log(number.length);
 // Example 5: Accessing last element
 let items = ["Things", "Somethings", "Everthing", "Forever"]
 let lastInderx = items.length-3;
 console.log(items[lastInderx]);
//  10. Arrays are Mutable
// Example 1: Changing an element
let change = ["sidra", "yousra"]
change[1]="Tarannum"
console.log(change);
// Example 2: Modifying multiple elements
let num = [1,2,33,44,55]
num[0]=10
num[3]=25
console.log(num);
// Example 3: Changing last element
let color = ["red", "blue", "pink", "green"]
color[color.length-1]= "black"
console.log(color);
// // Example 4: Arrays vs Strings mutability
let arr = ["a", "z", "c"]
arr[0]="b"
console.log(arr);
// Example 5: Updating based on condition
let scores = [44, 55, 66, 77,80, 90]
if(scores[4]<80){
score[4]=77
}
console.log(scores);
// Basic Array Methods (End/Start)
// // Example 1: Using push() to add to end
let Name =["sidra"]
Name.push("Tarannum")
console.log(Name);
// Example 2: Using pop() to remove from end
let Number = [1, 2, 3, 4, 5, 6]
let removed = Number.pop();

console.log(removed);
console.log(Number);

// Example 3: Using unshift() to add to start
let numbers = [2, 3, 4];
numbers.unshift(1);
console.log(numbers); 


// Example 4: Using shift() to remove from start
let items1 = ["first", "second", "third"];
let firstItem = items1.shift();
console.log(firstItem); // "first"
console.log(items1); // ["second", "third"]


// Example 5: Combining multiple operations
let stack = [1, 2, 3];
stack.push(4); // [1, 2, 3, 4]
stack.push(5); // [1, 2, 3, 4, 5]
stack.pop(); // [1, 2, 3, 4]
stack.unshift(0); // [0, 1, 2, 3, 4]
console.log(stack); // [0, 1, 2, 3, 4]

// Nested Arrays
// Example 1: Basic nested array
let grid = [[1, 2],[3,25]]
console.log(grid[0]);
console.log(grid[0][1]);
console.log(grid[1]);
console.log(grid[0][1]);

// Example 2: Tic-tac-toe board
let board ={
["X", "O", "X"],
["O", "X", "X"],
["O", "X", "O"]
}
console.log(board[0][0]);
console.log(board[2][2]);

