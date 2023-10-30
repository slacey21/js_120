/*
9. Loop over the elements of the array fish, logging each one. 
Terminate the loop immediately after logging the string 'Nemo'.
*/

let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

let index = 0;

do {
    console.log(fish[index]);
    index += 1;
} while (index < fish.length && fish[index - 1] !== 'Nemo')