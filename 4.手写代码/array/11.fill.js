Array.prototype.MyFill = function (value, start, end) {
  if (start) {
    // 起始位置都存在
    if (end) {
      for (let index = 0; index < this.length; index++) {
        if (index >= start && index < end) {
          this[index] = value;
        }
      }
    } else {
      // 只存在开始位置
      for (let index = 0; index < this.length; index++) {
        if (index >= start) {
          this[index] = value;
        }
      }
    }
  } else {
    // 只存在填充值
    for (let index = 0; index < this.length; index++) {
      this[index] = value;
    }
  }
  return this;
};
const arr = [12, 3, 4, 5, 56, 6, 7, 8, 9, 0, 0];
const filledData = arr.MyFill(1);
console.log(filledData);
