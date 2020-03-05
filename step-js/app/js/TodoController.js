import TodoTemplate from "./TodoTemplate.js";

function TodoController(todoService) {
    const service = todoService;
    const inputTextBox = document.querySelector("#inputText");
    const todoList = document.querySelector(".todo-list");
    const todoCount = document.querySelector("#count");

    inputTextBox.addEventListener('keyup', event => addTodo(event));
    todoList.addEventListener('click', event => clickListener(event));

    function addTodo(event) {
        if (isNotEnter(event)) {
            return false;
        }
        const itemText = inputTextBox.value;
        if (isEmpty(itemText)) {
            return false;
        }

        service.addItem(itemText, function (entity, count) {
            inputTextBox.value = "";
            let template = TodoTemplate.getTemplate(entity);
            //TODO : 다른방식으로 바꿔야겠는걸
            todoList.innerHTML += template;
            updateCount(count);
        });
    }

    function isNotEnter(event) {
        return event.key !== 'Enter';
    }

    function isEmpty(itemText) {
        return !itemText || itemText.trim() === "";
    }

    function updateCount(count) {
        todoCount.textContent = "총 " + count + " 개";
    }

    function clickListener(event) {
        const span = event.target.parentElement;
        const divTools = span.parentElement;
        const li = divTools.parentElement;
        if (isRemove(span)) {
            service.removeItem(li.id, function (count) {
                li.style.display = "none";
                updateCount(count);
            });
            return;
        }
        if (isEdit(span)) {

        }
    }

    function isRemove(targetParent) {
        return targetParent.className === "remove";
    }

    function isEdit(targetParent) {
        return targetParent.className === "edit";
    }
}

export default TodoController;