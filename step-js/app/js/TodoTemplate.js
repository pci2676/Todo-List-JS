const TodoTemplate = {
    getTemplate: (entity) => {
        let template = '';
        template +=
            `<li id="${entity.id}" class="ready">
                <input name="" type="checkbox" value="">
                <span class="text">${entity.text}</span>
                <div class="tools">
                    <i class="fas fa-edit"></i>
                    <i class="fas fa-trash"></i>
                </div>
            </li>`;
        return template;
    },
};

export default TodoTemplate;