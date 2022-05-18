"use strict"

function findNextSquare(sq) {
   let sqrt = Math.sqrt(sq)
   if (!Number.isInteger(sqrt)) return -1
   sqrt++
   return sqrt*sqrt;
 }