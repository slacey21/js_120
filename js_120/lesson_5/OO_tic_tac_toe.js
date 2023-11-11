let readline = require("readline-sync");

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  getMarker() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let counter = 1; counter < 10; counter += 1) {
      this.squares[String(counter)] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  isUnusedSquare(key) {
    return this.squares[key].isUnused();
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.isUnusedSquare(key));
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      // if board square marker matches player marker, include
      return this.squares[key].getMarker() === player.getMarker();
    });
    return markers.length;
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }
}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  static POSSIBLE_WINNING_ROWS = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
  ];

  static joinOr(arr, delim = ', ', finalWord = 'or') {
    if (arr.length === 1) {
      return arr[0];
    } else if (arr.length === 2) {
      return `${arr[0]} ${finalWord} ${arr[1]}`;
    } else {
      return `${arr.slice(0, arr.length - 1).join(delim)}${delim}${finalWord} ${arr[arr.length - 1]}`;
    }
  }

  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.playAnother = true;
  }

  play() {
    this.displayWelcomeMessage();

    while (this.playAnother) {
      this.board.display();

      while (true) {
        this.humanMoves();
        console.clear();
        this.board.display();
        if (this.gameOver()) break;

        this.computerMoves();
        console.clear();
        this.board.display();
        if (this.gameOver()) break;
      }
      this.displayResults();
      this.playAgain();
    }

    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      console.log("I won! I won! Take that, human!");
    } else {
      console.log("A tie game. How boring.");
    }
  }

  playAgain() {
    let answer;

    while (true) {
      const playAgainPrompt = "Would you like to play again? (y or n): ";
      answer = readline.question(playAgainPrompt);

      if (['y', 'n'].includes(answer.toLowerCase())) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    if (answer.toLowerCase() === 'y') {
      console.log("Let's play again!");
      this.board = new Board();
    } else {
      this.playAnother = false;
    }
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${TTTGame.joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }
    this.board.markSquareAt(choice, this.human.getMarker());
  }

  // iterates over all possible winning rows and checks if a square in one of
  // these rows is at risk. Returns at risk square key if exists
  defensiveComputerMove() {
    // eslint-disable-next-line max-len
    for (let rowNum = 0; rowNum < TTTGame.POSSIBLE_WINNING_ROWS.length; ++rowNum) {
      let row = TTTGame.POSSIBLE_WINNING_ROWS[rowNum];
      let keyToChoose = this.atRiskSquare(row);
      if (keyToChoose) return keyToChoose;
    }

    return null;
  }

  // given a row on the board, returns the square number of the at risk square
  // if one exists in the given row; returns null otherwise
  atRiskSquare(row) {
    if (this.board.countMarkersFor(this.human, row) === 2) {
      // eslint-disable-next-line max-len
      let unusedSquareIndex = row.findIndex(elem => this.board.isUnusedSquare(elem));
      if (unusedSquareIndex >= 0) return row[unusedSquareIndex];
    }

    return null;
  }

  computerMoves() {
    let choice = this.defensiveComputerMove();

    if (!choice) {
      let validChoices = this.board.unusedSquares();

      do {
        choice = Math.floor((Math.random() * 9) + 1).toString();
      } while (!validChoices.includes(choice));
    }

    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(this.human, row) === 3 ||
             this.board.countMarkersFor(this.computer, row) === 3;
    });
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }
}

let game = new TTTGame();
game.play();