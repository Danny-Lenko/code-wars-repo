"use strict"


      function spinWords(string){
         
         string = string.split(' ');
         string.forEach((word, index) => {
            if (word.length >= 5) {
            string[index] = word.split('').reverse().join('');
            }
         });
         
         return string.join(' ');
      }
