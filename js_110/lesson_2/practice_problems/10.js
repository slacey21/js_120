// Repeat the process from 10 but sort in descending order

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let copyOfArr = arr.map(subArr => {
  if (typeof subArr[0] === "string") {
    return [...subArr].sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));
  } else {
    return [...subArr].sort((a, b) => b - a);
  }
});
console.log(copyOfArr);
console.log(arr);