import TodoStorage from "./js/TodoStorage.js";
import TodoService from "./js/TodoService.js";
import TodoView from "./js/TodoView.js";
import TodoController from "./js/TodoController.js";

function App() {
    this.todoStorage = new TodoStorage();
    this.todoService = new TodoService(this.todoStorage);
    this.todoView = new TodoView();
    this.todoController = new TodoController(this.todoService, this.todoView);

    this.todoView.showCategory({target: {id: 'ready'}})
}

new App();