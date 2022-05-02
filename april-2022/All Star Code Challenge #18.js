"use strict"


function strCount(str, letter){  
  const reg = new RegExp(letter, 'g')
  return str.match(reg) ? str.match(reg).length : 0
}
