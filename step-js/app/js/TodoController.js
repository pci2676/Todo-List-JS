function TodoController(todoService, todoView) {
    const service = todoService;
    const view = todoView;
    const inputTextBox = document.querySelector("#inputText");
    const todoList = document.querySelector(".todo-list");

    inputTextBox.addEventListener('keyup', addTodo);
    todoList.addEventListener('click', clickListener);
    todoList.addEventListener('change', changeListener);

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
            const before = li.querySelector(".text").textContent;
            const editText = prompt("바꿀 내용", before);
            service.editItem(li.id, editText, (editItem, count) => view.editTodo(li, editItem, count));
        }
    }

    function isRemove(targetParent) {
        return targetParent.className === "remove";
    }

    function isEdit(targetParent) {
        return targetParent.className === "edit";
    }

    function changeListener(event) {
        const checkBox = event.target;
        const li = checkBox.parentElement;
        const status = li.className;
        if (status === 'ready') {
            li.className = 'ing';
            checkBox.checked = true;
        } else if (status === 'ing') {
            li.className = 'done';
            checkBox.checked = true;
        } else if (status === 'done') {
            li.className = 'ready';
            checkBox.checked = false;
        }
    }
}

export default TodoController;