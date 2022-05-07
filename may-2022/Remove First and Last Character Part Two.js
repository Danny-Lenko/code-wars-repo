"use strict"

function array(arr){
   arr = arr.split(',')
   arr.splice(0, 1)
   arr.splice(arr.length - 1, 1)
   arr = arr.join(' ')
   return arr ? arr : null
 }