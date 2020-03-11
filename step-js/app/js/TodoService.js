function TodoService(todoStorage) {
    this.todoStorage = todoStorage;

    TodoService.prototype.addItem = (text, callback) => {
        console.log("service : add Item.");
        const entity = {
            text: text
        };
        this.todoStorage.save(entity, callback);
    };

    TodoService.prototype.removeItem = (id, callback) => {
        console.log("service : remove Item.");
        this.todoStorage.delete(id, callback);
    };

    TodoService.prototype.editItem = (id, editText, callback) => {
        console.log("service : edit Item");
        this.todoStorage.edit(id, editText, callback);
    };

}

export default TodoService;