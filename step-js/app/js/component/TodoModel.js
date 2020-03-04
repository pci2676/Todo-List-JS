(function (exports) {
    'use strict';

    function TodoModel(storage) {
        console.log('model created.');
        this.storage = storage;
    }

    TodoModel.prototype.create = function (title, callback) {
        console.log('Model.create method execute!');
        title = title || '';
        callback = callback || function () {
        };

        const newItem = {
            title: title.trim(),
            completed: false
        };
        this.storage.save(newItem, callback);
    };

    TodoModel.prototype.read = function (callback) {
        this.storage.findAll(callback);
    };

    TodoModel.prototype.remove = function (id, callback) {
        this.storage.remove(id, callback);
    };

    exports.app = exports.app || {};
    exports.app.TodoModel = TodoModel;
})(this);