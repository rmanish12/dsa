// Find the number of occurrance of a short string in a given long string

function substringSearch(longStr, shortStr) {
  let count = 0;
  for (let i=0; i<longStr.length; i++) {
    for (let j=0; j<shortStr.length; j++) {
      if (shortStr[j] !== longStr[i+j]) break;
      if (j === shortStr.length - 1) count++;
    }
  }
  return count;
}

const longStr = 'lorie loled';
console.log(substringSearch(longStr, 'lol'));
console.log(substringSearch(longStr, 'lo'));