class Circle {
    constructor(radius) {
        this._radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        if (typeof value != 'number') {
            throw new Error('Radius must be a number');
        }
        this.radius = value;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        if (typeof value != 'number') {
            throw new Error('Diameter must be a number');
        }
        this.radius = value / 2;
    }

    get area() {
        return this.radius ** 2 * Math.PI;
    }
}

const c = new Circle(4);

console.log(c);
console.log(c.diameter());
console.log(c.area());
