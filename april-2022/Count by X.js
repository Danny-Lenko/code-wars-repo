"use strict"


function countBy(x, n) {
  let z = [];
  let num = x;
  for (let i = 0; i < n; i++) {
    z.push(num)
    num += x
  }
  return z;
}
