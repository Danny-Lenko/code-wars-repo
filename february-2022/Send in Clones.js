"use strict"


      var clonewars = function(kataPerDay) {
         const a = Math.pow(2, kataPerDay - 1);
         const b = Math.pow(2, kataPerDay + 1) - kataPerDay - 2;

         return [Math.round(a),Math.round(b)];
      }

      console.log(clonewars(10));
      console.log(clonewars(5));
