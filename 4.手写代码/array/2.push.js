Array.prototype.Push = function () {
  for (const key in arguments) {
    this[this.length] = arguments[key];
  }
  return this.length;
};

let arr = [1, 2, 3];
arr.Push(4, 5);
console.log(arr);
