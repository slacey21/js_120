const characters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

let Account = (function() {
  let userEmail;
  let userPassword;
  let userFirstName;
  let userLastName;

  function isValidPassword(attemptedPassword) {
    return attemptedPassword === userPassword;
  }

  function getRandomCharacter() {
    let randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }

  function anonymize() {
    let randomStr = "";

    for (let _ = 0; _ < 16; _ += 1) {
      randomStr += getRandomCharacter();
    }

    return randomStr;
  }

  return {
    init: function(email, password, firstName, lastName) {
      userEmail = email;
      userPassword = password;
      userFirstName = firstName;
      userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    reanonymize: function(password) {
      if (isValidPassword(password)) {
        this.displayName = anonymize();
        return true;
      } else {
        return "Invalid Password";
      }
    },

    resetPassword: function(currPassword, newPassword) {
      if (isValidPassword(currPassword)) {
        userPassword = newPassword;
        return true;
      } else {
        return "Invalid Password";
      }
    },

    firstName: function(password) {
      if (isValidPassword(password)) {
        return userFirstName;
      } else {
        return "Invalid Password";
      }
    },

    lastName: function(password) {
      if (isValidPassword(password)) {
        return userLastName;
      } else {
        return "Invalid Password";
      }
    },

    email: function(password) {
      if (isValidPassword(password)) {
        return userEmail;
      } else {
        return "Invalid Password";
      }
    },
  };
})();


let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                      // returns the firstName function
console.log(fooBar.email);                          // returns the email function
console.log(fooBar.firstName('123456'));            // logs 'foo'
console.log(fooBar.firstName('abc'));               // logs 'Invalid Password'
console.log(fooBar.displayName);                    // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'));    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')); // logs true

let displayName = fooBar.displayName;
console.log(fooBar.reanonymize('abc'));             // returns true
console.log(displayName === fooBar.displayName);    // logs false
