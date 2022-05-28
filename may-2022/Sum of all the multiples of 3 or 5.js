"use strict"

function findSum(n) {
   const arr = []
   for (let i = 0; i <= n; i++) {
     if (i % 3 === 0 || i % 5 === 0) {
       arr.push(i)
     }
   }
   return arr.reduce((a,b)=>a+b,0)
 }