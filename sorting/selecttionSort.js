// ----------------- SELECTION SORT ----------------

// COMPLEXITY -----> BEST - O(n), WORST - O(n^2)

// In Selection Sort, we iterate through the array to find the minimum value
// and swap it to the front
// so at the end of each iteration, we will have lower values of the array in front

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp; 
}

function selectionSort(arr) {
  for(let i=0; i<arr.length; i++) {
    let minimum = i;
    for(let j=i+1; j<arr.length; j++) {
      if (arr[j] < arr[minimum]) minimum = j;
    }

    // if i is minimum, we can avoid unnecessary swap
    if (i !== minimum) {
      swap(arr, i, minimum);
    }
  }
  return arr;
}

console.log(selectionSort([4,1,9,5,40,33,-1]))
console.log(selectionSort([8,1,2,3,4,5,6]));
