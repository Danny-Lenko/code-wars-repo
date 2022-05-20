"use strict"

function removeSmallest(numbers) {
   const arrToSort = [...numbers]
   const arrToSplice = [...numbers]
   const min = arrToSort.sort((a,b)=>a-b)[0]
   const index = arrToSplice.indexOf(min)
   arrToSplice.splice(index, 1)
   return arrToSplice
 }