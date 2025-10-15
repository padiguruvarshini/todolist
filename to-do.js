const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.addEventListener('dblclick', () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = '';
});
