/*
8. Convert the person object into a nested array nestedPerson, 
containing the same key-value pairs.
*/

let person = {
    title: 'Duke',
    name: 'Nukem',
    age: 33
};

let nestedPerson = [];

for (let key in person) {
    nestedPerson.push([key, person[key]]);
}

console.log(nestedPerson);

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]