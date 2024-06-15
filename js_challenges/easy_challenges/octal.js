class Octal {
  constructor(num) {
    this.num = num;
  }

  isValidOctal() {
    if (isNaN(this.num)) return false;

    return this.num.split("").every(num => {
      return Number(num) < 8;
    });
  }

  toDecimal() {
    if (!this.isValidOctal(this.num)) {
      return 0;
    }

    let decimalValue = 0;
    let currExponent = this.num.length - 1;

    this.num.split("").forEach(num => {
      decimalValue += Number(num) * Math.pow(8, currExponent);
      currExponent -= 1;
    });

    return decimalValue;

  }
}


module.exports = Octal;