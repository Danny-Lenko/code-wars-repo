"use strict"


var countBits = function(n) {
  n = n.toString(2);
  return n.split('').reduce((a,b)=>(+a)+(+b),0);
};
