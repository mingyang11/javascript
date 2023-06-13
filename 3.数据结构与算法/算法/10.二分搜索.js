/**
 * 前提条件：传入的数组事先经过排序
 */
function binarySearch(value, array, start, end) {
  start = start || 0;
  end = end || array.length - 1;
  if (start <= end && value >= array[start] && value <= array[end]) {
    //
    if (array[start] === value) {
      return start;
    }
    if (array[end] === value) {
      return end;
    }
    let mid = Math.ceil((end + start) / 2);
    if (array[mid] === value) {
      return mid;
    } else if (array[mid] > value) {
      return binarySearch(value, array, start, mid - 1);
    } else {
      return binarySearch(value, array, mid + 1, end);
    }
  }
  return -1;
}
