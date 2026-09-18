console.log("hello");
async function main() {
  const response = await fetch("https://dummyjson.com/recipes");
  const data = await response.json();
//   console.log(data.recipes);

data.recipes.forEach(element => {
    const container = document.createElement("div")
container.classList.add("items-container")
    const idelem = document.createElement("p")
    idelem.innerText = element?.id


const h3 = document.createElement("h3")
h3.innerText= element?.name
h3.classList.add("heading")


const para = document.createElement("P")
para.innerText= element?.ingredients


const para2 = document.createElement("p")
para2.innerText= element?.instructions
 


const para3 = document.createElement("p")
para3.innerText = element?.prepTimeMinutes


const para4 = document.createElement("p")
para4.innerText= element?.cookTimeMinutes


const para5 = document.createElement("p")
para5.innerText= element?.servings
 

const para6 = document.createElement("p")
para6.innerText=element?.difficulty

const para7 = document.createElement("p")
para7.innerText = element?.cuisine


const para8 = document.createElement("p")
para8.innerText=element?.caloriesPerServing


const para9 = document.createElement("p")
para9.innerText = element?.tags


const para10 = document.createElement("p")
para10.innerText= element?.userId

const img = document.createElement("img")
img.setAttribute("src",element?.image)
img.classList.add("IMG")

const para11 = document.createElement("p")
para11.innerText = element?.rating



const para12 = document.createElement("p")
para12.innerText = element?.reviewCount



const para13 = document.createElement("p")
para13.innerText = element?.mealType

container.insertAdjacentElement("beforeend",idelem)
container.insertAdjacentElement("beforeend",h3)
container.insertAdjacentElement("beforeend", para)
container.insertAdjacentElement("beforeend", para2)
container.insertAdjacentElement("beforeend", para3)
container.insertAdjacentElement("beforeend", para4)
container.insertAdjacentElement("beforeend", para5)
container.insertAdjacentElement("beforeend", para6)
container.insertAdjacentElement("beforeend", para7)
container.insertAdjacentElement("beforeend", para8)
container.insertAdjacentElement("beforeend", para9)
container.insertAdjacentElement("beforeend", para10)
container.insertAdjacentElement("beforeend",img)
container.insertAdjacentElement("beforeend", para11)
container.insertAdjacentElement("beforeend", para12)
container.insertAdjacentElement("beforeend", para13)

const body = document.querySelector("body").insertAdjacentElement("beforeend",container)


    
});





}
main();
