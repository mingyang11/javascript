// 能够将一个单独的对象拥有公共/私有的方法和变量，从而屏蔽来自全局作用域的特殊部分。这个可以减少我们的函数名与在其他页面中其他脚本区域内定义的函数名冲突的可能性
// 1. 闭包: 定义在方法体内的变量不会被回收
var testModule = (function () {
  let num = 0;
  let str = 'asda';
  return {
    name: str,
    add: function () {
      return num++;
    },
  };
})();
console.log(testModule);

// 2.模块化,es6后添加
const count = 0;
function increse() {
  return ++count;
}
export default {
  count,
  increse,
};
