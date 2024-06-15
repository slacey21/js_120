class BeerSong {
  constructor() {}

  static verse(num) {
    if (num >= 3) {
      return `${num} bottles of beer on the wall, ${num} bottles of beer.\n` +
      `Take one down and pass it around, ${num - 1} bottles of beer ` +
      "on the wall.\n";
    } else if (num === 2) {
      return `2 bottles of beer on the wall, 2 bottles of beer.\n` +
      `Take one down and pass it around, ${num - 1} bottle of beer ` +
      "on the wall.\n";
    } else if (num === 1) {
      return `1 bottle of beer on the wall, 1 bottle of beer.\n` +
      `Take it down and pass it around, no more bottles of beer ` +
      "on the wall.\n";
    } else {
      return `No more bottles of beer on the wall, no more bottles of beer.\n` +
      `Go to the store and buy some more, 99 bottles of beer ` +
      "on the wall.\n";
    }
  }

  // eslint-disable-next-line consistent-return
  static verses(startNum, endNum) {
    let lyrics = "";

    for (let num = startNum; num >= endNum; num -= 1) {
      if (num === startNum) {
        lyrics += BeerSong.verse(num);
      } else {
        lyrics += "\n" + BeerSong.verse(num);
      }
    }

    return lyrics;
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }
}

console.log(BeerSong.verses(99, 98));

module.exports = BeerSong;