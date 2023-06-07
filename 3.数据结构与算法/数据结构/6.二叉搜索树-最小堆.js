/**
 * 二叉堆：是一种特殊的二叉树，有以下两种特性
 * 1.它是一棵完全二叉树，表示树的每一层都有左侧和右侧节点(除了最后一层的叶节点)，并且最后一层的叶节点尽可能都是左侧子节点，这叫作结构特性
 * 2.二叉堆不是最小堆就是最大堆。最小堆允许你快速导出树的最小值，最大堆允许你快速导出树的最大值。所有的节点都大于等于(最大堆)，或者小于等于(最小堆)每个它的子节点，这叫做堆特性
 */
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class MinHead {
  constructor() {
    this.heap = []; // 数组管理数据
  }
  getLeftIndex(index) {
    return 2 * index + 1;
  }
  getRightIndex(index) {
    return 2 * index + 2;
  }
  insert(value) {
    //
    if (value !== null) {
      this.heap.push(value);
      // 与父节点对比，如果比父节点小，交换位置

      this.shiftUp(this.heap.length - 1);
      return true;
    }
    return false;
  }
  shiftUp(index) {
    let parent = this.getParentIndex(index);
    while (index > 0 && this.heap[index] < this.heap[parent]) {
      this.swap(this.heap, parent, index);
      // 获取父元素的父元素的位置，然后继续循环
      index = parent;
      parent = this.getParentIndex(index);
    }
  }
  // 获取父节点的索引
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  // 交换位置
  swap(arr, par, index) {
    const temp = arr[par];
    arr[par] = arr[index];
    arr[index] = temp;
  }

  size() {
    return this.heap.length;
  }
  isEmpty() {
    return this.heap.length === 0;
  }
  findTarget() {
    return this.heap[0];
  }
  // 删除
  extract() {
    if (this.isEmpty()) {
      return;
    }
    if (this.size === 1) {
      return this.heap.shift();
    }
    const removed = this.heap[0];
    this.heap[0] = this.heap.pop();

    this.shiftDown(0);
    return removed;
  }
  shiftDown(index) {
    let current = index;
    // 获取当前节点的左节点
    let left = this.getLeftIndex(index);
    let right = this.getRightIndex(index);
    let size = this.size();
    if (left < size && this.heap[current] > this.heap[left]) {
      current = left;
    }
    if (right < size && this.heap[current] > this.heap[right]) {
      current = right;
    }
    if (index !== current) {
      this.swap(this.heap, index, current);
      this.shiftDown(current);
    }
  }
}
