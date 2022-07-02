"use strict"

function bump(x){
   const match = x.match(/n/g)
   if (!match) return 'Woohoo!'
   return match.length <= 15 ? 'Woohoo!' : 'Car Dead'
 }