const task = document.getElementById('task');
const addTaskButton = document.getElementById('addTaskButton');
const tasksContainer = document.getElementById('tasks-container');

addTaskButton.addEventListener('click', () => {
    const todoWrapper = document.createElement("div");
    const deleteButton = document.createElement("button");
    const taskText = document.createElement("p")
    todoWrapper.classList.add("todo-container");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "DELETE";
    taskText.classList.add("task-text");
    taskText.textContent = task.value;
    todoWrapper.append(taskText);
    todoWrapper.append(deleteButton);
    tasksContainer.append(todoWrapper);
    deleteButton.addEventListener('click', () => {
        tasksContainer.removeChild(todoWrapper);
    });
    task.value = "";
});