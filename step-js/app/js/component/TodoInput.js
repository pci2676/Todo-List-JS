import EventUtils from "../utils/EventUtils.js";
import StringUtils from "../utils/StringUtils.js";
import DateUtils from "../utils/DateUtils.js";

const inputText = document.getElementById("inputText");

function TodoInput(callback) {

    inputText.addEventListener('keyup', event => addNewTodo(event, callback));

    const addNewTodo = function (event, callback) {
        if (EventUtils.isNotEnter(event)) {
            return false;
        }
        const itemText = inputText.value;
        if (StringUtils.isEmpty(itemText)) {
            return false;
        }

        const todoList = document.getElementById('todoList');

        const id = DateUtils.getDateAsString();

        const listItem = createList(id);

        listItem.appendChild(createSpan(id, itemText));
        listItem.appendChild(createTrashIcon(id));
        listItem.appendChild(createPencilIcon(id));

        listItem.addEventListener('mouseover', mouseover);
        listItem.addEventListener('mouseout', mouseout);

        todoList.appendChild(listItem);

        callback(id);
    };

    function createList(id) {
        const listItem = document.createElement('li');
        listItem.id = 'li_' + id;
        // listItem.ondblclick = moveItem;
        return listItem;
    }

    function createSpan(id, itemText) {
        const span = document.createElement('span');
        span.id = 'item_' + id;
        span.innerText = itemText;
        return span;
    }

    function createPencilIcon(id) {
        const pencilIcon = document.createElement('i');
        pencilIcon.id = 'pencilIcon_' + id;
        pencilIcon.className = 'fas fa-edit';
        // pencilIcon.onclick = renameItem;
        return pencilIcon;
    }

    function mouseover() {
        const pencilIcon = findPencilIconByListItem(this);
        pencilIcon.style.visibility = 'visible';

        const trashIcon = findTrashIconByListItem(this);
        trashIcon.style.visibility = 'visible';
    }

    function mouseout() {
        const pencilIcon = findPencilIconByListItem(this);
        pencilIcon.style.visibility = 'hidden';

        const trashIcon = findTrashIconByListItem(this);
        trashIcon.style.visibility = 'hidden';
    }

    function findPencilIconByListItem(target) {
        const pencilIconId = target.id.replace('li_', '');
        return document.getElementById('pencilIcon_' + pencilIconId);
    }

    function findTrashIconByListItem(target) {
        const trashIconId = target.id.replace('li_', '');
        return document.getElementById('trashIcon_' + trashIconId);
    }

    function createTrashIcon(id) {
        const trashIcon = document.createElement('i');
        trashIcon.className = 'fas fa-trash-alt';
        trashIcon.id = 'trashIcon_' + id;
        // trashIcon.onclick = deleteItem;
        return trashIcon;
    }
}


export default TodoInput;