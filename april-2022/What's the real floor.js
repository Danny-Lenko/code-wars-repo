"use strict"


function getRealFloor(n) {
  return n < 1 ? n
    : n < 13 ? n - 1
    : n - 2
}
