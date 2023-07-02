import "./index.css";
import addTaskToList from "./todos";

const taskBtn = document.querySelector("#task-add");
const closeBtn = document.querySelector("#close-modal");
const modal = document.querySelector(".modal");
const submitBtn = document.querySelector("#submit");

function openModal() {
  modal.setAttribute("open", "true");
}

function closeModal() {
  modal.removeAttribute("open");
}

taskBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addTaskToList();
  closeModal();
});
