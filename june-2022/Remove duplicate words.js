"use strict"

function removeDuplicateWords (s) {
   const arr = []
   s = s.split(' ')
   s.forEach(word => {
     if(!arr.includes(word)) {
       arr.push(word)
     }
   })
   return arr.join(' ')
 }