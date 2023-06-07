/**
 * 原型模式
 * 缺点：
 * 优点：相对构造函数来说将方法挂在原型上，不会重复创建方法，使得所有实例共用该方法
 */

// 构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}
// 将方法挂在构造函数的原型上，在实例化时不会重新创建该方法，所有实例共用该方法
Person.prototype.say = function () {
  return this.name;
};

// 实例
const man = new Person('chuze', 30);
console.log(man, '211');
