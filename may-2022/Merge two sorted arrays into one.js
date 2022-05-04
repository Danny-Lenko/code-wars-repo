"use strict"

function mergeArrays(arr1, arr2) {
   const arr = [...arr1, ...arr2].sort((a,b)=>a-b)
   const res = []
   arr.forEach(num => {
     if (!res.includes(num)) {
       res.push(num)
     }
   })
   return res
 }