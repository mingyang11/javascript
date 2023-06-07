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
