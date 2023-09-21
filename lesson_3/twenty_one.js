const readline = require('readline-sync');
const NUMBER_OF_PLAYERS = 2;
const FACE_CARDS = ['J', 'Q', 'K'];

function shuffle(deck) {
  for (let index = deck.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [deck[index], deck[otherIndex]] = [deck[otherIndex], deck[index]]; // swap elements
  }

  return deck;
}


function initializeDeck() {
  let deck = ['AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH',
    'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS',
    'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC',
    'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD'];

  shuffle(deck);

  return deck;
}


function dealCards(deck) {
  let players = {
    dealer: [],
    player: []
  };

  for (let round = 0; round < NUMBER_OF_PLAYERS * 2; round += 1) {
    let card = deck.pop();

    if (round % 2 === 1) {
      players['dealer'].push(card);
    } else {
      players['player'].push(card);
    }
  }

  return players;
}


function hasBlackJack(playerHand) {
  let handValue = playerHand.reduce((handtotal, card) => {
    let cardValue = card.slice(0, -1);

    if (FACE_CARDS.includes(cardValue)) {
      cardValue = 10;
    } else if (cardValue === 'A') {
      cardValue = 11;
    } else {
      cardValue = Number(cardValue);
    }

    return handtotal += cardValue;
  }, 0);

  return handValue === 21;
}


function checkBlackJacks(players) {
  if (hasBlackJack(players['player']) && hasBlackJack(players['dealer'])) {
    return "It's a tie!";
  } else if (hasBlackJack(players['player']) && !hasBlackJack(players['dealer'])) {
    return "Blackjack! Player wins.";
  } else if (!hasBlackJack(players['player']) && hasBlackJack(players['dealer'])) {
    return "Tough luck! Dealer has blackjack. Delaer wins.";
  }
}


let players = dealCards(initializeDeck());
console.log(players);
console.log(checkBlackJacks(players));
/* HIGH_LEVEL PSEUDO CODE
  1. Initialize the deck

  2. deal two cards to the dealer and the player (player first, then dealer, one card each until two)

  3. Check for blackjacks between dealer and player
    a. if only one has blackjack, that person is the winner
    b. tie if both have blackjack

  4. If no blackjacks, ask the player to make a choice
    a. until the player either (1) busts or (2) chooses to stay, continue dealing cards
  5. Deal cards to the dealer until:
    a. dealer busts
    b. dealer reaches at least 17 wihtout busting
  6. Once dealing is complete, compare scores
    a. if one player busted and the other did not, then busted player loses
    b. if neither busted, player closest to 21 wins
    c. if players have the same score, it is a tie
  7. Prompt user to play again

*/
