"use strict"


function shortcut (string) {
  return string.match(/[^eoaiu]/g) ? string.match(/[^eoaiu]/g).join('') : ''
}
