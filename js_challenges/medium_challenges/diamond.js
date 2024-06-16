/* eslint-disable id-length */
/* eslint-disable max-statements */
/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
class Diamond {
  constructor() {}

  static letters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ]

  static makeDiamond(center) {
    let centerValue = this.letters.indexOf(center);

    let lineLength = (centerValue * 2) + 1;
    let diamond = [];
    let outsideSpace;
    let insideSpace;

    // print the top half
    for (let i = 0; i < centerValue; i += 1) {
      if (i === 0) {
        outsideSpace = " ".repeat(centerValue);
        diamond.push(outsideSpace + "A" + outsideSpace);
      } else {
        outsideSpace = " ".repeat(centerValue - i);
        insideSpace = " ".repeat((i * 2) - 1);
        diamond.push(outsideSpace + this.letters[i] + insideSpace + this.letters[i] + outsideSpace);
      }
    }

    // print the middle of the diamond
    if (lineLength === 1) {
      diamond.push("A");
    } else {
      diamond.push(center + " ".repeat(lineLength - 2) + center);
    }

    // print the bottom half
    for (let i = centerValue - 1; i >= 0; i -= 1) {
      if (i === 0) {
        outsideSpace = " ".repeat(centerValue);
        diamond.push(outsideSpace + "A" + outsideSpace);
      } else {
        outsideSpace = " ".repeat(centerValue - i);
        insideSpace = " ".repeat((i * 2) - 1);
        diamond.push(outsideSpace + this.letters[i] + insideSpace + this.letters[i] + outsideSpace);
      }
    }

    return diamond.join("\n") + "\n";
  }

}

module.exports = Diamond;