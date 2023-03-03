class Stack {
  constructor(initArr) {
    this.items = initArr || [];
  }
  // 往栈顶添加元素
  push = (item) => {
    this.items.push(item);
  };

  //   移除栈顶元素
  pop = () => {
    return this.items.pop();
  };

  //   返回栈顶元素
  peek = () => {
    return this.items[this.items.length - 1];
  };

  //   判断栈是否为空
  isEmpty = () => {
    return !this.items.length;
  };

  //   清空栈
  clear = () => {
    this.items = [];
  };

  // 返回栈的个数
  size = () => {
    return this.items.length;
  };

  //   打印栈
  log = () => {
    console.log(this.items);
  };
}

let stach1 = new Stack([1, 2, 3, 4, 5, 6, 7, 8]);
stach1.push(9);
stach1.log();
console.log(stach1.pop());
stach1.log();
console.log(stach1.peek());
console.log(stach1.isEmpty());
console.log(stach1.size());
stach1.clear();
stach1.log();
