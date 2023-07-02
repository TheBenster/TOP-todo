import "./index.css";

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let taskList = document.querySelector(".task-div");

class Todo {
  constructor(title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }
}

export function addTaskToList() {
  let titleInput = document.querySelector("#title");
  let descInput = document.querySelector("#description");
  let dateInput = document.querySelector("#date");
  let priorityInput = document.querySelector("#priority");
  let notesInput = document.querySelector("#notes");

  let title = titleInput.value;
  let description = descInput.value;
  let dueDate = dateInput.value;
  let priority = priorityInput.value;
  let notes = notesInput.value;

  if (title.length === 0) {
    titleInput.value = "You can't do this";
    return;
  }

  let newTask = new Todo(title, description, dueDate, priority, notes, []);

  tasks.push(newTask);
  displayTasks();
  clearInputFields();
  saveTasksToLocalStorage();
}

export function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
  saveTasksToLocalStorage();
}

function clearInputFields() {
  let titleInput = document.querySelector("#title");
  let descInput = document.querySelector("#description");
  let dateInput = document.querySelector("#date");
  let priorityInput = document.querySelector("#priority");
  let notesInput = document.querySelector("#notes");

  titleInput.value = "";
  descInput.value = "";
  dateInput.value = "";
  priorityInput.value = "";
  notesInput.value = "";
}

function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const titleDiv = document.createElement("div");
    titleDiv.innerHTML = `Task<br><hr class='task-line'>${task.title}`;

    const descDiv = document.createElement("div");
    if (task.description === "") {
      descDiv.innerHTML = "";
    } else {
      descDiv.innerHTML = `Description<br><hr class='task-line'>${task.description}`;
    }

    const dueDiv = document.createElement("div");
    dueDiv.innerHTML = `Due Date<br><hr class='task-line'>${task.dueDate}`;

    const priorDiv = document.createElement("div");
    priorDiv.innerHTML = `Priority<br><hr class='task-line'>${task.priority}`;

    const uiDiv = document.createElement("div");
    uiDiv.classList.add("uiDiv");

    const delBtn = document.createElement("button");
    delBtn.classList.add("del-btn");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", () => deleteTask(index));

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => toggleTaskCompletion(index));

    uiDiv.appendChild(delBtn);
    taskDiv.appendChild(titleDiv);
    taskDiv.appendChild(descDiv);
    taskDiv.appendChild(dueDiv);
    taskDiv.appendChild(priorDiv);
    taskDiv.appendChild(uiDiv);
    taskDiv.appendChild(checkbox);
    taskList.appendChild(taskDiv);
  });
}

function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

displayTasks();
