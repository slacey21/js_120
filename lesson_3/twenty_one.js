const readline = require('readline-sync');

const FACE_CARDS = ['J', 'Q', 'K'];
const DEALER_STOP = 17;
const SCORE_LIMIT = 21;

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


function initializeGame(deck) {
  let participants = {
    player: [],
    dealer: []
  };

  dealCards(participants, "player", deck, 1);
  dealCards(participants, "dealer", deck, 1);
  dealCards(participants, "player", deck, 1);
  dealCards(participants, "dealer", deck, 1);

  return participants;
}


function dealCards(players, player, deck, numCards) {
  for (let round = 0; round < numCards; round += 1) {
    let card = deck.pop();
    players[player].push(card);
  }
}


function hasBlackJack(cards) {
  return calculateScore(cards) === SCORE_LIMIT;
}


function checkBlackJacks(players) {
  if (hasBlackJack(players['player']) && hasBlackJack(players['dealer'])) {
    return "It's a tie!";
  } else if (hasBlackJack(players['player']) && !hasBlackJack(players['dealer'])) {
    return "Blackjack! Player wins.";
  } else if (!hasBlackJack(players['player']) && hasBlackJack(players['dealer'])) {
    return "Tough luck! Dealer has blackjack. Dealer wins.";
  } else {
    return false;
  }
}


function calculateScore(cards) {
  let cardValues = cards.map(card => card.slice(0, -1));

  let handValue = cardValues.reduce((handTotal, card) => {
    if (FACE_CARDS.includes(card)) {
      handTotal += 10;
    } else if ((card === 'A') && (handTotal + 11 <= SCORE_LIMIT)) {
      handTotal += 11;
    } else if ((card === 'A') && (handTotal + 11 > SCORE_LIMIT)) {
      handTotal += 1;
    } else {
      handTotal += Number(card);
    }
    return handTotal;
  }, 0);

  return handValue;
}


function playerPlays(players, deck) {
  let action;
  do {
    console.log("Hit or Stay (h or s)?");
    action = readline.question().trim().toLowerCase();

    if (action === 'h') dealCards(players, "player", deck, 1);
    console.log(calculateScore(players['player']));
  } while ((calculateScore(players['player']) < SCORE_LIMIT) && (action === 'h'));
}


function isBusted(player) {
  return calculateScore(player) > SCORE_LIMIT;
}


function dealerPlays(players, deck) {
  while ((calculateScore(players['dealer']) < DEALER_STOP)) {
    dealCards(players, 'dealer', deck, 1);
  }
}


function determineResult(players) {
  let dealerScore = calculateScore(players['dealer']);
  let playerScore = calculateScore(players['player']);

  if ((isBusted(players['player'])) && (!isBusted(players['dealer']))) {
    console.log("Dealer wins.");
  } else if ((!isBusted(players['player'])) && (isBusted(players['dealer']))) {
    console.log("Player wins.");
  } else if (dealerScore > playerScore) {
    console.log("Dealer wins.");
  } else if (playerScore > dealerScore) {
    console.log("Player wins.");
  } else {
    console.log("It's a tie.");
  }
}


let deck = initializeDeck();
let players = initializeGame(deck);
console.log(players);

if (checkBlackJacks(players)) {
  console.log(checkBlackJacks(players));
} else {
  playerPlays(players, deck);
}

if (!isBusted(players['player'])) {
  dealerPlays(players, deck);
}
console.log(players);

determineResult(players);

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
    b. dealer reaches at least 17 without busting

  6. Once dealing is complete, compare scores
    a. if one player busted and the other did not, then busted player loses
    b. if neither busted, player closest to 21 wins
    c. if players have the same score, it is a tie
  7. Prompt user to play again

*/
