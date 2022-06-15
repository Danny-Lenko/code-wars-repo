"use strict"

function rowWeights(array){
   const team1 = array.filter((pers,i) => i % 2 !== 0).reduce((a,b)=>a+b,0)
   const team2 = array.filter((pers,i) => i % 2 === 0).reduce((a,b)=>a+b,0)
   
   return [team2, team1]
 }