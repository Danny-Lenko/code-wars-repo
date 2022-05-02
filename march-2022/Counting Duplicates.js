"use strict"


function duplicateCount(text){
    text = text.toLowerCase()
    .split('')
    .filter((char, index, arr) => arr.indexOf(char) !== arr.lastIndexOf(char))
    .filter((char, index, arr) => arr.indexOf(char) === index);
  
  // console.log(text);
  return text.length;
}
