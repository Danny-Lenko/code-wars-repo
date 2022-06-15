"use strict"

function predictAge(...ages){
   const arr = [ages]
   return Math.floor(Math.sqrt(ages.map(num => num * num).reduce((a,b)=>a+b,0)) / 2)
 }