// Example 5: fetchStudentData function and printStudentData function (lab work)

// Example 6: Register → Send Email → Update Database → Send Welcome SMS (lab work)

// Example 7: Simple save messages to db functions

// Example 8: Advance save messages to db (handle db rejection situations)

// Introduction to promises (creating and consuming promises)
// Introduction to promise chaining

// no problem scenarie
// sync
// console.log("First line")

// // async function
// setTimeout(() => {
//     console.log("second line")
// }, 1000);

// // sync
// console.log("third line")

// problem scenarie

// step 1: wrap the sync(2nd function) in an ananomous function (wrapper function)

// Example 1: greet function (async fn) and goodBye function (sync fn)

// async function
// function greet(callback) {
//   setTimeout(() => {
//     console.log("Hello HI");

//     callback(); // goodBye();
//   }, 5000);
// }

// // sync function

// function goodBye() {
//   console.log("Bye");
// }

// greet(() => {
//   // some code
//   goodBye();
// });

// console.log("remaing 1000 lines of code");

// Example 2: calculate sum function and print the sum function

// let result; // 22

// // async function sum
// function calculateSum(callback) {
//   setTimeout(() => {
//     console.log("calculate sum function ran...");
//     result = 22;

//     callback(); // printSum();
//   }, 2000);
// }

// function printSum() {
//   console.log("Print sum function ran...");
//   console.log(result);
// }

// // async
// calculateSum(() => {
//     // sync
//   printSum();
// });

// Example 3: Food delivery simulator functions

// confirm async function hai
// function orderBooked(callback) {
//   let delay = Math.floor(Math.random() * 4); // 0 - 3
//   setTimeout(() => {
//     console.log("Order booked successfully:: ", delay);

//     callback(); // orderPrepared();
//   }, delay * 1000);
// }

// function orderPrepared(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     console.log("Order prepared successfully:: ", delay);

//     callback(); // orderDelivered();
//   }, delay * 1000);
// }

// function orderDelivered(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     console.log("Order delivered successfully:: ", delay);

//     callback(); //  console.log("all steps of order completed");
//   }, delay * 1000);
// }

// orderBooked(() => {
//   orderPrepared(() => {
//     orderDelivered(() => {
//       console.log("all steps of order completed");
//     });
//   });
// });

// Example 4: Color change functions
// const h1 = document.querySelector("h1");

// function changeToRed(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     h1.style.color = "red";

//     callback(); //   changeToYellow();
//   }, delay * 1000);
// }

// function changeToYellow(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     h1.style.color = "yellow";

//     callback(); //  changeToGreen();
//   }, delay * 1000);
// }

// function changeToGreen(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   setTimeout(() => {
//     h1.style.color = "green";

//     callback(); // console.log("all colors applied...")
//   }, delay * 1000);
// }

// changeToRed(() => {
//   changeToYellow(() => {
//     changeToGreen(() => {
//       console.log("all colors applied...");
//     });
//   });
// });

// Example 7: Simple save messages to db functions

// function saveMsg1(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   let isDBAvailable = Math.random() > 0.4;

//   setTimeout(() => {
//     if (isDBAvailable) {
//       console.log("Msg 1 saved...");
//       callback(); //  saveMsg2(); // next message callback
//     } else {
//       console.log("Msg 1 not saved, but db was not available");
//     }
//   }, delay * 1000);
// }

// function saveMsg2(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   let isDBAvailable = Math.random() > 0.4;

//   setTimeout(() => {
//     if (isDBAvailable) {
//       console.log("Msg 2 saved...");
//       callback(); // saveMsg3();
//     } else {
//       console.log("Msg 2 not saved, but db was not available");
//     }
//   }, delay * 1000);
// }

// function saveMsg3(callback) {
//   let delay = Math.floor(Math.random() * 5); // 0 - 4
//   let isDBAvailable = Math.random() > 0.4;

//   setTimeout(() => {
//     if (isDBAvailable) {
//       console.log("Msg 3 saved...");
//       callback(); //  console.log("All messages saved successfully...")
//     } else {
//       console.log("Msg 3 not saved, but db was not available");
//     }
//   }, delay * 1000);
// }

