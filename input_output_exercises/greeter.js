let rlSync = require('readline-sync');

// function to get user's first name
function getName(namePrompt) {
    let name = rlSync.question(namePrompt);
    return name;
}
let firstName = getName("What is your first name? ");
let lastName = getName("What is your last name? ");
console.log(`Hello, ${firstName + ' ' + lastName}!`);