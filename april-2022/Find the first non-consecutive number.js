"use strict"


function firstNonConsecutive (arr) {
  arr = arr.filter((n, i, array) => {
    return n - array[i - 1] !== 1
  })
  return (arr[1] || arr[1] === 0) ? arr[1] : null
}
