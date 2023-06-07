// 代理模式：为其他对象提供一种代理以控制对这个对象的访问
// 代理模式使得代理对象控制具体对象的引用。代理几乎可以是任何对象、文件、资源、内存中的对象，或者一些难以复制的东西
const obj = {};
const proxyObj = new Proxy(obj, {
  get(target, key) {
    console.log('get', target[key]);
    return target[key];
  },
  set(target, key, value) {
    console.log('set', target, key, value);
    if (key === 'name') {
      target[key] = 'chuze';
    } else {
      target[key] = value;
    }
  },
});

proxyObj.name = 'yangmy';
proxyObj.name;
