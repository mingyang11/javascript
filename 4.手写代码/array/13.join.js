Array.prototype.MyJoin = function (divider = ',') {
  const { length } = this;
  let str = '';
  for (let index = 0; index < length; index++) {
    str =
      index === 0 ? `${str}${this[index]}` : `${str}${divider}${this[index]}`;
  }
  return str;
};

console.log([1, 2, 3, 4].MyJoin());
