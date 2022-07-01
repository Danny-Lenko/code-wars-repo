"use strict"

function mygcd(x,y){
   let smaller = x < y ? x : y
   
   while (x % smaller !== 0 || y % smaller !== 0) {
     smaller--
   }
   
   return smaller
 }