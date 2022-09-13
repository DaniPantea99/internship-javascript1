const button = document.querySelector(`#submit`);
const todoList = document.querySelector(`#todo-list`);
const todoNr = document.querySelector(`.todo-nr b`);
const items = todoList.children;

button.addEventListener(`click`, function() {
    const newItem = document.createElement(`li`);
    newItem.classList.add(`item`);
    newItem.innerText = `Item 4`;
    todoList.appendChild(newItem);
    todoNr.innerText = items.length;
});
