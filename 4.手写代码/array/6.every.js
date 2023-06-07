Array.prototype.MyEvery = function (fun) {
  let result = true;
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (!fun(element)) {
      result = false;
    }
  }
  return result;
};

const result = [1, 2, 3, 4, 54, 56].MyEvery((item) => {
  return item > 1;
});
console.log(result);
