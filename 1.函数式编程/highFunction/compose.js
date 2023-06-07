// function compose(f, g) {
//   return function (params) {
//     return f(g(params));
//   };
// }

function getFirst(arr) {
  return arr[0];
}

function reverse(arr) {
  return arr.reverse();
}

function toUpper(s) {
  return s.toUpperCase();
}

// const arr = [1, 2, 3, 4, 5, 65, 7];
// const fun = compose(getFirst, reverse);
// console.log(fun(arr));

/**-------------------- */
// const lodash = require('lodash');
// const f = lodash.flowRight(toUpper, getFirst, reverse);
// console.log(f(['one', 'two', 'three']));

function compose(...funcs) {
  return function (val) {
    return funcs.reverse().reduce((pre, fun) => fun(pre), val);
  };
}

const composed = compose(toUpper, getFirst, reverse);
console.log(composed(['one', 'two', 'three']));
