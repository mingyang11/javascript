Array.prototype.ForEach = function (fun) {
  if (!Array.isArray(this)) {
    throw new Error('type Error');
  }

  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    fun(element);
  }
};
