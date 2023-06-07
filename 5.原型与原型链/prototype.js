/**
 *  1.每一个构造函数都包含一个属性prototype
 *  2.这个属性的属性值是一个对象
 *  3.这个对象中的属性或者方法在该构造函数的实例(就它的子孙后代们)中都可以访问到
 *  4.构造函数的实例的__proto__属性指向构造函数的prototype，即下面的例子
 *  5.原型：实例的__proto__属性(名“指针”，也叫原型)，在es5中提供了一种官方的用法，Object.getPrototypeOf()，他们的指向结果是一样的
 */

//构造函数
function Person() {
  this.name = 'chuze';
}
// 实例
const man = new Person();
// 实例的__proto__(Object.getPrototypeOf())属性指向构造函数的prototype
console.log(Person.prototype === man.__proto__); // true
console.log(Person.prototype === Object.getPrototypeOf(man)); // true
console.log(Person.prototype.constructor === Person); // true

/**
 * 原型和constructor的关系:
 *      假如构造函数A的原型是B那么，A.prototype === B.constructor
 *      因为构造函数A的实例C的__proto__属性指向构造函数A的原型，所以C.__proto__.constructor === A
 */
console.log(man.__proto__.constructor === Person); // true

/**
 * 原型链：当访问一个对象A的属性时，如果这个对象A的内部不存在该属性，那么它就回去它的原型对象B中去寻找这个属性，且该原型对象B有自己的原型对象C，
 * 于是就这样一直找下去，这就是原型链的概念
 */
// 比如实例man，它的对象中是没有name这个属性的，所以就会去它的原型对象中去寻找，就找到了name属性为chuze
console.log(man.name); // chuze
