"use strict"

function nextId(ids){
   const max = Math.max(...ids)
   const arr = []
   
   for (let i = 0; i <= max + 1; i++) {
     arr.push(i)  
   }
   
   const newArr = arr.filter(num => !ids.includes(num))
   
   return newArr[0];
}