// 代码执行前装饰器
Function.prototype.before = function (beforeFun) {
  const _this = this;
  return function () {
    beforeFun.apply(this, arguments);
    return _this.apply(this, arguments);
  };
};

// 代码执行后装饰器
Function.prototype.after = function (beforeAfter) {
  const _this = this;
  return function () {
    const result = _this.apply(this, arguments);
    beforeAfter.apply(this, arguments);
    return result;
  };
};

function logName() {
  console.log('function console');
}
const logBefore = logName.before(() => {
  console.log('function before');
});
logBefore();

const logAfter = logName.after(() => {
  console.log('function after');
});
logAfter();
