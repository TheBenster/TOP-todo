import "./index.css";

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let projects = JSON.parse(localStorage.getItem("projects")) || [];
let taskList = document.querySelector(".task-div");
let projectList = document.querySelector("#task-projects");
const newProj = document.querySelector("#new-proj");
let selectedProject = null;

// Todo obj
class Todo {
  constructor(
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
    project
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
    this.project = project;
  }
}

// add task to array.
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

  let newTask = new Todo(
    title,
    description,
    dueDate,
    priority,
    notes,
    [],
    selectedProject
  );

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

// add project to array
// add project to array
export function addProjectToList() {
  let projectNameInput = document.querySelector("#project");
  let projectName = projectNameInput.value;

  if (projectName.length === 0) {
    projectNameInput.value = "Please enter a project name";
    return;
  }

  const newProject = document.createElement("li");
  newProject.textContent = projectName;

  const projColorDiv = document.createElement("div");
  projColorDiv.classList.add("proj-col");

  // const selectedColorDiv = document.querySelector(".selected-color");
  // projColorDiv.style.backgroundColor = selectedColorDiv.dataset.color;

  newProject.prepend(projColorDiv);
  projectList.appendChild(newProject);
  newProj.className = "taskProj";
  projects.push(projectName);
  displayProjects();
  saveProjectsToLocalStorage();
}

const exampleProject = "Example Project";

// append to ul
function displayProjects() {
  projectList.innerHTML = "";

  projects.forEach((project, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = project;

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fas", "fa-trash-alt");
    trashIcon.addEventListener("click", () => delProj(index));

    listItem.appendChild(trashIcon);
    projectList.appendChild(listItem);

    // add event listener to select the project
    listItem.addEventListener("click", () => {
      const selectedListItem = projectList.querySelector("#selected");
      if (selectedListItem) {
        selectedListItem.removeAttribute("id");
      }
      listItem.id = "selected";
      selectProject(project);
      updateSelectedListItemBackground();
    });

    // check if the current project is selected
    if (project === selectedProject) {
      listItem.id = "selected";
    }
  });

  // project color picker
  // const colorDivs = document.querySelectorAll(".proj-col");
  // colorDivs.forEach((div) => {
  //   div.addEventListener("click", () => {
  //     const selectedColorDiv = document.querySelector(".selected-color");
  //     if (selectedColorDiv) {
  //       selectedColorDiv.classList.remove("selected-color");
  //     }
  //     div.classList.add("selected-color");
  //     updateSelectedListItemBackground();
  //   });
  // });
}

// function updateSelectedListItemBackground() {
//   const selectedListItem = projectList.querySelector("#selected");
//   const selectedColorDiv = document.querySelector(".selected-color");
//   if (selectedListItem && selectedColorDiv) {
//     selectedListItem.style.backgroundColor = selectedColorDiv.dataset.color;
//   }
// }

function selectProject(project) {
  selectedProject = project;
  displayProjects();
  displayTasks();
}

// click trashicon and delete proect
function delProj(index) {
  projects.splice(index, 1);
  displayProjects();
  saveProjectsToLocalStorage();
}

// when you click cancel
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

// display tasks in body
function displayTasks() {
  taskList.innerHTML = "";

  // once clicked, will filter to that specific folder
  const filteredTasks = tasks.filter(
    (task) => task.project === selectedProject
  );

  filteredTasks.forEach((task, index) => {
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

export function saveProjectsToLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(projects));
}

export function loadProjectsFromLocalStorage() {
  projects = JSON.parse(localStorage.getItem("projects")) || [];
  displayProjects();
}

displayTasks();
loadProjectsFromLocalStorage();
