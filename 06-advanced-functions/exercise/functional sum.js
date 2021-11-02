function sum(num) {
    let sum = num;

    function add(num2) {
        sum += num2;
        return add;
    }

    add.toString = () => {
        return sum;
    }

    return add;
}


console.log(sum(4)(3)(-2).toString())
console.log(sum(4).toString())
