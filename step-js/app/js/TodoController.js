import TodoTemplate from "./TodoTemplate.js";

function TodoController(todoService) {
    const service = todoService;
    const inputTextBox = document.querySelector("#inputText");
    const todoList = document.querySelector(".todo-list");
    const todoCount = document.querySelector("#count");

    inputTextBox.addEventListener('keyup', event => addTodo(event));

    function addTodo(event) {
        if (event.key !== 'Enter') {
            return false;
        }
        const itemText = inputTextBox.value;
        if (!itemText || itemText.trim() === "") {
            return false;
        }

        service.addItem(itemText, function (entity, count) {
            inputTextBox.value = "";
            let template = TodoTemplate.getTemplate(entity);
            //TODO : 다른방식으로 바꿔야겠는걸
            todoList.innerHTML += template;
            todoCount.textContent = "총 " + count + " 개"
        });
    }
}

export default TodoController;