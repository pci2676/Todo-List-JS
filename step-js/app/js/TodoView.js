import TodoTemplate from "./TodoTemplate.js";

function TodoView() {
    const readyList = document.querySelector(".ready");
    const ingList = document.querySelector(".ing");
    const doneList = document.querySelector(".done");
    const todoCount = document.querySelector("#count");
    const self = this;
    self.category = "all";

    this.addTodo = (entity, count) => {
        const li = TodoTemplate.getList(entity);
        readyList.appendChild(li);
        this.updateCount(count);
    };

    this.removeTodo = (li, count) => {
        li.style.display = "none";
        this.updateCount(count);
    };

    this.editTodo = (li, editText, count) => {
        li.querySelector(".text").textContent = editText;
        this.updateCount(count);
    };

    this.updateCount = (count) => {
        todoCount.textContent = "총 " + count + " 개";
    };

    this.changeStatus = (checkBox) => {
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

    this.getCategory = () => {
        return self.category;
    };

    this.showItem = (category, items) => {
        changeCategory(category);

    };

    function changeCategory(category) {
        self.category = category;
    }

}

export default TodoView;