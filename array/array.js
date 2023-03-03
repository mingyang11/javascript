const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 90];

// 从数组开头删除元素
// for (let index = 0; index < arr.length; index++) {
//   arr[index] = arr[index + 1];
// }
// console.log(arr, '====', arr.length);

console.log(Array.from(arr, (item) => item * 2));
console.log(Array.of(...arr));
console.log(arr.fill(999));
