function TodoController(todoService, todoView) {
    const service = todoService;
    const view = todoView;
    const inputTextBox = document.querySelector("#inputText");
    const todoList = document.querySelector(".todo-list");

    inputTextBox.addEventListener('keyup', addTodo);
    todoList.addEventListener('click', clickListener);

    function addTodo(event) {
        if (isNotEnter(event)) {
            return false;
        }
        const itemText = inputTextBox.value;
        inputTextBox.value = "";
        if (isEmpty(itemText)) {
            return false;
        }

        service.addItem(itemText, view.addTodo);
    }

    function isNotEnter(event) {
        return event.key !== 'Enter';
    }

    function isEmpty(itemText) {
        return !itemText || itemText.trim() === "";
    }

    function clickListener(event) {
        const span = event.target.parentElement;
        const divTools = span.parentElement;
        const li = divTools.parentElement;
        if (isRemove(span)) {
            service.removeItem(li.id, count => view.removeTodo(li, count));
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