// 思路：将传入的对象作为原型

function create(obj) {
  function fun() {}
  fun.prototype = obj;
  return new fun();
}
console.log(create({ name: '杨明' }).name);
console.log(Object.create({ age: 12 }).age);
