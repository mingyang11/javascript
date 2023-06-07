class SetD {
  constructor() {
    this.item = {};
  }
  add(key) {
    if (key in this.item) {
      return false;
    } else {
      this.item[key] = key;
      return true;
    }
  }

  delete(key) {
    if (this.has(key)) {
      delete this.item[key];
      return true;
    }
    return false;
  }
  has(key) {
    return key in this.item;
  }
  clear() {
    this.item = {};
  }
  size() {
    return Object.keys(this.item).length;
  }
}
