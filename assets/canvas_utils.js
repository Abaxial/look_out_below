var removeClickedShape = function(x,y, shapeArray) {
  for (var shape in shapeArray) {
    if ((shapeArray[shape].x < x && (shapeArray[shape].x + shapeArray[shape].size) > x ) && (shapeArray[shape].y < y && (shapeArray[shape].y + shapeArray[shape].size) > y )) {
        // The problem here is that I'm updating the score element, but not the player score itself.
        // This really needs to be the player that gets attached to the shape in the array.  A stamp of ownership, for example.
        shapeArray[shape].player.score = shapeArray[shape].player.score - (shapeArray[shape].size * shapeArray[shape].size)
        shapeArray.splice(shape, 1)
    }
  }
}

var clickedShape = function(x, y, shapeArray) {
  var result = {isConflict: false, shapeIndex: null}

  for (var shape in shapeArray) {
    if ((shapeArray[shape].x < x && (shapeArray[shape].x + shapeArray[shape].size) > x ) &&
         (shapeArray[shape].y < y && (shapeArray[shape].y + shapeArray[shape].size) > y ))
      result = {isConflict: true, shapeIndex: shape}
  }

  return result
}