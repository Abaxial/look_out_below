window.TP = {}

TP.init = function() {
  var self = this
  // Set the variables for game object.
  this.canvas = document.getElementById('canvas')
  this.ctx = canvas.getContext('2d')
  this.width = canvas.width
  this.height = canvas.height

  // Shapes on the canvas.
  this.shapeList = []

  // Used to only initiate mousedown loop once.
  this.mousedownID = -1

  // Initialize 2 players.
  var player1 = new Player(document.getElementById('p1score'), document.getElementById('p1name'), document.getElementById('p1Turns'))
  var player2 = new Player(document.getElementById('p2score'), document.getElementById('p2name'), document.getElementById('p2Turns'))
  player1.updateScore()
  player2.updateScore()

  //
  this.players = [player1, player2]
  this.activePlayer = 0

  canvas.style.cursor = "pointer";

  canvas.onmousedown = function(e){

    size = 8

    if (clickedShape(e.offsetX, e.offsetY, self.shapeList).isConflict == true) {
      // Captures and prevents forward motion through loop if an
      // existing shape is clicked.
    } else if (TP.mousedownID == -1) {  //Prevent multiple loops!
      TP.mousedownID = setInterval(whilemousedown, 2 /*execute every 100ms*/)
    }

    var growing = true

    tempSquare = new Square(e.offsetX, e.offsetY, size, self.ctx)
    function whilemousedown() {
      canvas.onmousemove = function(e) {
        if (TP.mousedownID != -1) {
          tempSquare.x = e.offsetX
          tempSquare.y = e.offsetY
          TP.render()
          tempSquare.render()
        }
      }
      if (tempSquare.x + size > canvas.width || tempSquare.y + size > canvas.height) {
        size = size - Math.floor(Math.random() * size)
      } else if (size < 200 && growing == true) {
        size = size + 8
      } else if (size == 200 && growing == true) {
        growing = false
        TP.render()
      } else if (size > 8 && growing == false) {
        size = size - 8
        TP.render()
      } else if (size == 8  && growing == false) {
        growing = true
      }

      tempSquare.size = size;
      tempSquare.color = "#cccccc"
      tempSquare.render()
    }
  }

  canvas.onmouseup = function(e) {
    TP.render()

    if (TP.mousedownID != -1) {
      clearInterval(TP.mousedownID);
      TP.mousedownID = -1
    }
    var square = new Square(e.offsetX, e.offsetY, size, self.ctx, TP.players[TP.activePlayer])

    while (square.size > 10) {
      if (square.conflict(self.shapeList)) {
        square.size = square.size - Math.floor(Math.random() * square.size)
      } else {
        break;
      }
    }

    if (square.size < 10) {
      square.size = 10
    }

    if (!square.conflict(self.shapeList)) {
      square.color = TP.players[TP.activePlayer].color
      square.render()
      self.shapeList.push(square)
      TP.players[TP.activePlayer].score += (square.size * square.size)
      TP.players[TP.activePlayer].updateScore()
      TP.players[TP.activePlayer].update_turns()
      TP.activePlayer = 1 - TP.activePlayer
    } else if (shape = square.wasClicked(e.offsetX, e.offsetY, self.shapeList)) {    
      TP.players[TP.activePlayer].update_turns()  
      removeClickedShape(e.offsetX, e.offsetY, self.shapeList)
      TP.players[0].updateScore()
      TP.players[1].updateScore()
      TP.activePlayer = 1 - TP.activePlayer
    } else {
      alert("Please try again, attempt too close to other shape.")
    }

    TP.render()

    if (TP.players[TP.activePlayer].turnsRemaining == 0)  {

      if (TP.players[TP.activePlayer].score > TP.players[1 - TP.activePlayer].score) {
        TP.players[TP.activePlayer].wins += 1
      } else if (TP.players[1 - TP.activePlayer].score > TP.players[TP.activePlayer].score) {
        TP.players[1 - TP.activePlayer].wins += 1
      } else {
        alert("Tie!")
      }

      TP.players[TP.activePlayer].score = 0
      TP.players[1 - TP.activePlayer].score = 0

      TP.players[TP.activePlayer].turnsRemaining = 10
      TP.players[1 - TP.activePlayer].turnsRemaining = 10

      TP.shapeList = []
      player1.updateScore()
      player2.updateScore()

      if (TP.players[TP.activePlayer].wins == 5) {
        alert("Player 2 Wins!")
      } else if (TP.players[1 - TP.activePlayer].wins == 5) {
        alert("Player 1 Wins!")
      }

      TP.render()
    }
  }
}

TP.render = function() {
  this.ctx.clearRect(0,0,this.width,this.height)
  for(var index in this.shapeList) {
    this.shapeList[index].render()
  }
}

