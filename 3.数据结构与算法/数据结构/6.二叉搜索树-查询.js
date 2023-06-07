// 左边存储的值比父节点小，右边存储的比父节点大
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  compare(a, b) {
    if (a === b) {
      return 0;
    }
    return b < a ? -1 : 1;
  }
  insert(key) {
    const node = new Node(key);
    if (!this.root) {
      this.root = node;
      return true;
    } else {
      this.insertNode(this.root, key);
    }
  }
  insertNode(node, key) {
    //   小于
    if (this.compare(node.key, key) === -1) {
      if (node.left === null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  // 中序遍历
  inOrderMap(callback) {
    this.inOrderMapNode(this.root, callback);
  }
  inOrderMapNode(node, callback) {
    if (node !== null) {
      this.inOrderMapNode(node.left, callback);
      callback(node.key);
      this.inOrderMapNode(node.right, callback);
    }
  }

  // 先序遍历
  preOrderMap(callback) {
    this.preOrderMapNode(this.root, callback);
  }
  preOrderMapNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this.preOrderMapNode(node.left, callback);
      this.preOrderMapNode(node.right, callback);
    }
  }

  // 后序遍历
  lastOrderMap(callback) {
    this.lastOrderMapNode(this.root, callback);
  }
  lastOrderMapNode(node, callback) {
    if (node !== null) {
      this.lastOrderMapNode(node.left, callback);
      this.lastOrderMapNode(node.right, callback);
      callback(node.key);
    }
  }
  min() {
    return this.minNode(this.root);
  }
  minNode(node) {
    let current = node;
    while (current !== null && current.left !== null) {
      current = current.left;
    }
    return current;
  }
  max() {
    return this.maxNode(this.root);
  }
  maxNode(node) {
    let current = node;
    while (current !== null && current.right !== null) {
      current = current.right;
    }
    return current;
  }

  search(key) {
    if (key === undefined) {
      return false;
    }
    return this.searchNode(this.root, key);
  }
  searchNode(node, key) {
    if (node === null) {
      return false;
    } else {
      if (node.key < key) {
        return this.searchNode(node.right, key);
      } else if (node.key > key) {
        return this.searchNode(node.left, key);
      } else {
        return true;
        100;
      }
    }
  }
}
