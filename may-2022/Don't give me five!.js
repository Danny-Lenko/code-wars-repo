"use strict"

function dontGiveMeFive(start, end) {
   const arr = []
   for (let i = start; i <= end; i++) {
     const checkNum = i + ''
     if (!checkNum.split('').includes('5')) {
       arr.push(i)
     }
   }
   return arr.length
 }