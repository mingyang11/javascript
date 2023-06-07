Function.prototype.myApply = function (context, params) {
  // 1.首先判断调用者是不是函数
  if (typeof this !== 'function') {
    throw new Error('TYPE DRROR');
  }
  // 2.判读要绑定的this对象是否传入，如果没有则使用window代替
  context = context || window;
  //   3.判断apply第二个参数，不存在或者必须是函数
  if (!(typeof params === 'undefined' || params instanceof Array)) {
    throw new Error('第二个参数传递有问题');
  }
  // 4.将调用函数绑定在context上（这里this指的是调用函数）
  context.fn = this;
  //   5.调用并执行函数，将参数传入
  const result = context.fn(...params);
  //   6 从context上删除调用函数
  delete context.fn;
  return result;
};

function printInfo(name, age) {
  console.log(`我今年${this.grid}, 我的名字是${name}, 我${age}岁`);
}

printInfo.myApply({ grid: '三年级' }, ['楚泽', 31]);

// Function.prototype.apply11 = function (context, args) {
//   if (typeof this !== 'function') {
//     throw new Error(12);
//   }
//   context = context || window;
//   context.fn = this;
//   const result = context.fn(...args);
//   delete context.fn;
//   return result;
// };
