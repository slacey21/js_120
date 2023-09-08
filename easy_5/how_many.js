/*
Write a function that counts the number of occurrences of each element in a
given array. Once counted, log each element alongside the number of occurrences.
Consider the words case sensitive e.g. ("suv" !== "SUV").
*/

function countOccurrences(words) {
  let wordCount = {}

  words.forEach(word => {
    if (wordCount.hasOwnProperty(word)) {
      wordCount[word] += 1;
    } else {
      wordCount[word] = 1;
    }
  });

  Object.keys(wordCount).forEach(word => {
    console.log(`${word} => ${wordCount[word]}`);
  })
}


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1