function fibonacci(num) {
  let twoBack = 1;
  let oneBack = 1;
  let curr = 2;
  let iteration = 3;

  if (num < 3) {
    return 1;
  } else {
    while (iteration < num) {
      twoBack = oneBack;
      oneBack = curr;
      curr = twoBack + oneBack;
      iteration += 1;
    }
    return curr;
  }
}


console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050