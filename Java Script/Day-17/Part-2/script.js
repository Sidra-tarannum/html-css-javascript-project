// console.log("hello world");

// async function fetchdeails() {
//   const response = await fetch("https://dummyjson.com/todos");
//   const data = await response.json();
// //   console.log(data.todos);

//   data.todos.forEach((element) => {
//     const container = document.createElement("div");
//     const idelem = document.createElement("p");
//     idelem.innerText = "ID : " + element?.id;

//     const useridelem = document.createElement("p");
//     useridelem.innerText = "UserId : " + element?.userId;

//     const statuselem = document.createElement("p");
//     statuselem.innerHTML = "Status : " + element?.completed;

//     const todoArr = document.createElement("h3");
//     todoArr.innerText = element?.todo;
// container.insertAdjacentElement("beforeend", todoArr)
// container.insertAdjacentElement("beforeend",idelem)
// container.insertAdjacentElement("beforeend", useridelem)
// container.insertAdjacentElement("beforeend", statuselem)

//  const body = document.querySelector("body").insertAdjacentElement("beforeend",container)

//   });
// }
// fetchdeails();

async function main() {
  const response = await fetch("https://dummyjson.com/carts");
  const data = await response.json();
  //   console.log(data.carts);

  data.carts.forEach((cart) => {
    // const container = document.createElement("div")

    // container.classList.add("product-container")

    cart.products.forEach((element) => {
      const container = document.createElement("div");

      container.classList.add("product-container");

      const idelem = document.createElement("p");
      idelem.innerText = "ID : " + element?.id;

      const titleelem = document.createElement("h4");
      titleelem.innerHTML = "TITLE : " + element?.title;

      const pricepara = document.createElement("p");
      pricepara.innerText = "PRICE :" + "$ " + element?.price;

      const quantitypara = document.createElement("p");
      quantitypara.innerText = "QUANTITY : " + element?.quantity;

      const totalpara = document.createElement("P");
      totalpara.innerText = "TOTAL : " + element?.total;

      const discountpara = document.createElement("P");
      discountpara.innerText =
        "DISCOUNTPERCENTAGE : " + element?.discountPercentage;

      const totalelem = document.createElement("p");
      totalelem.innerText = "DISCOUNTEDTOTAL : " + element?.discountedTotal;

      const img = document.createElement("img");
      img.setAttribute("src", element?.thumbnail);
      img.classList.add("img1");

      const btn = document.createElement("button");
      btn.innerText = "Add To Cart";
      btn.classList.add("add-btn");

      container.insertAdjacentElement("beforeend", img);
      container.insertAdjacentElement("beforeend", titleelem);
      container.insertAdjacentElement("beforeend", idelem);
      container.insertAdjacentElement("beforeend", pricepara);
      container.insertAdjacentElement("beforeend", quantitypara);
      container.insertAdjacentElement("beforeend", totalpara);
      container.insertAdjacentElement("beforeend", discountpara);
      container.insertAdjacentElement("beforeend", totalelem);
      container.insertAdjacentElement("beforeend", btn);
      // container.insertAdjacentElement("beforeend",img)

      const body = document
        .querySelector("body")
        .insertAdjacentElement("beforeend", container);

      // container.classList.add("product-container")
    });
  });
}
main();
