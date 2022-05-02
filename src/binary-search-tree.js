const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this._root = null;
    }

    root() {
        // throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
        return this._root;
    }

    add(data) {
        // throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
        this._root = addValue(this._root, data);
        function addValue(node, data) {
            if (!node) {
                return new Node(data);
            }
            if (node.value === data) {
                return node;
            }
            if (data < node.value) {
                node.left = addValue(node.left, data);
            } else {
                node.rightt = addValue(node.right, data);
            }
            return node;
        }
    }

    has(data) {
        // throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
        return search(this._root, data);

        function search(node, data) {
            if (node === null) {
                return false;
            }

            if (node.value === data) {
                return true;
            }

            return data < node.value
                ? search(node.left, data)
                : search(node.right, data);
        }
    }

    find(data) {
        // throw new NotImplementedError("Not implemented");

        // remove line with error and write your code here

        return findValue(this._root, data);

        function findValue(node, data) {
            if (!node) {
                return null;
            } else if (data < node.value) {
                return findValue(node.left, data);
            } else if (data > node.value) {
                return findValue(node.right, data);
            } else {
                return node;
            }
        }
    }

    remove(/* data */) {
        throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
    }

    min() {
        throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
    }

    max() {
        throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
    }
}

module.exports = {
    BinarySearchTree,
};
