const readline = require('readline-sync');

const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';

const GAMES_TO_WIN_MATCH = 3;

function prompt(text) {
  console.log(`=> ${text}`);
}


function displayBoard(board) {
  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}.`)

  console.log('');
  console.log('     |     |');
  console.log(`  ${board[1]}  |  ${board[2]}  |  ${board[3]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[4]}  |  ${board[5]}  |  ${board[6]}`);
  console.log('     |     |');
  console.log('-----+-----+-----');
  console.log('     |     |');
  console.log(`  ${board[7]}  |  ${board[8]}  |  ${board[9]}`);
  console.log('     |     |');
  console.log('');
}


function initializeBoard() {
  let board = {};

  for (let val = 1; val < 10; val += 1) {
    board[val] = INITIAL_MARKER;
  }

  return board;
}


function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}


function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square ${joinOr(emptySquares(board))}`);
    square = readline.question().trim();

    // if the chosen square is valid and available
    if (emptySquares(board).includes(square)) break;

    prompt("Sorry that's not a valid choice.");
  }

  board[square] = HUMAN_MARKER;
}


function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let square = emptySquares(board)[randomIndex];
  board[square] = COMPUTER_MARKER;
}


function boardFull(board) {
  return emptySquares(board).length === 0;
}


function someoneWon(board) {
  return !!detectWinner(board);
}


function detectWinner(board) {
  let winningLines = [[1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]]; // diagonals

  for (let line = 0; line < winningLines.length; line += 1) {
    let [sq1, sq2, sq3] = winningLines[line];
    if (
      [board[sq1], board[sq2], board[sq3]].every(val => val === HUMAN_MARKER)
    ) {
      return 'Human';
    } else if (
      [board[sq1], board[sq2], board[sq3]].every(val => val === COMPUTER_MARKER)
    ) {
      return 'Computer';
    }
  }

  return null;
}


function joinOr(arr, sep = ", ", word = "or") {
  if (arr.length < 2) {
    return arr.join();
  } else if (arr.length === 2) {
    return `${arr[0]} ${word} ${arr[1]}`;
  } else {
    return `${arr.slice(0, arr.length - 1).join(sep)}${sep}${word} ${arr[arr.length - 1]}.`;
  }
}


function gamePlay(board) {
  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

  }

  displayBoard(board);

  // return undefined;
}


function gameResult(board, score) {
  if (someoneWon(board)) {
    score[detectWinner(board)] += 1;
    prompt(`${detectWinner(board)} won!\n=> The score is Human: ${score['Human']}, Computer: ${score['Computer']}.`);
  } else {
    prompt("It's a tie!");
  }

}


function playAgain() {
  prompt('Would you like to play again? (y/n)');
  let answer = readline.question();
  return !['no', 'n'].includes(answer.toLowerCase());
}


function startMatch() {
  let score = {
    Human: 0,
    Computer: 0
  };

  do {
    let board = initializeBoard();
    gamePlay(board);
    gameResult(board, score);
  } while (score['Human'] < GAMES_TO_WIN_MATCH && score['Computer'] < GAMES_TO_WIN_MATCH);

}


do {
  console.clear();
  startMatch();
} while (playAgain());

prompt('Thank you for playing Tic Tac Toe');