/**
 * 栈结构：
 * 栈又名堆栈，是一种运算受限的线性表，仅限定在表尾进行插入和删除操作的线性表。这一端杯成为栈顶，
 * 相对的另一端被称为栈尾。向栈结构插入一个元素被称为入栈（进栈，压栈），把新元素放到栈顶元素的上面，
 * 使之成为新的栈顶元素；从一个栈删除元素被称为出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素
 *
 * 特点：后进先出
 */

function Stack() {
  this.list = [];
}

Stack.prototype.push = function (val) {
  this.list.push(val);
};
Stack.prototype.pop = function () {
  return this.list.pop();
};
Stack.prototype.peek = function () {
  return this.list[this.list.length - 1];
};
Stack.prototype.isEmpty = function () {
  return !this.list.length;
};
Stack.prototype.length = function () {
  return this.list.length;
};
Stack.prototype.toString = function () {
  return this.list.join(' ');
};

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.list);
stack.pop();
console.log(stack.list);
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.length());

// 栈应用
// 将十进制数转化为N进制数
function convert(decNumber, base) {
  const stack1 = new Stack();
  let number = decNumber;
  const baseStr = '0123456789ABCDEF';
  let revertStr = '';
  while (number > 0) {
    const yushu = number % base;
    number = Math.floor(number / base);
    stack1.push(yushu);
  }
  //   通过pop拿到值变成字符串
  while (!stack1.isEmpty()) {
    revertStr += baseStr[stack1.pop()];
  }
  return revertStr;
}
console.log(convert(5000000, 16));
