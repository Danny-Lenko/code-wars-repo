"use strict"

function stray(numbers) {
   if (numbers[0] !== numbers[1] && numbers[0] !== numbers[2]) {
     return numbers[0]
   } else {
     return numbers.find((n,i,a)=>n!==a[0])
   }
 }