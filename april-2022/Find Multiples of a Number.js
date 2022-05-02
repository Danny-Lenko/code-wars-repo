"use strict"


function findMultiples(integer, limit) {
  let counter = 0
  const arr = []
  while(counter < limit) {
    counter++
    if (counter % integer === 0) {
      arr.push(counter)
    }
  }
  return arr
}
