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
  for (shape in shapeArray) {
    if (!(shapeArray[shape].x > (this.x + this.size) ||
        (shapeArray[shape].x + shapeArray[shape].size) < this.x ||
        shapeArray[shape].y > (this.y + this.size) ||
        (shapeArray[shape].y + shapeArray[shape].size) < this.y)) {
          return true
    }
  }
  return false
}