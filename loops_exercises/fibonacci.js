// recursive function for fibonacci

function fibonacci(num) {
    if (num < 2) return num; // fibonacci(0) = 1 and fibonacci(1) = 1
    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(12));