"use strict"


      function longestConsec(strarr, k) {
         if (k > strarr.length || k <= 0) return '';

         let consecArr = [];
         strarr.forEach((str,index) => {

            for (let i = 1; i < k; i++) {
               if(strarr[index+i])
               str = str + strarr[index+i]
            }

            consecArr.push(str);
         
         })

         const consecLen = consecArr.map(str => str.length);
         return consecArr[consecLen.indexOf(Math.max.apply(null, consecLen))];
      }

      console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15));
      console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0));
      console.log(longestConsec([], 3));
