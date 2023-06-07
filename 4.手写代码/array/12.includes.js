/**
 * 判断数组中是否包含某个元素
 * @param value :
 * @param start : 开始查找的位置
 */

Array.prototype.MyIncludes = function (value, start) {
  let startIndex = 0;
  if (start) {
    startIndex = start;
  }
  for (let index = startIndex; index < this.length; index++) {
    if (value === this[index]) {
      return true;
    }
  }
};
