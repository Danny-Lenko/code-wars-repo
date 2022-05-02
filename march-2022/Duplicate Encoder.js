"use strict"



function duplicateEncode(word){
  word = word.toLowerCase()
    .split('')
    .map((char, index, arr) => ( arr.indexOf(char) !== arr.lastIndexOf(char)) ? ')' : '(' )
    .join('');
  
  return word;
}

console.log(duplicateEncode("din"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
