function solve() {
    const table = document.getElementsByTagName('table')[0];
    const boxes = Array.from(document.querySelectorAll('input[type="number"]'));

    const [checkBtn, clearBtn] = table.getElementsByTagName('button');

    const result = document.getElementById('check').children[0];


    checkBtn.addEventListener('click', onClick);

    function onClick(e) {
        
    }



    console.log(checkBtn, clearBtn);
}

// if (new Set(boxes).lenght < boxes.length) {
//     table.style.border = '2px solid red';
//     result.style.color = 'red';
//     result.textContent = 'NOP! You are not done yet...'
// }