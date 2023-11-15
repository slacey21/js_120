// Write a function objectsEqual that accepts two object arguments
// and returns true or false depending on whether the objects have the
// same key/value pairs.

function objectsEqual(obj1, obj2) {
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  } else {
    for (i = 0; i < obj1Keys.length; i += 1) {
      let obj1Key = obj1Keys[i];
      if (!obj2Keys.includes(obj1Key) || obj1[obj1Key] !== obj2[obj1Key]) {
        return false;
      }

      for (j = 0; j < obj1Keys.length; j += 1) {
        let obj2Key = obj2Keys[j];
        if (!obj1Keys.includes(obj2Key) || obj2[obj2Key] !== obj1[obj2Key]) {
          return false;
        }
      }
    }
  }
  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false