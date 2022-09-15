const btnAdd = document.querySelector(`#add`);
const btnDel = document.querySelector(`#delete`);
const btnRemAll = document.querySelector(`#remove-all`);
const btnChange = document.querySelector(`#change`); 
const todoList = document.querySelector(`#todo-list`);
const todoNr = document.querySelector(`.todo-nr b`);
const items = todoList.children;
const btnAddItem = document.querySelector(`#add-item`);
const nameInput = document.querySelector(`.input`);
let itemList = [];
getItems();
console.log(itemList);


btnAdd.addEventListener(`click`, function() {
    if (items.length < 10) {
        const itemText = `Item ${items.length + 1}`
    // const newItem = document.createElement(`li`);
    // newItem.classList.add(`item`);
    // // newItem.innerText = `Item 4`;
    // newItem.innerText = `Item ${items.length + 1}`;
    // todoList.appendChild(newItem);
        addItem(itemText);
        
    // console.log(items[items.length - 1]);
        console.log(itemList);
    } else {
        alert(`You hit the maximum allowed items!`);
        return;
    }
});


btnAddItem.addEventListener(`click`, function(e) {
    e.preventDefault();
    if (nameInput.value.trim() !== "") {
        addItem(nameInput.value.trim());
        nameInput.value = "";
    } else {
        alert(`Cannot add empty item`);
        return;
    }
});

btnDel.addEventListener(`click`, function() {
    // todoList.removeChild(items[items.length - 1]);
    // todoNr.innerText = items.length;
    if (items.length > 0) {
        todoList.removeChild(items[items.length - 1]);
        removeItem();
        console.log(itemList);
        todoNr.innerText = items.length;
    } else {
        alert(`No more items to delete!`);
        return;
    }

});

btnRemAll.addEventListener(`click`, function() {
    
    if (items.length === 0) {
        alert(`Nothing to remove`);
        return;
    } else {

    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }
    todoNr.innerText = items.length;

    itemList = [];
    localStorage.removeItem('list')
}


});


btnChange.addEventListener(`click`, function() {
    // console.log(todoList);
    // console.log(document.querySelector(`#todo-list`));
    // todoList.style.color = "red";
    // document.querySelector(`#todo-list`).style.color = "red";
    if (items.length === 0) {
        alert(`List is empty! Add something first!`);
    } else {
        todoList.classList.toggle(`change`);

    }
});

function addItem(item) {
    itemList.push(item);
    addHtmlItem(item)
    localStorage.setItem("list", JSON.stringify(itemList));
}

function removeItem() {
    itemList.pop();
    localStorage.setItem("list", JSON.stringify(itemList));
}

function getItems() {
    itemList = JSON.parse(localStorage.getItem(`list`));
    if (!itemList) {
        itemList = [];
    }
    todoNr.innerText = itemList.length;
    itemList.forEach(element => {
        addHtmlItem(element)
    });
}

function addHtmlItem(item) {
    const newItem = document.createElement(`li`);
    newItem.classList.add(`item`);
    // newItem.innerText = `Item 4`;
    newItem.innerText = item;
    todoList.appendChild(newItem);
    todoNr.innerText = items.length;
}

