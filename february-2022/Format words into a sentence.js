"use strict"


      function formatWords(words){
         if (words === null) return '';
         words = words.join(' ').match(/\w+/ig);
         if (!words) return ''
         if (words === '') return false
         if (words.length === 1) return words[0];

         let removed = words.splice(-1, 1);
         words = words.join(', ');
         removed.unshift('and');
         removed = removed.join(' ');
         words += ' ' + removed;

         return words;
      }

      console.log(formatWords(['ninja', 'samurai', 'ronin']));
      console.log(formatWords(['ninja', '', 'ronin']))
      console.log(formatWords([]))
      console.log(formatWords(['', '', 'three']));
      console.log(formatWords(null))
