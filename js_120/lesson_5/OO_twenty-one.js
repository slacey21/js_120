const readline = require("readline-sync");

class Card {
  constructor(card) {
    this.suit = card[0];
    this.rank = card.slice(1);

    if (["J", "Q", "K"].includes(this.rank)) {
      this.points = 10;
    } else if (Number(this.rank)) {
      this.points = parseInt(this.rank, 10);
    } else {
      this.points = 11;
    }
  }

  toString() {
    return `${this.rank}${this.suit}`;
  }

  getRank() {
    return this.rank;
  }

  getSuit() {
    return this.suit;
  }

  getPoints() {
    return this.points;
  }
}

class Deck {
  static SUITS = ["S", "C", "D", "H"];
  static RANKS = ["2", "3", "4", "5", "6", "7",
    "8", "9", "10", "J", "Q", "K", "A"];

  constructor() {
    this.deck = [];

    Deck.SUITS.forEach(suit => {
      Deck.RANKS.forEach(rank => {
        this.deck.push(new Card(`${suit}${rank}`));
      });
    });

    // shuffles the deck after initialization
    for (let index = this.deck.length - 1; index > 0; index--) {
      let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
      // eslint-disable-next-line max-len
      [this.deck[index], this.deck[otherIndex]] = [this.deck[otherIndex], this.deck[index]]; // swap elements
    }
  }

  deal() {
    return this.deck.pop();
  }
}

class Player {
  constructor(money, playerType) {
    this.hand = [];
    this.score = 0;
    this.money = money;
    this.playerType = playerType;
  }

  updateScore(card) {
    // eslint-disable-next-line max-len
    if (card.getPoints() === 11 && this.getScore() + 11 > TwentyOneGame.SCORE_LIMIT) {
      this.score += 1;
    } else {
      this.score += card.getPoints();
    }
  }

  newGame() {
    this.hand = [];
    this.score = 0;
  }

  getHand() {
    return this.hand;
  }

  getScore() {
    return this.score;
  }

  getMoney() {
    return this.money;
  }

  incrementMoney() {
    this.money += 1;
  }

  decrementMoney() {
    this.money -= 1;
  }

  hit(deck) {
    let card = deck.deal();
    this.hand.push(card);
    this.updateScore(card);
  }

  isBusted() {
    return this.getScore() > TwentyOneGame.SCORE_LIMIT;
  }

  displayHand(dealerHidden = true) {
    if (this.playerType === "Dealer" && dealerHidden) {
      console.log(`Dealer has:  ${this.hand[0].toString()} ${this.hand.slice(1).map(() => "X").join(" ")}`);
    } else {
      console.log(`${this.playerType} has:  ${this.hand.join(" ")} => ${this.getScore()} points`);
    }
  }
}

class TwentyOneGame {
  static SCORE_LIMIT = 21;
  static DEALER_STOP = 17;

  constructor() {
    this.deck = new Deck();
    this.dealer = new Player(0, "Dealer");
    this.player = new Player(5, "Player");
    this.playAnother = true;
  }

  getDeck() {
    return this.deck;
  }

  start() {
    this.displayWelcomeMessage();

    while (this.playAnother && this.player.getMoney() > 0
      && this.player.getMoney() < 10) {
      this.dealCards();

      if (!this.isBlackJack()) {
        this.playerTurn();
        this.dealerTurn();
      } else {
        console.log("");
        this.dealer.displayHand(false);
        this.player.displayHand();
      }
      this.updatePlayerMoney();
      this.displayResult();
      this.playAgain();
    }

    this.displayGoodbyeMessage();
  }

  dealCards() {
    for (let _ = 0; _ < 2; _ += 1) {
      this.player.hit(this.getDeck());
    }

    for (let _ = 0; _ < 2; _ += 1) {
      this.dealer.hit(this.getDeck());
    }

    this.dealer.displayHand();
    this.player.displayHand();
  }

