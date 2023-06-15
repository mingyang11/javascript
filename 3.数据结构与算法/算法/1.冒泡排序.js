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

console.log(bubbleSort([2, 3, 5, 2, 6]));

// 冒泡排序原理就是对数组进行双重遍历，比较相邻两个值的大小，如果前者比后者大则交换彼此的位置，每次遍历只能挑选出一个大的值放到后面，外层需要遍历n次，内层需要遍历时间复杂度是O(n*n)
function bubbleSorta(arr) {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    // 每次遍历之后遍历的位置都会少一位，因为每次遍历完一次后会找到一个最大值放到后面，所以后面的可以不用遍历
    for (let j = 0; j < length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const element = array[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = element;
      }
    }
  }
}
