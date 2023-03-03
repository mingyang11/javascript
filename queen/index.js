class Queen {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  //   添加
  enqueue(item) {
    this.items[this.count] = item;
    this.count++;
  }

  //   删除
  dequeue() {}

  //   返回队列第一个元素
  peek() {}

  //   判断队列是否为空
  isEmpty() {}

  //  返回队列大小
  size() {}
}
