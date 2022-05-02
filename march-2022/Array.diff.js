"use strict"


      function arrayDiff(a, b) {
         
         a.forEach(num => {
            b.forEach(num => {
               if (a.indexOf(num) >= 0 ) a.splice(a.indexOf(num), 1);
            })
         })
         
         return a;
      }
