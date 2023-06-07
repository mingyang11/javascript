/**
 * 深拷贝：
 * 1.JSON.stringify(有限制)
 * 2.lodash.deepclone()
 */
// 3.手写
function deepClone(value) {
  if (!value || typeof value !== 'object') value;
  const newObj = Array.isArray(value) ? [] : {};
  for (const key in value) {
    newObj[key] =
      typeof value[key] === 'object' ? deepClone(value[key]) : value[key];
  }
  return newObj;
}

const obj = { name: 'chuze', age: 12, info: { a: 12, b: [1, 2, 3] } };
const copyData = deepClone(obj);
obj.info.a = 134;
console.log(copyData, '12');
