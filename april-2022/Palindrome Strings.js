"use strict"


function isPalindrome(line) {
  const str = line + ''
  const strRev = str.split('').reverse().join('')
  return str === strRev
}
