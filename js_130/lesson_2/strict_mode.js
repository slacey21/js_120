/*
The following code runs in sloppy mode, modify it to run in strict mode


SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
         "10", "Jack", "Queen", "King", "Ace"];

function createDeck() {
  allCards = () => {
    return this.SUITS.reduce((deck, suit) => {
      this.RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  deck = allCards();
  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  for (counter = 0; counter < 0400; counter += 1) {
    randomIndex1 = randomCardIndex();
    randomIndex2 = randomCardIndex();
    tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  function randomCardIndex() {
    return Math.floor(Math.random() * this.deck.length);
  }
}

console.log(createDeck());
*/
"use strict";

const SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9",
          "10", "Jack", "Queen", "King", "Ace"];

function createDeck() {
  let allCards = function() {
    return SUITS.reduce((deck, suit) => {
      RANKS.forEach(rank => deck.push(`${rank} of ${suit}`));
      return deck;
    }, []);
  };

  let deck = allCards();
  shuffle(deck);

  return deck;
}

function shuffle(deck) {
  let randomIndex1;
  let randomIndex2;
  let tempCard;

  for (let counter = 0; counter < 256; counter += 1) {
    randomIndex1 = randomCardIndex(deck);
    randomIndex2 = randomCardIndex(deck);
    tempCard = deck[randomIndex1];
    deck[randomIndex1] = deck[randomIndex2];
    deck[randomIndex2] = tempCard;
  }

  function randomCardIndex(deck) {
    return Math.floor(Math.random() * deck.length);
  }
}

console.log(createDeck());
