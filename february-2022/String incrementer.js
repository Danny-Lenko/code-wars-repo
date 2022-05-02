"use strict"


      function incrementString (strng) {
         const regex = /\d+$/g;
         let match = strng.match(regex);
         if (!match) {
            return strng + 1;
         }

         match = match[0];
         let num = parseInt(match) + 1 + '';

         if (num.length < match.length) {
            let counter = 0;
            do {
               num = '0' + num;
               counter++
            } while(num.length < match.length);
         }

         strng = strng.replace(match, num);
         return strng;
      }

      console.log(incrementString("foobar000"));
      console.log(incrementString("foo"));
      console.log(incrementString("foobar099"));
