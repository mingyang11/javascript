/**
 * 特点：
 * 1.插入删除数据效率高O(1)级别(只需要改指针指向即可)，随机访问效率低O(n)级别(需要从链头至链尾遍历)
 * 2.和数组相比，内存空间消耗更大，因为每个存储数据的节点都需要额外的空间存储后继指针
 */
/**
 * 单链表：每个节点只包含一个指针，即后继指针
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
  }
  //   添加元素
  push(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      //
      let current = this.head;
      //循环链表，将current往后移动,当current.next为null时就代表到了链表的尾端
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  /**
   * 删除：
   * 1.删除指定索引位置的元素
   * 2.删除值为xxx的元素
   */
  // 1.删除指定索引的元素
  removeAt(index) {
    if (index < 0 || index >= this.count) {
      console.error('索引位置不存在');
      return;
    }
    let curent = this.head;
    if (index === 0) {
      // 将head指向他的下一个节点
      this.head = this.head.next;
    } else {
      // 循环将curren和previous顺着链表往后移动
      const previous = this.getNodeAt(index - 1);
      // 在index前停下来这是curren刚好对应当前要删除的节点
      // for (let i = 0; i < index; i++) {
      //   previous = curent;
      //   curent = curent.next;
      // }
      curent = previous.next;
      //   将前一个节点的next指向后一个节点
      previous.next = curent.next;
      this.count--;
    }
    return curent.element;
  }

  /**
   *
   */
  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  // 比较值是否恒相等，用immutable或者immer来做
  equal(a, b) {
    return a === b;
  }
  /**
   * 返回值的索引
   */
  indexOf(element) {
    if (this.count === 0) {
      return -1;
    } else {
      let current = this.head;
      for (let i = 0; i < this.count; i++) {
        if (this.equal(element, current.element)) {
          return i;
        }
        current = current.next;
      }
      return -1;
    }
  }

  /**
   * 插入
   */
  insert(element, index) {
    const node = new Node(element);
    if (index > this.count) {
      // 如果插入索引大于数量，代表push
      this.push(element);
    } else if (index === 0) {
      // 等于0的时候在表头插入，需要特殊处理
      let curent = this.head;
      node.next = curent;
      this.head = node;
    } else {
      // 插入
      const previous = this.getNodeAt(index - 1);
      node.next = previous.next;
      previous.next = node;
    }
    this.count++;
    return true;
  }

  /**
   * 获取
   *
   */
  getNodeAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
      return node;
    }
    return;
  }

  /**
   *判断链表是否为空
   */
  isEmpty() {
    return !this.count;
  }
  /**
   *返回链表长度
   */
  size() {
    return this.count;
  }
  /**
   * 获取链头
   */
  getHead() {
    return this.head;
  }
}

class CircleLinkedList extends LinkedList {
  constructor() {
    super();
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.getNodeAt(this.size() - 1);
      current.next = node;
    }
    node.next = this.head;
    this.count++;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head === null) {
          this.head = node;
          node.next = this.head;
        } else {
          const tailNode = this.getNodeAt(this.count - 1);
          node.next = current;
          this.head = node;
          tailNode.next = node;
        }
      } else {
        current = this.getNodeAt(index - 1);
        const nextNode = current.next;
        current.next = node;
        node.next = nextNode;
      }
      this.count++;
      return true;
    }
    return false;
  }
}

const linklist = new CircleLinkedList();
linklist.push('yangmy');
linklist.push('chuze');
