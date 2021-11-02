function solve() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }
    
        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    const instances = [];
    instances.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    instances.push(new Person('SoftUni'));
    instances.push(new Person('Stephan', 'Johnson', 25));
    instances.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));
    
    return instances;
}

console.log(solve()[1]);