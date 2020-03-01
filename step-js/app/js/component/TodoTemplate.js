/**
 * data 를 html 로 치환해서 전달하는 Template Engine 의 역할을 수행하도록 하자.
 */
(function (exports) {
    'use strict';

    function TodoTemplate() {
        console.log('template created');
        this.defaultTemplate =
            '<li data-id="{{id}}" class="{{completed}}">' +
            '<div class="view">' +
            '<input class="toggle" type="checkbox" {{checked}}>' +
            '<label>{{title}}</label>' +
            '<button class="destroy"></button>' +
            '</div>' +
            '</li>';
    }

    TodoTemplate.prototype.insert = function (data) {
        console.log('Template.insert method execute!');
        var view = '';
        for (var i = 0; i < data.length; i++) {
            var template = this.defaultTemplate;
            var completed = '';
            var checked = '';

            if (data[i].completed) { //data[i].completed's default value = false
                completed = 'completed';
                checked = 'checked';
            }

            template = template.replace('{{id}}', data[i].id);
            template = template.replace('{{title}}', data[i].title);
            template = template.replace('{{completed}}', completed);
            template = template.replace('{{checked}}', checked);

            view = view + template;
        }
        return view;
    };


    // exports 에 존재하는 app 이라는 namespace 에 넣어서 노출시킨다.
    exports.app = exports.app || {};
    exports.app.TodoTemplate = TodoTemplate;
})(this);

