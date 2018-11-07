class Shape {
	constructor(id, x, y) {
		this.id = id;
		this.x = x;
		this.y = y;
	}

	move(x, y) {
		this.x = x;
		this.y = y;
	}

	name() {
		console.log(`${this.x}, ${this.y}`)
	}
}
class Circle extends Shape {
	constructor(id, x, y, radius) {
		super(id, x, y);
		this.radius = radius;
	}

	get S() { return this._S; }
	set S(s) { this._S = s; }
}
module.exports = Circle;