"use strict"


function opposite(number) {
  number += '';
  number = (number.charAt(0) === '-') ? number.slice(1,) : '-' + number
  return +number
}
