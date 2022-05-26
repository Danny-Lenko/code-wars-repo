"use strict"

function sumDigits(number) {
   number += ''
   number = number.split('')
  
   if (number[0] === '-') {
     number.shift()
   }
   
   return number.reduce((a,b) => +a + +b, 0)
 }
 