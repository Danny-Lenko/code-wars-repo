"use strict"


var countSheep = function (num){
  let str = ''
  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...` 
  }
  return num ? str : ''
}
