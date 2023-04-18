const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
let answer;

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(userChoice, computerChoice) {
    prompt(`You chose ${userChoice}, the computer chose ${computerChoice}`);
    if ((userChoice === 'rock' && computerChoice === 'scissors') || 
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')) {
        prompt('You win!');
    } else if ((userChoice === 'rock' && computerChoice === 'paper') || 
        (userChoice === 'paper' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'rock')) {
        prompt('Computer wins!');
    } else {
        prompt("It's a tie");
    }
}

do {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice)) {
        prompt("That's not a valid choice, please choose again.");
        choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    displayWinner(choice, computerChoice);

    prompt('Do you want to play again (y/n)?');
    answer = readline.question().toLowerCase();

    while (!['n', 'y'].includes(answer[0])) {
        prompt('Please enter "y" or "n".');
        answer = readline.question().toLowerCase();
    }

} while (answer === 'y');

