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
        entities.push(entity);
        console.log("storage : save entity");

        callback(entity, entities.length);
    };

    this.delete = (id, callback) => {
        console.log("storage : delete entity");

        const targetId = parseInt(id);
        for (let i = 0; i < entities.length; i++) {
            if (entities[i].id === targetId) {
                entities.splice(i, 1);
                break;
            }
        }
        callback(entities.length);
    };
}

export default TodoStorage;