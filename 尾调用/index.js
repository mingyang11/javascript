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
