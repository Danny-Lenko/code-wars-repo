"use strict"

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
   const myTime = pontoonDistance / youSpeed
   const sharkTime = sharkDistance / sharkSpeed
   const makeIt = dolphin ? myTime < sharkTime*2 : myTime < sharkTime
   return makeIt ? 'Alive!' : 'Shark Bait!' 
 } 