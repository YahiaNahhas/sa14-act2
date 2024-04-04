document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskTitleInput = document.getElementById('task-title');
        const taskDetailsInput = document.getElementById('task-details');
        const taskTitle = taskTitleInput.value.trim();
        const taskDetails = taskDetailsInput.value.trim();
        if (taskTitle !== '') {
            addTask(taskTitle, taskDetails);
            taskForm.reset();
        } else {
            alert('Please enter a task title.');
        }
    });

    function addTask(title, details) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <span class="task-title">${title}</span>
            <span class="task-details">${details}</span>
            <div>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        taskList.appendChild(taskItem);
        
        const editBtn = taskItem.querySelector('.edit-btn');
        const deleteBtn = taskItem.querySelector('.delete-btn');
        editBtn.addEventListener('click', function() {
            editTask(taskItem);
        });
        deleteBtn.addEventListener('click', function() {
            deleteTask(taskItem);
        });
    }

    function editTask(taskItem) {
        const titleSpan = taskItem.querySelector('.task-title');
        const detailsSpan = taskItem.querySelector('.task-details');
        const newTitle = prompt('Enter new title:', titleSpan.textContent);
        if (newTitle !== null) {
            const newDetails = prompt('Enter new details:', detailsSpan.textContent);
            titleSpan.textContent = newTitle;
            detailsSpan.textContent = newDetails || '';
        }
    }

    function deleteTask(taskItem) {
        taskItem.remove();
    }
});
