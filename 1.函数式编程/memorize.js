// 记忆函数：将函数处理一边，原理是使用闭包原理将计算过的值通过参数作为键名，结果作为值保存下来，下次执行时，如果参数一致则直接返回结果，不用计算
function memorise(fun) {
  const cache = {};
  return function () {
    let key = JSON.stringify(arguments);
    cache[key] = cache[key] || fun(...arguments);
    return cache[key];
  };
}
const add = (a, b) => {
  return a + b;
};
const memer = memorise(add);
console.log(memer(2, 3));
console.log(memer(3, 3));
console.log(memer(3, 3));
