// Refactor these classes so they all use a common superclass,
// and inherit behavior as needed.

class WheeledAutomobile {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  getWheels() {
    return this.wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends WheeledAutomobile {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle extends WheeledAutomobile {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck extends WheeledAutomobile {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }
}