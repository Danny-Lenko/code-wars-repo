"use strict"

function gimme (triplet) {
   const min = Math.min.apply(null, triplet)
   const max = Math.max.apply(null, triplet)
   let res
   triplet.forEach((num, i) => {
     if (num !== min && num !== max) {
       res = i
     }
   })
   return res
 }