const player = document.querySelector("#player-Rev");//RevRad, your robot racer
const board = document.querySelector("#board");//the board element and the name of the major parent div
const junk = document.getElementById('objectsInSpace');

const rev = {
  x: 0, y: 0
}


function playGame(){//function to start the game
  // debugger;
  let start = document.querySelector('.button');//select the start button
  start.style.display = 'block';//display that sucka
  start.style.marginTop = '200px';// move it down 200px
  start.addEventListener('click', evt => getReady());//click the button

  function getReady(){//mini function that intiialzises elements for the game
    console.log('is this working?')//console.log for testing
    start.style.display = 'none';//eliminate start button
    //set the starting position of the player
    player.style.left = "320px";
    player.style.top = "250px";
    //set the starting position of the obsticles
    junk.style.left = junk + "2em";
    revRockIt();//run function to move player
    scrolling();//run function to scroll items
    }
}
    //
    function revRockIt(){
      // debugger;

      document.addEventListener('keydown', tap =>{
        const keyPress = tap.keyCode;
        console.log(keyPress)
        let top = parseInt(player.style.top);//read the string argument and turn it into a number position on board
        let left = parseInt(player.style.left);
        if ([37, 38, 39, 40].includes(keyPress)) { //if keypress is up right left or down
          tap.preventDefault(); //prevent the key press from using the default action of the browser
        }
        switch (keyPress) {
          case 37://equal to left arrow key
            left -= 50 ;//removing 50px from the left, moving to the left
            console.log(player.style.left);
            console.log("move left");
            break;
          case 38://equal to up arrow key
            top -= 50 ;//removing 50px from the top, moving to the top
            console.log(player.style.top);
            console.log("move up");
            break;
          case 39://equal to right arrow key
            left += 50 ;//adding 50px from the left, moving to the right
            console.log(player.style.left);
            console.log("move right");
            break;
          case 40://equal to down arrow key
            top += 50 ;//adding 50px from the top, moving to the bottom
            console.log(player.style.top);
            console.log("move down");
            break;
          default:
        }
        player.style.left = left + 'px';
        player.style.top = top + 'px';
        // function moveRev(x, y){//the function that moves the element div
        //   player.style.top = (rev.y * 100).toString() + 'px';//this moves Rev along the x axis at 100px
        //   player.style.left = (rev.x * 100).toString() + 'px';//this moves Rev along the y axis at 100px
        // }
        //
        // function moveLeft(){//function to move Rev left
        //     rev.x -= 1;//take away 1 from the x value
        //     moveRev(rev.x, rev.y);//move Rev 100px to the left
        //   }
        //
        // function moveUp(){//function to move Rev up
        //     rev.y -= 1;//take away 1 from the y value
        //     moveRev(rev.x, rev.y)//move Rev 100px upwards
        //   }
        //
        //
        // function moveRight(){//function to move Rev right
        //     rev.x += 1;//add 1 from the x value
        //     moveRev(rev.x, rev.y)//move Rev 100px to the right
        //   }
        //
        //
        // function moveDown(){//function to move Rev down
        //     rev.y += 1;//add 1 from the y value
        //     moveRev(rev.x, rev.y)//move Rev 100px dowwards
        //   }
      })
    }
    function scrolling(){//
        // debugger;
        let pos = 0;
        let force = setInterval(spaceJunk, 1000);//for ever 1000ms, run this function...
        function spaceJunk(){
          if (pos >= 700){//if all the objects reach the end of the window...
            // debugger;
            clearInterval(force);//make them stop moving..
          } else {
            pos+=100;
            junk.style.right = pos + "px";
            console.log("workin");//console.logging to make sure it works
            }
        }
    }
    function moveRev(x, y){//the function that moves the element div
      player.style.top = (rev.y).toString() + 'px';//this moves Rev along the x axis at 100px
      player.style.left = (rev.x).toString() + 'px';//this moves Rev along the y axis at 100px
    }

playGame();
// scrolling();
