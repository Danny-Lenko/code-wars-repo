"use strict"

function declareWinner(fighter1, fighter2, firstAttacker) {
   let fighter1Turns = 0
   let fighter2Turns = 0
   
   while (fighter2.health > 0) {
     fighter2.health -= fighter1.damagePerAttack
     fighter1Turns++
   }
   
   while (fighter1.health > 0) {
     fighter1.health -= fighter2.damagePerAttack
     fighter2Turns++
   }
   
   return fighter1Turns < fighter2Turns ? fighter1.name
     : fighter2Turns < fighter1Turns ? fighter2.name
     : firstAttacker
 }