// What will the following code output?

let obj = {
  a: 'Amazebulous!',
};

let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj);

/*
ANSWER:
Amazebulous
Even though we invoke the bar function and attempt to call it with
otherObj as its execution context, bar was assigned a copy of foo with
its execution context permanently bound to obj. Thus, bar.call(otherObj)
executes the same code as bar(), which logs obj.a -> Amazebulous
*/