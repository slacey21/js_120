// Alan wrote the following function, which was intended to return all of the factors of number:

// function factors(number) {
//     let divisor = number;
//     let factors = [];
//     do {
//       if (number % divisor === 0) {
//         factors.push(number / divisor);
//       }
//       divisor -= 1;
//     } while (divisor !== 0);
//     return factors;
//   }


function factors(number) {
    let factors = [];
    if (number <= 0) {
        return factors;
    } else {
        for (divisor = number; divisor > 0; divisor--) {
            if (number % divisor === 0) {
                factors.push(number / divisor);
            }
        }
        return factors;
    }
}

console.log(factors(6)); // expected output: [1, 2, 3, 6]
console.log(factors(-1)); // expected output: []
console.log(factors(0)); // expected output: []
console.log(factors(1)); // expected output [1]


// BONUS: What is the purpose of the number % divisor === 0?
// This condition is used to check if the current value of divisor is a 
// factor of the number passed in as an argument to the factors function