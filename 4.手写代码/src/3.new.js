function Person(name, age) {
  this.name = name;
  this.age = age;
}

function myNew(fn, ...args) {
  // 1.创建一个新的对象
  const newObj = {};
  // 2.将新对象的__proto__属性指向构造函数的原型(prototype)
  newObj.__proto__ = fn.prototype;
  //   3.将构造函数的this指向新对象，并执行，拿到返回值
  const result = fn.apply(newObj, args);
  //   4.返回
  if (result && (typeof result === 'object' || typeof result === 'function')) {
    return result;
  }
  return newObj;
}
const woman = myNew(Person, 'ly', 18);
console.log(woman, 'as');

// function new1(fun, args) {
//   const newObj = {};
//   newObj.__proto__ = fun.prototype;
//   const result = fun.apply(newObj, args);
//   if (result) {
//     return result;
//   }
//   return newObj;
// }
