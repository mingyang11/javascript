// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 90];

// 从数组开头删除元素
// for (let index = 0; index < arr.length; index++) {
//   arr[index] = arr[index + 1];
// }
// console.log(arr, '====', arr.length);

// console.log(Array.from(arr, (item) => item * 2));
// console.log(Array.of(...arr));
// console.log(arr.fill(999));
// const arr = [1, 2, 3, 9];
// function add1AndPush(previousValue, currentValue) {
//   // previousValue 是一个数组
//   //   previousValue.push(currentValue + 1);
//   previousValue.push(currentValue * 2);
//   return previousValue;
// }
// const newArray = arr.reduce(add1AndPush, []);
// console.log(newArray);
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

const num = funArr.reduce((pre, cur) => {
  return cur(pre);
}, 0);
console.log(num);
