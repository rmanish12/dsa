// ------------QUESTION------------
// TEST CASE: [1,2,3,2], [1,]
// Write a function called same() that accepts two arrays.
// It should return true if every value in the first array
// has its squared value in the second array.
// The frequency of the values must be same.


// this approach uses a nested loop taking its complexity to O(n^2)
// although it seems there is only one loop
// however, arr.indexOf() also works on loop
function same_naive(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for (let i=0; i < arr1.length; i++) {
        const correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) return false;

        arr2.splice(correctIndex, 1);
    }
    return true;
}

// this approach does not use nested loop
// just a for loop 3 times
// hence reducing the complexity to O(n)
function same_refactored(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {}, frequencyCounter2 = {};

    // loop through an array and mark entries for each key
    // if key does not exits, initiate it with 0 and increment 1
    // or increment 1 to the existing frequency counter
    for(let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    };

    for(let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    // now loop through the first counter object
    for(let key in frequencyCounter1) {
        // if the sqaure value key doesn't exist in second counter object, return false
        if (![key ** 2] in frequencyCounter2) return false;

        // if the number of occurrences of key in array 1 and its squared value key in array2
        // does not match, return false
        if(frequencyCounter1[key] !== frequencyCounter2[key**2]) return false;
    };

    return true;
}

console.log(same_refactored([1,2,3,2,5], [1,9,4,4,11]));