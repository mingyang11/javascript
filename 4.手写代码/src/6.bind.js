Function.prototype.myBind = function (context, ...args) {
  // 1.照例先判断调用者是不是函数
  if (typeof this !== 'function') {
    throw new Error('调用者不是方法，有问题哎');
  }
  // 2.没有传context的时候用window来代替
  context = context || window;
  // 3.将调用函数赋值给变量(这里不放到context是因为bind返回一个函数，无法及时从context上删除)
  const fn = this;
  // 4. 返回方法，待执行
  return function () {
    return fn.apply(context, [...args, ...arguments]);
  };
};
function printInfo(name, age) {
  console.log(`我今年${this.grid}, 我的名字是${name}, 我${age}岁`);
}
const printed = printInfo.myBind({ grid: '三年级' });
printed('chueze', 12);

// Function.prototype.bind1 = function (context, ...args) {
//   if (typeof this !== 'function') {
//     throw new Error();
//   }
//   context = context || window;
//   const _this = this;
//   return function () {
//     return _this.apply(context, [...args, ...arguments]);
//   };
// };
