"use strict"


      //return the total number of smiling faces in the array
      function countSmileys(arr) {
         const regexL = /(;|:)(-|~|D|\))(D|\))/;
         const regexS = /(;|:)(D|\))/;

         arr = arr.filter( item => (item.length === 3) ? regexL.test(item) 
            : regexS.test(item) )

         return arr.length
      }

      console.log(countSmileys([';D', ':-(', ':-)', ';~)']));
      console.log(countSmileys([':D',':~)',';~D',':)']));
