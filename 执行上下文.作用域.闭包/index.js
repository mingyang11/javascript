/**
 * 什么是闭包？
 *    闭包就是一个可以访问其他函数内部变量的函数
 *
 * 闭包的用处？
 *    1.使我们可以在函数外部访问到函数内部的变量。通过这种方式来创建私有变量
 *    2.使已经运行结束的函数上下文中的变量对象继续留在内存中不被回收，因为闭包函数保留了该变量对象的引用，导致不被回收(同样也是个弊端)
 */

// 一个典型的闭包
function fun(params) {
  let name = '121';
  return function (params) {
    console.log(name);
  };
}
const logFun = fun();
logFun();

// for循环面试题
// 第一种解法，使用闭包
for (var index = 0; index < 6; index++) {
  (function (j) {
    setTimeout(() => {
      console.log(j);
    }, 500 * j);
  })(index);
}

// 第二种解法，使用setTimeout第三个参数
for (var index = 0; index < 6; index++) {
  setTimeout(
    (j) => {
      console.log(j);
    },
    500 * index,
    index
  );
}

// 第三种解法，使用let来声明变量
for (let index = 0; index < 6; index++) {
  setTimeout((index) => {
    console.log(index);
  }, 500 * index);
}
