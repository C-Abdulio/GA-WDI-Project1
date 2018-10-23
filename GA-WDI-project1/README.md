# GA-WID-Project1

## The project has yet to be determined. It is currently being chosen from an array of three ideas:

## 1) Saturday Morning Breakfast Warrior
**_A Zelda type action-adventure game in 3 acts_**
- player controls The Breakfast Warrior, who can move in all 4 directions through the direction arrows.
- The Breakfast Warrior attacks using a giant spoon. The Spoon is also a key event tied to a button.
- players guide the BW through 3 inter-connected maps, filled with obstacles and enemies.
- player also has 2 hit points. Enemies may hurt the player by colliding with them or attacking them (TBD).
- if player loses both hit points, they lose the game. Game resets back to map1.
- third map has one item to collect, the Holy Cereal. There may or may not be enemies or a boss.
- once player has collected the item, they win the game.

## _Functions needed:_
- functions to make the player move on corresponding key events(Up, Down, Left, Right)
- functions to make objects collidable with player.
- functions to load next map(with objects in proper positions) upon exiting the previous map.
- functions to make items collectable by player.
- make sure item activates win condition.
- on win, display a modal that prompts the player to reset the game

## _Possible Functions:_
- a fancy landing page with a start game button that loads map1
- function that, on key, switches player sprite with attack animation (or simply displays the spoon).
- create objects with parameters and values you can assign to players, enemies and item.
- assign hurtbox and hitbox values to player, enemy and attack objects.
- assign function to hit box and hurtbox collision that pushes back objects and decreases life points.
- function that makes pre-assigned walk patterns to enemies.
- assign win condition that allows passage to final map upon elimination of enemies.
- assign lose condition if player loses all life points and resets the game.
- add sounds to item when player collects.
- add sounds to player when colliding with harmful object.
- add sounds to attack when colliding with object.


## _ ~~Possible~~ PROBABLE errors:_
- Player doesn't collide with object. Passes through everything.
- Maps do not load upon exiting previous Map. player is stuck in map1.
- Killing enemies does not fulfill win condition, player is stuck in map2.
- Collecting item does no fulfill win condition. You beat the game and all you get is cereal.
- recursive functions lead to looping and max-call stacks.
- NOTHING WORKS! EVERYTHING IS UNDEFINED!! I HAND IN ANOTHER INCOMPLETE PROJECT!! DOUBTS START RISING!!
FRAUDS ARE CONFIRMED!! And I decide on a new career as professional crash dummy.

# MINIMUM VIABLE PRODUCT:
- Player can move through Maps.
- Player can traverse through all maps.
- Player can collide with static objects like rocks, enemies and items
- Player can win by collecting cereal.

## 2) RevRacers: Space Course
**_A "FlappyBird" style arcade runner game_**

![SpaceCourse](https://github.com/C-Abdulio/GA-WID-Project1/blob/master/WIREFRAME_SpaceCourse.png)
- You are Rev Rock-It, an android with a rocket engine on his head.
- players can move Rev in only 2 directions: up and down. This is controlled by 2 keys (either up or down arrows or other buttons).
- players must guide Rev through an obstacle course in space, avoiding asteroids and space debree.
- obstacles are collidible objects that scroll forward toward the player.
- There is only one way to lose: if Rev bumps with an object. Then the game ends and you can choose to try again.

## _Functions needed:_
- functions to make the player move on corresponding key events(Up, Down)
- functions to make objects collidable with player.
- functions to load objects and place them on random places.
- functions to have objects scroll toward player (maybe the board moves and objects repeat?)
- function to have player lose upon collision on object.
- function that prompts player to play again.

## _Possible Functions:_
- A variable that controls gravity with changeable parameters.
- function that assigns gravity to player, affecting his decent and accent. Would render down button moot.
- a counter assigned to a variable, which can display an incrementing point score.
- function that increments score based on time spent unharmed (try with Set Interval)
- a game state that stores score points up to 3 times.
- a function that allows to record a high score and assign a 3 letter name to stored high score.
- a high score page that displays the top 3 scores and has a reset game option.

## _ ~~Possible~~ PROBABLE errors:_
- Player doesn't collide with object. Passes through everything. Game runs indefinitely.
- Map or objects do not scroll toward player. Player moves, standing still.
- Gravity function messes up player control. Player cannot move up or does not head down.
- score tally does not increase or score is not recorded.
- NOTHING WORKS! EVERYTHING IS UNDEFINED!! And I hereby renounce any privilege to criticize any game developer if I cannot even make Tic Tac Toe or Flappy Bird.

# MINIMUM VIABLE PRODUCT:
- Player can move.
- Objects or map scrolls toward player.
- Player can collide with static objects
- Player can lose by collecting colliding with objects.
- Player can reset game.

## 3) WakeUp SleepyHead
**_A Puzzle game based on timing and perseverance...and caffeine_**
- a session last about 1 minute.
- player controls a student with poor sleeping habits. He is constantly falling asleep.
- He is sleeping during the middle of a lecture review for an important test.
 _(Ok, to be honest, this is mostly an idea I just came up with a few minutes ago.
 I am still trying to determine the core goal of the game.
 **EDIT:** I thought about it and the most engaging goal would be about keeping the student awake during the class.)_
 - The student will steadily get more and more drowsy. This is represented not just through the player sprite, but through a giant bar on the left.
 - The bar will decrease over time. If the bar empties, the student will fall asleep.
 - You need to keep him awake through limited timed button presses or clicks.
 - You can also use an array of limited items like coffee or energy drinks.
 - Player is graded on how long you can keep the student awake.
 - If player gets a D or below, they lose.
 - If player gets a C or above, they can try again.
 - If player gets a B or above, they win.

 You can find more detail about all the games in the ProjectIdeas.txt file.

 Wireframes in the project file
