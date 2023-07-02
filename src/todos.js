import "./index.css";
let titleInput = document.querySelector("#title");
let descInput = document.querySelector("#description");
let dateInput = document.querySelector("#date");
let priorityInput = document.querySelector("#priority");
let notesInput = document.querySelector("#notes");
let task = document.createElement("div");
let taskDiv = document.querySelector(".task-div");

class Todos {
  constructor(title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }
}

let title = titleInput.value;
let description = descInput.value;
let dueDate = dateInput.value;
let priority = priorityInput.value;
let notes = notesInput.value;
let tasks = [];
let taskList = document.querySelector(".task-div");

export default function addTaskToList() {
  if (titleInput.length == 0) {
    titleInput.textContent = "You cant do this";
  }

  if (priority < 3) {
    priority = "Not that urgent";
  } else if (priority == 3) {
    priority = "Normal";
  } else {
    priority = "Very urgent";
  }
  let newTask = new Todos(title, description, dueDate, priority, notes);
  tasks.push(newTask);
  displayTask();
}

function displayTask() {
  const task = document.createElement("div");
  const titleDiv = document.createElement("div");
  const descDiv = document.createElement("div");
  const dueDiv = document.createElement("div");
  const priorDiv = document.createElement("div");
  const uiDiv = document.createElement("div");
  uiDiv.classList.add("uiDiv");

  tasks.forEach((taskItem) => {
    task.innerHTML = "";
    task.classList.add("task");
    uiDiv.innerHTML +=
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>alpha-x-circle-outline</title><path d="M9,7H11L12,9.5L13,7H15L13,12L15,17H13L12,14.5L11,17H9L11,12L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" /></svg>';
    taskList.appendChild(task);
    titleDiv.innerHTML = `Task<br>${taskItem.title}`;
    descDiv.innerHTML = `Description<br>${taskItem.description}`;
    dueDiv.innerHTML = `Due Date<br>${taskItem.dueDate}`;
    priorDiv.innerHTML = `Priority<br>${taskItem.priority}`;

function clearInputFields() {
  const titleInput = document.querySelector("#title");
  const descInput = document.querySelector("#description");
  const dateInput = document.querySelector("#date");
  const priorityInput = document.querySelector("#priority");
  const notesInput = document.querySelector("#notes");
  const typeInput = document.querySelector("#type");

  titleInput.value = "";
  descInput.value = "";
  dateInput.value = "";
  priorityInput.value = "";
  notesInput.value = "";
  typeInput.value = "";
}

// Display actual tasks on DOM
function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.completed) {
      taskDiv.classList.add("completed");
    }

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

    const typeDiv = document.createElement("div");
    typeDiv.innerHTML = `Type<br><hr class='task-line'>${task.type}`;

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
    taskDiv.appendChild(typeDiv);
    taskDiv.appendChild(uiDiv);
    taskDiv.appendChild(checkbox);
    taskList.appendChild(taskDiv);
  });

  const sideBar = document.querySelector("#task-types");
  sideBar.innerHTML = ""; // Clear the sidebar before adding types

  const taskTypes = new Set(tasks.map((task) => task.type));
  taskTypes.forEach((type) => {
    const typeItem = document.createElement("li");
    typeItem.className = "task-type";
    typeItem.textContent = type;

    typeItem.addEventListener("click", () => {
      const selectedType = document.querySelector(".selected-type");
      if (selectedType) {
        selectedType.classList.remove("selected-type");
      }
      typeItem.classList.add("selected-type");
      displayTasks();
    });

    sideBar.appendChild(typeItem);
  });
}
