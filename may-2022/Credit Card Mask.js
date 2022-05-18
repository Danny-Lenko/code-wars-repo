"use strict"

function maskify(cc) {
   return cc.split('').map((char,i,arr) => i < arr.length - 4 ? '#' : char).join('')
 }