/**
 * 二叉树：每个节点下面都有两个字节点
 * 二叉搜索树： 每个节点下面的左节点小于父节点，右节点大于父节点
 */
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
}
