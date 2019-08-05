<p align="center">
# 2048 


<img width="400" height="500" alt="gif" src="https://user-images.githubusercontent.com/29616227/62475739-a5a9c700-b773-11e9-902f-a878bcd55bc3.gif">





## Project
This game 2048 is a grid game where the player must reach the highest number of 2048 in order to win.

## Description 
The player starts with two tiles that are randomly generated and placed on the grid. Both of these tiles will be the number 2. 

The player is then allowed to move left right up or down. Each turn will result in a new tile being randomly placed on the board.  If two of the same number collide then they will merge together and generate a new tile that will be the sum of those two numbers. 


## Technologies used
Built with JavaScript, CSS and HTML



## Sneak peak

```JSX
function createCells() {
    for (let i = 0; i < size; i++) {
        grid[i] = [];
        for (let j = 0; j < size; j++) {
            let newCell = new cell(i, j)
            grid[i][j] = newCell
            drawCell(newCell)
        }
    }
}


function drawAllCells() {
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            drawCell(grid[i][j]);
        }
    }
}


function createCell() {
    let freeCell = 0;
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            if (!grid[i][j].value) {
                freeCell++
            }
        }
    }

    if (!freeCell) {
        isGameOver()
        return;

    }
    while (true) {
        let i = Math.floor(Math.random() * 4)
        let j = Math.floor(Math.random() * 4)
        const getCell = grid[i][j]
        if (getCell.value === 0) {
            let r = Math.random();
            let value = r < 0.5 ? 2 : 4;
            getCell.value = value
            drawCell(getCell)
            return
        }
    }
}

function isGameOver() {
    gameover = true;
    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            if (grid[i][j] == 0) {
                return false;
            }
            if (j !== 3 && grid[i][j] === grid[i][j + 1]) {
                return false;
            }
            if (i !== 3 && grid[i][j] === grid[i + 1][j]) {
                return false;
            }
        }
    }
    gameOver();
}


function slide(row) {
    let arr = row.filter(row => row > 1)
    let empty = (4 - arr.length);
    let zeros = Array(empty).fill(0);
    arr = zeros.concat(arr)
    console.log(arr)
    return arr;
}

function combine(row) {
    for (let i = 3; i >= 0; i--) {
        let a = row[i];
        let b = row[i - 1]
        if (a == b) {
            row[i] = a + b
            row[i - 1] = 0
            break
        }
    }
    return row;
}

```


This project is available a (https://twentyfoureight.surge.sh)

</p>

