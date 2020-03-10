function TodoStorage() {
    const entities = [];

    this.getId = () => {
        if (entities.length === 0) {
            return 1;
        }

        let id = -1;
        for (let i = 0; i < entities.length; i++) {
            if (entities[i].id >= id) {
                id = entities[i].id + 1;
            }
        }
        return id;
    };

    this.save = (entity, callback) => {
        entity.id = this.getId();
        entities.push(JSON.stringify(entity));
        console.log("storage : save entity");

        callback(entity, entities.length);
    };

    this.delete = (id, callback) => {
        console.log("storage : delete entity");

        const targetId = parseInt(id);
        for (let i = 0; i < entities.length; i++) {
            const aEntity = JSON.parse(entities[i]);
            if (aEntity.id === targetId) {
                entities.splice(i, 1);
                break;
            }
        }
        callback(entities.length);
    };

    this.edit = (id, editText, callback) => {
        console.log("storage : edit entity");

        const targetId = parseInt(id);
        for (let i = 0; i < entities.length; i++) {
            const aEntity = JSON.parse(entities[i]);
            if (aEntity.id === targetId) {
                aEntity.text = editText;
                entities[i] = JSON.stringify(aEntity);
                callback(editText, entities.length);
                break;
            }
        }
    };

}

export default TodoStorage;