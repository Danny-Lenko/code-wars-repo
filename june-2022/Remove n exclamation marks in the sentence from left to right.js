"use strict"

function remove(s,n){
   let counter = 0
   while (counter < n) {
     s = s.replace(/!/, '')
     counter++
   }
   
   return s
 }