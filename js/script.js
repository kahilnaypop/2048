
window.onload = function () {
    newGame();
}

// const canvas = document.getElementById("canvas")
// ctx is the context 
// const txt = canvas.getContext('2d')

let sizeInput = document.getElementById("size");
let changeScore = document.getElementById("score")

let score = 0
let width = 100

let fontSize;
let loss = false;

let grid = []
let size = 4;


// document.onKeyDown(event => {
//     if (event.keyCode === 39) {




let playbutton = document.getElementById('playbutton')


playbutton.addEventListener('click', () => get2RandomCells())




function newGame() {
    createCells()
    drawAllCells()
    createCell()
    createCell()
    // drawCell()
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
    let options = []
    let i = Math.floor(Math.random() * 4)
    let j = Math.floor(Math.random() * 4)
    const getCell = grid[i][j]

    let r = Math.random();

    let value = r < 0.5 ? 2 : 4;
    getCell.value = value

    drawCell(getCell)

}
// function keyRight() {
//     document.addEventListener("keydown", event => {
//         if (event.isComposing || event.keyCode === 39) {

//         })
// }



// create a slide function , make array
function slide(row) {
    let arr = row.filter(row => row > 1)
    let empty = (4 - arr.length);
    let zeros = Array(empty).fill(0);
    arr = zeros.concat(arr)
    console.log(arr)

    return arr;
}

// function updateDomBoard() {
// for (let i = 0; i < size; i++) {
//     cells[i] = [];
//     for (let j = 0; j < size; j++) {


// document.getElementById("p1").innerHTML = "New text!";







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



//  Combines and slides  
function slideCombine(row) {
    row = slide(row)
    row = combine(row)
    row = slide(row)
    row = combine(row)

    return row;

}





//  move right 
// function moveRight() {
//     slide()
//     assignRandomCell()
// }


//  move right and updates dom
function moveRight() {
    for (let i = 0; i < size; i++) {
    }
    // get all 4 rows in your grid 
    // map throughj the row of cells so it becomes just the numbers 
    // pass into slide combine 
    // with new numbers upadate by updating row 
    // update all of the cells 


    slideCombine()

    // let i, row

    // cycle through i & j to see which tiles are o
    // for (let i = 0; i < size; i++) {
    //     row = operate(row)

    // }
    // for (let j = 0; j < size; i++) {
    //     if (!cells[i][coll + 1].value) {

    //     grid[i] = slide(grid[i])
    // }

    createCell()

}

function operate(row) {
    grid[i] = slide(grid[i])
    grid[i] = combine(grid[i])
    grid[i] = slide(gride[i])
    return row;
}







//  move left and updates dom
function moveLeft() {
    for (let i = 0; i < 4; i++) {
        grid[i] = slide(grid[i])
        console.log(grid[i])
    }

}

//  move up
function moveUp() {
    for (let i = 0; i < 4; i++) {
        grid[i] = slide(grid[i])
        console.log(grid[i])
    }

}



//  move down
function moveDown() {
    for (let i = 0; i < 4; i++) {
        grid[i] = slide(grid[i])
        console.log(grid[i])
    }

}





// takes in keys 
document.addEventListener('keydown', event => {
    if (event.keyCode === 38) {
        moveUp();
    } else if (event.keyCode === 39) {
        moveRight();
    } else if (event.keyCode === 40) {
        moveDown();
    } else if (event.keyCode === 37) {
        moveLeft();
    }
    // scoreLabel.innerHTML = 'Score : ' + score;
})








function drawCell(cell) {

    let id = cell.x * 4 + cell.y;
    let newCell = document.getElementById(String(id))

    // console.log(newCell, id)

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
    }

}

        // document.body.addEventListener("keydown", evt => {
        //     moveRight(evt)
        // })





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