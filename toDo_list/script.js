class ToDoItem {
    constructor(title) {
        this.title = title;
        this.status = "todo";
        this.startDate = new Date().toLocaleString();
        this.endDate = null;
    }
    complete() {
        if (this.status === "todo") {
            this.status = "done";
            this.endDate = new Date().toLocaleString();
        }
        else {
            this.status = "todo";
            this.endDate = null;
        }
    }
} 

const taskList = [];

const inputEl = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const listEl = document.getElementById("taskList");



function addTask() {
    const text = inputEl.value.trim();
    if (text !== "") {
        const newTask = new ToDoItem(text);
        taskList.push(newTask);
        inputEl.value = "";
        const li = document.createElement("li");
        li.className = "list-group-item";
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input me-2";
        li.appendChild(checkbox);
        const titleSpan = document.createElement("span");
        titleSpan.textContent = newTask.title;
        li.appendChild(titleSpan);
        const dateSpan = document.createElement("small");
        dateSpan.className = "text-muted ms-3";
        dateSpan.textContent = "Created: " + newTask.startDate;
        li.appendChild(dateSpan);
        li.addEventListener("click", function() {
            if (newTask.status === "todo") {
                newTask.complete();
                titleSpan.classList.add("text-decoration-line-through", "text-muted");
                dateSpan.textContent += " | Completed: " + newTask.endDate;
                checkbox.checked = true;
            }
            else {
                newTask.complete();
                titleSpan.classList.remove("text-decoration-line-through", "text-muted");
                dateSpan.textContent = "Created: " + newTask.startDate;
                checkbox.checked = false;
            }
        });
        listEl.appendChild(li);
    }
    
}

addBtn.addEventListener("click", addTask);
inputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});