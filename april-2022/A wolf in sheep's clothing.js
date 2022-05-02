"use strict"


function warnTheSheep(queue) {
  let pos
  queue.forEach((animal, i, arr) => {
    if(animal === 'wolf') {
      pos = i+1
    }
  })
  pos = queue.length - pos
  return pos > 0 
    ? `Oi! Sheep number ${pos}! You are about to be eaten by a wolf!`
    : `Pls go away and stop eating my sheep`
}
