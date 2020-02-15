const inputText = document.getElementById("inputText");

inputText.focus();

inputText.onkeyup = function (event) {
    console.log(event)
    if (isNotEnter(event)) {
        return false;
    }
    addItem();
    this.select();
};

function addItem() {
    const itemText = inputText.value;
    if (isEmpty(itemText)) {
        return false;
    }

    addNewItem(document.getElementById('todoList'), itemText);
}

function addNewItem(todoList, itemText) {
    const dateId = getDateAsString();

    const listItem = getList(dateId);

    listItem.appendChild(getSpan(dateId, itemText));
    listItem.appendChild(getTrashIcon(dateId));
    listItem.appendChild(getPencilIcon(dateId));

    listItem.addEventListener('mouseover', mouseover);
    listItem.addEventListener('mouseout', mouseout);

    todoList.appendChild(listItem);
}

function getList(id) {
    const listItem = document.createElement('li');
    listItem.id = 'li_' + id;
    listItem.ondblclick = moveItem;
    return listItem;
}

function getSpan(id, itemText) {
    const span = document.createElement('span');
    span.id = 'item_' + id;
    span.innerText = itemText;
    return span;
}

function renameItem() {
    const renameText = prompt("바꿀 아이템을 입력하세요.");
    if (isEmpty(renameText)) {
        return false;
    }
    const spanId = this.id.replace('pencilIcon_', '');
    const span = document.getElementById('item_' + spanId);
    span.innerText = renameText;
}

function moveItem() {
    const doneList = document.getElementById("doneList");
    const todoList = document.getElementById("todoList");

    const listItem = document.getElementById(this.id);
    const listItemParent = listItem.parentElement;

    if (listItemParent === doneList) {
        todoList.appendChild(listItem);
        return;
    }
    doneList.appendChild(listItem);
}

function getPencilIcon(id) {
    const pencilIcon = document.createElement('i');
    pencilIcon.id = 'pencilIcon_' + id;
    pencilIcon.className = 'fas fa-edit';
    pencilIcon.onclick = renameItem;
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

function getTrashIcon(id) {
    const trashIcon = document.createElement('i');
    trashIcon.className = 'fas fa-trash-alt';
    trashIcon.id = 'trashIcon_' + id;
    trashIcon.onclick = deleteItem;
    return trashIcon;
}

function deleteItem() {
    const id = this.id.replace('trashIcon_', "");
    const listItem = document.getElementById('li_' + id);
    listItem.style.display = 'none';
}

function findTrashIconByListItem(target) {
    const trashIconId = target.id.replace('li_', '');
    return document.getElementById('trashIcon_' + trashIconId);
}