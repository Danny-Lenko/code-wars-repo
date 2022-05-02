"use strict"


function squareOrSquareRoot(array) {
  return array.map(num => (
    Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num) : Math.pow(num,2)
  ))
}
