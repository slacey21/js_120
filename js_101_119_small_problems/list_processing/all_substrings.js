/*
Write a function that returns a list of all substrings of a string.
Order the returned list by where in the string the substring begins.
This means that all substrings that start at index position 0 should come
first, then all substrings that start at index position 1, and so on.
Since multiple substrings will occur at each position, return the substrings
at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote in the
previous exercise:
*/

function substrings(str) {
  let subs = [];
  for (let idx = 0; idx < str.length; idx += 1) {
    leadingSubstring(str.slice(idx, str.length)).forEach(sub => subs.push(sub));
  }
  return subs;
}

function leadingSubstring(str) {
  let substrings = [];

  for (let idx = 1; idx <= str.length; idx += 1) {
    substrings.push(str.slice(0, idx));
  }

  return substrings.sort((a, b) => a.length - b.length);
}


console.log(substrings('abcde'));
console.log(substrings('madam'));