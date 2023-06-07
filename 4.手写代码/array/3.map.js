Array.prototype.Map = function (fn) {
  if (!Array.isArray(this)) {
    throw new Error('Error');
  }
  const res = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    res.push(fn(element));
  }
  return res;
};

const arr = [1, 2, 3, 4, 5, 6].Map((res) => {
  return res + 1;
});

console.log(arr);
