"use strict"

function validateUsr(username) {
   let reg = username.match(/[a-z0-9_]+/)
   reg = reg ? reg.join('') : 0
   return reg === username && username.length > 3 && username.length < 17
 }