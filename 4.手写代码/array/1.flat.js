Array.prototype.MyFlat = function (deep = true) {
  let arr = this;
  while (arr.some((item) => Array.isArray(item)) && deep) {
    arr = [].concat(...arr);
    deep--;
  }
  return arr;
};

const arr = [1, 2, [3, 4, 5, [6, 7, 8, [9, 10]]]];
const flatedArr = arr.MyFlat(1);
console.log(flatedArr);
