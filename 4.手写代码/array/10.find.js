/**
 * 返回匹配到的第一条数据
 */
Array.prototype.MyFind = function (fun) {
  for (let index = 0; index < this.length; index++) {
    if (fun(this[index], index, this)) {
      return this[index];
    }
  }
};

console.log(
  ['yang', 'ming', 'chu', 'ze', 'ming'].find((item) => item === 'ming')
);
