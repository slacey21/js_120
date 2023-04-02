/* 

3. Implement a function repeat that repeats an input string a given 
number of times, as shown in the example below; without using the pre-defined 
string method String.prototype.repeat().

*/

function repeat(reps, str) {
    let repeatStr = '';
    for (let i = 0; i < reps; i++) {
        repeatStr += str;
    }
    console.log(repeatStr);
}



repeat(3, 'ha'); // 'hahaha'