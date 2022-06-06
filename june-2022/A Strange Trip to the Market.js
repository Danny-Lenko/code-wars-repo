"use strict"

function isLockNessMonster(s) {
   const res1 = (/tree fiddy/).test(s)
   const res2 = (/three fifty/).test(s)
   const res3 = (/3.50/).test(s)
   if (res1 || res2 || res3) {
     return true
   } 
   return false
 }