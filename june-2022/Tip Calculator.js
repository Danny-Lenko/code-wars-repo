"use strict"

function calculateTip(amount, rating) {
   rating = rating.toLowerCase()
   rating = rating === 'terrible' ? 0
     : rating === 'poor' ? 0.05
     : rating === 'good' ? 0.1
     : rating === 'great' ? 0.15
     : rating === 'excellent' ? 0.2
     : 1
   return rating === 1 ? 'Rating not recognised' : Math.ceil(amount * rating)
 }