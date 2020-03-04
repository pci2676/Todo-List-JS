(function (exports) {
    'use strict';

    function TodoStorage(dbName, callback) {
        console.log('storage created.');

        callback = callback || function () {
        };

        this._dbName = dbName;
        //application 실행 1회 때만 생성한다!
        if (!localStorage[dbName]) {
            var data = {
                todos: []//배열로 생성하여, index로 접근이 가능하도록 한다.
            };
            localStorage[dbName] = JSON.stringify(data);
        }
    }

    TodoStorage.prototype.findAll = function (callback) {
        console.log('Storage.findAll method execute!');
        callback = callback || function () {
        };
        callback.call(this, JSON.parse(localStorage[this._dbName]).todos);
    };

    TodoStorage.prototype.save = function (updateData, callback, id) {
        console.log('Storage.save method execute!');
        const data = JSON.parse(localStorage[this._dbName]);
        const todos = data.todos;

        callback = callback || function () {
        };

        if (id) {
            for (var i = 0; i < todos.length; i++) {
                if (todos[i].id === id) {
                    for (var key in updateData) {
                        todos[i][key] = updateData[key];
                    }
                    break;
                }
            }
            localStorage[this._dbName] = JSON.stringify(data);
            callback.call(this, todos);
        } else {
            updateData.id = new Date().getTime();

            todos.push(updateData);
            localStorage[this._dbName] = JSON.stringify(data);
            callback.call(this, [updateData]);
        }
    };

    TodoStorage.prototype.remove = function (id, callback) {
        const data = JSON.parse(localStorage[this._dbName]);
        const todos = data.todos;

        for (var i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                todos.splice(i, 1);
                break;
            }
        }
        localStorage[this._dbName] = JSON.stringify(data);
        callback.call(this, todos);
    };

    exports.app = exports.app || {};
    exports.app.TodoStorage = TodoStorage;
})(this);