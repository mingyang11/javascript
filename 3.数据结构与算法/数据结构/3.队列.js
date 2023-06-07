/**
 * 队列是什么：
 * 队列是一种特殊的线性表，特殊之处在于它仅只允许在表的前端进行删除操作，在表的后端进行插入操作。
 * 和栈一样，队列也是一种操作受限的线性表。进行插入操作的端成为队尾，进行删除操作的端称为队头，队列中没有元素时称为空队列
 *
 * 特点：先进先出
 */

// 数组实现版本
class Queue {
  list = [];
  //   删除
  dequeue() {
    return this.list.shift();
  }
  // 插入
  enquque(val) {
    this.list.push(val);
  }
  front() {
    return this.list[0];
  }
  end() {
    return this.list.at(-1);
  }
  isEmpty() {
    return !this.list.length;
  }
  size() {
    return this.list.length;
  }
  clear() {
    this.list.length = 0;
  }
}

const queue = new Queue();
queue.enquque('小明');
queue.enquque('大黄');
queue.enquque('楚泽');
queue.enquque('嘎嘎');
console.log(queue);
queue.dequeue();
console.log(queue);

console.log(queue.size());

// 对象实现版本

class QueueObj {
  // 队列本体
  #list = {};
  // 队头索引
  #lowCount = 0;
  // 队列索引
  #count = 0;
  dequeue() {
    if (this.#lowCount === this.#count) {
      throw new Error('队列为空,没有数据删除了');
    }
    const deletedData = this.#list[this.#lowCount];
    delete this.#list[this.#lowCount];
    this.#lowCount++;
    return deletedData;
  }
  enquque(val) {
    this.#list[this.#count] = val;
    this.#count++;
  }
  isEmpty() {
    return this.#lowCount === this.#count;
  }
  front() {
    return this.#list[this.#count];
  }
  size() {
    return this.#count - this.#lowCount;
  }
  logFun() {
    console.log(this.#list);
  }
}

const queueObj = new QueueObj();
queueObj.enquque('yangming');
queueObj.enquque('chuze');
queueObj.enquque('erfhuangf');
console.log(queueObj.size());
queueObj.logFun();
queueObj.dequeue();
console.log(queueObj.size());
queueObj.logFun();
queueObj.dequeue();
queueObj.dequeue();

// 真题：击鼓传花
function game(list, num) {
  const queue = new QueueObj();
  list.forEach((item) => {
    queue.enquque(item);
  });

  while (queue.size() > 1) {
    for (let index = 0; index < num; index++) {
      queue.enquque(queue.dequeue());
    }
    // queue.logFun();
    queue.dequeue();
  }
}
console.log(game(['chuze', 'yangmy', 'gangdan', 'xiaoming', 'gdx']));

/**
 * 双端队列：先进先出和后进先出都可以的队列叫双端队列
 */
class DeQueue {
  #items = {};
  #count = 0; // 队尾索引
  #lowCount = 0; // 队头索引
  isEmpty() {
    return this.#count === this.#lowCount;
  }

  removeBack() {
    if (this.isEmpty()) {
      return;
    }
    this.#count--;
    const deleted = this.#items[this.#count];
    delete this.#items[this.#count];
    return deleted;
  }
  removeFront() {
    if (this.isEmpty()) {
      return;
    }
    let deleted = this.#items[this.#lowCount];
    delete this.#items[this.#lowCount];
    this.#lowCount++;
    return deleted;
  }
  addBack(val) {
    this.#items[this.#count] = val;
    this.#count++;
  }
  addFront(val) {
    // 1.为空
    if (this.isEmpty()) {
      this.addBack(val);
    } else {
      // 2.lowCount>0
      if (this.#lowCount > 0) {
        this.#lowCount--;
        this.#items[this.#lowCount] = val;
      } else {
        // 3.lowCount === 0
        for (let i = this.#count; i > 0; i--) {
          this.#items[i] = this.#items[i - 1];
        }
        this.#items[0] = val;
        this.#count++;
      }
    }
  }
  peekFront() {
    if (this.isEmpty()) {
      return;
    }
    return this.#items[this.#lowCount];
  }
  peekBack() {
    if (this.isEmpty()) {
      return;
    }
    return this.#items[this.#count - 1];
  }
  size() {
    return this.#count - this.#lowCount;
  }
  log() {
    console.log(this.#items);
  }
}

const dequeue = new DeQueue();
dequeue.addFront('yang');
dequeue.log();
dequeue.addFront('ming');
dequeue.log();
// dequeue.removeFront();
// dequeue.removeBack();
// dequeue.log();
console.log(dequeue.peekFront());
console.log(dequeue.peekBack());
