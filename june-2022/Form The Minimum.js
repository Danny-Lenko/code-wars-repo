"use strict"

function minValue(values){
   const newArr = []
   values.forEach(num => {
     if(!newArr.includes(num)) {
       newArr.push(num)
     }
   })
   newArr.sort((a,b)=>a-b)
   return +newArr.join('')
 }