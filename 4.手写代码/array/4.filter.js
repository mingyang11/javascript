Array.prototype.Filter = function (fun) {
  if (!Array.isArray(this)) {
    throw new Error('not is a Array');
  }
  const res = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    if (fun(element)) {
      res.push(element);
    }
  }
  return res;
};

const arr = [1, 2, 3, 4, 5, 6].Filter((res) => res > 3);
console.log(arr);
