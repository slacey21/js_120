/* eslint-disable max-lines-per-function */
const VOWELS = ['a', 'e', 'i', 'o', 'u'];

function countAdjacentConsonants(word) {
  let currConsonantCount = 0;
  let maxConsonantCount = 0;

  for (let i = 0; i < word.length - 1; i += 1) {
    if ((!VOWELS.includes(word[i])) && (!VOWELS.includes(word[i + 1]))) {
      if (currConsonantCount === 0) {
        currConsonantCount += 2;
      } else {
        currConsonantCount += 1;
      }
    }
    if (((VOWELS.includes(word[i])) || (VOWELS.includes(word[i + 1]))) ||
            (i === word.length - 2)) {
      if (currConsonantCount > maxConsonantCount) {
        maxConsonantCount = currConsonantCount;
        currConsonantCount = 0;
      }
    }
  }
  return maxConsonantCount;
}


function sortStringsByConsonants(inputStrings) {
  // eslint-disable-next-line max-len
  let sortedStrings = inputStrings.sort((a, b) => countAdjacentConsonants(b) - countAdjacentConsonants(a));

  return sortedStrings;
}

// console.log(countAdjacentConsonants('')); // expected 0
// console.log(countAdjacentConsonants('a')); // expected 0
// console.log(countAdjacentConsonants('aa')); // expected 0
// console.log(countAdjacentConsonants('baa')); // expected 0
// console.log(countAdjacentConsonants('bbaa')); // expected 2
// console.log(countAdjacentConsonants('bbbaa')); // expected 3
// console.log(countAdjacentConsonants('saltpan')); // expected 3
// console.log(countAdjacentConsonants('month')); // expected 3

console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']