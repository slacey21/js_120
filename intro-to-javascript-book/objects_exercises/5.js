// 5. Create a new object named myObj that uses myProtoObj as its prototype.

let myProtoObj = {
    foo: 1,
    bar: 2,
};

let myObj = Object.create(myProtoObj);


// 7. Add a qux property with value 3 to the myObj object we created in the previous exercise. 
myObj['qux'] = 3;


/*
7. Now, examine the following code snippets:

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let key in myObj) {
  console.log(key);
}

Without running this code, can you determine whether these 
two snippets produce the same output? Why?

ANSWER: They do not produce the same output. The Object.keys() function only
gets the values for the object's own properties. In this case that would be only the 
'qux' key because the 'foo' and 'bar' keys are inherited from the myProtoObj object. The second
piece of code will output all three keys.
*/