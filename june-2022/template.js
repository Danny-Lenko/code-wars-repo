"use strict"

function roundToNext5(n){
   if (n % 5 === 0) return n
   let counter = n
   while (counter % 5 !== 0) {
     counter++
   }
   return counter
 }