/**
 * data 를 html 로 치환해서 전달하는 Template Engine 의 역할을 수행하도록 하자.
 */
(function (exports) {
    'use strict';

    function TodoTemplate() {
        console.log('template created')
    }

    // exports 에 존재하는 app 이라는 namespace 에 넣어서 노출시킨다.
    exports.app = exports.app || {};
    exports.app.TodoTemplate = TodoTemplate;
})(this);