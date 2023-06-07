//使用es6的class语法来实现构造器方法，是对构造器模式和原型模式的一个优化整合，对方法的处理是直接挂载在原型链上
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //   class类模式中的方法会自动挂载在原型上
  say() {
    return this.name;
  }
}

const man = new Person('chuze', '31');
console.log(man);
