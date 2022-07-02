"use strict"

function f(n){
   if (!Number.isInteger(n) || n <= 0) return false
   const arr = []
   for (let i = 1; i <= n; i++) {
     arr.push(i)
   }
   return arr.reduce((a,b)=>a+b,0)
 };