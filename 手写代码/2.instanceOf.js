// 用来判断构造函数的prototype属性是否存在对象原型链种

function myInstanceOf(left, right) {
  let proto = Object.getPrototypeOf(left);
  let prototype = right.prototype;
  while (true) {
    if (!proto) false;
    if (proto === prototype) true;
    proto = Object.getPrototypeOf(proto);
  }
}
