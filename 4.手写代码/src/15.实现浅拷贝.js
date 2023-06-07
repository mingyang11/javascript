/**
 * 1.Object.assign版本
 * 它是es6中对象的拷贝方法，接受的第一个对象为目标对象，其他的为源对象，可以实现浅拷贝，也可以实现一维对象的深拷贝
 */
//浅拷贝
// const obj = { user: { name: 'chuze', age: 31 }, work: 'IT' };
// const shallowCopy = Object.assign({}, obj);
// obj.user.name = 'yangmy';
// console.log(shallowCopy); // { user: { name: 'yangmy', age: 31 }, work: 'IT' }
// // 一维对象深拷贝
// const obj = { name: 'chuze', age: 31 };
// const shallowCopy = Object.assign({}, obj);
// obj.name = 'yangmy';
// console.log(shallowCopy); // { name: 'chuze', age: 31 }

/**
 * 2.拓展运算符
 */
//浅拷贝
// const obj = { user: { name: 'chuze', age: 31 }, work: 'IT' };
// const shallowCopy = { ...obj };
// obj.user.name = 'yangmy';
// console.log(shallowCopy); // { user: { name: 'yangmy', age: 31 }, work: 'IT' }
// // 一维对象深拷贝
// const obj = { name: 'chuze', age: 31 };
// const shallowCopy = { ...obj };
// obj.name = 'yangmy';
// console.log(shallowCopy); // { name: 'chuze', age: 31 }

/**
 * 3.Array.prototype.slice()
 * 如果不传参数时代表拷贝这个数组
 */
// const arr = [1, 2, 3, 4];
// const shallowArr = arr.slice();
// console.log(arr === shallowArr); // false

/**
 * 4.Array.prototype.concat()
 * 如果不传参数代表拷贝这个数组
 */
// const arr = [1, 2, 3, 4];
// const shallowArr = arr.concat();
// console.log(arr === shallowArr); // false

/**
 * 5.手动实现浅拷贝
 */

function shallowCopy(object) {
  // 只拷贝数组和对象
  if (!object || typeof object !== 'object') return;
  const newObj = Array.isArray(object) ? [] : {};
  for (const key in object) {
    newObj[key] = object[key];
  }
}
shallowCopy({
  name: 'chuze',
  age: 31,
  work: { content: 'front-end', salary: '19000' },
});
shallowCopy([1, 2, 4, { name: 'chuze', age: 31 }]);
