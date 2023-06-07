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
