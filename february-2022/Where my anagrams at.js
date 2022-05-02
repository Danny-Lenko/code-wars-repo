"use strict"


      function anagrams(word, words) {
         let newArr = [];

         word = word.split('')
            .sort((a,b) => a.localeCompare(b))
            .join('');

         let newWords = words.map(item => item.split('')
            .sort((a,b) => a.localeCompare(b))
            .join(''));

         newArr = newWords.map(function(item, index) {
            if (word.includes(item)) {
               return index;
            }
         })
         newArr = newArr.filter(item => typeof(item) === 'number')

         newWords = [];
         for (let i = 0; i < newArr.length; i++) {
            newWords.push(words[newArr[i]]);
         }

         return newWords;
      }

      console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));


      // String.prototype.sort = function() {
      //    return this.split("").sort().join("");
      //    };

      //    function anagrams(word, words) {
      //    return words.filter(function(x) {
      //          return x.sort() === word.sort();
      //    });
      // }
