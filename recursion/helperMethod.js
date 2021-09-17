// -----------QUESTION------------
// Write a function that accepts an array
// and returns an array with all the odd numbers in the input array


// recursion with the help of a helper method
function collectOddValues(arr) {
    let result = [];

    function helper(input) {
        if(input.length === 0) return;

        if(input[0]%2 !== 0) result.push(input[0]);
        
        helper(input.slice(1));
    };

    helper(arr);
    return result;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10]));

// pure recursive way
function collectOddVauesPureRecursion(arr) {
    let newArr = [];

    if (arr.length === 0) return newArr;

    if(arr[0] %2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

console.log(collectOddVauesPureRecursion([1,2,3,4,5,6,7,8,9,10]));