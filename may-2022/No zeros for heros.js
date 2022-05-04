"use strict"

function noBoringZeros(n) {
   n += ''
   return +n.replace(/^0+(\d)|(\d)0+$/gm, '$1$2')
 }