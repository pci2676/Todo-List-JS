import TodoStorage from "./js/TodoStorage.js";
import TodoService from "./js/TodoService.js";
import TodoController from "./js/TodoController.js";

function App() {
    this.todoStorage = new TodoStorage();
    this.todoService = new TodoService(this.todoStorage);
    this.todoController = new TodoController(this.todoService);
}

new App();