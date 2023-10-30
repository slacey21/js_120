// 5. Count the number of elements in scores that are 100 or above.

let scores = [96, 47, 113, 89, 100, 102];

let highScores = scores.reduce((total, curr) => {
    return total = curr >= 100 ? total += 1 : total += 0;
}, 0)

console.log(highScores);


let highScores_2 = scores.reduce((total, curr) => {
    if (curr >= 100) return total += 1;
    return total;
}, 0)

console.log(highScores_2);