
window.onload = function () {
    newGame();
    scoreZero();

}

// const canvas = document.getElementById("canvas")
// ctx is the context 
// const txt = canvas.getContext('2d')

let changeScore = document.getElementById("score")

let score = 0
let width = 100

let fontSize;
// let loss = false;

let grid = []
let size = 4;
let flipped = false


let playbutton = document.getElementById('playbutton')
playbutton.addEventListener('click', () => newGame())

let welcome = document.querySelector('.welcome')
welcome.addEventListener('click', () => {
    welcome.style.display = "none";
})


function newGame() {
        scoreZero()
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


// creates random cell
function createCell() {
        // tried to make a game over function
        let freeCell = 0;
        for (i = 0; i < size; i++) {
            for (j = 0; j < size; j++) {
                if (!grid[i][j].value) {
                    freeCell++
                }
            }
        }

        if (!freeCell) {
            gameOver();
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


// create a slide function , make array
function slide(row) {
        let arr = row.filter(row => row > 1)
        let empty = (4 - arr.length);
        let zeros = Array(empty).fill(0);
        arr = zeros.concat(arr)
        console.log(arr)

        return arr;
    }


// This should make the number on the left become zero and the new number twice what it was, operating on array itself
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




//  Combines and slides row 
function slideCombine(row) {
        row = slide(row)
        row = combine(row)
        row = slide(row)
        // row = combine(row)

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

function moveLeft() {
        moveMatrixTwo(transposeArray(grid));
        flipTwo(transposeArray(grid))
        flipTwo(transposeArray(grid))
        moveMatrixTwo(transposeArray(grid));

    }



function moveMatrixTwo(gridArray) {
        for (let i = 0; i < size; i++) {
            let currentRow = gridArray[i]
            // takes the value of each obj and assigns it to a number
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



// get all 4 rows in your grid 
// map throughj the row of cells so it becomes just the numbers 
// pass into slide combine 
// with new numbers upadate by updating row 
// update all of the cells 
//  move right and updates dom
function moveMatrix() {
        // let pastGrid = copy(grid)
        for (let i = 0; i < size; i++) {
            let currentRow = grid[i]
            // takes the value of each obj and assigns it to a number
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


//  move up


//  move left and updates dom
// create new combine method for j index 
// create combine on j axis 

// function moveLeft() {
//     for (let j = 0; j < size; j++) {
//         let currentColl = grid[j]
//         // takes the value of each obj and assigns it to a number
//         let newArrayOfNumbers = currentColl.map((obj) => {
//             return obj.value

//         })

//         let slidArray = slideCombineColl(newArrayOfNumbers)

//         for (let j = 0; j < size; j++) {
//             currentColl[j].value = slidArray[j]
//             drawCell(currentColl[j])
//         }

//     }
//     createCell()
// }


// takes in keys 
document.addEventListener('keydown', event => {
    event.preventDefault();

        // move up prevent default 
        if (event.keyCode === 38) {
            moveUp()
            // move down
        } else if (event.keyCode === 40) {
            moveMatrix();
            // move right 
        } else if (event.keyCode === 39) {
            moveRight();
            // move left
        } else if (event.keyCode === 37) {
            moveLeft();
        }

        // let oldScore = document.getElementById('score').innerHTML 
        // let oldScore = document.getElementById('score').innerHTML 

        // let newScore = oldScoreScore 

    })


function drawCell(cell) {

        let id = cell.x * 4 + cell.y;
        let newCell = document.getElementById(String(id))
        // let animation = document.querySelector(".cell")

        // console.log(newCell, id)

        switch (cell.value) {

            case 0:
                newCell.style.backgroundColor = "white";
                break;
            case 2:
                newCell.style.backgroundColor = "#E6B0AA";
                // animation.style.scale-down-center
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

// document.body.addEventListener("keydown", evt => {
//     moveRight(evt)
// })
function countScore(score) {
        document.querySelector("#score").innerHTML = score

    }


function gameOver() {
        document.querySelector("#go-label").style.opacity = "1"
    }

function scoreZero() {
        document.querySelector("#score").innerHTML = 0
    }


// generates random location 


    // if (cell([row][column].value)) {
    //     cell[row][column].value = (Math.random * 2)
    //     drawAllCells();


    //    
    // }





    // simple loop to slide the tiles over 
    // function keyPressed() {

    //     if (key == ' ') {
    //         for (let i = 0; i < 4; i++) {
    //             row = operate(row);


    //         }
    //     }
    //     addNumber()
    // }








    // draw the grid 
    // function draw() {
    //     background(255);
    //     drawGrid()

    // }




    // take in the board - 2d array js board 
    // pass each cell into the Dom

    //         let newCell = new cell(i, j)
    //         cells[i][j] = newCell
    //         drawCell(newCell)
    //     }
    // }


    // this draws the grid 



        // this.style.fillText(cell.value, cell.x, cell.y)



        // alternate way to create grid
    //     let w = 100
    //     for (let i = 0; i < 4; i++) {
    //         for (let j = 0; j < 4; j++) {
    //             noFill();
    //             strokeWeight(2);
    //             stroke(0);
    //             rect(i * w, j * w, w, w);
    //             if (grid[i][j] !== 0) {
    //                 textAlign(CENTER, CENTER)
    //                 textSize(60)
    //                 fill(0)
    //                 noStroke();
    //                 text(val, i * w + w / 2, j * w + w / 2);

    //             }
    //         }
    //     }
    // 