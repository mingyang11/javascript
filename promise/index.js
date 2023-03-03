function getJson() {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    // 新建一个http请求
    xhr.open('POST', 'http://10.199.0.53:3000/mock/469/jcsx/saveDwnsr');
    // 设置状态监听函数
    xhr.onreadystatechange = function () {
      console.log(xhr.readyState);
      if (xhr.readyState !== 4) {
        return;
      }
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject('出错');
      }
    };
    // 响应数据的数据类型
    xhr.responseType = 'json';
    // 设置请求头信息
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.send();
  });
  return promise;
}
getJson().then((res) => {
  console.log(res, 'res');
});
