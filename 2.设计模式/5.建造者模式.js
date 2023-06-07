class Navbar {
  init() {
    console.log('navbar-init');
  }
  getData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('navbar-getData');
        resolve(true);
      }, 1000);
    });
  }
  render() {
    console.log('navbar-render');
  }
}

class List {
  init() {
    console.log('List-init');
  }
  getData() {
    console.log('List-getData');
  }
  render() {
    console.log('List-render');
  }
}

// 1.首先创建一个类
// 2.类中声明一个方法，方法接受一个实例
// 3.然后调用实例的方法

/**
 * 这里要求创建方法接受的类都要有所调用的方法
 */
class Creator {
  static async startBuild(builder) {
    await builder.init();
    await builder.getData();
    await builder.render();
  }
}

// 每次调用创建方法都相当于创建了一个类，然后将类的方法统一执行了一遍，省去了创建类调用的步骤。
Creator.startBuild(new Navbar());
Creator.startBuild(new List());
