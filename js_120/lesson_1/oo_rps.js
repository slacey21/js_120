/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');
const CHOICES = ['rock', 'paper', 'scissors'];

function createPlayer() {
  return {
    move: null,
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    score: 0,

    choose () {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = readline.question();
        if (CHOICES.includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }

      this.move = choice;
    }
  };

  return Object.assign(playerObject, humanObject);
}

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    score: 0,

    choose() {
      let randomIndex = Math.floor(Math.random() * CHOICES.length);
      this.move = CHOICES[randomIndex];
    }
  };

  return Object.assign(playerObject, computerObject);
}


const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.clear();
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((computerMove === 'rock' && humanMove === 'scissors') ||
              (computerMove === 'paper' && humanMove === 'rock') ||
              (computerMove === 'scissors' && humanMove === 'paper')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie!");
    }
  },

  updateScore() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      this.human.score += 1;
    } else if ((computerMove === 'rock' && humanMove === 'scissors') ||
              (computerMove === 'paper' && humanMove === 'rock') ||
              (computerMove === 'scissors' && humanMove === 'paper')) {
      this.computer.score += 1;
    } 
  },

  displayScore() {
    console.log(`The score is: Human ${this.human.score}, Computer ${this.computer.score}`);
  },

  playAgain() {
    if (this.human.score < 5 && this.computer.score < 5) {
      console.log("Would you like to play again? (y/n)");
      let answer = readline.question().toLowerCase();
      return answer[0] === "y";
    }
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.updateScore();
      this.displayWinner();
      this.displayScore();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();