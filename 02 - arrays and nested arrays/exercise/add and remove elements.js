function solve(arr) {
    let number = 1;
    let result = [];

    arr.forEach((el) => {
        if (el == 'add'){
            result.push(number);
        } else {
            result.pop();
        }
        number++;
    }
    )
    if (result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}

solve(['add', 
'add', 
'add', 
'add']
);

solve(['add', 
'add', 
'remove', 
'add', 
'add']
);

solve(['remove', 
'remove', 
'remove']
);