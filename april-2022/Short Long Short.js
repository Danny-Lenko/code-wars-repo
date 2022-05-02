"use strict"


function solution(a, b){
  const long = (a.length > b.length) ? a : b
  const short = (a === long) ? b : a
  return short + long + short
}
