"use strict"


      function findUniq(arr) {
         let a;
         let b;

         let counter = 0;
         while(arr[counter] === arr[counter + 1]) {
            counter++
         }
         a = arr[counter];
         b = arr[counter + 1];

         if (counter === 0) {

            if (arr[0] != arr[2]) {
               return arr[0];
            } else if (arr[1] != arr[2]) {
               return arr[1]
            }

         } else if (counter === 1) {

            if (arr[1] != arr[0]) {
               return arr[1]
            } else if (arr[2] != arr[0]) {
               return arr[2]
            }

         } else {
            if (a != arr[0]) {
               return a
            } else if (b != arr[0]) {
               return b
            }
         }
      }
