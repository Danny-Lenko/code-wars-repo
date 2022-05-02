"use strict"


function reverseWords(str){
  const newArr = [];
  str = str.split(' ');
  str.forEach( (word, index, arr) => newArr.unshift(word) )
  
  return newArr.join(' ');
}
