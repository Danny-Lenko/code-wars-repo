"use strict"


      function solution(input, markers) {
         let startComment = false;
         const letters = input.split('');

         const processed = letters.reduce((acc, letter) => {

            if (markers.includes(letter)) {
               startComment = true;
            } 
            if (startComment && letter === '\n') {
               startComment = false;
            }
            if (!startComment) {
               acc.push(letter)
            }
            return acc

         }, []);

         return processed.join('').replace(/\s\n/, '\n').trim();
      };

      console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));
