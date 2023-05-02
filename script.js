const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const ul = document.querySelector('ul.tasks');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const task = input.value.trim();

  if (task) {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    const taskText = document.createElement('span');
    taskText.classList.add('task');
    taskText.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Supprimer';

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    ul.appendChild(li);

    input.value = '';
  }
});

ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentNode.remove();
  }
});