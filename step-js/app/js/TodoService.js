function TodoService(todoStorage) {
    this.todoStorage = todoStorage;

    this.addItem = (text, callback) => {
        console.log("service : add Item.");
        this.todoStorage.save(text, callback);
    };
}

export default TodoService;