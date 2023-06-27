import "./index.css";
let titleInput = document.querySelector("#title");
let descInput = document.querySelector("#description");
let dateInput = document.querySelector("#date");
let priorityInput = document.querySelector("#priority");
let notesInput = document.querySelector("#notes");

class Todos {
  constructor(title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
  }
  get title() {
    return this.title;
  }
  set title(_title) {
    _title = this.title;
  }
  get description() {
    return this.description;
  }
  set description(_description) {
    _description = this.description;
  }
  get dueDate() {
    return this.dueDate;
  }
  set dueDate(_dueDate) {
    _dueDate = this.dueDate;
  }
  get priority() {
    return this.priority;
  }
  set priority(_priority) {
    _priority = this.priority;
  }
  get notes() {
    return this.notes;
  }
  set notes(_notes) {
    _notes = this.notes;
  }
  get checklist() {
    return this.checklist;
  }
  set checklist(_checklist) {
    _checklist = this.checklist;
  }
}

let tasks = [];

export default function addTaskToList() {
  if (titleInput.length == 0) {
    titleInput.textContent = "You cant do this";
  }
  let title = titleInput.value;
  let description = descInput.value;
  let dueDate = dateInput.value;
  let priority = priorityInput.value;
  let notes = notesInput.value;
  let newTask = new Todos(title, description, dueDate, priority, notes);
  tasks.push(newTask);
  console.log(title);
  alert("test");
}
