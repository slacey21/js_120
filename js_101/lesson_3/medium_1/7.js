// What is the output of the following code?
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);


/*
This will output 34. The messWithIt function is pass-by-value
since it deals with a primitive value. So the value of the answer
variable is changed. So 42-8 = 34
*/