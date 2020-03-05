const TodoTemplate = {
    getTemplate: (entity) => {
        let template = '';
        template +=
            `<li id="${entity.id}" class="ready">
                <input name="" type="checkbox" value="">
                <span class="text">${entity.text}</span>
                <div class="tools">
                    <span class="edit"><i class="fas fa-edit"></i></span>
                    <span class="remove"><i class="fas fa-trash"></i></span>
                </div>
            </li>`;
        return template;
    },
};

export default TodoTemplate;