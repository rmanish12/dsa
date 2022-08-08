function customForEach(cb)  {
  for (var i=0; i<this.length; i++) {
    cb(this[i], i, this)
  }
}

Array.prototype.customForEach = customForEach;

const arr = [1, 2, 3];

arr.customForEach((item) => {
  console.log(item*2);
})