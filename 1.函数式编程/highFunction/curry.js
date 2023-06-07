// 普通的纯函数
// function checkage(min, age) {
//   return age >= min;
// }

// function checkage(min) {
//   return function (age) {
//     return age >= min;
//   };
// }

const checkage = (min) => (age) => age >= min;
const check18 = checkage(18);
console.log(check18(20));
console.log(check18(16));
