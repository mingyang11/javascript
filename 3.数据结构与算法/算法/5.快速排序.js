function quickSort(arr) {
  const { length } = arr;
  // 只有一个元素或者没元素的时候不需要排序
  if (length < 2) {
    return arr;
  }
  let base = arr[0];
  // 获取当前数组中比base小的数据
  let minArr = arr.slice(1).filter((item) => item <= base);
  // 获取当前数组中比base大的数据
  let maxArr = arr.slice(1).filter((item) => item > base);
  return quickSort(minArr).concat(base).concat(quickSort(maxArr));
}

const numArr = [5, 3, 56, 7, 3];
// 23, 6, 78, 3, 4, 23, 7, 8, 43, 2, 1, 6, 9, 0
console.log(quickSort(numArr));

// 原理是拿到一个基准值，然后根据这个基准值来分割数组为大小两个数组，然后使用回调队数组再次进行分割
// 直到这个数组被分割成一个个只有一个元素的小数组，然后对其concat，其中跳出回调的关键是数组的长度小于等于1
function quickSort1(array) {
  const { length } = array;
  if (length <= 1) {
    return array;
  }
  const base = array[0];
  const minArr = array.slice(1).filter((item) => item < base);
  const maxArr = array.slice(1).filter((item) => item >= base);
  return quickSort1(minArr).concat(base).concat(quickSort1(maxArr));
}
