// Write a function that will take a short line of text, and write it to the console log within a box.

function logInBox(text) {
    let topAndBottom = '+' + '-'.repeat(text.length + 2) + '+';
    let aboveAndBelow = '|' + ' '.repeat(text.length + 2) + '|';
    let textRow = '| ' + text + ' |';
    console.log(topAndBottom);
    console.log(aboveAndBelow);
    console.log(textRow);
    console.log(aboveAndBelow);
    console.log(topAndBottom);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');