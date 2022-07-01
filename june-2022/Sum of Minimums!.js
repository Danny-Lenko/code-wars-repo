"use strict"

function sumOfMinimums(arr) {
   return arr.map(x => Math.min.apply(null,x)).reduce((a,b)=>a+b,0)
 }