function add(val) {
  return val + 1;
}
function cheng(val) {
  return val * 2;
}
function cheng3(params) {
  return params * 3;
}
const funArr = [add, cheng, cheng3];

// 方案一
// function pipFun(funcs) {
//   function callback(input, func) {
//     return func(input);
//   }
//   return function (val) {
//     return funcs.reduce(callback, val);
//   };
// }

// const compute = pipFun(funArr);
// console.log(compute(0));

// 方案二： 展开符来获取参数
function pipe(...funcs) {
  function callback(input, func) {
    return func(input);
  }
  return function (val) {
    return funcs.reduce(callback, val);
  };
}

const compute = pipe(add, cheng, cheng3);
console.log(compute(0));
