"use strict"


function highAndLow(numbers){
  const newArr = [];
  numbers = numbers.split(' ')
    .map(n => +n)
    .sort((a,b) => b-a)
  
  newArr.push(numbers.shift())
  newArr.push(numbers.pop());
  newArr[1] = (newArr[1] === undefined) ? newArr[0] : newArr[1];
  numbers = newArr.join(' ');
  
  return numbers
}
