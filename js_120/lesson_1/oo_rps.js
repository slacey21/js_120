/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');
const CHOICES = ['rock', 'paper', 'scissors'];


function createPlayer(playerType) {
  return {
    playerType,
    move: null,

    choose () {
      if (this.isHuman()) {
        let choice;

        while (true) {
          console.log('Please choose rock, paper, or scissors:');
          choice = readline.question();
          if (CHOICES.includes(choice)) break;
          console.log('Sorry, invalid choice.');
        }

        this.move = choice;
      } else {
        let randomIndex = Math.floor(Math.random() * CHOICES.length);
        this.move = CHOICES[randomIndex];
      }
    },

    isHuman() {
      return this.playerType.toLowerCase() === 'human';
    },
  };
}


const RPSGame = {
  human: createPlayer('human'),
  computer: createPlayer('computer'),

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
      console.log('You wins!');
    } else if ((computerMove === 'rock' && humanMove === 'scissors') ||
              (computerMove === 'paper' && humanMove === 'rock') ||
              (computerMove === 'scissors' && humanMove === 'paper')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie!");
    }
  },

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    this.displayWinner();
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();