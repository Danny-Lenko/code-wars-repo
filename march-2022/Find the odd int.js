"use strict"


      function findOdd(arr) {
         let counter = 0;
         let newArr = [];
         
         do {
            newArr = arr.filter(num => num === arr[counter]);
            counter++;
         } while (newArr.length % 2 === 0);
         
         return newArr[0];
      }
