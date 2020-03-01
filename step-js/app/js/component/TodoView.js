(function (exports) {
    'use strict';

    function TodoView(template) {
        console.log('View created.');
        // template 를 자신의 property 로 등록한다.
        this.template = template;

        this.$todoList = document.getElementById('todo-list'); //ul tag
        this.$newTodo = document.getElementById('new-todo'); //input tag
    }

    TodoView.prototype.bind = function (event, handler) {
        var self = this;
        //event: newTodo
        //handler: controller.addItem
        if (event === 'newTodo') {
            console.log('View.bind.newTodo execute!');
            var temp = self.$newTodo;
            temp.addEventListener('change', function () {
                handler(self.$newTodo.value); //addItem(self.$newTodo.value)
            });
        }
    };

    TodoView.prototype.render = function (viewCmd, data) {
        var self = this;
        var viewCommands = {
            //data로 넘어오는 값이 storage에 있는 모든 data이다. 모든 데이터를 출력하는 역할을 하는 메소드.
            showEntries: function () {
                console.log('View.render.showEntries execute!');
                self._addItem(parameter);
            },
            //입력을 마치고 나면 input tag안을 비워주는 역할을 하는 메소드.
            clearNewTodo: function () {
                console.log('View.render.clearNewTodo execute!');
                self.$newTodo.value = '';
            }
        };
        viewCommands[viewCmd]();
    };

    TodoView.prototype._addItem = function (id) {
        this.$todoList.innerHTML = this.template.insert(id);
    };

    exports.app = exports.app || {};
    exports.app.TodoView = TodoView;
})(this);