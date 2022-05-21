"use strict"

function calculateYears(principal, interest, tax, desired) {
   let interestIndexed
   let taxIndexed
   let counter = 0
  
 while (principal < desired) {
     interestIndexed  = principal * interest
     taxIndexed = principal * interest * tax
     principal += interestIndexed - taxIndexed
     counter++
   }
     
   return counter
 }