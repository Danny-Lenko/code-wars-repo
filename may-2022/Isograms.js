"use strict"

function isIsogram(str){
   const arr = []
   str = str.toLowerCase()
   
   for (let i = 0; i < str.length; i++) {
     if(!arr.includes(str[i])) {
       arr.push(str[i])
     } else {
       return false
     }
   }
   
   return true
 }