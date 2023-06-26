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

function addTask() {}
