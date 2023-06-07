/**
 * 原型链指向
 */
function Person(params) {}
Person.prototype.name = 'yangming';
const p = new Person();

console.log(p.__proto__ === Person.prototype); // true

console.log(Person.prototype.__proto__ === Object.prototype); // true

console.log(p.__proto__.__proto__ === Object.prototype); // true

console.log(p.__proto__.constructor.prototype.__proto__ === Object.prototype); // true

console.log(
  Person.prototype.constructor.prototype.__proto__ === Object.prototype
); // true

console.log(p.__proto__.constructor === Person); // true

console.log(Person.prototype.constructor === Person); // true

/**
 * 原型链的终点是什么?
 *      因为Object是构造函数，所以原型链的终点时Object.prototype.__proto__，而Object.prototype.__proto__===null。
 *      所以原型链的终点是null
 */
console.log(Object.prototype.__proto__); // null

/**
 * 如何获取对象非原型链上的属性
 *      1.使用hasOwnProperty()方法可以判断属性有没有在对象上(原型链上的不算)
 *      2.(attribute in obj)这样的如果在对象上没找到是会去它的原型链上寻找，平常使用时可能会稍微注意下
 */

function Animal() {}
Animal.prototype.name = '豆包';
const cate = new Person();
console.log(Animal.hasOwnProperty('name')); // true
console.log(cate.hasOwnProperty('name')); // false
