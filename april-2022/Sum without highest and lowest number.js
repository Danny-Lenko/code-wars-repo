"use strict"


function sumArray(array) {
  if (!array) return 0
  array.sort((a,b)=>a-b).splice(0,1)
  array.splice(array.length-1, 1)
  return array.reduce((a,b)=>a+b,0)
}
