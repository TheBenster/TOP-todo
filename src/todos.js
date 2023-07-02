import "./index.css";

class Todos {
  constructor(title, description, dueDate, priority, notes, checklist, type) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.type = type;
    this.completed = false;
  }
}

let tasks = [];
const taskList = document.querySelector(".task-div");

export function addTaskToList() {
  const titleInput = document.querySelector("#title");
  const descInput = document.querySelector("#description");
  const dateInput = document.querySelector("#date");
  const priorityInput = document.querySelector("#priority");
  const notesInput = document.querySelector("#notes");
  const typeInput = document.querySelector("#type");

  const title = titleInput.value;
  const description = descInput.value;
  const dueDate = dateInput.value;
  const priority = priorityInput.value;
  const notes = notesInput.value;
  const type = typeInput.value;

  if (title.length === 0) {
    titleInput.value = "You can't do this";
    return;
  }

  let newTask = new Todos(
    title,
    description,
    dueDate,
    priority,
    notes,
    [],
    type
  );
  tasks.push(newTask);
  displayTasks();
  clearInputFields();
}

export function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  displayTasks();
}

export function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

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
