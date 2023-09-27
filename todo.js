// TO-DO App Functions
const completeButton = document.querySelectorAll('li button')
const form = document.querySelector('#todo');
const input = document.querySelector('#task');
const taskList = document.querySelector('#list');

const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
for (let i = 0; i < savedTasks.length; i++) {
let newTask = document.createElement("li");
  newTask.innerText = savedTasks[i].task;
  newTask.isCompleted = savedTasks[i].isCompleted ? true : false;
  if (newTask.isCompleted) {
    newTask.style.textDecoration = "line-through";
  }
  taskList.appendChild(newTask);
}

form.addEventListener('submit', function(e){
        e.preventDefault();
        const newTask = document.createElement('li');
        const completeBtn = document.createElement('button');
        const removeBtn = document.createElement('button');
        completeBtn.innerText = 'Complete';
        removeBtn.innerText = 'Remove';
        newTask.innerText = input.value;
        newTask.appendChild(completeBtn);
        newTask.appendChild(removeBtn);
        input.value = '';
        taskList.appendChild(newTask); 

    removeBtn.addEventListener('click', function(e){
        e.target.parentElement.remove();
    });

    completeBtn.addEventListener('click', function(e){
        e.target.parentElement.style.setProperty('text-decoration', 'line-through');
    });

    savedTasks.push({ task: newTask.innerText, isCompleted: false });
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
    });
