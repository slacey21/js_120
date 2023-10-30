/*
9. Write code that capitalizes the words in the string 
'launch school tech & talk', so that you get the string 'Launch School Tech & Talk'.
*/

let str = 'launch school tech & talk';

let strArr = str.split(' ');
let newArr = [];

for (let i = 0; i < strArr.length; i++) {
    newArr[i] = strArr[i].replace(strArr[i][0], strArr[i][0].toUpperCase());
}

console.log(newArr.join(' '));