import TodoTemplate from "./TodoTemplate.js";

function TodoView() {
    const readyList = document.querySelector(".ready");
    const ingList = document.querySelector(".ing");
    const doneList = document.querySelector(".done");
    const todoCount = document.querySelector("#count");

    TodoView.prototype.addTodo = (entity, count) => {
        const li = TodoTemplate.getList(entity);
        readyList.appendChild(li);
        TodoView.prototype.updateCount(count);
    };

    TodoView.prototype.removeTodo = (li, count) => {
        li.style.display = "none";
        TodoView.prototype.updateCount(count);
    };

    TodoView.prototype.editTodo = (li, editText, count) => {
        li.querySelector(".text").textContent = editText;
        TodoView.prototype.updateCount(count);
    };

    TodoView.prototype.updateCount = (count) => {
        todoCount.textContent = "총 " + count + " 개";
    };

    TodoView.prototype.changeStatus = (checkBox) => {
        const li = checkBox.parentElement;
        const ul = li.parentElement;
        const status = ul.className;
        if (status === 'todo-list ready') {
            ingList.appendChild(li);
        } else if (status === 'todo-list ing') {
            doneList.appendChild(li);
        } else if (status === 'todo-list done') {
            readyList.appendChild(li);
        }

        checkBox.checked = false;
    };

    TodoView.prototype.showCategory = (event) => {
        const category = event.target.id;
        toggleCategoryDisplay(category);
    };

    function toggleCategoryDisplay(clickedCategory) {
        const target = 'todo-list ' + clickedCategory;

        const categories = [readyList, ingList, doneList];
        for (let i = 0; i < categories.length; i++) {
            categories[i].style.display = 'none';
            if (categories[i].className === target) {
                categories[i].style.display = '';
            }
        }
    }

}

export default TodoView;