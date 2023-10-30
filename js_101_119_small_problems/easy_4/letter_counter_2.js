/*
Modify the wordSizes function from the previous exercise to exclude
non-letters when determining word size. For instance, the word size
of "it's" is 3, not 4.
*/

function wordSizes(str) {
  let words = str.split(" ").map(word => word.replace(/[\W_]+/g, ""));
  let wordLengthObj = {};
  let wordLengths = words.map(word => word.length);

  wordLengths.forEach(wordLength => {
    if (wordLength === 0) {
      return;
    }

    if (!(wordLengthObj[wordLength])) {
      wordLengthObj[wordLength] = 1;
    } else {
      wordLengthObj[wordLength] += 1;
    }
  });

  return wordLengthObj;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}