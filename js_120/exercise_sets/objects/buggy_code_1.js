// The code below is expected to output the following:

let helloVictor = createGreeter('Victor');
helloVictor.greet('morning');
// = Good Morning Victor

function createGreeter(name) {
  return {
    name: name,
    morning: 'Good Morning',
    afternoon: 'Good Afternoon',
    evening: 'Good Evening',
    greet: function(timeOfDay) {
      let msg = '';
      switch (timeOfDay) {
        case 'morning':
          msg += `${morning} ${name}`;
          break;
        case 'afternoon':
          msg += `${afternoon} ${name}`;
          break;
        case 'evening':
          msg += `${evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

/*
ANSWER:
This logs an error because the "morning", "afternoon", "evening",
and "name" properties referenced in the greet function need to have
"this." prepended in order to reference the object properties.
*/