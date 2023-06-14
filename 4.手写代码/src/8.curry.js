// 柯里化是将多个参数的函数变成一次性可以接受较少参数的函数，且在函数没有接受完全时不会返回计算值，而是仍返回一个函数
function curry(fun) {
  // 首次接收的参数
  return function curried(...args) {
    //   判断函数应该接收的参数数量是否大于当前接受的参数数量，如果大于则代表参数没有接收完全，需要返回函数继续接受
    if (fun.length > args.length) {
      return function () {
        // 递归调用外层函数，并将参数组合传入
        return curried(...[...args, ...arguments]);
      };
    }
    // 应接收数量大于等于时直接执行函数并返回结果
    return fun(...args);
  };
}

function add(a, b, c, d) {
  return a + b + c + d;
}
const curried = curry(add);
const result = curried(1)(2)(3, 4);
console.log(result);
