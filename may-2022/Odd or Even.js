"use strict"

function oddOrEven(array) {
   if (typeof array[0] === 'undefined') return 'even' 
   const sum = array.reduce((a,b)=>a+b)
   return sum % 2 !== 0 ? 'odd' : 'even'
}