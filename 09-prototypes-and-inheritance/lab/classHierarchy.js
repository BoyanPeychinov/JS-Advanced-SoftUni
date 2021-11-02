function solve() {

    class Figure {
        constructor(units = 'cm') {
            this.units = units;
        }

        get area() {
            return undefined;
        }

        changeUnits(value) {
            this.units = value;
        }

        toString() {
            return `Figures units: ${this.units}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super('cm');
            this._radius = radius;
        }

        get area() {
            return this.radius * this.radius * Math.PI;
        }

        get radius() {
            let radius = this._radius
            if (this.units == 'm') {
                return radius /= 10;
            } else if (this.units == 'mm') {
                return radius *= 10;
            }
            return radius;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }

        get area() {
            return this.width * this.height;
        }

        get width() {
            let width = this._width
            if (this.units == 'm') {
                return width /= 10;
            } else if (this.units == 'mm') {
                return width *= 10;
            }
            return width;
        }

        get height() {
            let height = this._height
            if (this.units == 'm') {
                return height /= 10;
            } else if (this.units == 'mm') {
                return height *= 10;
            }
            return height;
        }

        toString() {
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }

    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}



let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

c.changeUnits('mm');
console.log(c.area); // 7853.981633974483
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
