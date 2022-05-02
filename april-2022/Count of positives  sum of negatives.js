"use strict"


function countPositivesSumNegatives(input) {
  if (!input) return []
  const a = input.filter(num=>num>0).length;  
  const b = input.filter(num=>num<0).reduce((a,b)=>a+b,0);
  return (a <= 0 && b >= 0) ? [] : [a, b]
}
