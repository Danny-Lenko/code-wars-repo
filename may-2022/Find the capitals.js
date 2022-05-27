"use strict"

var capitals = function (word) {
   const regex = word.match(/[A-Z]/g)
   const arr = []
   
   word = word.split('')
   word.forEach((char, i) => {
     regex.forEach(capital => {
       if (char === capital) arr.push(i)
     })
   })
   
   return arr
 };