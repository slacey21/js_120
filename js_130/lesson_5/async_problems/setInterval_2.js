// Write a function named startCounting that logs a number to the console
// every second, starting with 1. Each output number should be one greater
// than the previous one.

function startCounting() {
  let currNumber = 1;

  return setInterval(() => {
    console.log(currNumber);
    currNumber += 1;
  }, 1000);
}

function stopCounting(fnSetIntervalId) {
  clearInterval(fnSetIntervalId);
}


let counterId = startCounting();

stopCounting(counterId);