"use strict"


      function digitalRoot(n) {
         let nStr;
         do {
            nStr = n + '';
            n = nStr.split('');
            n = n.reduce((a, b) => (+a + +b), 0);  
         } while (nStr.length > 1);
         
         return n
      }

      console.log(digitalRoot(16));
      console.log(digitalRoot(456));
      console.log(digitalRoot(132189));
      console.log(digitalRoot(493193));
