function customReduce(cb, initialValue) {
  var accumulator = initialValue;

  for(var i=0; i<this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = cb(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
}

Array.prototype.customReduce = customReduce;

var arr = [1, 2, 3];

var sum = arr.customReduce((prevValue, currentValue) => {
  return prevValue + currentValue;
}, 0);

console.log(sum);