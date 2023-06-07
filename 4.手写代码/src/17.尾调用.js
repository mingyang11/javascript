/**
 * 尾调用是指在函数的最后一步痛过return调用另一个函数
 */
function fun3() {
  return 1;
}

function fun2() {
  return fun3();
}

function fun1() {
  return fun2();
}

console.log(fun1());
