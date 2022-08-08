// -------------- CUSTOM PROMISE --------------
function CustomPromise(executor) {

  var onResolve;
  var onReject;
  var value;
  var error;
  var isFulfilled = false;
  var isRejected = false;
  var isCalled = false;

  function resolve(val) {
    isFulfilled = true;
    value = val;
    // for sync operations, resolve will be called before then, where this condition will fail
    // for async operations, resolve will be called after .then, hence the callback will get called
    if (typeof onResolve === 'function') {
      onResolve(value)
    }
  }

  function reject(err) {
    isRejected = true;
    error = err;
    if (typeof onReject === 'function') {
      onReject(error);
    }
  }

  this.then = function(cb) {
    onResolve = cb;
    // in sync operation, resolve() will be called making isFulfilled = true
    // and because isCalled will be false
    // callback will get executed here
    if (isFulfilled && !isCalled) {
      isCalled = true;
      onResolve(value)
    }
    return this;
  }

  this.catch = function(cb) {
    onReject = cb;
    if (isFulfilled && !isRejected) {
      isCalled = true;
      onReject(error)
    }
    return this;
  }

  executor(resolve, reject);
}

CustomPromise.resolve = function(val) {
  return new CustomPromise((resolve, reject) => resolve(val))
};

CustomPromise.reject = function(err) {
  return new CustomPromise((resolve, reject) => reject(err))
};

// ------------------- PROMISE.ALL --------------------
CustomPromise.all = function(promises) {
  var fulfilledPromises = [];
  var result = [];

  function executor(resolve, reject) {
    promises.forEach((promise, index) => {
      promise
        .then(val => {
        fulfilledPromises.push(true)
        result[index] = val;

        if (fulfilledPromises.length === promises.length) {
          return resolve(result)
        }
        })
        .catch(err => {
          return reject(err)
        })
    })
  }

  return new CustomPromise(executor);
}

// ----------------- PROMISE.ALLSETTLED ------------
CustomPromise.allSettled = function(promises) {
  var result = [];

  function executor(resolve, reject) {
    promises.forEach((promise, index) => {
      promise
        .then(val => {
          result.push({ status: 'fulfilled', value: val})
          if (result.length === promises.length) {
            return resolve(result)
          }
        })
        .catch(err => {
          result.push({ status: 'rejected', reason: err})
          if (result.length === promises.length) {
            return resolve(result)
          }
        })
    })
  }

  return new CustomPromise(executor);
}

// ----------------- PROMISE.ANY ----------------------
CustomPromise.any = function(promises) {
  var errorPromises = [];
  var successPromise = []

  function executor(resolve, reject) {
    promises.forEach((promise, index) => {
      promise
        .then(val => {
          successPromise.push(val)
          if (successPromise.length === 1) {
            return resolve(val)
          }
        })
        .catch(err => {
          errorPromises.push(err);
          if (errorPromises.length === promises.length) {
            return reject(new AggregateError('All promises were rejected'))
          }
        })
    })
  }

  return new CustomPromise(executor)
}

// sync operation
var myPromise1 = new CustomPromise((resolve, reject) => resolve(1000));
// myPromise1.then(res => console.log(res))

// async operation
var myPromise2 = new CustomPromise((resolve, reject) => {
  setTimeout(() => resolve(500), 2000)
});
// myPromise2.then(res => console.log(res))

// ------------------ PROMISE.ALL --------------------
// CustomPromise.all([myPromise1, myPromise2])
//   .then(([result1, result2]) => {
//     console.log(result1);
//     console.log(result2)
//   })

// ---------------- PROMISE.ALLSETTLED ---------------
// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
// const promises = [promise1, promise2];

// CustomPromise.allSettled(promises).
//   then((results) => results.forEach((result) => console.log(result)));


// --------------- PROMISE.ANY --------------------------
// const promise1 = Promise.reject(0);
// const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// const promises = [promise1, promise1, promise1];

// CustomPromise.any(promises)
//   .then((value) => console.log(value))
//   .catch((err) => console.error(err))

