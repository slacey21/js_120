// How would you fix the problem in the code from problem 1?

let RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  perimeter: function() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  Object.setPrototypeOf(this, RECTANGLE);
  this.width = width;
  this.height = height;
  this.area = this.area();
  this.perimeter = this.perimeter();
}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area);
console.log(rect1.perimeter);
