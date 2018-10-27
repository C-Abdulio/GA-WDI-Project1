/* all the global constants that we will use throughout this game */
const player = document.querySelector("#player-Rev");//RevRad, your robot racer
const windowBoard = document.querySelector("#window");//the window element and the name of the major parent div
const junk = document.getElementById('objectsInSpace');
const ufo = document.getElementById('UFO');
const asteroid = document.getElementById('spaceRock');
const pipe = document.getElementById('spacePipe');

const rev = {
  x: 18,
  y: 5
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
  start.addEventListener('click', evt => getReady());//click the button


function getReady(){//mini function that intiialzises elements for the game
  console.log('gemmu statto')//console.log for testing
  start.style.display = 'none';//eliminate start button
  //set the starting position of the player
  // player.style.position = "relative";
  player.style.left = "420px";
  player.style.top = "250px";
  //set the starting position of the obsticles
  junk.style.left = junk + "2em";
  junk.style.width = "2em";
  UFO.style.left = "300px";
  UFO.style.top = "250px";
  asteroid.style.left = "200px";
