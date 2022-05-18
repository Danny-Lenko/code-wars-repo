"use strict"

function converter (mpg) {
   const relation = (mpg/4.54609188)/(1/1.609344)
   return +relation.toFixed(2).replace(/0$/, '')
 }