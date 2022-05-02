"use strict"


function removeExclamationMarks(s) {
  s = s.match(/[^!]/ig)
  return s.join('');
}

console.log(removeExclamationMarks("Hello World!"))
