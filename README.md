# 2048



Project #1: The Game

Include at least one CSS animation/transition fired by a DOM event

See details in CSS

use css animation when two of the same blocks collide
more animation when new block appears 



Use flexbox or CSS grid for layout and positioning

grid 4 by 4 using CSS grid 



	•	https://github.com/kahilnaypop/2048


A description of the game you'll be building with the objective described in non-technical language.

This game 2048 is a grid game where the player must reach the highest number of 2048 in order to win.

	•	Description 


The player starts with two tiles that are randomly generated and placed on the grid. Both of these tiles will be the number 2. 

The player is then allowed to move left right up or down. Each turn will result in a new tile being randomly placed on the board.  If two of the same number collide then they will merge together and generate a new tile that will be the sum of those two numbers. 

	•	Technologies
Need to select the 4 keys that the player will use using eventListener 
CSS styling for the grid
CSS animation for generating of new tiles and when tiles collide
JS function, objects and arrays
Collision Detection 



	•	 major problems 
Having the tiles add together when they collide.
Animating the random new tiles
Having the tiles of different values be different colors
Declaring a winner. 
and many more …


	•	solving the aforementioned problems.
having the event listener react with the CSS and have the background color change 
When the random grid location is generated having it trigger an animation outlined in the CSS



	•	A link to your live game deployed on GitHub Pages
	•	An explanations of the technologies used
	•	Select wireframes
	•	Additional information including but not limited to - the approach taken, installation instructions, unsolved problems, etc.



data - each square will need to have a grid id assigned to it.

presentation -
views - 
style - 
DOM manipulation - 



junk code 


let tile1
let tile2
let tile3



trying to use class?

    // function setup() {
    //     createCanvas(600, 400);
    //     tile = new Tile()
    // }


column class

values ()
index ()
slide up 
down 


class grid 
columns: [0,0,0,0,]
slide left 
right 



//     class column {
//         constructor() {
//             this.two = 2
//             this.four = 4
//             this.eight = 8
//             this.sixteen = 16
//             this.thirtyTwo = 32
//             this.sixtyFour = 64
//             this.oneTwentyEight = 128
//             this.twoFiftySix = 256
//             this.fiveTwelve = 512
//             this.thousandTwentyFour = 1024
//             this.twoThousandTwentyFour = 2024
//         }
//         move() {
//             this.two = this.two + randon(-5, 5)
//             this.four = this.four + randon(-5, 5)
//         }
//     }
// }


trying to assign movements 

    // move up function 
    // move right func
    // move down func
    // move left func

    // document.onkeydown = function (event) {
    //     if (!loss) {
    //         if (event.keyCode = 38 moveUp();
    //         else if (event.keyCode = 39 moveRight();
    //         else if (event.keyCode = 40 moveDown();
    //         else if (event.keyCode = 37 moveLeft();
    //         Score ...
    //     }
    //

	        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                nofill()
                strokeWeight(2);
                stroke(0);
                ClientRect(i * w, j * w, w, w)
                if (grid[i][j]) !== 0) {
                    textAlign(center.center)
                    textSize(64);

                }

            }
        }
    }




let changeSize = document.getElementById("change-size")
let size = 4

   <p id="size-title"> Size : </p>
        <input id="size" type="number" value="4">
        <input id="change-size" type="button" value="ok">

/for p5
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.js"></script>
	<script src="https://cdn.jsdelivr.net/gh/molleindustria/p5.play@42cd19c3/lib/p5.play.js"></script>
	
	 ctx.beginPath();


	 txt.fillText(cell.value, cell.x + width / 2, cell.y + width / 2);


    let randomNumber = Math.floor(Math.random() * 15);
    let firstCell = document.getElementById(randomNumber)
    firstCell.setAttribute('data', 2)
    let randomNumberTwo = Math.floor(Math.random() * 15);
    let secondCell = document.getElementById(randomNumberTwo)
    secondCell.setAttribute('data', 2)

    drawCell(firstCell, secondCell)
    console.log(firstCell, secondCell)
}

// This should make the number on the left become zero and the new number twice what it was, operating on array itself
function combine(row) {
    if row[0] == row[1] && row[2] == row[3] {
        return row;
    } else {

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

    <!-- <div id="canvas-bloc"> -->
        <!-- <canvas id="canvas" width="600" height="600"></canvas> -->