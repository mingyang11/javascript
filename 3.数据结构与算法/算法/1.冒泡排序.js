/**
 * 冒泡排序比较相邻的两个项，如果第一个比第二个大，则交换他们。元素项向上移动至正确的顺序，就好像气泡升至表面一样，冒泡排序因此得名
 */

function bubbleSort(arr) {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([2, 3, 51, 34, 5, 2, 6, 6, 424, 23114, 21]));
