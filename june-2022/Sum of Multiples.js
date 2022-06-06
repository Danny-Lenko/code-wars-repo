"use strict"

function sumMul(n,m){
   if (n <= 0 || m <= 0) return "INVALID"
   const arr = []
   for (let i = 0; i < m; i++) {
     if (i % n === 0) {
       arr.push(i)
     }
   }
   return arr.reduce((a,b)=>a+b,0)
 }