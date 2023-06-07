Array.prototype.MyFindIndex = function (fun) {
  for (let i = 0; i < this.length; i++) {
    if (fun(this[i], i, this)) {
      return i;
    }
  }
  return -1;
};

console.log(
  [1, 2, 3, 4, 5, 6, 7].MyFindIndex((item) => {
    return item > 5;
  })
);
