/*
Create a function newStack, that, when called, returns a stack object with
three methods: push, pop, and printStack. push takes a value and appends it
to the stack. pop removes and returns the last element from the stack.
printStack logs each remaining element of the stack on its own line,
starting with the item that was least recently added to the stack and
ending with the most recently added item that is still on the stack.
*/

function newStack() {
  let stack = [];
  return {
    push(val) {
      stack.push(val);
    },

    pop() {
      return stack.pop();
    },

    printStack() {
      if (stack.length > 0) {
        stack.forEach(item => console.log(item));
      } else {
        console.log("Empty Stack");
      }
    }
  };
}

let stack1 = newStack();
stack1.printStack();

stack1.push("task1");
stack1.printStack();

stack1.push("task2");
stack1.push("task3");
stack1.push("task4");
stack1.printStack();

console.log(stack1.pop());
console.log(stack1.pop());

stack1.printStack();