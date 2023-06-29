import "./index.css";
import addTaskToList from "./todos";
import displayTask from "./todos";
function App() {}
let submit = document.querySelector("#submit");
const closeBtn = document.querySelector("#close-modal");
const modal = document.querySelector(".modal");
let taskBtn = document.querySelector("#task-add");

function openModal() {
  modal.setAttribute("open", "true");
}
function closeModal() {
  modal.removeAttribute("open");
}

taskBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", () => {
  modal.removeAttribute("open");
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
  addTaskToList();
  modal.removeAttribute("open");
});
