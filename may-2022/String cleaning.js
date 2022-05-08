"use strict"

function stringClean(s){
  
   return s.match(/\D/g) ? s.match(/\D/g).join('') : ''
   
 }