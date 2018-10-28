/* all the global constants that we will use throughout this game */
const player = document.querySelector("#player-Rev");//RevRad, your robot racer
const windowBoard = document.querySelector("#window");//the window element and the name of the major parent div
const junk = document.getElementById('objectsInSpace');
const ufo = document.getElementById('UFO');
const asteroid = document.getElementById('spaceRock');
const pipe = document.getElementById('spacePipe');

const rev = {
  x: 15,
  y: 4
}

const walls = {
  x: 22,
  y: 10
}

const junkArray = [
  {x:10, y:(Math.floor(Math.random() * 10) + 1), el:asteroid},
  {x:10, y:(Math.floor(Math.random() * 10) + 1), el:asteroid},
  {x:10, y:(Math.floor(Math.random() * 10) + 1), el:asteroid}

]
playGame()//run the function to start the game
function playGame(){//function to start the game
  // debugger;
  console.log('is this working?')//console.log for testing
  let start = document.querySelector('.button');//select the start button
  start.style.display = 'block';//display that sucka
  start.style.marginTop = '200px';// move it down 200px
  start.style.verticleAlign = "center";
  start.style.textAlign = "center";
  player.style.display = "none";
  player.style.left = rev.x.toString() + "em" ;
  player.style.top = rev.y.toString() + 'em';
  start.addEventListener('click', evt => getReady());//click the button



  function getReady(){//mini function that intiialzises elements for the game
    console.log('gemmu statto')//console.log for testing
    start.style.display = 'none';//eliminate start button
    //set the starting position of the player
    player.style.display = "block";
    player.style.left = "420px";
    player.style.top = "700px";
    revRockIt();
    //set the starting position of the obsticles
    junk.style.left = junk + "2em";
    junk.style.width = "2em";
    // UFO.style.left = "300px";
    // UFO.style.top = "250px";
    // asteroid.style.left = "200px";
    makeJunk();
    scrolling();
  }
  //function that makes the player move
    function revRockIt(){
      // debugger; - for testing
      // add an event listener to the entire doument that allows for key presses with values
      document.addEventListener('keydown', tap =>{//on key press of arrow functions
        const keyPress = tap.keyCode;//this constant translate non-character keys to values
        // console.log(keyPress) //for testing
        // let top = parseInt(player.style.top);//read the string argument and turn it into a number position on window
        // let left = parseInt(player.style.left);//ditto
        if ([37, 38, 39, 40].includes(keyPress)) { //if keypress is the interger values of up right left or down
          tap.preventDefault(); //prevent the key press from using the default action of the browser
        }
        switch (keyPress) {
          case 37://equal to left arrow key
            moveLeft();
            console.log("move left");
            break;
          case 38://equal to up arrow key
            moveUp();
            console.log("move up");
            break;
          case 39://equal to right arrow key
            moveRight();
            console.log("move right");
            break;
          case 40://equal to down arrow key
            moveDown();
            console.log("move down");
            break;
          default:
        }

        function moveRev(x, y){
          player.style.left = (rev.x * 50).toString() + 'px';
          player.style.top = (rev.y * 50).toString() + 'px';
        }

        function moveLeft(){
          if(canMoveTo(rev.x -1, rev.y)){
            console.log(rev.x -= 1);
            moveRev(rev.x, rev.y);
          }
        }
         function moveUp(){
           if(canMoveTo(rev.x, rev.y - 1)){
             console.log(rev.y -= 1);
             moveRev(rev.x, rev.y);
           }
         }
         function moveRight(){
           if(canMoveTo(rev.x + 1, rev.y)){
             console.log(rev.x += 1);
             moveRev(rev.x, rev.y);
           }
         }
         function moveDown(){
           if(canMoveTo(rev.x, rev.y + 1)){
             console.log(rev.y += 1);
             moveRev(rev.x, rev.y);
           }
         }
      })
    }

    function canMoveTo(x, y){
  if(displayGuard(x, y)){
    colAction(x, y);
    return false;
  }
  else if (junkCheck(rev.x, rev.y)){
  return false;
  }
  else{
    return true;
  }
}

function displayGuard(x, y){//defines the borders of the display
   if ((x < 10 || x > 17 || y < 0 || y > 11)){
     return true;
   }
 }

 function junkCheck(x, y){
   if(junkArray.some(pOj => rev.x === pOj.x && rev.y === pOj.y)){
     return true;
   }
 }

 function scrolling(){//This function is
     // debugger;
     let pos = 0;
     // junkArray.forEach(each => each.x -= 1 );
     let force = setInterval(spaceJunk, 1500);//for ever 1000ms, run this function...
     function spaceJunk(){
      junkArray.forEach(each => {each.x -= 1;
        if (pos >= 1200 && each.x < 8){//if all the objects reach the end of the window...
          // debugger;
          console.log("workin");
          junkCheck();
          // clearInterval(force);//make them stop moving..
        }
          else {
          pos+=100;
          makeJunk();
          junk.style.width = pos + "px";
          // junk.style.right = pos + "px";
          console.log("workin?");//console.logging to make sure it works
        }
      });
     }
 }

 function makeJunk(){
  let rocks = document.createElement('img');
  rocks.id = 'spaceRock';
  rocks.className = 'object';
  let random = junkArray[(Math.floor(Math.random() * junkArray.length) + 1)];
  junk.appendChild(rocks);

 }

 function colAction(x,y){
   console.log('this is x ',x);
   console.log('this is y ',y);
   console.log('this is revX ',rev.x);
   console.log('this is revY ',rev.y);
   if ((x === rev.x) || (y === rev.y)){
     player.id = "collissionState";
     player.style.transform = "rotate(90deg)";
     console.log('we have collision');
      return true;
    }
    revRockIt();
    return false;
 }


}