  isBlackJack() {
    return (this.player.getScore() === 21 && this.player.getHand().length === 2)
      || (this.dealer.getScore() === 21 && this.dealer.getHand().length === 2);
  }

  playerTurn() {
    console.log("PLAYER TURN\n");
    // eslint-disable-next-line max-len
    while (!this.player.isBusted() && this.player.getScore() < TwentyOneGame.SCORE_LIMIT) {
      let choice = this.getPlayerMove();
      this.dealer.displayHand();

      if (choice === "h") {
        this.player.hit(this.getDeck());
        this.player.displayHand();
        console.log("");
      } else {
        this.player.displayHand();
        console.log("");
        break;
      }
    }
  }

  getPlayerMove() {
    let prompt = "Hit or stay (h / s)?:";
    let answer = readline.question(prompt);
    console.log("");

    while (!["h", "s"].includes(answer.toLowerCase())) {
      console.log("That is not a valid choice. Hit or stay (h / s)?:");
      answer = readline.question();
    }

    return answer.toLowerCase();
  }

  dealerTurn() {
    if (!this.player.isBusted()) {
      console.log("DEALER TURN\n");
      this.dealer.displayHand(false);
      this.player.displayHand();
      console.log("");

      while (this.dealer.getScore() < TwentyOneGame.DEALER_STOP) {
        this.dealer.hit(this.getDeck());
        this.dealer.displayHand(false);
        this.player.displayHand();
        console.log("");
      }
    }
  }

  updatePlayerMoney() {
    if (this.player.isBusted()) {
      this.player.decrementMoney();
    } else if (this.dealer.isBusted()) {
      this.player.incrementMoney();
    } else if (this.player.getScore() > this.dealer.getScore()) {
      this.player.incrementMoney();
    } else if (this.dealer.getScore() > this.player.getScore()) {
      this.player.decrementMoney();
    }
  }

  displayWelcomeMessage() {
    console.log("Welcome to Twenty-One!");
  }

  displayGoodbyeMessage() {
    console.log("Thank you for playing Twenty-One. Goodbye!");
  }

  // eslint-disable-next-line max-lines-per-function
  displayResult() {
    if (this.isBlackJack()) {
      if (this.player.getScore() === 21 && this.dealer.getScore() === 21) {
        console.log(`Double Blackjack! Very Rare! You have $${this.player.getMoney()} dollars left.`);
      } else if (this.player.getScore() === 21) {
        console.log(`Blackjack! You win! You have $${this.player.getMoney()} dollars left.`);
      } else {
        console.log(`Dealer has blackjack. Dealer wins. You have $${this.player.getMoney()} dollars left.`);
      }
    } else if (this.player.isBusted()) {
      console.log(`You busted. Dealer wins. You have $${this.player.getMoney()} dollars left.`);
    } else if (this.dealer.isBusted()) {
      console.log(`Dealer busted. You win! You have $${this.player.getMoney()} dollars left.`);
    } else if (this.player.getScore() > this.dealer.getScore()) {
      console.log(`You win! You have $${this.player.getMoney()} dollars left.`);
    } else if (this.dealer.getScore() > this.player.getScore()) {
      console.log(`Dealer wins. You have $${this.player.getMoney()} dollars left.`);
    } else {
      console.log(`It's a tie. You have $${this.player.getMoney()} dollars left.`);
    }
  }

  playAgain() {
    if (this.player.getMoney() > 0 && this.player.getMoney() < 10) {
      const prompt = "Would you like to play again (y / n)?: ";
      let answer = readline.question(prompt);

      while (!["y", "n"].includes(answer.toLowerCase())) {
        console.log("That is not a valid choice.");
        answer = readline.question(prompt);
      }

      if (answer.toLowerCase() === "n") {
        this.playAnother = false;
      } else {
        this.resetGame();
      }
    }
  }

  resetGame() {
    this.deck = new Deck();
    this.player.newGame();
    this.dealer.newGame();
    console.clear();
  }
}

let game = new TwentyOneGame();
game.start();