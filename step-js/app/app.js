import TodoStorage from "./js/TodoStorage.js";
import TodoService from "./js/TodoService.js";
import TodoController from "./js/TodoController.js";
import TodoView from "./js/TodoView.js";

function App() {
    this.todoStorage = new TodoStorage();
    this.todoService = new TodoService(this.todoStorage);
    this.todoView = new TodoView();
    this.todoController = new TodoController(this.todoService, this.todoView);
}

new App();