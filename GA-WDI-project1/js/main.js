const player = document.querySelector("#player-Rev");//RevRad, your robot racer
const board = document.querySelector("#board");//the board element and the name of the major parent div
const objects = document.getElementById('#objectsInSpace');


function getReady(){//small little function to help get Rev in position
  let start = document.querySelector('.button');//
  start.style.display = 'block';
  start.style.marginTop = '200px';
  start.addEventListener('click', evt => revStart());
  function revStart(){
    start.style.display = 'none';
    player.style.left = "320px";
    player.style.top = "250px";
  }
}

getReady();

// setInterval(spaceJunk, 1000);
/* function spaceJunk(){
    objects.style.right = (objects.x * 100).toString() + 'px';
}
*/
