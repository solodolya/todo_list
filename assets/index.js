const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
addButton.addEventListener('click', function () {
    const task = taskInput.value;
    if (task.length > 0) {
    const newTask = document.createElement('li');
    newTask.classList.add('task');
    newTask.textContent = task;
    taskList.append(newTask);
    taskInput.value = '';
    }
});
taskList.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});