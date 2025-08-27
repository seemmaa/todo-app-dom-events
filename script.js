


var addTaskButton = document.getElementById('addTaskButton');
var taskInput = document.getElementById('taskInput');
var taskList = document.querySelector('.taskList');


var tasks = localStorage.getItem('tasks');
if (tasks) {
    tasks = JSON.parse(tasks);
    tasks.forEach(function(task) {
        var listItem = document.createElement('ul');
        var taskSpan = document.createElement('span');
        taskSpan.textContent = task.text;
        if (task.completed) {
            taskSpan.classList.add('completed');
        }
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function() {
            taskList.removeChild(listItem);
            saveTasks();
        };
        var checkBox = document.createElement('input');
        checkBox.type = 'checkbox';
        checkBox.checked = task.completed;
        checkBox.addEventListener('click', function() {
            taskSpan.classList.toggle('completed');
            saveTasks();
        });
        listItem.appendChild(checkBox);
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);
    });
} else {
    tasks = [];
}

function saveTasks() {
    var taskItems = taskList.querySelectorAll('ul');
    tasks = [];
    taskItems.forEach(function(item) {
        var taskText = item.querySelector('span').textContent;
        var completed = item.querySelector('input').checked;
        tasks.push({ text: taskText, completed: completed });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}




function addTask() {
    var taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }
    
    var listItem = document.createElement('ul');
    var taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    var v = document.querySelector
    
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-button';
    deleteButton.onclick = function() {
        taskList.removeChild(listItem);
        saveTasks();
      
       
       
    };

    var checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.addEventListener('click', function() {
        
        taskSpan.classList.toggle('completed');
        
   } );
  

    
    listItem.appendChild(checkBox);
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    saveTasks();
    localStorage.setItem('tasks', JSON.stringify(tasks));

     
    
    taskInput.value = '';//clear
}

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}
);
