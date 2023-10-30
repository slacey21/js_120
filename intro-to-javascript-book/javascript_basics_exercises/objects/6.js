/*
6. We are experimenting with some code to get more comfortable working with objects. 
Run the snippet below and explain why "It's true!" is never output.
*/

let obj = {
    num: 42,
    'property name': 'string value',
    true: false,
    fun: function() {
        console.log('Harr Harr!');
    },
};

for (let prop in obj) {
    if (prop === true) {
        console.log("It's true!");
    }
}

/*
This will never output "It's true!" because none of the object properties are the boolean value true.
While one of the property names is true, it is the string 'true' and not the boolean value. The strict equality
operator requires both operands to be of the same data type and value to evaluate to true.
*/