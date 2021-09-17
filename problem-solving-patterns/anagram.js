// ----------QUESTION------------
// Given two strings, write a function to determine
// whether the second string is an anagram of first or not.
// An anagram is a word/phrase/sentence formed by re-arranging
// the letters of another, such as cinema, formed from iceman.

// Here also we can use frequency counter problem solving approach.

function validAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    let lookup = {};

    // create an object with each letter of the string as key
    // and its occurrances as value
    str1.split('').forEach(letter => {
        lookup[letter] = (lookup[letter] + 1) || 1
    });

    // loop through the second string
    for(let i=0; i<str2.length; i++) {
        const letter = str2[i];
        // if a character is not there in the lookup object
        // or if its occurrance is 0, return false
        if(!lookup[letter]) {
            return false;
        } else {
            // if a match is found, decrement the occurrance value by 1 in the lookup object
            lookup[letter] = lookup[letter] - 1;
        }
    }

    return true;
};

console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true