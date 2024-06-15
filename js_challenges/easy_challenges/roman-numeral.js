class RomanNumeral {
  static NUMERAL_MAPPINGS = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  constructor(num) {
    this.num = num;
  }


  toRoman() {
    let romanNumeral = "";
    let valToConvert = this.num;

    Object.keys(RomanNumeral.NUMERAL_MAPPINGS).forEach(numeral => {
      while (RomanNumeral.NUMERAL_MAPPINGS[numeral] <= valToConvert) {
        romanNumeral += numeral;
        valToConvert -= RomanNumeral.NUMERAL_MAPPINGS[numeral];
      }
    });

    return romanNumeral;
  }
}


module.exports = RomanNumeral;

