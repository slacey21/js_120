// Replace the invocation of countdown with an IIFE that produces the same
// results.

(function(repeatTimes) {
  for (let index = repeatTimes; index >= 0; index -= 1) {
    console.log(index);
  }
})(7);


// countdown(7)
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0