"use strict"


function sumMix(x){
  return x.map(num=>+num).reduce((a,b)=>a+b,0);
}
