"use strict"

function solution(str, ending){
   if (ending === '') return true
   const endingLength = ending.length
   const strEnding = str.slice(-endingLength)
   return strEnding === ending
 }