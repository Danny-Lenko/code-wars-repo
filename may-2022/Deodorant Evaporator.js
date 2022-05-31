"use strict"

function evaporator(content, evap_per_day, threshold){ 
   const absLost = evap_per_day / 100
   const absThreshold = content * (threshold / 100)
   let counter = 0
   while (content >= absThreshold) {
     const lostToday = content * absLost
     content -= lostToday
     counter++
   } 
   return counter
 }