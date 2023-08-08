function doubleNumbers(numArray) {
  for (let i = 0; i < numArray.length; i += 1) {
    numArray[i] *= 2;
  }
}

let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers);
console.log(myNumbers);