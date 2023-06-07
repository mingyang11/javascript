// !! map重写
// const map = (arr, fn) => {
//   let result = [];
//   for (const item of arr) {
//     result.push(fn(item));
//   }
//   return result;
// };
// const newArr = map([1, 2, 3, 4], (item) => {
//   return item + 1;
// });
// console.log(newArr);

// 使用reducer来实现map
// const newArr = [1, 2, 3, 4].reduce((pre, cur) => {
//   pre.push(cur + 1);
//   return pre;
// }, []);
// console.log(newArr);

// !! filter实现
// function filter(arr, fn) {
//   const result = [];
//   for (const item of arr) {
//     if (fn(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }
// console.log(filter([1, 2, 3, 4], (item) => item % 2 === 0));
// //  reduce实现
// const filterArr = [1, 2, 3, 4].reduce((pre, cur) => {
//   if (cur % 2 === 0) {
//     pre.push(cur);
//   }
//   return pre;
// }, []);
// console.log(filterArr);

// !! every实现
// const every = (arr, fn) => {
//   let result = true;
//   for (const item of arr) {
//     if (!fn(item)) {
//       result = false;
//       break;
//     }
//     console.log(item);
//   }
//   return result;
// };
// console.log(every([1, 2, 3, 4], (item) => item < 3));

// reduce实现
const everyResult = [1, 2, 3, 4].reduce((pre, cur) => {
  if (!pre) {
    return false;
  } else {
    pre = cur > 2;
    return pre;
  }
}, true);
console.log(everyResult, 'everyResult');

// !! some重写
// function some(arr, fn) {
//   let result = false;
//   for (const item of arr) {
//     if (fn(item)) {
//       result = true;
//       break;
//     }
//   }
//   return result;
// }
// console.log(
//   some([1, 2, 3, 4], (item) => {
//     return item === 1;
//   })
// );

// reduce实现
const result = [1, 2, 3, 4].reduce((pre, cur) => {
  if (pre) {
    return pre;
  }
  pre = cur > 3;
  return pre;
}, false);
console.log(result);