// callback hell
// saveMsg1(() => {
//   saveMsg2(() => {
//     saveMsg3(() => {
//       console.log("All messages saved successfully...");
//     });
//   });
// });

// sync
// console.log("js")
// for()

// async
// setTimeout()
// fetch();
// setInterval()

// Promises

// 2 steps: 1: promise creation 2: promise consumption

// handling aync operations using promises

// 1: crate a promise object and return it from the async function

// function saveMsg1() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 4);
//     let isDBAvailable = Math.random() > 0.4;

//     setTimeout(() => {
//       if (isDBAvailable) {
//         resolve("Train 1 reached ");
//       } else {
//         reject("Train 1 crashed");
//       }
//     }, delay * 1000);
//   });
// }

// function saveMsg2() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 4);
//     let isDBAvailable = Math.random() > 0.4;

//     setTimeout(() => {
//       if (isDBAvailable) {
//         resolve("Train 2 reached");
//       } else {
//         reject("Train 2 crashed");
//       }
//     }, delay * 1000);
//   });
// }

// function saveMsg3() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 4);
//     let isDBAvailable = Math.random() > 0.4;

//     setTimeout(() => {
//       if (isDBAvailable) {
//         resolve("Train 3 reahced");
//       } else {
//         reject("Train 3 crashed");
//       }
//     }, delay * 1000);
//   });
// }

// promisified async function
// saveMsg1()
//   .then(() => {
//     console.log("train 1 reached");

//     saveMsg2()
//       .then(() => {
//         console.log("train 2 also reached");

//         // async function: that returns a promise object
//         saveMsg3()
//           .then(() => {
//             console.log("train 3 also reached");
//           })
//           .catch(() => {
//             console.log("train crashed and 102 people dies");
//           });
//       })
//       .catch(() => {
//         console.log("train crashed and 102 people dies");
//       });
//   })
//   .catch(() => {
//     console.log("train crashed and 102 people dies");
//   });

// promise chaining

// saveMsg1()
//   .then((resolveMsg) => {
//     console.log(resolveMsg);
//     return saveMsg2();
//   })
//   .then((resolveMsg) => {
//     console.log(resolveMsg);
//     return saveMsg3();
//   })
//   .then((resolveMsg) => {
//     console.log(resolveMsg);
//     console.log("All trains for the day completed");
//   })
//   .catch((rejectMsg) => {
//     console.log(rejectMsg);
//   });

// color chaning promise function
// const body = document.querySelector("body");
// function changeColor(color) {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       reslove();

//     }, 1000);
//   });
// }
// changeColor("hotpink")
//   .then(() => changeColor("green"))
//   .then(() => changeColor("lightblue"))
//   .then(() => changeColor("red"))
//   .then(() => changeColor("lightgreen"))
//   .then(() => changeColor("brown"))
//   .then(() => {
//     console.log("finsihed");
//   });

// const h1 = document.querySelector("h1");
// function changeColor1(color) {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       h1.style.color = color;

//       reslove();
//     }, 2000);
//   });
// }
// changeColor1("purple")
//   .then(() => changeColor1("gold"))
//   .then(() => changeColor1("green"))
//   .then(() => changeColor1("black"))
//   .then(() => changeColor1("white"))
//   .then(() => changeColor1("skyblue"))
//   .then(() => {
//     console.log("finished");
//   });

const h1 = document.querySelector("h1");
function changeColor(background, text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      document.body.style.backgroundColor = background;
      h1.style.color = text;
      resolve();
    }, 2000);
  });
}

changeColor("hotpink", "white")
  .then(() => changeColor("lightgreen", "darkgreen"))
  .then(() => changeColor("red", "white"))
  .then(() => changeColor("lightblue", "navy"))
  .then(() => changeColor("brown", "cream"))
  .then(() => {
    console.log("finished");
  });

