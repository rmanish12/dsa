function customFilter(cb) {
  var res = [];
  for(var i=0; i<this.length; i++) {
    if(cb(this[i], i, this)) {
      res.push(this[i])
    }
  }
  return res;
}

Array.prototype.customFilter = customFilter;

var arr = [1, 2, 4, 5, 6, 8];

const result = arr.filter((item) => {
  return item%2 === 0;
});

console.log(result)