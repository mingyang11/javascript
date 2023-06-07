/**
 * 找到数据结构中的最小值并将其放到第一位，然后找到第二小的并将其放在第二位，以此类推
 */
function SelectSort(arr) {
  const { length } = arr;
  let minIndex;
  for (let index = 0; index < length; index++) {
    minIndex = index;
    for (let i = index; i < length; i++) {
      if (arr[minIndex] > arr[i]) {
        minIndex = i;
      }
    }
    const temp = arr[index];
    arr[index] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(
  SelectSort([
    6, 6, 8, 99, 8, 45, 52, 3, 1, 3, 21, 4, 51, 123, 45, 2, 2, 3, 4, 12, 1, 34,
  ])
);
