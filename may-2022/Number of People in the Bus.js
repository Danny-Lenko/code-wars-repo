"use strict"

var number = function(busStops){
   return busStops.map(stop => stop[0] - stop[1]).reduce((a,b)=>a+b)
 }