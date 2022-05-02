"use strict"


      function digPow(n, p){
         let nums = n.toString().split('').map(num => parseInt(num));
         let equation = 1;

         for (let i = 0; i < nums.length; i++) {
            equation += Math.pow(nums[i], p+i)
         }

         let count = 1;
         do {
            count++;
         } while (equation - 1 >= n * count);
         return (equation - 1 === n * (count - 1)) ? count - 1 : -1;
      }

      console.log(digPow(46288, 3));
      console.log(digPow(695, 2));
      console.log(digPow(92, 1));
