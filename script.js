var addTaskButton = document.getElementById('addTaskButton');
var taskInput = document.getElementById('taskInput');
var taskList = document.querySelector('.taskList');

var tasks = localStorage.getItem('tasks');
if (tasks) {
    tasks = JSON.parse(tasks);
    renderTasks();
} else {
    tasks = [];
}

function saveTasks() {
    try {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
        console.error("Error saving tasks:", error);
    }
}

function renderTasks() {
    taskList.innerHTML = ""; 

    tasks.forEach(task => {
        const li = document.createElement("li");

        const checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.className = 'task-checkbox';
        checkBox.dataset.id = task.id;
        checkBox.checked = task.completed;

        const taskSpan = document.createElement('span');
        taskSpan.textContent = task.text;
        if (task.completed) {
            taskSpan.classList.add('completed');
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.dataset.id = task.id;

        li.appendChild(checkBox);
        li.appendChild(taskSpan);
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    });
}

function addTask() {
    var taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const task = { id: Date.now(), text: taskText, completed: false };
    tasks.push(task);
    saveTasks();
    renderTasks();

    taskInput.value = ''; //clear
}

// Event delegation
taskList.addEventListener('click', function(event) {
    const target = event.target;

  
    if (target.classList.contains("delete-button")) {
        const id = Number(target.dataset.id);
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
    }

  
    if (target.classList.contains("task-checkbox")) {
        const id = Number(target.dataset.id);
        let task = tasks.find(t => t.id === id);
        if (task) {
            task.completed = target.checked;
        }
        saveTasks();
        renderTasks();
    }
});

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
