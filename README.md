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

### May 28th, 2015

* After some deliberation and conversation, Mocha with Chai and potentially eventually Sinon is the way I'm going.
* Converting index to jade template for use with Node.

### May 27th, 2015

Largely refactoring today.  Trying to organize code better and refactor where I can.

* Learned that 1 < 2 < 1 == true (Because 1 < 2 is evaulated first, then true < 1 is evaluated.)  It was a frustrating discovery, but I'm not sure where I got the idea I could chain things like that.  I beleive I've worked in a language that can do that at least once before.
* Pulling things apart into more distinct groupings.  Player.  Square.  Util functions.
* Squares will now recoil randomly back, but not below 10pixels.
* Turns will only rotate if a valid click was established, not a click that does not achieve either a square removal, or square draw.

Next Steps:

* Want to get testing in place.  I have some material to read through to investigate my options for javascript testing.
* Lets be realistic.  I think I'm going to set that as my next goal prior to my next update.

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
