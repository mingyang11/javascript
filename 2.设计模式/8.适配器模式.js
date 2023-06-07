class TencentMap {
  show() {
    console.log('腾讯地图');
  }
}
// 适配器
class TencentAdapter extends TencentMap {
  constructor() {
    super();
  }
  render() {
    this.show();
  }
}

class BaiduMap {
  display() {
    console.log('百度地图');
  }
}
// 适配器
class BaiduAdapter extends BaiduMap {
  constructor() {
    super();
  }
  render() {
    this.display();
  }
}

// 外部调用
function renderMap(map) {
  // 统一接口调用
  map.render();
}

// 适应适配器来实例化
renderMap(new TencentAdapter());
renderMap(new BaiduAdapter());
