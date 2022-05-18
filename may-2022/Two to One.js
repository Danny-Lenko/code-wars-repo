"use strict"

function longest(s1, s2) {
   s1 = s1.split('')
   s2 = s2.split('')
   const arr = [...s1, ...s2]
   const newArr = []
   
   arr.sort((a,b)=>a.localeCompare(b))
   
   arr.forEach(char => {
     if(!newArr.includes(char)) {
       newArr.push(char)
     }
   })
   
   return newArr.join('')
 }