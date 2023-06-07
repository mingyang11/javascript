function fff(val) {
  if (typeof val === 'object') {
    const typeData = Object.prototype.toString.call(val);
    const a = typeData.split(' ')[1];
    const b = a.split(']')[0];
    return b.toLowerCase();
  } else {
    return typeof val;
  }
}
console.log(fff(null));
console.log(fff(function name() {}));
console.log(fff([]));
console.log(fff({}));
