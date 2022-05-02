"use strict"


   function sortArray(array) {
      let oddArr = array.filter(num => num % 2 != 0);

      oddArr = oddArr.sort((a,b) => a - b);

      array = array.map(num => num = (num % 2 != 0) ? oddArr.splice(0, 1) 
         : num).flat();

      return array;
   }

   console.log(sortArray([5, 8, 6, 3, 4]));
