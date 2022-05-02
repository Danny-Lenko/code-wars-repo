"use strict"


      function solution(str){
         if (!str) return [];
         
         const myArr = [];
         let start = 0;
         let end = 2;
         
         do {
            myArr.push(str.slice(start, end));
            start += 2;
            end += 2;
         } while (end - 1 <= str.length);
         
         if (myArr[myArr.length - 1].length === 1) {
            myArr[myArr.length - 1] += '_';
         }
         
         return myArr;
      }
