const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("List-Container");

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        // Create edit button
        let editSpan = document.createElement("span");
        editSpan.classList.add("edit-btn");
        editSpan.innerHTML = "\u270E"; // Pencil icon
        li.appendChild(editSpan);

        // Create delete button
        let deleteSpan = document.createElement("span");
        deleteSpan.classList.add("delete-btn");
        deleteSpan.innerHTML = "\u00d7"; // '×' symbol
        li.appendChild(deleteSpan);

        ListContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

ListContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.classList.contains("edit-btn")) {
        let li = e.target.parentElement;
        let newValue = prompt("Edit your task", li.firstChild.textContent);
        if (newValue) {
            li.firstChild.textContent = newValue;
            saveData();
        }
    } else if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", ListContainer.innerHTML);
}

function showTask() {
    ListContainer.innerHTML = localStorage.getItem("data");
}
showTask();
