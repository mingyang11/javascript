Array.prototype.MySome = function (fun) {
  let result = false;
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (fun(element)) {
      result = true;
    }
  }
  return result;
};

const result = [1, 2, 32, 43, 5, 56].MySome((ele) => {
  return ele < 1;
});
console.log(result);
