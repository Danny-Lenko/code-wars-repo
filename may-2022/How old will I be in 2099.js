"use strict"

function calculateAge(birth, year) {
  
   const dif = year - birth
   
   return dif === 1 ? `You are 1 year old.`
     : dif === -1 ? `You will be born in 1 year.`
     : dif < 0 ? `You will be born in ${Math.abs(dif)} years.`
     : dif > 0 ? `You are ${dif} years old.`
     : `You were born this very year!`
 
 }
 
 