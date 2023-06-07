/**
 * 1.观察者和目标要相互知道
 * 2.发布者和订阅者不需要相互知道，通过第三方实现调度，属于经过解耦合的观察者模式
 */
// 简洁版
const PubSub = {
  list: [],
  publish() {
    this.list.forEach((item) => item());
  },
  subscribe(cb) {
    this.list.push(cb);
  },
};

function testA() {
  console.log('A');
}
function testB() {
  console.log('B');
}

PubSub.subscribe(testA);
PubSub.subscribe(testB);
// PubSub.publish();

// 实现事件细分的版本
const PubSub1 = {
  list: {},
  //   发布
  publish(type) {
    if (type in this.list) {
      this.list[type].forEach((cb) => cb());
    } else {
      throw new Error('没有该事件');
    }
  },
  //  订阅
  subscribe(type, cb) {
    if (type in this.list) {
      this.list[type].push(cb);
    } else {
      this.list[type] = [cb];
    }
  },
  //   取消订阅
  unsubscribe(type, cb) {
    //   不带参数，取消所有
    if (!type && !cb) {
      this.list = {};
    }
    if (!this.list[type]) return;
    // 没有第二个参数取消当前类
    if (!cb) {
      this.list[type] = [];
    } else {
      this.list[type] = this.list[type].filter((item) => {
        return item !== cb;
      });
    }
  },
};

PubSub1.subscribe('A', testA);
PubSub1.subscribe('B', testB);
PubSub1.publish('A');
PubSub1.publish('B');
