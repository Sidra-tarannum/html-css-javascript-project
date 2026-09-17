console.log("hello ");
// const h1 = document.querySelector("h1");
// // setTimeout(() => {
// //   h1.style.color = "color";
// //   Callback();
// // }, 2000);
// // console.log(pink);
// changecolor("red", () => {
//   changecolor("yellow", () => {
//     changecolor("green", () => {
//       console.log("Finished");
//     });
//   });
// });
// setTimeout(() => {
//   h1.style.color = "red";

// }, 2000);

function changeColor(color, callback) {
  setTimeout(() => {
    h1.style.color = color;

    callback();
  }, 2000);
}
changeColor("red", () => {
  changeColor("yellow", () => {
    changeColor("green", () => {
      console.log("finished");
    });
  });
});

// Notes
console.log("Step1 : Starting the program");
console.log("Step2 : Doing the work");
console.log("Step3 : Finishing up");

//  The blocking program

for (let i = 0; i < 1000000000; i++) {}
console.log("After the claculation");

let x = 10;
let y = 20;
let sum = x + y;
console.log(sum);

let name = "sidra";
let greeting = "Hello" + " " + name;
console.log(greeting);

console.log("Starting");

setTimeout(() => {
  console.log("This apperars after 2 second");
}, 1000);
console.log("ending");

console.log("Open CGC portal");
setTimeout(() => {
  console.log("Header loaded");
}, 1000);
setTimeout(() => {
  console.log("Student data loaded");
}, 1000);

setTimeout(() => {
  console.log("Footer loaded");
}, 500);
console.log("protal structure is ready");
 function submitForm(){
  console.log("Submitting Form...");
  setTimeout(()=>{
    console.log("Form Submitted successfully..!");
    console.log("redirecting to dashboard");
  },3500)
  console.log("Please Wait");
 }
 submitForm();

//  callback function

function greet (name,callback){
  console.log("Hello"+ " " + name);
  callback();
}
function sayGoodbye(){
  console.log("Good Bye");
}
greet ("Sidra",sayGoodbye)

function Studentdata (Student, callback){
console.log("Fetching data od student ID :", 101);
setTimeout(()=>{
  let studentdata = {
    id : 101,
  name : "Sidra",
  course : "C.S"
  };
  console.log("Data fetched successfully");
  callback(studentdata)
},1000)
}
function displayStudent(data)
{
  console.log("Displaying student:");
  console.log("name:",data.name);
  console.log("course:", data.course);
}
Studentdata(101,displayStudent)

function serviceVehicle(carModel, phoneNumber){
  console.log("Recived", carModel, "for service");
console.log("Customer can leave now");

setTimeout(()=>{
  console.log("Service Completed..!");
  phoneNumber()
},5000)
}
function Customercallback(){
  console.log("📞Ring Ring..! Your car is rady..!");
  console.log("Customer Returns to pick up the car");
}
serviceVehicle("BMW", Customercallback)

function changeColor(color, delay, callback) {
  setTimeout(() => {
    document.body.style.backgroundColor = color;
    console.log("Changed to", color);
    if (callback) callback();
  },delay);
}
changeColor("lightgreen", 1000, () => {
  changeColor("hotpink", 1000, () => {
    changeColor("orange", 1000, () => {
      changeColor("lightblue", 1000, () => {
        changeColor("green", 1000, () => {
          console.log("All Colors Are Done");
        });
      });
    });
  });
});
changeColor();
