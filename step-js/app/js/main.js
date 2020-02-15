const inputText = document.getElementById("inputText");

inputText.focus();

inputText.onkeyup = function (event) {
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

function addNewItem(list, itemText) {
    const dateId = getDateAsId();

    const listItem = getList(dateId);
    listItem.appendChild(getSpan(dateId, itemText));
    // listItem.appendChild(getCheckBox(dateId));

    list.appendChild(listItem);
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
    span.onclick = renameItem;
    return span;
}

function getCheckBox(id) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkBox';
    checkbox.id = 'cb_' + id;
    checkbox.onclick = updateItemStatus;
    return checkbox;
}

function updateItemStatus() {
    const childId = this.id.replace('cb_', "");
    const itemText = document.getElementById('item_' + childId);

    if (this.checked) {
        itemText.className = 'checked';
        return;
    }
    itemText.className = '';
}

function getDateAsId() {
    const date = new Date();
    return "" + date.getHours() + date.getMinutes() + date.getSeconds() + date.getMilliseconds();
}

function renameItem() {
    const renameText = prompt("바꿀 아이템을 입력하세요.");
    if (isEmpty(renameText)) {
        return false;
    }
    this.innerText = renameText;
}

function removeItem() {
    document.getElementById(this.id).style.display = 'none';
}

function moveItem() {
    const doneList = document.getElementById("doneList");
    const listItem = document.getElementById(this.id);
    doneList.appendChild(listItem);
}