"use strict"

function repeater(string, n){
   let counter = 0
   let newString = ''
   while(counter < n) {
     newString += string
     counter++
   }
   return newString
 }