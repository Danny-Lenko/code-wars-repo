"use strict"


function dutyFree(normPrice, discount, hol){
  const disc = discount / 100
  const save = normPrice * disc
  return Math.floor(hol / save)
}
