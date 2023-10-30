// Using the forEach method, write some code to output all vowels
// from the strings in the array. DOn;t use a for or while loop

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(arr => {
  arr.forEach(element => {
    element.split("").forEach(char => {
      if (['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())) {
        console.log(char);
      }
    });
  });
});