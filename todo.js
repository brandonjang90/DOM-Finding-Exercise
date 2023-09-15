const completeButton = document.querySelectorAll('li button')
const form = document.querySelector('#todo');
const input = document.querySelector('#task');
const taskList = document.querySelector('#list');

// for (let btn of completeButton){
//     btn.addEventListener('click', function(e){
//         e.target.parentElement.remove();
//     }
//     )};

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

});
