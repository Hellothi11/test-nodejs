const Circle = require("./class.js");
let circle1 = new Circle(0, 0, 0, 10);
let circle2 = new Circle(0, 0, 0, 20);
console.log(circle1 === circle2);
circle2.move(12, 13);
circle2.name();
circle1.name();