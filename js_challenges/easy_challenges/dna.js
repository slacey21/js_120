class DNA {
  constructor(strand) {
    this.strand = strand;
    this.strandLength = strand.length;
  }

  hammingDistance(secondStrand) {
    let distance = 0;
    let minStrandLength = Math.min(this.strandLength, secondStrand.length);

    for (let i = 0; i < minStrandLength; i += 1) {
      if (this.strand[i] !== secondStrand[i]) {
        distance += 1;
      }
    }

    return distance;
  }
}

module.exports = DNA;