// ----------------- BINARY SEARCH -----------------
// COMPLEXITY -----> BEST - O(n), BEST & AVERAGE - O(log n)
// SHORTCOMING ------> works only for sorted array

// Problem Statement
// Given a sorted array and an element to find, return its index
// If element not found, return -1

function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while(arr[middle] !== item && start <= end) {
    if (item > arr[middle]) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === item ? middle : -1;
}

const arr = [5, 10, 12, 17, 24, 30];
console.log(binarySearch(arr, 10));
console.log(binarySearch(arr, 24));
console.log(binarySearch(arr, 50));