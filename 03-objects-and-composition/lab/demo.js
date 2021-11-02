const myPerson = {
    name: 'Peter',
    lastName: 'Jackson',
    age: 24,
    sayHi() {
        console.log('Hello!');
    }
};

myPerson.sayHi();

for (const key in myPerson) {
    console.log(`${key} -> ${myPerson[key]}`);
}

const keys = Object.keys(myPerson);
const values = Object.values(myPerson);
const entries = Object.entries(myPerson);

console.log(keys)
console.log(values)
console.log(entries)


console.log(myPerson);

console.log(myPerson.age);

myPerson.age = 23;

console.log(myPerson);

//myPerson['last name'] = 'Jackson';
myPerson.nationality = 'UK';

console.log(myPerson['last name']);


delete myPerson.age;

console.log(myPerson)


// kind of compare between objects
function compare() {
    for (let key in myPerson) {
        if (myPerson[key] != otherObj[key]){
        return false;
        }
    }
    return true;
}