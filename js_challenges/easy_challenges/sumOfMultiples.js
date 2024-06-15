class SumOfMultiples {
  constructor(...nums) {
    this.nums = (nums.length > 0) ? nums : [3, 5];
  }

  static to(num) {
    let obj = new SumOfMultiples();
    return obj.to(num);
  }

  to(endNum) {
    let sum = 0;

    for (let index = 1; index < endNum; index += 1) {
      if (this.nums.some(num => index % num === 0)) {
        sum += index;
      }
    }

    return sum;

  }
}

module.exports = SumOfMultiples;