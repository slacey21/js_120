// Suppose we have the following class:

class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
}

/*
What would happen if we added a play method to the Bingo class, keeping in
mind that there is already a method of this name in the Game class from which
the Bingo class inherits? Explain your answer. What do we call it when we
define a method like this?

The play method defined on the Game class would be overridden by the play 
method defined on the Bingo class. Since Bingo is a subtype of class Game,
Bingo will delegate any unowned properties to Game. Since play is an method
defined directly on Bingo, calling play on an instance of class Bingo will 
call the version of play that is defined on Bingo and not the one defined on 
Game.

*/