// Starting with the below string, show two different ways to put
// the expected "Four score and " in front of it.

let famousWords = "seven years ago...";

// method 1
console.log('Four score and ' + famousWords);

// method 2
let speechStart = 'Four score and ';
console.log(speechStart + famousWords);