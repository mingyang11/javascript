/**
 * start: 开始截取的字符索引(包含此字符)
 * end:   结束截取的字符索引(不包含此字符)
 * start>end: 返回空字符串
 * start<0 : start = 数组长度+start
 */

String.prototype.MySlice = function (start, end) {
  if (start >= end) {
    return '';
  }
  start = start < 0 ? this.length + start : start;
  end = !end && end !== 0 ? this.length : end;
  let str = '';
  for (let index = start; index < end; index++) {
    const element = this[index];
    str = `${str}${element}`;
  }
  return str;
};
console.log('12121243123'.MySlice(0, 5));
