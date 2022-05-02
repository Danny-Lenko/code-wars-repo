"use strict"


String.prototype.isUpperCase = function() {
  return this.split('').every(char => char === char.toUpperCase())
}
