window.TP = {}

Player = function() {
  this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
  this.score = 0
}


TP.init = function() {
  var self = this
  this.canvas = document.getElementById('canvas')
  this.ctx = canvas.getContext('2d')
  this.width = canvas.width
  this.height = canvas.height
  this.shapeList = []
  this.sizeLoop = true
  this.mousedownID = -1
  var player1 = new Player()
  var player2 = new Player()

  this.players = [player1, player2]
  this.activePlayer = 0

  document.getElementById('p1name').style.color = player1.color
  document.getElementById('p2name').style.color = player2.color

  var p1Score = document.getElementById('p1score')
  var p2Score = document.getElementById('p2score')

  this.scores = [p1Score, p2Score]



  var removeClickedShape = function(x,y, shapeArray) {
    for (shape in shapeArray) {
      if ((shapeArray[shape].x < x && (shapeArray[shape].x + shapeArray[shape].size) > x ) &&
           (shapeArray[shape].y < y && (shapeArray[shape].y + shapeArray[shape].size) > y ))
        shapeArray.splice(shape, 1)
    }
  }

  var clickedShape = function(x, y, shapeArray) {
    var result = {isConflict: false, shapeIndex: null}

    for (shape in shapeArray) {
      if ((shapeArray[shape].x < x && (shapeArray[shape].x + shapeArray[shape].size) > x ) &&
           (shapeArray[shape].y < y && (shapeArray[shape].y + shapeArray[shape].size) > y ))
        result = {isConflict: true, shapeIndex: shape}
    }

    return result
  }

  canvas.style.cursor = "pointer";

  canvas.onmousedown = function(e){

    size = 4

    if (clickedShape(e.offsetX, e.offsetY, self.shapeList).isConflict == true) {

    } else if (TP.mousedownID == -1) {  //Prevent multimple loops!
      TP.mousedownID = setInterval(whilemousedown, 2 /*execute every 100ms*/)
    }
    var shiftUp = true
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
      if (size < 200 && shiftUp == true) {
        size = size + 2
      } else if (size == 200 && shiftUp == true) {
        shiftUp = false
        TP.render()
      } else if (size > 0 && shiftUp == false) {
        size = size - 2
        TP.render()
      } else if (size == 0  && shiftUp == false) {
        shiftUp = true
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

    if (!square.conflict(self.shapeList)) {
      square.color = TP.players[TP.activePlayer].color
      square.render()
      self.shapeList.push(square)
      TP.players[TP.activePlayer].score += (square.size * square.size)
      TP.scores[TP.activePlayer].textContent = TP.players[TP.activePlayer].score
    }

    removeClickedShape(e.offsetX, e.offsetY, self.shapeList)
    TP.render()
    TP.activePlayer = 1 - TP.activePlayer
  }

}

TP.render = function() {
  this.ctx.clearRect(0,0,this.width,this.height)
  for(index in this.shapeList) {
    this.shapeList[index].render()
  }
}

