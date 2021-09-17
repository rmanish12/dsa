// -------------QUESTION-------------
// Write a function sumZero() which accepts a sorted array
// of integers. It should find the first pair where the sum is 0.
// Return an array that includes both values that sum to 0
// or undefined if a pair does not exist

// Here the time complexity is O(n^2) because we are using nested loop
function sumZeroNaive(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
        }
    }
}

console.log(sumZeroNaive([-3, -2, -1, -0, 1, 2, 3]));
console.log(sumZeroNaive([-2, 0, 1, 3]));
console.log(sumZeroNaive([1, 2, 3]));

// Here we are using a single loop
// hence decreasing the complexity to O(n)
function sumZeroRefactored(arr) {

    // take two indices, one at the beginning and one at the end
    let left = 0;
    let right = arr.length - 1;

    // loop while left < right
    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) { // if sum is 0, return the values
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            // if sum is greater than 0, it could be possible that the previous index
            // value sums to 0, so decrement right index
            right--;
        } else {
            // if sum is less than 0, then there could be a pair value for left index
            // so increment left by 1
            left++;
        }
    }
}

console.log(sumZeroRefactored([-3, -2, -1, -0, 1, 2, 3]));
console.log(sumZeroRefactored([-2, 0, 1, 3]));
console.log(sumZeroRefactored([1, 2, 3]));