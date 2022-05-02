const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

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
            if (node.data === data) {
                return node;
            }
            if (node.data > data) {
                node.left = addValue(node.left, data);
            } else {
                node.right = addValue(node.right, data);
            }
            return node;
        }
    }

    has(data) {
        // throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
        return search(this._root, data);

        function search(node, data) {
            if (!node) {
                return false;
            }

            if (node.data === data) {
                return true;
            }

            return data < node.data
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
            } else if (data === node.data) {
                return node;
            } else if (data > node.data) {
                return findValue(node.right, data);
            } else {
                return findValue(node.left, data);
            }
        }
    }

    remove(data) {
        // throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here

        this._root = removeValue(this._root, data);

        function removeValue(node, data) {
            if (!node) {
                return null;
            }
            if (data < node.data) {
                node.left = removeValue(node.left, data);
                return node;
            } else if (node.data < data) {
                node.right = removeValue(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                }
                if (!node.left) {
                    node = node.right;
                    return node;
                }
                if (!node.right) {
                    node = node.left;
                    return node;
                }
                let newNode = node.right;

                while (newNode.left) {
                    newNode = newNode.left;
                }
                node.data = newNode.data;
                node.right = removeValue(node.right, newNode.data);
                return node;
            }
        }
    }

    min() {
        // throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
        if (!this._root) {
            return null;
        }
        let node = this._root;
        while (node.left) {
            node = node.left;
        }

        return node.data;
    }

    max() {
        // throw new NotImplementedError("Not implemented");
        // remove line with error and write your code here
        if (!this._root) {
            return null;
        }
        let node = this._root;

        while (node.right) {
            node = node.right;
        }

        return node.data;
    }
}

module.exports = {
    BinarySearchTree,
};
