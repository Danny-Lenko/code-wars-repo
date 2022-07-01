"use strict"

function sumTriangularNumbers(n) {
   const arr = []
   let counter = 0
   let addon = 1
   while(arr.length < n) {
     counter += addon
     arr.push(counter)
     addon++
   }
   return arr.reduce((a,b)=>a+b,0)
 }