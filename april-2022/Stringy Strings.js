"use strict"


function stringy(size) {
  let str = ''
  for (let i = 0; i < size; i++) {
    str += (i % 2 === 0) ? 1 : 0   
  }
  return str
}
