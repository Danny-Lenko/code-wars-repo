"use strict"

function isSortedAndHow(array) {
   const ascending = [...array].sort((a,b) => a-b)
   const descending = [...array].sort((a,b) => b-a)
   
   return array.every((num, i) => num === ascending[i]) ? 'yes, ascending'
     : array.every((num, i) => num === descending[i]) ? 'yes, descending'
     : 'no'
 }