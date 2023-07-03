import "./index.css";
import {
  addProjectToList,
  addTaskToList,
  loadProjectsFromStorage,
  saveProjectsToLocalStorage,
  delProj,
} from "./todos";

const taskBtn = document.querySelector("#task-add");
const closeBtn = document.querySelector("#close-modal");
const modal = document.querySelector(".modal");
const submitBtn = document.querySelector("#submit");
const newProj = document.querySelector("#new-proj");
const projModal = document.querySelector(".projModal");
const submitProj = document.querySelector("#submitProj");
const cancelProj = document.querySelector("#cancelProj");
const trashIcon = document.querySelector(".fas.fa-trash-alt");

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

function closeProjModal() {
  projModal.removeAttribute("open");
}

// appends project to ul and eventually will assign #selected to the current project
newProj.addEventListener("click", openOtherModal);
cancelProj.addEventListener("click", closeProjModal);

submitProj.addEventListener("click", (event) => {
  event.preventDefault();
  addProjectToList();
  closeProjModal();
});

trashIcon.addEventListener("click", delProj);
function openOtherModal() {
  projModal.setAttribute("open", "true");
}

window.addEventListener("DOMContentLoaded", () => {
  loadProjectsFromStorage();
});
window.addEventListener("beforeunload", () => {
  saveProjectsToLocalStorage();
});
