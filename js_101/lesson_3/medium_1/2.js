// Starting with the string
let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`
let newString = '';

for (i = 0; i < munstersDescription.length; i ++){
    if ((munstersDescription.charCodeAt(i) > 64) && (munstersDescription.charCodeAt(i) < 91)) {
        newString += munstersDescription[i].toLowerCase();
    } else if ((munstersDescription.charCodeAt(i) > 96) && (munstersDescription.charCodeAt(i) < 123)) {
        newString += munstersDescription[i].toUpperCase();
    } else {
        newString += munstersDescription[i];
    }
}

console.log(newString);