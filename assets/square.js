Square = function(x, y, size, ctx) {
  this.x = x
  this.y = y
  this.size = size
  this.ctx = ctx
  this.color = '#' + Math.floor(Math.random() * 16777215).toString(16)
}

Square.prototype.render = function(){
  this.ctx.beginPath()
  this.ctx.rect(this.x, this.y, this.size, this.size)
  this.ctx.closePath()
  this.ctx.fillStyle = this.color
  this.ctx.fill()
}

Square.prototype.move = function(newX, newY) {
  this.x = newX
  this.y = newY
}

Square.prototype.conflict = function(shapeArray) {
  for (item in shapeArray) {
    var shape = shapeArray[item]
    if (!(shape.x > (this.x + this.size) ||
        (shape.x + shape.size) < this.x ||
        shape.y > (this.y + this.size) ||
        (shape.y + shape.size) < this.y)) {
          return true
    }
  }
  return false
}

Square.prototype.wasClicked = function(clickedX, clickedY, shapeArray) {
  for (item in shapeArray) {
    var shape = shapeArray[item]    
    if ((shape.x < clickedX && ( clickedX < (shape.x + shape.size))) &&
        (shape.y < clickedY && (clickedY < (shape.y + shape.size))))
    {
      return shape
    }
  }
  return false
}