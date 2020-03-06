import TodoTemplate from "./TodoTemplate.js";

function TodoView() {
    const todoList = document.querySelector(".todo-list");
    const todoCount = document.querySelector("#count");

    this.addTodo = (entity, count) => {
        const li = TodoTemplate.getList(entity);
        todoList.appendChild(li);
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
    }
}

export default TodoView;