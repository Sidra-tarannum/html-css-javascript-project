console.log("hello world!");

const inputbox = document.querySelector("#input-box");
const addTaskbtn = document.querySelector("#add-Task-btn");
const taskcontainer = document.querySelector("#task-container");

addTaskbtn.addEventListener("click", () => {
  const div = document.createElement("div");

  const newTaskinput = document.createElement("input");
  newTaskinput.classList.add("new-task-input");
  newTaskinput.value = inputbox.value;
  newTaskinput.readOnly = true;

  const editbtn = document.createElement("button");
  editbtn.innerText = "Edit";

  let isEdit = false;

  editbtn.addEventListener("click", () => {
    if (isEdit === false) {
      isEdit = true;
      newTaskinput.readOnly = false;
      newTaskinput.focus();
      editbtn.innerText = "Save";
    } else {
      isEdit = false;
      newTaskinput.readOnly = true;
      editbtn.innerText = "Edit";
    }
  });

  const deletebtn = document.createElement("button");
  deletebtn.innerText = "Delete";
  deletebtn.addEventListener("click", function () {
    this.parentElement.remove();
  });

  div.insertAdjacentElement("afterbegin", deletebtn);
  div.insertAdjacentElement("afterbegin", editbtn);
  div.insertAdjacentElement("afterbegin", newTaskinput);
  taskcontainer.insertAdjacentElement("beforeend", div);
  inputbox.value = "";
});
