"use strict"


      function findOutlier(integers){
         const oddIntegers = integers.filter(num => num % 2 != 0);
         const evenIntegers = integers.filter(num => num % 2 === 0);
         
         return (evenIntegers.length < oddIntegers.length) ? evenIntegers[0]
            : (oddIntegers.length < evenIntegers.length) ? oddIntegers[0] : 0;
      }

      console.log(findOutlier([2,6,8,10,3]));
