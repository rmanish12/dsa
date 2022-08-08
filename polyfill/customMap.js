function customMap(cb) {
  var res = [];
  for(var i=0; i<this.length;i++) {
    res.push(cb(this[i], i, this))
  }
  return res;
}

Array.prototype.customMap = customMap;

var arr = [1, 2, 3];
const result = arr.customMap((item) => {
  return item*2;
});

console.log(result)