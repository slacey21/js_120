// What will the following code output to the console?

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
NaN
NaN

since we assign the properties to an instance of Rectangle by
invoking RECTANGLE.area(), with the execution context set to
RECTANGLE, this.width and this.height will be undefined. Mathematical
operations on undefined values return NaN.
*/