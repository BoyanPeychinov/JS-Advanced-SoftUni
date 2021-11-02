class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return this.radius ** 2 * Math.PI;
    }
}

console.log(Circle.prototype); // work in the browser

const c = new Circle(5);

console.log(Object.getPrototypeOf(c).hasOwnProperty('getArea'));

console.log(Circle.prototype == Object.getPrototypeOf(c));