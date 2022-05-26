"use strict"

const sequenceSum = (begin, end, step) => {
   if (begin > end) return 0
   const arr = []
   for (let i=begin; i<=end; i+=step) {
     arr.push(i)
   }
   return arr.reduce((a,b)=>a+b,0)
 };