// create a new array that contains the same values in an un-nested format

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let flatFlintstones = flintstones.flat();
console.log(flatFlintstones);