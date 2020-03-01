(function (exports) {
    'use strict';

    function TodoView(template) {
        console.log('View created.');
        // template 를 자신의 property 로 등록한다. 
        this.template = template;
    }

    exports.app = exports.app || {};
    exports.app.TodoView = TodoView;
})(this);