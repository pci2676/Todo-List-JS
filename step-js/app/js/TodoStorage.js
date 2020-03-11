function TodoStorage() {
    this.$entities = [];

    TodoStorage.prototype.getId = () => {
        if (this.$entities.length === 0) {
            return 1;
        }

        let id = -1;
        for (let i = 0; i < this.$entities.length; i++) {
            if (this.$entities[i].id >= id) {
                id = this.$entities[i].id + 1;
            }
        }
        return id;
    };

    TodoStorage.prototype.save = (entity, callback) => {
        entity.id = this.getId();
        this.$entities.push(JSON.stringify(entity));
        console.log("storage : save entity");

        callback(entity, this.$entities.length);
    };

    TodoStorage.prototype.delete = (id, callback) => {
        console.log("storage : delete entity");

        const targetId = parseInt(id);
        for (let i = 0; i < this.$entities.length; i++) {
            const aEntity = JSON.parse(this.$entities[i]);
            if (aEntity.id === targetId) {
                this.$entities.splice(i, 1);
                break;
            }
        }
        callback(this.$entities.length);
    };

    TodoStorage.prototype.edit = (id, editText, callback) => {
        console.log("storage : edit entity");

        const targetId = parseInt(id);
        for (let i = 0; i < this.$entities.length; i++) {
            const aEntity = JSON.parse(this.$entities[i]);
            if (aEntity.id === targetId) {
                aEntity.text = editText;
                this.$entities[i] = JSON.stringify(aEntity);
                callback(editText, this.$entities.length);
                break;
            }
        }
    };

}

export default TodoStorage;