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
        const self = this;
        //event: newTodo
        //handler: controller.addItem
        if (event === 'newTodo') {
            console.log('View.bind.newTodo execute!');
            const temp = self.$newTodo;
            temp.addEventListener('change', function () {
                handler(self.$newTodo.value); //addItem(self.$newTodo.value)
            });
        } else if (event === 'itemRemove') {
            const todo = self.target;
            todo.addEventListener('click', function (event) {
                const target = event.target;
                if (target.className === 'destroy') {
                    handler({id: self._getItemId(target.parentNode, 'li')});
                }
            });
        }
    };

    TodoView.prototype._getItemId = function (element, tagName) {
        var li;
        if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
            li = element.parentNode;
        }
        // 해당 리스트에 해당하는 id (data-id=)를 10진수로 변경해준다.
        return parseInt(li.dataset.id, 10);
    };

    TodoView.prototype.render = function (viewCmd, data) {
        const self = this;
        const viewCommands = {
            //data로 넘어오는 값이 storage에 있는 모든 data이다. 모든 데이터를 출력하는 역할을 하는 메소드.
            showEntries: function () {
                console.log('View.render.showEntries execute!');
                self._addItem(parameter);
            },
            //입력을 마치고 나면 input tag안을 비워주는 역할을 하는 메소드.
            clearNewTodo: function () {
                console.log('View.render.clearNewTodo execute!');
                self.$newTodo.value = '';
            },
            removeItem: function () {
                self._removeItem(parameter);
            }
        };
        viewCommands[viewCmd]();
    };

    TodoView.prototype._addItem = function (id) {
        this.$todoList.innerHTML = this.template.insert(id);
    };

    TodoView.prototype._removeItem = function (id) {
        const element = document.querySelector('[data-id="' + id + '"]');
        if (element) {
            this.$todoList.removeChild(element);
        }
    };

    exports.app = exports.app || {};
    exports.app.TodoView = TodoView;
})(this);