"use strict"


function persistence(num) {
  let numStr = '';
  let counter = 0;
   
  while (numStr.length !== 1) {
    numStr = num + '';
    num = numStr.split('')
      .reduce((a,b) => a*b, 1)
    counter++;
  }
  
  return counter - 1;
}
