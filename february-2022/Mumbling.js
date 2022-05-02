"use strict"


      function accum(s) {
         s = s.toLowerCase();
         s = s.split('');
         s = s.map((letter, index) => letter.padEnd(index + 1, `${letter}`));
         s = s.map(item => item.charAt(0).toUpperCase() + item.slice(1));  
         return s.join('-');
      }

      console.log(accum("RqaEzty"));
