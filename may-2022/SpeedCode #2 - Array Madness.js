"use strict"

function arrayMadness(a, b) {
  
   const x = a.map(n => n*n).reduce((a,b) => a+b, 0)
   const y = b.map(n => n*n*n).reduce((a,b) => a+b, 0)
   
   return x > y
 }