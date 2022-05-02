"use strict"


function powersOfTwo(n){
  const arr = []
  for(let i = 0; i <= n; i++) {
    arr.push(i)
  }
  return arr.map(num => Math.pow(2, num))
}
