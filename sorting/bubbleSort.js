// --------------------- BUBBLE SORT ---------------------

// COMPLEXITY -----> BEST - O(n), WORST - O(n^2)

// In bubble sort, starting from index 0, we compare two consecutive number
// If the second number is greater, we swap those numbers
// so at the end of one iteration we will have the largest number in the end
// we continue this cycle till all the numbers are sorted

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp; 
}

function bubbleSort(arr) {
  // maintain a variable to check if any swap happend in the previous step
  // if no swaps happened, it means array is already sorted
  // so we will break out of the loop
  let noSwap;

 for (let i=arr.length; i>0; i--) {
  noSwap = true;
  // at the end of each iteration, the last element would be at its correct place
  // so we don't need to do anything with that
  // hence looping through the elements before that
  for (let j=0; j<i-1; j++) {
    if (arr[j] > arr[j+1]) {
      swap(arr, j, j+1);
      noSwap = false;
    }
  }
  if (noSwap) break;
 }
 return arr;
}

const arr = [4,1,9,5,40,33,-1];

console.log(bubbleSort(arr));
console.log(bubbleSort([8,1,2,3,4,5,6]));