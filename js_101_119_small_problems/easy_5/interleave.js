/*
Write a function that combines two arrays passed as arguments, and returns
a new array that contains all elements from both array arguments, with each
element taken in alternation.
*/

function interleave(arr1, arr2) {
  let interleaved = [];
  for (let idx = 0; idx < arr1.length; idx += 1) {
    interleaved.push(arr1[idx], arr2[idx]);
  }

  return interleaved;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]