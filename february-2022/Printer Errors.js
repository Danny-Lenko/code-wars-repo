"use strict"


      function printerError(s) {
         const sMatch = s.match(/[n-z]/ig);
         const denom = s.length;

         return (s.length >= 1 && sMatch) ? `${sMatch.length}/${denom}`
            : (s.length >= 1 && !sMatch) ? `0/${denom}`
            : `no input`;
      }
