function saveTasksToLocalStorage() {
    const tasks = [];
    const taskElements = document.querySelectorAll(".todo-task");

    taskElements.forEach(task => {
        const taskText = task.querySelector("span").textContent;
        const isChecked = task.querySelector(".todo-check-box").checked;
        tasks.push({ text: taskText, completed: isChecked });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function attachCheckboxListeners() {
    const checkboxes = document.querySelectorAll(".todo-check-box");
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", saveTasksToLocalStorage);
    });
}

function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(task => {
        let taskHTML = `
            <div class="todo-task">
                <div class="todo-check-button-container">
                    <input type="checkbox" class="todo-check-box" ${task.completed ? "checked" : ""} />
                </div>
                <span id="todo-taskname">
                    ${task.text}
                </span>
            </div>
        `;
        document.querySelector('#todo-tasks').innerHTML += taskHTML;
    });

    attachCheckboxListeners();
}

function addNewTask() {
    const inputElement = document.querySelector('#todo-newtask input');
    const inputValue = inputElement.value.trim();

    if (inputValue.length === 0) return;

    setTimeout(() => {
        if (inputValue === "/delete") {
            const currentTasks = document.querySelectorAll(".todo-check-box:checked");
            currentTasks.forEach(task => task.closest(".todo-task").remove());
        } else if (inputValue === "/back") {
            window.location.href = "../htmls/index.html";
        } else {
            let taskHTML = `
                <div class="todo-task">
                    <div class="todo-check-button-container">
                        <input type="checkbox" class="todo-check-box" />
                    </div>
                    <span id="todo-taskname">
                        ${inputValue}
                    </span>
                </div>
            `;
            const list = document.querySelector('#todo-tasks');
            list.innerHTML += taskHTML;

            attachCheckboxListeners();
        }

        inputElement.value = "";
        saveTasksToLocalStorage();
    }, 50);
}

document.querySelector('#todo-push-button').addEventListener("click", addNewTask);

document.addEventListener("DOMContentLoaded", () => {
    loadTasksFromLocalStorage();
});
