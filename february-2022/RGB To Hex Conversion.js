"use strict"


      // https://stackoverflow.com/a/5624139/16906724
      function rgb(r, g, b) {

         const roundComponent = (c) => {
         return c > 255 ? 255 
            : c < 0 ? 0 : c;
         }

         r = roundComponent(r);
         g = roundComponent(g);
         b = roundComponent(b);

         const componentToHex = (c) => {
         const hex = c.toString(16);
         return hex.length == 1 ? "0" + hex : hex;
         }

         return "#" + componentToHex(r).toUpperCase() 
         + componentToHex(g).toUpperCase() 
         + componentToHex(b).toUpperCase();
      }

      console.log(rgb(0, 51, 255)); // #0033ff
      console.log(rgb(0, 0, -20));
      console.log(rgb(300, 255, 255));
