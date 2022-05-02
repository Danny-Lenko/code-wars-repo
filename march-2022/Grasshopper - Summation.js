"use strict"


const summation = function (num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  
  return arr.reduce((a,b)=>a+b,0);
}
