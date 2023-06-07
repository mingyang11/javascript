Array.prototype.MyReduce = function (fun, ...args) {
  let pre;
  let start = 0;
  if (args.length) {
    pre = args[0];
  } else {
    pre = this[0];
    start = 1;
  }

  for (let index = start; index < this.length; index++) {
    pre = fun(pre, this[index]);
  }
  return pre;
};
const sum = [1, 2, 3].MyReduce((a, b) => {
  return a + b;
});
console.log(sum);
