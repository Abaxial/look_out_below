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
  var player1 = new Player(document.getElementById('p1score'), document.getElementById('p1name'))
  var player2 = new Player(document.getElementById('p2score'), document.getElementById('p2name'))
  player1.update_score()
  player2.update_score()

  //
  this.players = [player1, player2]
  this.activePlayer = 0

  canvas.style.cursor = "pointer";

  canvas.onmousedown = function(e){

    size = 8

    if (clickedShape(e.offsetX, e.offsetY, self.shapeList).isConflict == true) {

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
      if (size < 200 && growing == true) {
        size = size + 2
      } else if (size == 200 && growing == true) {
        growing = false
        TP.render()
      } else if (size > 8 && growing == false) {
        size = size - 2
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

    if(TP.mousedownID != -1) {
      clearInterval(TP.mousedownID);
      TP.mousedownID = -1
    }

    var square = new Square(e.offsetX, e.offsetY, size, self.ctx)

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
      TP.players[TP.activePlayer].update_score()
      TP.activePlayer = 1 - TP.activePlayer
    } else if (square.wasClicked(e.offsetX, e.offsetY, self.shapeList)) {
      removeClickedShape(e.offsetX, e.offsetY, self.shapeList)
      TP.activePlayer = 1 - TP.activePlayer
    } else {
      alert("Please try again, attempt too close to other shape.")
    }

    TP.render()
  }
}

TP.render = function() {
  this.ctx.clearRect(0,0,this.width,this.height)
  for(index in this.shapeList) {
    this.shapeList[index].render()
  }
}

