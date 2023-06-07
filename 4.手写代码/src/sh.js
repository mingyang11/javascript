// 1. new Set()
const arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];
Array.from(new Set(arr));

//2. 遍历判断
const newArr = [];
arr.forEach((item) => {
  if (!newArr.includes(item)) {
    newArr.push(item);
  }
});
