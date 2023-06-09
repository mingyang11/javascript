Object.prototype.MyAssign = function (target, ...args) {
  if (Object.prototype.toString.call(target) !== '[object Object]') {
    throw new Error('target错误');
  }
  const res = Object(target);
  for (const object of args) {
    for (const key in object) {
      // if (Object.hasOwnProperty.call(object, key)) {
      //     const element = object[key];

      // }
      object.hasOwnProperty(key) && (res[key] = object[key]);
    }
  }
  return res;
};

const copy = Object.MyAssign({ name: 'chu' }, { age: 12 }, { geder: '12' });
console.log(copy);
