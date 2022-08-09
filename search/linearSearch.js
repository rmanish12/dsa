// ----------------- LINEAR SEARCH ---------------
// COMPLEXITY -----> BEST - O(1), AVERAGE & WORST - O(n)

// Problem Statement
// Given an array and an element to find, return its index
// If element not found, return -1

function linearSearch(arr, item) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === item) return i;
  }
  return -1;
}

const arr = [4, 5,2,20,15,16];
console.log(linearSearch(arr, 16));
console.log(linearSearch(arr, 40));