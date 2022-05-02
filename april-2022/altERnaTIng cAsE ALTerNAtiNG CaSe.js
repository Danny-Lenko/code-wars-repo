"use strict"


String.prototype.toAlternatingCase = function () {
  let newString = ''
  for (let letter of this) {
     newString += (letter === letter.toUpperCase()) 
      ? letter.toLowerCase()
      : letter.toUpperCase() 
  }
  return newString
}