const readline = require('readline-sync');
const VALID_CHOICES = {
    'r': 'rock',
    'p': 'paper',
    'sc': 'scissors',
    'l': 'lizard',
    'sp': 'spock'
};
let answer;
let userScore = 0;
let computerScore = 0;

function prompt(message) {
    console.log(`=> ${message}`);
}

function displayChoices(userChoice, computerChoice) {
    prompt(`You chose ${VALID_CHOICES[userChoice]}, \
the computer chose ${VALID_CHOICES[computerChoice]}`);
}

function returnWinner(userChoice, computerChoice) {
    if ((userChoice === 'r' && ['l', 'sc'].includes(computerChoice)) || 
        (userChoice === 'p' && ['r', 'sp'].includes(computerChoice)) ||
        (userChoice === 'sc' && ['p', 'l'].includes(computerChoice)) ||
        (userChoice === 'l' && ['sp', 'p'].includes(computerChoice)) ||
        (userChoice === 'sp' && ['r', 'sc'].includes(computerChoice))) {
        return 'You win!';
    } else if ((userChoice === 'r' && ['sp', 'p'].includes(computerChoice)) || 
        (userChoice === 'p' && ['l', 'sc'].includes(computerChoice)) ||
        (userChoice === 'sc' && ['r', 'sp'].includes(computerChoice)) ||
        (userChoice === 'l' && ['r', 'sc'].includes(computerChoice)) ||
        (userChoice === 'sp' && ['l', 'p'].includes(computerChoice))) {
        return 'Computer wins!';
    } else {
        return "It's a tie";
    }
}

function updateScore(userChoice, computerChoice) {
    if (returnWinner(userChoice, computerChoice) === 'You win!') {
        userScore += 1;
    } else if (returnWinner(userChoice, computerChoice) === 'Computer wins!') {
        computerScore += 1;
    }
}

do {
    prompt(`Choose one: ${Object.values(VALID_CHOICES).join(', ')}`);
    let choice = readline.question();

    while (!Object.keys(VALID_CHOICES).includes(choice)) {
        prompt("That's not a valid choice, please choose again.");
        choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * Object.keys(VALID_CHOICES).length);
    let computerChoice = Object.keys(VALID_CHOICES)[randomIndex];

    displayChoices(choice, computerChoice);
    prompt(returnWinner(choice, computerChoice));
    updateScore(choice, computerChoice);

    console.log(userScore, computerScore);
    if (userScore === 3) {
        prompt(`Game over. You won ${userScore} games to ${computerScore}!`);
        answer = 'n';
    } else if (computerScore === 3) {
        prompt(`Game over. The computer won ${computerScore} games to ${userScore}!`);
        answer = 'n';
    } else {
        prompt('Do you want to play again (y/n)?');
        answer = readline.question().toLowerCase();
    
        while (!['n', 'y'].includes(answer[0])) {
            prompt('Please enter "y" or "n".');
            answer = readline.question().toLowerCase();
        }
    }
} while (answer === 'y');

