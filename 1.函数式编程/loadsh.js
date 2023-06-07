const lodash = require('lodash');

// lodash  curry
function add(a, b, c) {
  return a + b + c;
}
const curried = lodash.curry(add);
curried(1, 2, 3);
curried(1)(2)(3);
curried(1)(2, 3);

//curry实现
function curry(func) {
  return function curried(...args) {
    // 判断实参和形参的个数
    if (args.length < func.length) {
      return function () {
        return curried(...[...args, ...arguments]);
      };
    }
    return func(...args);
  };
}
const curriedyang = curry(add);
console.log(curriedyang(1, 2, 3));
console.log(curriedyang(1)(2)(3));
console.log(curriedyang(1, 2)(3));
console.log(curriedyang(1)(2, 3));
console.log(curriedyang(1)(2)(0));
