// What do you think the following code will output?

let nanArray = [NaN];

console.group(nanArray[0] === NaN);

// This will output false because NaN is the only value
// that does not equal itself


// To reliably test if a value is NaN, use Number.isNaN()