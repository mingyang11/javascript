function quickSort(arr) {
  const { length } = arr;
  if (length < 2) {
    return arr;
  }
  let base = arr[0];
  let minArr = arr.slice(1).filter((item) => item <= base);
  let maxArr = arr.slice(1).filter((item) => item > base);
  return quickSort(minArr).concat(base).concat(quickSort(maxArr));
}
