let rlSync = require('readline-sync');

function multiply() {
    firstNum = rlSync.question("Enter the first number: ");
    secondNum = rlSync.question("Enter the second number: ");
    let product = Number(firstNum) * Number(secondNum);
    console.log(`${firstNum} * ${secondNum}  = ${String(product)}`);
}

multiply();