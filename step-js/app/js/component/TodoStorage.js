(function (exports) {
    'use strict';

    function TodoStorage() {
        console.log('storage created.');
    }

    exports.app = exports.app || {};
    exports.app.TodoStorage = TodoStorage;
})(this);