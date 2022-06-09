"use strict"

function solve(s){
   const low = s.match(/[a-z]/g).length < s.length / 2
   return low ? s.toUpperCase() : s.toLowerCase()
 }