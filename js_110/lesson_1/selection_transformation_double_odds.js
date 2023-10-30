function doubleOddNumbers(numbers) {
  let doubledOdds = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (i % 2 === 0) {
      doubledOdds.push(numbers[i]);
    } else {
      doubledOdds.push(numbers[i] * 2);
    }
  }

  return doubledOdds;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(doubleOddNumbers(myNumbers));