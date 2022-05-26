"use strict"

function solution(digits){
   let big = 0
   let num = 0
   
   while(digits.length >= 5) {
     num = digits.slice(0, 5)
     if (num > big) big = num
     digits = digits.substring(1)
   }
   
   return +big
 }