/**
 * 1.观察者模式包含观察目标和观察者两类对象
 * 2.一个目标可以有任意数目的与之相依赖的观察者
 * 3.一旦观察目标状态发生改变，所有的观察者都将得到通知
 * 优势：目标与观察者功能耦合度降低，专注自身功能逻辑；观察者被动接收更新，时间上解耦，实时接收目标者更新状态
 * 缺点：观察者模式虽然实现了对象间依赖关系的低耦合，但却不能对事件通知细分，如“筛选通知”,"指定主题事件通知"
 */

// 目标
class Subject {
  constructor() {
    this.observers = [];
  }
  //   添加观察者
  add(observer) {
    this.observers.push(observer);
  }
  //   通知观察者
  notify() {
    this.observers.forEach((item) => {
      item.update();
    });
  }
  //   移除观察者
  remove(observer) {
    this.observers = this.observers.filter((item) => item !== observer);
  }
}

// 观察者
class Observer {
  constructor(name) {
    this.name = name;
  }
  update() {
    console.log('update', this.name);
  }
}

const sbject = new Subject();
const observer1 = new Observer('chu');
const observer2 = new Observer('zhe');
sbject.add(observer1);
sbject.add(observer2);
setTimeout(() => {
  sbject.remove(observer1);
}, 1000);
setTimeout(() => {
  sbject.notify();
}, 2000);
