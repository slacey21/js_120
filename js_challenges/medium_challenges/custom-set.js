class CustomSet {
  constructor(set = []) {
    this.vals = [];
    set.forEach(val => this.add(val));
  }

  isEmpty() {
    return this.vals.length === 0;
  }

  contains(val) {
    return this.vals.includes(val);
  }

  isSubset(subset) {
    if (this.isEmpty()) {
      return true;
    }
    return this.vals.every(val => subset.contains(val));
  }

  isDisjoint(set) {
    if (this.isEmpty()) {
      return true;
    }
    return this.vals.every(val => !set.contains(val));
  }

  isSame(set) {
    return set.isSubset(this) && this.isSubset(set);
  }

  add(elem) {
    if (!this.contains(elem)) {
      this.vals.push(elem);
    }
    return this;
  }

  intersection(set) {
    let newSet = [];
    this.vals.forEach(val => {
      if (set.contains(val)) {
        newSet.push(val);
      }
    });

    return new CustomSet(newSet);
  }

  difference(set) {
    let diff = [];
    this.vals.forEach(val => {
      if (!set.contains(val)) {
        diff.push(val);
      }
    });

    return new CustomSet(diff);
  }

  union(set) {
    return new CustomSet(this.vals.concat(set.vals));
  }

}


module.exports = CustomSet;