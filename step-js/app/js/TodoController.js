function TodoController(todoService, todoView) {
    const service = todoService;
    const view = todoView;
    const inputTextBox = document.querySelector("#inputText");
    const todoList = document.querySelector(".box-body");
    const todoCategory = document.querySelector("#todo-category");

    inputTextBox.addEventListener('keyup', addTodo);
    todoList.addEventListener('click', clickListener);
    todoList.addEventListener('change', changeListener);
    todoCategory.addEventListener('click', event => {
        const from = view.getCategory();
        const to = event.target.textContent;
        //서비스에 현제 카테고리 + 바꿀 카테고리 보내줘서 데이터 뷰로 콜백시켜주기
    });


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
        view.changeStatus(event.target);
    }
}

export default TodoController;