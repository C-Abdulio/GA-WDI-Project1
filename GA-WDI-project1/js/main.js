const player = document.querySelector("#player-Rev");//RevRad, your robot racer
const windowBoard = document.querySelector("#window");//the window element and the name of the major parent div
const junk = document.getElementById('objectsInSpace');
const UFO = document.getElementById('UFO');
const asteroid = document.getElementById('spaceRock')
// let wndwShop = window.getContext('2d');
//
let windWidth = windowBoard.style.width = "400px";
let windHeight = windowBoard.style.height = "600px";
console.log(windWidth);
console.log(windHeight);

let revWidth = player.style.left + player.style.width;
let revHeight = player.style.top + player.style.height;

const rev = {
  x: 0,
  y: 0
}



function playGame(){//function to start the game
  // debugger;
  console.log('is this working?')//console.log for testing
  let start = document.querySelector('.button');//select the start button
  start.style.display = 'block';//display that sucka
  start.style.marginTop = '200px';// move it down 200px
  start.style.verticleAlign = "center";
  start.style.textAlign = "center";
  start.addEventListener('click', evt => getReady());//click the button



  function getReady(){//mini function that intiialzises elements for the game
    console.log('gemmu statto')//console.log for testing
    start.style.display = 'none';//eliminate start button
    //set the starting position of the player
    player.style.left = "420px";
    player.style.top = "250px";
    //set the starting position of the obsticles
    junk.style.left = junk + "2em";
    // junk.style.width = "2em";
    UFO.style.left = "300px";
    UFO.style.top = "250px";
    asteroid.style.left = "200px";

    /* This is a bonus function to use when it is time to come up with random items.
    Make sure this works on VanillaJS and not any APIs like CANVAS. Combine this with setInterval
    // function readyItems(){
      // wndwShop.drawImage(bg, 0, 0);
      // wndwShop.drawImage(#player-Rev, rev.x, rev.y);
        function makePipes{
          for(let i = 0; i < pipe.length){
          // wndwShop.drawImage(#spacePipe, pipe[i].x, pipe[i].y);
          // wndwShop.drawImage(#spacePipe, pipe[i].x, pipe[i].y + Const);
          pipe[i]--;
          if (pipe[i].x === window.width - 320){
            pipe.push(x: window.width, y: Math.floor(Math.random() * pN.height) - pN.height);
          }
        }

      // wndwShop.drawImage(#spacePipe, pX, pY+Const);
      }
      // wndwShop.drawImage(#UFO, bX, bY);
      // requestAnimationFrame(readyItems)
    // }
    readyItems();
    */
    revRockIt();//run function to move player
    scrolling();//run function to scroll items
    }
}
    //function that makes the player move
    function revRockIt(){
      // debugger; - for testing
      // add an event listener to the entire doument that allows for key presses with values
      document.addEventListener('keydown', tap =>{//on key press of arrow functions
        const keyPress = tap.keyCode;//this constant translate non-character keys to values
        // console.log(keyPress) //for testing
        let top = parseInt(player.style.top);//read the string argument and turn it into a number position on window
        let left = parseInt(player.style.left);//ditto
        if ([37, 38, 39, 40].includes(keyPress)) { //if keypress is the interger values of up right left or down
          tap.preventDefault(); //prevent the key press from using the default action of the browser
        }
        switch (keyPress) {
          case 37://equal to left arrow key
            left -= 50 ;//removing 50px from the left, moving to the left
            console.log(player.style.left);
            console.log("move left");
            break;
          case 38://equal to up arrow key
          // if (moveTo(left, top)){
          //   top -= 50 ;//removing 50px from the top, moving to the top
          //   console.log(player.style.top);
          //   console.log("move up");
          //   break;
          // }
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
        player.style.left = left + 'px';//this allows the use of the movement function
        player.style.top = top + 'px';

        /* This is the gravity feature you will attempt to add after MVP has been met
        function revGrav(){
         //read the string argument and turn it into a number position on window
         let top = parseInt(player.style.top);
         let gravity = ;
         //this allows the gravity to increment according the pixel position on the display
         player.style.top += gravity
      }*/

      })
    }

    function scrolling(){//This function is
        // debugger;
        let pos = 0;
        let force = setInterval(spaceJunk, 1000);//for ever 1000ms, run this function...
        function spaceJunk(){
          if (pos >= 900){//if all the objects reach the end of the window...
            // debugger;
            clearInterval(force);//make them stop moving..
          } else {
            pos+=100;
            //makeAsteroid();
            // junk.style.width = pos + "px";
            junk.style.right = pos + "px";
            console.log("workin");//console.logging to make sure it works
            }
            // function makeAsteroid(){
            //    let asteroid = new Image();
            //   asteroid.src = "";
            //   wndwShop.drawImage(asteroid,200,670,100,100);
            // }
        }
    }

      function displayGuard(x, y){//determines the boundaries of the display window
        if (x <= 220 || x >= windWidth || y < windHeight || y > windHeight){// if Rev hits these position points in the display window
        return true;
        }
        return false;
      }


    function moveTo(x, y){
      if (displayGuard(x,y)){
        console.log("Out of Bounds");
        return false;
      }
      //  else if(watchOut(x,y)){
      //    for(var i = 0; i < )
      //   console.log("Ouch");
      //   return false;
      // }
      else {
        return true;
      }
    }
    // function moveRev(x, y){//the function that moves the element div
    //   player.style.top = (rev.y).toString() + 'px';//this moves Rev along the x axis at 100px
    //   player.style.left = (rev.x).toString() + 'px';//this moves Rev along the y axis at 100px
    // }

playGame();
// scrolling();
