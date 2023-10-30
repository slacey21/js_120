// Compute and display the total age of the male members of the family

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let maleMembers = Object.keys(munsters).filter(person => {
  return munsters[person]['gender'] === 'male';
});

let maleAge = maleMembers.reduce((totalAge, maleMunster) => totalAge += munsters[maleMunster]['age'], 0);

console.log(maleAge);