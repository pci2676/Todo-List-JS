import TodoTemplate from "./TodoTemplate.js";

function TodoView() {
    this.$readyList = document.querySelector(".ready");
    this.$ingList = document.querySelector(".ing");
    this.$doneList = document.querySelector(".done");
    this.$todoCount = document.querySelector("#count");

    TodoView.prototype.addTodo = (entity, count) => {
        const li = TodoTemplate.getList(entity);
        this.$readyList.appendChild(li);
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
        this.$todoCount.textContent = "총 " + count + " 개";
    };

    TodoView.prototype.changeStatus = (checkBox) => {
        const li = checkBox.parentElement;
        const ul = li.parentElement;
        const status = ul.className;
        if (status === 'todo-list ready') {
            this.$ingList.appendChild(li);
        } else if (status === 'todo-list ing') {
            this.$doneList.appendChild(li);
        } else if (status === 'todo-list done') {
            this.$readyList.appendChild(li);
        }

        checkBox.checked = false;
    };

    TodoView.prototype.showCategory = (event) => {
        const category = event.target.id;
        const target = 'todo-list ' + category;

        const categories = [this.$readyList, this.$ingList, this.$doneList];
        for (let i = 0; i < categories.length; i++) {
            categories[i].style.display = 'none';
            if (categories[i].className === target) {
                categories[i].style.display = '';
            }
        }
    };

}

export default TodoView;