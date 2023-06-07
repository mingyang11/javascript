// 1.保证一个类仅有一个实例，并提一个访问它的全局访问点
// 2.主要解决一个全局使用的频繁地创建和销毁，占用内存的问题
// 闭包版
const singleton = (function () {
  let instance = undefined;
  function User(name, age) {
    this.name = name;
    this.age = age;
  }
  return function (name, age) {
    if (!instance) {
      instance = new User(name, age);
    }
    return instance;
  };
})();

console.log(singleton('yangmy', 31)); // User { name: 'yangmy', age: 31 }
console.log(singleton('chuze', 18)); // User { name: 'yangmy', age: 31 }

// class版
class SingleDog {
  constructor() {}
  static getInstance() {
    if (!SingleDog.instance) {
      SingleDog.instance = new SingleDog();
    }
    return SingleDog.instance;
  }
  getItem(name) {
    return this[name];
  }
  setItem(name, value) {
    this[name] = value;
  }
}

const dog1 = SingleDog.getInstance();
const dog2 = SingleDog.getInstance();

dog1.setItem('小黄', '大狗子');
console.log(dog1.getItem('小黄')); // 大狗子
console.log(dog2.getItem('小黄')); // 大狗子
