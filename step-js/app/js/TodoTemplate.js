const TodoTemplate = {
    getList: (entity) => {
        const li = document.createElement("li");
        li.id = entity.id;
        li.innerHTML =
            `<input name="" type="checkbox" value="">
             <span class="text">${entity.text}</span>
             <div class="tools">
                 <span class="edit"><i class="fas fa-edit"></i></span>
                 <span class="remove"><i class="fas fa-trash"></i></span>
             </div>`;
        return li;
    },
};

export default TodoTemplate;