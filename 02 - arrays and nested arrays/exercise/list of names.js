function sortNames(arr) {
    let result = arr.sort((a, b) => a.localeCompare(b));

    result.forEach((el, number) => {
        console.log(`${number + 1}.${el}`);
    })
}

sortNames(["John", "Bob", "Christina", "Ema"]);