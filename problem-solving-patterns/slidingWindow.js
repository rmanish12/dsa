// ------------QUESTION------------
// Write a function called maxSubarraySum() which accepts an
// array of integers and a number n. The function should
// calculate the maximum sum of n consecutive elements of the array.


// Going by the naive approach, we use nested loop, taking its complexity to O(n^2)
function maxSubarraySumNaive(arr, n) {
    if (n > arr.length) return null;

    let max = -Infinity;

    for(let i=0; i<arr.length-n+1; i++) {
        temp = 0;
        for(let j=0; j<n; j++) {
            temp += arr[i+j];
        }

        if (temp>max) {
            max = temp;
        }
    }
    return max;
}

console.log(maxSubarraySumNaive([1,2,5,2,8,1,5], 2)); // 10
console.log(maxSubarraySumNaive([1,2,5,2,8,1,5], 4)); // 17
console.log(maxSubarraySumNaive([4,2,1,6], 1)); // 6
console.log(maxSubarraySumNaive([4,2,1,6,2], 4)); // 13
console.log(maxSubarraySumNaive([], 4)); // null

console.log("------REFACTORED-------")

// Refactoring the code with sliding window technique, we use one loop
// hence reducing its complexity to O(n)
function maxSubarraySum(arr, n) {
    if (n > arr.length) return null;

    let tempSum = 0, maxSum = 0;

    for(let i=0; i<n; i++) {
        maxSum += arr[i]; 
    }
    
    tempSum=maxSum;
    for(let i=n; i<arr.length; i++) {
        tempSum = tempSum - arr[i-n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,5], 2)); // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)); // 17
console.log(maxSubarraySum([4,2,1,6], 1)); // 6
console.log(maxSubarraySum([4,2,1,6,2], 4)); // 13
console.log(maxSubarraySum([], 4)); // null