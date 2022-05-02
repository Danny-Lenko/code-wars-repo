"use strict"


      function rowSumOddNumbers(n) {
         let numsArr = [];
         let nums = 0;
         let calcValue = [];
         let counter = 1;

         for (let i = 1; i < n * 1000; i++) {
            numsArr.push(i);
         }
         numsArr = numsArr.filter(num => num % 2 != 0);

         do {
            nums = numsArr.splice(0, counter);
            calcValue.push(nums);
            counter++;
         } while (counter <= n);

         calcValue = calcValue[calcValue.length - 1];
         calcValue = calcValue.reduce((a,b) => a + b, 0);
         return calcValue;
      }
      console.log(rowSumOddNumbers(262));
