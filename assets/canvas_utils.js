var removeClickedShape = function(x,y, shapeArray) {
  for (var shape in shapeArray) {
    if ((shapeArray[shape].x < x && (shapeArray[shape].x + shapeArray[shape].size) > x ) && (shapeArray[shape].y < y && (shapeArray[shape].y + shapeArray[shape].size) > y )) {
        console.log("removing score and shape")
        console.log(shapeArray[shape])
        shapeArray[shape].scoreElement.textContent = shapeArray[shape].scoreElement.textContent - (shapeArray[shape].size * shapeArray[shape].size)
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