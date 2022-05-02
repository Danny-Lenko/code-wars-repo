"use strict"


function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((a,b)=>a+b,0) / classPoints.length < yourPoints
}
