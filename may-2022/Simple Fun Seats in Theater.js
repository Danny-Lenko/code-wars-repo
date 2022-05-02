"use strict"

function seatsInTheater(nCols, nRows, col, row) {
   nCols -= col
   nRows -= row
   const res = nCols * nRows
   return res + nRows
 }