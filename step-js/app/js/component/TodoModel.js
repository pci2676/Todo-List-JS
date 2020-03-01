(function (exports) {
    'use strict';

    function TodoModel(storage) {
        console.log('model created.');
        this.storage = storage;
    }

    exports.app = exports.app || {};
    exports.app.TodoModel = TodoModel;
})(this);