// function saveMsg1() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 4);
//     let isDBAvailable = Math.random() > 0.4;
//     setTimeout(() => {
//       if (isDBAvailable) {
//         resolve("train 1 reached");
//       } else {
//         reject("train 1 crashed");
//       }
//     }, delay * 1000);
//   });
// }
// function saveMsg2() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 4);
//     let isDBAvailable = Math.random() > 0.4;

//     setTimeout(() => {
//       if (isDBAvailable) {
//         resolve("Train 2 reached");
//       } else {
//         reject("Train 2 crashed");
//       }
//     }, delay * 1000);
//   });
// }
// function saveMsg3() {
//   return new Promise((resolve, reject) => {
//     let delay = Math.floor(Math.random() * 4);
//     let isDBAvailable = Math.random() > 0.4;

//     setTimeout(() => {
//       if (isDBAvailable) {
//         resolve("Train 3 reached");
//       } else {
//         reject("Train 3 crashed");
//       }
//     }, delay * 1000);
//   });
// }

// saveMsg1()
//   .then((resolveMsg1) => {
//     console.log(resolveMsg1);
//     return saveMsg2();
//   })
//   .then((resolveMsg2) => {
//     console.log(resolveMsg2);
//     return saveMsg3();
//   })
//   .then((resolveMsg3) => {
//     console.log(resolveMsg3);
//     console.log("All tasks for the day completed");
//   })
//   .catch((rejectMsg) => {
//     console.error(rejectMsg);
//   });

// Callbacks with Asynchronous Operations

// function fetchStudentData(studentId, callback) {
// console.log("Fetching data for student ID:", studentId);
// // Simulate database delay
// setTimeout(() => {
// let studentData = {
// id: studentId,
// name: "Rahul Sharma",
// course: "Computer Science"
// };
// console.log("Data fetched successfully!");
// callback(studentData); // Pass data to callback
// }, 2000);
// }
// function displayStudent(data) {
// console.log("Displaying student:");
// console.log("Name:", data.name);
// console.log("Course:", data.course);
// }
// fetchStudentData(101, displayStudent);

// Promise with Asynchronous Operations


function fetchStudentData(studentId) {
  return new Promise((resolve, reject) => {
    console.log("Fetching data of studentId:", studentId);
    setTimeout(() => {
      let studentdata = {
        id: 101,
        name: "sidra",
        cousre: "C.S",
      };
      console.log("data fetched successfully");
      resolve(studentdata);
    }, 1000);
  });
}
function displayStudent(data) {
  console.log("Displaying student");
  console.log("name:", data.name);
  console.log("course", data.cousre);
}
fetchStudentData(101)
  .then(displayStudent)
  .catch((error) => {
    console.log("Error:", error);
  });



// Creating a Promise
let myPromise = new Promise((resolve, reject) => {
// Asynchronous operation here
let success = true;
if (success) {
resolve("Operation successful!"); // Fulfill the promise
} else {
reject("Operation failed!"); // Reject the promise
}
});
console.log(myPromise);





// Basic Promise Example
let internetSpeed = "fast";
let downloadFile = new Promise((resolve, reject) => {
console.log("Download started...");
setTimeout(() => {
if (internetSpeed === "fast") {
resolve("File downloaded successfully!");
} else {
reject("Download failed: Slow internet");
}
}, 2000);
});
console.log("Download initiated");
console.log(downloadFile); // Promise { <pending> }


// 8. Consuming Promises: .then() and .catch()
let promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Success! Data is here..")
    },1000)
})
promise.then((message)=>{
console.log(message);
})

// .catch program
let promise1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("Something ! Went wrong")

    },1000)
})
promise1.catch((error)=>{
    console.log(error);

})


// using both

let loginStatus = "success"; // Try changing to "failure"
let loginPromise = new Promise((resolve, reject) => {
setTimeout(() => {
if (loginStatus === "success") {
resolve("Login successful! Welcome back.");
} else {
reject("Login failed! Invalid credentials.");
}
}, 1500);
});
loginPromise
.then((message) => {
console.log("✅ ", message);
console.log("Redirecting to dashboard...");
})
.catch((error) => {
console.log("❌ ", error);
console.log("Please try again.");
});




