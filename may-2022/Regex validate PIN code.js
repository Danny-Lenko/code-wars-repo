"use strict"

function validatePIN (pin) {
   const regex = pin.match(/\d/g)
   if (!regex) return false
   return regex.length === pin.length && (pin.length === 4 || pin.length === 6)
 }