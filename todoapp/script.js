let inputElement = document.getElementById("taskInput");
let addButton = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {

    let taskElement = inputElement.value;

    if (taskElement === "") {
        return;
    }

    let li = document.createElement("li");
    li.textContent = taskElement;


    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    
    li.appendChild(deleteBtn);

    // add list item to ul
    taskList.appendChild(li);

    inputElement.value = "";
}