# Look Out Below

## A Roguelike Adventure in Many Parts

The goal of this project is to grow my depth of knowledge in the following areas:

* Javascript
* Node
* Game Design
* Canvas
* Project Management
* Estimation
* Fun!

My end goal is to have built a robust roguelike game with intricacies reminiscent of my enjoyment of all the various kinds I've enjoyed through the years.  Angband, Ragnarok (Valhalla), Nethack, Dungeons of Dredmore, Hack, Slash 'em, ...

Along the way, however, there are various things that I need to develop, and that I want to develop in such a way that I'll have various outputs that initially may not seem like they have anything directly to do with a roguelike.  It's all part of my master plan to combine my learning along the way.
I'll be keeping track of them directly below, with links to their pieces of development updates.

Game 1 [Area of Expertise](#game1)


# Area of Expertise (Game 1)<a name="game1"></a>

### May 14th, 2015

On my initial passthrough of the Canvas element and experimenting with Javascript, I've built a small toy that will allow users to take turns drawing squares and getting points.
I've also done some initial investigation on libraries that may be useful for bringing access to the canvas up to a higher level.

* Built out a Square object that can be instantiated.
* Built out a Player object that can be instantiated.
* Random degree of punishment for trying to draw an overlapping square.
* Ability to click and remove any square on the page.

Next Steps:

* Treat edge of canvas as hard-stop for drawing.  Punishment if drawing outside the bounds of canvas.
* Win Condition
* Wins tracking.
* Square explodes if drawn over 100px x 100px by increasing chance of explosion up to 60% chance at 200px, then up to 80% chance between 200 and 250px, then shrinks again.
* Better code compartmentalization.  Explore slow learning of code structure in Javascript.  Things are too tangly right now.

### May 15th, 2015 -> April 23rd, 2018

* Got married, had two children, bought a property out of the city, started working remotely.

### April 24th, 2018

* Getting re-acquainted with javascript.
* Looking to complete some of the above requirements while becoming re-acquainted.

### May 15th, 2018

* The game is now more or less complete.  It sets two people against each other in an epic battle for surface area dominance.
* Choose to build a square, or remove one from the board.
* Limited number of turns per game.  First to 5 wins wins the set.

#### Next Steps

* Well,  the codebase feels like a hot mess.  It does what I want it to, but is such a mess of structure my next step is to refactor.
* Need to first map out where features should end up belonging, one of three 'domains'.
    * Player
    * Gameboard
    * Square
* Convert to ES6, this will require reading up on ES6 changes.  Tap into the readability.
* Add tests to test functionality.  Essentially testing state of board, player, or square at any given time before and after actions.
* Need to learn about testing javascript.  There is a mountain of possibilities to use as examples in github.
* Once refactored and tested, move on to Game 2 (Gridlock) to deal with creating a more structured display output in Canvas capable of holding on to layers of items/tiles drawn onto the canvas.  Game mechanic should be centred around greed vs reward.