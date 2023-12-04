// What would happen if we added a play method to the Bingo class, keeping
// in mind that there is already a method of this name in the Game class
// from which the Bingo class inherits? Explain your answer. What do we
// call it when we define a method like this?


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
ANSWER:
Calling play() on any instance of class Bingo would use the version
of play defined within the Bingo class. This is called overriding, because
the method defined in Bingo overrides the play method defined in its superclass
Game.
*/