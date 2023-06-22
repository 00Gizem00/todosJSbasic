const todoForm = document.querySelector('#todoForm');
const inputTodo = document.querySelector('#inputTodo');
const todoList = document.querySelector('#todoList');

function handleTodoFormSubmit(e) {
    e.preventDefault();

    const todoVal = inputTodo.value.trim();

    if(todoVal === '') {
        alert('boş todo ekleyemezsin!');
        return;
    }

    inputTodo.value = '';

    // string interpolation
    todoList.innerHTML += `<li><span>${todoVal}</span> <button class="editTodoBtn">Düzenle</button> <button class="removeTodoBtn">X</button></li>`;

    // silme butonlarinin islemlerini atayalim
    bindDeleteButtons();

    // duzenleme butonlarinin islemlerini atayalim
    bindEditButtons();
}

todoForm.addEventListener('submit', handleTodoFormSubmit);

function bindDeleteButtons() {
    const removeTodoButtons = document.querySelectorAll('.removeTodoBtn');
    for (const btn of removeTodoButtons) {
        btn.addEventListener('click', removeTodoItem);
    }
}

function removeTodoItem() {
    this.parentElement.remove();
}

function bindEditButtons() {
    const removeTodoButtons = document.querySelectorAll('.editTodoBtn');
    for (const btn of removeTodoButtons) {
        btn.addEventListener('click', editTodoItem);
    }
}

function editTodoItem() {
    const todoItemTextElement = this.parentElement.querySelector('span');
    const editTodoText = prompt("Todo'yu nasıl düzenlemek istiyorsun?", todoItemTextElement.innerText);

    todoItemTextElement.innerText = editTodoText;
}

bindDeleteButtons();
bindEditButtons();
