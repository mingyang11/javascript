function inserSorter(arr) {
  const { length } = arr;
  let temp;
  for (let index = 1; index < length; index++) {
    temp = arr[index];
    let j = index;
    while (j > 0 && arr[j - 1] > temp) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

console.log(inserSorter([5, 3, 2, 6, 2]));

// 原理：在循环时保留到当前值如果找到比当前值大的，就将大的值的位置缓过来，否则不动，从开头遍历少的次数开始之后到最后遍历所有数组
function inser(arr) {
  const { length } = arr;
  for (let index = 0; index < length; index++) {
    const element = arr[index];
    let j = index;
    // 判断条件1: 如果j不大于0就代表是从第一个开始的，不需要进行排序
    // 判断条件2: 判断j的前一个是否大于当前位置的值，如果小于代表不需要排序
    while (j > 0 && arr[j - 1] > element) {
      //
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = element;
  }
  return arr;
}
console.log(inser([5, 3, 2, 6, 2]));
