class Robot {
  static robotNames = []

  constructor() {
    this.robotName = this.assignName();
  }

  name() {
    return this.robotName;
  }


  generateRandomName() {
    const alphabetArray = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    let firstLetter = alphabetArray[Math.floor(Math.random() * 26)];
    let secondLetter = alphabetArray[Math.floor(Math.random() * 26)];
    let firstNum = Math.floor(Math.random() * 10);
    let secondNum = Math.floor(Math.random() * 10);
    let thirdNum = Math.floor(Math.random() * 10);

    return firstLetter + secondLetter + firstNum + secondNum + thirdNum;
  }

  assignName() {
    let randomName = this.generateRandomName();

    while (Robot.robotNames.includes(randomName)) {
      randomName = this.generateRandomName();
    }

    Robot.robotNames.push(randomName);
    return randomName;
  }

  reset() {
    let removeIdx = Robot.robotNames.indexOf(this.name());
    Robot.robotNames.splice(removeIdx, 1);
    this.robotName = this.assignName();
  }
}

module.exports = Robot;