function add(a, b, c) {
  return a + b + c;
}
add(1, 2, 3);

function addNum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
// console.log(addNum(1)(2)(3));

function curry(addFun) {
  return function (a) {
    return function (b) {
      return function (c) {
        return addFun(a, b, c);
      };
    };
  };
}

const curryAdd = curry(add);
console.log(curryAdd(3)(4)(5));
console.log(curry(add)(3)(4)(5));
