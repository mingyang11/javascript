/**
 * 1.中序遍历：以上行顺序访问BST所有节点的遍历方式，也就是以从最小到最大的顺序访问所有节点，中序遍历的一种应用就是对树进行排序操作
 * 2.先序遍历：是以优先于后代节点的顺序访问每个节点，先序遍历的一种应用是打印一个结构化的文档
 * 3.后序遍历：是先访问节点的后代节点，再访问节点本身，后续遍历的一种应用是计算一个目录及其子目录种所有文件所占空间的大小
 */

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
    // 插入的值相等时要推出
    if (this.compare(node.key, key) === 0) {
      throw new Error('树中已经有相同的值');
    }
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
}

const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(2);
bst.insert(7);
bst.insert(15);
bst.insert(12);
bst.insert(18);
