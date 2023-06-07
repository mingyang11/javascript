// 用于检测构造函数的prototype属性是否出现在对象的原型链上

/**
 * @param {*} left 构造函数
 * @param {*} right 实例对象
 */
function instanceOf(left, right) {
  let proto = Object.getPrototypeOf(left); // 用于获取对象的原型
  const prototype = right.prototype; // 获取构造函数的prototype对象
  while (true) {
    // 当proto为null时说明已经在left的原型链走完了
    if (proto === null) return false;
    //   proto === prototype则right是在left的原型链上
    if (proto === prototype) return true;
    // 继续向left原型链上找
    proto = Object.getPrototypeOf(proto);
  }
}

function Animal() {}
function Person() {}

const Dog = new Animal();
const man = new Person();
console.log(instanceOf(Dog, Animal)); // true
console.log(instanceOf(Dog, Person)); // false
console.log(instanceOf(man, Person)); // true
console.log(instanceOf(man, Animal)); // false

// 1
// instanceOf就是判断目标1的原型是否出现在目标二的圆形脸上
// function insta(fn1, fn2) {
//   let proto = Object.getPrototypeOf(fn1);
//   const prototype = fn2.prototype;
//   while (true) {
//     if (proto === null) {
//       return false;
//     }
//     if (proto === prototype) {
//       return true;
//     }
//     proto = Object.getPrototypeOf(proto);
//   }
// }
