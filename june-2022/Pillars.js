"use strict"

function pillars(num_pill, dist, width) {
   const totalWidth = width * (num_pill - 2)
   const totalGaps = dist * (num_pill - 1) * 100
   const totalDist = totalWidth + totalGaps
   return totalDist > 0 ? totalDist : 0
 }