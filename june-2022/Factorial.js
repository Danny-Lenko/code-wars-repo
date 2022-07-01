"use strict"

function factorial(n){
   const arr = []
   for (let i = 1; i <= n; i++) {
     arr.push(i)
   }
   return arr.reduce((a,b)=>a*b, 1)
 }