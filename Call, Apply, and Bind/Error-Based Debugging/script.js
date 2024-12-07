const obj = {
  num: 42,
  getNum() {
    return this.num;
  },
};

// const detachedGetNum = obj.getNum;
console.log(obj.getNum()); // Bug: `this` is undefined
