const inputbox = document.querySelector("#input-box");
const addtodobtn = document.querySelector("#Add-todo-btn");
function deletefn() {
  console.log("delete button Clicked");
}
let counter = 0;
addtodobtn.addEventListener("click", () => {
  const div = document.createElement("div");
  div.setAttribute("id", counter);
  counter++;
  const newParaTag = document.createElement("p");
  newParaTag.innerHTML = inputbox.value;

  const deletebtn = document.createElement("button");
  deletebtn.innerText = "Delete";
  deletebtn.setAttribute("Onclick", "deletefn()");
  const editbtn = document.createElement("button");
  editbtn.innerText = "Edit";
  div.insertAdjacentElement("afterbegin", editbtn);
  div.insertAdjacentElement("afterbegin", deletebtn);

  div.insertAdjacentElement("afterbegin", newParaTag);

  addtodobtn.insertAdjacentElement("afterend", div);
  inputbox.value = "";
});

const box = document.querySelector("#box");
const para = document.querySelector("#para");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb( ${red}, ${green}, ${blue} )`;
  para.innerText = `rgb( ${red}, ${green}, ${blue})`;
});
