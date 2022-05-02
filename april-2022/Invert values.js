"use strict"


function invert(array) {
   return array.map(n => (n>0) ? -n : (n<0) ? (-1) * n : -0);
}
