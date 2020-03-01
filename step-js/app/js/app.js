(function () {
    'use strict';
    function App() {
        console.log('App created!');
        this.storage = new app.TodoStorage('todoItemStorage');
        this.model = new app.TodoModel(this.storage);
        this.template = new app.TodoTemplate();
        this.view = new app.TodoView(this.template);
        this.controller = new app.TodoController(this.model, this.view);
    }
    var todo = new App();
})();


