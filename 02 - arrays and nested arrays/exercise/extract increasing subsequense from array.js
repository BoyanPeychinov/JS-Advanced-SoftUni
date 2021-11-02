// function solve(arr) {
//     let biggest = Number.MIN_SAFE_INTEGER;
//     const result = arr.filter((el) => {
//         if (el >= biggest) {
//             biggest = el;
//             return true;
//         }
//         return false;
//     }
//     )
//     return result;
// }

// function solve(arr) {
//     let biggest = Number.MIN_SAFE_INTEGER;
//     let result = [];
//     arr.forEach((el) => {
//         if (el >= biggest) {
//             result.push(el);
//             biggest = el;
//         }
//     })
//     return result;
// }

function solve(arr) {
    let biggest = Number.MIN_SAFE_INTEGER;
    let result = [];

    arr.reduce((accumulated, current) => {
        if (current >= biggest) {
            biggest = current;
            accumulated.push(current);
        }

        return accumulated;
    }, result)

    return result;
}


console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));

solve([1, 2, 3,4]);

solve([20, 3, 2, 15,6, 1]);