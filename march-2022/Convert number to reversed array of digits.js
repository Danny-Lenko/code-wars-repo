"use strict"


function digitize(n) {
  return JSON.stringify(n).split('').reverse().map(n=>+n);
}
