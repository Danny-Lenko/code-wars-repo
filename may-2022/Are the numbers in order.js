"use strict"

function inAscOrder(arr) {
   return !arr.some((n,i,a) => n > a[i+1])
  }