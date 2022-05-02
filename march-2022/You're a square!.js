"use strict"


const isSquare = function(n){
  const root = Math.sqrt(n)
  const res = Math.floor(root) * root
  
  return res === n
}
