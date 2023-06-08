function countSorter(arr) {
  // 1.找到数组的最大值
  const maxVal = Math.max(...arr);
  // 2.创建maxVal+1个空数组
  const saveArr = new Array(maxVal + 1);

  // 3.循环arr，向saveArr里面添加(这里索引实际是数值，数值代表索引(实际的数值)出现的次数)
  arr.forEach((element) => {
    if (!saveArr[element]) {
      saveArr[element] = 0;
    }
    saveArr[element] = saveArr[element] + 1;
  });

  const newArr = [];
  let yIndex = 0;
  saveArr.forEach((item, index) => {
    while (item) {
      newArr[yIndex] = index;
      yIndex++;
      item--;
    }
  });
  return newArr;
}

const arr = [4, 3, 5, 6, 7, 43, 3, 4, 5, 6, 7, 5, 2, 3, 4, 21, 5, 43, 2];
const sortedArr = countSorter(arr);
console.log(sortedArr);
