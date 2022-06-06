"use strict"

function stairsIn20(s){
   const oneYear = s.map(weekday => {
     return weekday.reduce((a,b)=>a+b,0)
   })
   return oneYear.reduce((a,b)=>a+b,0) * 20
 }