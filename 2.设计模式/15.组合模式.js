/**
 *组合模式在对象间形成树形结构
 *组合模式中基本对象和组合对象被仪一致对待
 *无需关心对象有多少层，调用时只需要在根部调用
 */
function Folder(folder) {
  this.folder = folder;
  this.list = [];
}

Folder.prototype.add = function (folder) {
  this.list.push(folder);
};
Folder.prototype.scan = function () {
  console.log('扫描文件夹', this.folder);
  this.list.forEach((item) => {
    item.scan();
  });
};

function File(file) {
  this.file = file;
}
File.prototype.scan = function () {
  console.log('开始扫描文件', this.file);
};

// 根文件夹
const rootFolder = new Folder('root');
// 子文件夹
const htmlFolder = new Folder('html');
const cssFolder = new Folder('css');
const reactFolder = new Folder('react');

// 文件
const html1 = new File('html1');
const html2 = new File('html2');

const css1 = new File('css1');
const css2 = new File('css2');

const react1 = new File('react1');
const react2 = new File('react2');

// 添加文件
htmlFolder.add(html1);
htmlFolder.add(html2);

cssFolder.add(css1);
cssFolder.add(css2);

reactFolder.add(react1);
reactFolder.add(react2);
// 添加目录
rootFolder.add(htmlFolder);
rootFolder.add(cssFolder);
rootFolder.add(reactFolder);

rootFolder.scan();
