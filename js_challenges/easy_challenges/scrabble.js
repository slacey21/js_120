class Scrabble {
  constructor(word) {
    if (typeof word === "string") {
      this.word = word.trim().toUpperCase();
    } else {
      this.word = "";
    }
  }

  static valueMapping = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "V", "H", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"],
  }

  score() {
    let wordScore = 0;

    this.word.split("").forEach(letter => {
      Object.keys(Scrabble.valueMapping).forEach(key => {
        if (Scrabble.valueMapping[key].includes(letter)) {
          wordScore += parseInt(key, 10);
        }
      });
    });

    return wordScore;
  }

  static score(word) {
    let wordToTest = new Scrabble(word);
    return wordToTest.score();
  }

}


module.exports = Scrabble;
