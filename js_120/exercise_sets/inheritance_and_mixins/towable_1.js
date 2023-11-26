/*
Using the following code, create a towMixin mixin that contains a method
named tow that returns I can tow a trailer! when invoked. Include the mixin
in the Truck class.
*/

const towMixIn = {
  tow() {
    return "I can tow a trailer!";
  }
};

class Truck {}
Object.assign(Truck.prototype, towMixIn);

class Car {}

let truck = new Truck();
console.log(truck.tow());