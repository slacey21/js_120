// How does Array.prototype.fill work? Is it destructive? How can we find out?
let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);
console.log(arr);
/*
fill changes all elements within a range of indices in an array to a static 
value fill also changes array and returns the modified array 
(yes it is destructive)

In the code above, the call to fill will each index in arr from 1 up to, but not
including 5, with the value 1. So, the new arr array should be [1, 1, 1, 1, 1]


To find out, we can write 'console.log(arr);'


*/