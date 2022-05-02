"use strict"


function squareDigits(num){
    num += '';
    num = num.split('')
    .map(char => char*char)
    .join('')
  
  return +num;
}
