"use strict"


function find_average(array) {
  const ave = array.reduce((a,b)=>a+b,0) / array.length; 
  return ave ? ave : 0;
}