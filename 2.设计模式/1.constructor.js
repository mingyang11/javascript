/**
 * 构造器模式：复用创建的过程
 * 缺点：1.会重复创建构造函数中的方法
 */

// 构造函数
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    return this.name;
  };
}

// 实例
const man = new Person('chuze', 30);
console.log(man, '211');
