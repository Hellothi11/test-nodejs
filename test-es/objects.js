// function Person(firstName, lastName) {
//  this.firstName = firstName;
//  this.lastName = lastName;
//  this.showName = function() {
//     console.log(this.firstName + ' ' + this.lastName);
//  };
// }

// var psn1 = new Person('Thi', 'Nguyen');
// psn1.showName();

function Animal() {
    this.a = 10
};

Animal.prototype.eat = function() {
    this.a = 20;
    console.log("eat");
};

function Dog() {
    Animal.call(this);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.eat = function() {
    Animal.prototype.eat.call(this);
    console.log("dog eat " + this.a);
}

let d = new Dog();
d.eat();