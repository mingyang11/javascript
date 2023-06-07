/**
 * 将键值对数组转换为对象
 */

Object.prototype.MyFromEntries = function (arr) {
  const obj = {};
  for (const [key, value] of arr) {
    obj[key] = value;
  }
  return obj;
};

console.log(
  Object.MyFromEntries([
    ['name', 'yangmy'],
    ['age', 31],
    ['gender', '男'],
  ])
);
