function sorter(arr) {
    const result = arr.sort((a, b) => {
        if (a.length == b.length) {
            return a.localeCompare(b);
        } else {
            return a - b;
        }
        // if (a.length > b.length) {
        //     return 1;
        // } else if (a. length == b.length) {
        //     return a.localeCompare(b);
        // } else {
        //     return -1;
        // }
    })
    console.log(result.join('\n'));
}

sorter(['alpha', 'beta', 'gamma']);

sorter(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);

sorter(['test', 'Deny', 'omen', 'Default']);