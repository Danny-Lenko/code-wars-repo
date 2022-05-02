"use strict"


      function isPangram(string){
         const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
         string = string.toLowerCase();
         const misses = alphabet.filter((letter) => string.indexOf(letter) < 0);
         return misses.length === 0;
      }

      console.log(isPangram("The quick brown fox jumps over the lazy dog"));
      console.log(isPangram("The quick brown fox over the lazy dog"));
