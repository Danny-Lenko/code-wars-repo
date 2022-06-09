"use strict"

function checkExam(array1, array2) {
   array2 = array2.map((answer, i) => (
     answer === array1[i] ? 4
     : answer === '' ? 0
     : -1
   ))
   array2 = array2.reduce((a,b)=>a+b,0)
   return array2 > 0 ? array2 : 0
 }