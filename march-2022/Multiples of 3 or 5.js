"use strict"


      function solution(number) {
         if (number < 0) return 0;
         let rangeArr = [];
         
         for (let i = 1; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
               rangeArr.push(i);
            }
         }
         
         return rangeArr.reduce((a,b) => a+b, 0);
      }
