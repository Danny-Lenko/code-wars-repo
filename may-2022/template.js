"use strict"

function derive(coefficient,exponent) {
   const multiple = coefficient * exponent
   exponent = exponent !== 2 ? exponent - 1 : exponent
   return `${multiple}x^${exponent}`
 }