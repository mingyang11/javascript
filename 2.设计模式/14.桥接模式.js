// 桥接模式： 将抽象部分与它的实现部分分离，使他们都可以独立的变化
// 使用场景：一个类存在两个或多个独立变化的维度，且这两个维度都需要进行拓展
// 优点：抽象与实现隔离开，有助于独立地管理各组成部分
// 缺点：每使用一个桥接元素都要新增一次函数调用，这对应用程序的性能会有一些负面影响，提高了程序的复杂程度
function Audi1(engine) {
  this.engine = engine;
}

Audi1.prototype.plateForm = function () {
  console.log('audi1平台');
};
Audi1.prototype.loadEngine = function () {
  this.engine.run();
};

// 变化维度1
function V6() {
  this.run = function () {
    console.log('v6发动机');
  };
}

// 变化维度2
function V8() {
  this.run = function () {
    console.log('v8发动机');
  };
}

const audi1 = new Audi1(new V6());
audi1.plateForm();
audi1.loadEngine();

const audi2 = new Audi1(new V8());
audi2.plateForm();
audi2.loadEngine();
