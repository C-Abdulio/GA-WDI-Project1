const player = document.querySelector("#player-Rev");//RevRad, your robot racer
const board = document.querySelector("#board");//the board element and the name of the major parent div
const junk = document.getElementById('objectsInSpace');



function playGame(){//small little function to help get the elements ready
  // debugger;
  let start = document.querySelector('.button');//select the start button
  start.style.display = 'block';//display that sucka
  start.style.marginTop = '200px';// move it down 200px
  start.addEventListener('click', evt => getReady());
  function getReady(){//small little functions to place Rev in place
    console.log('is this working?')
    start.style.display = 'none';//
    revStart();
    function revStart(){
    player.style.left = "320px";
    player.style.top = "250px";
    junk.style.left = junk + "2em";
    scrolling();
    }
    function scrolling(){//
        // debugger;
        let pos = 0;
        let force = setInterval(spaceJunk, 1000);//for ever 1000ms, run this function...
        function spaceJunk(){
          if (pos >= 700){//if all the objects reach the end of the window...
            debugger
            clearInterval(force);//make them stop moving..
          } else {
            pos+=100;
            junk.style.right = pos + "px";
            console.log("workin");//console.logging to make sure it works
            }
        }
    }
  }
}
playGame();
// scrolling();
