class Person {
    static nextId = 0;

    constructor (name, age) {
        this.id = Person.getNextId();
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`${this.name} says hi! I am ${this.age} years old.`);
    }

    static cheer() {
        console.log('Woo hoo!');
    }

    static compareTo(a, b) {
        return a.age - b.age;
    }

    static getNextId() {
        return nextId++;
    }
}

const person1 = new Person('Peter');
const person2 = new Person('George', 32);

person1.age = 12;
person2.height = 186;

person2.sayHello();
person1.sayHello();


console.log(person1);
console.log(person1 instanceof Person);

const people = [person1, person2];

people.sort(Person.compareTo);