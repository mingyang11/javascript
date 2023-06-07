// !! 函数作为参数

// function forEach(arr, fn) {
//   for (let i = 0; i < arr.length; i++) {
//     fn(arr[i]);
//   }
// }

// let newArr = [];
// function add(num) {
//   newArr.push(num + 1);
// }

// let arr = [1, 2, 3, 4];

// forEach(arr, (val) => {
//   console.log(val);
// });
// console.log(newArr);

// function filter(arr, fn) {
//   const result = [];
//   for (const key in arr) {
//     if (fn(arr[key])) {
//       result.push(arr[key]);
//     }
//   }
//   return result;
// }
// const res = filter([1, 2, 3, 4, 5, 6], (val) => {
//   return val % 2 === 0;
// });
// console.log(res, 'res');

// !! 函数作为返回值
// function makeFn(params) {
//   let msg = 'hello frot-end';
//   return () => {
//     console.log(msg);
//   };
// }

// const printMsg = makeFn();
// printMsg();

// 一次执行函数
// 使用场景，在支付宝支付的时候生成一个订单后未支付，在一定的时间内该订单都有效，只需要支付一次即可，多余的支付无效
function once(fn) {
  let done = false;
  return function () {
    if (!done) {
      done = true;
      return fn.apply(this, arguments);
    }
  };
}
const pay = once(function (money) {
  console.log(money);
  console.log(`我支付了${money}元钱`);
});
pay(90);
pay(80);

// ??把运算过程进行抽象
// ??高阶函数就是帮我们抽象公共的过程
