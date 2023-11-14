class Shelter {
  constructor() {
    this.adopters = {};
    this.pets = {
      Asta: new Pet('dog', 'Asta'),
      Laddie: new Pet('dog', 'Laddie'),
      Fluffy: new Pet('cat', 'Fluffy'),
      Kat: new Pet('cat', 'Kat'),
      Ben: new Pet('cat', 'Ben'),
      Chatterbox: new Pet('parakeet', 'Chatterbox'),
      Bluebell: new Pet('parakeet', 'Bluebell'),
    };
  }

  adopt(owner, pet) {
    owner.addPet(pet);
    if (!this.adopters.hasOwnProperty(owner.name)) {
      this.adopters[owner.name] = owner;
    }
  }

  printAdoptions() {
    if (Object.keys(this.pets).length) {
      console.log("The Animal Shelter has the following unadopted pets:");
    }

    Object.values(this.pets).forEach(pet => {
      console.log(pet.info());
    });
    console.log("");

    Object.keys(this.adopters).forEach(ownerName => {
      console.log(`${ownerName} has adopted the following pets:`);
      this.adopters[ownerName].printPets();
      console.log("");
    });
  }

  numberOfPets() {
    return Object.keys(this.pets).length;
  }
}

class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  info() {
    return `a ${this.type} named ${this.name}`;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  numberOfPets() {
    return this.pets.length;
  }

  printPets() {
    this.pets.forEach(pet => {
      console.log(pet.info());
    });
  }
}


let butterscotch = new Pet('cat', 'Butterscotch');
let pudding = new Pet('cat', 'Pudding');
let darwin = new Pet('bearded dragon', 'Darwin');
let kennedy = new Pet('dog', 'Kennedy');
let sweetie = new Pet('parakeet', 'Sweetie Pie');
let molly = new Pet('dog', 'Molly');
let chester = new Pet('fish', 'Chester');
let chloe = new Pet('dog', 'Chloe');
let izzy = new Pet('dog', 'Izzy');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');
let slacey = new Owner('S Lacey');

let shelter = new Shelter();

shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.adopt(slacey, chloe);
shelter.adopt(slacey, izzy);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
console.log(`The Animal Shelter has ${shelter.numberOfPets()} unadopted pets.`);