"use strict"


      function generateHashtag (str) {
         str = str.split(' ').map(word => word.slice(0,1).toUpperCase() + word.slice(1)).join('');

         return (str.length >= 140) ? false 
         : (!str) ? false
         : '#' + str;
      }

      console.log(generateHashtag(" "));
      console.log(generateHashtag("Codewars is nice"));
