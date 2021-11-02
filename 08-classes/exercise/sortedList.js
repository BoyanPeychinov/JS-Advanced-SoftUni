// class List {
//     constructor() {
//         this.arr = [];
//         this.size = this.getSize();
//     }

//     getSize() {
//         return this.arr.length;
//     }

//     add(value) {
//         this.arr.push(value);
//         this.size = this.getSize();
//         this.arr = this.arr.sort((a, b) => a - b);
//     }

//     remove(index) {
//         if (this.checkSize(index)) {
//             throw new Error('Incorect index!');
//         }
//         this.arr = this.arr.filter((value, filterIndex, arr) => {
//             return filterIndex != index; 
//         })
//         this.size = this.getSize();
//     }

//     get(index) {
//         if (this.checkSize(index)) {
//             throw new Error('Incorect index!');
//         }
//         return this.arr[index];
//     }

//     checkSize(index) {
//         return index >= this.getSize(); 
//     } 

//     toString() {
//         return `${this.arr}`;
//     }
// }

// const l = new List();

// l.add(5);
// console.log(l.get(0));

// // console.log(`${l}`)

// l.add(3);

// console.log(l.size)

// console.log(`${l}`)

// l.remove(0);
// console.log(`${l}`)
// console.log(l.get(0));

// // console.log(`${l}`)

// // console.log(l.get(4));

class List {
    constructor() {
        this.size = 0;
        this.numbers = [];
    }

    add(number) {
        this.numbers.push(number);
        this.size += 1
        this.numbers.sort((a, b) => a - b);
    }

    get(index) {
        this.outOfBoundCheck(index);
        return this.numbers[index];
    }

    remove(index) {
        this.outOfBoundCheck(index);
        this.numbers.splice(index, 1);
        this.size -= 1;
    }

    outOfBoundCheck(index) {
        if (index < 0 || index >= this.numbers.length) {
            throw new Error('No such index in list');
        }
    }
}