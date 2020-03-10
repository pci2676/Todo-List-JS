function TodoService(todoStorage) {
    this.todoStorage = todoStorage;

    this.addItem = (text, callback) => {
        console.log("service : add Item.");
        const entity = {
            text: text
        };
        this.todoStorage.save(entity, callback);
    };

    this.removeItem = (id, callback) => {
        console.log("service : remove Item.");
        this.todoStorage.delete(id, callback);
    };

    this.editItem = (id, editText, callback) => {
        console.log("service : edit Item");
        this.todoStorage.edit(id, editText, callback);
    };

}

export default TodoService;