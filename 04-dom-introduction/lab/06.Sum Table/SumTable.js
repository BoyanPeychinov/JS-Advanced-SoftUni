function sumTable() {
    // select first table
    const row = document.querySelectorAll('table tr');
    // select only rows, containing values
    // repeat for every row
    // - find last cell
    // - add cell value to sum
    let sum = 0;

    for (let i = 1; i < row.length - 1; i++){
        const cell = row[i].lastElementChild;
        sum += Number(cell.textContent);
    }

    // select element with id "sum" and set its value
    document.getElementById('sum').textContent = sum;
}