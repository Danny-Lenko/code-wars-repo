"use strict"


function distinct(a) {
    const arr = []
  a.forEach(el => {
    if (!arr.includes(el)) {
      arr.push(el)
    }
  });
  return arr
}
