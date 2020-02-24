import TodoInput from "./component/TodoInput.js";

let enrolledItems = [];

function App() {
    TodoInput(enrollItem);
}

const enrollItem = function (item) {
    enrolledItems.push(item);
};


App();