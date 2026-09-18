console.log("hello world");
// Call Stack Walkthrough with Example
var n = 2;
function square(num) {
  var ans = num * num;
  return ans;
}
var square2 = square(n);
var square4 = square(4);

console.log(square2);
console.log(square4);



var n = 6;
function square(num) {
  var ans = num * num;
  return ans;
}
var square6 = square(n);
var square8 = square(8);

console.log(square6);
console.log(square8);




