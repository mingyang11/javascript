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

//++++++++++++++++++++++++++++++
// 1.先找到数组中最大的数
// 2.创建最大数个数组
// 3.然后遍历数组，将数组的值作为索引，将数组的出现次数作为值来放到数组中
// 4.遍历这个处理后的数组，他会根据从小到大的数据打印，然后根据索引的值可以看出有多少个一样的数据
function countSort1(array) {
  const max = Math.max(...array);
  // 数组的索引是从0开始的
  const arr1 = new Array(max + 1);
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (arr1[element]) {
      arr1[element] = arr1[element] + 1;
    } else {
      arr1[element] = 1;
    }
  }
  const arr2 = [];
  for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    if (element) {
      for (let j = 0; j < element; j++) {
        arr2.push(index);
      }
    }
  }
  console.log(arr2, '1');
}
countSort1(arr);
