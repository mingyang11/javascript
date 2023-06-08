Object.prototype.MyKeys = function (obj) {
  const keys = [];
  for (const key in obj) {
    obj.hasOwnProperty(key) && keys.push(key);
  }
  return keys;
};

console.log(Object.MyKeys({ name: 'a123', age: '21' }));
console.log(Object.keys({ name: 'a123', age: '21', keys: '12' }));
