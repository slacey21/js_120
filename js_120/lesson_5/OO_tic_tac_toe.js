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
    this.numberOfWins = 0;
  }

  getMarker() {
    return this.marker;
  }

  getScore() {
    return this.numberOfWins;
  }

  incrementScore() {
    this.numberOfWins += 1;
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
  static MATCH_GOAL = 3;

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
    this.firstMove = this.humanMoves;
    this.secondMove = this.computerMoves;
  }

  getFirstMove() {
    this.firstMove();
  }

  getSecondMove() {
    this.secondMove();
  }

  setFirstMove(move) {
    this.firstMove = move;
  }

  setSecondMove(move) {
    this.secondMove = move;
  }

  updateMoveOrder() {
    if (this.firstMove === this.humanMoves) {
      this.setFirstMove(this.computerMoves);
      this.setSecondMove(this.humanMoves);
    } else {
      this.setFirstMove(this.humanMoves);
      this.setSecondMove(this.computerMoves);
    }
  }

  // eslint-disable-next-line max-lines-per-function, max-statements
  play() {
    this.displayWelcomeMessage();

    // // eslint-disable-next-line max-len
    while (this.playAnother) {
      this.board.display();

      while (true) {
        this.getFirstMove();
        console.clear();
        this.board.display();
        if (this.gameOver()) break;

        this.getSecondMove();
        console.clear();
        this.board.display();
        if (this.gameOver()) break;
      }
      this.displayResults();
      this.displayScore();
      if (this.human.getScore() === TTTGame.MATCH_GOAL ||
        this.computer.getScore() === TTTGame.MATCH_GOAL) break;
      this.playAgain();
      this.board.display();
      this.updateMoveOrder();
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
      this.updateScore(this.human);
      console.log("You won! Congratulations!");
    } else if (this.isWinner(this.computer)) {
      this.updateScore(this.computer);
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

  /*
  iterates over all possible winning rows and checks if there exists a
  square in that row that can win the game, returns that square's key if so.
  Otherwise checks all rows to see if there is a square at risk of losing.
  Returns the key of that square if exists.
  */
  intelligentComputerMove() {
    let defensiveKeys = [];

    // eslint-disable-next-line max-len
    for (let rowNum = 0; rowNum < TTTGame.POSSIBLE_WINNING_ROWS.length; ++rowNum) {
      let row = TTTGame.POSSIBLE_WINNING_ROWS[rowNum];
      let offensiveKey = this.winningSquareAvailable(this.computer, row);
      let defensiveKey = this.winningSquareAvailable(this.human, row);

      if (offensiveKey) return offensiveKey;
      if (defensiveKey) defensiveKeys.push(defensiveKey);
    }

    if (defensiveKeys.length > 0) {
      return defensiveKeys[0];
    } else {
      return null;
    }
  }

  winningSquareAvailable(player, row) {
    if (this.board.countMarkersFor(player, row) === 2) {
      // eslint-disable-next-line max-len
      let unusedSquareIndex = row.findIndex(elem => this.board.isUnusedSquare(elem));
      if (unusedSquareIndex >= 0) return row[unusedSquareIndex];
    }

    return null;
  }

  chooseCenterSquare() {
    return this.board.isUnusedSquare("5") ? "5" : null;
  }

  chooseRandomSquare() {
    let validChoices = this.board.unusedSquares();
    let choice;

    do {
      choice = Math.floor((Math.random() * 9) + 1).toString();
    } while (!validChoices.includes(choice));

    return choice;
  }

  computerMoves() {
    let choice = this.intelligentComputerMove();

    if (!choice) {
      choice = this.chooseCenterSquare();
    }

    if (!choice) {
      choice = this.chooseRandomSquare();
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

  updateScore(player) {
    player.incrementScore();
  }

  displayScore() {
    console.log(`The score is Human: ${this.human.getScore()}, Computer: ${this.computer.getScore()}`);
  }
}

let game = new TTTGame();
game.play();