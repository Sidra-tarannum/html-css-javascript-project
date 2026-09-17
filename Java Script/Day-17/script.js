// fetch("https://dummyjson.com/products")
//   .then((resolveMsg) => {
//     return resolveMsg.text();
//   })
//   .then((body) => {
//     let result = JSON.parse(body);
//     console.log(result);
//   })
//   .catch((rejectMsg) => {
//     console.log(rejectMsg);
//   });

//   async function getdata() {
//     const respone = await fetch("https://dummyjson.com/products")
//     const body = await respone.text()
//     const obj = JSON.parse(body)
//     console.log(obj);

//   }
//   getdata()

// let data;
// async function getdata() {
//   const response = await fetch("https://dummyjson.com/products");
//   const h1 = document.querySelector("h1");
//   data = await response.json();
//   h1.innerText = data.products[0].title;
//   console.log(data.products[0].title);
// }
// getdata();

// let data2;
// async function getdata2() {
//   const response = await fetch("https://dummyjson.com/products");
//   const p = document.createElement("p");
//   data = await response.json();
//   p.innerText = data.products[0].description;
//   const h1 = document.querySelector("h1");
//   h1.insertAdjacentElement("afterend", p);
//   console.log(data.products[0].description);
// }
// getdata2();

// let data3;
// async function getdata3() {
//   const response = await fetch("https://dummyjson.com/products");
//   const p1 = document.createElement("p1");
//   data = await response.json();
//   p1.innerText = data.products[0].category;
//   const p = document.querySelector("p");
//   p.insertAdjacentElement("afterend", p1);
//   console.log(data.products[0].category);
// }
// getdata3();
// let data4;
// async function getdata4() {
//   const response = await fetch("https://dummyjson.com/products");
//   const p2 = document.createElement("p2");
//   data = await response.json();
//   p2.innerText = data.products[0].price;
//   const p = document.querySelector("p1");
//   p.insertAdjacentElement("afterend", p2);
//   console.log(data.products[0].price);
// }
// getdata4();

// let data4;
// async function getdata4() {
//   const response = await fetch("https://dummyjson.com/products");
//   const p2 = document.createElement("p2");
//   data = await response.json();
//   p2.innerText = data.products[0].price;
//   const p1 = document.querySelector("p1");
//   p1.insertAdjacentElement("afterend", p2);
//   console.log(data.products[0].price);
// }
// getdata4();

// let data1;
// async function getdata() {
//   const response = await fetch("https://dummyjson.com/products");
//   const h1 = document.querySelector("h1");
//   data = await response.json();
//   h1.innerText = data.products[0].title;

//   console.log(data.products[1].title);
//   console.log(data.products[2].title);
//   console.log(data.products[3].title);
//   console.log(data.products[4].title);
//   console.log(data.products[5].title);
//   console.log(data.products[6].title);
//   console.log(data.products[7].title);
//   console.log(data.products[8].title);
//   console.log(data.products[9].title);
//   console.log(data.products[10].title);
//   console.log(data.products[11].title);
//   console.log(data.products[12].title);
//   console.log(data.products[13].title);
//   console.log(data.products[14].title);
//   console.log(data.products[15].title);
// }
const container = document.querySelector("#container");

async function fetchDetails() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  console.log(data.products); // [30]

  // [{}, {}, {}, {}] // 30 elem

  data.products.forEach((element) => {

    // on first iteration:: element = {} 

    const miniContainer = document.createElement("div");

    const h1 = document.createElement("h1");
    h1.innerText = element.title;
    miniContainer.insertAdjacentElement("beforeend", h1);

    const newPara = document.createElement("p");
    newPara.innerText = element.description;
    miniContainer.insertAdjacentElement("beforeend", newPara);

    const pricePara = document.createElement("p");
    pricePara.innerText = "$" + element.price;
    miniContainer.insertAdjacentElement("beforeend", pricePara);

    container.insertAdjacentElement("beforeend", miniContainer);
  });
}

fetchDetails();






