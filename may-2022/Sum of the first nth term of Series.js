"use strict"

function SeriesSum(n)
{
  if (n === 1) return '1.00'
  if (n === 2) return '1.25'
  if (n === 0) return '0.00'
  let denomenator = 4
  let init = 1 + 1/4
  for (let i = 2; i < n; i++) {
    denomenator += 3
    init += 1/denomenator
  }
  return init.toFixed(2)
}