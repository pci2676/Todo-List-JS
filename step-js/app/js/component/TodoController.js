(function (exports) {
    'use strict';

    function TodoController(model, view) {
        console.log('controller created.');
        this.model = model;
        this.view = view;
    }

    exports.app = exports.app || {};
    exports.app.TodoController = TodoController;
})(this);