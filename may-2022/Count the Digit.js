"use strict"

function nbDig(n, d) {
   let arr = []
   for (let i = 0; i <= n; i++) {
     arr.push(i)
   }
   arr = arr.map(num => num*num+'').join('')
   const regex = new RegExp(`${d}`, 'g')
   return arr.match(regex).length
 }