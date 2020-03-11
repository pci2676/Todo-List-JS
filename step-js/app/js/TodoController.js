function TodoController(todoService, todoView) {
    this.$service = todoService;
    this.$view = todoView;
    this.$inputTextBox = document.querySelector("#inputText");
    this.$todoList = document.querySelector(".box-body");
    this.$todoCategory = document.querySelector("#todo-category");

    this.$inputTextBox.addEventListener('keyup', event => TodoController.prototype.addTodo(event));
    this.$todoList.addEventListener('click', event => TodoController.prototype.clickListener(event));
    this.$todoList.addEventListener('change', event => TodoController.prototype.changeListener(event));
    this.$todoCategory.addEventListener('click', todoView.showCategory);

    TodoController.prototype.addTodo = (event) => {
        if (isNotEnter(event)) {
            return false;
        }
        const itemText = this.$inputTextBox.value;
        this.$inputTextBox.value = "";
        if (isEmpty(itemText)) {
            return false;
        }

        this.$service.addItem(itemText, this.$view.addTodo);
    };

    function isNotEnter(event) {
        return event.key !== 'Enter';
    }

    function isEmpty(itemText) {
        return !itemText || itemText.trim() === "";
    }

    TodoController.prototype.clickListener = (event) => {
        const span = event.target.parentElement;
        const divTools = span.parentElement;
        const li = divTools.parentElement;
        if (isRemove(span)) {
            this.$service.removeItem(li.id, count => this.$view.removeTodo(li, count));
            return;
        }
        if (isEdit(span)) {
            const before = li.querySelector(".text").textContent;
            const editText = prompt("바꿀 내용", before);
            this.$service.editItem(li.id, editText, (editItem, count) => this.$view.editTodo(li, editItem, count));
        }
    };

    function isRemove(targetParent) {
        return targetParent.className === "remove";
    }

    function isEdit(targetParent) {
        return targetParent.className === "edit";
    }

    TodoController.prototype.changeListener = (event) => {
        this.$view.changeStatus(event.target);
    }
}

export default TodoController;