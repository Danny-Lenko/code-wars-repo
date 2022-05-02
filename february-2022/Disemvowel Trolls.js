"use strict"


      function disemvowel(str) {
         let regex = /[^aioue]/ig;
         str = str.match(regex);
         return (!str) ? "" : str.join('');
      }
