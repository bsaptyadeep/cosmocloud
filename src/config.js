export class TreeNode {
    constructor(value, type, parent) {
        this.value = value;
        this.type = type;
        this.flag = false;
        this.descendants = [];
        this.parent = parent;
    }

    onChangeValue(value) {
        this.value = value
    }

    onChangetype(type) {
        this.type = type
    }

    toggleFlag() {
        this.flag = !this.flag;
    }

    addDescendant(node) {
        this.descendants.push(node);
        if (node) {
            node.parent = this
        }
    }

    deleteDescendants() {
        this.descendants.forEach((node) => {
            node.deleteDescendants()
        })
        this.descendants = []
    }

    deleteNode() {
        var parent = this.parent;
        const copy=parent.descendants.filter(item=>item!==this)
        parent.descendants=copy;
        this.deleteDescendants();
    }
}

export const types = [
    "NUMBER", "STRING", "BOOLEAN", "OBJECT"
]