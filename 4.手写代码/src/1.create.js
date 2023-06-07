// 题目：实现Object.create()方法

// 实现原理： 将传入的参数作为原型
function create(obj) {
  // 判断传入参数异常的报错处理
  // ...

  // 先创建一个方法
  function Fn() {}
  // 将该方法的原型指向传入的对象
  Fn.prototype = obj;
  // 返回该方法的实例
  return new Fn();
}
const obj = create({ name: 'yangming' });
console.log(obj); // {}
console.log(obj.name); // yangming
