"use strict"


   function descendingOrder(n){
      n = n.toString()
         .split('')
         .sort((a,b) => b - a)
         .join('')
      n = parseInt(n);
      return n
   }
