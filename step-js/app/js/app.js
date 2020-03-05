import TodoStorage from "./TodoStorage.js";
import TodoService from "./TodoService.js";
import TodoController from "./TodoController.js";

function App() {
    this.todoStorage = new TodoStorage();
    this.todoService = new TodoService(this.todoStorage);
    this.todoController = new TodoController(this.todoService);
}

new App();