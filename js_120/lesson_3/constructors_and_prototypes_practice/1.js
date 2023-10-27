// What does the following code log to the console? Try to answer without 
// running the code. Can you explain why the code produces the output it does?

let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);

/*
ANSWER:
The code will log:
NaN
NaN

"this" inside the RECTANGLE.area() and RECTANGLE.perimeter() function calls 
will not reference the newly created Rectangle instance and will be bound to 
RECTANGLE, which does not have width or height properties. mathematical operations
on undefined values return NaN
*/