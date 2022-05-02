"use strict"


      // https://javascript.info/task/maximal-subarray
      var maxSequence = function(arr) {
         let maxSum = 0;
         let partialSum = 0;

         for (let item of arr) { // for each item of arr
            partialSum += item; // add it to partialSum
            console.log(partialSum)
            maxSum = Math.max(maxSum, partialSum); // remember the maximum
            if (partialSum < 0) partialSum = 0; // zero if negative
         }

         return maxSum;
      }

      console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
