Object.prototype.MyValues = function (obj) {
  const values = [];
  for (const key in obj) {
    obj.hasOwnProperty(key) && values.push(obj[key]);
  }
  return values;
};

const obj = { name: 'yangmy', nickName: 'chuze', age: 31, gender: 'man' };

const values = Object.MyValues(obj);
console.log(values);
