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