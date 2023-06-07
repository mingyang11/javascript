/**
 * 将对象转化成键值对数组
 */
Object.prototype.MyEntries = function (data) {
  const entries = [];
  for (const key in data) {
    data.hasOwnProperty(key) && entries.push([key, data[key]]);
  }
  return entries;
};

console.log(
  Object.MyEntries({
    name: 'yang',
    age: 12,
    aa: 0,
    bb: undefined,
    cc: null,
    dd: false,
    ee: '',
  })
);
