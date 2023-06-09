/**
 * 桶排序：又称为箱排序，也是分布式排序法，他将元素分为不同的桶(较小的数组)，再使用一个简单的排序算法，例如插入排序(用来排序小数组的不错的算法),
 *        来对每个桶进行排序。然后，它将所有的桶合并为结果数组
 */
function bucketSort(arr, bucketSize) {
  if (arr.length < 2) {
    return arr;
  }
  const buckets = createBucket(arr, bucketSize);
  return sortBuckets(buckets);
}

function createBucket(arr, bucketSize) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = [];
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    const j = Math.floor((element - min) / bucketSize);
    buckets[j].push(element);
  }
  return buckets;
}

function sortBuckets(arr) {
  const sortArr = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index]) {
      inserSorter(arr[index]);
      sortArr.push(...arr[index]);
    }
  }
  return sortArr;
}

// 插入排序
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

const arr = bucketSort([5, 4, 3, 2, 6, 1, 7, 100, 9, 8], 3);
console.log(arr);
