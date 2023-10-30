// print the name, age and gender of each family member

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

for (let member in munsters) {
  let memberName = member;
  let memberAge = munsters[member]['age'];
  let memberGender = munsters[member]['gender'];
  console.log(`${memberName} is a ${memberAge}-year-old ${memberGender}.`);
}