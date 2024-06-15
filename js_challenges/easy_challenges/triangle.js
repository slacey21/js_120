class Triangle {
  constructor(side1, side2, side3) {
    this.sides = [side1, side2, side3];

    if (!this.isValid()) {
      throw new Error("Invalid side lengths");
    }
  }

  isValid() {
    let [ side1, side2, side3 ] = this.sides;
    if (
      !this.sides.every(side => side > 0)
      || !(
        side1 + side2 > side3
        && side1 + side3 > side2
        && side2 + side3 > side1
      )
    ) {
      return false;
    }

    return true;
  }

  kind() {
    let numUniqueSides = this.sides.filter((side, index) => {
      return this.sides.indexOf(side) === index;
    }).length;

    if (numUniqueSides === 1) {
      return "equilateral";
    } else if (numUniqueSides === 2) {
      return "isosceles";
    }

    return "scalene";
  }
}

module.exports = Triangle;