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

    this.save = (item, callback) => {
        const entity = {
            id: this.getId(),
            text: item
        };

        entities.push(entity);
        console.log("storage : save entity");

        callback(entity, entities.length);
    };
}

export default TodoStorage;