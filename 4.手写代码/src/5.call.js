Function.prototype.myCall = function (context, ...params) {
  // 1.判断调用者是不是方法
  if (typeof this !== 'function') {
    throw new Error('type error');
  }
  // 2.判断context是否传入，如果没有则使用window作为绑定的this
  context = context || window;
  //   3.将调用者(当前是this)，绑定在context上（这一步原因是this只想被调用者当前的上下为，这里就改成context了）
  context.fn = this;
  //   4.执行该方法，并传入参数
  const result = context.fn(...params);
  //   执行完之后从context上删除方法
  delete context.fn;
  //   返回值
  return result;
};

function printInfo(name, age) {
  console.log(`我今年${this.grid}, 我的名字是${name}, 我${age}岁`);
}

const info = {
  grid: '三年级',
};
printInfo.myCall(info, '楚泽', 8); // 我今年三年级, 我的名字是楚泽, 我31岁

// Function.prototype.call1 = function (context, ...args) {
//   if (typeof this !== 'function') {
//     throw new Error(1);
//   }
//   context = context || window;
//   context.fn = this;
//   const result = context.fn(...args);
//   delete context.fn;
//   return result;
// };
