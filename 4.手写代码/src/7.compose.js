/**
 * compose又叫函数组合，可以将可以将一个潜逃的函数执行链处理成一个接受函数数组做参数的函数
 * 使用方式：compose(fun1, fun2, fun3, fun4)
 */

// 1.将方法参数使用拓展符处理成数组
function compose(...funcs) {
  // 返回一个函数，函数的参数就是后面调用时传入的参数
  return function (args) {
    // 由于函数组合执行的方式是从右往左，所以我们在运行的时候需要反转下函数数组
    return funcs.reverse().reduce((pre, cur) => {
      // cur代表传入的方法，pre代表上次执行过后的结果
      return cur(pre);
      //   调用参数作为初始参数传入禁区
    }, args);
  };
}

function a(val) {
  return val + 1;
}
function b(val) {
  return val + 2;
}
function c(val) {
  return val + 3;
}

const composed = compose(a, b, c);
console.log(composed(1));
