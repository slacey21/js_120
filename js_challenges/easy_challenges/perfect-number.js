class PerfectNumber {
  constructor() {}

  static getSumOfFactors(num) {
    let factors = [];

    for (let index = 1; index < num; index += 1) {
      if (num % index === 0) factors.push(index);
    }

    return factors.reduce((total, factor) => {
      return total + factor;
    }, 0);
  }

  static classify(num) {
    if (typeof num !== "number" || num < 1) {
      throw new Error("Input is not valid");
    } else {

      let factorSum = PerfectNumber.getSumOfFactors(num);

      if (factorSum === num) {
        return "perfect";
      } else if (factorSum > num) {
        return "abundant";
      } else {
        return "deficient";
      }
    }
  }
}


module.exports = PerfectNumber;