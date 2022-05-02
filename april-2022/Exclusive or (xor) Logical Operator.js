"use strict"


function xor(a, b) {
  if (a && !b){
    return true
  } else if (!a && b) {
    return true
  } else if (!a && !b) {
    return false
  } else {
    return false
  }
}
