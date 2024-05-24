/*
Rewrite the following code using classic JavaScript syntax:

function foo([ one, , three ]) {
  return [
    three,
    5,
    one,
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let [ bar, qux, baz ] = result;
*/

function foo(arr) {
  let one = arr[0];
  let three = arr[2];
  return [
    three,
    5,
    one,
  ];
}

let array = [1, 2, 3];
let result = foo(array);
let bar = result[0];
let qux = result[1];
let baz = result[2];
