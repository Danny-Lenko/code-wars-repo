"use strict"

function XO(str) {
   const arr = str.toLowerCase().split('')
   const x = arr.filter(char => char === 'x')
   const o = arr.filter(char => char === 'o')
   return x.length === o.length
}