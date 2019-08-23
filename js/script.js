
window.onload = function () {
    newGame();
    scoreZero();
}



let changeScore = document.getElementById("score")

let score = 0
let width = 100
let fontSize;
let grid = []
let size = 4;
let flipped = false


let playbutton = document.getElementById('playbutton')
playbutton.addEventListener('click', () => newGame())


function newGame() {
    scoreZero()
    gameOn()
    createCells()
    drawAllCells()
    createCell()
    createCell()
}

function cell(row, column) {
    this.value = 0
    this.x = column
    this.y = row
}

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


function slideCombine(row) {
    row = slide(row)
    row = combine(row)
    row = slide(row)
    return row;
}

function flip() {
    for (let i = 0; i < size; i++) {
        grid[i].reverse()
    }
}

function flipTwo(array) {
    for (let i = 0; i < size; i++) {
        array[i].reverse()
    }
}

function transposeArray(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push([]);
    };

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            newArray[j].push(array[i][j]);
        };
    };
    return newArray;
}

function moveRight() {
    moveMatrixTwo(transposeArray(grid));
}

function moveMatrixTwo(gridArray) {
    for (let i = 0; i < size; i++) {
        let currentRow = gridArray[i]
        let newArrayOfNumbers = currentRow.map((obj) => {
            return obj.value
        })
        let slidArray = slideCombine(newArrayOfNumbers)
        for (let i = 0; i < size; i++) {
            currentRow[i].value = slidArray[i]
            drawCell(currentRow[i])
        }
    }
    createCell()
}

function moveMatrix() {
    for (let i = 0; i < size; i++) {
        let currentRow = grid[i]
        let newArrayOfNumbers = currentRow.map((obj) => {
            return obj.value
        })

        let slidArray = slideCombine(newArrayOfNumbers)
        for (let i = 0; i < size; i++) {
            currentRow[i].value = slidArray[i]
            drawCell(currentRow[i])
        }
    }
    createCell()
}

function moveUp() {
    flip()
    moveMatrix();
    flip()
}

document.addEventListener('keydown', event => {
    if (event.keyCode === 38) {
        event.preventDefault()
        moveUp()
    } else if (event.keyCode === 40) {
        event.preventDefault()
        moveMatrix();
    } else if (event.keyCode === 39) {
        event.preventDefault()
        moveRight();
    } else if (event.keyCode === 37) {
        event.preventDefault()
        moveLeft();
    }
})

//make her swipe 

// window.addEventListener('load', function(){
//     let swipe = document.getElementById('swipe'),
//     startX,
//     startY,
//     dist,
//     threshold = 150,
//     allowedTime = 200,
//     elapsedTime,
//     startTime

//     function handleSwipe(isRight) {
//         if (isRight)
//         swipe.innerHTML = 'you swiped'
//         else {
//             swipe.innerHTML = 'no swipe right'
//         }
//     }

//     swipe.addEventListener('touchstart', function(e) {
//         swipe.innerHTML = ''
//         var touchObj = e.changedTouches[0]
//         dist = 0
//         startX = touchObj.pageX
//         startY = touchObj.pageY
//         startTime = new Date().getTime()
//         e.preventDefault()
//     }, false)

//     swipe.addEventListener('touchend', function(e) {
//         let touchObj = e.changedTouches[0]
//         dist = touchObj.pagex - startX
//         elapsedTime = new Date().getTime() - startTime
//         let swipeRightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchObj.pageY - startY) <= 100)
//         handleSwipe(swipeRightBol)
//         e.preventDefault()
//     }, false)
// }, false)






function drawCell(cell) {

    let id = cell.x * 4 + cell.y;
    let newCell = document.getElementById(String(id))

    switch (cell.value) {

        case 0:
            newCell.style.backgroundColor = "white";
            break;
        case 2:
            newCell.style.backgroundColor = "#E6B0AA";
            break;
        case 4:
            newCell.style.backgroundColor = "#CD6155";
            break;
        case 8:
            newCell.style.backgroundColor = "#A93226";
            break;
        case 16:
            newCell.style.backgroundColor = "#7B241C";
            break;
        case 32:
            newCell.style.backgroundColor = "#F2D7D5";
            break;
        case 64:
            newCell.style.backgroundColor = "#D98880";
            break;
        case 128:
            newCell.style.backgroundColor = "#C0392B";
            break;
        case 256:
            newCell.style.backgroundColor = "#D7BDE2";
            break;
        case 512:
            newCell.style.backgroundColor = "#A9CCE3";
            break;
        case 1024:
            newCell.style.backgroundColor = "#AED6F1";
            break;
        case 2048:
            newCell.style.backgroundColor = "#A3E4D7";
            break;
        case 4096:
            newCell.style.backgroundColor = "#A9DFBF";
            break;
    }
    if (cell.value === 0) {
        newCell.innerText = ''
    } else {
        newCell.innerText = cell.value
        score += cell.value
        countScore(score)
    }

}

function countScore(score) {
    document.querySelector("#score").innerHTML = score
}

function gameOver() {
    document.querySelector(".winnerdiv").style.opacity = "1"
}


function gameOn() {
    document.querySelector(".winnerdiv").style.opacity = "0"
}

function scoreZero() {
    document.querySelector("#score").innerHTML = 0
}

