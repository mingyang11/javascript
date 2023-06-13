/**
 * 顺序搜索
 * @description  顺序或线性搜索是最基本的搜索算法。它的机制是，将每一个数据结构中的元素和我们要找的元素做比较。
 *               顺序搜索的最低效的一种搜索算法
 */

function search(arr, val) {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (element === val) {
      return index;
    }
  }
  return -1;
}
