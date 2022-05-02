"use strict"


      function areYouPlayingBanjo(name) {
         const r = name.charAt(0).toLowerCase();
         name = (r === 'r') ? `${name} plays banjo`
            : `${name} does not play banjo`;
         return name;
      }

      console.log(areYouPlayingBanjo('Ringo'));
      console.log(areYouPlayingBanjo('Bravo'));
