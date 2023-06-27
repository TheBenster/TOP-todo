import "./index.css";
import addTaskToList from "./todos";
function App() {}
let submit = document.querySelector("#submit");

const closeBtn = document.querySelector("close-modal");
const modal = document.querySelector(".modal");
let taskBtn = document.querySelector("#task-add");
console.log(taskBtn);
taskBtn.addEventListener("click", () => {
  modal.setAttribute("open", "true");
});
closeBtn.addEventListener("click", () => {
  modal.removeAttribute("open");
});
submit.addEventListener("click", (event) => {
  event.preventDefault();
  addTaskToList();
});
