/* eslint-disable max-len */
class Series {
  constructor(series) {
    this.series = series.split("").map(val => Number(val));
  }

  slices(numSlices) {
    if (numSlices > this.series.length) {
      throw new Error("Invalid slice length");
    } else {
      let possibleSlices = [];

      for (let outerIndex = 0; outerIndex <= this.series.length - numSlices; outerIndex += 1) {
        possibleSlices.push(this.series.slice(outerIndex, outerIndex + numSlices));
      }

      return possibleSlices;
    }
  }
}

module.exports = Series;