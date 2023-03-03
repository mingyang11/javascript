let obj = { name: null, age: '' };
console.log(JSON.stringify(obj));

function fn(name, age, grid) {
  // argements是一个对象，他的属性是从0开始组件递增的数字，有callee和length属性，但是却没有数组常见的属性
  console.log(arguments, 'arguments');
  console.log(Object.values(arguments), 'arguments');
  console.log(Array.from(arguments), 'from');
  console.log(Array.from([...arguments]), 'from');
  console.log(Array.prototype.concat.apply([], arguments));
}

// fn(1, 2, 3, 4);

console.log(
  encodeURIComponent(
    'https://www.yuque.com/cuggz/interview/vgbphi#f6372b4343787b28c76af9fcec864423'
  )
);
