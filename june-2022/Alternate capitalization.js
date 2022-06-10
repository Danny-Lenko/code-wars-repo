"use strict"

function capitalize(s){
   const even = s.split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char)
   const odd = s.split('').map((char, i) => i % 2 !== 0 ? char.toUpperCase() : char)
   return [even.join(''), odd.join('')];
 };