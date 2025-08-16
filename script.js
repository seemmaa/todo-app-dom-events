


var addTaskButton = document.getElementById('addTaskButton');
var taskInput = document.getElementById('taskInput');
var taskList = document.querySelector('.taskList');

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
    
    taskInput.value = '';//clear
}

addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
}
);
