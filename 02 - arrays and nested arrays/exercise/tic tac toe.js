function game(arr) {

    const playField = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    const winningConditions = [
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ];

    let player = 'O';

    for (let i = 0; i < arr.length; i++) {
        let [x, y] = arr[i].split(' ');
        x = Number(x);
        y = Number(y);

        if (playField[x][y] == false) {
            if (player === 'X') {
                player = 'O';
            } else {
                player = 'X';
            }
            playField[x][y] = player;
        } else {
            console.log('This place is already taken. Please choose another!');
        }

        let winner = checkForWin();
        if (winner != false) {
            console.log(`Player ${winner} wins!`);
            break;
        }

        let hasFinished = true;
        for (let j = 0; j < 3; j++) {
            let lineFinished = true;
            for (let k = 0; k < 3; k++) {
                if (playField[j][k] == false) {
                    lineFinished = false;
                    break;
                }
            }
            if (lineFinished == false) {
                hasFinished = false;
                break;
            }
        }

        if (hasFinished) {
            console.log('The game ended! Nobody wins :(');
            break;
        }
    }

    for (let i = 0; i < playField.length; i++) {
        console.log(playField[i].join('\t'));
    }

    function checkForWin() {
        for (win of winningConditions) {
            if (playField[win[0][0]][win[0][1]] != false &&
                playField[win[0][0]][win[0][1]] === playField[win[1][0]][win[1][1]] &&
                playField[win[0][0]][win[0][1]] === playField[win[2][0]][win[2][1]]) {
                    return playField[win[0][0]][win[0][1]];
                }
        }
        return false;
    }
}

game(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
)
