/**
 * start: 开始截取的字符索引(包含此字符)
 * length: 截取的长度
 * start>length 返回空字符串
 * start<0 : start = 数组长度+start
 */

String.prototype.MySubstr = function (start, length) {
  start = start < 0 ? start + this.length : start;
  length = length ? length : this.length - start;
  let str = '';
  for (let index = start; index < start + length; index++) {
    const element = this[index];
    str = `${str}${element}`;
  }
  return str;
};
console.log('12121243123'.MySubstr(3, 5));
