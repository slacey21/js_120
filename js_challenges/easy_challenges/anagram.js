class Anagram {
  constructor(detector) {
    this.detector = detector;
  }

  sortString(str) {
    return str.toLowerCase().split("").sort().join("");
  }

  detectMatch(detector, matchWord, matchesArr) {
    if (
      matchWord.length !== detector.length
      || matchWord.toLowerCase() === detector.toLowerCase()) return;

    let sortedWord = this.sortString(matchWord);
    let sortedDetectorWord = this.sortString(detector);
    let wordMatch = true;
    let searchIndex = 0;

    while (searchIndex < sortedWord.length && wordMatch) {
      if (sortedWord[searchIndex] !== sortedDetectorWord[searchIndex]) {
        wordMatch = false;
      }
      searchIndex += 1;
    }

    if (wordMatch) {
      matchesArr.push(matchWord);
    }
  }

  match(wordsArr) {
    let matches = [];

    wordsArr.forEach(word => this.detectMatch(this.detector, word, matches));

    return matches;
  }
}

module.exports = Anagram;