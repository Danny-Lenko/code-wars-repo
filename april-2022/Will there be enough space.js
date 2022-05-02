"use strict"


function enough(cap, on, wait) {
  const dif = on + wait - cap;
  return (dif > 0) ? dif : 0
}
