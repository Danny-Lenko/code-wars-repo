"use strict"


      function getHashtags(post) {
         if (typeof(post) != 'string') return 0;

         post = post.split(' ');

         const heshReg = /^#+[a-z]/;
         post = post.filter(word => heshReg.test(word));

         const regex = /[^#+][a-z$#]+/i;
         post = post.map(word => word.match(regex));

         const flatSingle = arr => [].concat(...arr);

         post = flatSingle(post).filter(word => !word.includes('#'))

         return post
      }

      console.log(getHashtags("#"));
      console.log(getHashtags('Hello #world'));
      console.log(getHashtags('#blue#red#yellow#green'));
      console.log(getHashtags('##alot'));
      console.log(getHashtags("Hello.#world"));
