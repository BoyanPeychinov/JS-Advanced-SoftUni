const myProto = {
    sayHi() {
        console.log(`${this.name} say hi!`);
    }
}

const instance = Object.create(myProto);

instance.name = 'John';
instance.sayHi();

// ------------------------------------

Array.prototype.getLastIndex = function() {
    return this.length - 1;
}

const myArr = [1, 2, 3];

console.log(myArr.getLastIndex());