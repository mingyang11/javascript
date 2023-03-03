class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  //  添加元素
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  //   判断大小
  size() {
    return this.count;
  }

  //   判断是否为空
  isEmpty() {
    return !this.count;
  }

  //   删除栈顶元素
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  //   查看栈顶元素
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  //   清空栈
  cleae() {
    this.count = 0;
    this.items = {};
  }

  //   字符串化
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }
    return objString;
  }
}
const stack = new Stack();
console.log(stack, 'stack');
console.log(Object.getOwnPropertyNames(stack)); // {1}
console.log(Object.keys(stack)); // {2}
console.log(stack.items); // {3}
// stack.push('yang');
// stack.push('ming');
// console.log(stack.items, stack.count);
