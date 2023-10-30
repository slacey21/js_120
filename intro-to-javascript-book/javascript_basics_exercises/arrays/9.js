/*
9. The destinations array contains a list of travel destinations.

Write a function that checks whether or not a particular destination 
is included within destinations, without using the built-in method 
Array.prototype.includes().

For example: When checking whether 'Barcelona' is contained in destinations, 
the expected output is true, whereas the expected output for 'Nashville' is false.
*/

let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
    'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
    'Marrakesh', 'New York City'
];


function contains(search, arr) {
    let matches = arr.filter(val => val === search);
    return matches.length > 0 ? true : false;
}

console.log(contains('Barcelona', destinations)); // true
console.log(contains('Nashville', destinations)); // false