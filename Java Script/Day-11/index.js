console.log("hello");
// const heading1 = document.querySelector("#heading1")
// console.dir(heading1);
// const idattr = heading1.getAttribute("class")
// console.log(idattr);
setInterval(()=>{
    setTimeout(()=>{
heading1.setAttribute("class", "red");
    },500);
    heading1.getAttribute("class","lightpink");
 
},1000);
const imgArr = document.querySelectorAll(".oldImg")
console.log(imgArr);
let srcAttr = imgArr[0]
console.log(srcAttr);
// imgArr[0].setAttribute("src","https://tse1.mm.bing.net/th/id/OIP.PXxtylu1-IjPRq9vdLZ3lQHaHZ?r=0&pid=Api&P=0&h=180")

// foreach for selecting one value to change the output and does not expect anything in return
// map is use for is used to create a new array by changing each element of an existing array.
// reduce() is used to combine all elements of an array into a single value.
// filter() is used to select specific elements from an array based on a condition.

// imgArr.forEach((elem)=>{
//     elem.setAttribute("src","https://tse1.mm.bing.net/th/id/OIP.PXxtylu1-IjPRq9vdLZ3lQHaHZ?r=0&pid=Api&P=0&h=180")

// }
// )


imgArr[0].setAttribute("src","https://tse3.mm.bing.net/th/id/OIP.4eETsVmsND-7bmmLy4vMHAHaKX?r=0&pid=Api&P=0&h=180")
imgArr[1].setAttribute("src","https://tse4.mm.bing.net/th/id/OIP.5I2VsItDAH5BaACui_BNSQHaEm?r=0&pid=Api&P=0&h=180")
imgArr[2].setAttribute("src","https://tse3.mm.bing.net/th/id/OIP.QfRPlj2c1nwMmW7-8U7qlwHaD8?r=0&pid=Api&P=0&h=180")

// style (inline)
const heading1 = document.querySelector("#heading1")
heading1.style.color ="hotpink"
heading1.style.backgroundColor ="white"
heading1.style.borderRadius ="20px"
console.log(heading1);
// forward css (normal css)
// reverse css
const heading2 = document.querySelector("#heading2")
heading2.setAttribute("class","main-text");
