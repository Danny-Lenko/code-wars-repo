"use strict"

function removeUrlAnchor(url){
   let regex = url.match(/.*?#/g)
   if (!regex) return url
   regex = regex[0]
   return regex.slice(0, regex.length-1)
 }